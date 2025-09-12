const minMax = require("./minMax");

/*
=====================================
Test Cases using Jest
Do NOT modify the test code below.
=====================================
*/

describe("minMax", () => {
  test("should return [1, 5] for [1, 2, 3, 4, 5]", () => {
    expect(minMax([1, 2, 3, 4, 5])).toEqual([1, 5]);
  });

  test("should return [5, 2334454] for [2334454, 5]", () => {
    expect(minMax([2334454, 5])).toEqual([5, 2334454]);
  });

  test("should return [1, 1] for [1]", () => {
    expect(minMax([1])).toEqual([1, 1]);
  });

  test("should return [-5, 5] for [-5, 0, 5]", () => {
    expect(minMax([-5, 0, 5])).toEqual([-5, 5]);
  });

  test("should return [3, 3] for [3, 3, 3]", () => {
    expect(minMax([3, 3, 3])).toEqual([3, 3]);
  });
});
