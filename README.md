# Hello! Welcome to my very basic typescript tryout repo. Here I am going to discuss about two topics in typescript that I found interesting in all the things I have learned so far about Typescript.

##  1. How does TypeScript help in improving code quality and project maintainability?

First we have to know what typescript is, it is an Object Oriented Programming Language that is built on top of Javascript with extra features. Javascript has a few problems, which is taken care of in typescript, and typescript also offers some benefits that ultimately helps us improve code quality and project maintainability such as;

- Javascript is a dynamically typed language, no definite data types, like let, var, const, which allocates certain spaces in the memory and has difinitive data type, hence when developers use javascript in large projects, it gets tough to debug without knowing the datatype, this problem of not defining data types also leads to a complex code base to an easier code architecture. Hence using TypeScript improves the code quality.

- Javascript does not give compilation error, till we go to runtime, whereas Typescript not only shows these types of error during development but also provides type errors, this results in writing better quality of code.

- Typescript can be transpiled into older versions of Javascript, it also supports older browsers, which helps engineers and developers have a scalable project maintainability over time, without the need for in-depth code rewriting.


 **TypeScript Features**

| Feature                        | Description                                                                 |
|-------------------------------|-----------------------------------------------------------------------------|
| Type Inference                | Automatically infers types when not explicitly declared.                   |
| Interfaces                    | Allows defining contracts for objects, classes, and functions.             |
| Type Aliases                  | Create custom type names using the 'type' keyword.                         |
| Enums                         | Define a set of named constants (numeric or string-based).                 |
| Generics                      | Write reusable and type-safe components or functions.                      |
| Access Modifiers              | Use 'public', 'private', and 'protected' for class members.               |
| Optional & Default Parameters | Define function parameters as optional or provide default values.         |
| Union & Intersection Types    | Combine multiple types using \| (union) or & (intersection).            |
| Utility Types                 | Built-in types like `Partial`, `Readonly`, `Pick`, `Omit`, etc.           |
| Compatibility with JavaScript| Fully interoperable with existing JavaScript code.                         |


- All these features of Typescript contributes a lot to a project when in development in terms of bugs and testings. These typescript features helps reduce a significant amout of bugs and testing during the developing period.







## 2. What is type inference in TypeScript? Why is it helpful?

Type Inference is a powerful feature in Typescript, where the compiler automatically determines the types of a varible based on the assigned value, even if no explicit type annotation is provided. for example;

```
let x = 0;

here we can see that the 'x' variable is a number. TypeScript infers the type of 'x' as number.

Behind the scene, Typescript is treating this as;

let x:number = 0;

```
In this case above, Typescript understands that 'x' is a number without me needing to write let x:number; 

Type Inference helps us by reducing boilerplate code, it makes the code cleaner and easier to write, it improves the developer experience and it helps catch type-related errors at compile time, improving code safety.