const pushElementToArrayGeneric = <T>(arr: T[], element: T) => {
    arr.push(element);
};

const numbersGeneric = [1, 2, 3];
const stringsGeneric = ["a", "b", "c"];

pushElementToArrayGeneric(numbersGeneric, 4); // OK
pushElementToArrayGeneric(stringsGeneric, "d"); // OK

pushElementToArrayGeneric(numbersGeneric, "d"); // Error
pushElementToArrayGeneric(stringsGeneric, 4); // Error