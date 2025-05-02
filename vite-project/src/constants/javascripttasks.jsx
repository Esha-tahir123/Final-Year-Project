 const javascriptTasks = [
  {
    number: 1,
    title: "Identify Correct Usage of 'const'",
    description: "Which of the following is a valid usage of 'const' in JavaScript?",
    difficulty: "Basic",
    difficultyScore: 1,
    level: "Basic",
    existingCode: `
      const a = 5;
      // Which of the following actions are valid?
      // A. a = 10;
      // B. const b = 20;
      // C. const c; c = 30;
      // D. const d = { value: 50 }; d.value = 60;
    `,
    testCases: [
      { condition: "Only valid statements should be identified." },
    ],
    solutionExplanation: "You cannot reassign 'const' variables, but you can mutate properties of objects declared with 'const'.",
    language: "JavaScript",
  },
  {
    number: 2,
    title: "Correct Scope Declaration",
    description: "Fix the scope-related issue in the given code.",
    difficulty: "Basic",
    difficultyScore: 1,
    level: "Basic",
    existingCode: `
      function testScope() {
        if (true) {
          var x = 5;
        }
        console.log(x); // Unintended behavior
      }
      testScope();
    `,
    testCases: [
      { condition: "Variable x should not be accessible outside the block." },
    ],
    solutionExplanation: "Replace 'var' with 'let' to restrict the variable's scope to the block.",
    language: "JavaScript",
  },
  {
    number: 3,
    title: "Avoid Redundant Re-declaration",
    description: "Optimize the code to avoid unnecessary re-declaration of variables.",
    difficulty: "Basic",
    difficultyScore: 1,
    level: "Basic",
    existingCode: `
      var name = "John";
      var name = "Doe";
      console.log(name);
    `,
    testCases: [
      { condition: "The code should avoid variable re-declaration." },
    ],
    solutionExplanation: "Use 'let' or 'const' instead of 'var' to avoid unintended re-declarations.",
    language: "JavaScript",
  },
  {
    number: 4,
    title: "Temperature Converter",
    description: "Write a function that converts temperature from Celsius to Fahrenheit.",
    difficulty: "Basic",
    difficultyScore: 1,
    level: "Basic",
    existingCode: `
      function convertToFahrenheit(celsius) {
        // Your code here
      }
      console.log(convertToFahrenheit(0)); // 32
      console.log(convertToFahrenheit(100)); // 212
    `,
    testCases: [
      { condition: "convertToFahrenheit(0) should return 32." },
      { condition: "convertToFahrenheit(100) should return 212." },
    ],
    solutionExplanation: "Multiply the Celsius value by 9/5 and add 32 to convert it to Fahrenheit.",
    language: "JavaScript",
  },
  {
    number: 5,
    title: "Sum of Numbers",
    description: "Write a function that returns the sum of all numbers from 1 to n.",
    difficulty: "Basic",
    difficultyScore: 1,
    level: "Basic",
    existingCode: `
      function sumNumbers(n) {
        // Your code here
      }
      console.log(sumNumbers(5)); // 15
    `,
    testCases: [
      { condition: "sumNumbers(5) should return 15." },
    ],
    solutionExplanation: "Use a loop or formula to sum numbers from 1 to n.",
    language: "JavaScript",
  },
  {
    number: 6,
    title: "Swap Variable Values",
    description: "Swap the values of two variables without using a third variable.",
    difficulty: "Intermeidate",
    difficultyScore: 1,
    level: "Intermeidate",
    existingCode: `
      let a = 5;
      let b = 10;
      // Your code here
      console.log(a, b); // 10, 5
    `,
    testCases: [
      { condition: "a and b should swap their values without using a third variable." },
    ],
    solutionExplanation: "Use arithmetic operations or destructuring assignment to swap values.",
    language: "JavaScript",
  },
  {
    "number": 7,
    "title": "Unique Elements in an Array",
    "description": "Write a function that returns unique elements from an array.",
    "difficulty": "Intermeidate",
    "difficultyScore": 1,
    "level": "Intermeidate",
    "existingCode": 
      "function getUnique(arr) {\n  // Your code here\n}\nconsole.log(getUnique([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]",
    "testCases": [
      { "condition": "getUnique([1, 2, 2, 3, 4, 4]) should return [1, 2, 3, 4]." }
    ],
    "solutionExplanation": "Use a Set or filter to remove duplicates.",
    "language": "JavaScript"
  },
  {
    "number": 8,
    "title": "Check Variable Type",
    "description": "Write a function that returns the type of a variable.",
    "difficulty": "Intermeidate",
    "difficultyScore": 1,
    "level": "Intermeidate",
    "existingCode": 
      "function checkType(variable) {\n  // Your code here\n}\nconsole.log(checkType(5)); // 'number'\nconsole.log(checkType('hello')); // 'string'",
    "testCases": [
      { "condition": "checkType(5) should return 'number'." },
      { "condition": "checkType('hello') should return 'string'." }
    ],
    "solutionExplanation": "Use the typeof operator to determine the variable type.",
    "language": "JavaScript"
  },
  {
    "number": 9,
    "title": "Reverse a String",
    "description": "Write a function that reverses a given string.",
    "difficulty": "ntermeidate",
    "difficultyScore": 1,
    "level": "Intermeidate",
    "existingCode": 
      "function reverseString(str) {\n  // Your code here\n}\nconsole.log(reverseString('hello')); // 'olleh'",
    "testCases": [
      { "condition": "reverseString('hello') should return 'olleh'." }
    ],
    "solutionExplanation": "Use built-in methods or a loop to reverse the string.",
    "language": "JavaScript"
  },
  {
    "number": 10,
    "title": "Find Missing Number",
    "description": "Find the missing number in an array of 1 to n.",
    "difficulty": "Intermeidate",
    "difficultyScore": 1,
    "level": "Bntermeidate",
    "existingCode": 
      "function findMissing(arr) {\n  // Your code here\n}\nconsole.log(findMissing([1, 2, 4, 5])); // 3",
    "testCases": [
      { "condition": "findMissing([1, 2, 4, 5]) should return 3." }
    ],
    "solutionExplanation": "Use the sum formula or XOR method to find the missing number.",
    "language": "JavaScript"
  },
  {
    "number": 11,
    "title": "Custom Deep Clone Function",
    "description": "Write a function that performs a deep clone of an object.",
    "difficulty": "Expert",
    "difficultyScore": 1,
    "level": "Expert",
    "existingCode": 
      "function deepClone(obj) {\n  // Your code here\n}\nconst original = { a: 1, b: { c: 2 } };\nconst clone = deepClone(original);\nconsole.log(clone); // { a: 1, b: { c: 2 } }",
    "testCases": [
      { "condition": "The clone should deeply copy all nested properties." }
    ],
    "solutionExplanation": "Use recursion or structuredClone to deep copy the object.",
    "language": "JavaScript"
  },
  {
    "number": 12,
    "title": "Throttle Function",
    "description": "Implement a throttle function that limits the execution rate of another function.",
    "difficulty": "Expert",
    "difficultyScore": 1,
    "level": "Expert",
    "existingCode": 
      "function throttle(func, limit) {\n  // Your code here\n}\n// Example usage\nthrottle(() => console.log('Called'), 1000);",
    "testCases": [
      { "condition": "The function should execute at most once in the specified interval." }
    ],
    "solutionExplanation": "Use timers to control the execution rate of the function.",
    "language": "JavaScript"
  },
  {
    "number": 13,
    "title": "Implement Promise.all",
    "description": "Write a function that mimics the behavior of Promise.all.",
    "difficulty": "Expert",
    "difficultyScore": 1,
    "level": "Expert",
    "existingCode": 
      "function promiseAll(promises) {\n  // Your code here\n}\nconst p1 = Promise.resolve(1);\nconst p2 = Promise.resolve(2);\nconsole.log(await promiseAll([p1, p2])); // [1, 2]",
    "testCases": [
      { "condition": "All promises should resolve and return an array of results." }
    ],
    "solutionExplanation": "Use a loop to handle all promises and resolve them.",
    "language": "JavaScript"
  },
  {
    "number": 14,
    "title": "Debounce Function",
    "description": "Implement a debounce function that delays the execution of another function.",
    "difficulty": "Expert",
    "difficultyScore": 1,
    "level": "Expert",
    "existingCode": 
      "function debounce(func, delay) {\n  // Your code here\n}\ndebounce(() => console.log('Called'), 300);",
    "testCases": [
      { "condition": "The function should execute only after the specified delay." }
    ],
    "solutionExplanation": "Use a timer to delay the execution of the function.",
    "language": "JavaScript"
  },
  {
    "number": 15,
    "title": "LRU Cache Implementation",
    "description": "Write a class that implements an LRU Cache.",
    "difficulty": "Expert",
    "difficultyScore": 1,
    "level": "Expert",
    "existingCode": 
      "class LRUCache {\n  constructor(capacity) {\n    // Your code here\n  }\n  put(key, value) {\n    // Your code here\n  }\n  get(key) {\n    // Your code here\n  }\n}\nconst cache = new LRUCache(2);\ncache.put(1, 1);\ncache.put(2, 2);\nconsole.log(cache.get(1)); // 1\ncache.put(3, 3);\nconsole.log(cache.get(2)); // -1",
    "testCases": [
      { "condition": "Cache should evict least recently used items when full." }
    ],
    "solutionExplanation": "Use a Map and doubly-linked list to efficiently implement the cache.",
    "language": "JavaScript"
  },
    // Basic Level Tasks
    {
      "title": "String Length Checker",
      "description": "Write a function that returns the length of a string.",
      "difficulty": "Basic",
      "difficultyScore": 1,
      "level": "Basic",
      "questionNumber": 16,
      "existingCode": 
        "function getStringLength(str) {\n  // Your code here\n}\nconsole.log(getStringLength('hello')); // 5",
      "testCases": [
        { "condition": "getStringLength('hello') should return 5." }
      ],
      "solutionExplanation": "Use the length property of strings.",
      "language": "JavaScript"
    },
    {
      "title": "Array Sum Calculator",
      "description": "Write a function that calculates the sum of all numbers in an array.",
      "difficulty": "Basic",
      "difficultyScore": 1,
      "level": "Basic",
      "questionNumber": 17,
      "existingCode": 
        "function arraySum(arr) {\n  // Your code here\n}\nconsole.log(arraySum([1, 2, 3, 4])); // 10",
      "testCases": [
        { "condition": "arraySum([1, 2, 3, 4]) should return 10." }
      ],
      "solutionExplanation": "Use a loop or the reduce method to sum up the array elements.",
      "language": "JavaScript"
    },
    {
      "title": "Object Property Checker",
      "description": "Write a function that checks if an object has a certain property.",
      "difficulty": "Basic",
      "difficultyScore": 1,
      "level": "Basic",
      "questionNumber": 18,
      "existingCode": 
        "function hasProperty(obj, prop) {\n  // Your code here\n}\nconsole.log(hasProperty({a: 1}, 'a')); // true",
      "testCases": [
        { "condition": "hasProperty({a: 1}, 'a') should return true." },
        { "condition": "hasProperty({a: 1}, 'b') should return false." }
      ],
      "solutionExplanation": "Use the in operator or hasOwnProperty method.",
      "language": "JavaScript"
    },
    {
      "title": "Array Index Finder",
      "description": "Write a function that finds the index of a given element in an array.",
      "difficulty": "Basic",
      "difficultyScore": 1,
      "level": "Basic",
      "questionNumber": 19,
      "existingCode": 
        "function findIndex(arr, element) {\n  // Your code here\n}\nconsole.log(findIndex([1, 2, 3, 4], 3)); // 2",
      "testCases": [
        { "condition": "findIndex([1, 2, 3, 4], 3) should return 2." }
      ],
      "solutionExplanation": "Use the indexOf method to find the index of an element.",
      "language": "JavaScript"
    },
    {
      "title": "Convert String to Number",
      "description": "Write a function that converts a string to a number.",
      "difficulty": "Basic",
      "difficultyScore": 1,
      "level": "Basic",
      "questionNumber": 20,
      "existingCode": 
        "function stringToNumber(str) {\n  // Your code here\n}\nconsole.log(stringToNumber('123')); // 123",
      "testCases": [
        { "condition": "stringToNumber('123') should return 123." }
      ],
      "solutionExplanation": "Use the parseInt or parseFloat method to convert the string to a number.",
      "language": "JavaScript"
    },
    
    // Intermediate Level Tasks
    {
      "title": "Find Maximum Number in an Array",
      "description": "Write a function that returns the maximum number from an array.",
      "difficulty": "Intermediate",
      "difficultyScore": 1,
      "level": "Intermediate",
      "questionNumber": 21,
      "existingCode": 
        "function findMax(arr) {\n  // Your code here\n}\nconsole.log(findMax([1, 2, 3, 4])); // 4",
      "testCases": [
        { "condition": "findMax([1, 2, 3, 4]) should return 4." }
      ],
      "solutionExplanation": "Use the Math.max method with the spread operator.",
      "language": "JavaScript"
    },
    {
      "title": "Merge Two Arrays",
      "description": "Write a function that merges two arrays into one.",
      "difficulty": "Intermediate",
      "difficultyScore": 1,
      "level": "Intermediate",
      "questionNumber": 22,
      "existingCode": 
        "function mergeArrays(arr1, arr2) {\n  // Your code here\n}\nconsole.log(mergeArrays([1, 2], [3, 4])); // [1, 2, 3, 4]",
      "testCases": [
        { "condition": "mergeArrays([1, 2], [3, 4]) should return [1, 2, 3, 4]." }
      ],
      "solutionExplanation": "Use the concat method or spread operator to merge arrays.",
      "language": "JavaScript"
    },
    {
      "title": "Sort Array of Strings",
      "description": "Write a function that sorts an array of strings alphabetically.",
      "difficulty": "Intermediate",
      "difficultyScore": 1,
      "level": "Intermediate",
      "questionNumber": 23,
      "existingCode": 
        "function sortStrings(arr) {\n  // Your code here\n}\nconsole.log(sortStrings(['banana', 'apple', 'cherry'])); // ['apple', 'banana', 'cherry']",
      "testCases": [
        { "condition": "sortStrings(['banana', 'apple', 'cherry']) should return ['apple', 'banana', 'cherry']." }
      ],
      "solutionExplanation": "Use the sort method to sort strings alphabetically.",
      "language": "JavaScript"
    },
    {
      "title": "Check If Array Contains Element",
      "description": "Write a function that checks if a certain element is present in an array.",
      "difficulty": "Intermediate",
      "difficultyScore": 1,
      "level": "Intermediate",
      "questionNumber": 24,
      "existingCode": 
        "function contains(arr, element) {\n  // Your code here\n}\nconsole.log(contains([1, 2, 3], 2)); // true",
      "testCases": [
        { "condition": "contains([1, 2, 3], 2) should return true." },
        { "condition": "contains([1, 2, 3], 4) should return false." }
      ],
      "solutionExplanation": "Use the includes method to check if the element exists.",
      "language": "JavaScript"
    },
    {
      "title": "Count Object Properties",
      "description": "Write a function that counts the number of properties in an object.",
      "difficulty": "Intermediate",
      "difficultyScore": 1,
      "level": "Intermediate",
      "questionNumber": 25,
      "existingCode": 
        "function countProperties(obj) {\n  // Your code here\n}\nconsole.log(countProperties({a: 1, b: 2})); // 2",
      "testCases": [
        { "condition": "countProperties({a: 1, b: 2}) should return 2." }
      ],
      "solutionExplanation": "Use the Object.keys method to count the properties.",
      "language": "JavaScript"
    },
    
    // Expert Level Tasks
    {
      "title": "Flatten a Nested Array",
      "description": "Write a function that flattens a nested array.",
      "difficulty": "Expert",
      "difficultyScore": 1,
      "level": "Expert",
      "questionNumber": 26,
      "existingCode": 
        "function flattenArray(arr) {\n  // Your code here\n}\nconsole.log(flattenArray([1, [2, 3], [4, [5]]])) // [1, 2, 3, 4, 5]",
      "testCases": [
        { "condition": "flattenArray([1, [2, 3], [4, [5]]]) should return [1, 2, 3, 4, 5]." }
      ],
      "solutionExplanation": "Use recursion or Array.prototype.flat to flatten the array.",
      "language": "JavaScript"
    },
    {
      "title": "Merge Sort Algorithm",
      "description": "Implement the merge sort algorithm.",
      "difficulty": "Expert",
      "difficultyScore": 1,
      "level": "Expert",
      "questionNumber": 27,
      "existingCode": 
        "function mergeSort(arr) {\n  // Your code here\n}\nconsole.log(mergeSort([5, 4, 3, 2, 1])); // [1, 2, 3, 4, 5]",
      "testCases": [
        { "condition": "mergeSort([5, 4, 3, 2, 1]) should return [1, 2, 3, 4, 5]." }
      ],
      "solutionExplanation": "Use the divide-and-conquer approach to implement merge sort.",
      "language": "JavaScript"
    },
    {
      "title": "Implement Debouncing",
      "description": "Implement a debounce function that delays the execution of a function.",
      "difficulty": "Expert",
      "difficultyScore": 1,
      "level": "Expert",
      "questionNumber": 28,
      "existingCode": 
        "function debounce(func, delay) {\n  // Your code here\n}\ndebounce(() => console.log('Called'), 300);",
      "testCases": [
        { "condition": "The function should execute only after the specified delay." }
      ],
      "solutionExplanation": "Use a timer to delay the execution of the function.",
      "language": "JavaScript"
    },
    {
      "title": "Check for Palindrome",
      "description": "Write a function that checks if a string is a palindrome.",
      "difficulty": "Expert",
      "difficultyScore": 1,
      "level": "Expert",
      "questionNumber": 29,
      "existingCode": 
        "function isPalindrome(str) {\n  // Your code here\n}\nconsole.log(isPalindrome('madam')); // true",
      "testCases": [
        { "condition": "isPalindrome('madam') should return true." },
        { "condition": "isPalindrome('hello') should return false." }
      ],
      "solutionExplanation": "Compare the string with its reversed version to check for a palindrome.",
      "language": "JavaScript"
    },
    {
      "title": "Find Missing Number in Array",
      "description": "Write a function that finds the missing number in an array of consecutive numbers.",
      "difficulty": "Expert",
      "difficultyScore": 1,
      "level": "Expert",
      "questionNumber": 30,
      "existingCode": 
        "function findMissing(arr) {\n  // Your code here\n}\nconsole.log(findMissing([1, 2, 4, 5])); // 3",
      "testCases": [
        { "condition": "findMissing([1, 2, 4, 5]) should return 3." }
      ],
      "solutionExplanation": "Calculate the expected sum of the array and subtract the actual sum to find the missing number.",
      "language": "JavaScript"
    },
      // Basic Level Tasks
      {
        "title": "Addition Function",
        "description": "Write a function that adds two numbers.",
        "difficulty": "Basic",
        "difficultyScore": 1,
        "level": "Basic",
        "questionNumber": 31,
        "existingCode": 
          "function add(a, b) {\n  // Your code here\n}\nconsole.log(add(2, 3)); // 5",
        "testCases": [
          { "condition": "add(2, 3) should return 5." }
        ],
        "solutionExplanation": "Use the + operator to add the numbers.",
        "language": "JavaScript"
      },
      {
        "title": "Check for Equality",
        "description": "Write a function that checks if two numbers are equal.",
        "difficulty": "Basic",
        "difficultyScore": 1,
        "level": "Basic",
        "questionNumber": 32,
        "existingCode": 
          "function isEqual(a, b) {\n  // Your code here\n}\nconsole.log(isEqual(3, 3)); // true",
        "testCases": [
          { "condition": "isEqual(3, 3) should return true." },
          { "condition": "isEqual(2, 3) should return false." }
        ],
        "solutionExplanation": "Use the === operator to check for equality.",
        "language": "JavaScript"
      },
      {
        "title": "Check if Greater",
        "description": "Write a function that checks if one number is greater than another.",
        "difficulty": "Basic",
        "difficultyScore": 1,
        "level": "Basic",
        "questionNumber": 33,
        "existingCode": 
          "function isGreater(a, b) {\n  // Your code here\n}\nconsole.log(isGreater(5, 3)); // true",
        "testCases": [
          { "condition": "isGreater(5, 3) should return true." },
          { "condition": "isGreater(2, 4) should return false." }
        ],
        "solutionExplanation": "Use the > operator to check if one number is greater than another.",
        "language": "JavaScript"
      },
      {
        "title": "Logical AND Check",
        "description": "Write a function that checks if both conditions are true using the logical AND operator.",
        "difficulty": "Basic",
        "difficultyScore": 1,
        "level": "Basic",
        "questionNumber": 34,
        "existingCode": 
          "function logicalAnd(a, b) {\n  // Your code here\n}\nconsole.log(logicalAnd(true, false)); // false",
        "testCases": [
          { "condition": "logicalAnd(true, true) should return true." },
          { "condition": "logicalAnd(true, false) should return false." }
        ],
        "solutionExplanation": "Use the && operator for the logical AND operation.",
        "language": "JavaScript"
      },
      {
        "title": "Negation Check",
        "description": "Write a function that negates a boolean value.",
        "difficulty": "Basic",
        "difficultyScore": 1,
        "level": "Basic",
        "questionNumber": 35,
        "existingCode": 
          "function negate(value) {\n  // Your code here\n}\nconsole.log(negate(true)); // false",
        "testCases": [
          { "condition": "negate(true) should return false." },
          { "condition": "negate(false) should return true." }
        ],
        "solutionExplanation": "Use the ! operator to negate a boolean value.",
        "language": "JavaScript"
      },
    
      // Intermediate Level Tasks
      {
        "title": "Subtraction Function",
        "description": "Write a function that subtracts one number from another.",
        "difficulty": "Intermediate",
        "difficultyScore": 1,
        "level": "Intermediate",
        "questionNumber": 36,
        "existingCode": 
          "function subtract(a, b) {\n  // Your code here\n}\nconsole.log(subtract(5, 3)); // 2",
        "testCases": [
          { "condition": "subtract(5, 3) should return 2." }
        ],
        "solutionExplanation": "Use the - operator to subtract the numbers.",
        "language": "JavaScript"
      },
      {
        "title": "Greater Than or Equal Check",
        "description": "Write a function that checks if a number is greater than or equal to another.",
        "difficulty": "Intermediate",
        "difficultyScore": 1,
        "level": "Intermediate",
        "questionNumber": 37,
        "existingCode": 
          "function isGreaterOrEqual(a, b) {\n  // Your code here\n}\nconsole.log(isGreaterOrEqual(5, 3)); // true",
        "testCases": [
          { "condition": "isGreaterOrEqual(5, 3) should return true." },
          { "condition": "isGreaterOrEqual(2, 4) should return false." }
        ],
        "solutionExplanation": "Use the >= operator to check if a number is greater than or equal to another.",
        "language": "JavaScript"
      },
      {
        "title": "Logical OR Check",
        "description": "Write a function that checks if at least one condition is true using the logical OR operator.",
        "difficulty": "Intermediate",
        "difficultyScore": 1,
        "level": "Intermediate",
        "questionNumber": 38,
        "existingCode": 
          "function logicalOr(a, b) {\n  // Your code here\n}\nconsole.log(logicalOr(true, false)); // true",
        "testCases": [
          { "condition": "logicalOr(true, false) should return true." },
          { "condition": "logicalOr(false, false) should return false." }
        ],
        "solutionExplanation": "Use the || operator for the logical OR operation.",
        "language": "JavaScript"
      },
      {
        "title": "Modulus Operation",
        "description": "Write a function that returns the remainder of a division operation.",
        "difficulty": "Intermediate",
        "difficultyScore": 1,
        "level": "Intermediate",
        "questionNumber": 39,
        "existingCode": 
          "function modulus(a, b) {\n  // Your code here\n}\nconsole.log(modulus(5, 2)); // 1",
        "testCases": [
          { "condition": "modulus(5, 2) should return 1." }
        ],
        "solutionExplanation": "Use the % operator to return the remainder.",
        "language": "JavaScript"
      },
      {
        "title": "Comparison Function",
        "description": "Write a function that compares two strings and returns whether the first is lexicographically smaller, equal, or larger.",
        "difficulty": "Intermediate",
        "difficultyScore": 1,
        "level": "Intermediate",
        "questionNumber": 40,
        "existingCode": 
          "function compareStrings(a, b) {\n  // Your code here\n}\nconsole.log(compareStrings('apple', 'banana')); // 'apple is smaller'",
        "testCases": [
          { "condition": "compareStrings('apple', 'banana') should return 'apple is smaller'." },
          { "condition": "compareStrings('grape', 'banana') should return 'grape is larger'." }
        ],
        "solutionExplanation": "Use the <, >, and === operators to compare strings.",
        "language": "JavaScript"
      },
        // Basic Level Tasks
        {
          "title": "Addition of Two Numbers",
          "description": "Write a function that adds two numbers and returns the result.",
          "difficulty": "Basic",
          "difficultyScore": 1,
          "level": "Basic",
          "questionNumber": 41,
          "existingCode": 
            "function add(a, b) {\n  // Your code here\n}\nconsole.log(add(2, 3)); // 5",
          "testCases": [
            { "condition": "add(2, 3) should return 5." }
          ],
          "solutionExplanation": "Use the + operator to add two numbers.",
          "language": "JavaScript"
        },
        {
          "title": "Subtraction of Two Numbers",
          "description": "Write a function that subtracts the second number from the first number and returns the result.",
          "difficulty": "Basic",
          "difficultyScore": 1,
          "level": "Basic",
          "questionNumber": 42,
          "existingCode": 
            "function subtract(a, b) {\n  // Your code here\n}\nconsole.log(subtract(5, 3)); // 2",
          "testCases": [
            { "condition": "subtract(5, 3) should return 2." }
          ],
          "solutionExplanation": "Use the - operator to subtract the numbers.",
          "language": "JavaScript"
        },
        {
          "title": "Multiplication of Two Numbers",
          "description": "Write a function that multiplies two numbers and returns the result.",
          "difficulty": "Basic",
          "difficultyScore": 1,
          "level": "Basic",
          "questionNumber": 43,
          "existingCode": 
            "function multiply(a, b) {\n  // Your code here\n}\nconsole.log(multiply(3, 4)); // 12",
          "testCases": [
            { "condition": "multiply(3, 4) should return 12." }
          ],
          "solutionExplanation": "Use the * operator to multiply the numbers.",
          "language": "JavaScript"
        },
        {
          "title": "Division of Two Numbers",
          "description": "Write a function that divides the first number by the second number and returns the result.",
          "difficulty": "Basic",
          "difficultyScore": 1,
          "level": "Basic",
          "questionNumber": 44,
          "existingCode": 
            "function divide(a, b) {\n  // Your code here\n}\nconsole.log(divide(6, 2)); // 3",
          "testCases": [
            { "condition": "divide(6, 2) should return 3." }
          ],
          "solutionExplanation": "Use the / operator to divide the numbers.",
          "language": "JavaScript"
        },
        {
          "title": "Comparison of Two Numbers",
          "description": "Write a function that compares two numbers and returns whether the first is greater than, equal to, or less than the second.",
          "difficulty": "Basic",
          "difficultyScore": 1,
          "level": "Basic",
          "questionNumber": 45,
          "existingCode": 
            "function compare(a, b) {\n  // Your code here\n}\nconsole.log(compare(3, 5)); // '3 is less than 5'",
          "testCases": [
            { "condition": "compare(3, 5) should return '3 is less than 5'." }
          ],
          "solutionExplanation": "Use the comparison operators (<, >, ===) to compare the numbers.",
          "language": "JavaScript"
        },
      
        // Intermediate Level Tasks
        {
          "title": "Check if a Number is Even or Odd",
          "description": "Write a function that checks if a number is even or odd.",
          "difficulty": "Intermediate",
          "difficultyScore": 1,
          "level": "Intermediate",
          "questionNumber": 46,
          "existingCode": 
            "function checkEvenOdd(num) {\n  // Your code here\n}\nconsole.log(checkEvenOdd(4)); // 'Even'",
          "testCases": [
            { "condition": "checkEvenOdd(4) should return 'Even'." },
            { "condition": "checkEvenOdd(5) should return 'Odd'." }
          ],
          "solutionExplanation": "Use the % operator to check if the number is divisible by 2.",
          "language": "JavaScript"
        },
        {
          "title": "Find the Maximum of Three Numbers",
          "description": "Write a function that returns the maximum of three numbers.",
          "difficulty": "Intermediate",
          "difficultyScore": 1,
          "level": "Intermediate",
          "questionNumber": 47,
          "existingCode": 
            "function findMax(a, b, c) {\n  // Your code here\n}\nconsole.log(findMax(3, 5, 2)); // 5",
          "testCases": [
            { "condition": "findMax(3, 5, 2) should return 5." },
            { "condition": "findMax(7, 1, 4) should return 7." }
          ],
          "solutionExplanation": "Use the Math.max() function to find the maximum value.",
          "language": "JavaScript"
        },
        {
          "title": "Check if Two Strings are Equal",
          "description": "Write a function that checks if two strings are equal using comparison operators.",
          "difficulty": "Intermediate",
          "difficultyScore": 1,
          "level": "Intermediate",
          "questionNumber": 48,
          "existingCode": 
            "function areStringsEqual(str1, str2) {\n  // Your code here\n}\nconsole.log(areStringsEqual('apple', 'apple')); // true",
          "testCases": [
            { "condition": "areStringsEqual('apple', 'apple') should return true." },
            { "condition": "areStringsEqual('apple', 'banana') should return false." }
          ],
          "solutionExplanation": "Use the === operator to compare strings.",
          "language": "JavaScript"
        },
        {
          "title": "Logical NOT Check",
          "description": "Write a function that negates a boolean value and returns the opposite result.",
          "difficulty": "Intermediate",
          "difficultyScore": 1,
          "level": "Intermediate",
          "questionNumber": 49,
          "existingCode": 
            "function negateBoolean(value) {\n  // Your code here\n}\nconsole.log(negateBoolean(true)); // false",
          "testCases": [
            { "condition": "negateBoolean(true) should return false." },
            { "condition": "negateBoolean(false) should return true." }
          ],
          "solutionExplanation": "Use the ! operator to negate the boolean value.",
          "language": "JavaScript"
        },
        {
          "title": "Check if a Number is Positive, Negative, or Zero",
          "description": "Write a function that checks if a number is positive, negative, or zero.",
          "difficulty": "Intermediate",
          "difficultyScore": 1,
          "level": "Intermediate",
          "questionNumber": 50,
          "existingCode": 
            "function checkSign(num) {\n  // Your code here\n}\nconsole.log(checkSign(5)); // 'Positive'",
          "testCases": [
            { "condition": "checkSign(5) should return 'Positive'." },
            { "condition": "checkSign(-3) should return 'Negative'." },
            { "condition": "checkSign(0) should return 'Zero'." }
          ],
          "solutionExplanation": "Use comparison operators to check the sign of the number.",
          "language": "JavaScript"
        },
      
        // Expert Level Tasks
        {
          "title": "Calculate Average of Array Elements",
          "description": "Write a function that calculates the average of an array of numbers.",
          "difficulty": "Expert",
          "difficultyScore": 1,
          "level": "Expert",
          "questionNumber": 51,
          "existingCode": 
            "function calculateAverage(arr) {\n  // Your code here\n}\nconsole.log(calculateAverage([1, 2, 3, 4, 5])); // 3",
          "testCases": [
            { "condition": "calculateAverage([1, 2, 3, 4, 5]) should return 3." }
          ],
          "solutionExplanation": "Sum all elements and divide by the length of the array.",
          "language": "JavaScript"
        },
        {
          "title": "Find Second Largest Number in Array",
          "description": "Write a function that finds the second largest number in an array of numbers.",
          "difficulty": "Expert",
          "difficultyScore": 1,
          "level": "Expert",
          "questionNumber": 52,
          "existingCode": 
            "function secondLargest(arr) {\n  // Your code here\n}\nconsole.log(secondLargest([1, 5, 3, 8, 7])); // 7",
          "testCases": [
            { "condition": "secondLargest([1, 5, 3, 8, 7]) should return 7." }
          ],
          "solutionExplanation": "Sort the array in descending order and return the second element.",
          "language": "JavaScript"
        },
        {
          "title": "Check for Prime Number",
          "description": "Write a function that checks if a number is prime.",
          "difficulty": "Expert",
          "difficultyScore": 1,
          "level": "Expert",
          "questionNumber": 53,
          "existingCode": 
            "function isPrime(num) {\n  // Your code here\n}\nconsole.log(isPrime(7)); // true",
          "testCases": [
            { "condition": "isPrime(7) should return true." },
            { "condition": "isPrime(4) should return false." }
          ],
          "solutionExplanation": "Check if the number is divisible by any number less than itself.",
          "language": "JavaScript"
        },
        {
          "title": "Sort Numbers in Descending Order",
          "description": "Write a function that sorts an array of numbers in descending order.",
          "difficulty": "Expert",
          "difficultyScore": 1,
          "level": "Expert",
          "questionNumber": 54,
          "existingCode": 
            "function sortDescending(arr) {\n  // Your code here\n}\nconsole.log(sortDescending([5, 3, 8, 2])); // [8, 5, 3, 2]",
          "testCases": [
            { "condition": "sortDescending([5, 3, 8, 2]) should return [8, 5, 3, 2]." }
          ],
          "solutionExplanation": "Use the sort() function with a custom comparator for descending order.",
          "language": "JavaScript"
        },
        {
          "title": "Fibonacci Sequence Using Recursion",
          "description": "Write a function that generates the Fibonacci sequence using recursion.",
          "difficulty": "Expert",
          "difficultyScore": 1,
          "level": "Expert",
          "questionNumber": 55,
          "existingCode": 
            "function fibonacci(n) {\n  // Your code here\n}\nconsole.log(fibonacci(5)); // 5",
          "testCases": [
            { "condition": "fibonacci(5) should return 5." }
          ],
          "solutionExplanation": "Use recursion to generate the Fibonacci sequence.",
          "language": "JavaScript"
        },
          // Basic Level Tasks
          {
            "title": "Check if a Number is Positive or Negative",
            "description": "Write a function that checks if a number is positive or negative using an if-else statement.",
            "difficulty": "Basic",
            "difficultyScore": 1,
            "level": "Basic",
            "questionNumber": 56,
            "existingCode": 
              "function checkSign(num) {\n  // Your code here\n}\nconsole.log(checkSign(3)); // 'Positive'",
            "testCases": [
              { "condition": "checkSign(3) should return 'Positive'." },
              { "condition": "checkSign(-1) should return 'Negative'." }
            ],
            "solutionExplanation": "Use an if-else statement to check if the number is positive or negative.",
            "language": "JavaScript"
          },
          {
            "title": "Check if Number is Even or Odd Using if-else",
            "description": "Write a function that checks if a number is even or odd using an if-else statement.",
            "difficulty": "Basic",
            "difficultyScore": 1,
            "level": "Basic",
            "questionNumber": 57,
            "existingCode": 
              "function checkEvenOdd(num) {\n  // Your code here\n}\nconsole.log(checkEvenOdd(4)); // 'Even'",
            "testCases": [
              { "condition": "checkEvenOdd(4) should return 'Even'." },
              { "condition": "checkEvenOdd(7) should return 'Odd'." }
            ],
            "solutionExplanation": "Use the modulo operator to check if the number is even or odd.",
            "language": "JavaScript"
          },
          {
            "title": "Find the Maximum of Two Numbers Using if-else",
            "description": "Write a function that returns the maximum of two numbers using an if-else statement.",
            "difficulty": "Basic",
            "difficultyScore": 1,
            "level": "Basic",
            "questionNumber": 58,
            "existingCode": 
              "function findMax(a, b) {\n  // Your code here\n}\nconsole.log(findMax(3, 5)); // 5",
            "testCases": [
              { "condition": "findMax(3, 5) should return 5." },
              { "condition": "findMax(7, 4) should return 7." }
            ],
            "solutionExplanation": "Use an if-else statement to compare two numbers and return the maximum.",
            "language": "JavaScript"
          },
          {
            "title": "Check if a Character is Vowel or Consonant",
            "description": "Write a function that checks if a given character is a vowel or consonant using an if-else statement.",
            "difficulty": "Basic",
            "difficultyScore": 1,
            "level": "Basic",
            "questionNumber": 59,
            "existingCode": 
              "function checkVowelOrConsonant(char) {\n  // Your code here\n}\nconsole.log(checkVowelOrConsonant('a')); // 'Vowel'",
            "testCases": [
              { "condition": "checkVowelOrConsonant('a') should return 'Vowel'." },
              { "condition": "checkVowelOrConsonant('b') should return 'Consonant'." }
            ],
            "solutionExplanation": "Check if the character matches any of the vowels (a, e, i, o, u).",
            "language": "JavaScript"
          },
          {
            "title": "Check if a Year is a Leap Year",
            "description": "Write a function that checks if a given year is a leap year using an if-else statement.",
            "difficulty": "Basic",
            "difficultyScore": 1,
            "level": "Basic",
            "questionNumber": 60,
            "existingCode": 
              "function checkLeapYear(year) {\n  // Your code here\n}\nconsole.log(checkLeapYear(2024)); // 'Leap Year'",
            "testCases": [
              { "condition": "checkLeapYear(2024) should return 'Leap Year'." },
              { "condition": "checkLeapYear(2023) should return 'Not a Leap Year'." }
            ],
            "solutionExplanation": "Check if the year is divisible by 4, but not by 100 unless also divisible by 400.",
            "language": "JavaScript"
          },
        
          // Intermediate Level Tasks
          {
            "title": "Days of the Week Using Switch Case",
            "description": "Write a function that returns the name of the day based on a number using a switch statement.",
            "difficulty": "Intermediate",
            "difficultyScore": 1,
            "level": "Intermediate",
            "questionNumber": 61,
            "existingCode": 
              "function getDayOfWeek(day) {\n  // Your code here\n}\nconsole.log(getDayOfWeek(1)); // 'Monday'",
            "testCases": [
              { "condition": "getDayOfWeek(1) should return 'Monday'." },
              { "condition": "getDayOfWeek(7) should return 'Sunday'." }
            ],
            "solutionExplanation": "Use a switch statement to map the number to the corresponding day of the week.",
            "language": "JavaScript"
          },
          {
            "title": "Find the Factorial of a Number Using a Loop",
            "description": "Write a function that calculates the factorial of a number using a loop.",
            "difficulty": "Intermediate",
            "difficultyScore": 1,
            "level": "Intermediate",
            "questionNumber": 62,
            "existingCode": 
              "function factorial(num) {\n  // Your code here\n}\nconsole.log(factorial(5)); // 120",
            "testCases": [
              { "condition": "factorial(5) should return 120." },
              { "condition": "factorial(3) should return 6." }
            ],
            "solutionExplanation": "Use a for loop to multiply the number by all numbers less than it down to 1.",
            "language": "JavaScript"
          },
          {
            "title": "Print Multiplication Table Using a Loop",
            "description": "Write a function that prints the multiplication table of a number using a loop.",
            "difficulty": "Intermediate",
            "difficultyScore": 1,
            "level": "Intermediate",
            "questionNumber": 63,
            "existingCode": 
              "function multiplicationTable(num) {\n  // Your code here\n}\nmultiplicationTable(3); // should print '3x1=3', '3x2=6', ...",
            "testCases": [
              { "condition": "multiplicationTable(3) should print '3x1=3', '3x2=6', '3x3=9', ... " }
            ],
            "solutionExplanation": "Use a for loop to iterate through numbers 1 to 10 and print the multiplication results.",
            "language": "JavaScript"
          },
          {
            "title": "Count Down from a Number Using a Loop",
            "description": "Write a function that counts down from a number to 1 using a loop.",
            "difficulty": "Intermediate",
            "difficultyScore": 1,
            "level": "Intermediate",
            "questionNumber": 64,
            "existingCode": 
              "function countDown(num) {\n  // Your code here\n}\ncountDown(5); // should print 5, 4, 3, 2, 1",
            "testCases": [
              { "condition": "countDown(5) should print '5, 4, 3, 2, 1'." }
            ],
            "solutionExplanation": "Use a for loop to print numbers in descending order.",
            "language": "JavaScript"
          },
          {
            "title": "Sum of Odd Numbers Using a Loop",
            "description": "Write a function that sums all the odd numbers from 1 to n using a loop.",
            "difficulty": "Intermediate",
            "difficultyScore": 1,
            "level": "Intermediate",
            "questionNumber": 65,
            "existingCode": 
              "function sumOddNumbers(n) {\n  // Your code here\n}\nconsole.log(sumOddNumbers(5)); // 9",
            "testCases": [
              { "condition": "sumOddNumbers(5) should return 9." },
              { "condition": "sumOddNumbers(10) should return 25." }
            ],
            "solutionExplanation": "Use a loop to iterate through numbers and sum the odd ones.",
            "language": "JavaScript"
          },
        
          // Expert Level Tasks
          {
            "title": "Print Fibonacci Series Using a Loop",
            "description": "Write a function that prints the Fibonacci series up to the nth term using a loop.",
            "difficulty": "Expert",
            "difficultyScore": 1,
            "level": "Expert",
            "questionNumber": 66,
            "existingCode": 
              "function fibonacci(n) {\n  // Your code here\n}\nfibonacci(6); // should print 0, 1, 1, 2, 3, 5",
            "testCases": [
              { "condition": "fibonacci(6) should print '0, 1, 1, 2, 3, 5'." }
            ],
            "solutionExplanation": "Use a loop to generate the Fibonacci sequence.",
            "language": "JavaScript"
          },
          {
            "title": "Find All Prime Numbers in a Range",
            "description": "Write a function that finds all prime numbers between two numbers using a loop.",
            "difficulty": "Expert",
            "difficultyScore": 1,
            "level": "Expert",
            "questionNumber": 67,
            "existingCode": 
              "function findPrimes(start, end) {\n  // Your code here\n}\nconsole.log(findPrimes(10, 20)); // should return [11, 13, 17, 19]",
            "testCases": [
              { "condition": "findPrimes(10, 20) should return [11, 13, 17, 19]." }
            ],
            "solutionExplanation": "Use a loop to check for prime numbers in the given range.",
            "language": "JavaScript"
          },
          {
            "title": "Find the GCD of Two Numbers Using a Loop",
            "description": "Write a function that finds the Greatest Common Divisor (GCD) of two numbers using a loop.",
            "difficulty": "Expert",
            "difficultyScore": 1,
            "level": "Expert",
            "questionNumber": 68,
            "existingCode": 
              "function findGCD(a, b) {\n  // Your code here\n}\nconsole.log(findGCD(24, 36)); // 12",
            "testCases": [
              { "condition": "findGCD(24, 36) should return 12." }
            ],
            "solutionExplanation": "Use a loop to find the greatest common divisor of two numbers.",
            "language": "JavaScript"
          },
            // Basic Level Tasks
            {
              "title": "Function Declaration for Sum of Two Numbers",
              "description": "Write a function declaration that calculates the sum of two numbers.",
              "difficulty": "Basic",
              "difficultyScore": 1,
              "level": "Basic",
              "questionNumber": 69,
              "existingCode": 
                "function sum(a, b) {\n  // Your code here\n}\nconsole.log(sum(3, 4)); // 7",
              "testCases": [
                { "condition": "sum(3, 4) should return 7." },
                { "condition": "sum(10, 5) should return 15." }
              ],
              "solutionExplanation": "Define a function using the function declaration syntax and return the sum of two numbers.",
              "language": "JavaScript"
            },
            {
              "title": "Function Expression to Calculate Square of a Number",
              "description": "Write a function expression that calculates the square of a number.",
              "difficulty": "Basic",
              "difficultyScore": 1,
              "level": "Basic",
              "questionNumber": 70,
              "existingCode": 
                "const square = function(n) {\n  // Your code here\n};\nconsole.log(square(5)); // 25",
              "testCases": [
                { "condition": "square(5) should return 25." },
                { "condition": "square(2) should return 4." }
              ],
              "solutionExplanation": "Use a function expression to define a function that returns the square of the input number.",
              "language": "JavaScript"
            },
            {
              "title": "Anonymous Function to Multiply Two Numbers",
              "description": "Write an anonymous function to multiply two numbers.",
              "difficulty": "Basic",
              "difficultyScore": 1,
              "level": "Basic",
              "questionNumber": 71,
              "existingCode": 
                "const multiply = function(a, b) {\n  // Your code here\n};\nconsole.log(multiply(2, 3)); // 6",
              "testCases": [
                { "condition": "multiply(2, 3) should return 6." },
                { "condition": "multiply(4, 5) should return 20." }
              ],
              "solutionExplanation": "Define an anonymous function to return the result of multiplying two numbers.",
              "language": "JavaScript"
            },
            {
              "title": "Function Declaration to Check Palindrome",
              "description": "Write a function declaration that checks if a string is a palindrome.",
              "difficulty": "Basic",
              "difficultyScore": 1,
              "level": "Basic",
              "questionNumber": 72,
              "existingCode": 
                "function isPalindrome(str) {\n  // Your code here\n}\nconsole.log(isPalindrome('madam')); // true",
              "testCases": [
                { "condition": "isPalindrome('madam') should return true." },
                { "condition": "isPalindrome('hello') should return false." }
              ],
              "solutionExplanation": "Use a function declaration to check if a string reads the same forward and backward.",
              "language": "JavaScript"
            },
            {
              "title": "Function Expression to Find Maximum of Two Numbers",
              "description": "Write a function expression that returns the maximum of two numbers.",
              "difficulty": "Basic",
              "difficultyScore": 1,
              "level": "Basic",
              "questionNumber": 73,
              "existingCode": 
                "const max = function(a, b) {\n  // Your code here\n};\nconsole.log(max(10, 5)); // 10",
              "testCases": [
                { "condition": "max(10, 5) should return 10." },
                { "condition": "max(3, 7) should return 7." }
              ],
              "solutionExplanation": "Use a function expression to return the larger of the two numbers.",
              "language": "JavaScript"
            },
          
            // Intermediate Level Tasks
            {
              "title": "Function Expression to Calculate Factorial",
              "description": "Write a function expression that calculates the factorial of a number.",
              "difficulty": "Intermediate",
              "difficultyScore": 1,
              "level": "Intermediate",
              "questionNumber": 74,
              "existingCode": 
                "const factorial = function(n) {\n  // Your code here\n};\nconsole.log(factorial(5)); // 120",
              "testCases": [
                { "condition": "factorial(5) should return 120." },
                { "condition": "factorial(3) should return 6." }
              ],
              "solutionExplanation": "Use a function expression with a loop or recursion to calculate the factorial.",
              "language": "JavaScript"
            },
            {
              "title": "Self-Invoking Anonymous Function to Calculate Power",
              "description": "Write a self-invoking anonymous function to calculate the power of a number.",
              "difficulty": "Intermediate",
              "difficultyScore": 1,
              "level": "Intermediate",
              "questionNumber": 75,
              "existingCode": 
                "(function(base, exp) {\n  // Your code here\n})(2, 3); // 8",
              "testCases": [
                { "condition": "The result of (2, 3) should return 8." },
                { "condition": "The result of (3, 2) should return 9." }
              ],
              "solutionExplanation": "Use a self-invoking anonymous function to calculate the power of a number.",
              "language": "JavaScript"
            },
            {
              "title": "Function Expression to Reverse a String",
              "description": "Write a function expression that reverses a given string.",
              "difficulty": "Intermediate",
              "difficultyScore": 1,
              "level": "Intermediate",
              "questionNumber": 76,
              "existingCode": 
                "const reverseString = function(str) {\n  // Your code here\n};\nconsole.log(reverseString('hello')); // 'olleh'",
              "testCases": [
                { "condition": "reverseString('hello') should return 'olleh'." },
                { "condition": "reverseString('world') should return 'dlrow'." }
              ],
              "solutionExplanation": "Use a function expression to reverse the string by splitting, reversing, and joining.",
              "language": "JavaScript"
            },
            {
              "title": "Arrow Function to Filter Even Numbers",
              "description": "Write an arrow function that filters out even numbers from an array.",
              "difficulty": "Intermediate",
              "difficultyScore": 1,
              "level": "Intermediate",
              "questionNumber": 77,
              "existingCode": 
                "const filterEvens = (arr) => {\n  // Your code here\n};\nconsole.log(filterEvens([1, 2, 3, 4])); // [2, 4]",
              "testCases": [
                { "condition": "filterEvens([1, 2, 3, 4]) should return [2, 4]." },
                { "condition": "filterEvens([5, 6, 7, 8]) should return [6, 8]." }
              ],
              "solutionExplanation": "Use an arrow function with the filter method to return even numbers from the array.",
              "language": "JavaScript"
            },
            {
              "title": "Function Expression to Find the Length of an Array",
              "description": "Write a function expression that returns the length of an array.",
              "difficulty": "Intermediate",
              "difficultyScore": 1,
              "level": "Intermediate",
              "questionNumber": 78,
              "existingCode": 
                "const getArrayLength = function(arr) {\n  // Your code here\n};\nconsole.log(getArrayLength([1, 2, 3])); // 3",
              "testCases": [
                { "condition": "getArrayLength([1, 2, 3]) should return 3." },
                { "condition": "getArrayLength([10, 20]) should return 2." }
              ],
              "solutionExplanation": "Use a function expression to return the length of an array using the `length` property.",
              "language": "JavaScript"
            },
          
            // Expert Level Tasks
            {
              "title": "IIFE to Calculate the Sum of an Array",
              "description": "Write an Immediately Invoked Function Expression (IIFE) that calculates the sum of numbers in an array.",
              "difficulty": "Expert",
              "difficultyScore": 1,
              "level": "Expert",
              "questionNumber": 79,
              "existingCode": 
                "(function(arr) {\n  // Your code here\n})([1, 2, 3, 4]); // 10",
              "testCases": [
                { "condition": "The result of ([1, 2, 3, 4]) should return 10." }
              ],
              "solutionExplanation": "Use an IIFE to calculate the sum of all numbers in the array.",
              "language": "JavaScript"
            },
            {
              "title": "Function Expression to Calculate Fibonacci Series",
              "description": "Write a function expression that calculates the Fibonacci series up to the nth term.",
              "difficulty": "Expert",
              "difficultyScore": 1,
              "level": "Expert",
              "questionNumber": 80,
              "existingCode": 
                "const fibonacci = function(n) {\n  // Your code here\n};\nconsole.log(fibonacci(6)); // 0, 1, 1, 2, 3, 5",
              "testCases": [
                { "condition": "fibonacci(6) should return '0, 1, 1, 2, 3, 5'." }
              ],
              "solutionExplanation": "Use a function expression to calculate the Fibonacci sequence up to the nth term.",
              "language": "JavaScript"
            },
            {
              "title": "Function Expression for Deep Cloning an Object",
              "description": "Write a function expression that performs a deep clone of an object.",
              "difficulty": "Expert",
              "difficultyScore": 1,
              "level": "Expert",
              "questionNumber": 81,
              "existingCode": 
                "const deepClone = function(obj) {\n  // Your code here\n};\nconsole.log(deepClone({a: 1, b: {c: 2}})); // {a: 1, b: {c: 2}}",
              "testCases": [
                { "condition": "deepClone({a: 1, b: {c: 2}}) should return {a: 1, b: {c: 2}}." }
              ],
              "solutionExplanation": "Use a function expression to recursively clone the properties of the object.",
              "language": "JavaScript"
            },
              // Basic Level Tasks
              {
                "title": "Simple Arrow Function to Add Two Numbers",
                "description": "Write an arrow function that returns the sum of two numbers.",
                "difficulty": "Basic",
                "difficultyScore": 1,
                "level": "Basic",
                "questionNumber": 82,
                "existingCode": 
                  "const add = (a, b) => {\n  // Your code here\n};\nconsole.log(add(3, 4)); // 7",
                "testCases": [
                  { "condition": "add(3, 4) should return 7." },
                  { "condition": "add(10, 5) should return 15." }
                ],
                "solutionExplanation": "Use an arrow function to return the sum of two numbers.",
                "language": "JavaScript"
              },
              {
                "title": "Arrow Function to Multiply Two Numbers",
                "description": "Write an arrow function that returns the product of two numbers.",
                "difficulty": "Basic",
                "difficultyScore": 1,
                "level": "Basic",
                "questionNumber": 83,
                "existingCode": 
                  "const multiply = (a, b) => {\n  // Your code here\n};\nconsole.log(multiply(2, 3)); // 6",
                "testCases": [
                  { "condition": "multiply(2, 3) should return 6." },
                  { "condition": "multiply(4, 5) should return 20." }
                ],
                "solutionExplanation": "Use an arrow function to return the result of multiplying two numbers.",
                "language": "JavaScript"
              },
              {
                "title": "Arrow Function to Return Square of a Number",
                "description": "Write an arrow function that returns the square of a given number.",
                "difficulty": "Basic",
                "difficultyScore": 1,
                "level": "Basic",
                "questionNumber": 84,
                "existingCode": 
                  "const square = (n) => {\n  // Your code here\n};\nconsole.log(square(5)); // 25",
                "testCases": [
                  { "condition": "square(5) should return 25." },
                  { "condition": "square(3) should return 9." }
                ],
                "solutionExplanation": "Use an arrow function to return the square of the number.",
                "language": "JavaScript"
              },
              {
                "title": "Arrow Function to Find Maximum of Two Numbers",
                "description": "Write an arrow function that returns the maximum of two numbers.",
                "difficulty": "Basic",
                "difficultyScore": 1,
                "level": "Basic",
                "questionNumber": 85,
                "existingCode": 
                  "const max = (a, b) => {\n  // Your code here\n};\nconsole.log(max(10, 5)); // 10",
                "testCases": [
                  { "condition": "max(10, 5) should return 10." },
                  { "condition": "max(3, 7) should return 7." }
                ],
                "solutionExplanation": "Use an arrow function to return the larger of the two numbers.",
                "language": "JavaScript"
              },
              {
                "title": "Arrow Function to Check for Even Numbers",
                "description": "Write an arrow function to check if a number is even.",
                "difficulty": "Basic",
                "difficultyScore": 1,
                "level": "Basic",
                "questionNumber": 86,
                "existingCode": 
                  "const isEven = (n) => {\n  // Your code here\n};\nconsole.log(isEven(4)); // true",
                "testCases": [
                  { "condition": "isEven(4) should return true." },
                  { "condition": "isEven(5) should return false." }
                ],
                "solutionExplanation": "Use an arrow function to check if a number is divisible by 2.",
                "language": "JavaScript"
              },
            
              // Intermediate Level Tasks
              {
                "title": "Arrow Function to Filter Odd Numbers from an Array",
                "description": "Write an arrow function that filters out odd numbers from an array.",
                "difficulty": "Intermediate",
                "difficultyScore": 1,
                "level": "Intermediate",
                "questionNumber": 87,
                "existingCode": 
                  "const filterOdds = (arr) => {\n  // Your code here\n};\nconsole.log(filterOdds([1, 2, 3, 4])); // [2, 4]",
                "testCases": [
                  { "condition": "filterOdds([1, 2, 3, 4]) should return [2, 4]." },
                  { "condition": "filterOdds([5, 6, 7, 8]) should return [6, 8]." }
                ],
                "solutionExplanation": "Use an arrow function with the `filter` method to return even numbers from the array.",
                "language": "JavaScript"
              },
              {
                "title": "Arrow Function to Sum All Numbers in an Array",
                "description": "Write an arrow function to calculate the sum of all numbers in an array.",
                "difficulty": "Intermediate",
                "difficultyScore": 1,
                "level": "Intermediate",
                "questionNumber": 88,
                "existingCode": 
                  "const sumArray = (arr) => {\n  // Your code here\n};\nconsole.log(sumArray([1, 2, 3])); // 6",
                "testCases": [
                  { "condition": "sumArray([1, 2, 3]) should return 6." },
                  { "condition": "sumArray([5, 5, 5]) should return 15." }
                ],
                "solutionExplanation": "Use an arrow function with `reduce` to sum all numbers in the array.",
                "language": "JavaScript"
              },
              {
                "title": "Arrow Function to Return the Length of a String",
                "description": "Write an arrow function that returns the length of a string.",
                "difficulty": "Intermediate",
                "difficultyScore": 1,
                "level": "Intermediate",
                "questionNumber": 89,
                "existingCode": 
                  "const stringLength = (str) => {\n  // Your code here\n};\nconsole.log(stringLength('hello')); // 5",
                "testCases": [
                  { "condition": "stringLength('hello') should return 5." },
                  { "condition": "stringLength('world') should return 5." }
                ],
                "solutionExplanation": "Use an arrow function to return the length of a string using the `length` property.",
                "language": "JavaScript"
              },
              {
                "title": "Arrow Function to Find the Average of an Array",
                "description": "Write an arrow function to calculate the average of all numbers in an array.",
                "difficulty": "Intermediate",
                "difficultyScore": 1,
                "level": "Intermediate",
                "questionNumber": 90,
                "existingCode": 
                  "const average = (arr) => {\n  // Your code here\n};\nconsole.log(average([1, 2, 3])); // 2",
                "testCases": [
                  { "condition": "average([1, 2, 3]) should return 2." },
                  { "condition": "average([5, 5, 5]) should return 5." }
                ],
                "solutionExplanation": "Use an arrow function to calculate the average by summing all the elements and dividing by the length.",
                "language": "JavaScript"
              },
              {
                "title": "Arrow Function to Convert Celsius to Fahrenheit",
                "description": "Write an arrow function that converts Celsius to Fahrenheit.",
                "difficulty": "Intermediate",
                "difficultyScore": 1,
                "level": "Intermediate",
                "questionNumber": 91,
                "existingCode": 
                  "const celsiusToFahrenheit = (celsius) => {\n  // Your code here\n};\nconsole.log(celsiusToFahrenheit(0)); // 32",
                "testCases": [
                  { "condition": "celsiusToFahrenheit(0) should return 32." },
                  { "condition": "celsiusToFahrenheit(100) should return 212." }
                ],
                "solutionExplanation": "Use the formula (celsius * 9/5) + 32 to convert Celsius to Fahrenheit in the arrow function.",
                "language": "JavaScript"
              },
            
              // Expert Level Tasks
              {
                "title": "Arrow Function for Debouncing",
                "description": "Write an arrow function for debouncing a given function.",
                "difficulty": "Expert",
                "difficultyScore": 1,
                "level": "Expert",
                "questionNumber": 92,
                "existingCode": 
                  "const debounce = (func, delay) => {\n  // Your code here\n};\nconst logMessage = () => console.log('Message logged');\nconst debouncedLog = debounce(logMessage, 2000);",
                "testCases": [
                  { "condition": "debouncedLog should only execute logMessage once every 2000 milliseconds." }
                ],
                "solutionExplanation": "Use an arrow function to implement debouncing by clearing the previous timeout and setting a new one each time.",
                "language": "JavaScript"
              },
              {
                "title": "Arrow Function for Currying",
                "description": "Write an arrow function that performs currying for a function that adds three numbers.",
                "difficulty": "Expert",
                "difficultyScore": 1,
                "level": "Expert",
                "questionNumber": 93,
                "existingCode": 
                  "const addThree = (a) => (b) => (c) => a + b + c;\nconsole.log(addThree(1)(2)(3)); // 6",
                "testCases": [
                  { "condition": "addThree(1)(2)(3) should return 6." }
                ],
                "solutionExplanation": "Use arrow functions to create a curried function that adds three numbers together.",
                "language": "JavaScript"
              },
              {
                "title": "Arrow Function to Filter Unique Elements from Array",
                "description": "Write an arrow function that returns only unique elements from an array.",
                "difficulty": "Expert",
                "difficultyScore": 1,
                "level": "Expert",
                "questionNumber": 94,
                "existingCode": 
                  "const unique = (arr) => {\n  // Your code here\n};\nconsole.log(unique([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]",
                "testCases": [
                  { "condition": "unique([1, 2, 2, 3, 4, 4]) should return [1, 2, 3, 4]." }
                ],
                "solutionExplanation": "Use an arrow function to filter out duplicate elements and return the unique ones.",
                "language": "JavaScript"
              },
              {
                "title": "Arrow Function for Flattening Nested Arrays",
                "description": "Write an arrow function to flatten a nested array.",
                "difficulty": "Expert",
                "difficultyScore": 1,
                "level": "Expert",
                "questionNumber": 95,
                "existingCode": 
                  "const flatten = (arr) => {\n  // Your code here\n};\nconsole.log(flatten([1, [2, 3], [4, [5]]])) // [1, 2, 3, 4, 5]",
                "testCases": [
                  { "condition": "flatten([1, [2, 3], [4, [5]]]) should return [1, 2, 3, 4, 5]." }
                ],
                "solutionExplanation": "Use an arrow function to recursively flatten the nested arrays.",
                "language": "JavaScript"
              },
                // Basic Level Tasks
                {
                  "title": "Arrow Function with Default Parameter",
                  "description": "Write an arrow function that takes a number and returns it multiplied by 2. The number should default to 5 if no argument is passed.",
                  "difficulty": "Basic",
                  "difficultyScore": 1,
                  "level": "Basic",
                  "questionNumber": 96,
                  "existingCode": 
                    "const multiplyByTwo = (num = 5) => {\n  // Your code here\n};\nconsole.log(multiplyByTwo()); // 10",
                  "testCases": [
                    { "condition": "multiplyByTwo() should return 10." },
                    { "condition": "multiplyByTwo(3) should return 6." }
                  ],
                  "solutionExplanation": "Use a default parameter for the function argument, which will default to 5 if no argument is provided.",
                  "language": "JavaScript"
                },
                {
                  "title": "Arrow Function with Default Parameter to Greet User",
                  "description": "Write an arrow function that takes a name and greets the user. If no name is provided, default to 'Guest'.",
                  "difficulty": "Basic",
                  "difficultyScore": 1,
                  "level": "Basic",
                  "questionNumber": 97,
                  "existingCode": 
                    "const greetUser = (name = 'Guest') => {\n  // Your code here\n};\nconsole.log(greetUser()); // 'Hello, Guest!'",
                  "testCases": [
                    { "condition": "greetUser() should return 'Hello, Guest!'." },
                    { "condition": "greetUser('Alice') should return 'Hello, Alice!'." }
                  ],
                  "solutionExplanation": "Use a default parameter for the name to greet the user, which defaults to 'Guest' if no name is passed.",
                  "language": "JavaScript"
                },
                {
                  "title": "Default Parameter for Greeting Message",
                  "description": "Write a function that accepts a greeting message and a name, and returns the greeting. If no message is provided, default to 'Hello'.",
                  "difficulty": "Basic",
                  "difficultyScore": 1,
                  "level": "Basic",
                  "questionNumber": 98,
                  "existingCode": 
                    "function greet(message = 'Hello', name) {\n  // Your code here\n};\nconsole.log(greet(undefined, 'John')); // 'Hello, John!'",
                  "testCases": [
                    { "condition": "greet(undefined, 'John') should return 'Hello, John!'." },
                    { "condition": "greet('Good morning', 'Alice') should return 'Good morning, Alice!'." }
                  ],
                  "solutionExplanation": "Use a default parameter for the greeting message to ensure a default value if no message is passed.",
                  "language": "JavaScript"
                },
                {
                  "title": "Function with Default Parameter to Multiply Numbers",
                  "description": "Write a function that multiplies two numbers, with the second number defaulting to 1 if no second argument is passed.",
                  "difficulty": "Basic",
                  "difficultyScore": 1,
                  "level": "Basic",
                  "questionNumber": 99,
                  "existingCode": 
                    "function multiply(a, b = 1) {\n  // Your code here\n};\nconsole.log(multiply(3)); // 3",
                  "testCases": [
                    { "condition": "multiply(3) should return 3." },
                    { "condition": "multiply(3, 2) should return 6." }
                  ],
                  "solutionExplanation": "Use a default parameter for the second number to ensure it defaults to 1 when no value is provided.",
                  "language": "JavaScript"
                },
                {
                  "title": "Arrow Function with Default Parameter for Adding Two Numbers",
                  "description": "Write an arrow function that adds two numbers, with the second number defaulting to 0 if not provided.",
                  "difficulty": "Basic",
                  "difficultyScore": 1,
                  "level": "Basic",
                  "questionNumber": 100,
                  "existingCode": 
                    "const add = (a, b = 0) => {\n  // Your code here\n};\nconsole.log(add(3)); // 3",
                  "testCases": [
                    { "condition": "add(3) should return 3." },
                    { "condition": "add(3, 5) should return 8." }
                  ],
                  "solutionExplanation": "Use a default parameter for the second number, which defaults to 0 if no value is passed.",
                  "language": "JavaScript"
                },
              
                // Intermediate Level Tasks
                {
                  "title": "Function with Multiple Default Parameters",
                  "description": "Write a function that accepts a number, a string, and a boolean value. Set the default values for these parameters and return the concatenated result.",
                  "difficulty": "Intermediate",
                  "difficultyScore": 1,
                  "level": "Intermediate",
                  "questionNumber": 101,
                  "existingCode": 
                    "function greet(number = 0, name = 'Guest', isAdmin = false) {\n  // Your code here\n};\nconsole.log(greet()); // '0, Guest, false'",
                  "testCases": [
                    { "condition": "greet() should return '0, Guest, false.'" },
                    { "condition": "greet(5, 'Alice', true) should return '5, Alice, true.'" }
                  ],
                  "solutionExplanation": "Use default parameters for all three arguments to provide fallback values.",
                  "language": "JavaScript"
                },
                {
                  "title": "Default Parameters in Arrow Function to Add Three Numbers",
                  "description": "Write an arrow function that adds three numbers. Set default values for all parameters.",
                  "difficulty": "Intermediate",
                  "difficultyScore": 1,
                  "level": "Intermediate",
                  "questionNumber": 102,
                  "existingCode": 
                    "const addThree = (a = 1, b = 1, c = 1) => {\n  // Your code here\n};\nconsole.log(addThree()); // 3",
                  "testCases": [
                    { "condition": "addThree() should return 3." },
                    { "condition": "addThree(2, 3, 4) should return 9." }
                  ],
                  "solutionExplanation": "Use default parameters to ensure that all three numbers have a fallback value of 1.",
                  "language": "JavaScript"
                },
                {
                  "title": "Arrow Function with Default Parameters for User Greeting",
                  "description": "Write an arrow function that greets a user with a name and a greeting. If no greeting is provided, default to 'Hello'. If no name is provided, default to 'Guest'.",
                  "difficulty": "Intermediate",
                  "difficultyScore": 1,
                  "level": "Intermediate",
                  "questionNumber": 103,
                  "existingCode": 
                    "const greetUser = (greeting = 'Hello', name = 'Guest') => {\n  // Your code here\n};\nconsole.log(greetUser()); // 'Hello, Guest!'",
                  "testCases": [
                    { "condition": "greetUser() should return 'Hello, Guest!'" },
                    { "condition": "greetUser('Good morning', 'Alice') should return 'Good morning, Alice!'" }
                  ],
                  "solutionExplanation": "Use default parameters to ensure that both the greeting and name have fallback values.",
                  "language": "JavaScript"
                },
                {
                  "title": "Arrow Function with Default Parameters for Greeting Message",
                  "description": "Write an arrow function that accepts a name and a greeting. Return the message. If no name is provided, default to 'Anonymous', and if no greeting is provided, default to 'Hello'.",
                  "difficulty": "Intermediate",
                  "difficultyScore": 1,
                  "level": "Intermediate",
                  "questionNumber": 104,
                  "existingCode": 
                    "const greet = (name = 'Anonymous', greeting = 'Hello') => {\n  // Your code here\n};\nconsole.log(greet()); // 'Hello, Anonymous!'",
                  "testCases": [
                    { "condition": "greet() should return 'Hello, Anonymous!'" },
                    { "condition": "greet('Alice', 'Hi') should return 'Hi, Alice!'" }
                  ],
                  "solutionExplanation": "Use default parameters to provide fallback values for both the greeting and the name.",
                  "language": "JavaScript"
                },
              
                // Expert Level Tasks
                {
                  "title": "Function with Default Parameters for Date Formatting",
                  "description": "Write a function that accepts a date object and a format string, returning the formatted date. Set default values for the date (current date) and the format (YYYY-MM-DD).",
                  "difficulty": "Expert",
                  "difficultyScore": 1,
                  "level": "Expert",
                  "questionNumber": 105,
                  "existingCode": 
                    "function formatDate(date = new Date(), format = 'YYYY-MM-DD') {\n  // Your code here\n};\nconsole.log(formatDate()); // '2024-12-25'",
                  "testCases": [
                    { "condition": "formatDate() should return the current date in 'YYYY-MM-DD' format." },
                    { "condition": "formatDate(new Date('2024-01-01')) should return '2024-01-01.'" }
                  ],
                  "solutionExplanation": "Use default parameters for the date and format to provide fallback values for both.",
                  "language": "JavaScript"
                },
              
                  // Basic Level Tasks
                  {
                    "title": "Using Rest Operator to Collect Arguments",
                    "description": "Write a function that accepts any number of arguments and returns the sum of all arguments using the rest operator.",
                    "difficulty": "Basic",
                    "difficultyScore": 1,
                    "level": "Basic",
                    "questionNumber": 106,
                    "existingCode": 
                      "function sum(...numbers) {\n  // Your code here\n};\nconsole.log(sum(1, 2, 3)); // 6",
                    "testCases": [
                      { "condition": "sum(1, 2, 3) should return 6." },
                      { "condition": "sum(5, 10, 15) should return 30." }
                    ],
                    "solutionExplanation": "Use the rest operator (...numbers) to collect all arguments into an array and then calculate their sum.",
                    "language": "JavaScript"
                  },
                  {
                    "title": "Using Spread Operator to Copy an Array",
                    "description": "Write a function that takes an array and returns a copy of it using the spread operator.",
                    "difficulty": "Basic",
                    "difficultyScore": 1,
                    "level": "Basic",
                    "questionNumber": 107,
                    "existingCode": 
                      "function copyArray(arr) {\n  // Your code here\n};\nconsole.log(copyArray([1, 2, 3])); // [1, 2, 3]",
                    "testCases": [
                      { "condition": "copyArray([1, 2, 3]) should return [1, 2, 3]." },
                      { "condition": "copyArray([10, 20]) should return [10, 20]." }
                    ],
                    "solutionExplanation": "Use the spread operator to copy the array into a new array.",
                    "language": "JavaScript"
                  },
                  {
                    "title": "Using Rest Operator to Build a Dynamic Function",
                    "description": "Write a function that uses the rest operator to accept any number of strings and return the combined result.",
                    "difficulty": "Basic",
                    "difficultyScore": 1,
                    "level": "Basic",
                    "questionNumber": 108,
                    "existingCode": 
                      "function combineStrings(...strings) {\n  // Your code here\n};\nconsole.log(combineStrings('Hello', 'World')); // 'Hello World'",
                    "testCases": [
                      { "condition": "combineStrings('Hello', 'World') should return 'Hello World'." },
                      { "condition": "combineStrings('Good', 'Morning') should return 'Good Morning'." }
                    ],
                    "solutionExplanation": "Use the rest operator to collect all arguments into an array and then combine them into a string.",
                    "language": "JavaScript"
                  },
                  {
                    "title": "Using Spread Operator to Merge Arrays",
                    "description": "Write a function that merges two arrays into one using the spread operator.",
                    "difficulty": "Basic",
                    "difficultyScore": 1,
                    "level": "Basic",
                    "questionNumber": 109,
                    "existingCode": 
                      "function mergeArrays(arr1, arr2) {\n  // Your code here\n};\nconsole.log(mergeArrays([1, 2], [3, 4])); // [1, 2, 3, 4]",
                    "testCases": [
                      { "condition": "mergeArrays([1, 2], [3, 4]) should return [1, 2, 3, 4]." },
                      { "condition": "mergeArrays([5, 6], [7, 8]) should return [5, 6, 7, 8]." }
                    ],
                    "solutionExplanation": "Use the spread operator to merge two arrays into one.",
                    "language": "JavaScript"
                  },
                  {
                    "title": "Using Rest Operator to Count Arguments",
                    "description": "Write a function that counts the number of arguments passed to it using the rest operator.",
                    "difficulty": "Basic",
                    "difficultyScore": 1,
                    "level": "Basic",
                    "questionNumber": 110,
                    "existingCode": 
                      "function countArguments(...args) {\n  // Your code here\n};\nconsole.log(countArguments(1, 2, 3)); // 3",
                    "testCases": [
                      { "condition": "countArguments(1, 2, 3) should return 3." },
                      { "condition": "countArguments(5, 10) should return 2." }
                    ],
                    "solutionExplanation": "Use the rest operator to collect all arguments into an array and return its length.",
                    "language": "JavaScript"
                  },
                
                  // Intermediate Level Tasks
                  {
                    "title": "Using Spread Operator to Clone an Object",
                    "description": "Write a function that takes an object and returns a clone of it using the spread operator.",
                    "difficulty": "Intermediate",
                    "difficultyScore": 1,
                    "level": "Intermediate",
                    "questionNumber": 111,
                    "existingCode": 
                      "function cloneObject(obj) {\n  // Your code here\n};\nconsole.log(cloneObject({name: 'Alice'})); // {name: 'Alice'}",
                    "testCases": [
                      { "condition": "cloneObject({name: 'Alice'}) should return {name: 'Alice'}." },
                      { "condition": "cloneObject({age: 25, gender: 'female'}) should return {age: 25, gender: 'female'}." }
                    ],
                    "solutionExplanation": "Use the spread operator to create a shallow clone of the object.",
                    "language": "JavaScript"
                  },
                  {
                    "title": "Using Rest Operator for Function Arguments and Return the Average",
                    "description": "Write a function that accepts any number of numerical arguments using the rest operator and returns the average of those numbers.",
                    "difficulty": "Intermediate",
                    "difficultyScore": 1,
                    "level": "Intermediate",
                    "questionNumber": 112,
                    "existingCode": 
                      "function calculateAverage(...numbers) {\n  // Your code here\n};\nconsole.log(calculateAverage(1, 2, 3, 4)); // 2.5",
                    "testCases": [
                      { "condition": "calculateAverage(1, 2, 3, 4) should return 2.5." },
                      { "condition": "calculateAverage(5, 10, 15) should return 10." }
                    ],
                    "solutionExplanation": "Use the rest operator to collect all arguments into an array, then calculate the average.",
                    "language": "JavaScript"
                  },
                  {
                    "title": "Using Spread Operator to Merge Multiple Objects",
                    "description": "Write a function that accepts multiple objects as arguments and merges them into one using the spread operator.",
                    "difficulty": "Intermediate",
                    "difficultyScore": 1,
                    "level": "Intermediate",
                    "questionNumber": 113,
                    "existingCode": 
                      "function mergeObjects(...objects) {\n  // Your code here\n};\nconsole.log(mergeObjects({name: 'Alice'}, {age: 25})); // {name: 'Alice', age: 25}",
                    "testCases": [
                      { "condition": "mergeObjects({name: 'Alice'}, {age: 25}) should return {name: 'Alice', age: 25}." },
                      { "condition": "mergeObjects({gender: 'female'}, {location: 'USA'}) should return {gender: 'female', location: 'USA'}." }
                    ],
                    "solutionExplanation": "Use the spread operator to merge multiple objects into one.",
                    "language": "JavaScript"
                  },
                  {
                    "title": "Using Rest Operator for Dynamic Function Arguments",
                    "description": "Write a function that accepts any number of arguments and returns the highest number using the rest operator.",
                    "difficulty": "Intermediate",
                    "difficultyScore": 1,
                    "level": "Intermediate",
                    "questionNumber": 114,
                    "existingCode": 
                      "function findMax(...numbers) {\n  // Your code here\n};\nconsole.log(findMax(1, 2, 3, 4)); // 4",
                    "testCases": [
                      { "condition": "findMax(1, 2, 3, 4) should return 4." },
                      { "condition": "findMax(10, 5, 8) should return 10." }
                    ],
                    "solutionExplanation": "Use the rest operator to collect all arguments and find the highest number using Math.max.",
                    "language": "JavaScript"
                  },
                
                  // Expert Level Tasks
                  {
                    "title": "Using Rest and Spread Operators for Merging Arrays",
                    "description": "Write a function that merges multiple arrays using the spread operator and accepts an arbitrary number of arrays using the rest operator.",
                    "difficulty": "Expert",
                    "difficultyScore": 1,
                    "level": "Expert",
                    "questionNumber": 115,
                    "existingCode": 
                      "function mergeMultipleArrays(...arrays) {\n  // Your code here\n};\nconsole.log(mergeMultipleArrays([1, 2], [3, 4], [5, 6])); // [1, 2, 3, 4, 5, 6]",
                    "testCases": [
                      { "condition": "mergeMultipleArrays([1, 2], [3, 4], [5, 6]) should return [1, 2, 3, 4, 5, 6]." },
                      { "condition": "mergeMultipleArrays([7, 8], [9, 10]) should return [7, 8, 9, 10]." }
                    ],
                    "solutionExplanation": "Use the rest operator to collect multiple arrays and the spread operator to merge them into one array.",
                    "language": "JavaScript"
                  },
                  {
                    "title": "Using Rest and Spread Operators for Object Modification",
                    "description": "Write a function that takes an object and a list of properties, and returns a modified object by updating only those properties using the rest and spread operators.",
                    "difficulty": "Expert",
                    "difficultyScore": 1,
                    "level": "Expert",
                    "questionNumber": 116,
                    "existingCode": 
                      "function modifyObject(obj, ...updates) {\n  // Your code here\n};\nconsole.log(modifyObject({name: 'Alice', age: 25}, {age: 30})); // {name: 'Alice', age: 30}",
                    "testCases": [
                      { "condition": "modifyObject({name: 'Alice', age: 25}, {age: 30}) should return {name: 'Alice', age: 30}." },
                      { "condition": "modifyObject({name: 'Bob', city: 'New York'}, {city: 'Los Angeles'}) should return {name: 'Bob', city: 'Los Angeles'}." }
                    ],
                    "solutionExplanation": "Use the rest operator to collect the properties to update and the spread operator to modify the object.",
                    "language": "JavaScript"
                  },
                    // Basic Level Tasks
                    {
                      "title": "Selecting an Element by ID",
                      "description": "Write a function that selects an element by its ID and changes its text content.",
                      "difficulty": "Basic",
                      "difficultyScore": 1,
                      "level": "Basic",
                      "questionNumber": 117,
                      "existingCode": 
                        "function changeTextById() {\n  // Your code here\n}\nchangeTextById();",
                      "testCases": [
                        { "condition": "The text content of the element with the specified ID should change." }
                      ],
                      "solutionExplanation": "Use getElementById to select the element and modify its text content.",
                      "language": "JavaScript"
                    },
                    {
                      "title": "Selecting an Element Using querySelector",
                      "description": "Write a function that selects an element using querySelector and changes its color.",
                      "difficulty": "Basic",
                      "difficultyScore": 1,
                      "level": "Basic",
                      "questionNumber": 118,
                      "existingCode": 
                        "function changeColor() {\n  // Your code here\n}\nchangeColor();",
                      "testCases": [
                        { "condition": "The color of the selected element should change." }
                      ],
                      "solutionExplanation": "Use querySelector to select an element and change its style property to modify the color.",
                      "language": "JavaScript"
                    },
                    {
                      "title": "Selecting an Element and Changing its Content",
                      "description": "Write a function that selects an element with a specific class name and changes its content.",
                      "difficulty": "Basic",
                      "difficultyScore": 1,
                      "level": "Basic",
                      "questionNumber": 119,
                      "existingCode": 
                        "function updateContent() {\n  // Your code here\n}\nupdateContent();",
                      "testCases": [
                        { "condition": "The content of the element with the specified class name should be updated." }
                      ],
                      "solutionExplanation": "Use querySelector to select an element by class name and update its innerText or innerHTML.",
                      "language": "JavaScript"
                    },
                    {
                      "title": "Change Background Color Using querySelector",
                      "description": "Write a function that selects an element by its ID and changes its background color.",
                      "difficulty": "Basic",
                      "difficultyScore": 1,
                      "level": "Basic",
                      "questionNumber": 120,
                      "existingCode": 
                        "function changeBackgroundColor() {\n  // Your code here\n}\nchangeBackgroundColor();",
                      "testCases": [
                        { "condition": "The background color of the element with the specified ID should change." }
                      ],
                      "solutionExplanation": "Use getElementById to select the element and set its backgroundColor style property.",
                      "language": "JavaScript"
                    },
                    {
                      "title": "Selecting Multiple Elements Using querySelectorAll",
                      "description": "Write a function that selects all elements with a specific class and changes their text content.",
                      "difficulty": "Basic",
                      "difficultyScore": 1,
                      "level": "Basic",
                      "questionNumber": 121,
                      "existingCode": 
                        "function changeTextForAll() {\n  // Your code here\n}\nchangeTextForAll();",
                      "testCases": [
                        { "condition": "All elements with the specified class should have their text content changed." }
                      ],
                      "solutionExplanation": "Use querySelectorAll to select all elements with a specific class and loop through them to update their content.",
                      "language": "JavaScript"
                    },
                  
                    // Intermediate Level Tasks
                    {
                      "title": "Selecting Elements and Modifying Attributes",
                      "description": "Write a function that selects an element by its ID and modifies one of its attributes.",
                      "difficulty": "Intermediate",
                      "difficultyScore": 1,
                      "level": "Intermediate",
                      "questionNumber": 122,
                      "existingCode": 
                        "function changeAttribute() {\n  // Your code here\n}\nchangeAttribute();",
                      "testCases": [
                        { "condition": "The specified attribute of the selected element should be changed." }
                      ],
                      "solutionExplanation": "Use getElementById to select the element and modify its attribute using setAttribute.",
                      "language": "JavaScript"
                    },
                    {
                      "title": "Selecting Elements Using querySelector for Dynamic Interaction",
                      "description": "Write a function that selects an element using querySelector and adds a new class to it when clicked.",
                      "difficulty": "Intermediate",
                      "difficultyScore": 1,
                      "level": "Intermediate",
                      "questionNumber": 123,
                      "existingCode": 
                        "function addClassOnClick() {\n  // Your code here\n}\ndocument.querySelector('#element').addEventListener('click', addClassOnClick);",
                      "testCases": [
                        { "condition": "The class should be added to the selected element when clicked." }
                      ],
                      "solutionExplanation": "Use querySelector to select the element, then add an event listener to modify its class when clicked.",
                      "language": "JavaScript"
                    },
                    {
                      "title": "Toggle Visibility Using querySelector",
                      "description": "Write a function that toggles the visibility of an element when clicked using querySelector.",
                      "difficulty": "Intermediate",
                      "difficultyScore": 1,
                      "level": "Intermediate",
                      "questionNumber": 124,
                      "existingCode": 
                        "function toggleVisibility() {\n  // Your code here\n}\ndocument.querySelector('#element').addEventListener('click', toggleVisibility);",
                      "testCases": [
                        { "condition": "The visibility of the element should toggle when clicked." }
                      ],
                      "solutionExplanation": "Use querySelector to select the element and toggle its visibility using the style.display property.",
                      "language": "JavaScript"
                    },
                    {
                      "title": "Selecting Multiple Elements by Class and Modifying Content",
                      "description": "Write a function that selects all elements with a specific class name and changes their content dynamically.",
                      "difficulty": "Intermediate",
                      "difficultyScore": 1,
                      "level": "Intermediate",
                      "questionNumber": 125,
                      "existingCode": 
                        "function modifyMultipleElements() {\n  // Your code here\n}\nmodifyMultipleElements();",
                      "testCases": [
                        { "condition": "All elements with the specified class should have their content modified." }
                      ],
                      "solutionExplanation": "Use querySelectorAll to select multiple elements and loop through them to modify their content.",
                      "language": "JavaScript"
                    },
                    {
                      "title": "Change an Element’s Class Dynamically Using getElementById",
                      "description": "Write a function that selects an element by ID and changes its class dynamically based on a condition.",
                      "difficulty": "Intermediate",
                      "difficultyScore": 1,
                      "level": "Intermediate",
                      "questionNumber": 126,
                      "existingCode": 
                        "function changeClassBasedOnCondition() {\n  // Your code here\n}\nchangeClassBasedOnCondition();",
                      "testCases": [
                        { "condition": "The class of the element should change based on the condition." }
                      ],
                      "solutionExplanation": "Use getElementById to select the element, then modify its class based on the condition.",
                      "language": "JavaScript"
                    },
                  
                    // Expert Level Tasks
                    {
                      "title": "Selecting Elements and Modifying Styles Dynamically",
                      "description": "Write a function that selects an element and changes its style properties dynamically using querySelector.",
                      "difficulty": "Expert",
                      "difficultyScore": 1,
                      "level": "Expert",
                      "questionNumber": 127,
                      "existingCode": 
                        "function changeStyleDynamically() {\n  // Your code here\n}\nchangeStyleDynamically();",
                      "testCases": [
                        { "condition": "The style of the element should change dynamically when the function is called." }
                      ],
                      "solutionExplanation": "Use querySelector to select the element and modify its style properties directly.",
                      "language": "JavaScript"
                    },
                    {
                      "title": "Selecting Elements and Modifying Attributes Based on Data",
                      "description": "Write a function that selects an element and modifies one of its attributes based on dynamic data.",
                      "difficulty": "Expert",
                      "difficultyScore": 1,
                      "level": "Expert",
                      "questionNumber": 128,
                      "existingCode": 
                        "function modifyAttributeBasedOnData() {\n  // Your code here\n}\nmodifyAttributeBasedOnData();",
                      "testCases": [
                        { "condition": "The attribute of the selected element should be modified based on the data passed." }
                      ],
                      "solutionExplanation": "Use getElementById or querySelector to select the element and dynamically modify its attributes using setAttribute.",
                      "language": "JavaScript"
                    },
                    {
                      "title": "Selecting and Modifying Nested Elements",
                      "description": "Write a function that selects a nested element within a parent element using querySelector and modifies its content.",
                      "difficulty": "Expert",
                      "difficultyScore": 1,
                      "level": "Expert",
                      "questionNumber": 129,
                      "existingCode": 
                        "function modifyNestedElement() {\n  // Your code here\n}\nmodifyNestedElement();",
                      "testCases": [
                        { "condition": "The nested element within the parent should have its content modified." }
                      ],
                      "solutionExplanation": "Use querySelector with a descendant selector to select the nested element and modify its content.",
                      "language": "JavaScript"
                    },
                    {
                      "title": "Dynamically Selecting and Removing Elements",
                      "description": "Write a function that dynamically selects and removes an element from the DOM using getElementById.",
                      "difficulty": "Expert",
                      "difficultyScore": 1,
                      "level": "Expert",
                      "questionNumber": 130,
                      "existingCode": 
                        "function removeElement() {\n  // Your code here\n}\nremoveElement();",
                      "testCases": [
                        { "condition": "The element with the specified ID should be removed from the DOM." }
                      ],
                      "solutionExplanation": "Use getElementById to select the element and remove it using the remove() method.",
                      "language": "JavaScript"
                    },
                      // Callbacks
                      {
                        "title": "Callback Function Example",
                        "description": "Write a function that takes a callback and calls it after 2 seconds.",
                        "difficulty": "Basic",
                        "difficultyScore": 1,
                        "level": "Basic",
                        "questionNumber": 131,
                        "existingCode": 
                          "function delayedCallback(callback) {\n  setTimeout(() => {\n    callback();\n  }, 2000);\n}\ndelayedCallback(() => console.log('Callback called!'));",
                        "testCases": [
                          { "condition": "Callback should be called after 2 seconds." }
                        ],
                        "solutionExplanation": "Use setTimeout to delay the callback invocation.",
                        "language": "JavaScript"
                      },
                      {
                        "title": "Callback Function with Arguments",
                        "description": "Write a function that accepts a callback and a value, and calls the callback with that value.",
                        "difficulty": "Intermediate",
                        "difficultyScore": 1,
                        "level": "Intermediate",
                        "questionNumber": 132,
                        "existingCode": 
                          "function processValue(callback, value) {\n  callback(value);\n}\nprocessValue(value => console.log(value), 'Hello');",
                        "testCases": [
                          { "condition": "Callback should be called with the provided value." }
                        ],
                        "solutionExplanation": "Pass the value as an argument to the callback function.",
                        "language": "JavaScript"
                      },
                      {
                        "title": "Callback with Error Handling",
                        "description": "Write a function that takes a callback with error handling. If the value is negative, call the callback with an error message.",
                        "difficulty": "Intermediate",
                        "difficultyScore": 1,
                        "level": "Intermediate",
                        "questionNumber": 133,
                        "existingCode": 
                          "function processNumber(callback, num) {\n  if (num < 0) {\n    callback('Error: Negative number!');\n  } else {\n    callback(null, num);\n  }\n}\nprocessNumber((err, result) => {\n  if (err) {\n    console.log(err);\n  } else {\n    console.log(result);\n  }\n}, -5);",
                        "testCases": [
                          { "condition": "Error should be passed to callback if the number is negative." }
                        ],
                        "solutionExplanation": "Handle errors by passing an error message as the first argument in the callback.",
                        "language": "JavaScript"
                      },
                      {
                        "title": "Callback Chaining",
                        "description": "Write a function that takes two callbacks and executes them one after the other.",
                        "difficulty": "Expert",
                        "difficultyScore": 1,
                        "level": "Expert",
                        "questionNumber": 134,
                        "existingCode": 
                          "function chainCallbacks(callback1, callback2) {\n  callback1(() => {\n    callback2();\n  });\n}\nchainCallbacks(() => console.log('First callback executed'), () => console.log('Second callback executed'));",
                        "testCases": [
                          { "condition": "Callbacks should be executed in sequence." }
                        ],
                        "solutionExplanation": "Invoke the second callback after the first callback is completed.",
                        "language": "JavaScript"
                      },
                      {
                        "title": "Callback and Array Processing",
                        "description": "Write a function that accepts an array and a callback, and calls the callback on each array element.",
                        "difficulty": "Expert",
                        "difficultyScore": 1,
                        "level": "Expert",
                        "questionNumber": 135,
                        "existingCode": 
                          "function processArray(arr, callback) {\n  arr.forEach(item => callback(item));\n}\nprocessArray([1, 2, 3], item => console.log(item * 2));",
                        "testCases": [
                          { "condition": "Callback should be called for each element of the array." }
                        ],
                        "solutionExplanation": "Use forEach to iterate over the array and call the callback on each element.",
                        "language": "JavaScript"
                      },
                    
                      // Promises
                      {
                        "title": "Simple Promise Example",
                        "description": "Write a function that returns a promise that resolves after 2 seconds.",
                        "difficulty": "Basic",
                        "difficultyScore": 1,
                        "level": "Basic",
                        "questionNumber": 136,
                        "existingCode": 
                          "function delayedPromise() {\n  return new Promise(resolve => {\n    setTimeout(() => resolve('Resolved after 2 seconds'), 2000);\n  });\n}\ndelayedPromise().then(console.log);",
                        "testCases": [
                          { "condition": "Promise should resolve with the message after 2 seconds." }
                        ],
                        "solutionExplanation": "Use a Promise and resolve it after a setTimeout delay.",
                        "language": "JavaScript"
                      },
                      {
                        "title": "Promise with Error Handling",
                        "description": "Write a function that returns a promise that rejects if the input number is negative.",
                        "difficulty": "Intermediate",
                        "difficultyScore": 1,
                        "level": "Intermediate",
                        "questionNumber": 137,
                        "existingCode": 
                          "function checkNumber(num) {\n  return new Promise((resolve, reject) => {\n    if (num < 0) {\n      reject('Error: Negative number');\n    } else {\n      resolve(num);\n    }\n  });\n}\ncheckNumber(-5).catch(console.log);",
                        "testCases": [
                          { "condition": "Promise should reject if the number is negative." }
                        ],
                        "solutionExplanation": "Use reject to handle errors in the promise and reject if the number is negative.",
                        "language": "JavaScript"
                      },
                      {
                        "title": "Chaining Promises",
                        "description": "Write a function that chains two promises and returns the result of both.",
                        "difficulty": "Intermediate",
                        "difficultyScore": 1,
                        "level": "Intermediate",
                        "questionNumber": 138,
                        "existingCode": 
                          "function chainPromises() {\n  return Promise.resolve(1)\n    .then(result => result * 2)\n    .then(result => result + 3);\n}\nchainPromises().then(console.log);",
                        "testCases": [
                          { "condition": "Promise should chain and return 5." }
                        ],
                        "solutionExplanation": "Chain then() methods to handle multiple asynchronous operations sequentially.",
                        "language": "JavaScript"
                      },
                      {
                        "title": "Promise.all Example",
                        "description": "Write a function that uses Promise.all to handle multiple promises concurrently.",
                        "difficulty": "Expert",
                        "difficultyScore": 1,
                        "level": "Expert",
                        "questionNumber": 139,
                        "existingCode": 
                          "function handleMultiplePromises() {\n  return Promise.all([\n    Promise.resolve(1),\n    Promise.resolve(2),\n    Promise.resolve(3)\n  ]).then(console.log);\n}\nhandleMultiplePromises();",
                        "testCases": [
                          { "condition": "Promise.all should resolve with an array of results." }
                        ],
                        "solutionExplanation": "Use Promise.all to wait for multiple promises to resolve concurrently.",
                        "language": "JavaScript"
                      },
                      {
                        "title": "Promise Race Example",
                        "description": "Write a function that uses Promise.race to handle the first resolved promise.",
                        "difficulty": "Expert",
                        "difficultyScore": 1,
                        "level": "Expert",
                        "questionNumber": 140,
                        "existingCode": 
                          "function racePromises() {\n  return Promise.race([\n    new Promise(resolve => setTimeout(() => resolve('First'), 1000)),\n    new Promise(resolve => setTimeout(() => resolve('Second'), 2000))\n  ]).then(console.log);\n}\nracePromises();",
                        "testCases": [
                          { "condition": "Promise.race should return 'First'." }
                        ],
                        "solutionExplanation": "Use Promise.race to handle the first promise that resolves in the array of promises.",
                        "language": "JavaScript"
                      },
                    
                      // Async/Await
                      {
                        "title": "Async/Await Example",
                        "description": "Write an async function that returns a promise resolved after 2 seconds.",
                        "difficulty": "Basic",
                        "difficultyScore": 1,
                        "level": "Basic",
                        "questionNumber": 141,
                        "existingCode": 
                          "async function delayedAsync() {\n  return new Promise(resolve => setTimeout(() => resolve('Resolved'), 2000));\n}\ndelayedAsync().then(console.log);",
                        "testCases": [
                          { "condition": "Async function should resolve after 2 seconds." }
                        ],
                        "solutionExplanation": "Use async and await to handle asynchronous code in a more readable manner.",
                        "language": "JavaScript"
                      },
                      {
                        "title": "Async/Await with Error Handling",
                        "description": "Write an async function that throws an error if the input is negative.",
                        "difficulty": "Intermediate",
                        "difficultyScore": 1,
                        "level": "Intermediate",
                        "questionNumber": 142,
                        "existingCode": 
                          "async function checkPositive(num) {\n  if (num < 0) throw 'Error: Negative number';\n  return num;\n}\ncheckPositive(-1).catch(console.log);",
                        "testCases": [
                          { "condition": "Async function should throw an error for negative numbers." }
                        ],
                        "solutionExplanation": "Use try-catch with async/await for handling errors in asynchronous code.",
                        "language": "JavaScript"
                      },
                      {
                        "title": "Using Async/Await for Chaining",
                        "description": "Write an async function that chains two asynchronous actions using async/await.",
                        "difficulty": "Intermediate",
                        "difficultyScore": 1,
                        "level": "Intermediate",
                        "questionNumber": 143,
                        "existingCode": 
                          "async function chainAsync() {\n  const result1 = await Promise.resolve(5);\n  const result2 = await Promise.resolve(result1 + 5);\n  return result2;\n}\nchainAsync().then(console.log);",
                        "testCases": [
                          { "condition": "Async function should return 10." }
                        ],
                        "solutionExplanation": "Chain asynchronous operations using await and handle each result in sequence.",
                        "language": "JavaScript"
                      },
                      {
                        "title": "Async/Await with Multiple Promises",
                        "description": "Write an async function that waits for multiple promises using async/await.",
                        "difficulty": "Expert",
                        "difficultyScore": 1,
                        "level": "Expert",
                        "questionNumber": 144,
                        "existingCode": 
                          "async function multiplePromises() {\n  const [result1, result2] = await Promise.all([\n    Promise.resolve(1),\n    Promise.resolve(2)\n  ]);\n  return result1 + result2;\n}\nmultiplePromises().then(console.log);",
                        "testCases": [
                          { "condition": "Async function should resolve with the sum of 1 and 2." }
                        ],
                        "solutionExplanation": "Use async/await with Promise.all to wait for multiple promises and resolve them concurrently.",
                        "language": "JavaScript"
                      },
                    
                      // Fetch API and AJAX
                      {
                        "title": "Fetch API Basic Request",
                        "description": "Write a function that uses the Fetch API to make a GET request and log the response.",
                        "difficulty": "Basic",
                        "difficultyScore": 1,
                        "level": "Basic",
                        "questionNumber": 145,
                        "existingCode": 
                          "function fetchData() {\n  fetch('https://jsonplaceholder.typicode.com/posts')\n    .then(response => response.json())\n    .then(data => console.log(data));\n}\nfetchData();",
                        "testCases": [
                          { "condition": "Function should log the response data." }
                        ],
                        "solutionExplanation": "Use fetch to send a GET request and handle the response with .then() method.",
                        "language": "JavaScript"
                      },
                      {
                        "title": "AJAX Request Example",
                        "description": "Write an AJAX request to fetch data from an API.",
                        "difficulty": "Intermediate",
                        "difficultyScore": 1,
                        "level": "Intermediate",
                        "questionNumber": 146,
                        "existingCode": 
                          "const xhr = new XMLHttpRequest();\nxhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');\nxhr.onload = () => {\n  if (xhr.status === 200) {\n    console.log(JSON.parse(xhr.responseText));\n  }\n};\nxhr.send();",
                        "testCases": [
                          { "condition": "AJAX should log the response text." }
                        ],
                        "solutionExplanation": "Use XMLHttpRequest to send an asynchronous request and handle the response using onload.",
                        "language": "JavaScript"
                      },
                      {
                        "title": "Fetch API with Error Handling",
                        "description": "Write a function that uses Fetch API to get data from an API and handles errors.",
                        "difficulty": "Intermediate",
                        "difficultyScore": 1,
                        "level": "Intermediate",
                        "questionNumber": 147,
                        "existingCode": 
                          "function fetchWithErrorHandling() {\n  fetch('https://jsonplaceholder.typicode.com/invalidurl')\n    .then(response => {\n      if (!response.ok) throw 'Error fetching data';\n      return response.json();\n    })\n    .catch(console.log);\n}\nfetchWithErrorHandling();",
                        "testCases": [
                          { "condition": "Function should catch and log any errors." }
                        ],
                        "solutionExplanation": "Use .catch() to handle errors in Fetch requests.",
                        "language": "JavaScript"
                      },{
                        title: "Create a Countdown Timer",
                        description: "Create a countdown timer that counts down from 10 seconds and displays the remaining time.",
                        difficulty: "Intermediate",
                        difficultyScore: 1,
                        level: "Intermediate",
                        questionNumber: 148,
                        existingCode: `
                          <p id="timer">10</p>
                          <script>
                            let countdown = 10;
                            function startCountdown() {
                              // Your code here
                            }
                          </script>
                        `,
                        testCases: [
                          { condition: "Timer should count down from 10 seconds to 0." },
                          { condition: "Timer should update every second." },
                        ],
                        solutionExplanation: "Use JavaScript's setInterval to decrement the countdown every second and update the text content of the paragraph element.",
                        language: "JavaScript",
                      },{
                        title: "Toggle Div Visibility",
                        description: "Create a button that toggles the visibility of a div element.",
                        difficulty: "Basic",
                        difficultyScore: 1,
                        level: "Basic",
                        questionNumber: 150,
                        existingCode: `
                          <button onclick="toggleDiv()">Toggle Div</button>
                          <div id="myDiv" style="display: block;">This is a div</div>
                          <script>
                            function toggleDiv() {
                              // Your code here
                            }
                          </script>
                        `,
                        testCases: [
                          { condition: "The div should hide/show when the button is clicked." },
                        ],
                        solutionExplanation: "Use JavaScript to toggle the display property of the div element.",
                        language: "JavaScript",
                      },
                      {
                        title: "Create a Counter",
                        description: "Create a button that increments a counter displayed in a paragraph.",
                        difficulty: "Basic",
                        difficultyScore: 1,
                        level: "Basic",
                        questionNumber: 151,
                        existingCode: `
                          <button onclick="incrementCounter()">Increment</button>
                          <p id="counter">0</p>
                          <script>
                            let count = 0;
                            function incrementCounter() {
                              // Your code here
                            }
                          </script>
                        `,
                        testCases: [
                          { condition: "Counter should increment by 1 each time the button is clicked." },
                        ],
                        solutionExplanation: "Use a global variable to keep track of the count and update the paragraph.",
                        language: "JavaScript",
                      },
                      
                      // Intermediate Level Tasks
                      {
                        title: "Show Alert on Form Submission",
                        description: "Display an alert when the form is submitted.",
                        difficulty: "Intermediate",
                        difficultyScore: 1,
                        level: "Intermediate",
                        questionNumber: 152,
                        existingCode: `
                          <form onsubmit="showAlert(event)">
                            <input type="text" placeholder="Enter something" />
                            <button type="submit">Submit</button>
                          </form>
                          <script>
                            function showAlert(e) {
                              e.preventDefault();
                              // Your code here
                            }
                          </script>
                        `,
                        testCases: [
                          { condition: "An alert should be displayed with the entered text on form submission." },
                        ],
                        solutionExplanation: "Use 'onsubmit' event and prevent default form behavior to display an alert.",
                        language: "JavaScript",
                      },
                      {
                        title: "Change Background Color",
                        description: "Create a button that changes the background color of the page.",
                        difficulty: "Intermediate",
                        difficultyScore: 1,
                        level: "Intermediate",
                        questionNumber: 153,
                        existingCode: `
                          <button onclick="changeBackgroundColor()">Change Background</button>
                          <script>
                            function changeBackgroundColor() {
                              // Your code here
                            }
                          </script>
                        `,
                        testCases: [
                          { condition: "Background color should change each time the button is clicked." },
                        ],
                        solutionExplanation: "Use JavaScript to change the background color of the document body.",
                        language: "JavaScript",
                      },
                      
                      // Expert Level Tasks
                      {
                        title: "Create a To-Do List",
                        description: "Build a simple to-do list that allows adding and removing items.",
                        difficulty: "Expert",
                        difficultyScore: 1,
                        level: "Expert",
                        questionNumber: 154,
                        existingCode: `
                          <input type="text" id="todoInput" placeholder="Add a to-do" />
                          <button onclick="addTodo()">Add To-Do</button>
                          <ul id="todoList"></ul>
                          <script>
                            function addTodo() {
                              // Your code here
                            }
                          </script>
                        `,
                        testCases: [
                          { condition: "To-do items should be added to the list when the button is clicked." },
                          { condition: "To-do items should be removable from the list." },
                        ],
                        solutionExplanation: "Use JavaScript to create and remove list items dynamically.",
                        language: "JavaScript",
                      },
                      {
                        title: "Create a Modal Popup",
                        description: "Create a button that shows a modal popup.",
                        difficulty: "Expert",
                        difficultyScore: 1,
                        level: "Expert",
                        questionNumber: 155,
                        existingCode: `
                          <button onclick="showModal()">Show Modal</button>
                          <div id="modal" style="display: none;">
                            <div class="modal-content">
                              <span onclick="closeModal()">Close</span>
                              <p>This is a modal</p>
                            </div>
                          </div>
                          <style>
                            .modal-content { /* Add your styles here */ }
                          </style>
                          <script>
                            function showModal() {
                              // Your code here
                            }
                            function closeModal() {
                              // Your code here
                            }
                          </script>
                        `,
                        testCases: [
                          { condition: "Modal should appear when the button is clicked." },
                          { condition: "Modal should close when the close button is clicked." },
                        ],
                        solutionExplanation: "Use JavaScript to show/hide the modal with CSS for styling.",
                        language: "JavaScript",
                      },// JavaScript Questions

                      {
                        title: "Create a Basic Calculator",
                        description: "Build a simple calculator that can add, subtract, multiply, and divide two numbers.",
                        difficulty: "Basic",
                        difficultyScore: 1,
                        level: "Basic",
                        questionNumber: 156,
                        existingCode: `
                          <input type="number" id="num1" />
                          <input type="number" id="num2" />
                          <button onclick="calculate()">Calculate</button>
                          <p id="result"></p>
                          <script>
                            function calculate() {
                              // Your code here
                            }
                          </script>
                        `,
                        testCases: [
                          { condition: "Calculator should return the correct result for addition, subtraction, multiplication, and division." },
                        ],
                        solutionExplanation: "Use JavaScript to retrieve values from inputs, perform arithmetic, and display the result.",
                        language: "JavaScript",
                      },
                      
                      {
                        title: "Find the Maximum Number in an Array",
                        description: "Write a JavaScript function that finds the maximum number in an array.",
                        difficulty: "Basic",
                        difficultyScore: 1,
                        level: "Basic",
                        questionNumber: 157,
                        existingCode: `
                          <script>
                            function findMax(arr) {
                              // Your code here
                            }
                            console.log(findMax([5, 12, 8, 2, 7]));
                          </script>
                        `,
                        testCases: [
                          { condition: "The function should return 12 for the given array." },
                        ],
                        solutionExplanation: "Use JavaScript's Math.max() function to find the maximum value in the array.",
                        language: "JavaScript",
                      },
                      
                      {
                        title: "Check if a String is Palindrome",
                        description: "Write a JavaScript function that checks if a given string is a palindrome.",
                        difficulty: "Basic",
                        difficultyScore: 1,
                        level: "Basic",
                        questionNumber: 158,
                        existingCode: `
                          <script>
                            function isPalindrome(str) {
                              // Your code here
                            }
                            console.log(isPalindrome('madam'));
                          </script>
                        `,
                        testCases: [
                          { condition: "The function should return true for the string 'madam'." },
                          { condition: "The function should return false for the string 'hello'." },
                        ],
                        solutionExplanation: "Check if the string is the same forwards and backwards.",
                        language: "JavaScript",
                      },
                      
                      {
                        title: "Sum All Numbers in an Array",
                        description: "Write a JavaScript function that sums all the numbers in an array.",
                        difficulty: "Basic",
                        difficultyScore: 1,
                        level: "Basic",
                        questionNumber: 159,
                        existingCode: `
                          <script>
                            function sumArray(arr) {
                              // Your code here
                            }
                            console.log(sumArray([1, 2, 3, 4, 5]));
                          </script>
                        `,
                        testCases: [
                          { condition: "The function should return 15 for the array [1, 2, 3, 4, 5]." },
                        ],
                        solutionExplanation: "Iterate through the array and sum each element.",
                        language: "JavaScript",
                      },
                      
                      // Intermediate Level Tasks
                      
                      {
                        title: "Create a Countdown Timer",
                        description: "Create a countdown timer that counts down from a given number of seconds.",
                        difficulty: "Intermediate",
                        difficultyScore: 2,
                        level: "Intermediate",
                        questionNumber: 160,
                        existingCode: `
                          <script>
                            function startCountdown(seconds) {
                              // Your code here
                            }
                          </script>
                        `,
                        testCases: [
                          { condition: "The timer should count down from the given number of seconds." },
                        ],
                        solutionExplanation: "Use JavaScript's setInterval() and clearInterval() methods to create a countdown timer.",
                        language: "JavaScript",
                      },
                      
                      {
                        title: "Create a Dynamic Dropdown List",
                        description: "Create a dropdown list that is dynamically populated with options based on user input.",
                        difficulty: "Intermediate",
                        difficultyScore: 2,
                        level: "Intermediate",
                        questionNumber: 161,
                        existingCode: `
                          <input type="text" id="search" placeholder="Type to search" />
                          <select id="dropdown"></select>
                          <script>
                            const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Grape', 'Mango'];
                            function populateDropdown() {
                              // Your code here
                            }
                          </script>
                        `,
                        testCases: [
                          { condition: "The dropdown should be populated with options based on user input." },
                        ],
                        solutionExplanation: "Use JavaScript to filter the array of items and add matching options to the dropdown.",
                        language: "JavaScript",
                      },
                      
                      {
                        title: "Sort an Array in Ascending Order",
                        description: "Write a JavaScript function that sorts an array of numbers in ascending order.",
                        difficulty: "Intermediate",
                        difficultyScore: 2,
                        level: "Intermediate",
                        questionNumber: 162,
                        existingCode: `
                          <script>
                            function sortArray(arr) {
                              // Your code here
                            }
                            console.log(sortArray([5, 2, 8, 1, 4]));
                          </script>
                        `,
                        testCases: [
                          { condition: "The function should return [1, 2, 4, 5, 8] for the given array." },
                        ],
                        solutionExplanation: "Use JavaScript's sort() function to sort the array in ascending order.",
                        language: "JavaScript",
                      },
                      
                      {
                        title: "Check if a Number is Prime",
                        description: "Write a JavaScript function that checks if a number is prime.",
                        difficulty: "Intermediate",
                        difficultyScore: 2,
                        level: "Intermediate",
                        questionNumber: 163,
                        existingCode: `
                          <script>
                            function isPrime(num) {
                              // Your code here
                            }
                            console.log(isPrime(7)); // true
                            console.log(isPrime(8)); // false
                          </script>
                        `,
                        testCases: [
                          { condition: "The function should return true for prime numbers and false for non-prime numbers." },
                        ],
                        solutionExplanation: "Check if the number has any divisors other than 1 and itself.",
                        language: "JavaScript",
                      },
                      
                      // Expert Level Tasks
                      
                      {
                        title: "Create a Simple API with Fetch",
                        description: "Write a JavaScript function that fetches data from an API and displays it.",
                        difficulty: "Expert",
                        difficultyScore: 3,
                        level: "Expert",
                        questionNumber: 164,
                        existingCode: `
                          <script>
                            function fetchData() {
                              // Your code here
                            }
                          </script>
                        `,
                        testCases: [
                          { condition: "The function should fetch data from the API and display it." },
                        ],
                        solutionExplanation: "Use the Fetch API to retrieve data from the given endpoint and display it in the document.",
                        language: "JavaScript",
                      },
                      
                      {
                        title: "Build a Dynamic Table from Array Data",
                        description: "Write a JavaScript function that builds a table from an array of data.",
                        difficulty: "Expert",
                        difficultyScore: 3,
                        level: "Expert",
                        questionNumber: 165,
                        existingCode: `
                          <script>
                            const data = [
                              ['Name', 'Age', 'City'],
                              ['John', 25, 'New York'],
                              ['Jane', 22, 'London'],
                            ];
                            function buildTable() {
                              // Your code here
                            }
                          </script>
                        `,
                        testCases: [
                          { condition: "The function should build a table with the provided data." },
                        ],
                        solutionExplanation: "Use JavaScript to dynamically create table rows and cells based on the array data.",
                        language: "JavaScript",
                      },
                      
                      {
                        title: "Implement Debouncing in JavaScript",
                        description: "Implement a debounced function in JavaScript that delays a function call until after a specified time has passed.",
                        difficulty: "Expert",
                        difficultyScore: 3,
                        level: "Expert",
                        questionNumber: 166,
                        existingCode: `
                          <script>
                            function debounce(func, delay) {
                              // Your code here
                            }
                          </script>
                        `,
                        testCases: [
                          { condition: "The debounced function should delay execution until after the specified delay." },
                        ],
                        solutionExplanation: "Use setTimeout() and clearTimeout() to implement debouncing in JavaScript.",
                        language: "JavaScript",
                      },
                      
                      {
                        title: "Create a JavaScript Singleton",
                        description: "Write a JavaScript Singleton pattern implementation.",
                        difficulty: "Expert",
                        difficultyScore: 3,
                        level: "Expert",
                        questionNumber: 167,
                        existingCode: `
                          <script>
                            const Singleton = (function() {
                              // Your code here
                            })();
                          </script>
                        `,
                        testCases: [
                          { condition: "The Singleton instance should always return the same object." },
                        ],
                        solutionExplanation: "Use the JavaScript closure pattern to ensure a single instance of the object is returned.",
                        language: "JavaScript",
                      },// JavaScript Questions with Difficulty Score 1

                      {
                        title: "Validate Email Format",
                        description: "Write a JavaScript function to validate if an email address is in a valid format.",
                        difficulty: "Basic",
                        difficultyScore: 1,
                        level: "Basic",
                        questionNumber: 168,
                        existingCode: `
                          <script>
                            function validateEmail(email) {
                              // Your code here
                            }
                            console.log(validateEmail('test@example.com')); // true
                            console.log(validateEmail('invalid-email')); // false
                          </script>
                        `,
                        testCases: [
                          { condition: "The function should return true for valid email formats and false for invalid ones." },
                        ],
                        solutionExplanation: "Use a regular expression to validate the email format.",
                        language: "JavaScript",
                      },
                      
                      {
                        title: "Reverse an Array",
                        description: "Write a JavaScript function that reverses an array of numbers.",
                        difficulty: "Basic",
                        difficultyScore: 1,
                        level: "Basic",
                        questionNumber: 169,
                        existingCode: `
                          <script>
                            function reverseArray(arr) {
                              // Your code here
                            }
                            console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
                          </script>
                        `,
                        testCases: [
                          { condition: "The function should return the reversed array." },
                        ],
                        solutionExplanation: "Use JavaScript's built-in reverse() method to reverse the array.",
                        language: "JavaScript",
                      },
                      
                      {
                        title: "Count Occurrences of a Word in a String",
                        description: "Write a JavaScript function that counts how many times a word appears in a given string.",
                        difficulty: "Basic",
                        difficultyScore: 1,
                        level: "Basic",
                        questionNumber: 170,
                        existingCode: `
                          <script>
                            function countOccurrences(str, word) {
                              // Your code here
                            }
                            console.log(countOccurrences('hello world, hello everyone', 'hello')); // 2
                          </script>
                        `,
                        testCases: [
                          { condition: "The function should return the correct count of word occurrences in the string." },
                        ],
                        solutionExplanation: "Use JavaScript's regular expressions or split() to count occurrences of the word.",
                        language: "JavaScript",
                      },
                      
                      {
                        title: "Find the Factorial of a Number",
                        description: "Write a JavaScript function to find the factorial of a number.",
                        difficulty: "Basic",
                        difficultyScore: 1,
                        level: "Basic",
                        questionNumber: 171,
                        existingCode: `
                          <script>
                            function factorial(n) {
                              // Your code here
                            }
                            console.log(factorial(5)); // 120
                          </script>
                        `,
                        testCases: [
                          { condition: "The function should return the correct factorial of the given number." },
                        ],
                        solutionExplanation: "Use a loop or recursion to calculate the factorial of the number.",
                        language: "JavaScript",
                      },
                      
                      // Intermediate Level Tasks
                      
                      {
                        title: "Filter Array of Numbers Greater Than a Given Number",
                        description: "Write a JavaScript function that filters numbers greater than a given threshold from an array.",
                        difficulty: "Basic",
                        difficultyScore: 1,
                        level: "Basic",
                        questionNumber: 172,
                        existingCode: `
                          <script>
                            function filterGreaterThan(arr, threshold) {
                              // Your code here
                            }
                            console.log(filterGreaterThan([5, 12, 8, 2, 7], 6)); // [12, 8, 7]
                          </script>
                        `,
                        testCases: [
                          { condition: "The function should return an array with numbers greater than the threshold." },
                        ],
                        solutionExplanation: "Use JavaScript's filter() method to filter the array based on the threshold.",
                        language: "JavaScript",
                      },
                      
                      {
                        title: "Convert a String to a Date Object",
                        description: "Write a JavaScript function that converts a date string to a Date object.",
                        difficulty: "Basic",
                        difficultyScore: 1,
                        level: "Basic",
                        questionNumber: 173,
                        existingCode: `
                          <script>
                            function convertToDate(dateString) {
                              // Your code here
                            }
                            console.log(convertToDate('2024-12-25')); // Date object representing Dec 25, 2024
                          </script>
                        `,
                        testCases: [
                          { condition: "The function should return a Date object representing the date in the string." },
                        ],
                        solutionExplanation: "Use JavaScript's Date constructor to convert the date string to a Date object.",
                        language: "JavaScript",
                      },
                      
                      {
                        title: "Generate a Random Number Between Two Values",
                        description: "Write a JavaScript function that generates a random number between two values (inclusive).",
                        difficulty: "Basic",
                        difficultyScore: 1,
                        level: "Basic",
                        questionNumber: 174,
                        existingCode: `
                          <script>
                            function randomBetween(min, max) {
                              // Your code here
                            }
                            console.log(randomBetween(1, 10)); // A random number between 1 and 10
                          </script>
                        `,
                        testCases: [
                          { condition: "The function should return a random number between the min and max values (inclusive)." },
                        ],
                        solutionExplanation: "Use Math.random() and the formula to generate a random number within the given range.",
                        language: "JavaScript",
                      },
                      
                      {
                        title: "Sum of Even Numbers in an Array",
                        description: "Write a JavaScript function that sums all the even numbers in an array.",
                        difficulty: "Basic",
                        difficultyScore: 1,
                        level: "Basic",
                        questionNumber: 175,
                        existingCode: `
                          <script>
                            function sumEvenNumbers(arr) {
                              // Your code here
                            }
                            console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // 12
                          </script>
                        `,
                        testCases: [
                          { condition: "The function should return the sum of all even numbers in the array." },
                        ],
                        solutionExplanation: "Use JavaScript's filter() method to find even numbers and reduce() to sum them.",
                        language: "JavaScript",
                      },
                      
                      // Expert Level Tasks
                      
                      {
                        title: "Implement Local Storage in JavaScript",
                        description: "Create a JavaScript function that stores and retrieves data using Local Storage.",
                        difficulty: "Basic",
                        difficultyScore: 1,
                        level: "Basic",
                        questionNumber: 176,
                        existingCode: `
                          <script>
                            function saveToLocalStorage(key, value) {
                              // Your code here
                            }
                            function getFromLocalStorage(key) {
                              // Your code here
                            }
                            saveToLocalStorage('name', 'John');
                            console.log(getFromLocalStorage('name')); // John
                          </script>
                        `,
                        testCases: [
                          { condition: "The function should store and retrieve data from Local Storage correctly." },
                        ],
                        solutionExplanation: "Use JavaScript's localStorage API to store and retrieve data as key-value pairs.",
                        language: "JavaScript",
                      },
                      
                      {
                        title: "Create a Simple SPA (Single Page Application)",
                        description: "Build a simple single-page application (SPA) with dynamic content changes based on user actions.",
                        difficulty: "Basic",
                        difficultyScore: 1,
                        level: "Basic",
                        questionNumber: 177,
                        existingCode: `
                          <div>
                            <button onclick="changeContent('home')">Home</button>
                            <button onclick="changeContent('about')">About</button>
                            <button onclick="changeContent('contact')">Contact</button>
                            <div id="content"></div>
                          </div>
                          <script>
                            function changeContent(page) {
                              // Your code here
                            }
                          </script>
                        `,
                        testCases: [
                          { condition: "The page content should change dynamically based on the button clicked." },
                        ],
                        solutionExplanation: "Use JavaScript to dynamically load content into the div by manipulating the DOM based on user interaction.",
                        language: "JavaScript",
                      },
                      
                      {
                        title: "Implementing Event Delegation",
                        description: "Implement event delegation in JavaScript to handle events for dynamically added elements.",
                        difficulty: "Basic",
                        difficultyScore: 1,
                        level: "Basic",
                        questionNumber: 178,
                        existingCode: `
                          <div id="parent">
                            <button>Button 1</button>
                            <button>Button 2</button>
                          </div>
                          <script>
                            function handleClick(event) {
                              // Your code here
                            }
                            document.getElementById('parent').addEventListener('click', handleClick);
                          </script>
                        `,
                        testCases: [
                          { condition: "The function should handle click events for buttons dynamically added to the parent." },
                        ],
                        solutionExplanation: "Use event delegation to listen for events on a parent element and handle them for child elements.",
                        language: "JavaScript",
                      },
                      
                      {
                        title: "Create a Search Filter for a List",
                        description: "Create a JavaScript function that filters a list of items based on user input in a search bar.",
                        difficulty: "Basic",
                        difficultyScore: 1,
                        level: "Basic",
                        questionNumber: 179,
                        existingCode: `
                          <input type="text" id="search" placeholder="Search" />
                          <ul id="itemList">
                            <li>Apple</li>
                            <li>Banana</li>
                            <li>Cherry</li>
                          </ul>
                          <script>
                            function filterList() {
                              // Your code here
                            }
                          </script>
                        `,
                        testCases: [
                          { condition: "The list should filter based on the input in the search field." },
                        ],
                        solutionExplanation: "Use JavaScript to compare the input with the list items and hide non-matching ones.",
                        language: "JavaScript",
                      },// Additional JavaScript Questions with Difficulty Score 1

                      {
                        title: "Calculate the Sum of Array Elements",
                        description: "Write a JavaScript function that calculates the sum of all elements in an array of numbers.",
                        difficulty: "Basic",
                        difficultyScore: 1,
                        level: "Basic",
                        questionNumber: 180,
                        existingCode: `
                          <script>
                            function sumArray(arr) {
                              // Your code here
                            }
                            console.log(sumArray([1, 2, 3, 4, 5])); // 15
                          </script>
                        `,
                        testCases: [
                          { condition: "The function should return the sum of all elements in the array." },
                        ],
                        solutionExplanation: "Use JavaScript's reduce() method to accumulate the sum of the array's elements.",
                        language: "JavaScript",
                      },
                      
                      {
                        title: "Check if a Number is Prime",
                        description: "Write a JavaScript function that checks if a number is prime.",
                        difficulty: "Basic",
                        difficultyScore: 1,
                        level: "Basic",
                        questionNumber: 181,
                        existingCode: `
                          <script>
                            function isPrime(num) {
                              // Your code here
                            }
                            console.log(isPrime(7)); // true
                            console.log(isPrime(8)); // false
                          </script>
                        `,
                        testCases: [
                          { condition: "The function should return true if the number is prime, otherwise false." },
                        ],
                        solutionExplanation: "Use a loop to check if the number is divisible by any number other than 1 and itself.",
                        language: "JavaScript",
                      },
                      
                      {
                        title: "Find Maximum Value in Array",
                        description: "Write a JavaScript function that finds the maximum value in an array.",
                        difficulty: "Basic",
                        difficultyScore: 1,
                        level: "Basic",
                        questionNumber: 182,
                        existingCode: `
                          <script>
                            function findMax(arr) {
                              // Your code here
                            }
                            console.log(findMax([1, 5, 3, 9, 2])); // 9
                          </script>
                        `,
                        testCases: [
                          { condition: "The function should return the maximum value from the array." },
                        ],
                        solutionExplanation: "Use JavaScript's Math.max() method along with the spread operator to find the maximum value.",
                        language: "JavaScript",
                      },
                      
                      {
                        title: "Convert Fahrenheit to Celsius",
                        description: "Write a JavaScript function that converts a temperature from Fahrenheit to Celsius.",
                        difficulty: "Basic",
                        difficultyScore: 1,
                        level: "Basic",
                        questionNumber: 183,
                        existingCode: `
                          <script>
                            function fahrenheitToCelsius(fahrenheit) {
                              // Your code here
                            }
                            console.log(fahrenheitToCelsius(32)); // 0
                          </script>
                        `,
                        testCases: [
                          { condition: "The function should correctly convert Fahrenheit to Celsius." },
                        ],
                        solutionExplanation: "Use the formula (Fahrenheit - 32) * 5/9 to convert to Celsius.",
                        language: "JavaScript",
                      },
                      
                      {
                        title: "Check if a String is a Palindrome",
                        description: "Write a JavaScript function that checks if a string is a palindrome.",
                        difficulty: "Basic",
                        difficultyScore: 1,
                        level: "Basic",
                        questionNumber: 184,
                        existingCode: `
                          <script>
                            function isPalindrome(str) {
                              // Your code here
                            }
                            console.log(isPalindrome('racecar')); // true
                            console.log(isPalindrome('hello')); // false
                          </script>
                        `,
                        testCases: [
                          { condition: "The function should return true if the string is a palindrome, otherwise false." },
                        ],
                        solutionExplanation: "Reverse the string and compare it with the original to check if it's a palindrome.",
                        language: "JavaScript",
                      },
                      
                      // Intermediate Level Tasks
                      
                      {
                        title: "Count Vowels in a String",
                        description: "Write a JavaScript function that counts the number of vowels in a string.",
                        difficulty: "Basic",
                        difficultyScore: 1,
                        level: "Basic",
                        questionNumber: 185,
                        existingCode: `
                          <script>
                            function countVowels(str) {
                              // Your code here
                            }
                            console.log(countVowels('hello world')); // 3
                          </script>
                        `,
                        testCases: [
                          { condition: "The function should return the correct count of vowels in the string." },
                        ],
                        solutionExplanation: "Use a regular expression or loop through the string to count the vowels (a, e, i, o, u).",
                        language: "JavaScript",
                      },
                      
                      {
                        title: "Find the Second Largest Element in an Array",
                        description: "Write a JavaScript function that finds the second largest element in an array of numbers.",
                        difficulty: "Basic",
                        difficultyScore: 1,
                        level: "Basic",
                        questionNumber: 186,
                        existingCode: `
                          <script>
                            function findSecondLargest(arr) {
                              // Your code here
                            }
                            console.log(findSecondLargest([1, 2, 3, 4, 5])); // 4
                          </script>
                        `,
                        testCases: [
                          { condition: "The function should return the second largest number in the array." },
                        ],
                        solutionExplanation: "Sort the array and return the second-to-last element, or find the second largest with a loop.",
                        language: "JavaScript",
                      },
                      
                      {
                        title: "Merge Two Arrays into One",
                        description: "Write a JavaScript function that merges two arrays into a single array.",
                        difficulty: "Basic",
                        difficultyScore: 1,
                        level: "Basic",
                        questionNumber: 187,
                        existingCode: `
                          <script>
                            function mergeArrays(arr1, arr2) {
                              // Your code here
                            }
                            console.log(mergeArrays([1, 2], [3, 4])); // [1, 2, 3, 4]
                          </script>
                        `,
                        testCases: [
                          { condition: "The function should return a new array that contains all elements of both arrays." },
                        ],
                        solutionExplanation: "Use the concat() method or the spread operator to merge the arrays.",
                        language: "JavaScript",
                      },
                      
                      {
                        title: "Remove Duplicates from an Array",
                        description: "Write a JavaScript function that removes duplicates from an array.",
                        difficulty: "Basic",
                        difficultyScore: 1,
                        level: "Basic",
                        questionNumber: 188,
                        existingCode: `
                          <script>
                            function removeDuplicates(arr) {
                              // Your code here
                            }
                            console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
                          </script>
                        `,
                        testCases: [
                          { condition: "The function should return an array with no duplicate values." },
                        ],
                        solutionExplanation: "Use JavaScript's Set object or filter() to remove duplicates from the array.",
                        language: "JavaScript",
                      },
                      
                      {
                        title: "Find Common Elements in Two Arrays",
                        description: "Write a JavaScript function that finds the common elements between two arrays.",
                        difficulty: "Basic",
                        difficultyScore: 1,
                        level: "Basic",
                        questionNumber: 189,
                        existingCode: `
                          <script>
                            function findCommonElements(arr1, arr2) {
                              // Your code here
                            }
                            console.log(findCommonElements([1, 2, 3], [2, 3, 4])); // [2, 3]
                          </script>
                        `,
                        testCases: [
                          { condition: "The function should return an array containing the common elements between the two arrays." },
                        ],
                        solutionExplanation: "Use JavaScript's filter() method or a loop to find the common elements.",
                        language: "JavaScript",
                      },
                      
                      // Expert Level Tasks
                      
                      {
                        title: "Implement a Simple Calculator",
                        description: "Write a JavaScript function that implements a simple calculator with operations for addition, subtraction, multiplication, and division.",
                        difficulty: "Basic",
                        difficultyScore: 1,
                        level: "Basic",
                        questionNumber: 190,
                        existingCode: `
                          <script>
                            function calculate(operation, num1, num2) {
                              // Your code here
                            }
                            console.log(calculate('add', 5, 3)); // 8
                            console.log(calculate('divide', 6, 2)); // 3
                          </script>
                        `,
                        testCases: [
                          { condition: "The function should return the correct result for all four operations." },
                        ],
                        solutionExplanation: "Use conditional statements to perform the appropriate operation based on the input.",
                        language: "JavaScript",
                      },
                      
                      {
                        title: "Create a Countdown Timer",
                        description: "Write a JavaScript function that creates a countdown timer that starts from a specified number of seconds and counts down to zero.",
                        difficulty: "Basic",
                        difficultyScore: 1,
                        level: "Basic",
                        questionNumber: 191,
                        existingCode: `
                          <script>
                            function startCountdown(seconds) {
                              // Your code here
                            }
                            startCountdown(10); // Countdown from 10 seconds
                          </script>
                        `,
                        testCases: [
                          { condition: "The timer should count down to zero, updating the display every second." },
                        ],
                        solutionExplanation: "Use setInterval() to update the countdown every second and clear the interval when it reaches zero.",
                        language: "JavaScript",
                      },
                      
                      {
                        title: "Create a Simple Timer",
                        description: "Write a JavaScript function that starts a timer and displays the elapsed time.",
                        difficulty: "Basic",
                        difficultyScore: 1,
                        level: "Basic",
                        questionNumber: 192,
                        existingCode: `
                          <script>
                            function startTimer() {
                              // Your code here
                            }
                            startTimer(); // Timer starts when function is called
                          </script>
                        `,
                        testCases: [
                          { condition: "The function should start a timer and display the elapsed time in seconds." },
                        ],
                        solutionExplanation: "Use setInterval() to track the elapsed time and display it in a designated element",
                        language: "JavaScript",
                      },{
                        title: "Check if a Number is Even or Odd",
                        description: "Write a JavaScript function that checks if a number is even or odd.",
                        difficulty: "Basic",
                        difficultyScore: 1,
                        level: "Basic",
                        questionNumber: 193,
                        existingCode: `
                          <script>
                            function isEvenOrOdd(num) {
                              // Your code here
                            }
                            console.log(isEvenOrOdd(4)); // "Even"
                            console.log(isEvenOrOdd(7)); // "Odd"
                          </script>
                        `,
                        testCases: [
                          { condition: "The function should return 'Even' if the number is even, otherwise 'Odd'." },
                        ],
                        solutionExplanation: "Use the modulus operator (%) to check if the number is divisible by 2.",
                        language: "JavaScript",
                      },
                      
                      {
                        title: "Reverse a String",
                        description: "Write a JavaScript function that reverses a given string.",
                        difficulty: "Basic",
                        difficultyScore: 1,
                        level: "Basic",
                        questionNumber: 194,
                        existingCode: `
                          <script>
                            function reverseString(str) {
                              // Your code here
                            }
                            console.log(reverseString('hello')); // 'olleh'
                          </script>
                        `,
                        testCases: [
                          { condition: "The function should return the reversed string." },
                        ],
                        solutionExplanation: "Use JavaScript's split(), reverse(), and join() methods to reverse the string.",
                        language: "JavaScript",
                      },
                      
                      {
                        title: "Find the Length of a String",
                        description: "Write a JavaScript function that returns the length of a given string.",
                        difficulty: "Basic",
                        difficultyScore: 1,
                        level: "Basic",
                        questionNumber: 195,
                        existingCode: `
                          <script>
                            function stringLength(str) {
                              // Your code here
                            }
                            console.log(stringLength('hello')); // 5
                          </script>
                        `,
                        testCases: [
                          { condition: "The function should return the correct length of the string." },
                        ],
                        solutionExplanation: "Use JavaScript's length property to find the number of characters in the string.",
                        language: "JavaScript",
                      },
                      
                      {
                        title: "Concatenate Two Strings",
                        description: "Write a JavaScript function that concatenates two strings.",
                        difficulty: "Basic",
                        difficultyScore: 1,
                        level: "Basic",
                        questionNumber: 196,
                        existingCode: `
                          <script>
                            function concatenateStrings(str1, str2) {
                              // Your code here
                            }
                            console.log(concatenateStrings('hello', ' world')); // 'hello world'
                          </script>
                        `,
                        testCases: [
                          { condition: "The function should return the concatenation of both strings." },
                        ],
                        solutionExplanation: "Use the + operator or JavaScript's concat() method to join the two strings.",
                        language: "JavaScript",
                      },
                      
                      {
                        title: "Check if a String Contains a Substring",
                        description: "Write a JavaScript function that checks if a string contains a specified substring.",
                        difficulty: "Basic",
                        difficultyScore: 1,
                        level: "Basic",
                        questionNumber: 197,
                        existingCode: `
                          <script>
                            function containsSubstring(str, substr) {
                              // Your code here
                            }
                            console.log(containsSubstring('hello world', 'world')); // true
                            console.log(containsSubstring('hello world', 'earth')); // false
                          </script>
                        `,
                        testCases: [
                          { condition: "The function should return true if the substring is found, otherwise false." },
                        ],
                        solutionExplanation: "Use JavaScript's includes() method to check for the presence of the substring.",
                        language: "JavaScript",
                      },
                      
                      {
                        title: "Find the Index of a Character in a String",
                        description: "Write a JavaScript function that returns the index of a specified character in a string.",
                        difficulty: "Basic",
                        difficultyScore: 1,
                        level: "Basic",
                        questionNumber: 198,
                        existingCode: `
                          <script>
                            function findCharacterIndex(str, char) {
                              // Your code here
                            }
                            console.log(findCharacterIndex('hello', 'e')); // 1
                          </script>
                        `,
                        testCases: [
                          { condition: "The function should return the index of the character in the string." },
                        ],
                        solutionExplanation: "Use JavaScript's indexOf() method to find the position of the character in the string.",
                        language: "JavaScript",
                      },
                      
                      {
                        title: "Convert String to Uppercase",
                        description: "Write a JavaScript function that converts a string to uppercase.",
                        difficulty: "Basic",
                        difficultyScore: 1,
                        level: "Basic",
                        questionNumber: 199,
                        existingCode: `
                          <script>
                            function convertToUppercase(str) {
                              // Your code here
                            }
                            console.log(convertToUppercase('hello')); // 'HELLO'
                          </script>
                        `,
                        testCases: [
                          { condition: "The function should return the string in uppercase." },
                        ],
                        solutionExplanation: "Use JavaScript's toUpperCase() method to convert the string to uppercase.",
                        language: "JavaScript",
                      },
                      
                      {
                        title: "Convert String to Lowercase",
                        description: "Write a JavaScript function that converts a string to lowercase.",
                        difficulty: "Basic",
                        difficultyScore: 1,
                        level: "Basic",
                        questionNumber: 200,
                        existingCode: `
                          <script>
                            function convertToLowercase(str) {
                              // Your code here
                            }
                            console.log(convertToLowercase('HELLO')); // 'hello'
                          </script>
                        `,
                        testCases: [
                          { condition: "The function should return the string in lowercase." },
                        ],
                        solutionExplanation: "Use JavaScript's toLowerCase() method to convert the string to lowercase.",
                        language: "JavaScript",
                      },
                      
                      {
                        title: "Replace All Occurrences of a Substring",
                        description: "Write a JavaScript function that replaces all occurrences of a substring with another substring.",
                        difficulty: "Basic",
                        difficultyScore: 1,
                        level: "Basic",
                        questionNumber: 201,
                        existingCode: `
                          <script>
                            function replaceSubstring(str, oldSubstring, newSubstring) {
                              // Your code here
                            }
                            console.log(replaceSubstring('hello world', 'world', 'universe')); // 'hello universe'
                          </script>
                        `,
                        testCases: [
                          { condition: "The function should replace all occurrences of the old substring with the new one." },
                        ],
                        solutionExplanation: "Use JavaScript's replace() method with a regular expression to replace all occurrences of the substring.",
                        language: "JavaScript",
                      },
                      
                      {
                        title: "Split a String into an Array",
                        description: "Write a JavaScript function that splits a string into an array of words.",
                        difficulty: "Basic",
                        difficultyScore: 1,
                        level: "Basic",
                        questionNumber: 202,
                        existingCode: `
                          <script>
                            function splitString(str) {
                              // Your code here
                            }
                            console.log(splitString('hello world')); // ['hello', 'world']
                          </script>
                        `,
                        testCases: [
                          { condition: "The function should return an array of words from the string." },
                        ],
                        solutionExplanation: "Use JavaScript's split() method to divide the string into an array of words based on spaces.",
                        language: "JavaScript",
                      }
                      
                      
                      
                      
                      
                    ];
                                             

export default javascriptTasks