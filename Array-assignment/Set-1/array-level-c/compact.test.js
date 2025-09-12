const compact = require("./compact");

/*
=====================================
Test Cases using Jest
Do NOT modify the test code below.
=====================================
*/

describe("compact", () => {
  test("should remove all falsey values from [0, 1, false, 2, '', 3]", () => {
    expect(compact([0, 1, false, 2, "", 3])).toEqual([1, 2, 3]);
  });

  test("should return an empty array when all values are falsey", () => {
    expect(compact([false, null, 0, "", undefined, NaN])).toEqual([]);
  });

  test("should return the same array if all values are truthy", () => {
    expect(compact([1, "hello", true, {}, []])).toEqual([1, "hello", true, {}, []]);
  });

  test("should filter a mixed array correctly", () => {
    expect(compact(["a", "", 0, "b", NaN, "c", false])).toEqual(["a", "b", "c"]);
  });

  test("should return an empty array for an empty input", () => {
    expect(compact([])).toEqual([]);
  });
});
