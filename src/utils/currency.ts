import { Currency } from "../types";

const formatCurrency = (amount: string, currency: Currency) => {
  const format = () =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(parseInt(amount));

  switch (currency) {
    case "USD":
      return format();
    case "EUR":
      return format();

    default:
      return amount.toString();
  }
};

export { formatCurrency };
