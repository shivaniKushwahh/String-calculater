# String Calculator

This project implements a string calculator with various features, including custom delimiters and negative number handling.

# Installation & Setup
Clone the repository:
git clone https://github.com/shivaniKushwahh/String-calculater.git

# Install dependencies:
npm install

# Run the tests:
npm test

## Test Cases

The following test cases demonstrate the functionality of the `add` method:

* **Empty String:**
    * `add('')` should return `0`.

* **Single Number:**
    * `add('1')` should return `1`.

* **Sum of Two Numbers:**
    * `add('1,5')` should return `6`.

* **Sum of Multiple Numbers (Comma Delimited):**
    * `add('1,2')` should return `3`.
    * `add('1,2,3,4,5,6,7,8,9')` should return `45`.

* **Sum with Newline Delimiters:**
    * `add('1\n2,3')` should return `6`.
    * `add('1\n2,3\n4')` should return `10`.

* **Custom Delimiters:**
    * `add('//;\n1;2')` should return `3`.
    * `add('//[***]\n1***2***3')` should return `6`.
    * `add('//[*][%]\n1*2%3')` should return `6`.
    * `add('//[foo][baar]\n1foo2baar3')` should return `6`.

* **Negative Number Handling:**
    * `add('-1,2')` should throw an error: `Negatives not allowed: -1`.
    * `add('1,-2,3,-5')` should throw an error: `Negatives not allowed: -2, -5`.

* **Ignoring Numbers >= 1000:**
    * `add('1000,10')` should return `10`.