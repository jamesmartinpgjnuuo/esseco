// Declare and initialize the set
var employees: Set<string> = new Set(["Alicia", "Bethany", "Diana", "Eric"]);

// Adding a new employee
employees.add("Frank");

// Checking if an employee exists
if (employees.has("Diana")) {
    console.log("Diana is an employee.");
}

// Iterating over employees
employees.forEach(employee => {
    console.log(employee);
});
