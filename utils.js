// utils.js - Initial version in master branch

function formatCurrency(amount) {
    return `$${amount.toFixed(2)}`;
  }
  
  module.exports = { formatCurrency };