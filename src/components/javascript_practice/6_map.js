const instructors = [
  { name: "Quincy", specialty: "Quantum Mechanics" },
  { name: "Kenn", specialty: "Norse Mythology" },
  { name: "Paul", specialty: "Tuvan throat singing" },
  { name: "Aaron", specialty: "Entomology" },
  { name: "Carolyn", specialty: "Kung Fu" }
]

let instructor_names = [];

for (let i = 0; i < instructor_names[i]; i++) {
  instructor_names.push(instructors[i]. name);
}
console.log(instructor_names);

const instructorNames = instructors.map(instructor => instructor.name);
console.log(instructorNames);

const instructorInfo = instructors.map(instructor => instructor.specialty);
console.log(instructorInfo)

var kvArray = [
  {key:1, value: 10},
  {key:2, value: 20},
  {key:3, value: 30}
];
console.log(kvArray);

var reformattedArray = kvArray.map(obj => {
  var rObj = {};
  rObj[obj.key] = obj.value;
  console.log(rObj);
  return rObj;
})