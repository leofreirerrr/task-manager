// class Person {
//   constructor(firstName, lastName, age) {
//     (this.firstName = firstName),
//     (this.lastName = lastName),
//     (this.age = age);
//   }
//   getFullName() {
//     console.log(`${this.firstName} ${this.lastName}`);
//   }
// }

// const person = new Person("jane", "Doe", 40);
// person.getFullName();

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   speak() {
//     console.log(`${this.name} made some noise`);
//   }
// }

// class Dog extends Animal {
//   constructor(name) {
//     super(name);
//   }

//   speak() {
//     console.log(`${this.name} barked`)
//   }
// }

// const animal = new Animal("Simba");
// const dog = new Dog ("Bob");

// animal.speak();
// dog.speak();

const addTaskButton = document.querySelector("#btn-add-task");
const inputTask = document.querySelector("type-new-task");

addTaskButton.addEventListener("click", function (e) {
  e.preventDefault();

  const nameTask = inputTask.value;
  console.log(nameTask);
});
