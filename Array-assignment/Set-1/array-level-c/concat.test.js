const concat = require("./concat");

/*
=====================================
Test Cases using Jest
Do NOT modify the test code below.
=====================================
*/

describe("concat", () => {
  test("should return concatenated array for three arrays", () => {
    expect(concat([1, 2, 3], [4, 5], [6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  test("should handle many short arrays", () => {
    expect(concat([1], [2], [3], [4], [5], [6], [7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  test("should merge two arrays correctly", () => {
    expect(concat([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
  });

  test("should return the same array if only one array is passed", () => {
    expect(concat([4, 4, 4, 4, 4])).toEqual([4, 4, 4, 4, 4]);
  });

  test("should return empty array when no arrays are passed", () => {
    expect(concat()).toEqual([]);
  });
});
