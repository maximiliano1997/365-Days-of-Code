/*
    Create a person:
Complete the object constructor with the following methods:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(first, last)
Run the tests to see the expected outcome for each method. These methods must be the only available means of interacting with the object. Each test will declare a new Person instance as new Person('Bob', 'Ross').
 */

// Solution:

const Person = function (first, last) {

    let FirstName = first
    let LastName = last

    // Gets
    this.getFullName = function () {
        return FirstName + " " + LastName;
    };

    this.getFirstName = function () {
        return FirstName
    }
    this.getLastName = function () {
        return LastName
    }


    // Sets
    this.setFullName = function (newFirst, newLast) {
        FirstName = newFirst
        LastName = newLast
    };
    this.setFirstName = function (newFirst) {
        FirstName = newFirst
    }
    this.setLastName = function (newLast) {
        LastName = newLast
    }
};


/*
    Explained:
    The firstName and lastName properties are made private by declaring them as local variables within the Person constructor. The provided methods are the only way to interact with these properties, ensuring encapsulation.
 */