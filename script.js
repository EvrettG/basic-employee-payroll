// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data


const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  const employees = [];

  let continueOn = true;

  // creates a loop thus runs while continueOn is true
  while (continueOn) {
    // prompts user to add first and last name 
    const firstName = prompt(`Please enter first name`);
    const lastName = prompt(`Please enter last namr`);
    let salary = prompt(`Please enter salary, no spaces or $`);

    // if salary is not a number, sets salary to 0
    if (isNaN(salary)){
      salary = 0;
    };

    // console.log(`point 1 ${salary}`); Used in error checking delete later

    // creates an employee object for the employee with there first and last name and salary
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: parseFloat(salary)
    };
    
    // adds the new employee object to employees array
    employees.push(employee)
    
    // ends while loop if they cancel, otherwise repeat loop
    continueOn = confirm(`Add another employee?`);
    // console.log("point 3") used in debugging delete later
  }
  
  return employees;

}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary

  // start the variable at 0 
  let salaryTotal = 0;
  // creates a variable number that is the length of the of the employees array
  const workerNumber = employeesArray.length;

  // creates a for of loop that runs on the length of the employees array
  // to generate a total of all salaries
  for (const employee of employeesArray){
    salaryTotal += employee.salary;
  }

  // creates a variable that divides the salaryTotal by the workerNumber and consol logs the result
  const averageSalary = salaryTotal / workerNumber;
  // sets mesage to consoloe of the average salary
  console.log(`The average salary of the employees is $${averageSalary}`);

}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee // delete or move later
  //random number generator with max length of the the employees array
  const randomEmployee = employeesArray[Math.floor(Math.random()*employeesArray.length)];
  // provides an alert displaying the randomly selected employee
  alert(`The random employy selected was ${randomEmployee.firstName} ${randomEmployee.lastName} with a salary of ${randomEmployee.salary}`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);