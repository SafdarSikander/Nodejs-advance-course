// node myFile.js

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

// New timers, tasks, operations are recorded from myFile.runContent() call
myFile.runContent();

function shouldContinue() {
  // check one: any pending setTimeout, setInterval, setImmediate?
  // check two: any pending OS tasks? like I/O and server listening to port?
  // check three: any pending long-running tasks? like a fs modules?
  return pendingTimers.length || pendingOSTasks.length || pendingOperations.length;
}

//Entire body executes in one 'tick'
while (shouldContinue()) {
  // 1) Node looks at pendingTimers and sees if any functions are ready to be called. setTimeout, setInterval, setImmediate
  // 2) Node looks at pendingOSTasks and pendingOperations and calls relevant callbacks
  // 3) Pause execution. Continue when... // most important
  // - a new pendingOSTask is done
  // - a new pendingOperation is done
  // - a timer is done

  //4) Look at pendingTimers. Call any setImmediate/callback

  //5) handle any 'close' events


}

// exit back to terminal
