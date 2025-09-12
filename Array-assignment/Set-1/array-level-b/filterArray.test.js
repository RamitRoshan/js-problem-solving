const filterArray = require("./filterArray");

/*
=====================================
Test Cases using Jest
Do NOT modify the test code below.
=====================================
*/

describe("filterArray", () => {
  test("should return [1, 2] for [1, 2, 'a', 'b']", () => {
    expect(filterArray([1, 2, "a", "b"])).toEqual([1, 2]);
  });

  test("should return [1, 0, 15] for [1, 'a', 'b', 0, 15]", () => {
    expect(filterArray([1, "a", "b", 0, 15])).toEqual([1, 0, 15]);
  });

  test("should return [1, 2, 123] for [1, 2, 'aasf', '1', '123', 123]", () => {
    expect(filterArray([1, 2, "aasf", "1", "123", 123])).toEqual([1, 2, 123]);
  });

  test("should return empty array when input has only strings", () => {
    expect(filterArray(["a", "b", "c"])).toEqual([]);
  });

  test("should return original array when input has only numbers", () => {
    expect(filterArray([5, 10, 15])).toEqual([5, 10, 15]);
  });
});
