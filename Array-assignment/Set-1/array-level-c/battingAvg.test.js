const battingAvg = require("./battingAvg");

/*
=====================================
Test Cases using Jest
Do NOT modify the test code below.
=====================================
*/

describe("battingAvg", () => {
  test("should return .286 for sample 1", () => {
    expect(battingAvg([[0, 0], [1, 3], [2, 2], [0, 4], [1, 5]])).toBe(".286");
  });

  test("should return .350 for sample 2", () => {
    expect(battingAvg([[2, 5], [2, 3], [0, 3], [1, 5], [2, 4]])).toBe(".350");
  });

  test("should return .273 for sample 3", () => {
    expect(battingAvg([[2, 3], [1, 5], [2, 4], [1, 5], [0, 5]])).toBe(".273");
  });

  test("should return .000 if total at-bats are 0", () => {
    expect(battingAvg([[0, 0], [0, 0], [0, 0]])).toBe(".000");
  });

  test("should correctly round to nearest thousandth", () => {
    expect(battingAvg([[1, 3], [2, 3], [1, 3]])).toBe(".444"); // 4 hits / 9 at-bats
  });
});
