console.log('hello js');

const data = [
  {
    name: 'John Doe',
    id: 123,
    email: 'johndoe@example.com',
    password: 'password123',
    address: '123 Main St',
    city: 'Anytown',
    country: 'USA',
    occupation: 'Software Developer',
  },
  {
    name: 'Jane Smith',
    id: 456,
    email: 'janesmith@example.com',
    password: 'password456',
    address: '456 Oak Ave',
    city: 'Anycity',
    country: 'USA',
    occupation: 'Data Analyst',
  },
  {
    name: 'Bob Johnson',
    id: 789,
    email: 'bobjohnson@example.com',
    password: 'password789',
    address: '789 Elm St',
    city: 'Anystate',
    country: 'USA',
    occupation: 'Project Manager',
  },
];

// how I solved the the assignment
let findPersonById = data.find((p) => p.id === 789);
console.log(findPersonById);

//this function takes in an array and looks for s pecifik Id to find a person
function findPersonByID(arr, inputId) {
  let person = arr.find((p) => p.id === inputId);
  /* console.log(person) */
  return person;
}

let pers = findPersonByID(data, 789);
console.log('find person by id: ' + pers.name + ' id:' + pers.id);

const findByIndex = data.findIndex((p) => p.id == 456);
console.log('index is : ' + findByIndex);

data[findByIndex].name = 'Rutger Jönåker';
data[findByIndex].email = 'rutjon@lost.com';
console.log(data);

let newArray = data.filter((p) => p.id !== 123);
console.log('new array: \n\n', newArray);

// add new person to data
let newPerson = {
  name: 'Rob W',
  id: 321,
  email: 'rob@example.com',
  password: 'password789',
  address: '321 OceanDrive',
  city: 'Coolstate',
  country: 'USB',
  occupation: 'Programming engineer',
};

data.push(newPerson);

console.log('Data after added person: \n\n', data);

// or add it like this
const updatedData = [
  ...data,
  {
    name: 'Burta Bond',
    id: 921,
    email: 'burta@example.com',
    password: 'password921',
    address: '222 Action street',
    city: 'CoolerState',
    country: 'USBofA',
    occupation: 'Coder extravaganza',
  },
];

console.log(
  '*************************\n' +
    updatedData.map(d => console.log(d.name, d.id, d.email)) +
    '\n*****************************'
);
