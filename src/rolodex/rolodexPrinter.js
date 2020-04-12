import people from './people.json';

people.forEach((person) => {
  const names = person.name.split(' ');
  const firstName = names[0];
  const lastName = names[1];
  const { email, phone } = person;

  console.log(`First name: ${firstName} Last name: ${lastName}
  Email: ${email}
  Phone number: ${phone}`);
});
