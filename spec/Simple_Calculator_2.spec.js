/*Wilfred Ratala
Simple_calculator Part 2 spec
22 November 2019 
*/

const Simple_Calculator = require('../src/Simple_Calculator_2');
const calculator = new Simple_Calculator();

describe("Addition", function() {
    it("should add two numbers", function() {
        expect(calculator.addition(1, 1)).toEqual(2);
    });
});


describe("Addition", function() {
    it("should add two numbers even if they negative", function() {
        expect(calculator.addition(-1, -1)).toEqual(-2);
    });
});

describe("Addition", function() {
    it("should add two numbers", function() {
        expect(calculator.addition(4, 5)).toEqual(9);
    });
});

describe("Addition of many numbers", function() {
    it("should add many numbers", function() {
        expect(calculator.addition(1, 2, 3, 4)).toEqual(10);
    });
});

describe("multiply", function() {
    it("Should multiply two numbers", function() {
        expect(calculator.multiply(1, 2)).toEqual(2);
    });
});

describe("multiply ", function() {
    it("Should multiply of lots of numbers", function() {
        expect(calculator.multiply(1, 2, 3, 4)).toEqual(24);
    });
});

describe("Addition", function() {
    it("Make use of the Last() when doing calculations", function() {
        calculator.addition(1, 2)
        expect(calculator.addition(calculator.last(), 5)).toEqual(8);
    });
});

describe("multiply", function() {
    it("Make use of the Last() when doing multiplys calculations", function() {
        calculator.multiply(1, 2, 3, 4)
        expect(calculator.multiply(calculator.last(), 5)).toEqual(120);
    });
});