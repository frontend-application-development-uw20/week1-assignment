import people from './people.json';

/*
 * Refactor the code to use template literals.
 * Refactor the code to use object destructuring.
 * Refactor the code to use array destructuring.
 */

people.forEach((person) => {
  const { name, email, phone } = person;
  const [firstName, lastName] = name.split(' ');

  console.log(`First name: ${firstName}
Last name: ${lastName}
Email: ${email}
Phone number: ${phone}
    `);
});
