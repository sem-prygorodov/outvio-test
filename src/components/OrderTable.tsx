import { useEffect, useState } from "react";
import CrossIcon from "../assets/icons/CrossIcon";
import Modal from "./shared/Modal";
import Input from "./shared/Input";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { loadOrders } from "../state/order-slice";
import { OrderData, getOrders } from "../data/client";
import Badge from "./shared/Badge";
import { formatCurrency } from "../utils/currency";
import OrderForm from "./order-form/OrderForm";
import ChevronIcon from "../assets/icons/ChevronIcon";
import ChevronSelectorIcon from "../assets/icons/ChevronSelectorIcon";
import { Pagination } from "./shared/Pagination";

export const ITEMS_PER_PAGE = 10;

type OrderingState = "desc" | "asc";

type SortableTableKey = keyof Omit<OrderData, "currency">;

const tableHeaderTitles: {
  [key in SortableTableKey]: string;
} = {
  id: "Order ID",
  date: "Order date",
  total: "Order total",
  quantity: "Quantity",
  status: "Status",
};

const tableSortHelper: {
  [key in SortableTableKey]: (value: string) => number | string;
} = {
  id: (value) => parseInt(value),
  date: (value) => +new Date(value),
  total: (value) => parseInt(value),
  quantity: (value) => parseInt(value),
  status: (value) => value,
};

const OrderTable = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [sorting, setSorting] = useState<{
    sortBy: SortableTableKey;
    orderBy: OrderingState;
  }>({ sortBy: "id", orderBy: "desc" });

  const orders = useSelector((state: RootState) => state.orderTable.orders);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      dispatch(loadOrders(await getOrders()));
    })();
  }, []);

  const ChevronButton = ({ sortBy }: { sortBy: SortableTableKey }) => {
    const handleSortingState = () => {
      setSorting({
        sortBy,
        orderBy: sorting.orderBy === "desc" ? "asc" : "desc",
      });
    };

    const isSortingColumnSelected = sorting.sortBy === sortBy;

    if (isSortingColumnSelected) {
      return (
        <div
          onClick={handleSortingState}
          className={`${sorting.orderBy === "desc" ? "rotate-180" : ""} cursor-pointer`}
        >
          <ChevronIcon />
        </div>
      );
    } else {
      return (
        <div onClick={handleSortingState} className="cursor-pointer text-gray-3">
          <ChevronSelectorIcon />
        </div>
      );
    }
  };

  // In reality date-fns or similar lib should be used
  const formatDate = (date: string) => {
    const createdDate = new Date(date);

    const formatedYear = new Intl.DateTimeFormat("en", {
      year: "numeric",
    }).format(createdDate);
    const formatedMonth = new Intl.DateTimeFormat("en", {
      month: "2-digit",
    }).format(createdDate);
    const formatedDay = new Intl.DateTimeFormat("en", {
      day: "2-digit",
    }).format(createdDate);

    return `${formatedDay}.${formatedMonth}.${formatedYear}`;
  };

  const filteredOrders = orders.filter((x) => {
    const searchLowerCased = search.toLowerCase().trim();

    return (
      x.id.toString().toLowerCase().includes(searchLowerCased) ||
      x.status.toLowerCase().includes(searchLowerCased)
    );
  });

  const sortedOrders = filteredOrders.sort((a, b) => {
    const applicableSortingFunction = tableSortHelper[sorting.sortBy];

    const sortableA = applicableSortingFunction(a[sorting.sortBy]);
    const sortableB = applicableSortingFunction(b[sorting.sortBy]);

    if (sortableA < sortableB) {
      return sorting.orderBy === "asc" ? -1 : 1;
    }

    if (sortableA > sortableB) {
      return sorting.orderBy === "asc" ? 1 : -1;
    }

    return 0;
  });

  const pagedOrders = sortedOrders.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);

  const searchHandler = (value: string): void => {
    setSearch(value);
    setPage(0);
  };

  return (
    <>
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-2">
        <span className="text-2xl font-bold">All orders</span>
        <div className="flex items-center space-x-2">
          <Input
            type="search"
            value={search}
            onChange={searchHandler}
            withSearchIcon
            placeholder="Search"
          />
          <Modal
            trigger={
              <div className="rotate-45 px-2">
                <CrossIcon />
              </div>
            }
            title="Add order"
            content={({ onClose }) => <OrderForm onConfirm={onClose} />}
          />
        </div>
      </div>

      <div className="h-[530px] mb-8">
        {!!pagedOrders.length && (
          <table className="w-full">
            <thead>
              <tr className="text-xs h-12">
                {Object.entries(tableHeaderTitles).map(([key, title]) => (
                  <th key={title} className="pb-4 w-1/5">
                    <div className="flex items-center justify-center space-x-2 select-none font-semibold">
                      <span>{title}</span>
                      <ChevronButton sortBy={key as SortableTableKey} />
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pagedOrders.map(({ id, date, total, quantity, status, currency }, index) => (
                <tr
                  key={`${id}-${index}`}
                  className="h-12 border-b border-gray-2 last:border-none 
                         text-xs-plus text-center"
                >
                  <td>{id}</td>
                  <td>{formatDate(date)}</td>
                  <td>{formatCurrency(total, currency)}</td>
                  <td>{quantity}</td>
                  <td>
                    <Badge title={status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {!pagedOrders.length && (
          <div className="flex items-center justify-center text-xs-plus">No orders found</div>
        )}
      </div>

      <Pagination onChange={setPage} selectedPage={page} totalItems={filteredOrders.length} />
    </>
  );
};

export default OrderTable;
