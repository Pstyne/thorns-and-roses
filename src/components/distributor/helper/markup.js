export const markupPrice = (price, markupPercentage) => {
  return parseFloat(price + (price * markupPercentage)).toFixed(2);
}