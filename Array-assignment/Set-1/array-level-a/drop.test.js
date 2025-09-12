const drop = require("./drop");

/*
=====================================
Test Cases using Jest
Do NOT modify the test code below.
=====================================
*/

describe("drop", () => {
  test("should return [2, 3] for ([1, 2, 3], 1)", () => {
    expect(drop([1, 2, 3], 1)).toEqual([2, 3]);
  });

  test("should return [3] for ([1, 2, 3], 2)", () => {
    expect(drop([1, 2, 3], 2)).toEqual([3]);
  });

  test("should return [] for ([1, 2, 3], 5)", () => {
    expect(drop([1, 2, 3], 5)).toEqual([]);
  });

  test("should return [1, 2, 3] for ([1, 2, 3], 0)", () => {
    expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
  });

  test("should handle empty array", () => {
    expect(drop([], 2)).toEqual([]);
  });
});
