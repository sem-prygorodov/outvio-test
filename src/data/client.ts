import { Currency } from "../types";

const baseUrl = "https://outvio-dev-public1.s3.eu-central-1.amazonaws.com/json/";

export type OrderData = {
  id: string;
  total: string;
  currency: Currency;
  quantity: string;
  status: "New" | "In transit" | "Delivered";
  date: string;
};

const getOrders = async (): Promise<OrderData[]> => {
  try {
    const response = await fetch(baseUrl + "orders.json");

    const result: OrderData[] = await response.json();

    return result;
  } catch (error) {
    alert("Oops, something bad happened - please try again later.");
    console.log(error);

    return [];
  }
};

export { getOrders };
