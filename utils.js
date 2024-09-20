// utils.js - Modified version in feature-Payment branch

function formatCurrency(amount, currency = 'USD') {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    return formatter.format(amount);
  }
  
  function validatePaymentAmount(amount) {
    return amount > 0 && amount <= 1000000; // Assuming a maximum payment of 1 million
  }
  
  module.exports = { formatCurrency, validatePaymentAmount };