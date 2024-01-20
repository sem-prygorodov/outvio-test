import Input from "../../shared/Input";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { fillOrderForm } from "../../../state/order-form-slice";

export const OrderTotal = () => {
  const total = useSelector((state: RootState) => state.order.form.total);
  const dispatch = useDispatch();

  return (
    <Input
      type="number"
      value={total}
      placeholder="Order total"
      onChange={(value) => dispatch(fillOrderForm({ total: value }))}
    />
  );
};
