import { useEffect } from "react";
import { OrderData } from "../data/client";
import Input from "./shared/Input";
import SelectInput from "./shared/SelectInput";
import Button from "./shared/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { fillOrderForm, resetToInitial } from "../state/order-form-slice";
import { addNewOrder } from "../state/order-slice";

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
    <div className="flex flex-col gap-4">
      {formItems.map(({ title, element }) => (
        <div className="flex justify-between items-center">
          <div className="w-1/3 text-xs-plus px-4">{title}</div>
          {element}
        </div>
      ))}
      <AddNewOrderButton onConfirm={onConfirm} />
    </div>
  );
};

const OrderId = () => {
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

const OrderDate = () => {
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

const OrderTotal = () => {
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

const OrderQuantity = () => {
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
const OrderStatus = () => {
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

const AddNewOrderButton = ({ onConfirm }: { onConfirm: () => void }) => {
  const orderData = useSelector((state: RootState) => state.order.form);

  const dispatch = useDispatch();

  const isValid =
    orderData.id && orderData.total && orderData.quantity && orderData.status && orderData.date;

  const confirmHandle = () => {
    dispatch(addNewOrder(orderData));
    onConfirm();
  };
  return (
    <div className="mt-2 flex justify-end">
      <Button disabled={!isValid} onClick={confirmHandle} title="Add order" />
    </div>
  );
};
export default OrderForm;
