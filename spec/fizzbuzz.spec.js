/*globals require, describe, it, expect*/

'use strict';

var fizzbuzz = require("../fizzbuzz.js").fizzbuzz;

describe('Fizz Buzz getResult() function', function () {

  it('should return 0 given 0', function () {
    expect(fizzbuzz.getResult(0)).toEqual(0);
  });

  it('should return 1 given 1', function () {
    expect(fizzbuzz.getResult(1)).toEqual(1);
  });

  it('should return 2 given 2', function () {
    expect(fizzbuzz.getResult(2)).toEqual(2);
  });

  it('should return Fizz given 3', function () {
    expect(fizzbuzz.getResult(3)).toEqual('Fizz');
  });

  it('should return Buzz given 5', function () {
    expect(fizzbuzz.getResult(5)).toEqual('Buzz');
  });

  it('should return Fizz given 6', function () {
    expect(fizzbuzz.getResult(6)).toEqual('Fizz');
  });

  it('should return Buzz given 10', function () {
    expect(fizzbuzz.getResult(10)).toEqual('Buzz');
  });

  it('should return FizzBuzz given 15', function () {
    expect(fizzbuzz.getResult(15)).toEqual('FizzBuzz');
  });
});

describe('Fizz Buzz upTo() function', function () {
  var input = 100,
    result = '0, 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz,' +
    ' 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, FizzBuzz,' +
    ' 31, 32, Fizz, 34, Buzz, Fizz, 37, 38, Fizz, Buzz, 41, Fizz, 43, 44, FizzBuzz,' +
    ' 46, 47, Fizz, 49, Buzz, Fizz, 52, 53, Fizz, Buzz, 56, Fizz, 58, 59, FizzBuzz,' +
    ' 61, 62, Fizz, 64, Buzz, Fizz, 67, 68, Fizz, Buzz, 71, Fizz, 73, 74, FizzBuzz,' +
    ' 76, 77, Fizz, 79, Buzz, Fizz, 82, 83, Fizz, Buzz, 86, Fizz, 88, 89, FizzBuzz,' +
    ' 91, 92, Fizz, 94, Buzz, Fizz, 97, 98, Fizz, Buzz';
  it('should return "' + result + '" given ' + input, function () {
    expect(fizzbuzz.upTo(input)).toEqual(result);
  });
});