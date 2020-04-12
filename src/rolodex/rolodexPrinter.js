import people from "./people.json";

people.forEach(function (person) {
  const names = person.name.split(" ");
  const firstName = names[0];
  const lastName = names[1];
  const email = person.email;
  const phone = person.phone;
  console.log("First name: " + firstName + "\nLast name: " + lastName + "\nEmail: " + email + "\nPhone number: " + phone + "\n");
});

console.log('****** Refactor the code to use template literals *******');
people.forEach(function (person) {
  const names = person.name.split(" ");
  const firstName = ` ${person.name.split(" ")[0]} `;
  const lastName = ` ${person.name.split(" ")[1]} `;
  const email = ` ${person.email} `;
  const phone = ` ${person.phone}`;
  console.log("First name: " + firstName + "\nLast name: " + lastName + "\nEmail: " + email + "\nPhone number: " + phone + "\n");
});

console.log('****** Refactor the code to use object destructuring ******');
people.forEach(function (person) {
  const { name, email, phone } = person;
  const [firstName, lastName] = name.split(" ");
  console.log("First name: " + firstName + "\nLast name: " + lastName + "\nEmail: " + email + "\nPhone number: " + phone + "\n");
});

console.log('******Refactor the code to use array destructuring. *****');
people.forEach(function (person) {
  const [, name, , email, , phone] = Object.values(person);
  const [firstName, lastName] = name.split(" ");
  console.log("First name: " + firstName + "\nLast name: " + lastName + "\nEmail: " + email + "\nPhone number: " + phone + "\n");
});
