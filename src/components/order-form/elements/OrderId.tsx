import Input from "../../shared/Input";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { fillOrderForm } from "../../../state/order-form-slice";

export const OrderId = () => {
  const orderId = useSelector((state: RootState) => state.order.form.id);
  const dispatch = useDispatch();

  return (
    <Input
      type="number"
      value={orderId}
      placeholder="Order ID"
      onChange={(value) => dispatch(fillOrderForm({ id: value }))}
    />
  );
};
