/*Wilfred Ratala
Simple Calculator source
12 December 2019 */


module.exports = class Simple_Calculator {
    constructor() {
        this.slots = [];
        this.Last = 0;
    };

    //Addition function
    addition(...nums) {

        var sum
        this.sum = 0;

        for (var i = 0; i < nums.length; i++) {

            if (nums[i] == "LAST") {

                sum + this.last()

            } else if (typeof nums[i] == 'string') {

                // If string will return only numbers
                sum += this.get_slot(nums[i].replace[(/[a-zA-Z]/g, '') - 1]);

            } else {

                this.sum += nums[i];
            }
        }
        this.Last = this.sum;

        return this.sum;
    };

    //Multiplication function
    multiply(...nums) {

        this.multiplication = 1;

        for (var i = 0; i < nums.length; i++) {

            if (nums[i] == "LAST") {
                multiplication *= this.last()
            } else if (nums[i] == 'string') {

                // If string will return only numbers
                multiplication *= this.get_slot(nums[i].replace[(/[a-zA-Z]/g, '') - 1]);

            } else {

                this.multiplication *= nums[i];
            }
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
        return this.slots[_my_slot];
    };

    //Getter function
    get_slot(_my_slot) {
        return this.slots[_my_slot - 1]
    };

};