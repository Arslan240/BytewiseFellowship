import {data} from "../../../data.js";

// map returns a new array with the data we return from callback function passed to map
const getNames = (data) => {
  const names = data.map((person) => {
    return person.name;
  });

  return names;
};

// filter doesn't create a new array, it just returns the data where the condition is true inside callback function passed to filter.
const getPerson = (name) => {
  return data.filter((person) => {
    return person.name === name;
  });
};

console.log(getNames(data));
console.log(getPerson("John"));
