/**
 * This file presents an algorithm for the calculation of the total bonus for salesmen
 */


/**
 * Respresents records
 * @param {*} goalId 
 * @param {*} goalDescription 
 * @param {*} targetValue 
 * @param {*} actualValue 
 * @param {*} year 
 */

function Record(goalId, goalDescription, targetValue, actualValue, year) {
    this.goalId = goalId;
    this.goalDescription = goalDescription;
    this.targetValue = targetValue;
    this.actualValue = actualValue;
    this.year = year;
}

/**
 * @param {*} id 
 * @param {*} createdAt 
 * @param {*} customer 
 * @param {*} positions 
 * @param {*} totalAmountIncludingTax 
 */
function SalesOder(id, createdAt, customer, positions, totalAmountIncludingTax) {
    this.id = id;
    this.createdAt = createdAt;
    this.customer = customer
    this.positions = positions;
    this.totalAmountIncludingTax = totalAmountIncludingTax
}

/**
 * @param {*} id 
 * @param {*} productDescription 
 * @param {*} quantity 
 * @param {*} pricePerUnit 
 * @param {*} amount 
 */
function Position(id, productDescription, quantity, pricePerUnit, amount) {
    this.id = id;       // different to positionNumber
    this.productDescription = productDescription
    this.quantity = quantity;
    this.pricePerUnit = pricePerUnit;
    this.amount = amount;
}

/**
 * @param {*} id 
 * @param {*} accountRating 
 * @param {*} fullName 
 */
function Customer(id, accountRating, fullName) {
    this.id = id;       // different to positionNumber
    this.accountRating = accountRating
    this.fullName = fullName;
}

/**
 * Prototype declaration for Salesman Type
 * @param {*} employeeId 
 * @param {*} firstName 
 * @param {*} lastName 
 * @param {*} jobTitel 
 * @param {*} records 
 * @param {*} salesOrders 
 */
function Salesman(employeeId, firstName, lastName, jobTitel, records, salesOrders) {
    this.employeeId = employeeId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.jobTitel = jobTitel;
    this.records = records;
    this.salesOrders = salesOrders;

    this.fullName = function() {
        return this.firstName + ' ' + this.lastName;
    }

    /** Method for adding a record to a salesman */
    this.addRecord = function(record) {
        return this.records.push(record);
    }

    /** Method for removing a record to a salesman */
    this.removeRecord = function(record) {
        return this.records.pop(record);
    }

    this.recordsOfYear = function(year) {
        return this.records.filter(r => r.year == year)
    }

    this.salesOrdersOfYear = function(year) {
        return this.salesOrders.filter(s => s.createdAt.getFullYear() == year)
    }

    this.totalBonus = function(year) {
        return this.performanceBonus(year) + this.salesBonus(year)
    }

    this.performanceBonus = function(year) {
        let performanceFactor = 50.0;
        let bonus = 0.0;
        let records = this.recordsOfYear(year)
        for(let record of records) {
            bonus += record.actualValue / record.targetValue
        }
        return bonus * performanceFactor
    }

    this.salesBonus = function(year) {      
        let bonus = 0.0;
        let salesOrders = this.salesOrdersOfYear(year)
        for(let salesOrder of salesOrders) {
            bonus += salesOrder.totalAmountIncludingTax * priceFactorForRating(salesOrder.customer.accountRating)
        }
        return bonus;
    }

    function priceFactorForRating(rating) {
        let salesFactor = 1.0
        return (1 / rating) * salesFactor;
    }
}

/**
 * Test
 */

var kitea = new Customer(0, 1, "Kitea");

var today = new Date();
var year = today.getFullYear();

var position_table = new Position(0, "Table", 2, 200, 400);
var position_chair = new Position(1, "Chair", 5, 100, 500);
var positions = [position_table, position_chair];

var salesOrder = new SalesOder(0, today, kitea, positions, 900);

var social_record = new Record(0, "Social skills", 5, 4, year);
var comm_record = new Record(1, "Communication skills", 5, 6, year);
var records = [social_record, comm_record];

var salesman = new Salesman(0, "Adam", "Ali", "Salesman", records, [salesOrder]);

var bonus = salesman.totalBonus(year);

console.log(salesman.fullName(), 'will get a total bonus of', bonus, 'euro in the year', year);
