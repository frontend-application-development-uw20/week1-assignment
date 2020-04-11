import people from './people.json';

people.forEach((element) => {
  const { name, email, phone } = element;
  const [firstName, lastName] = name.split(' ');
  console.log(`First name: ${firstName}\nLast name: ${lastName}\nEmail: ${email}\nPhone number: ${phone}`);
});
