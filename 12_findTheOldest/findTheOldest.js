const findTheOldest = function(people) {
  const checkForDeath = (person) => {
    if (!person.hasOwnProperty('yearOfDeath')) {
      const currentYear = new Date();
      return currentYear.getFullYear();
    } else {
      return person.yearOfDeath;
    }
  }
  const calculateAge = (person) => {
    const death = checkForDeath(person)
    return death - person.yearOfBirth;
  }

  let oldestAge = calculateAge(people[0]);
  let oldestPerson = people[0];
  for (i = 1; i < people.length; i++) {
    const age = calculateAge(people[i]);
    if (age > oldestAge) {
      oldestAge = age;
      oldestPerson = people[i];
    };
  };

  console.log(oldestPerson);
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
