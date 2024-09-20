// utils.js - Modified version in feature-Login branch

function formatCurrency(amount, currency = 'USD') {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    });
    return formatter.format(amount);
  }
  
  module.exports = { formatCurrency };