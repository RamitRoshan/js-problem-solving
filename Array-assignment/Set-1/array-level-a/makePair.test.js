const makePair = require("./makePair");

/*
=====================================
Test Cases using Jest
Do NOT modify the test code below.
=====================================
*/

describe("makePair", () => {
  test("should return [1, 2]", () => {
    expect(makePair(1, 2)).toEqual([1, 2]);
  });

  test("should return [51, 21]", () => {
    expect(makePair(51, 21)).toEqual([51, 21]);
  });

  test("should return [512124, 215]", () => {
    expect(makePair(512124, 215)).toEqual([512124, 215]);
  });

  test("should return ['hello', 'world']", () => {
    expect(makePair("hello", "world")).toEqual(["hello", "world"]);
  });

  test("should handle different types like [true, null]", () => {
    expect(makePair(true, null)).toEqual([true, null]);
  });
});
