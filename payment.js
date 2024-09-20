// payment.js - Initial version in master branch

function processPayment(amount) {
    // Simple payment processing logic
    if (amount > 0) {
      console.log(`Processing payment of $${amount}`);
      return true;
    }
    return false;
  }
  
  module.exports = { processPayment };