setTimeout(() => { console.log("Hola 3"); }, 0);
Promise.resolve().then(() => console.log("Hola 2"));
console.log("Hola 1");