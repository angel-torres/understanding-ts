console.log("Your code goes here!");
function add(num1, num2) {
    return num1 + num2;
}
;
var number1 = 1;
var number2 = 3;
var result = add(number1, number2);
// console.log("answer: ", result);
// This syntax is preffered over having to define each thing beforehand. This is because the typescript compiler infers what each thing will be whenever we define it.
var userObject = {
    name: "robert",
    age: 23,
    hobbies: ["Cooking", "Sports"]
};
// This syntax is not preferred
var userObject2 = {
    name: "ramiro",
    age: 48
};
// This syntax is not preferred
var userObject3 = {
    name: "ramiro",
    age: 48
};
// console.log(userObject);
// TUPLE
var userObject4 = {
    name: "angel",
    age: 98,
    role: [0, "author"]
};
userObject4.role[0] = 4;
console.log("role - ", userObject4.role[1]);
// ENUM
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var enumUserObject = {
    name: "angel",
    age: 57,
    role: Role.ADMIN
};
console.log("enum user role - ", enumUserObject.role);
