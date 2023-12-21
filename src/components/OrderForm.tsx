import { useState } from "react";
import { OrderData } from "../data/client";
import Input from "./shared/Input";
import SelectInput from "./shared/SelectInput";
import Button from "./shared/Button";
import { addNewOrder } from "../state/order-slice";
import { useDispatch } from "react-redux";

type OrderFormProps = {
  onConfirm: () => void;
};

const initialValue: OrderData = {
  id: "",
  total: "",
  currency: "EUR",
  quantity: "",
  status: "New",
  date: "",
};

const OrderForm = ({ onConfirm }: OrderFormProps) => {
  const [orderData, setOrderData] = useState<OrderData>(initialValue);

  const dispatch = useDispatch();

  const isValid =
    orderData.id && orderData.total && orderData.quantity && orderData.status && orderData.date;

  const confirmHandle = () => {
    dispatch(addNewOrder(orderData));
    onConfirm();
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div className="w-1/3 text-xs-plus px-4">Order ID</div>
        <Input
          type="number"
          value={orderData.id}
          placeholder="Order ID"
          onChange={(value) => setOrderData((state) => ({ ...state, id: value }))}
        />
      </div>

      <div className="flex justify-between items-center">
        <div className="w-1/3 text-xs-plus px-4">Order date</div>
        <Input
          type="datetime-local"
          value={orderData.date}
          placeholder="Order date"
          onChange={(value) =>
            setOrderData((state) => {
              return { ...state, date: value };
            })
          }
        />
      </div>

      <div className="flex justify-between items-center">
        <div className="w-1/3 text-xs-plus px-4">Order total</div>
        <Input
          type="number"
          value={orderData.total}
          placeholder="Order total"
          onChange={(value) => setOrderData((state) => ({ ...state, total: value }))}
        />
      </div>

      <div className="flex justify-between items-center">
        <div className="w-1/3 text-xs-plus px-4">Quantity</div>
        <Input
          type="number"
          value={orderData.quantity}
          placeholder="Quantity"
          onChange={(value) => setOrderData((state) => ({ ...state, quantity: value }))}
        />
      </div>

      <div className="flex justify-between items-center">
        <div className="w-1/3 text-xs-plus px-4">Status</div>
        <SelectInput<OrderData["status"]>
          value={orderData.status}
          options={["Delivered", "In transit", "New"]}
          placeholder="Status"
          onChange={(value) => setOrderData((state) => ({ ...state, status: value }))}
        />
      </div>

      <div className="mt-2 flex justify-end">
        <Button disabled={!isValid} onClick={confirmHandle} title="Add order" />
      </div>
    </div>
  );
};

export default OrderForm;
