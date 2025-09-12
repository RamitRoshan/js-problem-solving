const seriesResistance = require("./seriesResistance");

/*
=====================================
Test Cases using Jest
Do NOT modify the test code below.
=====================================
*/

describe("seriesResistance", () => {
  test("should return '15 ohms' for [1, 5, 6, 3]", () => {
    expect(seriesResistance([1, 5, 6, 3])).toBe("15 ohms");
  });

  test("should return '25.5 ohms' for [16, 3.5, 6]", () => {
    expect(seriesResistance([16, 3.5, 6])).toBe("25.5 ohms");
  });

  test("should return '1.0 ohm' for [0.5, 0.5]", () => {
    expect(seriesResistance([0.5, 0.5])).toBe("1.0 ohm");
  });

  test("should return '0 ohms' for []", () => {
    expect(seriesResistance([])).toBe("0 ohms");
  });

  test("should return '1 ohm' for [1]", () => {
    expect(seriesResistance([1])).toBe("1 ohm");
  });
});
