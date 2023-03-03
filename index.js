// Define constants
const BENEFIT_COST = 1000;
const DEPENDENT_COST = 500;

// Define Employee class
class Employee {
  constructor(name, dependents) {
    this.name = name;
    this.dependents = dependents;
  }

  getCost() {
    let cost = BENEFIT_COST;

    // Calculate cost for dependents
    cost += DEPENDENT_COST * this.dependents.length;

    // Apply discount if name starts with 'A'
    if (this.name.charAt(0).toUpperCase() === 'A') {
      cost *= 0.9;
    }

    return cost;
  }
}

// Define array of employees
let employees = [
  new Employee('John Doe', []),
  new Employee('Alice Smith', [ 'Bob Smith' ]),
  new Employee('Alex Brown', [ 'Ben Brown', 'Charlie Brown' ])
];

// Calculate total cost for all employees
let totalCost = 0;
for (let i = 0; i < employees.length; i++) {
  totalCost += employees[i].getCost();
}

// Output total cost
console.log('Total cost: $' + totalCost.toFixed(2));

// Output each employee's cost
console.log('Employee costs:');
for (let i = 0; i < employees.length; i++) {
  console.log(employees[i].name + ': $' + employees[i].getCost().toFixed(2));
}
