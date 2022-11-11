/**
 * In this document, you will find a tutorial how to define a prototype.
 * You will also find how to create objects and call their methods
 */

/** Prototype declaration for Record Type */
function Record() {
    this.goalId = null;
    this.goalDescription = '';
    this.targetValue = null;
    this.actualValue = null;
    this.year = null;
}

/** Prototype declaration for Salesman Type */
function Salesman() {
    this.employeeId = null;
    this.firstName = '';
    this.lastName = '';
    this.jobTitel = '';
    this.records = [];

    /** Method for adding a record to a salesman */
    this.addRecord = function(record) {
        return this.records.push(record);
    }

    /** Method for removing a record to a salesman */
    this.removeRecord = function(record) {
        return this.records.pop(record);
    }
}

/** creating objects with default constructor (prototype defined above) */
var salesman = new Salesman();
var record = new Record();

/** calling addRecord method to add a record to the object salesman */
salesman.addRecord(record);

/** logging the salesman to see the result */
console.log(salesman);

/**
 * Salesman {
    employeeId: null,       
    firstName: '',
    lastName: '',
    jobTitel: '',
    records: [
        Record {
        goalId: null,       
        goalDescription: '',
        targetValue: null,  
        actualValue: null,
        year: null
        }
    ],
    addRecord: [Function (anonymous)],
    removeRecord: [Function (anonymous)]
    }
 */