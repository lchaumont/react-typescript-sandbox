function productCodeToUpperCase(code: string) {
    return code.toLocaleUpperCase();
}

console.log(productCodeToUpperCase("test")); // OK
console.log(productCodeToUpperCase(0)); // Error
console.log(productCodeToUpperCase(true)); // Error
console.log(productCodeToUpperCase(null)); // Error
console.log(productCodeToUpperCase(undefined)); // Error