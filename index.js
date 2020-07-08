var pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
  ];
  
  const getAge = pet => new Date().getFullYear() - pet.bornOn;

  const petsWithPage = pets.map(pet => getAge(pet));
  console.log(petsWithAge);

  const dogs = pets.filter(pet => pet.type === 'dog');
  console.log(dogs);
  
  const jasper = pets.find(pet => pet.name === "Jasper");
  const jasperAge = getAge(jasper)
  console.log(`Jasper is ${jasperAge} years old`);