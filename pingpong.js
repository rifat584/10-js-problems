const pingPong = (limit) => {
  if (typeof limit !== "number" || !!isNaN(limit)) {
    return "Please provide a valid number!";
  }
  for (let i = 1; i <= limit; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("PingPong");
    } else if (i % 3 === 0) {
      console.log("Ping");
    } else if (i % 5 === 0) {
      console.log("Pong");
    } else {
      console.log(i);
    }
  }
  return "all results are printed";
};

const result = pingPong(20);
console.log(result);
