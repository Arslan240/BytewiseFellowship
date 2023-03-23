const array = ["city", "shehzore", "HS"];
const person = {
  name: "Emilly",
  age: 34,
  city: "Washington",
  job: "pharmacist",
};

// destructuring an array
const [car, truck, suv] = array;

//destructuring an object
function printPerson(person) {
  const { name, age, city, job } = person;
  console.log(name, age, city, job);
}

console.log("Destructuring an array");
console.log(car, truck, suv);

console.log("Destructuring an object");
printPerson(person);

// spread operator spreads out all the elements and we can also add onto it if we want to.
console.log([...array, "tez raftar"]);
// in spread operator of objects we can not only override but also add new properties.
console.log({ ...person, name: "Lillie", salary: 34000 });
