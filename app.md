## Function
This file contains a function that adds two numbers together 

## Expected - Thread of execution
1. Global Execution context is opened 
2. Function declaration is hosited to the top of file
3. The function is invovked
4. An execution context opens up for the the function
5. The function looks to see if the parameters have any defaults
6. The function adds the two variables together


## Things to lookout for
- If the function used more complex logic, it would likely be better to assign the return value to a variable initial to separate concerns.

```
function addNumbers(x, y) {
  return x + y;
}
```