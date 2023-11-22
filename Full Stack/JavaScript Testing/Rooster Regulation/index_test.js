const assert = require("assert");
const Rooster = require("../index");

describe("Rooster", () => {
  describe(".announceDawn", () => {
    it("returns a rooster call", () => {
      //Setup
      const expected = "moo!";

      //Exercise
      const actual = Rooster.announceDawn();

      //Verify
      assert.strictEqual(actual, expected);
      //Teardown
    });
  });
  describe(".timeAtDawn", () => {
    it("returns its argument as a string", () => {
      //Setup
      const hour = 8;
      const expected = "8";

      //Exercise
      const actual = Rooster.timeAtDawn(hour);

      //Verify
      assert.strictEqual(actual, expected);
    });

    it("throws an error if passed a number less than 0", () => {
      //Setup
      const invalidHour = -1;
      //Exercise and Verify
      assert.throws(() => {
        Rooster.timeAtDawn(invalidHour);
      }, RangeError);
      //Teardown(optional)
    });

    it("throws an error if passed a number greater than 23", () => {
      //Setup
      const invalidHour = 24;
      //Exercise and Verify
      assert.throws(() => {
        Rooster.timeAtDawn(invalidHour);
      }, RangeError);
      //Teardown(optional)
    });
  });
});
