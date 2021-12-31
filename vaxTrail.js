const personList = [
    {
      name: "Biplap",
      age: 22,
      temperature: 98
    },
    {
      name: "Kabir",
      age: 36,
      temperature: 99
    },
    {
      name: "Paul",
      age: 42,
      temperature: 98
    },
    {
      name: "Nayem",
      age: 50,
      temperature: 100
    },
    {
      name: "Shabnaj",
      age: 51,
      temperature: 101
    },
    {
      name: "Rahul",
      age: 37,
      temperature: 99
    },
    {
      name: "Kat",
      age: 41,
      temperature: 98
    },
    {
      name: "Sunil",
      age: 21,
      temperature: 98
    },
    {
      name: "Warner",
      age: 55,
      temperature: 99
    },
    {
      name: "Smith",
      age: 18,
      temperature: 99
    }
  ];
  
  function vaxTrail(personListArray) {
    const booth = {
      A: [],
      B: [],
      C: [],
      D: []
    };
    personListArray.sort(function (a, b) {
      return (a.age % 2) - (b.age % 2) || a.age - b.age;
    });
    for (const person of personListArray) {
      if (person.temperature >= 100 || person.age < 20 || person.age > 50) {
        booth.D.push(person);
      } else if (person.age >= 41) {
        booth.C.push(person);
      } else if (person.age >= 31) {
        booth.B.push(person);
      } else {
        booth.A.push(person);
      }
    }
  
    return booth;
  }
  
  console.log(vaxTrail(personList));