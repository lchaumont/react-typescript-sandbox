class Person {
    firstName: string;
    lastName: string;

    constructor(fname:string,  lname:string) {
        this.firstName = fname;
        this.lastName = lname;
    }
}

const display = <T extends Person>(per: T): void => {
    console.log(`${ per.firstName} ${per.lastName}` );
}

const per = new Person("Bill", "Gates");

display(per); // Bill Gates
display("Bill Gates"); // Error