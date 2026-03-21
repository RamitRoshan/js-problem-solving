function throttle(fn, delay){
     let lastCall = 0;

     return function(...args){
        const now = Date.now();
        if(now - lastCall < delay){
            return;
        }
        lastCall = now;
        return fn(...args);
    }
};

function sendChatMessage(message){
    console.log(`Sending Message`, message);
}

//in the interval of 2 second we can send message
const sendChatMessageWithSlowMode = throttle(sendChatMessage, 2 * 1000);

//enable slow mode, i.e in the time interval of 2 second a user can message 
sendChatMessageWithSlowMode("Hi"); 
sendChatMessageWithSlowMode("Hlo"); 
sendChatMessageWithSlowMode("Hlo ji"); 
sendChatMessageWithSlowMode("Hlo ji ");
sendChatMessageWithSlowMode("Where is our freelance client"); 