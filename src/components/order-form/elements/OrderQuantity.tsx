import Input from "../../shared/Input";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { fillOrderForm } from "../../../state/order-form-slice";

export const OrderQuantity = () => {
  const quantity = useSelector((state: RootState) => state.order.form.quantity);
  const dispatch = useDispatch();

  return (
    <Input
      type="number"
      value={quantity}
      placeholder="Quantity"
      onChange={(value) => dispatch(fillOrderForm({ quantity: value }))}
    />
  );
};
