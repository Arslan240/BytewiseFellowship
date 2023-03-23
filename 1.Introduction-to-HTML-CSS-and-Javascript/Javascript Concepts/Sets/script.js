import {data} from '../../../data.js'

const getUniqueNames = (data)=>{
    const persons = data.map(person => person.name)
    const uniquePersons = [...new Set(persons)]

    return uniquePersons; 
}

console.log("persons: ", data);
console.log("unique Persons: ", getUniqueNames(data))