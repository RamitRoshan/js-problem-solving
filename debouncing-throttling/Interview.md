## Q). What happens if we don’t use debounce/throttle ?
<br>
ans:  Without debouncing or throttling, too many function calls can happen, leading to performance issues and unnecessary API requests.
<br>

- Too many function calls → performance issues + unnecessary API calls.


## Q). “How does debouncing help backend ?” <br>

ans: It reduces the number of API requests hitting the server,  <br> which improves backend performance and reduces load.


## Q). When would you use Debouncing ?
ans: 

I would use debouncing in scenarios like **search inputs** where I want to **avoid multiple API calls while the user is typing.**

## Q). When would you use Throttling?
ans:

I would use throttling in **scroll** or **resize events** to improve performance by **limiting how often the function runs.**


## Q). Difference between Debouncing and Throttling ?
ans:

Debouncing **waits** until the user stops **triggering the event,** <br>
while throttling limits the execution to **once in a fixed interval.**