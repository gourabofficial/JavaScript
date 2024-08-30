class Parent {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    // Method to display the parent's details
    displayDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Salary: ${this.salary}`);
    }

    increaseSalary(percentage) {
        this.salary += this.salary * (percentage / 100);
        console.log(`Salary after increase: ${this.salary}`);
    }

    // Method to update the age
    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated Age: ${this.age}`);
    }
}

const parent1 = new Parent("John", 45, 50000);
parent1.displayDetails();
parent1.increaseSalary(10);
parent1.updateAge(46);
