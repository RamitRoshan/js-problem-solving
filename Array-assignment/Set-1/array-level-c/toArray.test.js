const toArray = require("./toArray");

/*
=====================================
Test Cases using Jest
Do NOT modify the test code below.
=====================================
*/

describe("toArray", () => {
  test("should convert { a: 1, b: 2 } to [['a', 1], ['b', 2]]", () => {
    expect(toArray({ a: 1, b: 2 })).toEqual([["a", 1], ["b", 2]]);
  });

  test("should convert { shrimp: 15, tots: 12 } to [['shrimp', 15], ['tots', 12]]", () => {
    expect(toArray({ shrimp: 15, tots: 12 })).toEqual([["shrimp", 15], ["tots", 12]]);
  });

  test("should return empty array for empty object", () => {
    expect(toArray({})).toEqual([]);
  });

  test("should handle numeric values", () => {
    expect(toArray({ x: 0, y: -10 })).toEqual([["x", 0], ["y", -10]]);
  });

  test("should handle string values", () => {
    expect(toArray({ name: "Alice", city: "Wonderland" })).toEqual([
      ["name", "Alice"],
      ["city", "Wonderland"]
    ]);
  });
});
