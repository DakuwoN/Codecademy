const Calculate = {
  factorial(num) {
    if (num === 0) {
      return 1;
    }
    return num <= 1 ? 1 : num * Calculate.factorial(num - 1);
    // for (let i = num - 1; i >= 1; i--) {
    //   num = num * i
    // }
    // return num;
  },
};

module.exports = Calculate;
