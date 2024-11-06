function greet() {
  console.log(`Hello, my name is ${this.name}`);
}

const user = { name: "Bob" };

greet.call(user); // Output: Hello, my name is Bob
greet.apply(user); // Output: Hello, my name is Bob

const boundGreet = greet.bind(user);
boundGreet(); // Output: Hello, my name is Bob
