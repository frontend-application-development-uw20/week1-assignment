import people from './people.json';

people.forEach((element) => {
  const [firstName, lastName] = element.name.split(' ');
  console.log(`First name: ${firstName}\nLast name: ${lastName}\nEmail: ${element.email}\nPhone number: ${element.phone}\n`);
});
