var assert = require("assert");
var Calculate = require("../index.js");

describe("Calculate", () => {
  describe(".factorial", () => {
    it("should return the factorial of 5", () => {
      // Setup
      const input = 5;
      const expected = 120;
      // Exercise
      const result = Calculate.factorial(input);
      // Verify
      assert.strictEqual(result, expected);
      // assert.equal(Calculate.factorial(5, 120))
    });

    it("should return the factorial of 3", () => {
      // Setup
      const input = 3;
      const expected = 6;
      // Exercise
      const result = Calculate.factorial(input);
      // Verify
      assert.strictEqual(result, expected);
    });

    it("returns 1 when you pass in 0.", () => {
      // Setup
      const input = 0;
      const expected = 1;

      // Exercise
      const result = Calculate.factorial(input);
      // Verify
      assert.strictEqual(result, expected);
    });
  });
});
