import people from './people.json';

people.forEach((person) => {
  const names = person.name.split(' ');
  const [firstName, lastName] = names;
  const { email, phone } = person;
  const details = `First name: ${firstName} 
  Last name: ${lastName} 
  Email: ${email} 
  Phone number: ${phone}`;
  console.log(details);
});
