const instructors = [
    {name: 'Quincy', specialty: 'Quantum Mechanics'},
    {name: 'Kenn', specialty: 'Norse Mythology'},
    {name: 'Carolyn', specialty: 'Kung Fu'},
    {name: 'Paul', specialty: 'Entomology'},
];

let instructor_names = [];
instructors.forEach(instructor => {
    instructor_names.push(instructor.name);
});

console.log(instructor_names);

const instructorNames = instructors.map(instructor => instructor.name);
console.log(instructorNames);

//Exact same thing, different parameter name

const instructorNamesTwo = instructors.map (i => i.name);
console.log(instructorNamesTwo);

const instructorInfo = instructors.map(i => i.name);
const instructorInfo2= instructors.map(i => i.specialty);
console.log(`${instructorInfo}: ${instructorInfo2}`);
// ^^not correct. returns Quincy,Kenn,Carolyn,Paul: Quantun Mechanics, Norse Mythology, Kung Fu, Entomology