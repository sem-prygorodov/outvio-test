import Input from "../../shared/Input";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { fillOrderForm } from "../../../state/order-form-slice";

export const OrderDate = () => {
  const orderDate = useSelector((state: RootState) => state.order.form.date);
  const dispatch = useDispatch();

  return (
    <Input
      type="datetime-local"
      value={orderDate}
      placeholder="Order date"
      onChange={(value) => dispatch(fillOrderForm({ date: value }))}
    />
  );
};
