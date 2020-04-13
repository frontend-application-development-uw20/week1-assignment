import people from './people.json';

people.forEach(([name, email, phone] = [people.name, people.email, people.phone]) => {
  const { firstName, lastName } = name.split(' ');

  return `First name: ${firstName}
    Last name: ${lastName}
    Email: ${email}
    Phone number: ${phone}`;
});
