import { OrderData } from "../../../data/client";
import SelectInput from "../../shared/SelectInput";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { fillOrderForm } from "../../../state/order-form-slice";

export const OrderStatus = () => {
  const status = useSelector((state: RootState) => state.order.form.status);
  const dispatch = useDispatch();

  return (
    <SelectInput<OrderData["status"]>
      value={status}
      options={["Delivered", "In transit", "New"]}
      placeholder="Status"
      onChange={(value) => dispatch(fillOrderForm({ status: value }))}
    />
  );
};
