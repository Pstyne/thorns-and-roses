export const markupDistributorPrice = (price, markupPercentage) => {
  return parseFloat(price + (price * markupPercentage)).toFixed(2);
}