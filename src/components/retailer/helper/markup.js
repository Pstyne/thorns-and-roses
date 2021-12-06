import { markupDistributorPrice } from "../../distributor/helper/markup";

export const markupRetailPrice = (price, markupPercentage, distributorMarkup) => {
  return parseFloat(markupDistributorPrice(price, distributorMarkup) + (price * markupPercentage)).toFixed(2);
}