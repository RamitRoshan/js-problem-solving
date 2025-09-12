const getFirstValue = require("./getFirstValue");

/*
=====================================
Test Cases using Jest
Do NOT modify the test code below.
=====================================
*/

describe("getFirstValue", () => {
  test("should return 1 for [1, 2, 3]", () => {
    expect(getFirstValue([1, 2, 3])).toBe(1);
  });

  test("should return 80 for [80, 5, 100]", () => {
    expect(getFirstValue([80, 5, 100])).toBe(80);
  });

  test("should return -500 for [-500, 0, 50]", () => {
    expect(getFirstValue([-500, 0, 50])).toBe(-500);
  });

  test("should return 10 for [10]", () => {
    expect(getFirstValue([10])).toBe(10);
  });

  test("should return undefined for []", () => {
    expect(getFirstValue([])).toBe(undefined);
  });
});
