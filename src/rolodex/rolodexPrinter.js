import people from './people.json';

people.forEach((person) => {
  const [firstName, lastName] = person.name.split(' ');
  const { email, phone } = person;

  return (`First name: ${firstName}\nLast name: ${lastName}\nEmail: ${email}\nPhone number: ${phone}\n`);
});
