const countTrue = require("./countTrue");

/*
=====================================
Test Cases using Jest
Do NOT modify the test code below.
=====================================
*/

describe("countTrue", () => {
  test("should return 2 for [true, false, false, true, false]", () => {
    expect(countTrue([true, false, false, true, false])).toBe(2);
  });

  test("should return 0 for [false, false, false, false]", () => {
    expect(countTrue([false, false, false, false])).toBe(0);
  });

  test("should return 0 for empty array", () => {
    expect(countTrue([])).toBe(0);
  });

  test("should return 4 for [true, true, true, true]", () => {
    expect(countTrue([true, true, true, true])).toBe(4);
  });

  test("should return 1 for [false, true, false]", () => {
    expect(countTrue([false, true, false])).toBe(1);
  });
});
