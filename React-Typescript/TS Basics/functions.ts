// Typescript only enforces types at compile time and not at runtime. At the end the typescript compiles to js. Because browsers can only understand javascript.

function addNumbers(a:number,b:number): number{
    return a * b;
}

export default addNumbers;

export const addStrings = (str1: string, str2: string = ""): string => {
    return str1 + str2
}


// UNION Types ( | ) : Any of the type that qualify are ok for this, it's not exactly OR its a UNION type.

export const format = (title: string, param: string | number): string => {
    return `${title} ${param}`
}

// function which return nothing
export const printFormat = (title: string, param: string | number):void => {
    console.log(format(title, param))
}


// Function which returns a promise

export const fetchData = (url: string):Promise<string> => Promise.resolve("Data from server");


// Specifying some parameters and receiving all other parameters in an array
export function introduce (salutation: string, ...names: string[]): string {
    return `${salutation} ${names.join(', ')}`
}


//  TYPE ENFORCEMENT AT COMPILE TIME
export function getName(user: {first: string, last: string}): string {
    // Here in this line, we first optionally chain our dereferencing of user object so that on runtime if the user is null, we don't dereference it. And to return something usefull instead of undefined, we'll use nullish coallescing which means if left side is null OR undefined use what's on right side of ?? operator
    return `${user?.first ?? "First"} ${user?.last ?? "Last"}`
}