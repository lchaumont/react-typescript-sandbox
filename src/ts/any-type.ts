const pushElementToArray = (arr: any[], element: any) => {
    arr.push(element);
};

const numbers = [1, 2, 3];
const strings = ["a", "b", "c"];

pushElementToArray(numbers, 4); // OK
pushElementToArray(strings, "d"); // OK

pushElementToArray(numbers, "d"); // OK
pushElementToArray(strings, 4); // OK

console.log(numbers); // [1, 2, 3, 4, "d"]
console.log(strings); // ["a", "b", "c", "d", 4]
