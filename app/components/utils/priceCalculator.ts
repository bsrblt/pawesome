const calculatePrice = (
  totalAmount: number,
  discount: number,
  shippingCost: number
) => {
  const discountAmount = totalAmount * discount;
  const discountedTotal = totalAmount - discountAmount;
  const finalTotal = discountedTotal + shippingCost;

  return {
    finalTotal: finalTotal.toFixed(2),
    discountAmount: discountAmount.toFixed(2),
    applyShippingCost: shippingCost.toFixed(2),
  };
};

export default calculatePrice;
