import Button from "../shared/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { addNewOrder } from "../../state/order-slice";

export const AddNewOrderButton = ({ onConfirm }: { onConfirm: () => void }) => {
  const orderData = useSelector((state: RootState) => state.order.form);
  const allOrders = useSelector((state: RootState) => state.orderTable.orders);
  const dispatch = useDispatch();

  const isValid =
    orderData.id && orderData.total && orderData.quantity && orderData.status && orderData.date;

  const confirmHandle = () => {
    if (allOrders.some((x) => x.id === orderData.id)) {
      alert("You can't add an order with existing id");
    } else {
      dispatch(addNewOrder(orderData));
      onConfirm();
    }
  };

  return (
    <div className="mt-2 flex justify-end">
      <Button disabled={!isValid} onClick={confirmHandle} title="Add order" />
    </div>
  );
};
