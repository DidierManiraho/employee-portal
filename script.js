const employeeName = document.getElementById('employee-name');
const payedAmount = document.getElementById('employee-pay');
const employeeRole = document.getElementById('employee-role');
//const employeeForm = document.getElementById('employee-form-new');
const addEmp = document.getElementById('addEmployee');
const employeeFormBonusEl = document.querySelector('#employee-form-bonus');
const employeeListAllEl = document.querySelector('#employee-list-all');


let employees = [
    { fullName: 'John Smith', pay: 100, role: 'Q/A' },
    { fullName: 'Mary Ann', pay: 180, role: 'Q/A' },
    { fullName: 'Don Draper', pay: 120, role: 'Q/A' },
];

/**
 * getting the input value
 * @param inputText
 * @returns {*}
 */
function getInputValue(inputText) {
    return inputText.value;
}


/**
 * Add new employee
 * @param  addNewEmployee
 */
function addNewEmployee() {
    return {
        fullName: getInputValue(employeeName),
        pay: getInputValue(payedAmount),
        role: getInputValue(employeeRole)
    };
}

/**
 * Display all employee
 * @param oldEmp
 * @param newEmp
 */
 function displayAllEmployee(employees, addAll = addNewEmployee) {
    let allEmployee = [...employees, addAll];
    console.log(allEmployee.map(el => {
            let li = document.createElement('li');
            li.innerHTML = `${el.fullName},${el.pay},${el.role}`;
            employeeListAllEl.appendChild(li);
        })
    );
}

function giveBonus(employees) {
    employees.map((item) => {
        if (employees.id === item.id) {
            return { fullName: item.fullName, pay: item.pay * 2, role: item.role };
        }
        return item;

    });

}
giveBonus(employees);


displayAllEmployee(employees, addNewEmployee);

addEmp.addEventListener('click', (e) => {
    e.preventDefault();

    addNewEmployee();

})

employeeFormBonusEl.addEventListener('submit', (e) => {
    e.preventDefault();

    displayAllEmployee(employees);
});
