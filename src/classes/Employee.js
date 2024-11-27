class Employee {

    constructor (name, jobtitle, bornyear) {

        this.name = name;
        this.jobtitle = jobtitle;
        this.bornyear = bornyear;
        
        // console.log("INSIDE EMPLOYEE CONSTRUCTOR");
        
        Employee.prototype.salary = 500000;
        Employee.prototype.nationality = "English";

    }
   


}

export default Employee;