const stringLength = (string) => {
    const { length } = string.split('');
    if (length < 1) {
      const error = new Error();
      error.message = 'Not at least 1 char long!';
      throw error;
    } else if (length > 10) {
      const error = new Error();
      error.message = 'More than 10 chars long!';
      throw error;
    }
    return length;
  };
  
  module.exports = stringLength;
