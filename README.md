# Type Error in TypeScript Arithmetic Operations

This repository demonstrates a common type error in TypeScript that occurs when performing arithmetic operations with strings instead of numbers.  The `add` and `subtract` functions are designed to work with numbers, but if you pass strings, you'll encounter a type error.

The `bug.ts` file contains the erroneous code, which leads to a compile-time error.  The `bugSolution.ts` file offers a solution by adding type checking and type conversion to handle string inputs gracefully.

## How to Reproduce

1. Clone this repository.
2. Open `bug.ts` in a TypeScript compiler or IDE.
3. Attempt to compile the code.  You will observe a type error related to incompatible types.

## Solution

The solution involves either improving type checking or using type assertions to address the issue.