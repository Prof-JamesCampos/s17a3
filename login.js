// login.js - Initial version in master branch

function authenticateUser(username, password) {
    // Simple authentication logic
    if (username === 'admin' && password === 'password123') {
      return true;
    }
    return false;
  }
  
  module.exports = { authenticateUser };