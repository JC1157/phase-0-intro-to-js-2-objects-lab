// Write your solution in this file!
const employee= {
    name: "Sam", 
    streetAddress: "11 Broadway", 
}; 

employee.streetAddress = "12 Gunhill road";

function updateEmployeeWithKeyAndValue(employee, name, Juan){
    return {...employee, 
    [name]: Juan,
};
}

 


// // destructivelyUpdateEmployeeWithKeyAndValue(): 
// this function should work the same as updateEmployeeWithKeyAndValue() 
// but it should mutate the employee Object passed in.
