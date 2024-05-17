// Exercise #1: For Each Function

function forEach(array, operation) {
  // Start coding here
  for (let num of array) {
    operation(num);
  }
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

// Using `forEach` function here
function plusSalaries(num) {
  newEmployeeSalaries.push(num + 5000);
}

forEach(employeeSalaries, plusSalaries);
console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
