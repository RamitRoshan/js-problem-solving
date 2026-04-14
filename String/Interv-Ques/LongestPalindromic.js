/*

Longest Palindromic Substring

Q1
Input: "babad"
Output: "bab"
(also "aba" is valid)

Q2
Input: "cbbd"
Output: "bb"

Q3
Input: "forgeeksskeegfor"
Output: "geeksskeeg"
*/

function longestPalindrome(str) {
    let longest = "";

    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            let substr = str.substring(i, j + 1);

            // check palindrome
            let reversed = substr.split("").reverse().join("");

            if (substr === reversed && substr.length > longest.length) {
                longest = substr;
            }
        }
    }

    return longest;
}

console.log(longestPalindrome("babad")); // "bab" or "aba"
console.log(longestPalindrome("cbbd")); // "bb"
console.log(longestPalindrome("a")); // "a"
console.log(longestPalindrome("forgeeksskeegfor")); // "geeksskeeg"


//Time Complexity: O(n3)