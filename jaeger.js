const compose = (...fns) => {
  return (arg) => {
    return fns.reduceRight((composed, f) => f(composed), arg);
  };
};

const double = x => x * 2;
const square = x => x * x;
const doubleSquare = compose(square, double);
console.log(doubleSquare(3)); // 36