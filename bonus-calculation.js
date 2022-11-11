function Record(goalId, goalDescription, targetValue, actualValue, year) {
    this.goalId = goalId;
    this.goalDescription = goalDescription;
    this.targetValue = targetValue;
    this.actualValue = actualValue;
    this.year = year;
}

function SalesOder(id, createdAt, customer, positions, totalAmountIncludingTax) {
    this.id = id;
    this.createdAt = createdAt;
    this.customer = customer
    this.positions = positions;
    this.totalAmountIncludingTax = totalAmountIncludingTax
}

function Position(id, productDescription, quantity, pricePerUnit, amount) {
    this.id = id;       // different to positionNumber
    this.productDescription = productDescription
    this.quantity = quantity;
    this.pricePerUnit = pricePerUnit;
    this.amount = amount;
}

function Customer(id, accountRating, fullName) {
    this.id = id;       // different to positionNumber
    this.accountRating = accountRating
    this.fullName = fullName;
}

/** Prototype declaration for Salesman Type */
function Salesman() {
    this.employeeId = null;
    this.firstName = '';
    this.lastName = '';
    this.jobTitel = '';
    this.records = [];
    this.salesOrders = [];

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
        return this.salesOrders.filter(s => s.createdAt.getYear() == year)
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
    }

    function priceFactorForRating(rating) {
        let salesFactor = 30.0
        return (1 / rating) * salesFactor;
    }
}