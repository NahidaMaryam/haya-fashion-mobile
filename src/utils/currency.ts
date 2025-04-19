
// Exchange rate from USD to INR (this is a simplified example, in production you'd want to use a real-time exchange rate API)
const USD_TO_INR_RATE = 83.22; // Example fixed rate

export const convertUSDtoINR = (usdAmount: number): number => {
  return usdAmount * USD_TO_INR_RATE;
};

export const formatINR = (amount: number): string => {
  return `₹${amount.toFixed(2)}`;
};
