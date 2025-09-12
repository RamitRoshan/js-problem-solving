const canNest = require("./canNest");

/*
=====================================
Test Cases using Jest
Do NOT modify the test code below.
=====================================
*/

describe("canNest", () => {
  test("should return true for [1, 2, 3, 4] in [0, 6]", () => {
    expect(canNest([1, 2, 3, 4], [0, 6])).toBe(true);
  });

  test("should return true for [3, 1] in [4, 0]", () => {
    expect(canNest([3, 1], [4, 0])).toBe(true);
  });

  test("should return false for [9, 9, 8] in [8, 9]", () => {
    expect(canNest([9, 9, 8], [8, 9])).toBe(false);
  });

  test("should return false for [1, 2, 3, 4] in [2, 3]", () => {
    expect(canNest([1, 2, 3, 4], [2, 3])).toBe(false);
  });

  test("should return true for [5] in [1, 10]", () => {
    expect(canNest([5], [1, 10])).toBe(true);
  });
});
