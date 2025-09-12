const reverse = require("./reverse");

/*
=====================================
Test Cases using Jest
Do NOT modify the test code below.
=====================================
*/

describe("reverse", () => {
  test("should return [4, 3, 2, 1] for [1, 2, 3, 4]", () => {
    expect(reverse([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
  });

  test("should return [4, 3, 2, 9, 9] for [9, 9, 2, 3, 4]", () => {
    expect(reverse([9, 9, 2, 3, 4])).toEqual([4, 3, 2, 9, 9]);
  });

  test("should return [] for []", () => {
    expect(reverse([])).toEqual([]);
  });

  test("should return ['b', 'a'] for ['a', 'b']", () => {
    expect(reverse(['a', 'b'])).toEqual(['b', 'a']);
  });

  test("should not modify the original array", () => {
    const arr = [1, 2, 3];
    const reversed = reverse(arr);
    expect(arr).toEqual([1, 2, 3]);
    expect(reversed).toEqual([3, 2, 1]);
  });
});
