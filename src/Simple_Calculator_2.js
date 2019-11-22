/*Wilfred Ratala
Simple_calculator Part 2 source
22 November 2019 */


module.exports = class Simple_Calculator {
    constructor() {
        this.slots = [];
        this.Last = 0;
    };

    //Addition function
    addition(...nums) {
        this.sum = 0;
        for (var i = 0; i < nums.length; i++) {
            this.sum += nums[i];
        }
        this.Last = this.sum;
        return this.sum;
    };

    //Multiplication function
    multiply(...nums) {
        this.multiplication = 1;
        for (var i = 0; i < nums.length; i++) {
            this.multiplication *= nums[i];
        }
        this.Last = this.multiplication;
        return this.multiplication;
    };

    //Stores values
    last() {
        return this.Last;
    }

    //Setter function
    set_slot(_my_slot) {
        this.slots[_my_slot] = this.Last;
        return this.slots[slots_my_slot];
    };

    //Getter function
    get_slot(_my_slot) {
        return this.slots[slots_my_slot]
    };

};