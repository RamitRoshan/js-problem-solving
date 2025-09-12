/*
=====================================
Assignment: Upvotes vs Downvotes
=====================================

Given an object containing counts of both upvotes and downvotes, 
return what vote count should be displayed.

This is calculated by subtracting downvotes from upvotes.

Function Signature:
function getVoteCount(votes): number

Examples:
getVoteCount({ upvotes: 13, downvotes: 0 }) => 13
getVoteCount({ upvotes: 2, downvotes: 33 }) => -31
getVoteCount({ upvotes: 132, downvotes: 132 }) => 0

Hints:
- Access the `upvotes` and `downvotes` properties from the input object.
- Subtract downvotes from upvotes and return the result.

Step-by-Step Algorithm:
1. Read the value of `votes.upvotes`.
2. Read the value of `votes.downvotes`.
3. Subtract `downvotes` from `upvotes`.
4. Return the result.
*/

function getVoteCount(votes) {
    // Your code here
    
}
  
module.exports = getVoteCount;
  