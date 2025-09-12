const tuckIn = require("./tuckIn");

/*
=====================================
Test Cases using Jest
Do NOT modify the test code below.
=====================================
*/

describe("tuckIn", () => {
  test("should insert [2-9] into [1, 10]", () => {
    expect(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  test("should insert [45, 75, 35] into [15, 150]", () => {
    expect(tuckIn([15, 150], [45, 75, 35])).toEqual([15, 45, 75, 35, 150]);
  });

  test("should insert nested arrays properly", () => {
    expect(tuckIn([[1, 2], [5, 6]], [[3, 4]])).toEqual([[1, 2], [3, 4], [5, 6]]);
  });

  test("should handle empty second array", () => {
    expect(tuckIn([1, 2], [])).toEqual([1, 2]);
  });

  test("should handle one-element arr2", () => {
    expect(tuckIn(["start", "end"], ["middle"])).toEqual(["start", "middle", "end"]);
  });
});
