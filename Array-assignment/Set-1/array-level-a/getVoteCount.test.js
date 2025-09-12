const getVoteCount = require("./getVoteCount");

/*
=====================================
Test Cases using Jest
Do NOT modify the test code below.
=====================================
*/

describe("getVoteCount", () => {
  test("should return 13 for { upvotes: 13, downvotes: 0 }", () => {
    expect(getVoteCount({ upvotes: 13, downvotes: 0 })).toBe(13);
  });

  test("should return -31 for { upvotes: 2, downvotes: 33 }", () => {
    expect(getVoteCount({ upvotes: 2, downvotes: 33 })).toBe(-31);
  });

  test("should return 0 for equal votes", () => {
    expect(getVoteCount({ upvotes: 132, downvotes: 132 })).toBe(0);
  });

  test("should return 5 for { upvotes: 10, downvotes: 5 }", () => {
    expect(getVoteCount({ upvotes: 10, downvotes: 5 })).toBe(5);
  });

  test("should handle large values", () => {
    expect(getVoteCount({ upvotes: 1000000, downvotes: 1 })).toBe(999999);
  });
});
