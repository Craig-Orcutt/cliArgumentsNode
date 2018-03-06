Create a JavaScript file to act as a Node.js program named args.js. This program should accept at least one number as a command-line argument. The arguments should be summed up into a single value.

Don't worry about floating point rounding errors.

Expected:

$ ./args.js 1
1
$ ./args.js -.42 0 3.14
2.72
$ ./args.js .1 .2
0.30000000000000004
Bonus
Return 0 if no arguments are passed to the program
Use Array.prototype.map to change each argument into a proper Number primitive
Use Array.prototype.filter to limit the arguments array to only the parts needed
Use Array.prototype.reduce to apply a summation function to each number
As an alternative to .filter, use ES6 Array Destructuring to access only the values needed from the arguments array
