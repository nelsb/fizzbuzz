/*globals exports*/

var fizzbuzz = {
    getResult: function (number) {
        if (number === 0) {
            return 0;
        }
        if (number % 15 === 0) {
            return 'FizzBuzz';
        }
        if (number % 3 === 0) {
            return 'Fizz';
        }
        if (number % 5 === 0) {
            return 'Buzz';
        }
        return number;
    },

    upTo: function (number) {
        var i, result = 0;
        for (i = 1; i <= number; i += 1) {
            result += ', ' + this.getResult(i);
        }
        return result;
    }
};

exports.fizzbuzz = fizzbuzz;