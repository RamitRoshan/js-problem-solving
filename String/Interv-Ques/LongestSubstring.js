/*
Longest Substring Without Repeating Characters

Input:
str = "abcabcbb"

Output:
"abc" (length = 3)

A substring is a continuous part of a string.

So for "abcabcbb":
"abc" ✅ (continuous)
"bca" ✅
"cab" ✅
"acb" ❌ (not continuous, letters are skipped → this is a subsequence, not substring)
Think: you can only cut a piece, not rearrange or skip.
*/

function longestSubstring(str) {
    let maxLen = 0;
    let result = "";

    for (let i = 0; i < str.length; i++) {
        let seen = {};   // track chars for this substring
        let current = "";

        for (let j = i; j < str.length; j++) {
            let char = str[j];

            if (seen[char]) {
                break; // duplicate found → stop
            }

            seen[char] = true;
            current += char;

            if (current.length > maxLen) {
                maxLen = current.length;
                result = current;
            }
        }
    }

    return result;
}

console.log(longestSubstring("abcabcbb")); // "abc"