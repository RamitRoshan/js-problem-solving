# Throttling

## Defination

Throttling is a technique where a function is executed at most once in a fixed time interval, even if the event keeps triggering.

**Explanation:**

- Event keeps firing → function runs at fixed intervals
- Even if multiple requests are made → only one is processed per interval

- Remaining requests are ignored (or delayed depending on implementation)


## Simple Analogy

**A little girl keeps asking her mom for food:**

- Mom says: “Food will be ready in 10 minutes”
- The girl keeps asking every 1–2 minutes
- Mom ignores all requests during those 10 minutes
- At exactly 10 minutes → food is given

**👉 Key idea:**

Within a fixed time window (10 mins), all repeated requests are ignored, and only one response is given at the end.(after 10 mins).

1. Fixed time window
2. Ignores extra calls within interval



- In youtube when we do comments on Live and there slow mode is enabled, as we commnets then chat box disabled for 60 sec and after 60 seconds we will be able to write messages.. <br> so during 60 sec as many messages as you want to write but the server will ignore your messages. <br> 
**This is where throttling works/comes.**

 


**Note:**

- In debouncing, the timer resets on every call.
- In throttling, there is a fixed interval and calls inside it are ignored.

<br>

- 👉 **Debouncing is best for API optimization**
- 👉 **Throttling is best for UI performance**