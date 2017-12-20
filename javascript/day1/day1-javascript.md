####Knowledge round-up
1.What are the differences between a variable that is: `null`, `undefined`?
  - Null means that the empty value or value does not exist, it can be used to assign a variable as a non-valued value.
  - In javascript, when you declare a variable but do not assign a value to it, the value of that variable will be undefined.
2.What is `use strict`? what are the advantages and disadvantages to using it?
  - "Use strict" is a declarative keyword that uses "Strict Mode", which means that if you want to use Strict Mode, simply place the "use strict" keyword there. Strict Mode has two areas of use that are global and local. Overall, when you put the word "use strict" outside the function and at the top of the file, all the code below is affected. Local coincidence means that you place "use strict" in a function where the scope of the effect is within that function.
  - Advantages: 
    + Prevent usage, and throw errors when programmers execute unsafe handlers, which may be unwanted.
    + Disabling features may be confusing, or should not be used.
    + Prevent the use of some words that may be used as keyworks in the future.
  - Disadvantages:
    + Can not use a variable without declaration.
    + Error in assignments that can not be made.
    + Error message when you delete things can not delete.
    + The parameters of a function are not allowed to overlap.
    + Can not use octal number writing with prefix 0.
    + Unused variables are declared inside eval.
    + The function can not be defined within a statement or block.
3.What are the differences between `==` and `===`? Write an example for each case (if any)?
  - "==": compare the value. Example:
    var a=5;
    var b="5"
    a==b //true
  - "===": compares the value and data type of the variable. Example:
    var a=5;
    var b="5"
    a===b //false
4.What is different between declaration: `var`, `const` and `let`?
  - var: creates a variable whose scope is accessed through the function that contains it. var creates a new property for the global object (this), while let does not
  - const: is used to declare a constant - an unchanged value during the run.
  - let creates a variable that is only accessible in the block that surrounds it.
