var username = "Arslan";
var hasLoggedIn = true;
username += hasLoggedIn;
console.log(hasLoggedIn);
var myRegEx = /foo^s[*]/;
var names = "Arslan Jamil".split(" ");
console.log(names);
var myPerson = {
    first: "Arslan",
    last: "Jamil",
};
// objects as map
// Record<key, value>
var ids = {
    10: "a",
    20: "b"
};
ids[30] = "c";
if (ids[30] === "c") {
    console.log(ids[30]);
}
var out = [4, 6, 7].map(function (v) { return v * 10; });
console.log(out);
