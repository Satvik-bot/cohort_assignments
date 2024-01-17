function countUp(counter, limit) {
    console.log(counter);
    if (counter < limit) {
      setTimeout(() => countUp(counter + 1, limit), 1000);
    }
  }
  
  // Start the counter from 1 up to 5
  countUp(1, 4);