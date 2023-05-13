let username = "Arslan"
let hasLoggedIn = true

username += hasLoggedIn

console.log(hasLoggedIn)

let myRegEx = /foo^s[*]/

const names: string[] = "Arslan Jamil".split(" ");

console.log(names)

interface Person {
    first: string,
    last: string
}

const myPerson: Person = {
    first: "Arslan",
    last: "Jamil",
}

// objects as map
// Record<key, value>
const ids: Record<number, string> = {
    10: "a",
    20: "b"
}

ids[30] = "c"

if(ids[30] === "c"){
    console.log(ids[30])
}

const out = [4,6,7].map((v) => v*10)

console.log(out)