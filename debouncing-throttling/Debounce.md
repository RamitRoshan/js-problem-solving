# Debouncing and Throttling


## Debouncing

## Problem Statement

When a user types something like **"Hard JS"** in search (e.g., Google), an API call can be triggered on every key press.

## Without Optimization (Bad Approach)

For each character typed, an API call is made:

- H → 1 API call
- HA → 1 API call
- HAR → 1 API call
- HARD → 1 API call
- HARD (space) → 1 API call
- HARD J → 1 API call
- HARD JS → 1 API call

**This leads to too many unnecessary API calls, which:**
1. Increases server load
2. Slows down performance
3. Is inefficient

## Better User Experience

**Instead of calling the API on every keystroke:**

> We cannot ask users to click a button after typing (bad UX ❌)

> We should provide auto-suggestions (good UX ✅)


## Optimized Approach

**Wait until the user pauses typing, then make the API call.**

**Example:**

User types:

- "HARD JS interview q"

- then completes → "HARD JS interview questions"

**Instead of many API calls, we can make:** <br>
**👉 Only 1–2 API calls**

<br>

<hr>

Here, when we write or type anything in **google** then it gives us **auto suggestions** for it. but here it will call multiple API for every character type. <br>
we can do like: we gave a **button** to user , once he type HARD JS on **google** then **press button**, it will going to search it. 
<br> but it's not a good user experience. 
<br> for better user experience we must have to give "auto suggestions"..

### Soluton: 
untill user is **typing** , don't do anything. <br>
when user stops like: "HArd JS" then `quickly call the APIs`.

<br>

<hr>

## Definition(**Debouncing**)

**Debouncing ensures that:**

The API call is made only after the user stops typing for a specific time.

**Key Idea:**

- If the user keeps typing, do nothing.

- If the user stops typing for X milliseconds, trigger API call.

- If the user types again before time ends → reset timer.
 

## Real-Life Story (Examples):

**A little girl wants chocolate 🍫**

- Mom says: “Stay silent for 10 minutes, then you’ll get chocolate.”

- Girl stays quiet for 6 minutes → speaks again ❌ → timer resets (again she has to keep quite for 10 min)

- Again quiet for 4 minutes → speaks ❌ → timer resets.

**👉 She must stay silent continuously for 10 minutes to get chocolate.**

## Analogy:

1. Speaking = user typing
2. 10 minutes = debounce delay
3. Chocolate = API call

**`Only when there is no interruption, action happens.`**


### Note:

- If user does not type for a specified time → API call happens

- If user types again before time ends → timer resets
 

 