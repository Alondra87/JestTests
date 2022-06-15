const capitalize = (string) => {
    if (typeof string === 'string') {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    throw new Error('No string given');
  }
  
  module.exports = capitalize;