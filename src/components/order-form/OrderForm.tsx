import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetToInitial } from "../../state/order-form-slice";
import { OrderId } from "./elements/OrderId";
import { OrderDate } from "./elements/OrderDate";
import { OrderTotal } from "./elements/OrderTotal";
import { OrderQuantity } from "./elements/OrderQuantity";
import { OrderStatus } from "./elements/OrderStatus";
import { AddNewOrderButton } from "./AddNewOrderButton";

type OrderFormProps = {
  onConfirm: () => void;
};

const OrderForm = ({ onConfirm }: OrderFormProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetToInitial());
  }, []);

  const formItems = [
    { title: "Order ID", element: <OrderId /> },
    { title: "Order date", element: <OrderDate /> },
    { title: "Order total", element: <OrderTotal /> },
    { title: "Quantity", element: <OrderQuantity /> },
    { title: "Status", element: <OrderStatus /> },
  ];

  return (
    <div className="flex flex-col space-y-4">
      {formItems.map(({ title, element }, index) => (
        <div
          key={`order-form-item-${title}-${index}`}
          className="flex justify-between items-center"
        >
          <div className="w-1/3 text-xs-plus px-4">{title}</div>
          {element}
        </div>
      ))}

      <AddNewOrderButton onConfirm={onConfirm} />
    </div>
  );
};

export default OrderForm;
