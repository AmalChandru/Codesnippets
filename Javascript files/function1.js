// function sayHello(name) {
//   console.log("Hey there");
//   console.log(`Hello there, ${name}`);
// }
// sayHello("Amal");
var getUserRole = function (name, role) {
  switch (role) {
    case "admin":
      return `${name} is admin with all access`;
      break;
    case "user":
      return `${name} is admin with all access`;
      break;
    case "subadmin":
      return `${name} is admin with all access`;
      break;

    default:
      break;
  }
};
console.log(getUserRole("amal", "admin"));
