export const demoQuestions = {
    JavaScript: {
      Beginner: {
        mcqs: [
          {
            question: "What is the result of `2 + '2'` in JavaScript?",
            options: ["4", "22", "NaN", "Error"],
            answer: "22",
          },
          {
            question: "Which method adds an element to the end of an array?",
            options: ["push()", "pop()", "unshift()", "shift()"],
            answer: "push()",
          },
          {
            question: "What is the purpose of `isNaN` function in JavaScript?",
            options: [
              "Checks if a value is null",
              "Checks if a value is not a number",
              "Checks if a value is undefined",
              "Checks if a value is finite",
            ],
            answer: "Checks if a value is not a number",
          },
          {
            question: "Which symbol is used for comments in JavaScript?",
            options: ["#", "//", "/* */", "--"],
            answer: "//",
          },
          {
            question: "What does `===` operator mean in JavaScript?",
            options: [
              "Equality comparison",
              "Strict equality comparison",
              "Assignment",
              "None of the above",
            ],
            answer: "Strict equality comparison",
          },
          {
            question: "What is the default value of an uninitialized variable?",
            options: ["undefined", "null", "NaN", "false"],
            answer: "undefined",
          },
          {
            question: "How do you declare a constant in JavaScript?",
            options: ["let", "var", "const", "static"],
            answer: "const",
          },
          {
            question: "What does `Array.isArray([])` return?",
            options: ["true", "false", "undefined", "null"],
            answer: "true",
          },
          {
            question: "What is `null` in JavaScript?",
            options: ["An object", "A number", "Undefined", "A string"],
            answer: "An object",
          },
          {
            question: "Which method converts a JSON string to a JavaScript object?",
            options: ["JSON.parse()", "JSON.stringify()", "JSON.objectify()", "JSON.convert()"],
            answer: "JSON.parse()",
          },
          {
            question: "Which operator checks for both value and type?",
            options: ["==", "===", "=", "!="],
            answer: "===",
          },
          {
            question: "What does `typeof NaN` return?",
            options: ["NaN", "undefined", "number", "object"],
            answer: "number",
          },
          {
            question: "Which of these is a JavaScript data type?",
            options: ["String", "Boolean", "Number", "All of the above"],
            answer: "All of the above",
          },
          {
            question: "What is the value of `typeof []`?",
            options: ["array", "object", "undefined", "null"],
            answer: "object",
          },
          {
            question: "What is the result of `'5' - 2` in JavaScript?",
            options: ["3", "52", "NaN", "Error"],
            answer: "3",
          },
        ],
        coding: [
          {
            id: 1,
            question: "Write a function `add(a, b)` that returns the sum of two numbers.",
            answer: "function add(a, b) { return a + b; }",
          },
          {
            id: 2,
            question: "Write a function `isEven(n)` to check if a number is even.",
            answer: "function isEven(n) { return n % 2 === 0; }",
          },
          {
            id: 3,
            question: "Write a function to calculate the factorial of a number.",
            answer: `
              function factorial(n) {
                if (n === 0) return 1;
                return n * factorial(n - 1);
              }
            `,
          },
          {
            id: 4,
            question: "Write a function to find the maximum element in an array.",
            answer: `
              function findMax(arr) {
                return Math.max(...arr);
              }
            `,
          },
          {
            id: 5,
            question: "Write a function to reverse a string.",
            answer: `
              function reverseString(str) {
                return str.split('').reverse().join('');
              }
            `,
          },
        ],
      },
      Intermediate: {
        mcqs: [
          {
            question: "What does `typeof null` return?",
            options: ["null", "object", "undefined", "boolean"],
            answer: "object",
          },
          {
            question: "What does `NaN` stand for?",
            options: ["Null as Number", "Not a Number", "Undefined Number", "Null Number"],
            answer: "Not a Number",
          },
          {
            question: "What does `bind()` do?",
            options: [
              "Creates a new function with a bound context",
              "Binds two arrays",
              "Sets an object",
              "None of the above",
            ],
            answer: "Creates a new function with a bound context",
          },
          {
            question: "Which of the following is true about `async` functions?",
            options: [
              "They return a Promise",
              "They execute synchronously",
              "They block the event loop",
              "None of the above",
            ],
            answer: "They return a Promise",
          },
          {
            question: "Which method is used to merge two arrays?",
            options: ["concat()", "merge()", "join()", "push()"],
            answer: "concat()",
          },
          {
            question: "What does `Promise.all()` do?",
            options: [
              "Resolves all promises",
              "Waits for all promises to settle",
              "Returns a single promise",
              "All of the above",
            ],
            answer: "All of the above",
          },
          {
            question: "Which symbol is used for optional chaining?",
            options: ["?.", "?.?", "::", "//"],
            answer: "?.",
          },
          {
            question: "What is the purpose of `setTimeout`?",
            options: [
              "Delays function execution",
              "Executes repeatedly",
              "Cancels a timeout",
              "Pauses execution indefinitely",
            ],
            answer: "Delays function execution",
          },
          {
            question: "Which statement creates a shallow copy of an array?",
            options: ["arr.slice()", "arr.copy()", "arr.new()", "None of the above"],
            answer: "arr.slice()",
          },
          {
            question: "Which method removes duplicates from an array?",
            options: ["filter()", "map()", "Set and spread operator", "reduce()"],
            answer: "Set and spread operator",
          },
          {
            question: "What does `Object.entries(obj)` return?",
            options: [
              "Array of key-value pairs",
              "Keys of the object",
              "Values of the object",
              "None of the above",
            ],
            answer: "Array of key-value pairs",
          },
          {
            question: "What is the purpose of the `reduce()` method?",
            options: [
              "Finds the maximum value",
              "Filters elements",
              "Accumulates array values into a single value",
              "Concatenates arrays",
            ],
            answer: "Accumulates array values into a single value",
          },
          {
            question: "Which of these methods checks if a value exists in an array?",
            options: ["includes()", "indexOf()", "has()", "search()"],
            answer: "includes()",
          },
          {
            question: "What is a higher-order function?",
            options: [
              "A function that takes other functions as arguments",
              "A function that returns another function",
              "Both A and B",
              "None of the above",
            ],
            answer: "Both A and B",
          },
          {
            question: "What does `Object.freeze(obj)` do?",
            options: [
              "Prevents modification of the object",
              "Deletes the object",
              "Freezes the browser",
              "None of the above",
            ],
            answer: "Prevents modification of the object",
          },
        ],
        coding: [
          {
            id: 6,
            question: "Reverse a string without using built-in methods.",
            answer: `
              function reverseString(str) {
                let reversed = '';
                for (let i = str.length - 1; i >= 0; i--) {
                  reversed += str[i];
                }
                return reversed;
              }
            `,
          },
          {
            id: 7,
            question: "Write a function `mergeArrays(arr1, arr2)` that merges two sorted arrays into one.",
            answer: `
              function mergeArrays(arr1, arr2) {
                return [...arr1, ...arr2].sort((a, b) => a - b);
              }
            `,
          },
          {
            id: 8,
            question: "Implement a debounce function.",
            answer: `
              function debounce(func, delay) {
                let timeoutId;
                return function(...args) {
                  clearTimeout(timeoutId);
                  timeoutId = setTimeout(() => func(...args), delay);
                };
              }
            `,
          },
          {
            id: 9,
            question: "Write a function to find the unique elements in an array.",
            answer: `
              function uniqueElements(arr) {
                return [...new Set(arr)];
              }
            `,
          },
          {
            id: 10,
            question: "Write a function to flatten a nested array.",
            answer: `
              function flattenArray(arr) {
                return arr.flat(Infinity);
              }
            `,
          },
        ]},
        Expert:{
        mcqs : [
            {
              question: "What is the difference between `let`, `var`, and `const` in JavaScript?",
              options: [
                "They are all the same.",
                "`let` and `var` are block-scoped, but `const` is global-scoped.",
                "`var` is function-scoped, `let` and `const` are block-scoped.",
                "`const` and `var` are block-scoped, but `let` is global-scoped.",
              ],
              answer: "`var` is function-scoped, `let` and `const` are block-scoped.",
            },
            {
              question: "What does `Object.seal()` do in JavaScript?",
              options: [
                "Prevents adding or deleting properties of an object.",
                "Prevents any modifications to the object.",
                "Freezes the browser.",
                "Prevents properties from being enumerated.",
              ],
              answer: "Prevents adding or deleting properties of an object.",
            },
            {
              question: "What is the purpose of a generator function in JavaScript?",
              options: [
                "To pause and resume execution of a function.",
                "To define a class.",
                "To create closures.",
                "To perform asynchronous tasks.",
              ],
              answer: "To pause and resume execution of a function.",
            },
            {
              question: "Which of these methods is used to copy properties from one object to another?",
              options: ["Object.assign()", "Object.copy()", "Object.clone()", "Object.create()"],
              answer: "Object.assign()",
            },
            {
              question: "What does the `Reflect` API do?",
              options: [
                "Provides methods to perform meta-programming tasks.",
                "Provides an alternative to `Promise`.",
                "Reflects changes to the DOM.",
                "None of the above.",
              ],
              answer: "Provides methods to perform meta-programming tasks.",
            },
            {
              question: "What is the output of `[...'JavaScript']`?",
              options: [
                "['JavaScript']",
                "['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']",
                "['Java', 'Script']",
                "['J', 'ava', 'Script']",
              ],
              answer: "['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']",
            },
            {
              question: "What does `Promise.race()` do?",
              options: [
                "Executes promises in sequence.",
                "Resolves or rejects as soon as one of the promises resolves or rejects.",
                "Waits for all promises to settle.",
                "Executes the fastest promise only.",
              ],
              answer: "Resolves or rejects as soon as one of the promises resolves or rejects.",
            },
            {
              question: "Which of these keywords is used to create private fields in a class?",
              options: ["_", "#", "@", "*"],
              answer: "#",
            },
            {
              question: "What is the output of `console.log(10 == '10')`?",
              options: ["true", "false", "Error", "undefined"],
              answer: "true",
            },
            {
              question: "What is the output of `console.log(10 === '10')`?",
              options: ["true", "false", "Error", "undefined"],
              answer: "false",
            },
            {
              question: "Which of the following is NOT a JavaScript framework?",
              options: ["React", "Vue", "Angular", "Django"],
              answer: "Django",
            },
            {
              question: "What does the `super` keyword do in JavaScript?",
              options: [
                "References the parent class.",
                "Creates a new instance of a class.",
                "Clones an object.",
                "Executes asynchronous functions.",
              ],
              answer: "References the parent class.",
            },
            {
              question: "What is the primary purpose of the `WeakMap` data structure?",
              options: [
                "Stores key-value pairs with weakly held keys.",
                "Provides a fast lookup of elements.",
                "Creates immutable objects.",
                "Prevents garbage collection of keys.",
              ],
              answer: "Stores key-value pairs with weakly held keys.",
            },
            {
              question: "Which of the following is NOT a valid JavaScript data type?",
              options: ["Symbol", "Boolean", "Number", "Character"],
              answer: "Character",
            },
            {
              question: "What is the purpose of the `Proxy` object in JavaScript?",
              options: [
                "Intercepts and customizes operations on an object.",
                "Creates new instances of objects.",
                "Provides a layer of abstraction.",
                "Enforces immutability.",
              ],
              answer: "Intercepts and customizes operations on an object.",
            },
        ],
        

          coding: [
            {
              id: 1,
              question: "Implement a `deepClone` function to deep clone an object.",
              answer: `
                function deepClone(obj) {
                  if (obj === null || typeof obj !== 'object') return obj;
                  if (Array.isArray(obj)) return obj.map(deepClone);
                  const cloned = {};
                  for (let key in obj) {
                    cloned[key] = deepClone(obj[key]);
                  }
                  return cloned;
                }
              `,
            },
            {
              id: 2,
              question: "Write a function to implement memoization for any given function.",
              answer: `
                function memoize(fn) {
                  const cache = {};
                  return function (...args) {
                    const key = JSON.stringify(args);
                    if (cache[key]) return cache[key];
                    const result = fn(...args);
                    cache[key] = result;
                    return result;
                  };
                }
              `,
            },
            {
              id: 3,
              question: "Implement an event emitter in JavaScript.",
              answer: `
                class EventEmitter {
                  constructor() {
                    this.events = {};
                  }
                  on(event, listener) {
                    if (!this.events[event]) this.events[event] = [];
                    this.events[event].push(listener);
                  }
                  emit(event, ...args) {
                    if (this.events[event]) {
                      this.events[event].forEach(listener => listener(...args));
                    }
                  }
                  off(event, listener) {
                    if (this.events[event]) {
                      this.events[event] = this.events[event].filter(l => l !== listener);
                    }
                  }
                }
              `,
            },
            {
              id: 4,
              question: "Write a function to flatten a deeply nested array.",
              answer: `
                function flattenDeep(arr) {
                  return arr.reduce((acc, val) => 
                    Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), 
                    []
                  );
                }
              `,
            },
            {
              id: 5,
              question: "Create a polyfill for the `Promise.all` function.",
              answer: `
                function promiseAll(promises) {
                  return new Promise((resolve, reject) => {
                    const results = [];
                    let completed = 0;
                    promises.forEach((promise, index) => {
                      Promise.resolve(promise)
                        .then((value) => {
                          results[index] = value;
                          completed++;
                          if (completed === promises.length) resolve(results);
                        })
                        .catch(reject);
                    });
                  });
                }
              `,
            },
          ],
                    
      },
    },
  
  CSharp : {

  Beginner:{
    mcqs:[
    {
      question: "Which keyword is used to declare a class in C#?",
      options: ["class", "Class", "declare", "def"],
      answer: "class",
    },
    {
      question: "What is the default access modifier for a class in C#?",
      options: ["public", "private", "internal", "protected"],
      answer: "internal",
    },
    {
      question: "Which of the following is a value type in C#?",
      options: ["String", "Array", "int", "Class"],
      answer: "int",
    },
    {
      question: "Which of the following is NOT a valid C# data type?",
      options: ["float", "int", "bool", "integer"],
      answer: "integer",
    },
    {
      question: "How do you comment a single line in C#?",
      options: ["//", "/* */", "#", "<!-- -->"],
      answer: "//",
    },
    {
      question: "What is the result of `10 % 3` in C#?",
      options: ["1", "2", "3", "4"],
      answer: "1",
    },
    {
      question: "What is the purpose of the `static` keyword in C#?",
      options: [
        "Defines a variable shared across all instances.",
        "Creates an instance of a class.",
        "Makes a variable immutable.",
        "Allows inheritance.",
      ],
      answer: "Defines a variable shared across all instances.",
    },
    {
      question: "What does `Console.WriteLine()` do in C#?",
      options: [
        "Writes a line to a file.",
        "Writes a line to the console.",
        "Writes a line to memory.",
        "Writes a line to a database.",
      ],
      answer: "Writes a line to the console.",
    },
    {
      question: "What is the correct way to declare an array in C#?",
      options: ["int[] arr;", "int arr[];", "array<int> arr;", "arr<int>[];"],
      answer: "int[] arr;",
    },
    {
      question: "What is the size of the `int` data type in C#?",
      options: ["4 bytes", "2 bytes", "8 bytes", "16 bytes"],
      answer: "4 bytes",
    },
    {
      question: "What does `break` do in a loop?",
      options: [
        "Skips the current iteration.",
        "Terminates the loop.",
        "Restarts the loop.",
        "Pauses the loop.",
      ],
      answer: "Terminates the loop.",
    },
    {
      question: "Which of the following is used to handle exceptions in C#?",
      options: ["if-else", "switch", "try-catch", "while"],
      answer: "try-catch",
    },
    {
      question: "What is the purpose of the `void` keyword?",
      options: [
        "Defines a method with no return value.",
        "Creates a variable with no data type.",
        "Declares a method with multiple arguments.",
        "Specifies a method can return anything.",
      ],
      answer: "Defines a method with no return value.",
    },
    {
      question: "Which keyword is used to define inheritance in C#?",
      options: ["inherits", "extends", ":", "->"],
      answer: ":",
    },
    {
      question: "What is the correct way to initialize a constant in C#?",
      options: [
        "const int x = 10;",
        "int const x = 10;",
        "constant int x = 10;",
        "int x = const 10;",
      ],
      answer: "const int x = 10;",
    },
  ],
  coding: [
    {
      id: 1,
      question: "Write a C# program to calculate the factorial of a number.",
      answer: `
        using System;
  
        class Program
        {
            static int Factorial(int num)
            {
                if (num == 0) return 1;
                return num * Factorial(num - 1);
            }
  
            static void Main(string[] args)
            {
                Console.WriteLine(Factorial(5)); // Output: 120
            }
        }
      `,
    },
    {
      id: 2,
      question: "Write a program to check if a number is prime.",
      answer: `
        using System;
  
        class Program
        {
            static bool IsPrime(int num)
            {
                if (num <= 1) return false;
                for (int i = 2; i < num; i++)
                    if (num % i == 0)
                        return false;
                return true;
            }
  
            static void Main(string[] args)
            {
                Console.WriteLine(IsPrime(7)); // Output: True
            }
        }
      `,
    },
    {
      id: 3,
      question: "Write a program to reverse a string in C#.",
      answer: `
        using System;
  
        class Program
        {
            static string ReverseString(string str)
            {
                char[] charArray = str.ToCharArray();
                Array.Reverse(charArray);
                return new string(charArray);
            }
  
            static void Main(string[] args)
            {
                Console.WriteLine(ReverseString("hello")); // Output: "olleh"
            }
        }
      `,
    },
    {
      id: 4,
      question: "Write a program to calculate the sum of all elements in an array.",
      answer: `
        using System;
  
        class Program
        {
            static int SumArray(int[] arr)
            {
                int sum = 0;
                foreach (int num in arr)
                    sum += num;
                return sum;
            }
  
            static void Main(string[] args)
            {
                int[] arr = { 1, 2, 3, 4, 5 };
                Console.WriteLine(SumArray(arr)); // Output: 15
            }
        }
      `,
    },
    {
      id: 5,
      question: "Write a program to find the largest number in an array.",
      answer: `
        using System;
  
        class Program
        {
            static int FindMax(int[] arr)
            {
                int max = arr[0];
                foreach (int num in arr)
                    if (num > max)
                        max = num;
                return max;
            }
  
            static void Main(string[] args)
            {
                int[] arr = { 3, 5, 7, 2, 8 };
                Console.WriteLine(FindMax(arr)); // Output: 8
            }
        }
      `,
    },
  ],},
  Intermediate :{
    mcqs: [
        {
      question: "Which of the following is a valid way to declare a delegate in C#?",
      options: [
        "delegate void MyDelegate();",
        "void MyDelegate = delegate();",
        "delegate = void MyDelegate();",
        "None of the above",
      ],
      answer: "delegate void MyDelegate();",
    },
    {
      question: "Which of the following is a feature of `LINQ` in C#?",
      options: [
        "Queries for databases only",
        "Provides language-integrated queries for collections",
        "Compiles SQL directly",
        "None of the above",
      ],
      answer: "Provides language-integrated queries for collections",
    },
    {
      question: "What is the difference between `ref` and `out` parameters in C#?",
      options: [
        "`ref` requires initialization, `out` does not",
        "`out` requires initialization, `ref` does not",
        "Both require initialization",
        "Neither require initialization",
      ],
      answer: "`ref` requires initialization, `out` does not",
    },
    {
      question: "What is a `sealed` class in C#?",
      options: [
        "A class that cannot be inherited",
        "A class with no public members",
        "A class that is immutable",
        "A class that is only accessible in the same namespace",
      ],
      answer: "A class that cannot be inherited",
    },
    {
      question: "What does the `using` statement do in C#?",
      options: [
        "Imports namespaces",
        "Manages resources and ensures disposal",
        "Declares local variables",
        "None of the above",
      ],
      answer: "Manages resources and ensures disposal",
    },
    {
      question: "What is the output of `string.Concat(\"Hello\", 42)`?",
      options: [
        "Hello42",
        "Hello 42",
        "Error",
        "None of the above",
      ],
      answer: "Hello42",
    },
    {
      question: "What is the purpose of the `yield` keyword in C#?",
      options: [
        "To terminate a loop",
        "To return multiple values from a method",
        "To iterate through a collection",
        "To pause and resume execution of an iterator method",
      ],
      answer: "To pause and resume execution of an iterator method",
    },
    {
      question: "What is an indexer in C#?",
      options: [
        "A method to find the index of an element",
        "A property that allows an object to be indexed",
        "A delegate for indexing arrays",
        "None of the above",
      ],
      answer: "A property that allows an object to be indexed",
    },
    {
      question: "Which of the following statements is correct about events in C#?",
      options: [
        "Events can only have one subscriber.",
        "Events are used to implement the observer pattern.",
        "Events are automatically triggered without any user action.",
        "None of the above",
      ],
      answer: "Events are used to implement the observer pattern.",
    },
    {
      question: "What is boxing in C#?",
      options: [
        "Converting a value type to a reference type",
        "Converting a reference type to a value type",
        "Encapsulation",
        "None of the above",
      ],
      answer: "Converting a value type to a reference type",
    },
    {
      question: "Which access modifier allows access only within the same class?",
      options: ["public", "protected", "internal", "private"],
      answer: "private",
    },
    {
      question: "What is the default value of a `bool` in C#?",
      options: ["null", "false", "true", "undefined"],
      answer: "false",
    },
    {
      question: "What does the `abstract` keyword signify in a class?",
      options: [
        "The class can have no methods.",
        "The class cannot be instantiated.",
        "The class must have a constructor.",
        "None of the above",
      ],
      answer: "The class cannot be instantiated.",
    },
    {
      question: "Which method is used to add items to a `List<T>` in C#?",
      options: ["Add()", "Push()", "Insert()", "Append()"],
      answer: "Add()",
    },
    {
      question: "What does the `readonly` keyword do?",
      options: [
        "Defines a variable that can be initialized multiple times",
        "Defines a variable that can only be initialized once",
        "Defines a variable that cannot be assigned a value",
        "None of the above",
      ],
      answer: "Defines a variable that can only be initialized once",
    },
  ],


    coding:[
    {
      id: 1,
      question: "Write a C# program to implement a custom exception handler.",
      answer: `
        using System;
  
        class CustomException : Exception
        {
            public CustomException(string message) : base(message) { }
        }
  
        class Program
        {
            static void Main(string[] args)
            {
                try
                {
                    throw new CustomException("This is a custom exception!");
                }
                catch (CustomException ex)
                {
                    Console.WriteLine(ex.Message);
                }
            }
        }
      `,
    },
    {
      id: 2,
      question: "Write a program to implement a simple generic method.",
      answer: `
        using System;
  
        class Program
        {
            static void Print<T>(T value)
            {
                Console.WriteLine(value);
            }
  
            static void Main(string[] args)
            {
                Print(42);
                Print("Hello");
                Print(3.14);
            }
        }
      `,
    },
    {
      id: 3,
      question: "Write a C# program to count the occurrences of each character in a string.",
      answer: `
        using System;
        using System.Collections.Generic;
  
        class Program
        {
            static void Main(string[] args)
            {
                string input = "hello world";
                Dictionary<char, int> charCount = new Dictionary<char, int>();
  
                foreach (char c in input)
                {
                    if (charCount.ContainsKey(c))
                        charCount[c]++;
                    else
                        charCount[c] = 1;
                }
  
                foreach (var pair in charCount)
                    Console.WriteLine($"{pair.Key}: {pair.Value}");
            }
        }
      `,
    },
    {
      id: 4,
      question: "Write a C# program to implement a simple LINQ query.",
      answer: `
        using System;
        using System.Linq;
  
        class Program
        {
            static void Main(string[] args)
            {
                int[] numbers = { 1, 2, 3, 4, 5, 6 };
                var evenNumbers = numbers.Where(n => n % 2 == 0);
  
                foreach (var num in evenNumbers)
                    Console.WriteLine(num);
            }
        }
      `,
    },
    {
      id: 5,
      question: "Write a C# program to demonstrate the use of an indexer.",
      answer: `
        using System;
  
        class SampleCollection<T>
        {
            private T[] arr = new T[100];
            public T this[int index]
            {
                get { return arr[index]; }
                set { arr[index] = value; }
            }
        }
  
        class Program
        {
            static void Main(string[] args)
            {
                var collection = new SampleCollection<string>();
                collection[0] = "Hello";
                collection[1] = "World";
  
                Console.WriteLine(collection[0]);
                Console.WriteLine(collection[1]);
            }
        }
      `,
    },
  ],},
   Expert : {
    mcqs:[
    {
      question: "What is the purpose of the `volatile` keyword in C#?",
      options: [
        "To make a variable immutable",
        "To ensure visibility of changes to variables across threads",
        "To lock access to a variable",
        "To indicate a variable should not be serialized",
      ],
      answer: "To ensure visibility of changes to variables across threads",
    },
    {
      question: "Which of the following best describes `async` and `await` in C#?",
      options: [
        "Used for multithreading",
        "Used for asynchronous programming",
        "Used for exception handling",
        "Used for memory management",
      ],
      answer: "Used for asynchronous programming",
    },
    {
      question: "What does the `lock` keyword do in C#?",
      options: [
        "Enables thread-safe access to resources",
        "Blocks execution of a method",
        "Terminates a thread",
        "None of the above",
      ],
      answer: "Enables thread-safe access to resources",
    },
    {
      question: "Which design pattern is `IEnumerable` and `IEnumerator` part of in C#?",
      options: [
        "Singleton",
        "Factory",
        "Observer",
        "Iterator",
      ],
      answer: "Iterator",
    },
    {
      question: "What is the purpose of the `GC.Collect()` method in C#?",
      options: [
        "To free all memory used by the application",
        "To initiate garbage collection",
        "To destroy all active threads",
        "To clean unmanaged resources",
      ],
      answer: "To initiate garbage collection",
    },
    {
      question: "What is `Reflection` in C# used for?",
      options: [
        "Inspecting metadata and manipulating types during runtime",
        "Creating new threads",
        "Exception handling",
        "None of the above",
      ],
      answer: "Inspecting metadata and manipulating types during runtime",
    },
    {
      question: "What is the difference between `Task` and `Thread` in C#?",
      options: [
        "Tasks are more lightweight than Threads",
        "Threads support more operations than Tasks",
        "Task is a newer concept introduced in .NET Core",
        "There is no difference between Task and Thread",
      ],
      answer: "Tasks are more lightweight than Threads",
    },
    {
      question: "What does `IL` stand for in the .NET framework?",
      options: [
        "Intermediate Layer",
        "Intermediate Language",
        "Integrated Language",
        "Interface Layer",
      ],
      answer: "Intermediate Language",
    },
    {
      question: "What is the purpose of `Expression Trees` in C#?",
      options: [
        "To represent code in a tree-like data structure",
        "To improve database queries",
        "To optimize thread execution",
        "None of the above",
      ],
      answer: "To represent code in a tree-like data structure",
    },
    {
      question: "What is the difference between `struct` and `class` in C#?",
      options: [
        "Structs are value types; classes are reference types",
        "Structs cannot have methods; classes can",
        "Structs are always immutable; classes are mutable",
        "Structs cannot be used in collections; classes can",
      ],
      answer: "Structs are value types; classes are reference types",
    },
    {
      question: "Which type of exception does `finally` block execute even when?",
      options: [
        "NullReferenceException",
        "UnhandledException",
        "IOException",
        "Finally executes always regardless of exception type",
      ],
      answer: "Finally executes always regardless of exception type",
    },
    {
      question: "What does the `dynamic` keyword in C# represent?",
      options: [
        "A statically typed object",
        "A runtime-typed object",
        "A compile-time constant",
        "None of the above",
      ],
      answer: "A runtime-typed object",
    },
    {
      question: "What is the output of the following code snippet?\n`Console.WriteLine(default(int));`",
      options: [
        "0",
        "-1",
        "null",
        "Error",
      ],
      answer: "0",
    },
    {
      question: "What is the difference between `Equals()` and `==` in C#?",
      options: [
        "`Equals()` compares references while `==` compares values",
        "`==` compares references while `Equals()` compares values",
        "`Equals()` is for strings only while `==` works for all types",
        "No difference between them",
      ],
      answer: "`==` compares references while `Equals()` compares values",
    },
    {
      question: "What is the use of `nameof()` in C#?",
      options: [
        "To get the name of a class",
        "To get the name of a variable as a string",
        "To define a namespace",
        "To resolve naming conflicts",
      ],
      answer: "To get the name of a variable as a string",
    },
  ],
  coding:[
    {
      id: 1,
      question: "Implement a Singleton pattern in C#.",
      answer: `
        using System;
  
        public sealed class Singleton
        {
            private static Singleton instance = null;
            private static readonly object padlock = new object();
  
            Singleton() { }
  
            public static Singleton Instance
            {
                get
                {
                    lock (padlock)
                    {
                        if (instance == null)
                        {
                            instance = new Singleton();
                        }
                        return instance;
                    }
                }
            }
        }
      `,
    },
    {
      id: 2,
      question: "Write a C# program to implement a producer-consumer problem using threading.",
      answer: `
        using System;
        using System.Collections.Generic;
        using System.Threading;
  
        class Program
        {
            private static Queue<int> queue = new Queue<int>();
            private static readonly object lockObj = new object();
            private const int maxItems = 10;
  
            static void Producer()
            {
                Random rnd = new Random();
                while (true)
                {
                    lock (lockObj)
                    {
                        if (queue.Count < maxItems)
                        {
                            int item = rnd.Next(100);
                            queue.Enqueue(item);
                            Console.WriteLine("Produced: " + item);
                            Monitor.Pulse(lockObj);
                        }
                        else
                        {
                            Monitor.Wait(lockObj);
                        }
                    }
                    Thread.Sleep(500);
                }
            }
  
            static void Consumer()
            {
                while (true)
                {
                    lock (lockObj)
                    {
                        if (queue.Count > 0)
                        {
                            int item = queue.Dequeue();
                            Console.WriteLine("Consumed: " + item);
                            Monitor.Pulse(lockObj);
                        }
                        else
                        {
                            Monitor.Wait(lockObj);
                        }
                    }
                    Thread.Sleep(500);
                }
            }
  
            static void Main(string[] args)
            {
                Thread producerThread = new Thread(Producer);
                Thread consumerThread = new Thread(Consumer);
  
                producerThread.Start();
                consumerThread.Start();
  
                producerThread.Join();
                consumerThread.Join();
            }
        }
      `,
    },
    {
      id: 3,
      question: "Write a C# program to create and query a custom `IQueryable` provider.",
      answer: "Complex answer involving LINQ provider (omitted here for brevity).",
    },
    {
      id: 4,
      question: "Write a C# program to create a custom attribute and use reflection to retrieve it.",
      answer: `
        using System;
  
        [AttributeUsage(AttributeTargets.Class)]
        public class InfoAttribute : Attribute
        {
            public string Description { get; set; }
        }
  
        [Info(Description = "This is a sample class.")]
        public class SampleClass { }
  
        class Program
        {
            static void Main(string[] args)
            {
                var type = typeof(SampleClass);
                var attributes = type.GetCustomAttributes(typeof(InfoAttribute), false);
  
                foreach (InfoAttribute attr in attributes)
                {
                    Console.WriteLine(attr.Description);
                }
            }
        }
      `,
    },
    {
      id: 5,
      question: "Write a program to implement a custom middleware pipeline.",
      answer: "This would involve ASP.NET Core programming.",
    },
  ],},},
  Python:{
    Beginner:{
        mcqs: [
    {
        "question": "What is the output of `print(2 ** 3)`?",
        "options": ["6", "8", "9", "23"],
        "answer": "8",
    },
    {
        "question": "Which keyword is used to create a function in Python?",
        "options": ["func", "function", "def", "lambda"],
        "answer": "def",
    },
    {
        "question": "Which of the following is immutable in Python?",
        "options": ["List", "Set", "Dictionary", "Tuple"],
        "answer": "Tuple",
    },
    {
        "question": "What is the result of `10 // 3`?",
        "options": ["3", "3.33", "4", "None of the above"],
        "answer": "3",
    },
    {
        "question": "Which method is used to add an element to a list in Python?",
        "options": ["add()", "append()", "insert()", "extend()"],
        "answer": "append()",
    },
    {
        "question": "What is the output of `len([1, 2, 3, 4])`?",
        "options": ["4", "5", "3", "Error"],
        "answer": "4",
    },
    {
        "question": "What does `is` operator check in Python?",
        "options": [
            "Equality of two values",
            "Identity of two objects",
            "Membership in a sequence",
            "None of the above",
        ],
        "answer": "Identity of two objects",
    },
    {
        "question": "Which of the following is a valid variable name in Python?",
        "options": ["1name", "name$", "name_1", "class"],
        "answer": "name_1",
    },
    {
        "question": "What is the output of `print('a' + 'b')`?",
        "options": ["a", "b", "ab", "Error"],
        "answer": "ab",
    },
    {
        "question": "How do you create a single-line comment in Python?",
        "options": ["#", "//", "/* */", "--"],
        "answer": "#",
    },
    {
        "question": "Which function is used to convert a string to an integer?",
        "options": ["int()", "float()", "str()", "bool()"],
        "answer": "int()",
    },
    {
        "question": "Which module is used for mathematical functions in Python?",
        "options": ["math", "random", "time", "os"],
        "answer": "math",
    },
    {
        "question": "What is the output of `print(type(5))`?",
        "options": ["int", "<class 'int'>", "integer", "None"],
        "answer": "<class 'int'>",
    },
    {
        "question": "What is the output of `print(bool(0))`?",
        "options": ["True", "False", "None", "Error"],
        "answer": "False",
    },
    {
        "question": "What does the `pass` statement do in Python?",
        "options": [
            "Stops the loop",
            "Skips the current iteration",
            "Does nothing",
            "Exits the program",
        ],
        "answer": "Does nothing",
    },
],
coding : [
    {"id": 1, "question": "Write a Python function `square(n)` that returns the square of a number."},
    {"id": 2, "question": "Write a Python function to check if a number is even or odd."},
    {"id": 3, "question": "Write a Python function to find the largest number in a list."},
    {"id": 4, "question": "Write a Python program to print the Fibonacci series up to a given number."},
    {"id": 5, "question": "Write a Python function to reverse a string."},
],
    },

    Intermediate:{
        mcqs : [
    {
        "question": "What does the `zip()` function do in Python?",
        "options": [
            "Combines two lists into tuples",
            "Creates a compressed file",
            "Sorts two lists",
            "Combines two dictionaries",
        ],
        "answer": "Combines two lists into tuples",
    },
    {
        "question": "Which of the following is used to handle exceptions in Python?",
        "options": ["try", "catch", "finally", "All of the above"],
        "answer": "try",
    },
    {
        "question": "What is the purpose of the `with` statement in Python?",
        "options": [
            "For creating loops",
            "For exception handling",
            "For resource management",
            "None of the above",
        ],
        "answer": "For resource management",
    },
    {
        "question": "Which of the following is NOT a Python data type?",
        "options": ["List", "Set", "Array", "Tuple"],
        "answer": "Array",
    },
    {
        "question": "What does the `filter()` function do in Python?",
        "options": [
            "Filters elements from a list based on a condition",
            "Sorts a list",
            "Converts a string to a list",
            "None of the above",
        ],
        "answer": "Filters elements from a list based on a condition",
    },
    {
        "question": "Which of the following methods can add an element to a set?",
        "options": ["append()", "add()", "insert()", "extend()"],
        "answer": "add()",
    },
    {
        "question": "What is the purpose of `super()` in Python?",
        "options": [
            "To call the parent class's methods",
            "To create a new thread",
            "To handle exceptions",
            "To optimize memory",
        ],
        "answer": "To call the parent class's methods",
    },
    {
        "question": "Which method is used to remove whitespace from a string?",
        "options": ["strip()", "split()", "join()", "remove()"],
        "answer": "strip()",
    },
    {
        "question": "What is the output of `list(range(3))`?",
        "options": ["[1, 2, 3]", "[0, 1, 2]", "[1, 2, 3, 4]", "[0, 1, 2, 3]"],
        "answer": "[0, 1, 2]",
    },
    {
        "question": "What is the purpose of `@property` in Python?",
        "options": [
            "To create private variables",
            "To create getter methods for a class",
            "To create static methods",
            "None of the above",
        ],
        "answer": "To create getter methods for a class",
    },
],
coding : [
    {"id": 1, "question": "Write a Python function to find the second largest number in a list."},
    {"id": 2, "question": "Write a Python program to check if two strings are anagrams."},
    {"id": 3, "question": "Write a Python program to implement a basic calculator using functions."},
    {"id": 4, "question": "Write a Python program to remove duplicates from a list."},
    {"id": 5, "question": "Write a Python program to generate a random password."},
],},
    Expert:{
    mcqs : [
    {
        "question": "What is the purpose of the `yield` keyword in Python?",
        "options": [
            "To create a generator",
            "To handle exceptions",
            "To define a class",
            "None of the above",
        ],
        "answer": "To create a generator",
    },
    {
        "question": "Which of the following is NOT a valid use case for metaclasses?",
        "options": [
            "Enforcing coding standards",
            "Modifying class creation behavior",
            "Dynamic class creation",
            "Handling file I/O",
        ],
        "answer": "Handling file I/O",
    },
    {
        "question": "What does the `__slots__` attribute do in Python?",
        "options": [
            "Restricts the attributes of a class",
            "Creates a dynamic class",
            "Handles memory management",
            "None of the above",
        ],
        "answer": "Restricts the attributes of a class",
    },
    {
        "question": "What is the difference between `deepcopy` and `copy` in Python?",
        "options": [
            "No difference",
            "`copy` is shallow; `deepcopy` is deep",
            "`deepcopy` is faster than `copy`",
            "`copy` does not exist in Python",
        ],
        "answer": "`copy` is shallow; `deepcopy` is deep",
    },
    {
        "question": "What is a Python decorator?",
        "options": [
            "A function that modifies the behavior of another function",
            "A special type of class",
            "A syntax for creating threads",
            "A type of exception",
        ],
        "answer": "A function that modifies the behavior of another function",
    },
],
coding : [
    {"id": 1, "question": "Write a Python program to implement an LRU cache using a dictionary."},
    {"id": 2, "question": "Write a Python function to evaluate a mathematical expression given as a string."},
    {"id": 3, "question": "Write a Python program to create a custom iterator for a Fibonacci sequence."},
    {"id": 4, "question": "Write a Python program to implement a thread-safe queue."},
    {"id": 5, "question": "Write a Python program to serialize and deserialize a binary tree."},
],}},
HTMLCSS:{
    Beginner:{
        mcqs:[
    {
        "question": "What does HTML stand for?",
        "options": [
            "HyperText Markup Language",
            "HyperText Machine Language",
            "HighText Markup Language",
            "None of the above",
        ],
        "answer": "HyperText Markup Language",
    },
    {
        "question": "Which tag is used to create a hyperlink in HTML?",
        "options": ["<link>", "<a>", "<href>", "<hyper>"],
        "answer": "<a>",
    },
    {
        "question": "What is the correct HTML tag for inserting a line break?",
        "options": ["<br>", "<lb>", "<break>", "<line>"],
        "answer": "<br>",
    },
    {
        "question": "Which of the following is a block-level element in HTML?",
        "options": ["<div>", "<span>", "<b>", "<i>"],
        "answer": "<div>",
    },
    {
        "question": "What is the purpose of the `<head>` tag in HTML?",
        "options": [
            "To define the body content",
            "To include metadata and links to scripts/stylesheets",
            "To define the title of the page",
            "None of the above",
        ],
        "answer": "To include metadata and links to scripts/stylesheets",
    },
    {
        "question": "Which property is used to change the text color in CSS?",
        "options": ["color", "font-color", "text-color", "background-color"],
        "answer": "color",
    },
    {
        "question": "Which HTML tag is used to display images?",
        "options": ["<img>", "<picture>", "<image>", "<src>"],
        "answer": "<img>",
    },
    {
        "question": "How do you specify an external CSS file?",
        "options": [
            '<link rel="stylesheet" href="styles.css">',
            '<style src="styles.css">',
            '<script href="styles.css">',
            '<css link="styles.css">',
        ],
        "answer": '<link rel="stylesheet" href="styles.css">',
    },
    {
        "question": "What does the `<ul>` tag represent?",
        "options": ["An unordered list", "An ordered list", "A navigation bar", "A table"],
        "answer": "An unordered list",
    },
    {
        "question": "Which CSS property is used to change the background color of an element?",
        "options": ["color", "background", "background-color", "bg-color"],
        "answer": "background-color",
    },
    {
        "question": "Which HTML tag is used to create a table?",
        "options": ["<table>", "<tab>", "<tbody>", "<thead>"],
        "answer": "<table>",
    },
    {
        "question": "What is the default alignment of text in an HTML document?",
        "options": ["Left", "Center", "Right", "Justify"],
        "answer": "Left",
    },
    {
        "question": "What does the `alt` attribute in an `<img>` tag specify?",
        "options": [
            "The alignment of the image",
            "The alternative text to display if the image is not loaded",
            "The URL of the image",
            "The title of the image",
        ],
        "answer": "The alternative text to display if the image is not loaded",
    },
    {
        "question": "Which HTML tag is used to create a drop-down list?",
        "options": ["<list>", "<dropdown>", "<select>", "<option>"],
        "answer": "<select>",
    },
    {
        "question": "Which CSS property is used to make text bold?",
        "options": ["font-weight", "font-bold", "text-style", "text-bold"],
        "answer": "font-weight",
    },
],
coding : [
    { "id": 1, "question": "Create a simple HTML page with a heading, paragraph, and an image." },
    { "id": 2, "question": "Write an HTML code to create an unordered list of your favorite books." },
    { "id": 3, "question": "Write a CSS code to center a div on a web page." },
    { "id": 4, "question": "Create an HTML table with 3 rows and 3 columns containing some sample data." },
    { "id": 5, "question": "Write an HTML form with fields for name, email, and a submit button." },
]},
Intermediate:{
    mcqs:[
    {
        "question": "Which CSS property is used to change the font size of an element?",
        "options": ["font-size", "text-size", "font-weight", "text-font"],
        "answer": "font-size",
    },
    {
        "question": "How can you make a list that lists items with numbers?",
        "options": ["<ul>", "<ol>", "<li>", "<list>"],
        "answer": "<ol>",
    },
    {
        "question": "Which CSS property is used to make an element float to the left?",
        "options": ["float", "position", "align", "left"],
        "answer": "float",
    },
    {
        "question": "What is the purpose of the `z-index` property in CSS?",
        "options": [
            "To define the stacking order of elements",
            "To change the position of an element",
            "To adjust the size of an element",
            "To specify the transparency of an element",
        ],
        "answer": "To define the stacking order of elements",
    },
    {
        "question": "Which CSS property is used to set the spacing between lines of text?",
        "options": ["line-spacing", "line-height", "spacing", "line-space"],
        "answer": "line-height",
    },
],
coding : [
    { "id": 1, "question": "Create a navigation bar using HTML and CSS with links to Home, About, and Contact pages." },
    { "id": 2, "question": "Write a CSS code to create a responsive grid layout with three columns." },
    { "id": 3, "question": "Create a webpage with a styled button that changes color when hovered." },
    { "id": 4, "question": "Write an HTML code to create a form with validation for email and password fields." },
    { "id": 5, "question": "Create an HTML and CSS code for a basic pricing table with three tiers." },
],},
Expert:{
    mcqs : [
    {
        "question": "Which CSS property can be used to create a shadow around an element?",
        "options": ["box-shadow", "text-shadow", "shadow", "border-shadow"],
        "answer": "box-shadow",
    },
    {
        "question": "What is the purpose of the `position: sticky;` property in CSS?",
        "options": [
            "To make an element stick to a fixed position when scrolling",
            "To position an element relative to the viewport",
            "To keep an element in the same position always",
            "None of the above",
        ],
        "answer": "To make an element stick to a fixed position when scrolling",
    },
    {
        "question": "Which HTML tag is used to define a section in a document?",
        "options": ["<div>", "<span>", "<section>", "<article>"],
        "answer": "<section>",
    },
    {
        "question": "What does the `content-box` value of the `box-sizing` property do?",
        "options": [
            "Includes padding and border in the element’s width and height",
            "Excludes padding and border from the element’s width and height",
            "Sets the box model to include margins",
            "None of the above",
        ],
        "answer": "Excludes padding and border from the element’s width and height",
    },
    {
        "question": "Which CSS pseudo-class is used to target the first child of an element?",
        "options": [":first-child", ":nth-child(1)", ":first", ":child(1)"],
        "answer": ":first-child",
    },
],
coding :[
    { "id": 1, "question": "Write an HTML and CSS code to create a sticky header that stays fixed during scrolling." },
    { "id": 2, "question": "Create a CSS animation that smoothly transitions the background color of a div on hover." },
    { "id": 3, "question": "Write an HTML and CSS code for a responsive webpage with a sidebar menu." },
    { "id": 4, "question": "Create a CSS code to implement a flexbox layout for a product gallery." },
    { "id": 5, "question": "Write an HTML and CSS code to design a modal popup with a close button." },
],},}}
           
