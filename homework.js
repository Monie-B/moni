class Hamster {
    constructor() {
        this.owner = "";
        this.name = "name";
        this.price = 15;
    }

    wheelRun() {
        console.log("squeak squeak");
    }

    eatFood() {
        console.log("nibble nibble");
    }

    getPrice() {
        return this.price;
    }
};

console.log(hamster);

class Person {
    constructor(name, age, height, weight, mood, hamsters, bankAccount) {
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
    }

    getName() {
        console.log(this.name);
    }

    getAge() {
        console.log(this.age);
    }

    getWeight() {
        console.log(this.weight);
    }

    greet("Hi, how are you " + Person.name());

    eat() {
        this.weight++;
        this.mood++;
    }

    excercise() {
        this.weight--;
    }

    ageUp() {
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankAccount += 10;
    }

    buyHamster(hamster) {
        this.mood++;
        this.bankAccount.getPrice();
    };
//test

const Timmy = new Person("Timmy", 5) {
    super(name, age, )
}

// class Timmy extends Person {
//     constructor(name, age, height, weight, mood, hamsters, bankAccount) {


//test