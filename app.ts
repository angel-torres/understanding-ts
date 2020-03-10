console.log("Your code goes here!")

function add(num1: number, num2: number) {
    return num1 + num2;
};

const number1 = 1;
const number2 = 3;

const result = add(number1, number2);

// console.log("answer: ", result);

// This syntax is preffered over having to define each thing beforehand. This is because the typescript compiler infers what each thing will be whenever we define it.
const userObject = {
    name: "robert",
    age: 23,
    hobbies: ["Cooking", "Sports"],
}

// This syntax is not preferred
const userObject2: object = {
    name: "ramiro",
    age: 48
}

// This syntax is not preferred
const userObject3: {
    name: string;
    age: number;
} = {
    name: "ramiro",
    age: 48
}


// console.log(userObject);

// TUPLE


const userObject4: {
    name: string;
    age: number;
    role: [number, string]
} = {
    name: "angel",
    age: 98,
    role: [0, "author"]
}

userObject4.role[0] = 4;

console.log("role - ", userObject4.role[1])

// ENUM

enum Role { ADMIN, READ_ONLY, AUTHOR }

const enumUserObject = {
    name: "angel",
    age: 57,
    role: Role.ADMIN
}

console.log("enum user role - ", enumUserObject.role);