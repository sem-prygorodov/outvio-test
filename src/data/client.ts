import { Currency } from "../types";

const baseUrl =
  "https://outvio-dev-public1.s3.eu-central-1.amazonaws.com/json/";

type OrderDataDTO = {
  id: string;
  total: string;
  currency: string;
  quantity: string;
  status: string;
  date: string;
};

export type OrderData = {
  id: number;
  total: number;
  currency: Currency;
  quantity: number;
  status: "New" | "In transit" | "Delivered";
  date: string;
};

const getOrders = async (): Promise<OrderData[]> => {
  try {
    const response = await fetch(baseUrl + "orders.json");

    const result = (await response.json()) as OrderDataDTO[];

    return result.map((x) => ({
      id: parseInt(x.id),
      currency: x.currency as Currency,
      date: x.date,
      quantity: parseInt(x.quantity),
      status: x.status as OrderData["status"],
      total: parseFloat(x.total),
    }));
  } catch (error) {
    alert("Oops, something bad happened - please try again later.");
    console.log(error);

    return [];
  }
};

export { getOrders };
