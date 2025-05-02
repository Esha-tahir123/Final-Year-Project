const csharpTasks = [
  // Basic Level Tasks
  {
    title: "Declare and Initialize Variables",
    description: "Declare and initialize variables of type int, string, and bool.",
    difficulty: "Basic",
    difficultyScore: 1,
    level: "Basic",
    existingCode: `
      using System;
      class Program {
          static void Main(string[] args) {
              // Declare and initialize variables here
          }
      }
    `,
    testCases: [
      { condition: "The variables should be of types int, string, and bool with correct values assigned." }
    ],
    solutionExplanation: "Declare variables using the appropriate types and assign them values.",
    language:"C#"
        }    ,  {
        title: "Declare and Initialize Variables",
        description: "Declare and initialize variables of type int, string, and bool.",
        difficulty: "Basic",
        difficultyScore: 1,
        level: "Basic",
        existingCode: `
          using System;
          class Program {
              static void Main(string[] args) {
                  // Declare and initialize variables here
              }
          }
        `,
        testCases: [
          { condition: "The variables should be of types int, string, and bool with correct values assigned." }
        ],
        solutionExplanation: "Declare variables using the appropriate types and assign them values.",
        language: "C#",
      },
    
    
      {
        title: "Error Correction: Incorrect Data Type",
        description: "Correct the error in the code snippet below.",
        difficulty: "Basic",
        difficultyScore: 1,
        level: "Basic",
        existingCode: `
          using System;
          class Program {
              static void Main(string[] args) {
                  int myVariable = "Hello";
              }
          }
        `,
        testCases: [
          { condition: "The code should compile without errors." }
        ],
        solutionExplanation: "The variable 'myVariable' is declared as an 'int', but it is assigned a string value. It should be declared as 'string' instead of 'int'.",
        language: "C#",
      },
    
      {
        title: "Code Optimization: Redundant Variables",
        description: "Optimize the code to eliminate redundant variables and improve readability.",
        difficulty: "Basic",
        difficultyScore: 1,
        level: "Basic",
     
        existingCode: `
          using System;
          class Program {
              static void Main(string[] args) {
                  int a = 5;
                  int b = 5;
                  int sum = a + b;
                  int result = sum;
              }
          }
        `,
        testCases: [
          { condition: "The code should be optimized to avoid unnecessary variables." }
        ],
        solutionExplanation: "The 'sum' variable is redundant, and we can directly assign the result of 'a + b' to 'result'.",
        language: "C#",
      },
    
      {
        title: "Problem Solving: Check If Even or Odd",
        description: "Write a C# program that checks if a number is even or odd.",
        difficulty: "Basic",
        difficultyScore: 1,
        level: "Basic",
       
        existingCode: `
          using System;
          class Program {
              static void Main(string[] args) {
                  int number = 6;
                  // Check if the number is even or odd
              }
          }
        `,
        testCases: [
          { condition: "The output should indicate if the number is even or odd." }
        ],
        solutionExplanation: "Use the modulus operator (%) to check if a number is divisible by 2.",
        language: "C#",
      },
    
      // Intermediate Level Tasks
    
      {
        title: "Error Correction: Invalid Type Assignment",
        description: "Correct the following code so that it works as expected.",
        difficulty: "Intermediate",
        difficultyScore: 1,
        level: "Intermediate",
        existingCode: `
          using System;
          class Program {
              static void Main(string[] args) {
                  bool isActive = 1;
                  Console.WriteLine(isActive);
              }
          }
        `,
        testCases: [
          { condition: "The code should output 'True' or 'False' based on the boolean value." }
        ],
        solutionExplanation: "In C#, '1' cannot be directly assigned to a boolean. Use 'true' or 'false' instead of '1'.",
        language: "C#",
      },
    
      {
        title: "Code Optimization: Avoid Repetitive Type Declaration",
        description: "Optimize the code to avoid repetitive type declarations.",
        difficulty: "Intermediate",
        difficultyScore: 1,
        level: "Intermediate",
        existingCode: `
          using System;
          class Program {
              static void Main(string[] args) {
                  int a = 10;
                  int b = 20;
                  int sum = a + b;
                  Console.WriteLine(sum);
              }
          }
        `,
        testCases: [
          { condition: "The code should be optimized to eliminate unnecessary declarations." }
        ],
        solutionExplanation: "The variables 'a' and 'b' can be declared and initialized in a single line, and 'sum' can be directly calculated in the output.",
        language: "C#",
      },
    
      {
        title: "Problem Solving: Find the Maximum of Three Numbers",
        description: "Write a C# program that finds the maximum of three numbers.",
        difficulty: "Intermediate",
        difficultyScore: 1,
        level: "Intermediate",
        existingCode: `
          using System;
          class Program {
              static void Main(string[] args) {
                  int num1 = 10, num2 = 20, num3 = 30;
                  // Find the maximum number
              }
          }
        `,
        testCases: [
          { condition: "The output should be the maximum number among the three." }
        ],
        solutionExplanation: "Use conditional statements to compare the three numbers and print the largest one.",
        language: "C#",
      },
    
      
      {
        title: "Error Correction: Invalid Variable Assignment",
        description: "Correct the following code to avoid a compile-time error.",
        difficulty: "Expert",
        difficultyScore: 1,
        level: "Expert",
        existingCode: `
          using System;
          class Program {
              static void Main(string[] args) {
                  string number = 10;
                  Console.WriteLine(number);
              }
          }
        `,
        testCases: [
          { condition: "The code should compile and print '10'." }
        ],
        solutionExplanation: "A string cannot be assigned an integer value directly. Use 'number' as an integer instead of string or convert the integer to a string.",
        language: "C#",
      },
    
      {
        title: "Code Optimization: Remove Redundant Type Conversion",
        description: "Optimize the code by removing unnecessary type conversions.",
        difficulty: "Expert",
        difficultyScore: 1,
        level: "Expert",
        existingCode: `
          using System;
          class Program {
              static void Main(string[] args) {
                  string str = "123";
                  int num = Convert.ToInt32(str);
                  double result = (double)num;
                  Console.WriteLine(result);
              }
          }
        `,
        testCases: [
          { condition: "The code should be optimized by removing unnecessary type casting." }
        ],
        solutionExplanation: "The code unnecessarily casts an integer to a double. You can directly assign the integer to a double variable.",
        language: "C#",
      },
    
      {
        title: "Problem Solving: Swap Two Numbers",
        description: "Write a C# program that swaps two numbers without using a temporary variable.",
        difficulty: "Expert",
        difficultyScore: 1,
        level: "Expert",
        existingCode: `
          using System;
          class Program {
              static void Main(string[] args) {
                  int num1 = 10, num2 = 20;
                  // Swap the values of num1 and num2
              }
          }
        `,
        testCases: [
          { condition: "The values of num1 and num2 should be swapped." }
        ],
        solutionExplanation: "Use arithmetic operations or XOR bitwise operations to swap the values without a temporary variable.",
        language: "C#",
      },
        // Basic Level Tasks
        {
          title: "Print Numbers Using For Loop",
          description: "Write a C# program to print numbers from 1 to 5 using a for loop.",
          difficulty: "Basic",
          difficultyScore: 1,
          level: "Basic",
          existingCode: `
            using System;
            class Program {
                static void Main(string[] args) {
                    // Use a for loop to print numbers from 1 to 5
                }
            }
          `,
          testCases: [
            { condition: "The output should be numbers from 1 to 5, each on a new line." }
          ],
          solutionExplanation: "Use a 'for' loop to iterate from 1 to 5 and print each number using Console.WriteLine().",
          language: "C#",
        },
      
        {
          title: "Error Correction: Infinite Loop",
          description: "Correct the following code to avoid an infinite loop.",
          difficulty: "Basic",
          difficultyScore: 1,
          level: "Basic",
          existingCode: `
            using System;
            class Program {
                static void Main(string[] args) {
                    int i = 0;
                    while(i < 5) {
                        Console.WriteLine(i);
                    }
                }
            }
          `,
          testCases: [
            { condition: "The loop should print numbers from 0 to 4 and stop." }
          ],
          solutionExplanation: "The variable 'i' is not incremented inside the loop. Add 'i++' to avoid an infinite loop.",
          language: "C#",
        },
      
        {
          title: "Code Optimization: Using For Loop Instead of While",
          description: "Optimize the following code to use a 'for' loop instead of a 'while' loop.",
          difficulty: "Basic",
          difficultyScore: 1,
          level: "Basic",
          existingCode: `
            using System;
            class Program {
                static void Main(string[] args) {
                    int i = 0;
                    while(i < 5) {
                        Console.WriteLine(i);
                        i++;
                    }
                }
            }
          `,
          testCases: [
            { condition: "The output should be numbers from 0 to 4." }
          ],
          solutionExplanation: "Replace the 'while' loop with a 'for' loop, as it is more concise for this task.",
          language: "C#",
        },
      
        {
          title: "Problem Solving: Sum of Numbers Using For Loop",
          description: "Write a C# program that calculates the sum of numbers from 1 to 10 using a 'for' loop.",
          difficulty: "Basic",
          difficultyScore: 1,
          level: "Basic",
          
          existingCode: `
            using System;
            class Program {
                static void Main(string[] args) {
                    int sum = 0;
                    // Use a for loop to calculate the sum of numbers from 1 to 10
                }
            }
          `,
          testCases: [
            { condition: "The output should be the sum of numbers from 1 to 10, which is 55." }
          ],
          solutionExplanation: "Use a 'for' loop to add numbers from 1 to 10 to the 'sum' variable and print the result.",
          language: "C#",
        },
      
      
        {
          title: "Error Correction: Do-While Loop",
          description: "Correct the following code to ensure that the 'do-while' loop works as intended.",
          difficulty: "Intermediate",
          difficultyScore: 1,
          level: "Intermediate",
          existingCode: `
            using System;
            class Program {
                static void Main(string[] args) {
                    int i = 0;
                    do {
                        Console.WriteLine(i);
                    } while(i < 5);
                }
            }
          `,
          testCases: [
            { condition: "The output should be numbers from 0 to 4." }
          ],
          solutionExplanation: "The variable 'i' needs to be incremented inside the loop to avoid an infinite loop.",
          language: "C#",
        },
      
        {
          title: "Code Optimization: Using Foreach Loop",
          description: "Optimize the code by using a 'foreach' loop to iterate over an array.",
          difficulty: "Intermediate",
          difficultyScore: 1,
          level: "Intermediate",
          existingCode: `
            using System;
            class Program {
                static void Main(string[] args) {
                    int[] numbers = {1, 2, 3, 4, 5};
                    for(int i = 0; i < numbers.Length; i++) {
                        Console.WriteLine(numbers[i]);
                    }
                }
            }
          `,
          testCases: [
            { condition: "The output should be numbers 1 to 5 printed on separate lines." }
          ],
          solutionExplanation: "Use a 'foreach' loop to iterate through the elements of the array, making the code more concise and readable.",
          language: "C#",
        },
      
        {
          title: "Problem Solving: Factorial Using While Loop",
          description: "Write a C# program that calculates the factorial of a number using a 'while' loop.",
          difficulty: "Intermediate",
          difficultyScore: 1,
          level: "Intermediate",
          existingCode: `
            using System;
            class Program {
                static void Main(string[] args) {
                    int number = 5;
                    int result = 1;
                    // Use a while loop to calculate the factorial of the number
                }
            }
          `,
          testCases: [
            { condition: "The output should be the factorial of 5, which is 120." }
          ],
          solutionExplanation: "Use a 'while' loop to multiply the number by decreasing values until it reaches 1.",
          language: "C#",
        },
      
        // Expert Level Tasks
      
    
      ,
        {
          title: "Error Correction: Incorrect Loop Logic",
          description: "Correct the code so that it prints the numbers from 1 to 10 in ascending order.",
          difficulty: "Expert",
          difficultyScore: 1,
          level: "Expert",
          existingCode: `
            using System;
            class Program {
                static void Main(string[] args) {
                    for(int i = 10; i >= 1; i--) {
                        Console.WriteLine(i);
                    }
                }
            }
          `,
          testCases: [
            { condition: "The output should be numbers from 1 to 10, in ascending order." }
          ],
          solutionExplanation: "The loop should start at 1 and run until 10. Modify the loop's condition and increment to fix it.",
          language: "C#",
        },
      
        {
          title: "Code Optimization: Combine Loops",
          description: "Optimize the following code by combining the loops for printing even and odd numbers.",
          difficulty: "Expert",
          difficultyScore: 1,
          level: "Expert",
          existingCode: `
            using System;
            class Program {
                static void Main(string[] args) {
                    for(int i = 1; i <= 10; i++) {
                        if(i % 2 == 0) {
                            Console.WriteLine(i + " is even");
                        }
                    }
                    for(int i = 1; i <= 10; i++) {
                        if(i % 2 != 0) {
                            Console.WriteLine(i + " is odd");
                        }
                    }
                }
            }
          `,
          testCases: [
            { condition: "The output should be numbers 1 to 10, categorized as even or odd." }
          ],
          solutionExplanation: "Use a single loop to check whether each number is even or odd and print the result accordingly.",
          language: "C#",
        },
      
        {
          title: "Problem Solving: Print Multiplication Table",
          description: "Write a C# program that prints the multiplication table of a given number using a 'for' loop.",
          difficulty: "Expert",
          difficultyScore: 1,
          level: "Expert",
          existingCode: `
            using System;
            class Program {
                static void Main(string[] args) {
                    int number = 5;
                    // Print the multiplication table of the given number
                }
            }
          `,
          testCases: [
            { condition: "The output should be the multiplication table of 5 (5, 10, 15, ...)." }
          ],
          solutionExplanation: "Use a 'for' loop to multiply the given number by values from 1 to 10 and print each result.",
          language: "C#",
        },
          // Basic Level Tasks
          {
            title: "Print Numbers Using For Loop",
            description: "Write a C# program to print numbers from 1 to 5 using a for loop.",
            difficulty: "Basic",
            difficultyScore: 1,
            level: "Basic",
            existingCode: `
              using System;
              class Program {
                  static void Main(string[] args) {
                      // Use a for loop to print numbers from 1 to 5
                  }
              }
            `,
            testCases: [
              { condition: "The output should be numbers from 1 to 5, each on a new line." }
            ],
            solutionExplanation: "Use a 'for' loop to iterate from 1 to 5 and print each number using Console.WriteLine().",
            language: "C#",
          },
        
          {
            title: "Error Correction: Infinite Loop",
            description: "Correct the following code to avoid an infinite loop.",
            difficulty: "Basic",
            difficultyScore: 1,
            level: "Basic",
            existingCode: `
              using System;
              class Program {
                  static void Main(string[] args) {
                      int i = 0;
                      while(i < 5) {
                          Console.WriteLine(i);
                      }
                  }
              }
            `,
            testCases: [
              { condition: "The loop should print numbers from 0 to 4 and stop." }
            ],
            solutionExplanation: "The variable 'i' is not incremented inside the loop. Add 'i++' to avoid an infinite loop.",
            language: "C#",
          },
        
          {
            title: "Code Optimization: Using For Loop Instead of While",
            description: "Optimize the following code to use a 'for' loop instead of a 'while' loop.",
            difficulty: "Basic",
            difficultyScore: 1,
            level: "Basic",
            existingCode: `
              using System;
              class Program {
                  static void Main(string[] args) {
                      int i = 0;
                      while(i < 5) {
                          Console.WriteLine(i);
                          i++;
                      }
                  }
              }
            `,
            testCases: [
              { condition: "The output should be numbers from 0 to 4." }
            ],
            solutionExplanation: "Replace the 'while' loop with a 'for' loop, as it is more concise for this task.",
            language: "C#",
          },
        
          {
            title: "Problem Solving: Sum of Numbers Using For Loop",
            description: "Write a C# program that calculates the sum of numbers from 1 to 10 using a 'for' loop.",
            difficulty: "Basic",
            difficultyScore: 1,
            level: "Basic",
            existingCode: `
              using System;
              class Program {
                  static void Main(string[] args) {
                      int sum = 0;
                      // Use a for loop to calculate the sum of numbers from 1 to 10
                  }
              }
            `,
            testCases: [
              { condition: "The output should be the sum of numbers from 1 to 10, which is 55." }
            ],
            solutionExplanation: "Use a 'for' loop to add numbers from 1 to 10 to the 'sum' variable and print the result.",
            language: "C#",
          },
        
          // Intermediate Level Tasks
         
        
          {
            title: "Error Correction: Do-While Loop",
            description: "Correct the following code to ensure that the 'do-while' loop works as intended.",
            difficulty: "Intermediate",
            difficultyScore: 1,
            level: "Intermediate",
                    existingCode: `
              using System;
              class Program {
                  static void Main(string[] args) {
                      int i = 0;
                      do {
                          Console.WriteLine(i);
                      } while(i < 5);
                  }
              }
            `,
            testCases: [
              { condition: "The output should be numbers from 0 to 4." }
            ],
            solutionExplanation: "The variable 'i' needs to be incremented inside the loop to avoid an infinite loop.",
            language: "C#",
          },
        
          {
            title: "Code Optimization: Using Foreach Loop",
            description: "Optimize the code by using a 'foreach' loop to iterate over an array.",
            difficulty: "Intermediate",
            difficultyScore: 1,
            level: "Intermediate",
            existingCode: `
              using System;
              class Program {
                  static void Main(string[] args) {
                      int[] numbers = {1, 2, 3, 4, 5};
                      for(int i = 0; i < numbers.Length; i++) {
                          Console.WriteLine(numbers[i]);
                      }
                  }
              }
            `,
            testCases: [
              { condition: "The output should be numbers 1 to 5 printed on separate lines." }
            ],
            solutionExplanation: "Use a 'foreach' loop to iterate through the elements of the array, making the code more concise and readable.",
            language: "C#",
          },
        
          {
            title: "Problem Solving: Factorial Using While Loop",
            description: "Write a C# program that calculates the factorial of a number using a 'while' loop.",
            difficulty: "Intermediate",
            difficultyScore: 1,
            level: "Intermediate",
            existingCode: `
              using System;
              class Program {
                  static void Main(string[] args) {
                      int number = 5;
                      int result = 1;
                      // Use a while loop to calculate the factorial of the number
                  }
              }
            `,
            testCases: [
              { condition: "The output should be the factorial of 5, which is 120." }
            ],
            solutionExplanation: "Use a 'while' loop to multiply the number by decreasing values until it reaches 1.",
            language: "C#",
          },
        
        
          {
            title: "Error Correction: Incorrect Loop Logic",
            description: "Correct the code so that it prints the numbers from 1 to 10 in ascending order.",
            difficulty: "Expert",
            difficultyScore: 1,
            level: "Expert",
            questionNumber: 24,
            existingCode: `
              using System;
              class Program {
                  static void Main(string[] args) {
                      for(int i = 10; i >= 1; i--) {
                          Console.WriteLine(i);
                      }
                  }
              }
            `,
            testCases: [
              { condition: "The output should be numbers from 1 to 10, in ascending order." }
            ],
            solutionExplanation: "The loop should start at 1 and run until 10. Modify the loop's condition and increment to fix it.",
            language: "C#",
          },
        
          {
            title: "Code Optimization: Combine Loops",
            description: "Optimize the following code by combining the loops for printing even and odd numbers.",
            difficulty: "Expert",
            difficultyScore: 1,
            level: "Expert",
            existingCode: `
              using System;
              class Program {
                  static void Main(string[] args) {
                      for(int i = 1; i <= 10; i++) {
                          if(i % 2 == 0) {
                              Console.WriteLine(i + " is even");
                          }
                      }
                      for(int i = 1; i <= 10; i++) {
                          if(i % 2 != 0) {
                              Console.WriteLine(i + " is odd");
                          }
                      }
                  }
              }
            `,
            testCases: [
              { condition: "The output should be numbers 1 to 10, categorized as even or odd." }
            ],
            solutionExplanation: "Use a single loop to check whether each number is even or odd and print the result accordingly.",
            language: "C#",
          },
        
          {
            title: "Problem Solving: Print Multiplication Table",
            description: "Write a C# program that prints the multiplication table of a given number using a 'for' loop.",
            difficulty: "Expert",
            difficultyScore: 1,
            level: "Expert",
            existingCode: `
              using System;
              class Program {
                  static void Main(string[] args) {
                      int number = 5;
                      // Print the multiplication table of the given number
                  }
              }
            `,
            testCases: [
              { condition: "The output should be the multiplication table of 5 (5, 10, 15, ...)." }
            ],
            solutionExplanation: "Use a 'for' loop to multiply the given number by values from 1 to 10 and print each result.",
            language: "C#",
          },
            // Basic Level Tasks
            {
              title: "Declare a Constant",
              description: "Write a C# program that declares a constant with the value of 10 and prints it.",
              difficulty: "Basic",
              difficultyScore: 1,
              level: "Basic",
              
              existingCode: `
                using System;
                class Program {
                    static void Main(string[] args) {
                        // Declare a constant with value 10
                    }
                }
              `,
              testCases: [
                { condition: "The output should be the constant value '10'." }
              ],
              solutionExplanation: "Use the 'const' keyword to declare a constant. Constants are values that cannot be changed after they are initialized.",
              language: "C#",
            },
          
            {
              title: "Error Correction: Invalid Constant",
              description: "Correct the following code so that it properly declares a constant.",
              difficulty: "Basic",
              difficultyScore: 1,
              level: "Basic",
              existingCode: `
                using System;
                class Program {
                    static void Main(string[] args) {
                        constant int pi = 3.14;
                        Console.WriteLine(pi);
                    }
                }
              `,
              testCases: [
                { condition: "The output should be '3.14'." }
              ],
              solutionExplanation: "The keyword 'constant' is incorrect. It should be 'const' to declare a constant in C#.",
              language: "C#",
            },
          
            {
              title: "Code Optimization: Using Constants",
              description: "Optimize the following code to use a constant for the value of 100 instead of hardcoding it multiple times.",
              difficulty: "Basic",
              difficultyScore: 1,
              level: "Basic",
              existingCode: `
                using System;
                class Program {
                    static void Main(string[] args) {
                        int value1 = 100;
                        int value2 = 100;
                        int sum = value1 + value2;
                        Console.WriteLine(sum);
                    }
                }
              `,
              testCases: [
                { condition: "The output should be '200'." }
              ],
              solutionExplanation: "Declare a constant for the value 100 and replace its occurrences in the code with the constant name for easier maintenance.",
              language: "C#",
            },
          
            {
              title: "Problem Solving: Define and Use a Constant",
              description: "Write a C# program that defines a constant for the value of pi (3.14) and prints its value.",
              difficulty: "Basic",
              difficultyScore: 1,
              level: "Basic",
              existingCode: `
                using System;
                class Program {
                    static void Main(string[] args) {
                        // Define a constant for pi
                    }
                }
              `,
              testCases: [
                { condition: "The output should be '3.14'." }
              ],
              solutionExplanation: "Use the 'const' keyword to define the value of pi as a constant, which cannot be changed during the program execution.",
              language: "C#",
            },
          
            {
              title: "Error Correction: Enum Usage",
              description: "Correct the following code to use the enumeration values correctly.",
              difficulty: "Intermediate",
              difficultyScore: 1,
              level: "Intermediate",
              existingCode: `
                using System;
                class Program {
                    enum Days { Sunday, Monday, Tuesday };
                    
                    static void Main(string[] args) {
                        int day = Days.Monday;
                        Console.WriteLine(day);
                    }
                }
              `,
              testCases: [
                { condition: "The output should be '1' (the index of 'Monday' in the enum)." }
              ],
              solutionExplanation: "Enum values are by default assigned integer values starting from 0. You need to correctly use the enum values in the program.",
              language: "C#",
            },
          
            {
              title: "Code Optimization: Using Enum for Days",
              description: "Optimize the following code by using an enum for representing the days of the week instead of integers.",
              difficulty: "Intermediate",
              difficultyScore: 1,
              level: "Intermediate",
       
              existingCode: `
                using System;
                class Program {
                    static void Main(string[] args) {
                        int day = 1;
                        if(day == 0) {
                            Console.WriteLine("Sunday");
                        } else if(day == 1) {
                            Console.WriteLine("Monday");
                        }
                        // Continue for other days
                    }
                }
              `,
              testCases: [
                { condition: "The output should be 'Monday' if day is 1." }
              ],
              solutionExplanation: "Using an enum to represent days of the week makes the code more readable and maintainable. Replace the integer values with corresponding enum values.",
              language: "C#",
            },
          
            {
              title: "Problem Solving: Enum to String",
              description: "Write a C# program that defines an enum for the days of the week and prints the name of a day based on its enum value.",
              difficulty: "Intermediate",
              difficultyScore: 1,
              level: "Intermediate",
              existingCode: `
                using System;
                class Program {
                    enum Days { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday };
                    
                    static void Main(string[] args) {
                        // Print the name of a day based on enum value
                    }
                }
              `,
              testCases: [
                { condition: "The output should be 'Wednesday' when the enum value for Wednesday is passed." }
              ],
              solutionExplanation: "You can use the Enum.GetName method to print the name of a day based on the enum value.",
              language: "C#",
            },
          
          
            {
              title: "Error Correction: Enum Index Out of Range",
              description: "Correct the following code that causes an 'IndexOutOfRange' error when trying to access an enum value.",
              difficulty: "Expert",
              difficultyScore: 1,
              level: "Expert",
              existingCode: `
                using System;
                class Program {
                    enum Days { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday };
                    
                    static void Main(string[] args) {
                        Days day = (Days)8;
                        Console.WriteLine(day);
                    }
                }
              `,
              testCases: [
                { condition: "The output should be a valid enum value, not an 'IndexOutOfRange' error." }
              ],
              solutionExplanation: "Enum values start from 0. Trying to cast an integer beyond the available values of the enum will result in an error. Ensure that the integer value is within the range of the enum values.",
              language: "C#",
            },
          
            {
              title: "Code Optimization: Using Enum and Switch",
              description: "Optimize the following code by replacing the if-else statements with a switch statement using an enum.",
              difficulty: "Expert",
              difficultyScore: 1,
              level: "Expert",
    
              existingCode: `
                using System;
                class Program {
                    enum Days { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday };
                    
                    static void Main(string[] args) {
                        Days day = Days.Monday;
                        if(day == Days.Sunday) {
                            Console.WriteLine("Sunday");
                        } else if(day == Days.Monday) {
                            Console.WriteLine("Monday");
                        }
                        // Continue for other days
                    }
                }
              `,
              testCases: [
                { condition: "The output should print the correct day based on the enum value." }
              ],
              solutionExplanation: "Use a switch statement to simplify the logic and make it more maintainable when checking multiple enum values.",
              language: "C#",
            },
          
            {
              title: "Problem Solving: Enum and Methods",
              description: "Write a C# program that defines an enum for directions (North, East, South, West) and returns the opposite direction using a method.",
              difficulty: "Expert",
              difficultyScore: 1,
              level: "Expert",
              existingCode: `
                using System;
                class Program {
                    enum Directions { North, East, South, West };
                    
                    static void Main(string[] args) {
                        // Return the opposite direction
                    }
                }
              `,
              testCases: [
                { condition: "If the input is 'North', the output should be 'South'." }
              ],
              solutionExplanation: "Use a method to return the opposite direction by checking the input enum value and returning the corresponding opposite direction.",
              language: "C#",
            },
              // Basic Level Tasks
              {
                title: "Implicit Type Conversion",
                description: "Write a C# program that demonstrates implicit type conversion from int to double.",
                difficulty: "Basic",
                difficultyScore: 1,
                level: "Basic",
                existingCode: `
                  using System;
                  class Program {
                      static void Main(string[] args) {
                          // Declare an int variable and assign a value
                          int intValue = 10;
                          // Convert to double implicitly
                      }
                  }
                `,
                testCases: [
                  { condition: "The output should be a double value '10.0'." }
                ],
                solutionExplanation: "In C#, implicit conversion occurs when a smaller data type (like int) is automatically converted to a larger data type (like double).",
                language: "C#",
              },
            
            
              {
                title: "Error Correction: Implicit Conversion Error",
                description: "Correct the following code to properly perform implicit type conversion from int to double.",
                difficulty: "Basic",
                difficultyScore: 1,
                level: "Basic",
                existingCode: `
                  using System;
                  class Program {
                      static void Main(string[] args) {
                          double doubleValue = 10;
                          int intValue = doubleValue;  
                      }
                  }
                `,
                testCases: [
                  { condition: "The output should have doubleValue assigned correctly as '10.0'." }
                ],
                solutionExplanation: "In C#, you cannot implicitly convert a double to an int, as it may lead to loss of precision. For this, you need explicit conversion.",
                language: "C#",
              },
            
              {
                title: "Code Optimization: Implicit Conversion",
                description: "Optimize the following code by removing unnecessary explicit type conversion and using implicit conversion.",
                difficulty: "Basic",
                difficultyScore: 1,
                level: "Basic",
                existingCode: `
                  using System;
                  class Program {
                      static void Main(string[] args) {
                          int intValue = 5;
                          double doubleValue = (double)intValue;  
                          Console.WriteLine(doubleValue);
                      }
                  }
                `,
                testCases: [
                  { condition: "The output should be '5.0'." }
                ],
                solutionExplanation: "In this case, the implicit conversion from int to double can be used, so explicit casting is not necessary.",
                language: "C#",
              },
            
              {
                title: "Problem Solving: Implicit Conversion",
                description: "Write a C# program that assigns an integer value to a double variable and prints the double value.",
                difficulty: "Basic",
                difficultyScore: 1,
                level: "Basic",
                existingCode: `
                  using System;
                  class Program {
                      static void Main(string[] args) {
                          // Assign integer to double
                      }
                  }
                `,
                testCases: [
                  { condition: "The output should be '25.0'." }
                ],
                solutionExplanation: "Implicit type conversion allows for assigning an int to a double, which will automatically convert the integer value to a double type.",
                language: "C#",
              },
            
              // Intermediate Level Tasks
              {
                title: "Explicit Type Conversion",
                description: "Write a C# program that demonstrates explicit type conversion from double to int using casting.",
                difficulty: "Intermediate",
                difficultyScore: 1,
                level: "Intermediate",
                
                existingCode: `
                  using System;
                  class Program {
                      static void Main(string[] args) {
                          // Explicitly convert double to int
                          double doubleValue = 9.75;
                      }
                  }
                `,
                testCases: [
                  { condition: "The output should be '9'." }
                ],
                solutionExplanation: "Explicit conversion requires the use of a cast to convert a double to an int, truncating the decimal part.",
                language: "C#",
              },
            
              {
                title: "Error Correction: Explicit Conversion Error",
                description: "Correct the following code so that it properly converts a double to an int using explicit casting.",
                difficulty: "Intermediate",
                difficultyScore: 1,
                level: "Intermediate",
                     existingCode: `
                  using System;
                  class Program {
                      static void Main(string[] args) {
                          double doubleValue = 5.6;
                          int intValue = doubleValue;
                      }
                  }
                `,
                testCases: [
                  { condition: "The output should be '5'." }
                ],
                solutionExplanation: "Explicit conversion from double to int requires a cast operation, such as '(int)doubleValue'.",
                language: "C#",
              },
            
              {
                title: "Code Optimization: Explicit Conversion",
                description: "Optimize the following code by using explicit casting instead of performing an implicit conversion and then casting.",
                difficulty: "Intermediate",
                difficultyScore: 1,
                level: "Intermediate",
                existingCode: `
                  using System;
                  class Program {
                      static void Main(string[] args) {
                          double doubleValue = 8.45;
                          int intValue = (int)(doubleValue);  // Redundant casting
                          Console.WriteLine(intValue);
                      }
                  }
                `,
                testCases: [
                  { condition: "The output should be '8'." }
                ],
                solutionExplanation: "Redundant casting can be eliminated to make the code cleaner. The double can be cast directly using one operation: (int)doubleValue.",
                language: "C#",
              },
            
              {
                title: "Problem Solving: Explicit Conversion",
                description: "Write a C# program that converts a double value of 7.89 to an integer and prints the result.",
                difficulty: "Intermediate",
                difficultyScore: 1,
                level: "Intermediate",
                existingCode: `
                  using System;
                  class Program {
                      static void Main(string[] args) {
                          // Convert the double value to an integer
                      }
                  }
                `,
                testCases: [
                  { condition: "The output should be '7'." }
                ],
                solutionExplanation: "Explicit casting from double to int will truncate the decimal part of the double value.",
                language: "C#",
              },
            
              // Expert Level Tasks
              {
                title: "Boxing and Unboxing",
                description: "Write a C# program that demonstrates boxing by converting an int to an object, and then unboxing it back to an int.",
                difficulty: "Expert",
                difficultyScore: 1,
                level: "Expert",
                existingCode: `
                  using System;
                  class Program {
                      static void Main(string[] args) {
                          int num = 5;
                          // Boxing: Convert int to object
                          object obj = num;
                          // Unboxing: Convert object back to int
                          int unboxedNum = (int)obj;
                          Console.WriteLine(unboxedNum);
                      }
                  }
                `,
                testCases: [
                  { condition: "The output should be '5'." }
                ],
                solutionExplanation: "Boxing is the process of converting a value type (like int) to an object. Unboxing involves extracting the value back from the object.",
                language: "C#",
              },
            
            
              {
                title: "Error Correction: Boxing/Unboxing",
                description: "Correct the following code that causes a runtime error due to invalid unboxing.",
                difficulty: "Expert",
                difficultyScore: 1,
                level: "Expert",
                existingCode: `
                  using System;
                  class Program {
                      static void Main(string[] args) {
                          object obj = 5;
                          // Unboxing to an incorrect type
                          string strValue = (string)obj;  
                      }
                  }
                `,
                testCases: [
                  { condition: "The output should be 'InvalidCastException'." }
                ],
                solutionExplanation: "Unboxing requires the correct type. Trying to unbox a value type to a different type will throw an exception.",
                language: "C#",
              },
            
              {
                title: "Code Optimization: Boxing and Unboxing",
                description: "Optimize the following code by reducing the unnecessary boxing and unboxing operations.",
                difficulty: "Expert",
                difficultyScore: 1,
                level: "Expert",
                existingCode: `
                  using System;
                  class Program {
                      static void Main(string[] args) {
                          int num = 10;
                          object obj = num;  // Boxing
                          int result = (int)obj;  // Unboxing
                          Console.WriteLine(result);
                      }
                  }
                `,
                testCases: [
                  { condition: "The output should be '10'." }
                ],
                solutionExplanation: "Boxing and unboxing should be avoided where possible for performance reasons. In this case, the type can be used directly without boxing/unboxing.",
                language: "C#",
              },
            
              {
                title: "Problem Solving: Boxing and Unboxing",
                description: "Write a C# program that boxes an integer value and unboxes it back to its original value.",
                difficulty: "Expert",
                difficultyScore: 1,
                level: "Expert",
                existingCode: `
                  using System;
                  class Program {
                      static void Main(string[] args) {
                          // Box and unbox the integer value
                      }
                  }
                `,
                testCases: [
                  { condition: "The output should be '25'." }
                ],
                solutionExplanation: "The integer value is boxed to an object and then unboxed back to its original type using casting.",
                language: "C#",
              },
                // Basic Level Tasks
                {
                  title: "Simple If-Else Statement",
                  description: "Write a C# program that checks if a number is positive or negative using if-else statements.",
                  difficulty: "Basic",
                  difficultyScore: 1,
                  level: "Basic",
                  
                  existingCode: `
                    using System;
                    class Program {
                        static void Main(string[] args) {
                            int num = 5; // Change this value to test
                            // Check if the number is positive or negative
                        }
                    }
                  `,
                  testCases: [
                    { condition: "The output should be 'Positive' for a positive number." },
                    { condition: "The output should be 'Negative' for a negative number." }
                  ],
                  solutionExplanation: "Use an if-else statement to check if a number is greater than 0 for positive or else negative.",
                  language: "C#",
                },
              
              
                {
                  title: "Error Correction: if-else Syntax",
                  description: "Correct the following code to check if a number is even or odd using an if-else statement.",
                  difficulty: "Basic",
                  difficultyScore: 1,
                  level: "Basic",
                  
                  existingCode: `
                    using System;
                    class Program {
                        static void Main(string[] args) {
                            int num = 4;
                            // Check if the number is even or odd
                            if (num % 2 = 0)  // Error here
                            {
                                Console.WriteLine("Even");
                            }
                            else
                            {
                                Console.WriteLine("Odd");
                            }
                        }
                    }
                  `,
                  testCases: [
                    { condition: "The output should be 'Even'." }
                  ],
                  solutionExplanation: "The issue is that the assignment operator '=' is used instead of the equality comparison operator '==' to check if the number is even.",
                  language: "C#",
                },
              
                {
                  title: "Code Optimization: if-else",
                  description: "Optimize the following code to use a ternary operator instead of an if-else statement.",
                  difficulty: "Basic",
                  difficultyScore: 1,
                  level: "Basic",
                  existingCode: `
                    using System;
                    class Program {
                        static void Main(string[] args) {
                            int num = 7;
                            string result;
                            if (num % 2 == 0) {
                                result = "Even";
                            } else {
                                result = "Odd";
                            }
                            Console.WriteLine(result);
                        }
                    }
                  `,
                  testCases: [
                    { condition: "The output should be 'Odd'." }
                  ],
                  solutionExplanation: "The ternary operator can be used to simplify the if-else block, making the code shorter and more readable.",
                  language: "C#",
                },
              
                {
                  title: "Problem Solving: if-else",
                  description: "Write a C# program that checks if a number is divisible by both 3 and 5.",
                  difficulty: "Basic",
                  difficultyScore: 1,
                  level: "Basic",
                  existingCode: `
                    using System;
                    class Program {
                        static void Main(string[] args) {
                            int num = 15; // Change this value to test
                            // Check if the number is divisible by both 3 and 5
                        }
                    }
                  `,
                  testCases: [
                    { condition: "The output should be 'Divisible by both 3 and 5' for numbers divisible by both." }
                  ],
                  solutionExplanation: "Use the modulo operator '%' to check if the number is divisible by both 3 and 5 by checking if 'num % 3 == 0 && num % 5 == 0'.",
                  language: "C#",
                },
              
                // Intermediate Level Tasks
                {
                  title: "Switch Case Statement",
                  description: "Write a C# program that checks the day of the week and prints the corresponding day name using a switch statement.",
                  difficulty: "Intermediate",
                  difficultyScore: 1,
                  level: "Intermediate",
                  existingCode: `
                    using System;
                    class Program {
                        static void Main(string[] args) {
                            int day = 3; // Change this value to test
                            // Print the name of the day using switch-case
                        }
                    }
                  `,
                  testCases: [
                    { condition: "The output should be 'Wednesday' for day = 3." },
                    { condition: "The output should be 'Sunday' for day = 7." }
                  ],
                  solutionExplanation: "Use a switch statement with multiple cases to print the corresponding day name based on the value of the day variable.",
                  language: "C#",
                },
              
              
                {
                  title: "Error Correction: switch-case Syntax",
                  description: "Correct the following code to check the month number and print the corresponding month name using a switch-case statement.",
                  difficulty: "Intermediate",
                  difficultyScore: 1,
                  level: "Intermediate",
                  existingCode: `
                    using System;
                    class Program {
                        static void Main(string[] args) {
                            int month = 4;
                            // Switch-case for month
                            switch (month) {
                                case 1:
                                    Console.WriteLine("January");
                                case 2:
                                    Console.WriteLine("February");
                                case 3:
                                    Console.WriteLine("March");
                                case 4:
                                    Console.WriteLine("April");
                            }
                        }
                    }
                  `,
                  testCases: [
                    { condition: "The output should be 'April' for month = 4." }
                  ],
                  solutionExplanation: "Each case in a switch statement must be followed by a 'break' to avoid fall-through behavior, which is causing the issue here.",
                  language: "C#",
                },
              
                {
                  title: "Code Optimization: switch-case",
                  description: "Optimize the following code to use a default case and handle all possible month numbers in the switch-case statement.",
                  difficulty: "Intermediate",
                  difficultyScore: 1,
                  level: "Intermediate",
                  existingCode: `
                    using System;
                    class Program {
                        static void Main(string[] args) {
                            int month = 6; 
                            switch (month) {
                                case 1:
                                    Console.WriteLine("January");
                                    break;
                                case 2:
                                    Console.WriteLine("February");
                                    break;
                                // ... other cases omitted for brevity
                            }
                        }
                    }
                  `,
                  testCases: [
                    { condition: "The output should be 'June' for month = 6." }
                  ],
                  solutionExplanation: "Adding a default case ensures that any unexpected month number will be handled properly.",
                  language: "C#",
                },
              
                {
                  title: "Problem Solving: switch-case",
                  description: "Write a C# program that checks a number and prints whether it is 'Positive', 'Negative', or 'Zero' using a switch-case statement.",
                  difficulty: "Intermediate",
                  difficultyScore: 1,
                  level: "Intermediate",
                  existingCode: `
                    using System;
                    class Program {
                        static void Main(string[] args) {
                            int num = 0; // Change this value to test
                            // Check the number using switch-case
                        }
                    }
                  `,
                  testCases: [
                    { condition: "The output should be 'Zero' for num = 0." },
                    { condition: "The output should be 'Positive' for num = 5." }
                  ],
                  solutionExplanation: "A switch-case can be used to handle multiple conditions, but for a more complex comparison, if-else may be better.",
                  language: "C#",
                },
              
                // Expert Level Tasks
                {
                  title: "Advanced Conditional Expression",
                  description: "Write a C# program using conditional statements to find the largest of three numbers.",
                  difficulty: "Expert",
                  difficultyScore: 1,
                  level: "Expert",
                  existingCode: `
                    using System;
                    class Program {
                        static void Main(string[] args) {
                            int a = 5, b = 7, c = 9;
                            // Find the largest of the three numbers
                        }
                    }
                  `,
                  testCases: [
                    { condition: "The output should be '9'." }
                  ],
                  solutionExplanation: "Use nested if-else or a combination of conditional operators to compare the numbers and find the largest.",
                  language: "C#",
                },
              
              
                {
                  title: "Error Correction: Nested Conditional Statements",
                  description: "Correct the following code that uses nested if-else statements to check if a number is divisible by 5 and 3.",
                  difficulty: "Expert",
                  difficultyScore: 1,
                  level: "Expert",
                  existingCode: `
                    using System;
                    class Program {
                        static void Main(string[] args) {
                            int num = 30;
                            
                            if (num % 3 == 0)
                                if (num % 5 == 0) 
                                    Console.WriteLine("Divisible by both");
                                else
                                    Console.WriteLine("Not divisible by both");
                        }
                    }
                  `,
                  testCases: [
                    { condition: "The output should be 'Divisible by both'." }
                  ],
                  solutionExplanation: "The nested else statement is incorrect; an additional else should be added to handle the case when num is not divisible by both 3 and 5.",
                  language: "C#",
                },
              
                {
                  title: "Code Optimization: Complex Conditional Logic",
                  description: "Optimize the following nested if-else code to use a single switch-case or ternary operator.",
                  difficulty: "Expert",
                  difficultyScore: 1,
                  level: "Expert",
                  existingCode: `
                    using System;
                    class Program {
                        static void Main(string[] args) {
                            int num = 4;
                            if (num > 0) {
                                if (num % 2 == 0) {
                                    Console.WriteLine("Positive Even");
                                } else {
                                    Console.WriteLine("Positive Odd");
                                }
                            } else {
                                Console.WriteLine("Non-positive");
                            }
                        }
                    }
                  `,
                  testCases: [
                    { condition: "The output should be 'Positive Even'." }
                  ],
                  solutionExplanation: "This logic can be simplified using a switch-case or ternary operator to make the code more efficient.",
                  language: "C#",
                },
              
                {
                  title: "Problem Solving: Complex Conditional Statements",
                  description: "Write a C# program that checks if a given year is a leap year or not using conditional statements.",
                  difficulty: "Expert",
                  difficultyScore: 1,
                  level: "Expert",
                  existingCode: `
                    using System;
                    class Program {
                        static void Main(string[] args) {
                            int year = 2024; // Change this value to test
                            // Check if the year is a leap year
                        }
                    }
                  `,
                  testCases: [
                    { condition: "The output should be 'Leap Year' for year = 2024." },
                    { condition: "The output should be 'Not a Leap Year' for year = 2023." }
                  ],
                  solutionExplanation: "A leap year is divisible by 4 but not by 100, unless it's also divisible by 400. This can be handled by conditional statements.",
                  language: "C#",
                },
                  // Basic Level Tasks
                  {
                    title: "For Loop - Print Numbers",
                    description: "Write a C# program that uses a for loop to print numbers from 1 to 10.",
                    difficulty: "Basic",
                    difficultyScore: 1,
                    level: "Basic",
                    existingCode: `
                      using System;
                      class Program {
                          static void Main(string[] args) {
                              // Use a for loop to print numbers from 1 to 10
                          }
                      }
                    `,
                    testCases: [
                      { condition: "The output should be numbers from 1 to 10." }
                    ],
                    solutionExplanation: "Use a for loop to iterate from 1 to 10 and print each number using Console.WriteLine().",
                    language: "C#",
                  },
                
                
                  {
                    title: "Error Correction: Incorrect For Loop",
                    description: "Correct the following code to print the numbers from 1 to 5 using a for loop.",
                    difficulty: "Basic",
                    difficultyScore: 1,
                    level: "Basic",
                    existingCode: `
                      using System;
                      class Program {
                          static void Main(string[] args) {
                                                        for int i = 1 i <= 5 i++ {
                                  Console.WriteLine(i);
                              }
                          }
                      }
                    `,
                    testCases: [
                      { condition: "The output should be numbers from 1 to 5." }
                    ],
                    solutionExplanation: "The for loop should have parentheses around the initialization, condition, and increment expressions, and semicolons separating them.",
                    language: "C#",
                  },
                
                  {
                    title: "Code Optimization: for Loop",
                    description: "Optimize the following code to print the squares of numbers from 1 to 5 using a for loop.",
                    difficulty: "Basic",
                    difficultyScore: 1,
                    level: "Basic",
                    existingCode: `
                      using System;
                      class Program {
                          static void Main(string[] args) {
                              for (int i = 1; i <= 5; i++) {
                                  int square = i * i;
                                  Console.WriteLine(square);
                              }
                          }
                      }
                    `,
                    testCases: [
                      { condition: "The output should be '1, 4, 9, 16, 25'." }
                    ],
                    solutionExplanation: "The code is already efficient, but further optimizations could be made depending on use cases (e.g., using a collection or function).",
                    language: "C#",
                  },
                
                  {
                    title: "Problem Solving: Sum of Numbers",
                    description: "Write a C# program that calculates the sum of numbers from 1 to 100 using a for loop.",
                    difficulty: "Basic",
                    difficultyScore: 1,
                    level: "Basic",
                    existingCode: `
                      using System;
                      class Program {
                          static void Main(string[] args) {
                              int sum = 0;
                              // Use a for loop to calculate the sum of numbers from 1 to 100
                          }
                      }
                    `,
                    testCases: [
                      { condition: "The output should be '5050'." }
                    ],
                    solutionExplanation: "Use a for loop to iterate through the numbers from 1 to 100, adding each to a variable for the sum.",
                    language: "C#",
                  },
                
                  // Intermediate Level Tasks
                  {
                    title: "While Loop - Countdown",
                    description: "Write a C# program that uses a while loop to count down from 10 to 1.",
                    difficulty: "Intermediate",
                    difficultyScore: 1,
                    level: "Intermediate",
                    existingCode: `
                      using System;
                      class Program {
                          static void Main(string[] args) {
                              int i = 10;
                              // Use a while loop to count down from 10 to 1
                          }
                      }
                    `,
                    testCases: [
                      { condition: "The output should be '10, 9, 8, ..., 1'." }
                    ],
                    solutionExplanation: "A while loop can be used to decrease the value of 'i' until it reaches 1, printing each value at each iteration.",
                    language: "C#",
                  },
                
                
                  {
                    title: "Error Correction: while Loop",
                    description: "Correct the following code to print all even numbers from 2 to 10 using a while loop.",
                    difficulty: "Intermediate",
                    difficultyScore: 1,
                    level: "Intermediate",
                    existingCode: `
                      using System;
                      class Program {
                          static void Main(string[] args) {
                              int i = 2;
                              // Print even numbers from 2 to 10 using a while loop
                              while (i <= 10) {
                                  Console.WriteLine(i);
                                  i = i + 2; 
                              }
                          }
                      }
                    `,
                    testCases: [
                      { condition: "The output should be '2, 4, 6, 8, 10'." }
                    ],
                    solutionExplanation: "The error in the code is that the value of 'i' is already incremented by 2, so there is no need for additional changes in the increment statement.",
                    language: "C#",
                  },
                
                  {
                    title: "Code Optimization: while Loop",
                    description: "Optimize the following code to print the square of numbers from 1 to 5 using a while loop.",
                    difficulty: "Intermediate",
                    difficultyScore: 1,
                    level: "Intermediate",
                    existingCode: `
                      using System;
                      class Program {
                          static void Main(string[] args) {
                              int i = 1;
                              while (i <= 5) {
                                  int square = i * i;
                                  Console.WriteLine(square);
                                  i++;
                              }
                          }
                      }
                    `,
                    testCases: [
                      { condition: "The output should be '1, 4, 9, 16, 25'." }
                    ],
                    solutionExplanation: "The code is already quite efficient. However, using a for loop could be more appropriate in this case as the number of iterations is known beforehand.",
                    language: "C#",
                  },
                
                  {
                    title: "Problem Solving: Fibonacci Series",
                    description: "Write a C# program using a while loop to print the first 10 numbers in the Fibonacci series.",
                    difficulty: "Intermediate",
                    difficultyScore: 1,
                    level: "Intermediate",
                    existingCode: `
                      using System;
                      class Program {
                          static void Main(string[] args) {
                              int a = 0, b = 1;
                              // Print the first 10 numbers of the Fibonacci series using a while loop
                          }
                      }
                    `,
                    testCases: [
                      { condition: "The output should be '0, 1, 1, 2, 3, 5, 8, 13, 21, 34'." }
                    ],
                    solutionExplanation: "The Fibonacci sequence is generated by adding the last two numbers to produce the next one. A while loop can help iterate until the required number of terms are printed.",
                    language: "C#",
                  },
                
                  // Expert Level Tasks
                  {
                    title: "Do-While Loop: Reverse Countdown",
                    description: "Write a C# program that uses a do-while loop to count down from 10 to 1.",
                    difficulty: "Expert",
                    difficultyScore: 1,
                    level: "Expert",
                    existingCode: `
                      using System;
                      class Program {
                          static void Main(string[] args) {
                              int i = 10;
                              // Use a do-while loop to count down from 10 to 1
                          }
                      }
                    `,
                    testCases: [
                      { condition: "The output should be '10, 9, 8, ..., 1'." }
                    ],
                    solutionExplanation: "A do-while loop guarantees that the body of the loop will execute at least once, even if the condition is false.",
                    language: "C#",
                  },
                
                  {
                    title: "Error Correction: do-while Loop",
                    description: "Correct the following code that uses a do-while loop to print the numbers from 1 to 5.",
                    difficulty: "Expert",
                    difficultyScore: 1,
                    level: "Expert",
    
                    existingCode: `
                      using System;
                      class Program {
                          static void Main(string[] args) {
                              int i = 1;
                              do {
                                  Console.WriteLine(i);
                                  i++;
                              } while i <= 5;
                          }
                      }
                    `,
                    testCases: [
                      { condition: "The output should be '1, 2, 3, 4, 5'." }
                    ],
                    solutionExplanation: "The syntax error occurs in the condition; parentheses should be used around the condition in the while clause.",
                    language: "C#",
                  },
                
                  {
                    title: "Code Optimization: do-while Loop",
                    description: "Optimize the following code that prints numbers from 1 to 10 using a do-while loop.",
                    difficulty: "Expert",
                    difficultyScore: 1,
                    level: "Expert",
                    existingCode: `
                      using System;
                      class Program {
                          static void Main(string[] args) {
                              int i = 1;
                              do {
                                  Console.WriteLine(i);
                                  i++;
                              } while (i <= 10);
                          }
                      }
                    `,
                    testCases: [
                      { condition: "The output should be numbers from 1 to 10." }
                    ],
                    solutionExplanation: "This code is already optimized, but the same output could be achieved using a for loop for more concise code.",
                    language: "C#",
                  },
                    // Basic Level Tasks
                    {
                      title: "Break Statement - Print Numbers",
                      description: "Write a C# program that prints numbers from 1 to 10. Use the break statement to stop the loop when the number 6 is encountered.",
                      difficulty: "Basic",
                      difficultyScore: 1,
                      level: "Basic",
                      existingCode: `
                        using System;
                        class Program {
                            static void Main(string[] args) {
                                // Print numbers from 1 to 10 and break when 6 is encountered
                            }
                        }
                      `,
                      testCases: [
                        { condition: "The output should be '1, 2, 3, 4, 5'." }
                      ],
                      solutionExplanation: "Use the break statement inside the loop when the number 6 is encountered to stop further iterations.",
                      language: "C#",
                    },
                  
                  
                    {
                      title: "Error Correction: Break Statement",
                      description: "Correct the following code so that it prints numbers from 1 to 5, and then breaks out of the loop when 6 is encountered.",
                      difficulty: "Basic",
                      difficultyScore: 1,
                      level: "Basic",
                      
                      existingCode: `
                        using System;
                        class Program {
                            static void Main(string[] args) {
                                for (int i = 1; i <= 10; i++) {
                                    Console.WriteLine(i);
                                    if (i == 6) {
                                        
                                    }
                                }
                            }
                        }
                      `,
                      testCases: [
                        { condition: "The output should be '1, 2, 3, 4, 5'." }
                      ],
                      solutionExplanation: "The break statement needs to be added inside the if condition to exit the loop when 'i' is 6.",
                      language: "C#",
                    },
                  
                    {
                      title: "Code Optimization: Break Statement",
                      description: "Optimize the following code to print the first 5 even numbers using a for loop and break when the number exceeds 10.",
                      difficulty: "Basic",
                      difficultyScore: 1,
                      level: "Basic",
                      
                      existingCode: `
                        using System;
                        class Program {
                            static void Main(string[] args) {
                                for (int i = 1; i <= 10; i++) {
                                    if (i % 2 == 0) {
                                        Console.WriteLine(i);
                                    }
                                }
                            }
                        }
                      `,
                      testCases: [
                        { condition: "The output should be '2, 4, 6, 8, 10'." }
                      ],
                      solutionExplanation: "Add a break statement to exit the loop once the number exceeds 10. Also, ensure that only even numbers are printed.",
                      language: "C#",
                    },
                  
                    {
                      title: "Problem Solving: Break Statement",
                      description: "Write a C# program that uses a break statement to stop the loop if the sum of the numbers exceeds 50.",
                      difficulty: "Basic",
                      difficultyScore: 1,
                      level: "Basic",
         
                      existingCode: `
                        using System;
                        class Program {
                            static void Main(string[] args) {
                                int sum = 0;
                                for (int i = 1; i <= 100; i++) {
                                    sum += i;
                                    // Break when sum exceeds 50
                                }
                                Console.WriteLine(sum);
                            }
                        }
                      `,
                      testCases: [
                        { condition: "The output should be '51'." }
                      ],
                      solutionExplanation: "Use the break statement inside the loop to stop once the sum exceeds 50.",
                      language: "C#",
                    },
                  
                    // Intermediate Level Tasks
                    {
                      title: "Continue Statement - Skip Odd Numbers",
                      description: "Write a C# program that prints the even numbers from 1 to 10 using the continue statement to skip odd numbers.",
                      difficulty: "Intermediate",
                      difficultyScore: 1,
                      level: "Intermediate",
                      existingCode: `
                        using System;
                        class Program {
                            static void Main(string[] args) {
                                for (int i = 1; i <= 10; i++) {
                                    // Use continue to skip odd numbers
                                }
                            }
                        }
                      `,
                      testCases: [
                        { condition: "The output should be '2, 4, 6, 8, 10'." }
                      ],
                      solutionExplanation: "The continue statement is used to skip the current iteration when 'i' is odd, so the loop only prints even numbers.",
                      language: "C#",
                    },
                  
                    
                  
                    {
                      title: "Error Correction: Continue Statement",
                      description: "Correct the following code to print the numbers 1 to 10 but skip the number 5 using the continue statement.",
                      difficulty: "Intermediate",
                      difficultyScore: 1,
                      level: "Intermediate",
                      existingCode: `
                        using System;
                        class Program {
                            static void Main(string[] args) {
                                for (int i = 1; i <= 10; i++) {
                                    if (i == 5)
                                        // Missing continue statement
                                    Console.WriteLine(i);
                                }
                            }
                        }
                      `,
                      testCases: [
                        { condition: "The output should be '1, 2, 3, 4, 6, 7, 8, 9, 10'." }
                      ],
                      solutionExplanation: "Add the continue statement inside the if condition to skip printing the number 5.",
                      language: "C#",
                    },
                  
                    {
                      title: "Code Optimization: Continue Statement",
                      description: "Optimize the following code that prints all numbers from 1 to 20, skipping multiples of 3 using the continue statement.",
                      difficulty: "Intermediate",
                      difficultyScore: 1,
                      level: "Intermediate",
                      existingCode: `
                        using System;
                        class Program {
                            static void Main(string[] args) {
                                for (int i = 1; i <= 20; i++) {
                                    if (i % 3 == 0) {
                                        // Optimization needed
                                    }
                                    Console.WriteLine(i);
                                }
                            }
                        }
                      `,
                      testCases: [
                        { condition: "The output should be '1, 2, 4, 5, 7, 8, 10, 11, 13, 14, 16, 17, 19, 20'." }
                      ],
                      solutionExplanation: "Add a continue statement to skip the numbers that are divisible by 3, optimizing the loop to avoid printing them.",
                      language: "C#",
                    },
                  
                    {
                      title: "Problem Solving: Break and Continue",
                      description: "Write a C# program that uses both break and continue statements to print numbers from 1 to 50. Skip multiples of 5 and stop the loop if the number 30 is encountered.",
                      difficulty: "Intermediate",
                      difficultyScore: 1,
                      level: "Intermediate",
                      existingCode: `
                        using System;
                        class Program {
                            static void Main(string[] args) {
                                for (int i = 1; i <= 50; i++) {
                                    // Skip multiples of 5 and break when 30 is encountered
                                }
                            }
                        }
                      `,
                      testCases: [
                        { condition: "The output should be '1, 2, 3, 4, 6, 7, 8, 9, 11, 12, ..., 29'." }
                      ],
                      solutionExplanation: "Use the continue statement to skip multiples of 5, and use the break statement to stop the loop when the number 30 is encountered.",
                      language: "C#",
                    },
                  
                    // Expert Level Tasks
                    {
                      title: "Break and Continue: Complex Loop",
                      description: "Write a C# program that prints all prime numbers from 1 to 100. Skip non-prime numbers using the continue statement and stop the loop if the prime number 50 is found using the break statement.",
                      difficulty: "Expert",
                      difficultyScore: 1,
                      level: "Expert",
                      existingCode: `
                        using System;
                        class Program {
                            static void Main(string[] args) {
                                // Use break and continue statements to find and print prime numbers
                            }
                        }
                      `,
                      testCases: [
                        { condition: "The output should be prime numbers up to 50 excluding 50." }
                      ],
                      solutionExplanation: "The continue statement is used to skip non-prime numbers, while the break statement stops the loop once the prime number 50 is found.",
                      language: "C#",
                    },
                      // Basic Level Tasks
                      {
                        title: "Method Declaration - Print Greeting",
                        description: "Write a C# method that takes a name as a parameter and prints a greeting message 'Hello, [name]!'",
                        difficulty: "Basic",
                        difficultyScore: 1,
                        level: "Basic",
                        existingCode: `
                          using System;
                          class Program {
                              static void Main(string[] args) {
                                  // Call the method here with a name
                              }
                          }
                        `,
                        testCases: [
                          { condition: "The output should be 'Hello, John!'" }
                        ],
                        solutionExplanation: "Declare a method that accepts a string parameter and prints the greeting message.",
                        language: "C#",
                      },
                    
                    
                      {
                        title: "Error Correction: Method Return Type",
                        description: "Correct the following code so that the method returns the sum of two integers.",
                        difficulty: "Basic",
                        difficultyScore: 1,
                        level: "Basic",
                        
                        existingCode: `
                          using System;
                          class Program {
                              static void Main(string[] args) {
                                  int result = AddNumbers(5, 7);
                                  Console.WriteLine(result);
                              }
                    
                              // Missing return type
                              static AddNumbers(int a, int b) {
                                  return a + b;
                              }
                          }
                        `,
                        testCases: [
                          { condition: "The output should be '12'." }
                        ],
                        solutionExplanation: "The method 'AddNumbers' needs to specify the return type 'int' to compile correctly.",
                        language: "C#",
                      },
                    
                      {
                        title: "Code Optimization: Method Parameters",
                        description: "Optimize the following code to calculate the area of a rectangle using method parameters for length and width.",
                        difficulty: "Basic",
                        difficultyScore: 1,
                        level: "Basic",
                        
                        existingCode: `
                          using System;
                          class Program {
                              static void Main(string[] args) {
                                  Console.WriteLine(CalculateArea(5, 10));
                              }
                    
                              static int CalculateArea() {
                                  int length = 5;
                                  int width = 10;
                                  return length * width;
                              }
                          }
                        `,
                        testCases: [
                          { condition: "The output should be '50'." }
                        ],
                        solutionExplanation: "Modify the 'CalculateArea' method to accept length and width as parameters instead of using hardcoded values.",
                        language: "C#",
                      },
                    
                      {
                        title: "Problem Solving: Return Type",
                        description: "Write a C# method that takes two integers and returns their difference. Call the method in the Main method and print the result.",
                        difficulty: "Basic",
                        difficultyScore: 1,
                        level: "Basic",
                        existingCode: `
                          using System;
                          class Program {
                              static void Main(string[] args) {
                                  // Call the method and print the result here
                              }
                    
                              static int SubtractNumbers(int a, int b) {
                                  return a - b;
                              }
                          }
                        `,
                        testCases: [
                          { condition: "The output should be '3' when inputs are 8 and 5." }
                        ],
                        solutionExplanation: "The method 'SubtractNumbers' should return the difference between the two input integers.",
                        language: "C#",
                      },
                    
                      // Intermediate Level Tasks
                      {
                        title: "Method Overloading - Add Numbers",
                        description: "Write a C# program that overloads the 'Add' method to add either two integers or two doubles and prints the result.",
                        difficulty: "Intermediate",
                        difficultyScore: 1,
                        level: "Intermediate",
                        existingCode: `
                          using System;
                          class Program {
                              static void Main(string[] args) {
                                  // Call Add method with integers and doubles
                              }
                    
                              static int Add(int a, int b) {
                                  return a + b;
                              }
                    
                              static double Add(double a, double b) {
                                  return a + b;
                              }
                          }
                        `,
                        testCases: [
                          { condition: "The output should be '8' for integers 3 and 5, and '7.5' for doubles 3.2 and 4.3." }
                        ],
                        solutionExplanation: "The 'Add' method is overloaded to handle both integer and double types.",
                        language: "C#",
                      },
                    
                    
                      {
                        title: "Error Correction: Method Parameters",
                        description: "Correct the following method to accept two parameters and return their sum.",
                        difficulty: "Intermediate",
                        difficultyScore: 1,
                        level: "Intermediate",
                        existingCode: `
                          using System;
                          class Program {
                              static void Main(string[] args) {
                                  int result = SumNumbers();
                                  Console.WriteLine(result);
                              }
                    
                              static int SumNumbers(int a, int b) {
                                  return a + b;
                              }
                          }
                        `,
                        testCases: [
                          { condition: "The output should be '15' when inputs are 7 and 8." }
                        ],
                        solutionExplanation: "The method 'SumNumbers' should be called with two arguments. The 'Main' method should pass values for 'a' and 'b'.",
                        language: "C#",
                      },
                    
                      {
                        title: "Code Optimization: Method Return Type",
                        description: "Optimize the following code to calculate the area of a circle using a method that takes the radius as a parameter and returns the area.",
                        difficulty: "Intermediate",
                        difficultyScore: 1,
                        level: "Intermediate",
                        existingCode: `
                          using System;
                          class Program {
                              static void Main(string[] args) {
                                  double area = CalculateCircleArea();
                                  Console.WriteLine(area);
                              }
                    
                              static double CalculateCircleArea() {
                                  double radius = 7;
                                  return Math.PI * radius * radius;
                              }
                          }
                        `,
                        testCases: [
                          { condition: "The output should be '153.93804002589985'." }
                        ],
                        solutionExplanation: "The method should accept the radius as a parameter instead of using a hardcoded value for optimization.",
                        language: "C#",
                      },
                    
                      {
                        title: "Problem Solving: Method with Return",
                        description: "Write a C# method that calculates and returns the perimeter of a rectangle, given the length and width as parameters. Call the method in the Main method and print the result.",
                        difficulty: "Intermediate",
                        difficultyScore: 1,
                        level: "Intermediate",
                        existingCode: `
                          using System;
                          class Program {
                              static void Main(string[] args) {
                                  // Call the method with length and width parameters
                              }
                    
                              static int CalculatePerimeter(int length, int width) {
                                  return 2 * (length + width);
                              }
                          }
                        `,
                        testCases: [
                          { condition: "The output should be '26' when length is 8 and width is 5." }
                        ],
                        solutionExplanation: "The method 'CalculatePerimeter' should accept length and width as parameters and return the perimeter of the rectangle.",
                        language: "C#",
                      },
                    
                      // Expert Level Tasks
                      {
                        title: "Recursive Method - Factorial",
                        description: "Write a C# method that calculates the factorial of a number using recursion. The method should return the factorial and print the result in the Main method.",
                        difficulty: "Expert",
                        difficultyScore: 1,
                        level: "Expert",
                        existingCode: `
                          using System;
                          class Program {
                              static void Main(string[] args) {
                                  int result = CalculateFactorial(5);
                                  Console.WriteLine(result);
                              }
                    
                              static int CalculateFactorial(int n) {
                                  // Recursion logic for factorial
                              }
                          }
                        `,
                        testCases: [
                          { condition: "The output should be '120' for input 5." }
                        ],
                        solutionExplanation: "The method should use recursion to calculate the factorial of a number, multiplying the current number by the factorial of (n-1).",
                        language: "C#",
                      },
                        // Basic Level Tasks
                        {
                          title: "Method Declaration - Add Two Numbers",
                          description: "Write a C# method that accepts two integers as parameters and returns their sum.",
                          difficulty: "Basic",
                          difficultyScore: 1,
                          level: "Basic",
                          existingCode: `
                            using System;
                            class Program {
                                static void Main(string[] args) {
                                    // Call the method here with two integers
                                }
                            }
                          `,
                          testCases: [
                            { condition: "The output should be '8' when inputs are 3 and 5." }
                          ],
                          solutionExplanation: "Define a method that takes two integers as parameters and returns their sum.",
                          language: "C#",
                        },
                      
                      
                        {
                          title: "Error Correction: Parameter Initialization",
                          description: "Fix the error in the following method so it correctly multiplies two integers and returns the result.",
                          difficulty: "Basic",
                          difficultyScore: 1,
                          level: "Basic",
                          existingCode: `
                            using System;
                            class Program {
                                static void Main(string[] args) {
                                    int result = MultiplyNumbers(4, 5);
                                    Console.WriteLine(result);
                                }
                      
                                static int MultiplyNumbers() {
                                    return 4 * 5;
                                }
                            }
                          `,
                          testCases: [
                            { condition: "The output should be '20'." }
                          ],
                          solutionExplanation: "The method should accept two parameters for multiplication instead of using hardcoded values.",
                          language: "C#",
                        },
                      
                        {
                          title: "Code Optimization: Returning Area",
                          description: "Optimize the method to calculate the area of a triangle by passing base and height as parameters.",
                          difficulty: "Basic",
                          difficultyScore: 1,
                          level: "Basic",
                                                existingCode: `
                            using System;
                            class Program {
                                static void Main(string[] args) {
                                    double area = CalculateArea();
                                    Console.WriteLine(area);
                                }
                      
                                static double CalculateArea() {
                                    double baseLength = 5;
                                    double height = 10;
                                    return 0.5 * baseLength * height;
                                }
                            }
                          `,
                          testCases: [
                            { condition: "The output should be '25'." }
                          ],
                          solutionExplanation: "Pass base and height as parameters to the method instead of hardcoding them.",
                          language: "C#",
                        },
                      
                        {
                          title: "Problem Solving: Rectangle Area",
                          description: "Write a C# method to calculate the area of a rectangle. The method should take length and width as parameters and return the area.",
                          difficulty: "Basic",
                          difficultyScore: 1,
                          level: "Basic",
                          existingCode: `
                            using System;
                            class Program {
                                static void Main(string[] args) {
                                    // Call the method to calculate the area of a rectangle
                                }
                      
                                static int CalculateRectangleArea(int length, int width) {
                                    return length * width;
                                }
                            }
                          `,
                          testCases: [
                            { condition: "The output should be '35' when length is 7 and width is 5." }
                          ],
                          solutionExplanation: "The method should calculate the area of the rectangle by multiplying the length and width.",
                          language: "C#",
                        },
                      
                        // Intermediate Level Tasks
                        {
                          title: "Method Overloading - Find Max",
                          description: "Write a C# program that overloads the 'FindMax' method to find the maximum of two integers and two doubles.",
                          difficulty: "Intermediate",
                          difficultyScore: 1,
                          level: "Intermediate",
                          existingCode: `
                            using System;
                            class Program {
                                static void Main(string[] args) {
                                    // Call FindMax method with integers and doubles
                                }
                      
                                static int FindMax(int a, int b) {
                                    return a > b ? a : b;
                                }
                      
                                static double FindMax(double a, double b) {
                                    return a > b ? a : b;
                                }
                            }
                          `,
                          testCases: [
                            { condition: "The output should be '8' for integers 3 and 8, and '7.5' for doubles 3.2 and 7.5." }
                          ],
                          solutionExplanation: "The method 'FindMax' is overloaded to handle both integer and double types.",
                          language: "C#",
                        },
                      
                        {
                          title: "Error Correction: Method Return Value",
                          description: "Fix the error in the method so that it correctly returns the product of two numbers.",
                          difficulty: "Intermediate",
                          difficultyScore: 1,
                          level: "Intermediate",
                          existingCode: `
                            using System;
                            class Program {
                                static void Main(string[] args) {
                                    int result = MultiplyNumbers(4, 5);
                                    Console.WriteLine(result);
                                }
                      
                                static int MultiplyNumbers(int a, int b) {
                                    return a + b; // Error: should multiply, not add
                                }
                            }
                          `,
                          testCases: [
                            { condition: "The output should be '20'." }
                          ],
                          solutionExplanation: "The method 'MultiplyNumbers' should return the product, not the sum of the two integers.",
                          language: "C#",
                        },
                      
                        {
                          title: "Code Optimization: Circle Area",
                          description: "Optimize the following code to calculate the area of a circle by passing the radius as a parameter.",
                          difficulty: "Intermediate",
                          difficultyScore: 1,
                          level: "Intermediate",
                          existingCode: `
                            using System;
                            class Program {
                                static void Main(string[] args) {
                                    double area = CalculateCircleArea();
                                    Console.WriteLine(area);
                                }
                      
                                static double CalculateCircleArea() {
                                    double radius = 7;
                                    return Math.PI * radius * radius;
                                }
                            }
                          `,
                          testCases: [
                            { condition: "The output should be '153.93804002589985'." }
                          ],
                          solutionExplanation: "Pass the radius as a parameter to the method instead of using a hardcoded value for better flexibility.",
                          language: "C#",
                        },
                      
                        // Expert Level Tasks
                        {
                          title: "Recursive Method - Fibonacci Series",
                          description: "Write a C# method that calculates the nth Fibonacci number using recursion. Print the nth Fibonacci number in the Main method.",
                          difficulty: "Expert",
                          difficultyScore: 1,
                          level: "Expert",
                          existingCode: `
                            using System;
                            class Program {
                                static void Main(string[] args) {
                                    int result = Fibonacci(6);
                                    Console.WriteLine(result);
                                }
                      
                                static int Fibonacci(int n) {
                                    // Recursion logic for Fibonacci series
                                }
                            }
                          `,
                          testCases: [
                            { condition: "The output should be '8' for input 6." }
                          ],
                          solutionExplanation: "The Fibonacci method should recursively call itself to calculate the nth Fibonacci number.",
                          language: "C#",
                        },
                      
                        {
                          title: "Method with Arrays - Sum of Elements",
                          description: "Write a C# method that takes an array of integers as a parameter and returns the sum of its elements.",
                          difficulty: "Expert",
                          difficultyScore: 1,
                          level: "Expert",
                          existingCode: `
                            using System;
                            class Program {
                                static void Main(string[] args) {
                                    int[] numbers = {1, 2, 3, 4, 5};
                            }}
                          `,
                          testCases: [
                            { condition: "The output should be '15' for the array {1, 2, 3, 4, 5}." }
                          ],
                          solutionExplanation: "The method should iterate through the array and sum all its elements.",
                          language: "C#",
                        },
                          // Basic Level Tasks
                          {
                            title: "Method with Optional Parameter",
                            description: "Complete a C# method that accepts two integers as parameters, with the second parameter being optional. The method should return their sum, and if the second parameter is not provided, it should return the first parameter.",
                            difficulty: "Basic",
                            difficultyScore: 1,
                            level: "Basic",
                            
                            existingCode: `
                              using System;
                              class Program {
                                  static void Main(string[] args) {
                                      int result = AddNumbers(5);
                                      Console.WriteLine(result);
                                  }
                        
                                  static int AddNumbers(int a, int b = 0) {
                                      return;
                                  }
                              }
                            `,
                            testCases: [
                              { condition: "The output should be '5' when only 5 is passed as an argument." },
                              { condition: "The output should be '15' when 5 and 10 are passed." }
                            ],
                            solutionExplanation: "The second parameter 'b' has a default value of 0, making it optional.",
                            language: "C#",
                          },
                        
                        
                          {
                            title: "Error Correction: Optional Parameter Default Value",
                            description: "Fix the error in the following code so that the method can accept an optional parameter 'c', with a default value of 5.",
                            difficulty: "Basic",
                            difficultyScore: 1,
                            level: "Basic",
                            existingCode: `
                              using System;
                              class Program {
                                  static void Main(string[] args) {
                                      int result = CalculateArea(4);
                                      Console.WriteLine(result);
                                  }
                        
                                  static int CalculateArea(int length, int width = 5) {
                                      return length * width;
                                  }
                              }
                            `,
                            testCases: [
                              { condition: "The output should be '20' when length is 4 and width is 5." }
                            ],
                            solutionExplanation: "The optional parameter 'width' should have a default value of 5, and it is correctly implemented here.",
                            language: "C#",
                          },
                        
                          {
                            title: "Code Optimization: Method with Optional Parameter",
                            description: "Optimize the code by using an optional parameter in the method to calculate the area of a rectangle. If the second parameter is not provided, it should assume the width is the same as the length.",
                            difficulty: "Basic",
                            difficultyScore: 1,
                            level: "Basic",
                            existingCode: `
                              using System;
                              class Program {
                                  static void Main(string[] args) {
                                      int area = CalculateArea(5);
                                      Console.WriteLine(area);
                                  }
                        
                                  static int CalculateArea(int length, int width) {
                                      return length * width;
                                  }
                              }
                            `,
                            testCases: [
                              { condition: "The output should be '25' when the length is 5 and the width is assumed to be 5." }
                            ],
                            solutionExplanation: "The width should be optional and default to the value of length if not provided.",
                            language: "C#",
                          },
                        
                          {
                            title: "Problem Solving: Calculate Discount",
                            description: "Complete a C# method that calculates a discounted price. The method should take the original price as the first parameter and the discount percentage as the second parameter, which is optional. If no discount percentage is provided, the method should assume a discount of 10%.",
                            difficulty: "Basic",
                            difficultyScore: 1,
                            level: "Basic",
                            existingCode: `
                              using System;
                              class Program {
                                  static void Main(string[] args) {
                                      double discountedPrice = CalculateDiscount(100);
                                      Console.WriteLine(discountedPrice);
                                  }
                        
                                  static double CalculateDiscount(double price, double discount = 10) {
                                      return;
                                  }
                              }
                            `,
                            testCases: [
                              { condition: "The output should be '90' when the price is 100 and no discount is applied." },
                              { condition: "The output should be '80' when the price is 100 and a 20% discount is applied." }
                            ],
                            solutionExplanation: "The discount is optional and defaults to 10% if not specified.",
                            language: "C#",
                          },
                        
                          // Intermediate Level Tasks
                          {
                            title: "Named Arguments - Swap Two Numbers",
                            description: "Complete a C# method that swaps two integers using named arguments. The method should print the swapped values.",
                            difficulty: "Intermediate",
                            difficultyScore: 1,
                            level: "Intermediate",
                            existingCode: `
                              using System;
                              class Program {
                                  static void Main(string[] args) {
                                      int a = 5, b = 10;
                                      SwapNumbers();
                                  }
                        
                                  static void SwapNumbers(int a, int b) {
                                      Console.WriteLine($"Before Swap: a = {a}, b = {b}");
                                      int temp = a;
                                      a = b;
                                      b = temp;
                                      Console.WriteLine($"After Swap: a = {a}, b = {b}");
                                  }
                              }
                            `,
                            testCases: [
                              { condition: "The output should be 'Before Swap: a = 5, b = 10' and 'After Swap: a = 10, b = 5'." }
                            ],
                            solutionExplanation: "Named arguments are used to explicitly pass values to parameters.",
                            language: "C#",
                          },
                        
                          {
                            title: "Error Correction: Named Arguments",
                            description: "Fix the error in the following code to properly pass named arguments when calling the 'DisplayDetails' method.",
                            difficulty: "Intermediate",
                            difficultyScore: 1,
                            level: "Intermediate",
                            existingCode: `
                              using System;
                              class Program {
                                  static void Main(string[] args) {
                                      DisplayDetails(name: 'John', age: 25);
                                  }
                        
                                  static void DisplayDetails(string name, int age) {
                                      Console.WriteLine($"Name: {name}, Age: {age}");
                                  }
                              }
                            `,
                            testCases: [
                              { condition: "The output should be 'Name: John, Age: 25'." }
                            ],
                            solutionExplanation: "Named arguments must be provided with their names (not in quotes) when calling the method.",
                            language: "C#",
                          },
                        
                          {
                            title: "Code Optimization: Use Named Arguments",
                            description: "Optimize the following code by using named arguments to make the method call clearer and more readable.",
                            difficulty: "Intermediate",
                            difficultyScore: 1,
                            level: "Intermediate",
                            existingCode: `
                              using System;
                              class Program {
                                  static void Main(string[] args) {
                                      DisplayPerson('John', 25);
                                  }
                        
                                  static void DisplayPerson(string name, int age) {
                                      Console.WriteLine($"Name: {name}, Age: {age}");
                                  }
                              }
                            `,
                            testCases: [
                              { condition: "The output should be 'Name: John, Age: 25'." }
                            ],
                            solutionExplanation: "Using named arguments makes the code more readable by specifying which parameter corresponds to which argument.",
                            language: "C#",
                          },
                        
                          // Expert Level Tasks
                          {
                            title: "Advanced Usage of Named Arguments",
                            description: "Complete  a C# method that accepts three parameters: first name, last name, and age. Use named arguments when calling the method and print the person's full name and age.",
                            difficulty: "Expert",
                            difficultyScore: 1,
                            level: "Expert",
                            existingCode: `
                              using System;
                              class Program {
                                  static void Main(string[] args) {
                                      PrintPersonInfo(firstName: 'John', lastName: 'Doe', age: 30);
                                  }
                        
                                  
                              }
                            `,
                            testCases: [
                              { condition: "The output should be 'Full Name: John Doe, Age: 30'." }
                            ],
                            solutionExplanation: "Named arguments are used to specify the values passed to each parameter, making the code easier to understand.",
                            language: "C#",
                          },
                            // Basic Level Tasks
                            {
                              title: "Method Overloading: Add Two Numbers",
                              description: "Complete  a C# method that adds two integers. Overload the method to accept either two integers or two doubles.",
                              difficulty: "Basic",
                              difficultyScore: 1,
                              level: "Basic",
                              existingCode: `
                                using System;
                                class Program {
                                    static void Main(string[] args) {
                                        Console.WriteLine(AddNumbers(5, 10));
                                        Console.WriteLine(AddNumbers(5.5, 10.5));
                                    }
                          
                                    static int AddNumbers(int a, int b) {
                                        return;
                                    }
                          
                                    static double AddNumbers(double a, double b) {
                                        return;
                                    }
                                }
                              `,
                              testCases: [
                                { condition: "The output should be '15' for integers and '16' for doubles." }
                              ],
                              solutionExplanation: "Method overloading allows defining multiple methods with the same name but different parameter types.",
                              language: "C#",
                            },
                          
                          
                            {
                              title: "Error Correction: Method Overloading",
                              description: "Fix the following code that attempts to overload a method, but it's incorrectly implemented.",
                              difficulty: "Basic",
                              difficultyScore: 1,
                              level: "Basic",
                              existingCode: `
                                using System;
                                class Program {
                                    static void Main(string[] args) {
                                        Console.WriteLine(MultiplyNumbers(5, 10));
                                        Console.WriteLine(MultiplyNumbers(5.5, 10.5));
                                    }
                          
                                    static int MultiplyNumbers(int a, int b) {
                                        return a * b;
                                    }
                          
                                    static int MultiplyNumbers(double a, double b) {
                                        return a * b;
                                    }
                                }
                              `,
                              testCases: [
                                { condition: "The output should be '50' for integers and '57.75' for doubles." }
                              ],
                              solutionExplanation: "The second method's return type should be 'double' to match the input parameters and return a decimal result.",
                              language: "C#",
                            },
                          
                            {
                              title: "Code Optimization: Method Overloading",
                              description: "Optimize the following code by adding method overloading to calculate the product of two integers and two doubles.",
                              difficulty: "Basic",
                              difficultyScore: 1,
                              level: "Basic",
                              existingCode: `
                                using System;
                                class Program {
                                    static void Main(string[] args) {
                                        Console.WriteLine(Multiply(5, 10));
                                        Console.WriteLine(Multiply(5.5, 10.5));
                                    }
                          
                                    static int Multiply(int a, int b) {
                                        return a * b;
                                    }
                                }
                              `,
                              testCases: [
                                { condition: "The output should be '50' for integers and '57.75' for doubles." }
                              ],
                              solutionExplanation: "Overloading the method to handle both integer and double types allows the same method name to handle different parameter types.",
                              language: "C#",
                            },
                          
                            {
                              title: "Problem Solving: Factorial Using Recursion",
                              description: "Complete a C# method that calculates the factorial of a number using recursion.",
                              difficulty: "Basic",
                              difficultyScore: 1,
                              level: "Basic",
                                                        existingCode: `
                                using System;
                                class Program {
                                    static void Main(string[] args) {
                                        Console.WriteLine(Factorial(5));
                                    }
                          
                                    static int Factorial(int n) {
                                        if () return 1;
                                                                        }
                                }
                              `,
                              testCases: [
                                { condition: "The output should be '120' for input 5." }
                              ],
                              solutionExplanation: "This is a classic example of recursion, where the method calls itself until the base case is met (n <= 1).",
                              language: "C#",
                            },
                          
                            // Intermediate Level Tasks
                            {
                              title: "Method Overloading: Calculate Area",
                              description: "Complete a C# method that calculates the area of a shape. Overload the method to calculate the area of a rectangle and a circle.",
                              difficulty: "Intermediate",
                              difficultyScore: 1,
                              level: "Intermediate",
                              existingCode: `
                                using System;
                                class Program {
                                    static void Main(string[] args) {
                                        Console.WriteLine(CalculateArea(5, 10)); // Rectangle
                                        Console.WriteLine(CalculateArea(5));    // Circle
                                    }
                          
                                    static double CalculateArea(int length, int width) {
                                        return 
                                    }
                          
                                    static double CalculateArea(int radius) {
                                        return 
                                    }
                                }
                              `,
                              testCases: [
                                { condition: "The output should be '50' for the rectangle and '78.5398' for the circle." }
                              ],
                              solutionExplanation: "Method overloading allows you to define multiple methods with the same name but different parameter signatures.",
                              language: "C#",
                            },
                          
                          
                            {
                              title: "Error Correction: Factorial Recursion",
                              description: "Fix the error in the following code that calculates the factorial of a number using recursion.",
                              difficulty: "Intermediate",
                              difficultyScore: 1,
                              level: "Intermediate",
                              existingCode: `
                                using System;
                                class Program {
                                    static void Main(string[] args) {
                                        Console.WriteLine(Factorial(5));
                                    }
                          
                                    static int Factorial(int n) {
                                        if (n < 1) return 1; // Error: incorrect base case
                                        return n * Factorial(n - 1);
                                    }
                                }
                              `,
                              testCases: [
                                { condition: "The output should be '120' for input 5." }
                              ],
                              solutionExplanation: "The base case should be 'if (n <= 1)', as factorial is undefined for values less than 1.",
                              language: "C#",
                            },
                          
                            {
                              title: "Code Optimization: Factorial Recursion",
                              description: "Optimize the following code by improving the recursive method for calculating the factorial of a number.",
                              difficulty: "Intermediate",
                              difficultyScore: 1,
                              level: "Intermediate",
                              existingCode: `
                                using System;
                                class Program {
                                    static void Main(string[] args) {
                                        Console.WriteLine(Factorial(5));
                                    }
                          
                                    static int Factorial(int n) {
                                        if (n <= 1) return 1;
                                        return n * Factorial(n - 1);
                                    }
                                }
                              `,
                              testCases: [
                                { condition: "The output should be '120' for input 5." }
                              ],
                              solutionExplanation: "The current implementation is already optimal for calculating factorial using recursion.",
                              language: "C#",
                            },
                          
                            // Expert Level Tasks
                            {
                              title: "Recursion: Reverse a String",
                              description: "Complete a C# method that reverses a string using recursion.",
                              difficulty: "Expert",
                              difficultyScore: 1,
                              level: "Expert",
                              
                              existingCode: `
                                using System;
                                class Program {
                                    static void Main(string[] args) {
                                        Console.WriteLine(ReverseString("Hello"));
                                    }
                          
                                    static string ReverseString(string str) {
                                        if (str.Length == 0) return str;
                                        return ReverseString();
                                    }
                                }
                              `,
                              testCases: [
                                { condition: "The output should be 'olleH' for input 'Hello'." }
                              ],
                              solutionExplanation: "The method recursively extracts the first character and appends it to the result of reversing the remaining string.",
                              language: "C#",
                            },
                              // Basic Level Tasks
                              {
                                title: "Array Initialization",
                                description: "Write a C# program that initializes an array of integers with values {1, 2, 3, 4, 5} and prints the values.",
                                difficulty: "Basic",
                                difficultyScore: 1,
                                level: "Basic",
                                
                                existingCode: `
                                  using System;
                                  class Program {
                                      static void Main(string[] args) {
                                      }
                                  }
                                `,
                                testCases: [
                                  { condition: "The output should be '1 2 3 4 5' on separate lines." }
                                ],
                                solutionExplanation: "You can initialize an array with values by specifying them within curly braces.",
                                language: "C#",
                              },
                            
                              {
                                title: "Error Correction: Array Sum",
                                description: "Fix the error in the following code that attempts to sum the elements of an array.",
                                difficulty: "Basic",
                                difficultyScore: 1,
                                level: "Basic",
                                existingCode: `
                                  using System;
                                  class Program {
                                      static void Main(string[] args) {
                                          int[] numbers = {1, 2, 3, 4, 5};
                                          int sum = 0;
                                          for (int i = 0; i <= numbers.Length; i++) {  // Error: Array index out of bounds
                                              sum += numbers[i];
                                          }
                                          Console.WriteLine(sum);
                                      }
                                  }
                                `,
                                testCases: [
                                  { condition: "The output should be '15'." }
                                ],
                                solutionExplanation: "The loop condition should be 'i < numbers.Length' to avoid accessing an invalid index.",
                                language: "C#",
                              },
                            
                              {
                                title: "Code Optimization: Array Sorting",
                                description: "Optimize the following code that sorts an array in ascending order.",
                                difficulty: "Basic",
                                difficultyScore: 1,
                                level: "Basic",
                        
                                existingCode: `
                                  using System;
                                  class Program {
                                      static void Main(string[] args) {
                                          int[] numbers = {5, 3, 8, 1, 2};
                                          Array.Sort(numbers);
                                          foreach (int number in numbers) {
                                              Console.WriteLine(number);
                                          }
                                      }
                                  }
                                `,
                                testCases: [
                                  { condition: "The output should be '1 2 3 5 8'." }
                                ],
                                solutionExplanation: "Array.Sort() is a built-in method to sort an array in ascending order.",
                                language: "C#",
                              },
                            
                              {
                                title: "Problem Solving: Reverse Array",
                                description: "Write a C# program that reverses the elements of an integer array and prints the reversed array.",
                                difficulty: "Basic",
                                difficultyScore: 1,
                                level: "Basic",
                                                            existingCode: `
                                  using System;
                                  class Program {
                                      static void Main(string[] args) {
                                          
                                      }
                                  }
                                `,
                                testCases: [
                                  { condition: "The output should be '5 4 3 2 1'." }
                                ],
                                solutionExplanation: "Array.Reverse() reverses the elements of an array in place.",
                                language: "C#",
                              },
                            
                              // Intermediate Level Tasks
                              {
                                title: "Multidimensional Array: Sum of Rows",
                                description: "Write a C# program that calculates the sum of each row in a 2D array and prints the results.",
                                difficulty: "Intermediate",
                                difficultyScore: 1,
                                level: "Intermediate",
                                                           existingCode: `
                                  using System;
                                  class Program {
                                      static void Main(string[] args) {
                                          
                                      }
                                  }
                                `,
                                testCases: [
                                  { condition: "The output should be '6 15 24'." }
                                ],
                                solutionExplanation: "Use nested loops to iterate over the rows and columns of the 2D array to calculate the sum of each row.",
                                language: "C#",
                              },
                            
                              {
                                title: "Error Correction: Incorrect Array Index",
                                description: "Fix the error in the following code that attempts to access an element from a 2D array.",
                                difficulty: "Intermediate",
                                difficultyScore: 1,
                                level: "Intermediate",
                                
                                existingCode: `
                                  using System;
                                  class Program {
                                      static void Main(string[] args) {
                                          int[,] matrix = {
                                              {1, 2, 3},
                                              {4, 5, 6}
                                          };
                                          Console.WriteLine(matrix[1, 3]);  // Error: Index out of bounds
                                      }
                                  }
                                `,
                                testCases: [
                                  { condition: "The output should be '5' after fixing the index." }
                                ],
                                solutionExplanation: "The second index should be within the bounds of the array, so 'matrix[1, 2]' should be used instead of 'matrix[1, 3]'.",
                                language: "C#",
                              },
                            
                              {
                                title: "Code Optimization: Matrix Transpose",
                                description: "Write an optimized C# code that transposes a 2D matrix.",
                                difficulty: "Intermediate",
                                difficultyScore: 1,
                                level: "Intermediate",
                                                            existingCode: `
                                  using System;
                                  class Program {
                                      static void Main(string[] args) {
                                          int[,] matrix = {
                                              {1, 2, 3},
                                              {4, 5, 6},
                                              {7, 8, 9}
                                          };
                                          int rows = matrix.GetLength(0);
                                          int cols = matrix.GetLength(1);
                                          int[,] transpose = new int[cols, rows];
                                          for (int i = 0; i < rows; i++) {
                                              for (int j = 0; j < cols; j++) {
                                                  transpose[j, i] = matrix[i, j];
                                              }
                                          }
                                          for (int i = 0; i < cols; i++) {
                                              for (int j = 0; j < rows; j++) {
                                                  Console.Write(transpose[i, j] + " ");
                                              }
                                              Console.WriteLine();
                                          }
                                      }
                                  }
                                `,
                                testCases: [
                                  { condition: "The output should be the transposed matrix." }
                                ],
                                solutionExplanation: "Transpose of a matrix is achieved by swapping rows with columns.",
                                language: "C#",
                              },
                            
                              // Expert Level Tasks
                              {
                                title: "Problem Solving: Find Maximum Element in Jagged Array",
                                description: "Write a C# program that finds the maximum element in a jagged array.",
                                difficulty: "Expert",
                                difficultyScore: 1,
                                level: "Expert",
                                existingCode: `
                                  using System;
                                  class Program {
                                      static void Main(string[] args) {
                                  }}
                                `,
                                testCases: [
                                  { condition: "The output should be '9'." }
                                ],
                                solutionExplanation: "To find the maximum element, iterate through all elements of the jagged array and compare each value.",
                                language: "C#",
                              },
                                // Basic Level Tasks
                                {
                                  title: "List Initialization",
                                  description: "Write a C# program that initializes a list of integers with values {1, 2, 3, 4, 5} and prints the values.",
                                  difficulty: "Basic",
                                  difficultyScore: 1,
                                  level: "Basic",
                                  existingCode: `
                                    using System;
                                    using System.Collections.Generic;
                                    class Program {
                                        static void Main(string[] args) {
                                        }
                                    }
                                  `,
                                  testCases: [
                                    { condition: "The output should be '1 2 3 4 5' on separate lines." }
                                  ],
                                  solutionExplanation: "You can initialize a List in C# using curly braces for the values.",
                                  language: "C#",
                                },
                              
                                
                              
                                {
                                  title: "Error Correction: Add to List",
                                  description: "Fix the error in the following code that attempts to add a number to a List.",
                                  difficulty: "Basic",
                                  difficultyScore: 1,
                                  level: "Basic",
                                  
                                  existingCode: `
                                    using System;
                                    using System.Collections.Generic;
                                    class Program {
                                        static void Main(string[] args) {
                                            List<int> numbers = new List<int>();
                                            numbers.Add("Hello");  // Error: Type mismatch
                                            foreach (int number in numbers) {
                                                Console.WriteLine(number);
                                            }
                                        }
                                    }
                                  `,
                                  testCases: [
                                    { condition: "The output should be '0' as no number is added due to error fixing." }
                                  ],
                                  solutionExplanation: "The error occurs because the List is defined to hold integers, and 'Hello' is a string. To fix this, add an integer value like '1'.",
                                  language: "C#",
                                },
                              
                                {
                                  title: "Code Optimization: Removing Duplicates from List",
                                  description: "Write a C# program that removes duplicate elements from a List of integers.",
                                  difficulty: "Basic",
                                  difficultyScore: 1,
                                  level: "Basic",
                                  existingCode: `
                                    using System;
                                    using System.Collections.Generic;
                                    class Program {
                                        static void Main(string[] args) {
                                            List<int> numbers = new List<int> {1, 2, 2, 3, 4, 4, 5};
                                            HashSet<int> uniqueNumbers = new HashSet<int>();
                                            foreach (int number in numbers) {
                                                uniqueNumbers.Add(number);
                                            }
                                            foreach (int number in uniqueNumbers) {
                                                Console.WriteLine(number);
                                            }
                                        }
                                    }
                                  `,
                                  testCases: [
                                    { condition: "The output should be '1 2 3 4 5'." }
                                  ],
                                  solutionExplanation: "By using a HashSet, duplicates are automatically removed because a HashSet does not allow duplicate values.",
                                  language: "C#",
                                },
                              
                                {
                                  title: "Problem Solving: Reverse a List",
                                  description: "Write a C# program that reverses a List of integers.",
                                  difficulty: "Basic",
                                  difficultyScore: 1,
                                  level: "Basic",
                                  
                                  existingCode: `
                                    using System;
                                    using System.Collections.Generic;
                                    class Program {
                                        static void Main(string[] args) {
                                            }
                                       
                                    }
                                  `,
                                  testCases: [
                                    { condition: "The output should be '5 4 3 2 1'." }
                                  ],
                                  solutionExplanation: "List.Reverse() reverses the order of the elements in the list.",
                                  language: "C#",
                                },
                              
                                // Intermediate Level Tasks
                                {
                                  title: "Dictionary: Check if Key Exists",
                                  description: "Write a C# program that checks if a given key exists in a dictionary and prints the value if it exists.",
                                  difficulty: "Intermediate",
                                  difficultyScore: 1,
                                  level: "Intermediate",
                                  questionNumber: 153,
                                  existingCode: `
                                    using System;
                                    using System.Collections.Generic;
                                    class Program {
                                        static void Main(string[] args) {
                                        }
                                    }
                                  `,
                                  testCases: [
                                    { condition: "The output should be 'Age of Bob: 25'." }
                                  ],
                                  solutionExplanation: "The ContainsKey() method checks if a key exists in the dictionary. If true, you can access the value using the key.",
                                  language: "C#",
                                },
                              
                                {
                                  title: "Error Correction: Dequeue Operation",
                                  description: "Fix the error in the following code that attempts to remove an element from a queue.",
                                  difficulty: "Intermediate",
                                  difficultyScore: 1,
                                  level: "Intermediate",
                                                                existingCode: `
                                    using System;
                                    using System.Collections.Generic;
                                    class Program {
                                        static void Main(string[] args) {
                                            Queue<int> numbersQueue = new Queue<int>();
                                            numbersQueue.Enqueue(1);
                                            numbersQueue.Enqueue(2);
                                            numbersQueue.Enqueue(3);
                                            Console.WriteLine(numbersQueue.Dequeue());
                                            // Error: Queue is empty
                                        }
                                    }
                                  `,
                                  testCases: [
                                    { condition: "The output should be '1' after fixing the code." }
                                  ],
                                  solutionExplanation: "The error occurs because the code attempts to dequeue from an empty queue. Ensure that the queue has elements before attempting to dequeue.",
                                  language: "C#",
                                },
                              
                                {
                                  title: "Code Optimization: Dictionary Value Update",
                                  description: "Write a C# program that optimizes the process of updating a dictionary value.",
                                  difficulty: "Intermediate",
                                  difficultyScore: 1,
                                  level: "Intermediate",
                                  existingCode: `
                                    using System;
                                    using System.Collections.Generic;
                                    class Program {
                                        static void Main(string[] args) {
                                            Dictionary<string, int> scores = new Dictionary<string, int>() {
                                                { "Alice", 85 },
                                                { "Bob", 90 }
                                            };
                                            string name = "Alice";
                                            int newScore = 95;
                                            if (scores.ContainsKey(name)) {
                                                scores[name] = newScore;
                                            }
                                            Console.WriteLine(name + ": " + scores[name]);
                                        }
                                    }
                                  `,
                                  testCases: [
                                    { condition: "The output should be 'Alice: 95'." }
                                  ],
                                  solutionExplanation: "To update the value in a dictionary, use the key and assign the new value directly. This is a simple and optimized way to update the dictionary.",
                                  language: "C#",
                                },
                              
                                // Expert Level Tasks
                                {
                                  title: "Problem Solving: Priority Queue Implementation",
                                  description: "Complete a C# program that implements a priority queue using a `SortedDictionary` and performs enqueue and dequeue operations.",
                                  difficulty: "Expert",
                                  difficultyScore: 1,
                                  level: "Expert",
                                                                existingCode: `
                                    using System;
                                    using System.Collections.Generic;
                                    class Program {
                                        static void Main(string[] args) {
                                            SortedDictionary<int, string> priorityQueue = new SortedDictionary<int, string>();
                                            priorityQueue.Add(1, "Low Priority");
                                            priorityQueue.Add(2, "Medium Priority");
                                            priorityQueue.Add(3, "High Priority");
                                            foreach () {
                                                Console.WriteLine(item.Value);
                                            }
                                        }
                                    }
                                  `,
                                  testCases: [
                                    { condition: "The output should be 'Low Priority Medium Priority High Priority'." }
                                  ],
                                  solutionExplanation: "In a priority queue, elements with lower priority values (like '1') are processed first. SortedDictionary naturally orders the items based on keys.",
                                  language: "C#",
                                },
                                  // Expert Level Tasks
                                  {
                                    title: "Problem Solving: Implement a Queue Using Stack",
                                    description: "Complete a C# program to implement a queue using two stacks.",
                                    difficulty: "Expert",
                                    difficultyScore: 1,
                                    level: "Expert",
                                                                    existingCode: `
                                      using System;
                                      using System.Collections.Generic;
                                      class QueueUsingStacks {
                                          private Stack<int> stack1 = new Stack<int>();
                                          private Stack<int> stack2 = new Stack<int>();
                                          
                                          public void Enqueue(int item) {
                                              stack1.Push(item);
                                          }
                                
                                          public int Dequeue() {
                                              if () {
                                                  while () {
                                                      stack2.Push(stack1.Pop());
                                                  }
                                              }
                                              return stack2.Pop();
                                          }
                                
                                          static void Main(string[] args) {
                                              QueueUsingStacks queue = new QueueUsingStacks();
                                              queue.Enqueue(1);
                                              queue.Enqueue(2);
                                              queue.Enqueue(3);
                                              Console.WriteLine(queue.Dequeue());  // Output: 1
                                          }
                                      }
                                    `,
                                    testCases: [
                                      { condition: "The output should be '1' after dequeue." }
                                    ],
                                    solutionExplanation: "This solution uses two stacks to simulate the FIFO behavior of a queue. Elements are moved between stacks to maintain the correct order.",
                                    language: "C#",
                                  },
                                
                                  {
                                    title: "Code Optimization: Merging Two Sorted Lists",
                                    description: "Complete a C# program that merges two sorted lists into one sorted list.",
                                    difficulty: "Expert",
                                    difficultyScore: 1,
                                    level: "Expert",
                                    
                                    existingCode: `
                                      using System;
                                      using System.Collections.Generic;
                                      class Program {
                                          static void Main(string[] args) {
                                              List<int> list1 = new List<int> {1, 3, 5, 7};
                                              List<int> list2 = new List<int> {2, 4, 6, 8};
                                              List<int> mergedList = MergeSortedLists(list1, list2);
                                              foreach (int item in mergedList) {
                                                  Console.WriteLine(item);
                                              }
                                          }
                                
                                          static List<int> MergeSortedLists(List<int> list1, List<int> list2) {
                                              List<int> mergedList = new List<int>();
                                              int i = 0, j = 0;
                                              while (i < list1.Count && j < list2.Count) {
                                                  if () {
                                                      mergedList.Add(list1[i++]);
                                                  } else {
                                                      mergedList.Add(list2[j++]);
                                                  }
                                              }
                                              while (i < list1.Count) mergedList.Add(list1[i++]);
                                              while (j < list2.Count) mergedList.Add(list2[j++]);
                                              return mergedList;
                                          }
                                      }
                                    `,
                                    testCases: [
                                      { condition: "The output should be '1 2 3 4 5 6 7 8'." }
                                    ],
                                    solutionExplanation: "This solution efficiently merges two sorted lists by iterating through both lists simultaneously and appending the smaller element to the merged list.",
                                    language: "C#",
                                  },
                                
                                  {
                                    title: "Problem Solving: Dictionary Merge",
                                    description: "Write a C# program that merges two dictionaries. If they have the same key, add the values.",
                                    difficulty: "Expert",
                                    difficultyScore: 1,
                                    level: "Expert",
                                    
                                    existingCode: `
                                      using System;
                                      using System.Collections.Generic;
                                      class Program {
                                          static void Main(string[] args) {
                                              };
                                              Dictionary<string, int> dict2 = new Dictionary<string, int>() {
                                                  { "b", 3 },
                                                  { "c", 4 }
                                              };
                                
                                              var mergedDict = MergeDictionaries(dict1, dict2);
                                              foreach (var kvp in mergedDict) {
                                                  Console.WriteLine(kvp.Key + ": " + kvp.Value);
                                              }
                                          }
                                
                                          static Dictionary<string, int> MergeDictionaries(Dictionary<string, int> dict1, Dictionary<string, int> dict2) {
                                              foreach (var kvp in dict2) {
                                                  }
                                              }
                                              return dict1;
                                          }
                                      }
                                    `,
                                    testCases: [
                                      { condition: "The output should be 'a: 1, b: 5, c: 4'." }
                                    ],
                                    solutionExplanation: "This program merges two dictionaries and adds the values of the same keys. If the key does not exist, it adds the key-value pair to the dictionary.",
                                    language: "C#",
                                  },
                                
                                  {
                                    title: "Error Correction: Queue Operations",
                                    description: "Fix the error in the following C# code snippet related to Queue operations.",
                                    difficulty: "Expert",
                                    difficultyScore: 1,
                                    level: "Expert",
                                    existingCode: `
                                      using System;
                                      using System.Collections.Generic;
                                      class Program {
                                          static void Main(string[] args) {
                                              Queue<int> numbersQueue = new Queue<int>();
                                              numbersQueue.Enqueue(1);
                                              numbersQueue.Enqueue(2);
                                              numbersQueue.Enqueue(3);
                                              Console.WriteLine(numbersQueue.Dequeue()); // Output should be 1
                                              numbersQueue.Enqueue("hello"); // Error: Type mismatch
                                          }
                                      }
                                    `,
                                    testCases: [
                                      { condition: "The output should be '1' after fixing the code." }
                                    ],
                                    solutionExplanation: "The error occurs because the Queue is typed to store integers, but a string is being added. The type mismatch can be fixed by using the correct type (int).",
                                    language: "C#",
                                  },
                                    // Expert Level Tasks
                                    {
                                      title: "Problem Solving: Implement a Stack",
                                      description: "Write a C# program to implement a stack using an array.",
                                      difficulty: "Expert",
                                      difficultyScore: 1,
                                      level: "Expert",
                                      
                                      existingCode: `
                                        using System;
                                        class StackImplementation {
                                            private int[] stackArray;
                                            private int top;
                                  
                                            public StackImplementation(int size) {
                                                stackArray = new int[size];
                                                top = -1;
                                            }
                                  
                                            public void Push(int item) {
                                                
                                            }
                                  
                                            public int Pop() {
                                                if (top == -1) {
                                                    Console.WriteLine("Stack is empty.");
                                                    return -1;
                                                }
                                                return stackArray[top--];
                                            }
                                  
                                            static void Main(string[] args) {
                                                StackImplementation stack = new StackImplementation(5);
                                                stack.Push(1);
                                                stack.Push(2);
                                                Console.WriteLine(stack.Pop()); // Output: 2
                                            }
                                        }
                                      `,
                                      testCases: [
                                        { condition: "The output should be '2' after popping the stack." }
                                      ],
                                      solutionExplanation: "This solution implements a stack using an array and manages the top index to track the stack elements.",
                                      language: "C#",
                                    },
                                  
                                    {
                                      title: "Error Correction: HashSet Operations",
                                      description: "Fix the error in the following C# code snippet related to HashSet operations.",
                                      difficulty: "Expert",
                                      difficultyScore: 1,
                                      level: "Expert",
                                                                        existingCode: `
                                        using System;
                                        using System.Collections.Generic;
                                        class Program {
                                            static void Main(string[] args) {
                                                HashSet<int> numbers = new HashSet<int>();
                                                numbers.Add(1);
                                                numbers.Add(2);
                                                numbers.Add(3);
                                                numbers.Add(2); // Duplicate value, HashSet does not allow duplicates
                                                foreach (int number in numbers) {
                                                    Console.WriteLine(number);
                                                }
                                            }
                                        }
                                      `,
                                      testCases: [
                                        { condition: "The output should print '1', '2', '3' without duplicates." }
                                      ],
                                      solutionExplanation: "The HashSet automatically handles duplicates, so '2' will only appear once in the output, even though it was added twice.",
                                      language: "C#",
                                    },
                                  
                                    {
                                      title: "Code Optimization: Remove Duplicates from a List",
                                      description: "Write a C# program to remove duplicates from a list of integers using a HashSet.",
                                      difficulty: "Expert",
                                      difficultyScore: 1,
                                      level: "Expert",
                                      existingCode: `
                                        using System;
                                        using System.Collections.Generic;
                                        class Program {
                                            static void Main(string[] args) {
                                                List<int> numbers = new List<int> { 1, 2, 2, 3, 3, 4, 5 };
                                                HashSet<int> uniqueNumbers = new HashSet<int>(numbers);
                                                foreach (int number in uniqueNumbers) {
                                                    Console.WriteLine(number);
                                                }
                                            }
                                        }
                                      `,
                                      testCases: [
                                        { condition: "The output should print '1', '2', '3', '4', '5' without duplicates." }
                                      ],
                                      solutionExplanation: "A HashSet automatically removes duplicates. By converting the list to a HashSet, the duplicates are removed.",
                                      language: "C#",
                                    },
                                  
                                    {
                                      title: "Problem Solving: Reverse a LinkedList",
                                      description: "Write a C# program to reverse a singly linked list.",
                                      difficulty: "Expert",
                                      difficultyScore: 1,
                                      level: "Expert",
                                      
                                      existingCode: `
                                        using System;
                                        class LinkedListNode {
                                            public int Value;
                                            public LinkedListNode Next;
                                  
                                            public LinkedListNode(int value) {
                                                Value = value;
                                                Next = null;
                                            }
                                        }
                                  
                                        class LinkedList {
                                            public LinkedListNode Head;
                                  
                                            public void Reverse() {
                                                LinkedListNode prev = null;
                                                LinkedListNode current = Head;
                                                LinkedListNode next = null;
                                  
                                                while (current != null) {
                                                }
                                                Head = prev;
                                            }
                                  
                                            static void Main(string[] args) {
                                  
                                                LinkedListNode current = list.Head;
                                                while (current != null) {
                                                    Console.WriteLine(current.Value); // Output: 3, 2, 1
                                                    current = current.Next;
                                                }
                                            }
                                        }
                                      `,
                                      testCases: [
                                        { condition: "The output should print '3', '2', '1'." }
                                      ],
                                      solutionExplanation: "This solution reverses a singly linked list by iterating through the list and adjusting the pointers between nodes.",
                                      language: "C#",
                                    },
                                  
                                
                                    // Expert Level Tasks
                                    {
                                      title: "Problem Solving: Implement a Stack with Dynamic Size",
                                      description: "Write a C# program to implement a stack with dynamic size using a linked list.",
                                      difficulty: "Expert",
                                      difficultyScore: 1,
                                      level: "Expert",
                                      existingCode: `
                                        using System;
                                        class StackNode {
                                            public int Value;
                                            public StackNode Next;
                                  
                                            public StackNode(int value) {
                                                Value = value;
                                                Next = null;
                                            }
                                        }
                                  
                                        class DynamicStack {
                                            private StackNode top;
                                  
                                            public DynamicStack() {
                                                top = null;
                                            }
                                  
                                            public void Push(int item) {
                                                StackNode newNode = new StackNode(item);
                                                newNode.Next = top;
                                                top = newNode;
                                            }
                                  
                                            public int Pop() {
                                                if (top == null) {
                                                    Console.WriteLine("Stack is empty.");
                                                    return -1;
                                                }
                                                
                                            }
                                  
                                            static void Main(string[] args) {
                                            }
                                        }
                                      `,
                                      testCases: [
                                        { condition: "The output should print '2' after popping the stack." }
                                      ],
                                      solutionExplanation: "This solution uses a linked list to implement a dynamic stack that grows or shrinks based on operations.",
                                      language: "C#",
                                    },
                                  
                                    {
                                      title: "Error Correction: HashSet with Custom Object",
                                      description: "Fix the error in the following code that tries to add custom objects to a HashSet.",
                                      difficulty: "Expert",
                                      difficultyScore: 1,
                                      level: "Expert",
                                      existingCode: `
                                        using System;
                                        using System.Collections.Generic;
                                  
                                        class Person {
                                            public string Name { get; set; }
                                            public int Age { get; set; }
                                        }
                                  
                                        class Program {
                                            static void Main(string[] args) {
                                                HashSet<Person> people = new HashSet<Person>();
                                                people.Add(new Person { Name = "Alice", Age = 30 });
                                                people.Add(new Person { Name = "Bob", Age = 25 });
                                                people.Add(new Person { Name = "Alice", Age = 30 }); // Problem with duplicates
                                                foreach (var person in people) {
                                                    Console.WriteLine($"{person.Name}, {person.Age}");
                                                }
                                            }
                                        }
                                      `,
                                      testCases: [
                                        { condition: "The output should correctly handle duplicates based on the custom `Equals` and `GetHashCode` methods." }
                                      ],
                                      solutionExplanation: "In order to handle duplicates for custom objects, the `Equals` and `GetHashCode` methods need to be overridden in the `Person` class.",
                                      language: "C#",
                                    },
                                  
                                    {
                                      title: "Code Optimization: Find the Union of Two HashSets",
                                      description: "Write a C# program to find the union of two HashSets and display the result.",
                                      difficulty: "Expert",
                                      difficultyScore: 1,
                                      level: "Expert",
                                      existingCode: `
                                        using System;
                                        using System.Collections.Generic;
                                        class Program {
                                            static void Main(string[] args) {
                                                HashSet<int> set1 = new HashSet<int> { 1, 2, 3, 4 };
                                                HashSet<int> set2 = new HashSet<int> { 3, 4, 5, 6 };
                                  
                                                set1.UnionWith(set2);
                                  
                                                foreach (int num in set1) {
                                                    Console.WriteLine(num);
                                                }
                                            }
                                        }
                                      `,
                                      testCases: [
                                        { condition: "The output should print '1', '2', '3', '4', '5', '6'." }
                                      ],
                                      solutionExplanation: "The `UnionWith` method combines the elements from both sets, automatically handling duplicates.",
                                      language: "C#",
                                    },
                                  
                                    {
                                      title: "Problem Solving: LinkedList with Find Method",
                                      description: "Write a C# program to find an element in a singly linked list.",
                                      difficulty: "Expert",
                                      difficultyScore: 1,
                                      level: "Expert",
                                      
                                      existingCode: `
                                        using System;
                                        class LinkedListNode {
                                            public int Value;
                                            public LinkedListNode Next;
                                  
                                            public LinkedListNode(int value) {
                                                Value = value;
                                                Next = null;
                                            }
                                        }
                                  
                                        class LinkedList {
                                            public LinkedListNode Head;
                                  
                                            public LinkedListNode Find(int value) {
                                                
                                            }
                                        }
                                      `,
                                      testCases: [
                                        { condition: "The output should be 'Found: 2' if the element 2 is found." }
                                      ],
                                      solutionExplanation: "The `Find` method searches through the linked list and returns the node if the value is found, otherwise it returns `null`.",
                                      language: "C#",
                                    },
                                  
                                      // Expert Level Tasks
                                      {
                                        title: "Problem Solving: Using try-catch-finally for Division",
                                        description: "Write a C# program to perform division and handle division by zero using try-catch-finally.",
                                        difficulty: "Expert",
                                        difficultyScore: 1,
                                        level: "Expert",
                                        existingCode: `
                                          using System;
                                    
                                          class Division {
                                              public static void Main(string[] args) {
                                              }
                                          }
                                        `,
                                        testCases: [
                                          { condition: "The output should show 'Error: Cannot divide by zero.' followed by 'This will always be executed.'" }
                                        ],
                                        solutionExplanation: "In this solution, the `try` block contains the code that may throw an exception. The `catch` block handles the `DivideByZeroException`, and the `finally` block is executed regardless of whether an exception occurred.",
                                        language: "C#",
                                      },
                                    
                                      {
                                        title: "Error Correction: Missing finally Block",
                                        description: "Fix the error in the following C# code where a `finally` block is missing after the `try-catch`.",
                                        difficulty: "Expert",
                                        difficultyScore: 1,
                                        level: "Expert",
                                        
                                        existingCode: `
                                          using System;
                                    
                                          class Program {
                                              public static void Main(string[] args) {
                                                  try {
                                                      int[] numbers = { 1, 2, 3 };
                                                      Console.WriteLine(numbers[5]); // ArrayIndexOutOfBoundsException
                                                  } catch (IndexOutOfRangeException ex) {
                                                      Console.WriteLine("Error: Index out of range.");
                                                  }
                                                  // Missing finally block here
                                              }
                                          }
                                        `,
                                        testCases: [
                                          { condition: "The program should handle the exception and execute cleanup actions in the finally block." }
                                        ],
                                        solutionExplanation: "The `finally` block is important for ensuring that necessary cleanup (such as closing files or releasing resources) happens, even if an exception is thrown.",
                                        language: "C#",
                                      },
                                    
                                      {
                                        title: "Code Optimization: Handle Multiple Exceptions with try-catch-finally",
                                        description: "Optimize the following C# program to handle both `FileNotFoundException` and `UnauthorizedAccessException` using multiple `catch` blocks.",
                                        difficulty: "Expert",
                                        difficultyScore: 1,
                                        level: "Expert",
                                        existingCode: `
                                          using System;
                                          using System.IO;
                                    
                                          class FileReader {
                                              public static void Main(string[] args) {
                                                 
                                              }
                                          }
                                        `,
                                        testCases: [
                                          { condition: "The program should handle both `FileNotFoundException` and `UnauthorizedAccessException` separately." }
                                        ],
                                        solutionExplanation: "Using multiple `catch` blocks, the program can handle specific exceptions differently, providing more targeted error messages and actions.",
                                        language: "C#",
                                      },
                                    
                                      {
                                        title: "Problem Solving: Nested try-catch-finally Blocks",
                                        description: "Write a C# program to demonstrate nested `try-catch-finally` blocks where inner try-catch blocks handle different exceptions.",
                                        difficulty: "Expert",
                                        difficultyScore: 1,
                                        level: "Expert",
                                        existingCode: `
                                          using System;
                                    
                                          class NestedTryCatch {
                                              public static void Main(string[] args) {
                                              }
                                          }
                                        `,
                                        testCases: [
                                          { condition: "The output should show both the inner and outer catch messages, followed by the outer finally block." }
                                        ],
                                        solutionExplanation: "The nested `try-catch` blocks demonstrate that exceptions can be handled both locally and globally. The outer block ensures that even if an error occurs in the inner block, the outer block handles any remaining cleanup or actions.",
                                        language: "C#",
                                      },
                                    
                                        // Expert Level Tasks
                                        {
                                          title: "Error Handling with Multiple Exceptions",
                                          description: "Write a C# program that handles multiple exceptions using `try-catch-finally` blocks for different error types.",
                                          difficulty: "Expert",
                                          difficultyScore: 1,
                                          level: "Expert",
                                          
                                          existingCode: `
                                            using System;
                                            using System.IO;
                                      
                                            class MultiExceptionHandling {
                                                public static void Main(string[] args) {
                                                }
                                            }
                                          `,
                                          testCases: [
                                            { condition: "The program should handle both file not found and access denied exceptions with respective messages." }
                                          ],
                                          solutionExplanation: "In this solution, specific exceptions are handled using multiple `catch` blocks. Each block manages a different error scenario, while the `finally` block ensures cleanup or final statements.",
                                          language: "C#",
                                        },
                                      
                                        {
                                          title: "Exception Handling in File Operations",
                                          description: "Write a C# program that reads from a file and uses `try-catch-finally` to handle file reading errors.",
                                          difficulty: "Expert",
                                          difficultyScore: 1,
                                          level: "Expert",
                                                                                existingCode: `
                                            using System;
                                            using System.IO;
                                      
                                            class FileReader {
                                                public static void Main(string[] args) {
                                                    
                                                }
                                            }
                                          `,
                                          testCases: [
                                            { condition: "The program should handle file not found errors and display appropriate messages." }
                                          ],
                                          solutionExplanation: "This solution demonstrates how to handle file-related exceptions using `try-catch-finally`. The `finally` block ensures that the program notifies the user about the completion of the file operation, regardless of success or failure.",
                                          language: "C#",
                                        },
                                      
                                        {
                                          title: "Handling Divide by Zero Exception",
                                          description: "Write a C# program that handles the divide-by-zero exception using `try-catch-finally`.",
                                          difficulty: "Expert",
                                          difficultyScore: 1,
                                          level: "Expert",
                                          existingCode: `
                                            using System;
                                      
                                            class Division {
                                                public static void Main(string[] args) {
                                                }
                                            }
                                          `,
                                          testCases: [
                                            { condition: "The program should handle division by zero and display the correct error message." }
                                          ],
                                          solutionExplanation: "In this example, the `try-catch` block handles a `DivideByZeroException` that occurs when trying to divide by zero. The `finally` block is executed to display the final message.",
                                          language: "C#",
                                        },
                                      
                                        {
                                          title: "Handling Multiple Errors in a Single try Block",
                                          description: "Write a C# program where multiple exceptions are handled using one `try-catch-finally` block, including `IndexOutOfRangeException` and `NullReferenceException`.",
                                          difficulty: "Expert",
                                          difficultyScore: 1,
                                          level: "Expert",
                                          existingCode: `
                                            using System;
                                      
                                            class MultipleErrors {
                                                public static void Main(string[] args) {
                                                }
                                            }
                                          `,
                                          testCases: [
                                            { condition: "The program should handle both `IndexOutOfRangeException` and `NullReferenceException` and display the respective messages." }
                                          ],
                                          solutionExplanation: "This example demonstrates handling multiple errors in the same `try` block. The `catch` blocks are specific to each exception type, and the `finally` block ensures completion.",
                                          language: "C#",
                                        },
                                      
                                          // Expert Level Tasks
                                          {
                                            title: "Handle ArgumentNullException",
                                            description: "Write a C# program that handles the `ArgumentNullException` when a method receives a null argument.",
                                            difficulty: "Expert",
                                            difficultyScore: 1,
                                            level: "Expert",
                                            
                                            existingCode: `
                                              using System;
                                        
                                              class ArgumentNullExceptionExample {
                                                  public static void Main(string[] args) {
                                                      
                                              }}
                                            `,
                                            testCases: [
                                              { condition: "The program should throw an `ArgumentNullException` when a null argument is passed to the method." }
                                            ],
                                            solutionExplanation: "In this example, an `ArgumentNullException` is thrown if a null argument is passed to the method. The `catch` block handles it, and the `finally` block ensures final messages are displayed.",
                                            language: "C#",
                                          },
                                        
                                          {
                                            title: "Handle File Read Errors Gracefully",
                                            description: "Write a C# program to read a file and handle potential errors such as `FileNotFoundException` or `UnauthorizedAccessException`.",
                                            difficulty: "Expert",
                                            difficultyScore: 1,
                                            level: "Expert",
                                            
                                            existingCode: `
                                              using System;
                                              using System.IO;
                                        
                                              class FileReadExample {
                                                  public static void Main(string[] args) {
                                                   
                                                  }
                                              }
                                            `,
                                            testCases: [
                                              { condition: "The program should handle `FileNotFoundException` and `UnauthorizedAccessException` and display appropriate error messages." }
                                            ],
                                            solutionExplanation: "The program reads from a file, and if the file is missing or access is denied, the respective exceptions are caught and handled in the `catch` blocks. The `finally` block ensures that the program prints a completion message.",
                                            language: "C#",
                                          },
                                        
                                          {
                                            title: "Handle Divide by Zero with Custom Exception",
                                            description: "Write a C# program to handle a divide by zero error and throw a custom exception.",
                                            difficulty: "Expert",
                                            difficultyScore: 1,
                                            level: "Expert",
                                            existingCode: `
                                              using System;
                                        
                                              class DivideByZeroExample {
                                                  public static void Main(string[] args) {
    }
                                                  }
                                              }
                                        
                                              class DivideByZeroCustomException : Exception {
                                                
                                              }
                                            `,
                                            testCases: [
                                              { condition: "The program should throw a custom `DivideByZeroCustomException` when division by zero is attempted." }
                                            ],
                                            solutionExplanation: "This example shows how to throw a custom exception when an invalid operation occurs. The custom exception is caught and handled in the `catch` block, while the `finally` block ensures the program prints a final message.",
                                            language: "C#",
                                          },
                                        
                                          {
                                            title: "Handle Multiple Exceptions with Finally Block",
                                            description: "Write a C# program that handles multiple exceptions such as `NullReferenceException`, `IndexOutOfRangeException`, and ensures resources are cleaned up using the `finally` block.",
                                            difficulty: "Expert",
                                            difficultyScore: 1,
                                            level: "Expert",
                                                                                    existingCode: `
                                              using System;
                                        
                                              class MultipleExceptionHandling {
                                                  public static void Main(string[] args) {
                                                  }
                                              }
                                            `,
                                            testCases: [
                                              { condition: "The program should handle both `NullReferenceException` and `IndexOutOfRangeException` and display respective messages." }
                                            ],
                                            solutionExplanation: "This task demonstrates handling multiple errors in a `try` block, with specific `catch` blocks for each error type. The `finally` block ensures that cleanup happens regardless of whether an exception occurred.",
                                            language: "C#",
                                          },
                                        
                                          {
                                            title: "Exception Handling in Database Operations",
                                            description: "Write a C# program that simulates a database operation, handling `SqlException` and `InvalidOperationException` using `try-catch-finally`.",
                                            difficulty: "Expert",
                                            difficultyScore: 1,
                                            level: "Expert",
                                            existingCode: `
                                              using System;
                                              using System.Data.SqlClient;
                                        
                                              class DatabaseOperationExample {
                                                  public static void Main(string[] args) {
                                                  }
                                              }
                                            `,
                                            testCases: [
                                              { condition: "The program should handle both `SqlException` and `InvalidOperationException` and display respective messages." }
                                            ],
                                            solutionExplanation: "This example shows how to handle database-related exceptions with `try-catch-finally`. It ensures that if a connection error or invalid operation occurs, they are caught and handled, while the `finally` block provides a completion message.",
                                            language: "C#",
                                          },
                                            // Expert Level Tasks
                                            {
                                              title: "Throw and Handle Custom Exception for Invalid Age",
                                              description: "Write a C# program that throws a custom exception when an invalid age is entered (negative or zero).",
                                              difficulty: "Expert",
                                              difficultyScore: 1,
                                              level: "Expert",
                                              existingCode: `
                                                using System;
                                          
                                                class InvalidAgeException : Exception {
                                                }
                                          
                                                class Program {
                                                    public static void Main(string[] args) {
                                                        
                                                    }
                                                }
                                              `,
                                              testCases: [
                                                { condition: "The program should throw and handle `InvalidAgeException` when the age is less than or equal to zero." }
                                              ],
                                              solutionExplanation: "This task demonstrates how to create and throw a custom exception when an invalid age is entered. The `InvalidAgeException` is caught and handled in the `catch` block, while the `finally` block ensures a final message is displayed.",
                                              language: "C#",
                                            },
                                          
                                            {
                                              title: "Throw and Handle Custom Exception for Invalid Deposit",
                                              description: "Write a C# program that throws a custom exception if an invalid deposit amount (negative or zero) is entered.",
                                              difficulty: "Expert",
                                              difficultyScore: 1,
                                              level: "Expert",
                                              questionNumber: 189,
                                              existingCode: `
                                                using System;
                                          
                                                class InvalidDepositException : Exception {
                                             
                                                }
                                          
                                                class Program {
                                                    public static void Main(string[] args) {
                                                        
                                                    }
                                                }
                                              `,
                                              testCases: [
                                                { condition: "The program should throw and handle `InvalidDepositException` when the deposit amount is less than or equal to zero." }
                                              ],
                                              solutionExplanation: "This task demonstrates the creation and throwing of a custom exception for invalid deposit amounts. The exception is caught in the `catch` block and a message is printed. The `finally` block ensures that final messages are displayed.",
                                              language: "C#",
                                            },
                                          
                                            {
                                              title: "Throw and Handle Custom Exception for Invalid Email Format",
                                              description: "Write a C# program that throws a custom exception when an invalid email format is provided.",
                                              difficulty: "Expert",
                                              difficultyScore: 1,
                                              level: "Expert",
                                              
                                              existingCode: `
                                                using System;
                                                using System.Text.RegularExpressions;
                                          
                                                class InvalidEmailFormatException : Exception {
                                                }
                                          
                                                class Program {
                                                    public static void Main(string[] args) {
                                                        
                                                    }
                                                }
                                              `,
                                              testCases: [
                                                { condition: "The program should throw and handle `InvalidEmailFormatException` when the email format is invalid." }
                                              ],
                                              solutionExplanation: "This task demonstrates how to throw a custom exception when the email format is invalid. A regular expression is used to validate the email format, and the exception is thrown and caught accordingly.",
                                              language: "C#",
                                            },
                                          
                                            {
                                              title: "Throw and Handle Custom Exception for Unauthorized Access",
                                              description: "Write a C# program that throws a custom exception for unauthorized access attempts.",
                                              difficulty: "Expert",
                                              difficultyScore: 1,
                                              level: "Expert",
                                              
                                              existingCode: `
                                                using System;
                                          
                                                class UnauthorizedAccessException : Exception {
                                                }
                                          
                                                class Program {
                                                    public static void Main(string[] args) {
                                                        
                                                    }
                                                }
                                              `,
                                              testCases: [
                                                { condition: "The program should throw and handle `UnauthorizedAccessException` when the user does not have access." }
                                              ],
                                              solutionExplanation: "In this task, the program checks for user access and throws a custom `UnauthorizedAccessException` if access is denied. The exception is caught and handled in the `catch` block, and the `finally` block ensures a final message is printed.",
                                              language: "C#",
                                            },
                                          
                                            {
                                              title: "Throw and Handle Custom Exception for Invalid User Input",
                                              description: "Write a C# program that throws a custom exception when an invalid user input is detected, such as entering non-numeric data where a number is expected.",
                                              difficulty: "Expert",
                                              difficultyScore: 1,
                                              level: "Expert",
                                              
                                              existingCode: `
                                                using System;
                                          
                                                class InvalidInputException : Exception {
                                                    public InvalidInputException(string message) : base(message) {}
                                                }
                                          
                                                class Program {
                                                    public static void Main(string[] args) {
                                                    }
                                                }
                                              `,
                                              testCases: [
                                                { condition: "The program should throw and handle `InvalidInputException` when non-numeric input is provided where a number is expected." }
                                              ],
                                              solutionExplanation: "This task involves checking if the user input is a valid number. If not, a custom exception is thrown and caught. The program provides feedback about the invalid input and uses the `finally` block to ensure the completion message is printed.",
                                              language: "C#",
                                            },
                                              // Expert Level Tasks
                                              {
                                                title: "Output Odd Numbers from 1 to 100",
                                                description: "Write a C# program that outputs all odd numbers from 1 to 100.",
                                                difficulty: "Expert",
                                                difficultyScore: 1,
                                                level: "Expert",
                                                
                                                existingCode: `
                                                  using System;
                                            
                                                  class Program {
                                                      static void Main(string[] args) {
                                                          
    }}
                                                `,
                                                testCases: [
                                                  { condition: "The program should output all odd numbers between 1 and 100." }
                                                ],
                                                solutionExplanation: "The program uses a for loop to iterate through numbers from 1 to 100, and an if statement checks if the number is odd by evaluating if the remainder of division by 2 is not zero.",
                                                language: "C#",
                                              },
                                            
                                              {
                                                title: "Output the Fibonacci Sequence",
                                                description: "Write a C# program that outputs the Fibonacci sequence up to the 10th term.",
                                                difficulty: "Expert",
                                                difficultyScore: 1,
                                                level: "Expert",
                                                
                                                existingCode: `
                                                  using System;
                                            
                                                  class Program {
                                                      static void Main(string[] args) {
                                                  }
                                                `,
                                                testCases: [
                                                  { condition: "The program should output the first 10 terms of the Fibonacci sequence." }
                                                ],
                                                solutionExplanation: "The program uses two variables to store the last two terms of the Fibonacci sequence. The sequence is calculated iteratively, and each term is printed as it is generated.",
                                                language: "C#",
                                              },
                                            
                                              {
                                                title: "Print a Multiplication Table",
                                                description: "Write a C# program that prints the multiplication table for the number 5, from 1 to 10.",
                                                difficulty: "Expert",
                                                difficultyScore: 1,
                                                level: "Expert",
                                                
                                                existingCode: `
                                                  using System;
                                            
                                                  class Program {
                                                      static void Main(string[] args) {
                                                          
                                                  }
                                                `,
                                                testCases: [
                                                  { condition: "The program should print the multiplication table for 5, from 1 to 10." }
                                                ],
                                                solutionExplanation: "The program uses a for loop to multiply the number 5 by the integers from 1 to 10, and prints the result in the multiplication table format.",
                                                language: "C#",
                                              },
                                            
                                              {
                                                title: "Reverse a String",
                                                description: "Write a C# program that reverses a string and prints the reversed string.",
                                                difficulty: "Expert",
                                                difficultyScore: 1,
                                                level: "Expert",
                                               
                                                existingCode: `
                                                  using System;
                                            
                                                  class Program {
                                                      static void Main(string[] args) {
                                                          
                                                      }
                                                  }
                                                `,
                                                testCases: [
                                                  { condition: "The program should output the reversed string 'Hello, World!' as '!dlroW ,olleH'." }
                                                ],
                                                solutionExplanation: "The program converts the string into a character array, reverses the array, and then converts it back into a string to print the reversed result.",
                                                language: "C#",
                                              },
                                            
                                              {
                                                title: "Count Vowels and Consonants",
                                                description: "Write a C# program that counts the number of vowels and consonants in a given string.",
                                                difficulty: "Expert",
                                                difficultyScore: 1,
                                                level: "Expert",
                                                existingCode: `
                                                  using System;
                                            
                                                  class Program {
                                                      static void Main(string[] args) {
                                                  }
                                                `,
                                                testCases: [
                                                  { condition: "The program should output the correct number of vowels and consonants in the string 'Hello, World!'." }
                                                ],
                                                solutionExplanation: "The program iterates over the string, checking each character to see if it's a vowel or consonant. The `char.IsLetter()` method is used to ensure that only alphabetic characters are counted as consonants.",
                                                language: "C#",
                                              },
                                               
                                              
                                                {
                                                  title: "Prime Number Check",
                                                  description: "Write a C# program that checks if a given number is prime or not and outputs the result.",
                                                  difficulty: "Expert",
                                                  difficultyScore: 1,
                                                  level: "Expert",
                                                  existingCode: `
                                                    using System;
                                              
                                                    class Program {
                                                        static void Main(string[] args) {
                                                    }
    }
    
                                                  `,
                                                  testCases: [
                                                    { condition: "The program should output whether the number is prime or not. For example, '29 is a prime number.'" }
                                                  ],
                                                  solutionExplanation: "The program checks for divisibility from 2 up to the square root of the number. If a divisor is found, the number is not prime.",
                                                  language: "C#",
                                                },
                                              
                                                {
                                                  title: "Count Words in a Sentence",
                                                  description: "Write a C# program that counts the number of words in a given sentence.",
                                                  difficulty: "Expert",
                                                  difficultyScore: 1,
                                                  level: "Expert",
                                                  
                                                  existingCode: `
                                                    using System;
                                              
                                                    class Program {
                                                        static void Main(string[] args) {
                                                            string sentence = "Hello, this is a C# program!";
                                                            int wordCount = sentence.Split(' ').Length;
                                                            Console.WriteLine($"Word count: {wordCount}");
                                                        }
                                                    }
                                                  `,
                                                  testCases: [
                                                    { condition: "The program should output the word count for the given sentence." }
                                                  ],
                                                  solutionExplanation: "The program splits the sentence into words using the space character as a delimiter, then counts the number of resulting words.",
                                                  language: "C#",
                                                },
                                              
                                                {
                                                  title: "Find the Largest Number",
                                                  description: "Write a C# program that finds and outputs the largest number in a given array of integers.",
                                                  difficulty: "Expert",
                                                  difficultyScore: 1,
                                                  level: "Expert",
                                                  
                                                  existingCode: `
                                                    using System;
                                              
                                                    class Program {
                                                        static void Main(string[] args) {
                                                            
                                                        }
                                                    }
                                                  ` ,
                                                  testCases: [
                                                    { condition: "The program should output the largest number from the given array." }
                                                  ],
                                                  solutionExplanation: "The program initializes the largest number as the first element of the array and iterates through the array to find a larger number.",
                                                  language: "C#",
                                                },
                                              
                                                {
                                                  title: "Reverse the Words in a Sentence",
                                                  description: "Write a C# program that reverses the words in a given sentence while maintaining the original word order.",
                                                  difficulty: "Expert",
                                                  difficultyScore: 1,
                                                  level: "Expert",
                                                  existingCode: `
                                                    using System;
                                              
                                                    class Program {
                                                        static void Main(string[] args) {
                                                        }
                                                    }
                                                  `,
                                                  testCases: [
                                                    { condition: "The program should output the sentence with words in reverse order. For example, 'C# from World Hello'" }
                                                  ],
                                                  solutionExplanation: "The program splits the sentence into words, reverses the array of words, and then joins them back together into a sentence.",
                                                  language: "C#",
                                                
                                              
                                              
                                          
                                            
        
    
  },


  {
    title: "Error Correction: Incorrect Data Type",
    description: "Correct the error in the code snippet below.",
    difficulty: "Basic",
    difficultyScore: 1,
    level: "Basic",
    existingCode: `
      using System;
      class Program {
          static void Main(string[] args) {
              int myVariable = "Hello";
          }
      }
    `,
    testCases: [
      { condition: "The code should compile without errors." }
    ],
    solutionExplanation: "The variable 'myVariable' is declared as an 'int', but it is assigned a string value. It should be declared as 'string' instead of 'int'.",
    language: "C#",
  },

  {
    title: "Code Optimization: Redundant Variables",
    description: "Optimize the code to eliminate redundant variables and improve readability.",
    difficulty: "Basic",
    difficultyScore: 1,
    level: "Basic",
 
    existingCode: `
      using System;
      class Program {
          static void Main(string[] args) {
              int a = 5;
              int b = 5;
              int sum = a + b;
              int result = sum;
          }
      }
    `,
    testCases: [
      { condition: "The code should be optimized to avoid unnecessary variables." }
    ],
    solutionExplanation: "The 'sum' variable is redundant, and we can directly assign the result of 'a + b' to 'result'.",
    language: "C#",
  },

  {
    title: "Problem Solving: Check If Even or Odd",
    description: "Write a C# program that checks if a number is even or odd.",
    difficulty: "Basic",
    difficultyScore: 1,
    level: "Basic",
   
    existingCode: `
      using System;
      class Program {
          static void Main(string[] args) {
              int number = 6;
              // Check if the number is even or odd
          }
      }
    `,
    testCases: [
      { condition: "The output should indicate if the number is even or odd." }
    ],
    solutionExplanation: "Use the modulus operator (%) to check if a number is divisible by 2.",
    language: "C#",
  },

  // Intermediate Level Tasks

  {
    title: "Error Correction: Invalid Type Assignment",
    description: "Correct the following code so that it works as expected.",
    difficulty: "Intermediate",
    difficultyScore: 1,
    level: "Intermediate",
    existingCode: `
      using System;
      class Program {
          static void Main(string[] args) {
              bool isActive = 1;
              Console.WriteLine(isActive);
          }
      }
    `,
    testCases: [
      { condition: "The code should output 'True' or 'False' based on the boolean value." }
    ],
    solutionExplanation: "In C#, '1' cannot be directly assigned to a boolean. Use 'true' or 'false' instead of '1'.",
    language: "C#",
  },

  {
    title: "Code Optimization: Avoid Repetitive Type Declaration",
    description: "Optimize the code to avoid repetitive type declarations.",
    difficulty: "Intermediate",
    difficultyScore: 1,
    level: "Intermediate",
    existingCode: `
      using System;
      class Program {
          static void Main(string[] args) {
              int a = 10;
              int b = 20;
              int sum = a + b;
              Console.WriteLine(sum);
          }
      }
    `,
    testCases: [
      { condition: "The code should be optimized to eliminate unnecessary declarations." }
    ],
    solutionExplanation: "The variables 'a' and 'b' can be declared and initialized in a single line, and 'sum' can be directly calculated in the output.",
    language: "C#",
  },

  {
    title: "Problem Solving: Find the Maximum of Three Numbers",
    description: "Write a C# program that finds the maximum of three numbers.",
    difficulty: "Intermediate",
    difficultyScore: 1,
    level: "Intermediate",
    existingCode: `
      using System;
      class Program {
          static void Main(string[] args) {
              int num1 = 10, num2 = 20, num3 = 30;
              // Find the maximum number
          }
      }
    `,
    testCases: [
      { condition: "The output should be the maximum number among the three." }
    ],
    solutionExplanation: "Use conditional statements to compare the three numbers and print the largest one.",
    language: "C#",
  },

  
  {
    title: "Error Correction: Invalid Variable Assignment",
    description: "Correct the following code to avoid a compile-time error.",
    difficulty: "Expert",
    difficultyScore: 1,
    level: "Expert",
    existingCode: `
      using System;
      class Program {
          static void Main(string[] args) {
              string number = 10;
              Console.WriteLine(number);
          }
      }
    `,
    testCases: [
      { condition: "The code should compile and print '10'." }
    ],
    solutionExplanation: "A string cannot be assigned an integer value directly. Use 'number' as an integer instead of string or convert the integer to a string.",
    language: "C#",
  },

  {
    title: "Code Optimization: Remove Redundant Type Conversion",
    description: "Optimize the code by removing unnecessary type conversions.",
    difficulty: "Expert",
    difficultyScore: 1,
    level: "Expert",
    existingCode: `
      using System;
      class Program {
          static void Main(string[] args) {
              string str = "123";
              int num = Convert.ToInt32(str);
              double result = (double)num;
              Console.WriteLine(result);
          }
      }
    `,
    testCases: [
      { condition: "The code should be optimized by removing unnecessary type casting." }
    ],
    solutionExplanation: "The code unnecessarily casts an integer to a double. You can directly assign the integer to a double variable.",
    language: "C#",
  },

  {
    title: "Problem Solving: Swap Two Numbers",
    description: "Write a C# program that swaps two numbers without using a temporary variable.",
    difficulty: "Expert",
    difficultyScore: 1,
    level: "Expert",
    existingCode: `
      using System;
      class Program {
          static void Main(string[] args) {
              int num1 = 10, num2 = 20;
              // Swap the values of num1 and num2
          }
      }
    `,
    testCases: [
      { condition: "The values of num1 and num2 should be swapped." }
    ],
    solutionExplanation: "Use arithmetic operations or XOR bitwise operations to swap the values without a temporary variable.",
    language: "C#",
  },
    // Basic Level Tasks
    {
      title: "Print Numbers Using For Loop",
      description: "Write a C# program to print numbers from 1 to 5 using a for loop.",
      difficulty: "Basic",
      difficultyScore: 1,
      level: "Basic",
      existingCode: `
        using System;
        class Program {
            static void Main(string[] args) {
                // Use a for loop to print numbers from 1 to 5
            }
        }
      `,
      testCases: [
        { condition: "The output should be numbers from 1 to 5, each on a new line." }
      ],
      solutionExplanation: "Use a 'for' loop to iterate from 1 to 5 and print each number using Console.WriteLine().",
      language: "C#",
    },
  
    {
      title: "Error Correction: Infinite Loop",
      description: "Correct the following code to avoid an infinite loop.",
      difficulty: "Basic",
      difficultyScore: 1,
      level: "Basic",
      existingCode: `
        using System;
        class Program {
            static void Main(string[] args) {
                int i = 0;
                while(i < 5) {
                    Console.WriteLine(i);
                }
            }
        }
      `,
      testCases: [
        { condition: "The loop should print numbers from 0 to 4 and stop." }
      ],
      solutionExplanation: "The variable 'i' is not incremented inside the loop. Add 'i++' to avoid an infinite loop.",
      language: "C#",
    },
  
    {
      title: "Code Optimization: Using For Loop Instead of While",
      description: "Optimize the following code to use a 'for' loop instead of a 'while' loop.",
      difficulty: "Basic",
      difficultyScore: 1,
      level: "Basic",
      existingCode: `
        using System;
        class Program {
            static void Main(string[] args) {
                int i = 0;
                while(i < 5) {
                    Console.WriteLine(i);
                    i++;
                }
            }
        }
      `,
      testCases: [
        { condition: "The output should be numbers from 0 to 4." }
      ],
      solutionExplanation: "Replace the 'while' loop with a 'for' loop, as it is more concise for this task.",
      language: "C#",
    },
  
    {
      title: "Problem Solving: Sum of Numbers Using For Loop",
      description: "Write a C# program that calculates the sum of numbers from 1 to 10 using a 'for' loop.",
      difficulty: "Basic",
      difficultyScore: 1,
      level: "Basic",
      
      existingCode: `
        using System;
        class Program {
            static void Main(string[] args) {
                int sum = 0;
                // Use a for loop to calculate the sum of numbers from 1 to 10
            }
        }
      `,
      testCases: [
        { condition: "The output should be the sum of numbers from 1 to 10, which is 55." }
      ],
      solutionExplanation: "Use a 'for' loop to add numbers from 1 to 10 to the 'sum' variable and print the result.",
      language: "C#",
    },
  
  
    {
      title: "Error Correction: Do-While Loop",
      description: "Correct the following code to ensure that the 'do-while' loop works as intended.",
      difficulty: "Intermediate",
      difficultyScore: 1,
      level: "Intermediate",
      existingCode: `
        using System;
        class Program {
            static void Main(string[] args) {
                int i = 0;
                do {
                    Console.WriteLine(i);
                } while(i < 5);
            }
        }
      `,
      testCases: [
        { condition: "The output should be numbers from 0 to 4." }
      ],
      solutionExplanation: "The variable 'i' needs to be incremented inside the loop to avoid an infinite loop.",
      language: "C#",
    },
  
    {
      title: "Code Optimization: Using Foreach Loop",
      description: "Optimize the code by using a 'foreach' loop to iterate over an array.",
      difficulty: "Intermediate",
      difficultyScore: 1,
      level: "Intermediate",
      existingCode: `
        using System;
        class Program {
            static void Main(string[] args) {
                int[] numbers = {1, 2, 3, 4, 5};
                for(int i = 0; i < numbers.Length; i++) {
                    Console.WriteLine(numbers[i]);
                }
            }
        }
      `,
      testCases: [
        { condition: "The output should be numbers 1 to 5 printed on separate lines." }
      ],
      solutionExplanation: "Use a 'foreach' loop to iterate through the elements of the array, making the code more concise and readable.",
      language: "C#",
    },
  
    {
      title: "Problem Solving: Factorial Using While Loop",
      description: "Write a C# program that calculates the factorial of a number using a 'while' loop.",
      difficulty: "Intermediate",
      difficultyScore: 1,
      level: "Intermediate",
      existingCode: `
        using System;
        class Program {
            static void Main(string[] args) {
                int number = 5;
                int result = 1;
                // Use a while loop to calculate the factorial of the number
            }
        }
      `,
      testCases: [
        { condition: "The output should be the factorial of 5, which is 120." }
      ],
      solutionExplanation: "Use a 'while' loop to multiply the number by decreasing values until it reaches 1.",
      language: "C#",
    },
  
    // Expert Level Tasks
   

  
    {
      title: "Error Correction: Incorrect Loop Logic",
      description: "Correct the code so that it prints the numbers from 1 to 10 in ascending order.",
      difficulty: "Expert",
      difficultyScore: 1,
      level: "Expert",
      existingCode: `
        using System;
        class Program {
            static void Main(string[] args) {
                for(int i = 10; i >= 1; i--) {
                    Console.WriteLine(i);
                }
            }
        }
      `,
      testCases: [
        { condition: "The output should be numbers from 1 to 10, in ascending order." }
      ],
      solutionExplanation: "The loop should start at 1 and run until 10. Modify the loop's condition and increment to fix it.",
      language: "C#",
    },
  
    {
      title: "Code Optimization: Combine Loops",
      description: "Optimize the following code by combining the loops for printing even and odd numbers.",
      difficulty: "Expert",
      difficultyScore: 1,
      level: "Expert",
      existingCode: `
        using System;
        class Program {
            static void Main(string[] args) {
                for(int i = 1; i <= 10; i++) {
                    if(i % 2 == 0) {
                        Console.WriteLine(i + " is even");
                    }
                }
                for(int i = 1; i <= 10; i++) {
                    if(i % 2 != 0) {
                        Console.WriteLine(i + " is odd");
                    }
                }
            }
        }
      `,
      testCases: [
        { condition: "The output should be numbers 1 to 10, categorized as even or odd." }
      ],
      solutionExplanation: "Use a single loop to check whether each number is even or odd and print the result accordingly.",
      language: "C#",
    },
  
    {
      title: "Problem Solving: Print Multiplication Table",
      description: "Write a C# program that prints the multiplication table of a given number using a 'for' loop.",
      difficulty: "Expert",
      difficultyScore: 1,
      level: "Expert",
      existingCode: `
        using System;
        class Program {
            static void Main(string[] args) {
                int number = 5;
                // Print the multiplication table of the given number
            }
        }
      `,
      testCases: [
        { condition: "The output should be the multiplication table of 5 (5, 10, 15, ...)." }
      ],
      solutionExplanation: "Use a 'for' loop to multiply the given number by values from 1 to 10 and print each result.",
      language: "C#",
    },
      // Basic Level Tasks
      {
        title: "Print Numbers Using For Loop",
        description: "Write a C# program to print numbers from 1 to 5 using a for loop.",
        difficulty: "Basic",
        difficultyScore: 1,
        level: "Basic",
        existingCode: `
          using System;
          class Program {
              static void Main(string[] args) {
                  // Use a for loop to print numbers from 1 to 5
              }
          }
        `,
        testCases: [
          { condition: "The output should be numbers from 1 to 5, each on a new line." }
        ],
        solutionExplanation: "Use a 'for' loop to iterate from 1 to 5 and print each number using Console.WriteLine().",
        language: "C#",
      },
    
      {
        title: "Error Correction: Infinite Loop",
        description: "Correct the following code to avoid an infinite loop.",
        difficulty: "Basic",
        difficultyScore: 1,
        level: "Basic",
        existingCode: `
          using System;
          class Program {
              static void Main(string[] args) {
                  int i = 0;
                  while(i < 5) {
                      Console.WriteLine(i);
                  }
              }
          }
        `,
        testCases: [
          { condition: "The loop should print numbers from 0 to 4 and stop." }
        ],
        solutionExplanation: "The variable 'i' is not incremented inside the loop. Add 'i++' to avoid an infinite loop.",
        language: "C#",
      },
    
      {
        title: "Code Optimization: Using For Loop Instead of While",
        description: "Optimize the following code to use a 'for' loop instead of a 'while' loop.",
        difficulty: "Basic",
        difficultyScore: 1,
        level: "Basic",
        existingCode: `
          using System;
          class Program {
              static void Main(string[] args) {
                  int i = 0;
                  while(i < 5) {
                      Console.WriteLine(i);
                      i++;
                  }
              }
          }
        `,
        testCases: [
          { condition: "The output should be numbers from 0 to 4." }
        ],
        solutionExplanation: "Replace the 'while' loop with a 'for' loop, as it is more concise for this task.",
        language: "C#",
      },
    
      {
        title: "Problem Solving: Sum of Numbers Using For Loop",
        description: "Write a C# program that calculates the sum of numbers from 1 to 10 using a 'for' loop.",
        difficulty: "Basic",
        difficultyScore: 1,
        level: "Basic",
        existingCode: `
          using System;
          class Program {
              static void Main(string[] args) {
                  int sum = 0;
                  // Use a for loop to calculate the sum of numbers from 1 to 10
              }
          }
        `,
        testCases: [
          { condition: "The output should be the sum of numbers from 1 to 10, which is 55." }
        ],
        solutionExplanation: "Use a 'for' loop to add numbers from 1 to 10 to the 'sum' variable and print the result.",
        language: "C#",
      },
    
      // Intermediate Level Tasks
     
    
      {
        title: "Error Correction: Do-While Loop",
        description: "Correct the following code to ensure that the 'do-while' loop works as intended.",
        difficulty: "Intermediate",
        difficultyScore: 1,
        level: "Intermediate",
                existingCode: `
          using System;
          class Program {
              static void Main(string[] args) {
                  int i = 0;
                  do {
                      Console.WriteLine(i);
                  } while(i < 5);
              }
          }
        `,
        testCases: [
          { condition: "The output should be numbers from 0 to 4." }
        ],
        solutionExplanation: "The variable 'i' needs to be incremented inside the loop to avoid an infinite loop.",
        language: "C#",
      },
    
      {
        title: "Code Optimization: Using Foreach Loop",
        description: "Optimize the code by using a 'foreach' loop to iterate over an array.",
        difficulty: "Intermediate",
        difficultyScore: 1,
        level: "Intermediate",
        existingCode: `
          using System;
          class Program {
              static void Main(string[] args) {
                  int[] numbers = {1, 2, 3, 4, 5};
                  for(int i = 0; i < numbers.Length; i++) {
                      Console.WriteLine(numbers[i]);
                  }
              }
          }
        `,
        testCases: [
          { condition: "The output should be numbers 1 to 5 printed on separate lines." }
        ],
        solutionExplanation: "Use a 'foreach' loop to iterate through the elements of the array, making the code more concise and readable.",
        language: "C#",
      },
    
      {
        title: "Problem Solving: Factorial Using While Loop",
        description: "Write a C# program that calculates the factorial of a number using a 'while' loop.",
        difficulty: "Intermediate",
        difficultyScore: 1,
        level: "Intermediate",
        existingCode: `
          using System;
          class Program {
              static void Main(string[] args) {
                  int number = 5;
                  int result = 1;
                  // Use a while loop to calculate the factorial of the number
              }
          }
        `,
        testCases: [
          { condition: "The output should be the factorial of 5, which is 120." }
        ],
        solutionExplanation: "Use a 'while' loop to multiply the number by decreasing values until it reaches 1.",
        language: "C#",
      },
    
    
      {
        title: "Error Correction: Incorrect Loop Logic",
        description: "Correct the code so that it prints the numbers from 1 to 10 in ascending order.",
        difficulty: "Expert",
        difficultyScore: 1,
        level: "Expert",
        questionNumber: 24,
        existingCode: `
          using System;
          class Program {
              static void Main(string[] args) {
                  for(int i = 10; i >= 1; i--) {
                      Console.WriteLine(i);
                  }
              }
          }
        `,
        testCases: [
          { condition: "The output should be numbers from 1 to 10, in ascending order." }
        ],
        solutionExplanation: "The loop should start at 1 and run until 10. Modify the loop's condition and increment to fix it.",
        language: "C#",
      },
    
      {
        title: "Code Optimization: Combine Loops",
        description: "Optimize the following code by combining the loops for printing even and odd numbers.",
        difficulty: "Expert",
        difficultyScore: 1,
        level: "Expert",
        existingCode: `
          using System;
          class Program {
              static void Main(string[] args) {
                  for(int i = 1; i <= 10; i++) {
                      if(i % 2 == 0) {
                          Console.WriteLine(i + " is even");
                      }
                  }
                  for(int i = 1; i <= 10; i++) {
                      if(i % 2 != 0) {
                          Console.WriteLine(i + " is odd");
                      }
                  }
              }
          }
        `,
        testCases: [
          { condition: "The output should be numbers 1 to 10, categorized as even or odd." }
        ],
        solutionExplanation: "Use a single loop to check whether each number is even or odd and print the result accordingly.",
        language: "C#",
      },
    
      {
        title: "Problem Solving: Print Multiplication Table",
        description: "Write a C# program that prints the multiplication table of a given number using a 'for' loop.",
        difficulty: "Expert",
        difficultyScore: 1,
        level: "Expert",
        existingCode: `
          using System;
          class Program {
              static void Main(string[] args) {
                  int number = 5;
                  // Print the multiplication table of the given number
              }
          }
        `,
        testCases: [
          { condition: "The output should be the multiplication table of 5 (5, 10, 15, ...)." }
        ],
        solutionExplanation: "Use a 'for' loop to multiply the given number by values from 1 to 10 and print each result.",
        language: "C#",
      },
        // Basic Level Tasks
        {
          title: "Declare a Constant",
          description: "Write a C# program that declares a constant with the value of 10 and prints it.",
          difficulty: "Basic",
          difficultyScore: 1,
          level: "Basic",
          
          existingCode: `
            using System;
            class Program {
                static void Main(string[] args) {
                    // Declare a constant with value 10
                }
            }
          `,
          testCases: [
            { condition: "The output should be the constant value '10'." }
          ],
          solutionExplanation: "Use the 'const' keyword to declare a constant. Constants are values that cannot be changed after they are initialized.",
          language: "C#",
        },
      
        {
          title: "Error Correction: Invalid Constant",
          description: "Correct the following code so that it properly declares a constant.",
          difficulty: "Basic",
          difficultyScore: 1,
          level: "Basic",
          existingCode: `
            using System;
            class Program {
                static void Main(string[] args) {
                    constant int pi = 3.14;
                    Console.WriteLine(pi);
                }
            }
          `,
          testCases: [
            { condition: "The output should be '3.14'." }
          ],
          solutionExplanation: "The keyword 'constant' is incorrect. It should be 'const' to declare a constant in C#.",
          language: "C#",
        },
      
        {
          title: "Code Optimization: Using Constants",
          description: "Optimize the following code to use a constant for the value of 100 instead of hardcoding it multiple times.",
          difficulty: "Basic",
          difficultyScore: 1,
          level: "Basic",
          existingCode: `
            using System;
            class Program {
                static void Main(string[] args) {
                    int value1 = 100;
                    int value2 = 100;
                    int sum = value1 + value2;
                    Console.WriteLine(sum);
                }
            }
          `,
          testCases: [
            { condition: "The output should be '200'." }
          ],
          solutionExplanation: "Declare a constant for the value 100 and replace its occurrences in the code with the constant name for easier maintenance.",
          language: "C#",
        },
      
        {
          title: "Problem Solving: Define and Use a Constant",
          description: "Write a C# program that defines a constant for the value of pi (3.14) and prints its value.",
          difficulty: "Basic",
          difficultyScore: 1,
          level: "Basic",
          existingCode: `
            using System;
            class Program {
                static void Main(string[] args) {
                    // Define a constant for pi
                }
            }
          `,
          testCases: [
            { condition: "The output should be '3.14'." }
          ],
          solutionExplanation: "Use the 'const' keyword to define the value of pi as a constant, which cannot be changed during the program execution.",
          language: "C#",
        },
      
        {
          title: "Error Correction: Enum Usage",
          description: "Correct the following code to use the enumeration values correctly.",
          difficulty: "Intermediate",
          difficultyScore: 1,
          level: "Intermediate",
          existingCode: `
            using System;
            class Program {
                enum Days { Sunday, Monday, Tuesday };
                
                static void Main(string[] args) {
                    int day = Days.Monday;
                    Console.WriteLine(day);
                }
            }
          `,
          testCases: [
            { condition: "The output should be '1' (the index of 'Monday' in the enum)." }
          ],
          solutionExplanation: "Enum values are by default assigned integer values starting from 0. You need to correctly use the enum values in the program.",
          language: "C#",
        },
      
        {
          title: "Code Optimization: Using Enum for Days",
          description: "Optimize the following code by using an enum for representing the days of the week instead of integers.",
          difficulty: "Intermediate",
          difficultyScore: 1,
          level: "Intermediate",
   
          existingCode: `
            using System;
            class Program {
                static void Main(string[] args) {
                    int day = 1;
                    if(day == 0) {
                        Console.WriteLine("Sunday");
                    } else if(day == 1) {
                        Console.WriteLine("Monday");
                    }
                    // Continue for other days
                }
            }
          `,
          testCases: [
            { condition: "The output should be 'Monday' if day is 1." }
          ],
          solutionExplanation: "Using an enum to represent days of the week makes the code more readable and maintainable. Replace the integer values with corresponding enum values.",
          language: "C#",
        },
      
        {
          title: "Problem Solving: Enum to String",
          description: "Write a C# program that defines an enum for the days of the week and prints the name of a day based on its enum value.",
          difficulty: "Intermediate",
          difficultyScore: 1,
          level: "Intermediate",
          existingCode: `
            using System;
            class Program {
                enum Days { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday };
                
                static void Main(string[] args) {
                    // Print the name of a day based on enum value
                }
            }
          `,
          testCases: [
            { condition: "The output should be 'Wednesday' when the enum value for Wednesday is passed." }
          ],
          solutionExplanation: "You can use the Enum.GetName method to print the name of a day based on the enum value.",
          language: "C#",
        },
      
      
        {
          title: "Error Correction: Enum Index Out of Range",
          description: "Correct the following code that causes an 'IndexOutOfRange' error when trying to access an enum value.",
          difficulty: "Expert",
          difficultyScore: 1,
          level: "Expert",
          existingCode: `
            using System;
            class Program {
                enum Days { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday };
                
                static void Main(string[] args) {
                    Days day = (Days)8;
                    Console.WriteLine(day);
                }
            }
          `,
          testCases: [
            { condition: "The output should be a valid enum value, not an 'IndexOutOfRange' error." }
          ],
          solutionExplanation: "Enum values start from 0. Trying to cast an integer beyond the available values of the enum will result in an error. Ensure that the integer value is within the range of the enum values.",
          language: "C#",
        },
      
        {
          title: "Code Optimization: Using Enum and Switch",
          description: "Optimize the following code by replacing the if-else statements with a switch statement using an enum.",
          difficulty: "Expert",
          difficultyScore: 1,
          level: "Expert",

          existingCode: `
            using System;
            class Program {
                enum Days { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday };
                
                static void Main(string[] args) {
                    Days day = Days.Monday;
                    if(day == Days.Sunday) {
                        Console.WriteLine("Sunday");
                    } else if(day == Days.Monday) {
                        Console.WriteLine("Monday");
                    }
                    // Continue for other days
                }
            }
          `,
          testCases: [
            { condition: "The output should print the correct day based on the enum value." }
          ],
          solutionExplanation: "Use a switch statement to simplify the logic and make it more maintainable when checking multiple enum values.",
          language: "C#",
        },
      
        {
          title: "Problem Solving: Enum and Methods",
          description: "Write a C# program that defines an enum for directions (North, East, South, West) and returns the opposite direction using a method.",
          difficulty: "Expert",
          difficultyScore: 1,
          level: "Expert",
          existingCode: `
            using System;
            class Program {
                enum Directions { North, East, South, West };
                
                static void Main(string[] args) {
                    // Return the opposite direction
                }
            }
          `,
          testCases: [
            { condition: "If the input is 'North', the output should be 'South'." }
          ],
          solutionExplanation: "Use a method to return the opposite direction by checking the input enum value and returning the corresponding opposite direction.",
          language: "C#",
        },
          // Basic Level Tasks
          {
            title: "Implicit Type Conversion",
            description: "Write a C# program that demonstrates implicit type conversion from int to double.",
            difficulty: "Basic",
            difficultyScore: 1,
            level: "Basic",
            existingCode: `
              using System;
              class Program {
                  static void Main(string[] args) {
                      // Declare an int variable and assign a value
                      int intValue = 10;
                      // Convert to double implicitly
                  }
              }
            `,
            testCases: [
              { condition: "The output should be a double value '10.0'." }
            ],
            solutionExplanation: "In C#, implicit conversion occurs when a smaller data type (like int) is automatically converted to a larger data type (like double).",
            language: "C#",
          },
        
        
          {
            title: "Error Correction: Implicit Conversion Error",
            description: "Correct the following code to properly perform implicit type conversion from int to double.",
            difficulty: "Basic",
            difficultyScore: 1,
            level: "Basic",
            existingCode: `
              using System;
              class Program {
                  static void Main(string[] args) {
                      double doubleValue = 10;
                      int intValue = doubleValue;  
                  }
              }
            `,
            testCases: [
              { condition: "The output should have doubleValue assigned correctly as '10.0'." }
            ],
            solutionExplanation: "In C#, you cannot implicitly convert a double to an int, as it may lead to loss of precision. For this, you need explicit conversion.",
            language: "C#",
          },
        
          {
            title: "Code Optimization: Implicit Conversion",
            description: "Optimize the following code by removing unnecessary explicit type conversion and using implicit conversion.",
            difficulty: "Basic",
            difficultyScore: 1,
            level: "Basic",
            existingCode: `
              using System;
              class Program {
                  static void Main(string[] args) {
                      int intValue = 5;
                      double doubleValue = (double)intValue;  
                      Console.WriteLine(doubleValue);
                  }
              }
            `,
            testCases: [
              { condition: "The output should be '5.0'." }
            ],
            solutionExplanation: "In this case, the implicit conversion from int to double can be used, so explicit casting is not necessary.",
            language: "C#",
          },
        
          {
            title: "Problem Solving: Implicit Conversion",
            description: "Write a C# program that assigns an integer value to a double variable and prints the double value.",
            difficulty: "Basic",
            difficultyScore: 1,
            level: "Basic",
            existingCode: `
              using System;
              class Program {
                  static void Main(string[] args) {
                      // Assign integer to double
                  }
              }
            `,
            testCases: [
              { condition: "The output should be '25.0'." }
            ],
            solutionExplanation: "Implicit type conversion allows for assigning an int to a double, which will automatically convert the integer value to a double type.",
            language: "C#",
          },
        
          // Intermediate Level Tasks
          {
            title: "Explicit Type Conversion",
            description: "Write a C# program that demonstrates explicit type conversion from double to int using casting.",
            difficulty: "Intermediate",
            difficultyScore: 1,
            level: "Intermediate",
            
            existingCode: `
              using System;
              class Program {
                  static void Main(string[] args) {
                      // Explicitly convert double to int
                      double doubleValue = 9.75;
                  }
              }
            `,
            testCases: [
              { condition: "The output should be '9'." }
            ],
            solutionExplanation: "Explicit conversion requires the use of a cast to convert a double to an int, truncating the decimal part.",
            language: "C#",
          },
        
          {
            title: "Error Correction: Explicit Conversion Error",
            description: "Correct the following code so that it properly converts a double to an int using explicit casting.",
            difficulty: "Intermediate",
            difficultyScore: 1,
            level: "Intermediate",
                 existingCode: `
              using System;
              class Program {
                  static void Main(string[] args) {
                      double doubleValue = 5.6;
                      int intValue = doubleValue;
                  }
              }
            `,
            testCases: [
              { condition: "The output should be '5'." }
            ],
            solutionExplanation: "Explicit conversion from double to int requires a cast operation, such as '(int)doubleValue'.",
            language: "C#",
          },
        
          {
            title: "Code Optimization: Explicit Conversion",
            description: "Optimize the following code by using explicit casting instead of performing an implicit conversion and then casting.",
            difficulty: "Intermediate",
            difficultyScore: 1,
            level: "Intermediate",
            existingCode: `
              using System;
              class Program {
                  static void Main(string[] args) {
                      double doubleValue = 8.45;
                      int intValue = (int)(doubleValue);  // Redundant casting
                      Console.WriteLine(intValue);
                  }
              }
            `,
            testCases: [
              { condition: "The output should be '8'." }
            ],
            solutionExplanation: "Redundant casting can be eliminated to make the code cleaner. The double can be cast directly using one operation: (int)doubleValue.",
            language: "C#",
          },
        
          {
            title: "Problem Solving: Explicit Conversion",
            description: "Write a C# program that converts a double value of 7.89 to an integer and prints the result.",
            difficulty: "Intermediate",
            difficultyScore: 1,
            level: "Intermediate",
            existingCode: `
              using System;
              class Program {
                  static void Main(string[] args) {
                      // Convert the double value to an integer
                  }
              }
            `,
            testCases: [
              { condition: "The output should be '7'." }
            ],
            solutionExplanation: "Explicit casting from double to int will truncate the decimal part of the double value.",
            language: "C#",
          },
        
          // Expert Level Tasks
          {
            title: "Boxing and Unboxing",
            description: "Write a C# program that demonstrates boxing by converting an int to an object, and then unboxing it back to an int.",
            difficulty: "Expert",
            difficultyScore: 1,
            level: "Expert",
            existingCode: `
              using System;
              class Program {
                  static void Main(string[] args) {
                      int num = 5;
                      // Boxing: Convert int to object
                      object obj = num;
                      // Unboxing: Convert object back to int
                      int unboxedNum = (int)obj;
                      Console.WriteLine(unboxedNum);
                  }
              }
            `,
            testCases: [
              { condition: "The output should be '5'." }
            ],
            solutionExplanation: "Boxing is the process of converting a value type (like int) to an object. Unboxing involves extracting the value back from the object.",
            language: "C#",
          },
        
        
          {
            title: "Error Correction: Boxing/Unboxing",
            description: "Correct the following code that causes a runtime error due to invalid unboxing.",
            difficulty: "Expert",
            difficultyScore: 1,
            level: "Expert",
            existingCode: `
              using System;
              class Program {
                  static void Main(string[] args) {
                      object obj = 5;
                      // Unboxing to an incorrect type
                      string strValue = (string)obj;  
                  }
              }
            `,
            testCases: [
              { condition: "The output should be 'InvalidCastException'." }
            ],
            solutionExplanation: "Unboxing requires the correct type. Trying to unbox a value type to a different type will throw an exception.",
            language: "C#",
          },
        
          {
            title: "Code Optimization: Boxing and Unboxing",
            description: "Optimize the following code by reducing the unnecessary boxing and unboxing operations.",
            difficulty: "Expert",
            difficultyScore: 1,
            level: "Expert",
            existingCode: `
              using System;
              class Program {
                  static void Main(string[] args) {
                      int num = 10;
                      object obj = num;  // Boxing
                      int result = (int)obj;  // Unboxing
                      Console.WriteLine(result);
                  }
              }
            `,
            testCases: [
              { condition: "The output should be '10'." }
            ],
            solutionExplanation: "Boxing and unboxing should be avoided where possible for performance reasons. In this case, the type can be used directly without boxing/unboxing.",
            language: "C#",
          },
        
          {
            title: "Problem Solving: Boxing and Unboxing",
            description: "Write a C# program that boxes an integer value and unboxes it back to its original value.",
            difficulty: "Expert",
            difficultyScore: 1,
            level: "Expert",
            existingCode: `
              using System;
              class Program {
                  static void Main(string[] args) {
                      // Box and unbox the integer value
                  }
              }
            `,
            testCases: [
              { condition: "The output should be '25'." }
            ],
            solutionExplanation: "The integer value is boxed to an object and then unboxed back to its original type using casting.",
            language: "C#",
          },
            // Basic Level Tasks
            {
              title: "Simple If-Else Statement",
              description: "Write a C# program that checks if a number is positive or negative using if-else statements.",
              difficulty: "Basic",
              difficultyScore: 1,
              level: "Basic",
              
              existingCode: `
                using System;
                class Program {
                    static void Main(string[] args) {
                        int num = 5; // Change this value to test
                        // Check if the number is positive or negative
                    }
                }
              `,
              testCases: [
                { condition: "The output should be 'Positive' for a positive number." },
                { condition: "The output should be 'Negative' for a negative number." }
              ],
              solutionExplanation: "Use an if-else statement to check if a number is greater than 0 for positive or else negative.",
              language: "C#",
            },
          
          
            {
              title: "Error Correction: if-else Syntax",
              description: "Correct the following code to check if a number is even or odd using an if-else statement.",
              difficulty: "Basic",
              difficultyScore: 1,
              level: "Basic",
              
              existingCode: `
                using System;
                class Program {
                    static void Main(string[] args) {
                        int num = 4;
                        // Check if the number is even or odd
                        if (num % 2 = 0)  // Error here
                        {
                            Console.WriteLine("Even");
                        }
                        else
                        {
                            Console.WriteLine("Odd");
                        }
                    }
                }
              `,
              testCases: [
                { condition: "The output should be 'Even'." }
              ],
              solutionExplanation: "The issue is that the assignment operator '=' is used instead of the equality comparison operator '==' to check if the number is even.",
              language: "C#",
            },
          
            {
              title: "Code Optimization: if-else",
              description: "Optimize the following code to use a ternary operator instead of an if-else statement.",
              difficulty: "Basic",
              difficultyScore: 1,
              level: "Basic",
              existingCode: `
                using System;
                class Program {
                    static void Main(string[] args) {
                        int num = 7;
                        string result;
                        if (num % 2 == 0) {
                            result = "Even";
                        } else {
                            result = "Odd";
                        }
                        Console.WriteLine(result);
                    }
                }
              `,
              testCases: [
                { condition: "The output should be 'Odd'." }
              ],
              solutionExplanation: "The ternary operator can be used to simplify the if-else block, making the code shorter and more readable.",
              language: "C#",
            },
          
            {
              title: "Problem Solving: if-else",
              description: "Write a C# program that checks if a number is divisible by both 3 and 5.",
              difficulty: "Basic",
              difficultyScore: 1,
              level: "Basic",
              existingCode: `
                using System;
                class Program {
                    static void Main(string[] args) {
                        int num = 15; // Change this value to test
                        // Check if the number is divisible by both 3 and 5
                    }
                }
              `,
              testCases: [
                { condition: "The output should be 'Divisible by both 3 and 5' for numbers divisible by both." }
              ],
              solutionExplanation: "Use the modulo operator '%' to check if the number is divisible by both 3 and 5 by checking if 'num % 3 == 0 && num % 5 == 0'.",
              language: "C#",
            },
          
            // Intermediate Level Tasks
            {
              title: "Switch Case Statement",
              description: "Write a C# program that checks the day of the week and prints the corresponding day name using a switch statement.",
              difficulty: "Intermediate",
              difficultyScore: 1,
              level: "Intermediate",
              existingCode: `
                using System;
                class Program {
                    static void Main(string[] args) {
                        int day = 3; // Change this value to test
                        // Print the name of the day using switch-case
                    }
                }
              `,
              testCases: [
                { condition: "The output should be 'Wednesday' for day = 3." },
                { condition: "The output should be 'Sunday' for day = 7." }
              ],
              solutionExplanation: "Use a switch statement with multiple cases to print the corresponding day name based on the value of the day variable.",
              language: "C#",
            },
          
          
            {
              title: "Error Correction: switch-case Syntax",
              description: "Correct the following code to check the month number and print the corresponding month name using a switch-case statement.",
              difficulty: "Intermediate",
              difficultyScore: 1,
              level: "Intermediate",
              existingCode: `
                using System;
                class Program {
                    static void Main(string[] args) {
                        int month = 4;
                        // Switch-case for month
                        switch (month) {
                            case 1:
                                Console.WriteLine("January");
                            case 2:
                                Console.WriteLine("February");
                            case 3:
                                Console.WriteLine("March");
                            case 4:
                                Console.WriteLine("April");
                        }
                    }
                }
              `,
              testCases: [
                { condition: "The output should be 'April' for month = 4." }
              ],
              solutionExplanation: "Each case in a switch statement must be followed by a 'break' to avoid fall-through behavior, which is causing the issue here.",
              language: "C#",
            },
          
            {
              title: "Code Optimization: switch-case",
              description: "Optimize the following code to use a default case and handle all possible month numbers in the switch-case statement.",
              difficulty: "Intermediate",
              difficultyScore: 1,
              level: "Intermediate",
              existingCode: `
                using System;
                class Program {
                    static void Main(string[] args) {
                        int month = 6; 
                        switch (month) {
                            case 1:
                                Console.WriteLine("January");
                                break;
                            case 2:
                                Console.WriteLine("February");
                                break;
                            // ... other cases omitted for brevity
                        }
                    }
                }
              `,
              testCases: [
                { condition: "The output should be 'June' for month = 6." }
              ],
              solutionExplanation: "Adding a default case ensures that any unexpected month number will be handled properly.",
              language: "C#",
            },
          
            {
              title: "Problem Solving: switch-case",
              description: "Write a C# program that checks a number and prints whether it is 'Positive', 'Negative', or 'Zero' using a switch-case statement.",
              difficulty: "Intermediate",
              difficultyScore: 1,
              level: "Intermediate",
              existingCode: `
                using System;
                class Program {
                    static void Main(string[] args) {
                        int num = 0; // Change this value to test
                        // Check the number using switch-case
                    }
                }
              `,
              testCases: [
                { condition: "The output should be 'Zero' for num = 0." },
                { condition: "The output should be 'Positive' for num = 5." }
              ],
              solutionExplanation: "A switch-case can be used to handle multiple conditions, but for a more complex comparison, if-else may be better.",
              language: "C#",
            },
          
            // Expert Level Tasks
            {
              title: "Advanced Conditional Expression",
              description: "Write a C# program using conditional statements to find the largest of three numbers.",
              difficulty: "Expert",
              difficultyScore: 1,
              level: "Expert",
              existingCode: `
                using System;
                class Program {
                    static void Main(string[] args) {
                        int a = 5, b = 7, c = 9;
                        // Find the largest of the three numbers
                    }
                }
              `,
              testCases: [
                { condition: "The output should be '9'." }
              ],
              solutionExplanation: "Use nested if-else or a combination of conditional operators to compare the numbers and find the largest.",
              language: "C#",
            },
          
          
            {
              title: "Error Correction: Nested Conditional Statements",
              description: "Correct the following code that uses nested if-else statements to check if a number is divisible by 5 and 3.",
              difficulty: "Expert",
              difficultyScore: 1,
              level: "Expert",
              existingCode: `
                using System;
                class Program {
                    static void Main(string[] args) {
                        int num = 30;
                        
                        if (num % 3 == 0)
                            if (num % 5 == 0) 
                                Console.WriteLine("Divisible by both");
                            else
                                Console.WriteLine("Not divisible by both");
                    }
                }
              `,
              testCases: [
                { condition: "The output should be 'Divisible by both'." }
              ],
              solutionExplanation: "The nested else statement is incorrect; an additional else should be added to handle the case when num is not divisible by both 3 and 5.",
              language: "C#",
            },
          
            {
              title: "Code Optimization: Complex Conditional Logic",
              description: "Optimize the following nested if-else code to use a single switch-case or ternary operator.",
              difficulty: "Expert",
              difficultyScore: 1,
              level: "Expert",
              existingCode: `
                using System;
                class Program {
                    static void Main(string[] args) {
                        int num = 4;
                        if (num > 0) {
                            if (num % 2 == 0) {
                                Console.WriteLine("Positive Even");
                            } else {
                                Console.WriteLine("Positive Odd");
                            }
                        } else {
                            Console.WriteLine("Non-positive");
                        }
                    }
                }
              `,
              testCases: [
                { condition: "The output should be 'Positive Even'." }
              ],
              solutionExplanation: "This logic can be simplified using a switch-case or ternary operator to make the code more efficient.",
              language: "C#",
            },
          
            {
              title: "Problem Solving: Complex Conditional Statements",
              description: "Write a C# program that checks if a given year is a leap year or not using conditional statements.",
              difficulty: "Expert",
              difficultyScore: 1,
              level: "Expert",
              existingCode: `
                using System;
                class Program {
                    static void Main(string[] args) {
                        int year = 2024; // Change this value to test
                        // Check if the year is a leap year
                    }
                }
              `,
              testCases: [
                { condition: "The output should be 'Leap Year' for year = 2024." },
                { condition: "The output should be 'Not a Leap Year' for year = 2023." }
              ],
              solutionExplanation: "A leap year is divisible by 4 but not by 100, unless it's also divisible by 400. This can be handled by conditional statements.",
              language: "C#",
            },
              // Basic Level Tasks
              {
                title: "For Loop - Print Numbers",
                description: "Write a C# program that uses a for loop to print numbers from 1 to 10.",
                difficulty: "Basic",
                difficultyScore: 1,
                level: "Basic",
                existingCode: `
                  using System;
                  class Program {
                      static void Main(string[] args) {
                          // Use a for loop to print numbers from 1 to 10
                      }
                  }
                `,
                testCases: [
                  { condition: "The output should be numbers from 1 to 10." }
                ],
                solutionExplanation: "Use a for loop to iterate from 1 to 10 and print each number using Console.WriteLine().",
                language: "C#",
              },
            
            
              {
                title: "Error Correction: Incorrect For Loop",
                description: "Correct the following code to print the numbers from 1 to 5 using a for loop.",
                difficulty: "Basic",
                difficultyScore: 1,
                level: "Basic",
                existingCode: `
                  using System;
                  class Program {
                      static void Main(string[] args) {
                                                    for int i = 1 i <= 5 i++ {
                              Console.WriteLine(i);
                          }
                      }
                  }
                `,
                testCases: [
                  { condition: "The output should be numbers from 1 to 5." }
                ],
                solutionExplanation: "The for loop should have parentheses around the initialization, condition, and increment expressions, and semicolons separating them.",
                language: "C#",
              },
            
              {
                title: "Code Optimization: for Loop",
                description: "Optimize the following code to print the squares of numbers from 1 to 5 using a for loop.",
                difficulty: "Basic",
                difficultyScore: 1,
                level: "Basic",
                existingCode: `
                  using System;
                  class Program {
                      static void Main(string[] args) {
                          for (int i = 1; i <= 5; i++) {
                              int square = i * i;
                              Console.WriteLine(square);
                          }
                      }
                  }
                `,
                testCases: [
                  { condition: "The output should be '1, 4, 9, 16, 25'." }
                ],
                solutionExplanation: "The code is already efficient, but further optimizations could be made depending on use cases (e.g., using a collection or function).",
                language: "C#",
              },
            
              {
                title: "Problem Solving: Sum of Numbers",
                description: "Write a C# program that calculates the sum of numbers from 1 to 100 using a for loop.",
                difficulty: "Basic",
                difficultyScore: 1,
                level: "Basic",
                existingCode: `
                  using System;
                  class Program {
                      static void Main(string[] args) {
                          int sum = 0;
                          // Use a for loop to calculate the sum of numbers from 1 to 100
                      }
                  }
                `,
                testCases: [
                  { condition: "The output should be '5050'." }
                ],
                solutionExplanation: "Use a for loop to iterate through the numbers from 1 to 100, adding each to a variable for the sum.",
                language: "C#",
              },
            
              // Intermediate Level Tasks
              {
                title: "While Loop - Countdown",
                description: "Write a C# program that uses a while loop to count down from 10 to 1.",
                difficulty: "Intermediate",
                difficultyScore: 1,
                level: "Intermediate",
                existingCode: `
                  using System;
                  class Program {
                      static void Main(string[] args) {
                          int i = 10;
                          // Use a while loop to count down from 10 to 1
                      }
                  }
                `,
                testCases: [
                  { condition: "The output should be '10, 9, 8, ..., 1'." }
                ],
                solutionExplanation: "A while loop can be used to decrease the value of 'i' until it reaches 1, printing each value at each iteration.",
                language: "C#",
              },
            
            
              {
                title: "Error Correction: while Loop",
                description: "Correct the following code to print all even numbers from 2 to 10 using a while loop.",
                difficulty: "Intermediate",
                difficultyScore: 1,
                level: "Intermediate",
                existingCode: `
                  using System;
                  class Program {
                      static void Main(string[] args) {
                          int i = 2;
                          // Print even numbers from 2 to 10 using a while loop
                          while (i <= 10) {
                              Console.WriteLine(i);
                              i = i + 2; 
                          }
                      }
                  }
                `,
                testCases: [
                  { condition: "The output should be '2, 4, 6, 8, 10'." }
                ],
                solutionExplanation: "The error in the code is that the value of 'i' is already incremented by 2, so there is no need for additional changes in the increment statement.",
                language: "C#",
              },
            
              {
                title: "Code Optimization: while Loop",
                description: "Optimize the following code to print the square of numbers from 1 to 5 using a while loop.",
                difficulty: "Intermediate",
                difficultyScore: 1,
                level: "Intermediate",
                existingCode: `
                  using System;
                  class Program {
                      static void Main(string[] args) {
                          int i = 1;
                          while (i <= 5) {
                              int square = i * i;
                              Console.WriteLine(square);
                              i++;
                          }
                      }
                  }
                `,
                testCases: [
                  { condition: "The output should be '1, 4, 9, 16, 25'." }
                ],
                solutionExplanation: "The code is already quite efficient. However, using a for loop could be more appropriate in this case as the number of iterations is known beforehand.",
                language: "C#",
              },
            
              {
                title: "Problem Solving: Fibonacci Series",
                description: "Write a C# program using a while loop to print the first 10 numbers in the Fibonacci series.",
                difficulty: "Intermediate",
                difficultyScore: 1,
                level: "Intermediate",
                existingCode: `
                  using System;
                  class Program {
                      static void Main(string[] args) {
                          int a = 0, b = 1;
                          // Print the first 10 numbers of the Fibonacci series using a while loop
                      }
                  }
                `,
                testCases: [
                  { condition: "The output should be '0, 1, 1, 2, 3, 5, 8, 13, 21, 34'." }
                ],
                solutionExplanation: "The Fibonacci sequence is generated by adding the last two numbers to produce the next one. A while loop can help iterate until the required number of terms are printed.",
                language: "C#",
              },
            
              // Expert Level Tasks
              {
                title: "Do-While Loop: Reverse Countdown",
                description: "Write a C# program that uses a do-while loop to count down from 10 to 1.",
                difficulty: "Expert",
                difficultyScore: 1,
                level: "Expert",
                existingCode: `
                  using System;
                  class Program {
                      static void Main(string[] args) {
                          int i = 10;
                          // Use a do-while loop to count down from 10 to 1
                      }
                  }
                `,
                testCases: [
                  { condition: "The output should be '10, 9, 8, ..., 1'." }
                ],
                solutionExplanation: "A do-while loop guarantees that the body of the loop will execute at least once, even if the condition is false.",
                language: "C#",
              },
            
              {
                title: "Error Correction: do-while Loop",
                description: "Correct the following code that uses a do-while loop to print the numbers from 1 to 5.",
                difficulty: "Expert",
                difficultyScore: 1,
                level: "Expert",

                existingCode: `
                  using System;
                  class Program {
                      static void Main(string[] args) {
                          int i = 1;
                          do {
                              Console.WriteLine(i);
                              i++;
                          } while i <= 5;
                      }
                  }
                `,
                testCases: [
                  { condition: "The output should be '1, 2, 3, 4, 5'." }
                ],
                solutionExplanation: "The syntax error occurs in the condition; parentheses should be used around the condition in the while clause.",
                language: "C#",
              },
            
              {
                title: "Code Optimization: do-while Loop",
                description: "Optimize the following code that prints numbers from 1 to 10 using a do-while loop.",
                difficulty: "Expert",
                difficultyScore: 1,
                level: "Expert",
                existingCode: `
                  using System;
                  class Program {
                      static void Main(string[] args) {
                          int i = 1;
                          do {
                              Console.WriteLine(i);
                              i++;
                          } while (i <= 10);
                      }
                  }
                `,
                testCases: [
                  { condition: "The output should be numbers from 1 to 10." }
                ],
                solutionExplanation: "This code is already optimized, but the same output could be achieved using a for loop for more concise code.",
                language: "C#",
              },
                // Basic Level Tasks
                {
                  title: "Break Statement - Print Numbers",
                  description: "Write a C# program that prints numbers from 1 to 10. Use the break statement to stop the loop when the number 6 is encountered.",
                  difficulty: "Basic",
                  difficultyScore: 1,
                  level: "Basic",
                  existingCode: `
                    using System;
                    class Program {
                        static void Main(string[] args) {
                            // Print numbers from 1 to 10 and break when 6 is encountered
                        }
                    }
                  `,
                  testCases: [
                    { condition: "The output should be '1, 2, 3, 4, 5'." }
                  ],
                  solutionExplanation: "Use the break statement inside the loop when the number 6 is encountered to stop further iterations.",
                  language: "C#",
                },
              
              
                {
                  title: "Error Correction: Break Statement",
                  description: "Correct the following code so that it prints numbers from 1 to 5, and then breaks out of the loop when 6 is encountered.",
                  difficulty: "Basic",
                  difficultyScore: 1,
                  level: "Basic",
                  
                  existingCode: `
                    using System;
                    class Program {
                        static void Main(string[] args) {
                            for (int i = 1; i <= 10; i++) {
                                Console.WriteLine(i);
                                if (i == 6) {
                                    
                                }
                            }
                        }
                    }
                  `,
                  testCases: [
                    { condition: "The output should be '1, 2, 3, 4, 5'." }
                  ],
                  solutionExplanation: "The break statement needs to be added inside the if condition to exit the loop when 'i' is 6.",
                  language: "C#",
                },
              
                {
                  title: "Code Optimization: Break Statement",
                  description: "Optimize the following code to print the first 5 even numbers using a for loop and break when the number exceeds 10.",
                  difficulty: "Basic",
                  difficultyScore: 1,
                  level: "Basic",
                  
                  existingCode: `
                    using System;
                    class Program {
                        static void Main(string[] args) {
                            for (int i = 1; i <= 10; i++) {
                                if (i % 2 == 0) {
                                    Console.WriteLine(i);
                                }
                            }
                        }
                    }
                  `,
                  testCases: [
                    { condition: "The output should be '2, 4, 6, 8, 10'." }
                  ],
                  solutionExplanation: "Add a break statement to exit the loop once the number exceeds 10. Also, ensure that only even numbers are printed.",
                  language: "C#",
                },
              
                {
                  title: "Problem Solving: Break Statement",
                  description: "Write a C# program that uses a break statement to stop the loop if the sum of the numbers exceeds 50.",
                  difficulty: "Basic",
                  difficultyScore: 1,
                  level: "Basic",
     
                  existingCode: `
                    using System;
                    class Program {
                        static void Main(string[] args) {
                            int sum = 0;
                            for (int i = 1; i <= 100; i++) {
                                sum += i;
                                // Break when sum exceeds 50
                            }
                            Console.WriteLine(sum);
                        }
                    }
                  `,
                  testCases: [
                    { condition: "The output should be '51'." }
                  ],
                  solutionExplanation: "Use the break statement inside the loop to stop once the sum exceeds 50.",
                  language: "C#",
                },
              
                // Intermediate Level Tasks
                {
                  title: "Continue Statement - Skip Odd Numbers",
                  description: "Write a C# program that prints the even numbers from 1 to 10 using the continue statement to skip odd numbers.",
                  difficulty: "Intermediate",
                  difficultyScore: 1,
                  level: "Intermediate",
                  existingCode: `
                    using System;
                    class Program {
                        static void Main(string[] args) {
                            for (int i = 1; i <= 10; i++) {
                                // Use continue to skip odd numbers
                            }
                        }
                    }
                  `,
                  testCases: [
                    { condition: "The output should be '2, 4, 6, 8, 10'." }
                  ],
                  solutionExplanation: "The continue statement is used to skip the current iteration when 'i' is odd, so the loop only prints even numbers.",
                  language: "C#",
                },
              
                
              
                {
                  title: "Error Correction: Continue Statement",
                  description: "Correct the following code to print the numbers 1 to 10 but skip the number 5 using the continue statement.",
                  difficulty: "Intermediate",
                  difficultyScore: 1,
                  level: "Intermediate",
                  existingCode: `
                    using System;
                    class Program {
                        static void Main(string[] args) {
                            for (int i = 1; i <= 10; i++) {
                                if (i == 5)
                                    // Missing continue statement
                                Console.WriteLine(i);
                            }
                        }
                    }
                  `,
                  testCases: [
                    { condition: "The output should be '1, 2, 3, 4, 6, 7, 8, 9, 10'." }
                  ],
                  solutionExplanation: "Add the continue statement inside the if condition to skip printing the number 5.",
                  language: "C#",
                },
              
                {
                  title: "Code Optimization: Continue Statement",
                  description: "Optimize the following code that prints all numbers from 1 to 20, skipping multiples of 3 using the continue statement.",
                  difficulty: "Intermediate",
                  difficultyScore: 1,
                  level: "Intermediate",
                  existingCode: `
                    using System;
                    class Program {
                        static void Main(string[] args) {
                            for (int i = 1; i <= 20; i++) {
                                if (i % 3 == 0) {
                                    // Optimization needed
                                }
                                Console.WriteLine(i);
                            }
                        }
                    }
                  `,
                  testCases: [
                    { condition: "The output should be '1, 2, 4, 5, 7, 8, 10, 11, 13, 14, 16, 17, 19, 20'." }
                  ],
                  solutionExplanation: "Add a continue statement to skip the numbers that are divisible by 3, optimizing the loop to avoid printing them.",
                  language: "C#",
                },
              
                {
                  title: "Problem Solving: Break and Continue",
                  description: "Write a C# program that uses both break and continue statements to print numbers from 1 to 50. Skip multiples of 5 and stop the loop if the number 30 is encountered.",
                  difficulty: "Intermediate",
                  difficultyScore: 1,
                  level: "Intermediate",
                  existingCode: `
                    using System;
                    class Program {
                        static void Main(string[] args) {
                            for (int i = 1; i <= 50; i++) {
                                // Skip multiples of 5 and break when 30 is encountered
                            }
                        }
                    }
                  `,
                  testCases: [
                    { condition: "The output should be '1, 2, 3, 4, 6, 7, 8, 9, 11, 12, ..., 29'." }
                  ],
                  solutionExplanation: "Use the continue statement to skip multiples of 5, and use the break statement to stop the loop when the number 30 is encountered.",
                  language: "C#",
                },
              
                // Expert Level Tasks
                {
                  title: "Break and Continue: Complex Loop",
                  description: "Write a C# program that prints all prime numbers from 1 to 100. Skip non-prime numbers using the continue statement and stop the loop if the prime number 50 is found using the break statement.",
                  difficulty: "Expert",
                  difficultyScore: 1,
                  level: "Expert",
                  existingCode: `
                    using System;
                    class Program {
                        static void Main(string[] args) {
                            // Use break and continue statements to find and print prime numbers
                        }
                    }
                  `,
                  testCases: [
                    { condition: "The output should be prime numbers up to 50 excluding 50." }
                  ],
                  solutionExplanation: "The continue statement is used to skip non-prime numbers, while the break statement stops the loop once the prime number 50 is found.",
                  language: "C#",
                },
                  // Basic Level Tasks
                  {
                    title: "Method Declaration - Print Greeting",
                    description: "Write a C# method that takes a name as a parameter and prints a greeting message 'Hello, [name]!'",
                    difficulty: "Basic",
                    difficultyScore: 1,
                    level: "Basic",
                    existingCode: `
                      using System;
                      class Program {
                          static void Main(string[] args) {
                              // Call the method here with a name
                          }
                      }
                    `,
                    testCases: [
                      { condition: "The output should be 'Hello, John!'" }
                    ],
                    solutionExplanation: "Declare a method that accepts a string parameter and prints the greeting message.",
                    language: "C#",
                  },
                
                
                  {
                    title: "Error Correction: Method Return Type",
                    description: "Correct the following code so that the method returns the sum of two integers.",
                    difficulty: "Basic",
                    difficultyScore: 1,
                    level: "Basic",
                    
                    existingCode: `
                      using System;
                      class Program {
                          static void Main(string[] args) {
                              int result = AddNumbers(5, 7);
                              Console.WriteLine(result);
                          }
                
                          // Missing return type
                          static AddNumbers(int a, int b) {
                              return a + b;
                          }
                      }
                    `,
                    testCases: [
                      { condition: "The output should be '12'." }
                    ],
                    solutionExplanation: "The method 'AddNumbers' needs to specify the return type 'int' to compile correctly.",
                    language: "C#",
                  },
                
                  {
                    title: "Code Optimization: Method Parameters",
                    description: "Optimize the following code to calculate the area of a rectangle using method parameters for length and width.",
                    difficulty: "Basic",
                    difficultyScore: 1,
                    level: "Basic",
                    
                    existingCode: `
                      using System;
                      class Program {
                          static void Main(string[] args) {
                              Console.WriteLine(CalculateArea(5, 10));
                          }
                
                          static int CalculateArea() {
                              int length = 5;
                              int width = 10;
                              return length * width;
                          }
                      }
                    `,
                    testCases: [
                      { condition: "The output should be '50'." }
                    ],
                    solutionExplanation: "Modify the 'CalculateArea' method to accept length and width as parameters instead of using hardcoded values.",
                    language: "C#",
                  },
                
                  {
                    title: "Problem Solving: Return Type",
                    description: "Write a C# method that takes two integers and returns their difference. Call the method in the Main method and print the result.",
                    difficulty: "Basic",
                    difficultyScore: 1,
                    level: "Basic",
                    existingCode: `
                      using System;
                      class Program {
                          static void Main(string[] args) {
                              // Call the method and print the result here
                          }
                
                          static int SubtractNumbers(int a, int b) {
                              return a - b;
                          }
                      }
                    `,
                    testCases: [
                      { condition: "The output should be '3' when inputs are 8 and 5." }
                    ],
                    solutionExplanation: "The method 'SubtractNumbers' should return the difference between the two input integers.",
                    language: "C#",
                  },
                
                  // Intermediate Level Tasks
                  {
                    title: "Method Overloading - Add Numbers",
                    description: "Write a C# program that overloads the 'Add' method to add either two integers or two doubles and prints the result.",
                    difficulty: "Intermediate",
                    difficultyScore: 1,
                    level: "Intermediate",
                    existingCode: `
                      using System;
                      class Program {
                          static void Main(string[] args) {
                              // Call Add method with integers and doubles
                          }
                
                          static int Add(int a, int b) {
                              return a + b;
                          }
                
                          static double Add(double a, double b) {
                              return a + b;
                          }
                      }
                    `,
                    testCases: [
                      { condition: "The output should be '8' for integers 3 and 5, and '7.5' for doubles 3.2 and 4.3." }
                    ],
                    solutionExplanation: "The 'Add' method is overloaded to handle both integer and double types.",
                    language: "C#",
                  },
                
                
                  {
                    title: "Error Correction: Method Parameters",
                    description: "Correct the following method to accept two parameters and return their sum.",
                    difficulty: "Intermediate",
                    difficultyScore: 1,
                    level: "Intermediate",
                    existingCode: `
                      using System;
                      class Program {
                          static void Main(string[] args) {
                              int result = SumNumbers();
                              Console.WriteLine(result);
                          }
                
                          static int SumNumbers(int a, int b) {
                              return a + b;
                          }
                      }
                    `,
                    testCases: [
                      { condition: "The output should be '15' when inputs are 7 and 8." }
                    ],
                    solutionExplanation: "The method 'SumNumbers' should be called with two arguments. The 'Main' method should pass values for 'a' and 'b'.",
                    language: "C#",
                  },
                
                  {
                    title: "Code Optimization: Method Return Type",
                    description: "Optimize the following code to calculate the area of a circle using a method that takes the radius as a parameter and returns the area.",
                    difficulty: "Intermediate",
                    difficultyScore: 1,
                    level: "Intermediate",
                    existingCode: `
                      using System;
                      class Program {
                          static void Main(string[] args) {
                              double area = CalculateCircleArea();
                              Console.WriteLine(area);
                          }
                
                          static double CalculateCircleArea() {
                              double radius = 7;
                              return Math.PI * radius * radius;
                          }
                      }
                    `,
                    testCases: [
                      { condition: "The output should be '153.93804002589985'." }
                    ],
                    solutionExplanation: "The method should accept the radius as a parameter instead of using a hardcoded value for optimization.",
                    language: "C#",
                  },
                
                  {
                    title: "Problem Solving: Method with Return",
                    description: "Write a C# method that calculates and returns the perimeter of a rectangle, given the length and width as parameters. Call the method in the Main method and print the result.",
                    difficulty: "Intermediate",
                    difficultyScore: 1,
                    level: "Intermediate",
                    existingCode: `
                      using System;
                      class Program {
                          static void Main(string[] args) {
                              // Call the method with length and width parameters
                          }
                
                          static int CalculatePerimeter(int length, int width) {
                              return 2 * (length + width);
                          }
                      }
                    `,
                    testCases: [
                      { condition: "The output should be '26' when length is 8 and width is 5." }
                    ],
                    solutionExplanation: "The method 'CalculatePerimeter' should accept length and width as parameters and return the perimeter of the rectangle.",
                    language: "C#",
                  },
                
                  // Expert Level Tasks
                  {
                    title: "Recursive Method - Factorial",
                    description: "Write a C# method that calculates the factorial of a number using recursion. The method should return the factorial and print the result in the Main method.",
                    difficulty: "Expert",
                    difficultyScore: 1,
                    level: "Expert",
                    existingCode: `
                      using System;
                      class Program {
                          static void Main(string[] args) {
                              int result = CalculateFactorial(5);
                              Console.WriteLine(result);
                          }
                
                          static int CalculateFactorial(int n) {
                              // Recursion logic for factorial
                          }
                      }
                    `,
                    testCases: [
                      { condition: "The output should be '120' for input 5." }
                    ],
                    solutionExplanation: "The method should use recursion to calculate the factorial of a number, multiplying the current number by the factorial of (n-1).",
                    language: "C#",
                  },
                    // Basic Level Tasks
                    {
                      title: "Method Declaration - Add Two Numbers",
                      description: "Write a C# method that accepts two integers as parameters and returns their sum.",
                      difficulty: "Basic",
                      difficultyScore: 1,
                      level: "Basic",
                      existingCode: `
                        using System;
                        class Program {
                            static void Main(string[] args) {
                                // Call the method here with two integers
                            }
                        }
                      `,
                      testCases: [
                        { condition: "The output should be '8' when inputs are 3 and 5." }
                      ],
                      solutionExplanation: "Define a method that takes two integers as parameters and returns their sum.",
                      language: "C#",
                    },
                  
                  
                    {
                      title: "Error Correction: Parameter Initialization",
                      description: "Fix the error in the following method so it correctly multiplies two integers and returns the result.",
                      difficulty: "Basic",
                      difficultyScore: 1,
                      level: "Basic",
                      existingCode: `
                        using System;
                        class Program {
                            static void Main(string[] args) {
                                int result = MultiplyNumbers(4, 5);
                                Console.WriteLine(result);
                            }
                  
                            static int MultiplyNumbers() {
                                return 4 * 5;
                            }
                        }
                      `,
                      testCases: [
                        { condition: "The output should be '20'." }
                      ],
                      solutionExplanation: "The method should accept two parameters for multiplication instead of using hardcoded values.",
                      language: "C#",
                    },
                  
                    {
                      title: "Code Optimization: Returning Area",
                      description: "Optimize the method to calculate the area of a triangle by passing base and height as parameters.",
                      difficulty: "Basic",
                      difficultyScore: 1,
                      level: "Basic",
                                            existingCode: `
                        using System;
                        class Program {
                            static void Main(string[] args) {
                                double area = CalculateArea();
                                Console.WriteLine(area);
                            }
                  
                            static double CalculateArea() {
                                double baseLength = 5;
                                double height = 10;
                                return 0.5 * baseLength * height;
                            }
                        }
                      `,
                      testCases: [
                        { condition: "The output should be '25'." }
                      ],
                      solutionExplanation: "Pass base and height as parameters to the method instead of hardcoding them.",
                      language: "C#",
                    },
                  
                    {
                      title: "Problem Solving: Rectangle Area",
                      description: "Write a C# method to calculate the area of a rectangle. The method should take length and width as parameters and return the area.",
                      difficulty: "Basic",
                      difficultyScore: 1,
                      level: "Basic",
                      existingCode: `
                        using System;
                        class Program {
                            static void Main(string[] args) {
                                // Call the method to calculate the area of a rectangle
                            }
                  
                            static int CalculateRectangleArea(int length, int width) {
                                return length * width;
                            }
                        }
                      `,
                      testCases: [
                        { condition: "The output should be '35' when length is 7 and width is 5." }
                      ],
                      solutionExplanation: "The method should calculate the area of the rectangle by multiplying the length and width.",
                      language: "C#",
                    },
                  
                    // Intermediate Level Tasks
                    {
                      title: "Method Overloading - Find Max",
                      description: "Write a C# program that overloads the 'FindMax' method to find the maximum of two integers and two doubles.",
                      difficulty: "Intermediate",
                      difficultyScore: 1,
                      level: "Intermediate",
                      existingCode: `
                        using System;
                        class Program {
                            static void Main(string[] args) {
                                // Call FindMax method with integers and doubles
                            }
                  
                            static int FindMax(int a, int b) {
                                return a > b ? a : b;
                            }
                  
                            static double FindMax(double a, double b) {
                                return a > b ? a : b;
                            }
                        }
                      `,
                      testCases: [
                        { condition: "The output should be '8' for integers 3 and 8, and '7.5' for doubles 3.2 and 7.5." }
                      ],
                      solutionExplanation: "The method 'FindMax' is overloaded to handle both integer and double types.",
                      language: "C#",
                    },
                  
                    {
                      title: "Error Correction: Method Return Value",
                      description: "Fix the error in the method so that it correctly returns the product of two numbers.",
                      difficulty: "Intermediate",
                      difficultyScore: 1,
                      level: "Intermediate",
                      existingCode: `
                        using System;
                        class Program {
                            static void Main(string[] args) {
                                int result = MultiplyNumbers(4, 5);
                                Console.WriteLine(result);
                            }
                  
                            static int MultiplyNumbers(int a, int b) {
                                return a + b; // Error: should multiply, not add
                            }
                        }
                      `,
                      testCases: [
                        { condition: "The output should be '20'." }
                      ],
                      solutionExplanation: "The method 'MultiplyNumbers' should return the product, not the sum of the two integers.",
                      language: "C#",
                    },
                  
                    {
                      title: "Code Optimization: Circle Area",
                      description: "Optimize the following code to calculate the area of a circle by passing the radius as a parameter.",
                      difficulty: "Intermediate",
                      difficultyScore: 1,
                      level: "Intermediate",
                      existingCode: `
                        using System;
                        class Program {
                            static void Main(string[] args) {
                                double area = CalculateCircleArea();
                                Console.WriteLine(area);
                            }
                  
                            static double CalculateCircleArea() {
                                double radius = 7;
                                return Math.PI * radius * radius;
                            }
                        }
                      `,
                      testCases: [
                        { condition: "The output should be '153.93804002589985'." }
                      ],
                      solutionExplanation: "Pass the radius as a parameter to the method instead of using a hardcoded value for better flexibility.",
                      language: "C#",
                    },
                  
                    // Expert Level Tasks
                    {
                      title: "Recursive Method - Fibonacci Series",
                      description: "Write a C# method that calculates the nth Fibonacci number using recursion. Print the nth Fibonacci number in the Main method.",
                      difficulty: "Expert",
                      difficultyScore: 1,
                      level: "Expert",
                      existingCode: `
                        using System;
                        class Program {
                            static void Main(string[] args) {
                                int result = Fibonacci(6);
                                Console.WriteLine(result);
                            }
                  
                            static int Fibonacci(int n) {
                                // Recursion logic for Fibonacci series
                            }
                        }
                      `,
                      testCases: [
                        { condition: "The output should be '8' for input 6." }
                      ],
                      solutionExplanation: "The Fibonacci method should recursively call itself to calculate the nth Fibonacci number.",
                      language: "C#",
                    },
                  
                    {
                      title: "Method with Arrays - Sum of Elements",
                      description: "Write a C# method that takes an array of integers as a parameter and returns the sum of its elements.",
                      difficulty: "Expert",
                      difficultyScore: 1,
                      level: "Expert",
                      existingCode: `
                        using System;
                        class Program {
                            static void Main(string[] args) {
                                int[] numbers = {1, 2, 3, 4, 5};
                        }}
                      `,
                      testCases: [
                        { condition: "The output should be '15' for the array {1, 2, 3, 4, 5}." }
                      ],
                      solutionExplanation: "The method should iterate through the array and sum all its elements.",
                      language: "C#",
                    },
                      // Basic Level Tasks
                      {
                        title: "Method with Optional Parameter",
                        description: "Complete a C# method that accepts two integers as parameters, with the second parameter being optional. The method should return their sum, and if the second parameter is not provided, it should return the first parameter.",
                        difficulty: "Basic",
                        difficultyScore: 1,
                        level: "Basic",
                        
                        existingCode: `
                          using System;
                          class Program {
                              static void Main(string[] args) {
                                  int result = AddNumbers(5);
                                  Console.WriteLine(result);
                              }
                    
                              static int AddNumbers(int a, int b = 0) {
                                  return;
                              }
                          }
                        `,
                        testCases: [
                          { condition: "The output should be '5' when only 5 is passed as an argument." },
                          { condition: "The output should be '15' when 5 and 10 are passed." }
                        ],
                        solutionExplanation: "The second parameter 'b' has a default value of 0, making it optional.",
                        language: "C#",
                      },
                    
                    
                      {
                        title: "Error Correction: Optional Parameter Default Value",
                        description: "Fix the error in the following code so that the method can accept an optional parameter 'c', with a default value of 5.",
                        difficulty: "Basic",
                        difficultyScore: 1,
                        level: "Basic",
                        existingCode: `
                          using System;
                          class Program {
                              static void Main(string[] args) {
                                  int result = CalculateArea(4);
                                  Console.WriteLine(result);
                              }
                    
                              static int CalculateArea(int length, int width = 5) {
                                  return length * width;
                              }
                          }
                        `,
                        testCases: [
                          { condition: "The output should be '20' when length is 4 and width is 5." }
                        ],
                        solutionExplanation: "The optional parameter 'width' should have a default value of 5, and it is correctly implemented here.",
                        language: "C#",
                      },
                    
                      {
                        title: "Code Optimization: Method with Optional Parameter",
                        description: "Optimize the code by using an optional parameter in the method to calculate the area of a rectangle. If the second parameter is not provided, it should assume the width is the same as the length.",
                        difficulty: "Basic",
                        difficultyScore: 1,
                        level: "Basic",
                        existingCode: `
                          using System;
                          class Program {
                              static void Main(string[] args) {
                                  int area = CalculateArea(5);
                                  Console.WriteLine(area);
                              }
                    
                              static int CalculateArea(int length, int width) {
                                  return length * width;
                              }
                          }
                        `,
                        testCases: [
                          { condition: "The output should be '25' when the length is 5 and the width is assumed to be 5." }
                        ],
                        solutionExplanation: "The width should be optional and default to the value of length if not provided.",
                        language: "C#",
                      },
                    
                      {
                        title: "Problem Solving: Calculate Discount",
                        description: "Complete a C# method that calculates a discounted price. The method should take the original price as the first parameter and the discount percentage as the second parameter, which is optional. If no discount percentage is provided, the method should assume a discount of 10%.",
                        difficulty: "Basic",
                        difficultyScore: 1,
                        level: "Basic",
                        existingCode: `
                          using System;
                          class Program {
                              static void Main(string[] args) {
                                  double discountedPrice = CalculateDiscount(100);
                                  Console.WriteLine(discountedPrice);
                              }
                    
                              static double CalculateDiscount(double price, double discount = 10) {
                                  return;
                              }
                          }
                        `,
                        testCases: [
                          { condition: "The output should be '90' when the price is 100 and no discount is applied." },
                          { condition: "The output should be '80' when the price is 100 and a 20% discount is applied." }
                        ],
                        solutionExplanation: "The discount is optional and defaults to 10% if not specified.",
                        language: "C#",
                      },
                    
                      // Intermediate Level Tasks
                      {
                        title: "Named Arguments - Swap Two Numbers",
                        description: "Complete a C# method that swaps two integers using named arguments. The method should print the swapped values.",
                        difficulty: "Intermediate",
                        difficultyScore: 1,
                        level: "Intermediate",
                        existingCode: `
                          using System;
                          class Program {
                              static void Main(string[] args) {
                                  int a = 5, b = 10;
                                  SwapNumbers();
                              }
                    
                              static void SwapNumbers(int a, int b) {
                                  Console.WriteLine($"Before Swap: a = {a}, b = {b}");
                                  int temp = a;
                                  a = b;
                                  b = temp;
                                  Console.WriteLine($"After Swap: a = {a}, b = {b}");
                              }
                          }
                        `,
                        testCases: [
                          { condition: "The output should be 'Before Swap: a = 5, b = 10' and 'After Swap: a = 10, b = 5'." }
                        ],
                        solutionExplanation: "Named arguments are used to explicitly pass values to parameters.",
                        language: "C#",
                      },
                    
                      {
                        title: "Error Correction: Named Arguments",
                        description: "Fix the error in the following code to properly pass named arguments when calling the 'DisplayDetails' method.",
                        difficulty: "Intermediate",
                        difficultyScore: 1,
                        level: "Intermediate",
                        existingCode: `
                          using System;
                          class Program {
                              static void Main(string[] args) {
                                  DisplayDetails(name: 'John', age: 25);
                              }
                    
                              static void DisplayDetails(string name, int age) {
                                  Console.WriteLine($"Name: {name}, Age: {age}");
                              }
                          }
                        `,
                        testCases: [
                          { condition: "The output should be 'Name: John, Age: 25'." }
                        ],
                        solutionExplanation: "Named arguments must be provided with their names (not in quotes) when calling the method.",
                        language: "C#",
                      },
                    
                      {
                        title: "Code Optimization: Use Named Arguments",
                        description: "Optimize the following code by using named arguments to make the method call clearer and more readable.",
                        difficulty: "Intermediate",
                        difficultyScore: 1,
                        level: "Intermediate",
                        existingCode: `
                          using System;
                          class Program {
                              static void Main(string[] args) {
                                  DisplayPerson('John', 25);
                              }
                    
                              static void DisplayPerson(string name, int age) {
                                  Console.WriteLine($"Name: {name}, Age: {age}");
                              }
                          }
                        `,
                        testCases: [
                          { condition: "The output should be 'Name: John, Age: 25'." }
                        ],
                        solutionExplanation: "Using named arguments makes the code more readable by specifying which parameter corresponds to which argument.",
                        language: "C#",
                      },
                    
                      // Expert Level Tasks
                      {
                        title: "Advanced Usage of Named Arguments",
                        description: "Complete  a C# method that accepts three parameters: first name, last name, and age. Use named arguments when calling the method and print the person's full name and age.",
                        difficulty: "Expert",
                        difficultyScore: 1,
                        level: "Expert",
                        existingCode: `
                          using System;
                          class Program {
                              static void Main(string[] args) {
                                  PrintPersonInfo(firstName: 'John', lastName: 'Doe', age: 30);
                              }
                    
                              
                          }
                        `,
                        testCases: [
                          { condition: "The output should be 'Full Name: John Doe, Age: 30'." }
                        ],
                        solutionExplanation: "Named arguments are used to specify the values passed to each parameter, making the code easier to understand.",
                        language: "C#",
                      },
                        // Basic Level Tasks
                        {
                          title: "Method Overloading: Add Two Numbers",
                          description: "Complete  a C# method that adds two integers. Overload the method to accept either two integers or two doubles.",
                          difficulty: "Basic",
                          difficultyScore: 1,
                          level: "Basic",
                          existingCode: `
                            using System;
                            class Program {
                                static void Main(string[] args) {
                                    Console.WriteLine(AddNumbers(5, 10));
                                    Console.WriteLine(AddNumbers(5.5, 10.5));
                                }
                      
                                static int AddNumbers(int a, int b) {
                                    return;
                                }
                      
                                static double AddNumbers(double a, double b) {
                                    return;
                                }
                            }
                          `,
                          testCases: [
                            { condition: "The output should be '15' for integers and '16' for doubles." }
                          ],
                          solutionExplanation: "Method overloading allows defining multiple methods with the same name but different parameter types.",
                          language: "C#",
                        },
                      
                      
                        {
                          title: "Error Correction: Method Overloading",
                          description: "Fix the following code that attempts to overload a method, but it's incorrectly implemented.",
                          difficulty: "Basic",
                          difficultyScore: 1,
                          level: "Basic",
                          existingCode: `
                            using System;
                            class Program {
                                static void Main(string[] args) {
                                    Console.WriteLine(MultiplyNumbers(5, 10));
                                    Console.WriteLine(MultiplyNumbers(5.5, 10.5));
                                }
                      
                                static int MultiplyNumbers(int a, int b) {
                                    return a * b;
                                }
                      
                                static int MultiplyNumbers(double a, double b) {
                                    return a * b;
                                }
                            }
                          `,
                          testCases: [
                            { condition: "The output should be '50' for integers and '57.75' for doubles." }
                          ],
                          solutionExplanation: "The second method's return type should be 'double' to match the input parameters and return a decimal result.",
                          language: "C#",
                        },
                      
                        {
                          title: "Code Optimization: Method Overloading",
                          description: "Optimize the following code by adding method overloading to calculate the product of two integers and two doubles.",
                          difficulty: "Basic",
                          difficultyScore: 1,
                          level: "Basic",
                          existingCode: `
                            using System;
                            class Program {
                                static void Main(string[] args) {
                                    Console.WriteLine(Multiply(5, 10));
                                    Console.WriteLine(Multiply(5.5, 10.5));
                                }
                      
                                static int Multiply(int a, int b) {
                                    return a * b;
                                }
                            }
                          `,
                          testCases: [
                            { condition: "The output should be '50' for integers and '57.75' for doubles." }
                          ],
                          solutionExplanation: "Overloading the method to handle both integer and double types allows the same method name to handle different parameter types.",
                          language: "C#",
                        },
                      
                        {
                          title: "Problem Solving: Factorial Using Recursion",
                          description: "Complete a C# method that calculates the factorial of a number using recursion.",
                          difficulty: "Basic",
                          difficultyScore: 1,
                          level: "Basic",
                                                    existingCode: `
                            using System;
                            class Program {
                                static void Main(string[] args) {
                                    Console.WriteLine(Factorial(5));
                                }
                      
                                static int Factorial(int n) {
                                    if () return 1;
                                                                    }
                            }
                          `,
                          testCases: [
                            { condition: "The output should be '120' for input 5." }
                          ],
                          solutionExplanation: "This is a classic example of recursion, where the method calls itself until the base case is met (n <= 1).",
                          language: "C#",
                        },
                      
                        // Intermediate Level Tasks
                        {
                          title: "Method Overloading: Calculate Area",
                          description: "Complete a C# method that calculates the area of a shape. Overload the method to calculate the area of a rectangle and a circle.",
                          difficulty: "Intermediate",
                          difficultyScore: 1,
                          level: "Intermediate",
                          existingCode: `
                            using System;
                            class Program {
                                static void Main(string[] args) {
                                    Console.WriteLine(CalculateArea(5, 10)); // Rectangle
                                    Console.WriteLine(CalculateArea(5));    // Circle
                                }
                      
                                static double CalculateArea(int length, int width) {
                                    return 
                                }
                      
                                static double CalculateArea(int radius) {
                                    return 
                                }
                            }
                          `,
                          testCases: [
                            { condition: "The output should be '50' for the rectangle and '78.5398' for the circle." }
                          ],
                          solutionExplanation: "Method overloading allows you to define multiple methods with the same name but different parameter signatures.",
                          language: "C#",
                        },
                      
                      
                        {
                          title: "Error Correction: Factorial Recursion",
                          description: "Fix the error in the following code that calculates the factorial of a number using recursion.",
                          difficulty: "Intermediate",
                          difficultyScore: 1,
                          level: "Intermediate",
                          existingCode: `
                            using System;
                            class Program {
                                static void Main(string[] args) {
                                    Console.WriteLine(Factorial(5));
                                }
                      
                                static int Factorial(int n) {
                                    if (n < 1) return 1; // Error: incorrect base case
                                    return n * Factorial(n - 1);
                                }
                            }
                          `,
                          testCases: [
                            { condition: "The output should be '120' for input 5." }
                          ],
                          solutionExplanation: "The base case should be 'if (n <= 1)', as factorial is undefined for values less than 1.",
                          language: "C#",
                        },
                      
                        {
                          title: "Code Optimization: Factorial Recursion",
                          description: "Optimize the following code by improving the recursive method for calculating the factorial of a number.",
                          difficulty: "Intermediate",
                          difficultyScore: 1,
                          level: "Intermediate",
                          existingCode: `
                            using System;
                            class Program {
                                static void Main(string[] args) {
                                    Console.WriteLine(Factorial(5));
                                }
                      
                                static int Factorial(int n) {
                                    if (n <= 1) return 1;
                                    return n * Factorial(n - 1);
                                }
                            }
                          `,
                          testCases: [
                            { condition: "The output should be '120' for input 5." }
                          ],
                          solutionExplanation: "The current implementation is already optimal for calculating factorial using recursion.",
                          language: "C#",
                        },
                      
                        // Expert Level Tasks
                        {
                          title: "Recursion: Reverse a String",
                          description: "Complete a C# method that reverses a string using recursion.",
                          difficulty: "Expert",
                          difficultyScore: 1,
                          level: "Expert",
                          
                          existingCode: `
                            using System;
                            class Program {
                                static void Main(string[] args) {
                                    Console.WriteLine(ReverseString("Hello"));
                                }
                      
                                static string ReverseString(string str) {
                                    if (str.Length == 0) return str;
                                    return ReverseString();
                                }
                            }
                          `,
                          testCases: [
                            { condition: "The output should be 'olleH' for input 'Hello'." }
                          ],
                          solutionExplanation: "The method recursively extracts the first character and appends it to the result of reversing the remaining string.",
                          language: "C#",
                        },
                          // Basic Level Tasks
                          {
                            title: "Array Initialization",
                            description: "Write a C# program that initializes an array of integers with values {1, 2, 3, 4, 5} and prints the values.",
                            difficulty: "Basic",
                            difficultyScore: 1,
                            level: "Basic",
                            
                            existingCode: `
                              using System;
                              class Program {
                                  static void Main(string[] args) {
                                  }
                              }
                            `,
                            testCases: [
                              { condition: "The output should be '1 2 3 4 5' on separate lines." }
                            ],
                            solutionExplanation: "You can initialize an array with values by specifying them within curly braces.",
                            language: "C#",
                          },
                        
                          {
                            title: "Error Correction: Array Sum",
                            description: "Fix the error in the following code that attempts to sum the elements of an array.",
                            difficulty: "Basic",
                            difficultyScore: 1,
                            level: "Basic",
                            existingCode: `
                              using System;
                              class Program {
                                  static void Main(string[] args) {
                                      int[] numbers = {1, 2, 3, 4, 5};
                                      int sum = 0;
                                      for (int i = 0; i <= numbers.Length; i++) {  // Error: Array index out of bounds
                                          sum += numbers[i];
                                      }
                                      Console.WriteLine(sum);
                                  }
                              }
                            `,
                            testCases: [
                              { condition: "The output should be '15'." }
                            ],
                            solutionExplanation: "The loop condition should be 'i < numbers.Length' to avoid accessing an invalid index.",
                            language: "C#",
                          },
                        
                          {
                            title: "Code Optimization: Array Sorting",
                            description: "Optimize the following code that sorts an array in ascending order.",
                            difficulty: "Basic",
                            difficultyScore: 1,
                            level: "Basic",
                    
                            existingCode: `
                              using System;
                              class Program {
                                  static void Main(string[] args) {
                                      int[] numbers = {5, 3, 8, 1, 2};
                                      Array.Sort(numbers);
                                      foreach (int number in numbers) {
                                          Console.WriteLine(number);
                                      }
                                  }
                              }
                            `,
                            testCases: [
                              { condition: "The output should be '1 2 3 5 8'." }
                            ],
                            solutionExplanation: "Array.Sort() is a built-in method to sort an array in ascending order.",
                            language: "C#",
                          },
                        
                          {
                            title: "Problem Solving: Reverse Array",
                            description: "Write a C# program that reverses the elements of an integer array and prints the reversed array.",
                            difficulty: "Basic",
                            difficultyScore: 1,
                            level: "Basic",
                                                        existingCode: `
                              using System;
                              class Program {
                                  static void Main(string[] args) {
                                      
                                  }
                              }
                            `,
                            testCases: [
                              { condition: "The output should be '5 4 3 2 1'." }
                            ],
                            solutionExplanation: "Array.Reverse() reverses the elements of an array in place.",
                            language: "C#",
                          },
                        
                          // Intermediate Level Tasks
                          {
                            title: "Multidimensional Array: Sum of Rows",
                            description: "Write a C# program that calculates the sum of each row in a 2D array and prints the results.",
                            difficulty: "Intermediate",
                            difficultyScore: 1,
                            level: "Intermediate",
                                                       existingCode: `
                              using System;
                              class Program {
                                  static void Main(string[] args) {
                                      
                                  }
                              }
                            `,
                            testCases: [
                              { condition: "The output should be '6 15 24'." }
                            ],
                            solutionExplanation: "Use nested loops to iterate over the rows and columns of the 2D array to calculate the sum of each row.",
                            language: "C#",
                          },
                        
                          {
                            title: "Error Correction: Incorrect Array Index",
                            description: "Fix the error in the following code that attempts to access an element from a 2D array.",
                            difficulty: "Intermediate",
                            difficultyScore: 1,
                            level: "Intermediate",
                            
                            existingCode: `
                              using System;
                              class Program {
                                  static void Main(string[] args) {
                                      int[,] matrix = {
                                          {1, 2, 3},
                                          {4, 5, 6}
                                      };
                                      Console.WriteLine(matrix[1, 3]);  // Error: Index out of bounds
                                  }
                              }
                            `,
                            testCases: [
                              { condition: "The output should be '5' after fixing the index." }
                            ],
                            solutionExplanation: "The second index should be within the bounds of the array, so 'matrix[1, 2]' should be used instead of 'matrix[1, 3]'.",
                            language: "C#",
                          },
                        
                          {
                            title: "Code Optimization: Matrix Transpose",
                            description: "Write an optimized C# code that transposes a 2D matrix.",
                            difficulty: "Intermediate",
                            difficultyScore: 1,
                            level: "Intermediate",
                                                        existingCode: `
                              using System;
                              class Program {
                                  static void Main(string[] args) {
                                      int[,] matrix = {
                                          {1, 2, 3},
                                          {4, 5, 6},
                                          {7, 8, 9}
                                      };
                                      int rows = matrix.GetLength(0);
                                      int cols = matrix.GetLength(1);
                                      int[,] transpose = new int[cols, rows];
                                      for (int i = 0; i < rows; i++) {
                                          for (int j = 0; j < cols; j++) {
                                              transpose[j, i] = matrix[i, j];
                                          }
                                      }
                                      for (int i = 0; i < cols; i++) {
                                          for (int j = 0; j < rows; j++) {
                                              Console.Write(transpose[i, j] + " ");
                                          }
                                          Console.WriteLine();
                                      }
                                  }
                              }
                            `,
                            testCases: [
                              { condition: "The output should be the transposed matrix." }
                            ],
                            solutionExplanation: "Transpose of a matrix is achieved by swapping rows with columns.",
                            language: "C#",
                          },
                        
                          // Expert Level Tasks
                          {
                            title: "Problem Solving: Find Maximum Element in Jagged Array",
                            description: "Write a C# program that finds the maximum element in a jagged array.",
                            difficulty: "Expert",
                            difficultyScore: 1,
                            level: "Expert",
                            existingCode: `
                              using System;
                              class Program {
                                  static void Main(string[] args) {
                              }}
                            `,
                            testCases: [
                              { condition: "The output should be '9'." }
                            ],
                            solutionExplanation: "To find the maximum element, iterate through all elements of the jagged array and compare each value.",
                            language: "C#",
                          },
                            // Basic Level Tasks
                            {
                              title: "List Initialization",
                              description: "Write a C# program that initializes a list of integers with values {1, 2, 3, 4, 5} and prints the values.",
                              difficulty: "Basic",
                              difficultyScore: 1,
                              level: "Basic",
                              existingCode: `
                                using System;
                                using System.Collections.Generic;
                                class Program {
                                    static void Main(string[] args) {
                                    }
                                }
                              `,
                              testCases: [
                                { condition: "The output should be '1 2 3 4 5' on separate lines." }
                              ],
                              solutionExplanation: "You can initialize a List in C# using curly braces for the values.",
                              language: "C#",
                            },
                          
                            
                          
                            {
                              title: "Error Correction: Add to List",
                              description: "Fix the error in the following code that attempts to add a number to a List.",
                              difficulty: "Basic",
                              difficultyScore: 1,
                              level: "Basic",
                              
                              existingCode: `
                                using System;
                                using System.Collections.Generic;
                                class Program {
                                    static void Main(string[] args) {
                                        List<int> numbers = new List<int>();
                                        numbers.Add("Hello");  // Error: Type mismatch
                                        foreach (int number in numbers) {
                                            Console.WriteLine(number);
                                        }
                                    }
                                }
                              `,
                              testCases: [
                                { condition: "The output should be '0' as no number is added due to error fixing." }
                              ],
                              solutionExplanation: "The error occurs because the List is defined to hold integers, and 'Hello' is a string. To fix this, add an integer value like '1'.",
                              language: "C#",
                            },
                          
                            {
                              title: "Code Optimization: Removing Duplicates from List",
                              description: "Write a C# program that removes duplicate elements from a List of integers.",
                              difficulty: "Basic",
                              difficultyScore: 1,
                              level: "Basic",
                              existingCode: `
                                using System;
                                using System.Collections.Generic;
                                class Program {
                                    static void Main(string[] args) {
                                        List<int> numbers = new List<int> {1, 2, 2, 3, 4, 4, 5};
                                        HashSet<int> uniqueNumbers = new HashSet<int>();
                                        foreach (int number in numbers) {
                                            uniqueNumbers.Add(number);
                                        }
                                        foreach (int number in uniqueNumbers) {
                                            Console.WriteLine(number);
                                        }
                                    }
                                }
                              `,
                              testCases: [
                                { condition: "The output should be '1 2 3 4 5'." }
                              ],
                              solutionExplanation: "By using a HashSet, duplicates are automatically removed because a HashSet does not allow duplicate values.",
                              language: "C#",
                            },
                          
                            {
                              title: "Problem Solving: Reverse a List",
                              description: "Write a C# program that reverses a List of integers.",
                              difficulty: "Basic",
                              difficultyScore: 1,
                              level: "Basic",
                              
                              existingCode: `
                                using System;
                                using System.Collections.Generic;
                                class Program {
                                    static void Main(string[] args) {
                                        }
                                   
                                }
                              `,
                              testCases: [
                                { condition: "The output should be '5 4 3 2 1'." }
                              ],
                              solutionExplanation: "List.Reverse() reverses the order of the elements in the list.",
                              language: "C#",
                            },
                          
                            // Intermediate Level Tasks
                            {
                              title: "Dictionary: Check if Key Exists",
                              description: "Write a C# program that checks if a given key exists in a dictionary and prints the value if it exists.",
                              difficulty: "Intermediate",
                              difficultyScore: 1,
                              level: "Intermediate",
                              questionNumber: 153,
                              existingCode: `
                                using System;
                                using System.Collections.Generic;
                                class Program {
                                    static void Main(string[] args) {
                                    }
                                }
                              `,
                              testCases: [
                                { condition: "The output should be 'Age of Bob: 25'." }
                              ],
                              solutionExplanation: "The ContainsKey() method checks if a key exists in the dictionary. If true, you can access the value using the key.",
                              language: "C#",
                            },
                          
                            {
                              title: "Error Correction: Dequeue Operation",
                              description: "Fix the error in the following code that attempts to remove an element from a queue.",
                              difficulty: "Intermediate",
                              difficultyScore: 1,
                              level: "Intermediate",
                                                            existingCode: `
                                using System;
                                using System.Collections.Generic;
                                class Program {
                                    static void Main(string[] args) {
                                        Queue<int> numbersQueue = new Queue<int>();
                                        numbersQueue.Enqueue(1);
                                        numbersQueue.Enqueue(2);
                                        numbersQueue.Enqueue(3);
                                        Console.WriteLine(numbersQueue.Dequeue());
                                        // Error: Queue is empty
                                    }
                                }
                              `,
                              testCases: [
                                { condition: "The output should be '1' after fixing the code." }
                              ],
                              solutionExplanation: "The error occurs because the code attempts to dequeue from an empty queue. Ensure that the queue has elements before attempting to dequeue.",
                              language: "C#",
                            },
                          
                            {
                              title: "Code Optimization: Dictionary Value Update",
                              description: "Write a C# program that optimizes the process of updating a dictionary value.",
                              difficulty: "Intermediate",
                              difficultyScore: 1,
                              level: "Intermediate",
                              existingCode: `
                                using System;
                                using System.Collections.Generic;
                                class Program {
                                    static void Main(string[] args) {
                                        Dictionary<string, int> scores = new Dictionary<string, int>() {
                                            { "Alice", 85 },
                                            { "Bob", 90 }
                                        };
                                        string name = "Alice";
                                        int newScore = 95;
                                        if (scores.ContainsKey(name)) {
                                            scores[name] = newScore;
                                        }
                                        Console.WriteLine(name + ": " + scores[name]);
                                    }
                                }
                              `,
                              testCases: [
                                { condition: "The output should be 'Alice: 95'." }
                              ],
                              solutionExplanation: "To update the value in a dictionary, use the key and assign the new value directly. This is a simple and optimized way to update the dictionary.",
                              language: "C#",
                            },
                          
                            // Expert Level Tasks
                            {
                              title: "Problem Solving: Priority Queue Implementation",
                              description: "Complete a C# program that implements a priority queue using a `SortedDictionary` and performs enqueue and dequeue operations.",
                              difficulty: "Expert",
                              difficultyScore: 1,
                              level: "Expert",
                                                            existingCode: `
                                using System;
                                using System.Collections.Generic;
                                class Program {
                                    static void Main(string[] args) {
                                        SortedDictionary<int, string> priorityQueue = new SortedDictionary<int, string>();
                                        priorityQueue.Add(1, "Low Priority");
                                        priorityQueue.Add(2, "Medium Priority");
                                        priorityQueue.Add(3, "High Priority");
                                        foreach () {
                                            Console.WriteLine(item.Value);
                                        }
                                    }
                                }
                              `,
                              testCases: [
                                { condition: "The output should be 'Low Priority Medium Priority High Priority'." }
                              ],
                              solutionExplanation: "In a priority queue, elements with lower priority values (like '1') are processed first. SortedDictionary naturally orders the items based on keys.",
                              language: "C#",
                            },
                              // Expert Level Tasks
                              {
                                title: "Problem Solving: Implement a Queue Using Stack",
                                description: "Complete a C# program to implement a queue using two stacks.",
                                difficulty: "Expert",
                                difficultyScore: 1,
                                level: "Expert",
                                                                existingCode: `
                                  using System;
                                  using System.Collections.Generic;
                                  class QueueUsingStacks {
                                      private Stack<int> stack1 = new Stack<int>();
                                      private Stack<int> stack2 = new Stack<int>();
                                      
                                      public void Enqueue(int item) {
                                          stack1.Push(item);
                                      }
                            
                                      public int Dequeue() {
                                          if () {
                                              while () {
                                                  stack2.Push(stack1.Pop());
                                              }
                                          }
                                          return stack2.Pop();
                                      }
                            
                                      static void Main(string[] args) {
                                          QueueUsingStacks queue = new QueueUsingStacks();
                                          queue.Enqueue(1);
                                          queue.Enqueue(2);
                                          queue.Enqueue(3);
                                          Console.WriteLine(queue.Dequeue());  // Output: 1
                                      }
                                  }
                                `,
                                testCases: [
                                  { condition: "The output should be '1' after dequeue." }
                                ],
                                solutionExplanation: "This solution uses two stacks to simulate the FIFO behavior of a queue. Elements are moved between stacks to maintain the correct order.",
                                language: "C#",
                              },
                            
                              {
                                title: "Code Optimization: Merging Two Sorted Lists",
                                description: "Complete a C# program that merges two sorted lists into one sorted list.",
                                difficulty: "Expert",
                                difficultyScore: 1,
                                level: "Expert",
                                
                                existingCode: `
                                  using System;
                                  using System.Collections.Generic;
                                  class Program {
                                      static void Main(string[] args) {
                                          List<int> list1 = new List<int> {1, 3, 5, 7};
                                          List<int> list2 = new List<int> {2, 4, 6, 8};
                                          List<int> mergedList = MergeSortedLists(list1, list2);
                                          foreach (int item in mergedList) {
                                              Console.WriteLine(item);
                                          }
                                      }
                            
                                      static List<int> MergeSortedLists(List<int> list1, List<int> list2) {
                                          List<int> mergedList = new List<int>();
                                          int i = 0, j = 0;
                                          while (i < list1.Count && j < list2.Count) {
                                              if () {
                                                  mergedList.Add(list1[i++]);
                                              } else {
                                                  mergedList.Add(list2[j++]);
                                              }
                                          }
                                          while (i < list1.Count) mergedList.Add(list1[i++]);
                                          while (j < list2.Count) mergedList.Add(list2[j++]);
                                          return mergedList;
                                      }
                                  }
                                `,
                                testCases: [
                                  { condition: "The output should be '1 2 3 4 5 6 7 8'." }
                                ],
                                solutionExplanation: "This solution efficiently merges two sorted lists by iterating through both lists simultaneously and appending the smaller element to the merged list.",
                                language: "C#",
                              },
                            
                              {
                                title: "Problem Solving: Dictionary Merge",
                                description: "Write a C# program that merges two dictionaries. If they have the same key, add the values.",
                                difficulty: "Expert",
                                difficultyScore: 1,
                                level: "Expert",
                                
                                existingCode: `
                                  using System;
                                  using System.Collections.Generic;
                                  class Program {
                                      static void Main(string[] args) {
                                          };
                                          Dictionary<string, int> dict2 = new Dictionary<string, int>() {
                                              { "b", 3 },
                                              { "c", 4 }
                                          };
                            
                                          var mergedDict = MergeDictionaries(dict1, dict2);
                                          foreach (var kvp in mergedDict) {
                                              Console.WriteLine(kvp.Key + ": " + kvp.Value);
                                          }
                                      }
                            
                                      static Dictionary<string, int> MergeDictionaries(Dictionary<string, int> dict1, Dictionary<string, int> dict2) {
                                          foreach (var kvp in dict2) {
                                              }
                                          }
                                          return dict1;
                                      }
                                  }
                                `,
                                testCases: [
                                  { condition: "The output should be 'a: 1, b: 5, c: 4'." }
                                ],
                                solutionExplanation: "This program merges two dictionaries and adds the values of the same keys. If the key does not exist, it adds the key-value pair to the dictionary.",
                                language: "C#",
                              },
                            
                              {
                                title: "Error Correction: Queue Operations",
                                description: "Fix the error in the following C# code snippet related to Queue operations.",
                                difficulty: "Expert",
                                difficultyScore: 1,
                                level: "Expert",
                                existingCode: `
                                  using System;
                                  using System.Collections.Generic;
                                  class Program {
                                      static void Main(string[] args) {
                                          Queue<int> numbersQueue = new Queue<int>();
                                          numbersQueue.Enqueue(1);
                                          numbersQueue.Enqueue(2);
                                          numbersQueue.Enqueue(3);
                                          Console.WriteLine(numbersQueue.Dequeue()); // Output should be 1
                                          numbersQueue.Enqueue("hello"); // Error: Type mismatch
                                      }
                                  }
                                `,
                                testCases: [
                                  { condition: "The output should be '1' after fixing the code." }
                                ],
                                solutionExplanation: "The error occurs because the Queue is typed to store integers, but a string is being added. The type mismatch can be fixed by using the correct type (int).",
                                language: "C#",
                              },
                                // Expert Level Tasks
                                {
                                  title: "Problem Solving: Implement a Stack",
                                  description: "Write a C# program to implement a stack using an array.",
                                  difficulty: "Expert",
                                  difficultyScore: 1,
                                  level: "Expert",
                                  
                                  existingCode: `
                                    using System;
                                    class StackImplementation {
                                        private int[] stackArray;
                                        private int top;
                              
                                        public StackImplementation(int size) {
                                            stackArray = new int[size];
                                            top = -1;
                                        }
                              
                                        public void Push(int item) {
                                            
                                        }
                              
                                        public int Pop() {
                                            if (top == -1) {
                                                Console.WriteLine("Stack is empty.");
                                                return -1;
                                            }
                                            return stackArray[top--];
                                        }
                              
                                        static void Main(string[] args) {
                                            StackImplementation stack = new StackImplementation(5);
                                            stack.Push(1);
                                            stack.Push(2);
                                            Console.WriteLine(stack.Pop()); // Output: 2
                                        }
                                    }
                                  `,
                                  testCases: [
                                    { condition: "The output should be '2' after popping the stack." }
                                  ],
                                  solutionExplanation: "This solution implements a stack using an array and manages the top index to track the stack elements.",
                                  language: "C#",
                                },
                              
                                {
                                  title: "Error Correction: HashSet Operations",
                                  description: "Fix the error in the following C# code snippet related to HashSet operations.",
                                  difficulty: "Expert",
                                  difficultyScore: 1,
                                  level: "Expert",
                                                                    existingCode: `
                                    using System;
                                    using System.Collections.Generic;
                                    class Program {
                                        static void Main(string[] args) {
                                            HashSet<int> numbers = new HashSet<int>();
                                            numbers.Add(1);
                                            numbers.Add(2);
                                            numbers.Add(3);
                                            numbers.Add(2); // Duplicate value, HashSet does not allow duplicates
                                            foreach (int number in numbers) {
                                                Console.WriteLine(number);
                                            }
                                        }
                                    }
                                  `,
                                  testCases: [
                                    { condition: "The output should print '1', '2', '3' without duplicates." }
                                  ],
                                  solutionExplanation: "The HashSet automatically handles duplicates, so '2' will only appear once in the output, even though it was added twice.",
                                  language: "C#",
                                },
                              
                                {
                                  title: "Code Optimization: Remove Duplicates from a List",
                                  description: "Write a C# program to remove duplicates from a list of integers using a HashSet.",
                                  difficulty: "Expert",
                                  difficultyScore: 1,
                                  level: "Expert",
                                  existingCode: `
                                    using System;
                                    using System.Collections.Generic;
                                    class Program {
                                        static void Main(string[] args) {
                                            List<int> numbers = new List<int> { 1, 2, 2, 3, 3, 4, 5 };
                                            HashSet<int> uniqueNumbers = new HashSet<int>(numbers);
                                            foreach (int number in uniqueNumbers) {
                                                Console.WriteLine(number);
                                            }
                                        }
                                    }
                                  `,
                                  testCases: [
                                    { condition: "The output should print '1', '2', '3', '4', '5' without duplicates." }
                                  ],
                                  solutionExplanation: "A HashSet automatically removes duplicates. By converting the list to a HashSet, the duplicates are removed.",
                                  language: "C#",
                                },
                              
                                {
                                  title: "Problem Solving: Reverse a LinkedList",
                                  description: "Write a C# program to reverse a singly linked list.",
                                  difficulty: "Expert",
                                  difficultyScore: 1,
                                  level: "Expert",
                                  
                                  existingCode: `
                                    using System;
                                    class LinkedListNode {
                                        public int Value;
                                        public LinkedListNode Next;
                              
                                        public LinkedListNode(int value) {
                                            Value = value;
                                            Next = null;
                                        }
                                    }
                              
                                    class LinkedList {
                                        public LinkedListNode Head;
                              
                                        public void Reverse() {
                                            LinkedListNode prev = null;
                                            LinkedListNode current = Head;
                                            LinkedListNode next = null;
                              
                                            while (current != null) {
                                            }
                                            Head = prev;
                                        }
                              
                                        static void Main(string[] args) {
                              
                                            LinkedListNode current = list.Head;
                                            while (current != null) {
                                                Console.WriteLine(current.Value); // Output: 3, 2, 1
                                                current = current.Next;
                                            }
                                        }
                                    }
                                  `,
                                  testCases: [
                                    { condition: "The output should print '3', '2', '1'." }
                                  ],
                                  solutionExplanation: "This solution reverses a singly linked list by iterating through the list and adjusting the pointers between nodes.",
                                  language: "C#",
                                },
                              
                            
                                // Expert Level Tasks
                                {
                                  title: "Problem Solving: Implement a Stack with Dynamic Size",
                                  description: "Write a C# program to implement a stack with dynamic size using a linked list.",
                                  difficulty: "Expert",
                                  difficultyScore: 1,
                                  level: "Expert",
                                  existingCode: `
                                    using System;
                                    class StackNode {
                                        public int Value;
                                        public StackNode Next;
                              
                                        public StackNode(int value) {
                                            Value = value;
                                            Next = null;
                                        }
                                    }
                              
                                    class DynamicStack {
                                        private StackNode top;
                              
                                        public DynamicStack() {
                                            top = null;
                                        }
                              
                                        public void Push(int item) {
                                            StackNode newNode = new StackNode(item);
                                            newNode.Next = top;
                                            top = newNode;
                                        }
                              
                                        public int Pop() {
                                            if (top == null) {
                                                Console.WriteLine("Stack is empty.");
                                                return -1;
                                            }
                                            
                                        }
                              
                                        static void Main(string[] args) {
                                        }
                                    }
                                  `,
                                  testCases: [
                                    { condition: "The output should print '2' after popping the stack." }
                                  ],
                                  solutionExplanation: "This solution uses a linked list to implement a dynamic stack that grows or shrinks based on operations.",
                                  language: "C#",
                                },
                              
                                {
                                  title: "Error Correction: HashSet with Custom Object",
                                  description: "Fix the error in the following code that tries to add custom objects to a HashSet.",
                                  difficulty: "Expert",
                                  difficultyScore: 1,
                                  level: "Expert",
                                  existingCode: `
                                    using System;
                                    using System.Collections.Generic;
                              
                                    class Person {
                                        public string Name { get; set; }
                                        public int Age { get; set; }
                                    }
                              
                                    class Program {
                                        static void Main(string[] args) {
                                            HashSet<Person> people = new HashSet<Person>();
                                            people.Add(new Person { Name = "Alice", Age = 30 });
                                            people.Add(new Person { Name = "Bob", Age = 25 });
                                            people.Add(new Person { Name = "Alice", Age = 30 }); // Problem with duplicates
                                            foreach (var person in people) {
                                                Console.WriteLine($"{person.Name}, {person.Age}");
                                            }
                                        }
                                    }
                                  `,
                                  testCases: [
                                    { condition: "The output should correctly handle duplicates based on the custom `Equals` and `GetHashCode` methods." }
                                  ],
                                  solutionExplanation: "In order to handle duplicates for custom objects, the `Equals` and `GetHashCode` methods need to be overridden in the `Person` class.",
                                  language: "C#",
                                },
                              
                                {
                                  title: "Code Optimization: Find the Union of Two HashSets",
                                  description: "Write a C# program to find the union of two HashSets and display the result.",
                                  difficulty: "Expert",
                                  difficultyScore: 1,
                                  level: "Expert",
                                  existingCode: `
                                    using System;
                                    using System.Collections.Generic;
                                    class Program {
                                        static void Main(string[] args) {
                                            HashSet<int> set1 = new HashSet<int> { 1, 2, 3, 4 };
                                            HashSet<int> set2 = new HashSet<int> { 3, 4, 5, 6 };
                              
                                            set1.UnionWith(set2);
                              
                                            foreach (int num in set1) {
                                                Console.WriteLine(num);
                                            }
                                        }
                                    }
                                  `,
                                  testCases: [
                                    { condition: "The output should print '1', '2', '3', '4', '5', '6'." }
                                  ],
                                  solutionExplanation: "The `UnionWith` method combines the elements from both sets, automatically handling duplicates.",
                                  language: "C#",
                                },
                              
                                {
                                  title: "Problem Solving: LinkedList with Find Method",
                                  description: "Write a C# program to find an element in a singly linked list.",
                                  difficulty: "Expert",
                                  difficultyScore: 1,
                                  level: "Expert",
                                  
                                  existingCode: `
                                    using System;
                                    class LinkedListNode {
                                        public int Value;
                                        public LinkedListNode Next;
                              
                                        public LinkedListNode(int value) {
                                            Value = value;
                                            Next = null;
                                        }
                                    }
                              
                                    class LinkedList {
                                        public LinkedListNode Head;
                              
                                        public LinkedListNode Find(int value) {
                                            
                                        }
                                    }
                                  `,
                                  testCases: [
                                    { condition: "The output should be 'Found: 2' if the element 2 is found." }
                                  ],
                                  solutionExplanation: "The `Find` method searches through the linked list and returns the node if the value is found, otherwise it returns `null`.",
                                  language: "C#",
                                },
                              
                                  // Expert Level Tasks
                                  {
                                    title: "Problem Solving: Using try-catch-finally for Division",
                                    description: "Write a C# program to perform division and handle division by zero using try-catch-finally.",
                                    difficulty: "Expert",
                                    difficultyScore: 1,
                                    level: "Expert",
                                    existingCode: `
                                      using System;
                                
                                      class Division {
                                          public static void Main(string[] args) {
                                          }
                                      }
                                    `,
                                    testCases: [
                                      { condition: "The output should show 'Error: Cannot divide by zero.' followed by 'This will always be executed.'" }
                                    ],
                                    solutionExplanation: "In this solution, the `try` block contains the code that may throw an exception. The `catch` block handles the `DivideByZeroException`, and the `finally` block is executed regardless of whether an exception occurred.",
                                    language: "C#",
                                  },
                                
                                  {
                                    title: "Error Correction: Missing finally Block",
                                    description: "Fix the error in the following C# code where a `finally` block is missing after the `try-catch`.",
                                    difficulty: "Expert",
                                    difficultyScore: 1,
                                    level: "Expert",
                                    
                                    existingCode: `
                                      using System;
                                
                                      class Program {
                                          public static void Main(string[] args) {
                                              try {
                                                  int[] numbers = { 1, 2, 3 };
                                                  Console.WriteLine(numbers[5]); // ArrayIndexOutOfBoundsException
                                              } catch (IndexOutOfRangeException ex) {
                                                  Console.WriteLine("Error: Index out of range.");
                                              }
                                              // Missing finally block here
                                          }
                                      }
                                    `,
                                    testCases: [
                                      { condition: "The program should handle the exception and execute cleanup actions in the finally block." }
                                    ],
                                    solutionExplanation: "The `finally` block is important for ensuring that necessary cleanup (such as closing files or releasing resources) happens, even if an exception is thrown.",
                                    language: "C#",
                                  },
                                
                                  {
                                    title: "Code Optimization: Handle Multiple Exceptions with try-catch-finally",
                                    description: "Optimize the following C# program to handle both `FileNotFoundException` and `UnauthorizedAccessException` using multiple `catch` blocks.",
                                    difficulty: "Expert",
                                    difficultyScore: 1,
                                    level: "Expert",
                                    existingCode: `
                                      using System;
                                      using System.IO;
                                
                                      class FileReader {
                                          public static void Main(string[] args) {
                                             
                                          }
                                      }
                                    `,
                                    testCases: [
                                      { condition: "The program should handle both `FileNotFoundException` and `UnauthorizedAccessException` separately." }
                                    ],
                                    solutionExplanation: "Using multiple `catch` blocks, the program can handle specific exceptions differently, providing more targeted error messages and actions.",
                                    language: "C#",
                                  },
                                
                                  {
                                    title: "Problem Solving: Nested try-catch-finally Blocks",
                                    description: "Write a C# program to demonstrate nested `try-catch-finally` blocks where inner try-catch blocks handle different exceptions.",
                                    difficulty: "Expert",
                                    difficultyScore: 1,
                                    level: "Expert",
                                    existingCode: `
                                      using System;
                                
                                      class NestedTryCatch {
                                          public static void Main(string[] args) {
                                          }
                                      }
                                    `,
                                    testCases: [
                                      { condition: "The output should show both the inner and outer catch messages, followed by the outer finally block." }
                                    ],
                                    solutionExplanation: "The nested `try-catch` blocks demonstrate that exceptions can be handled both locally and globally. The outer block ensures that even if an error occurs in the inner block, the outer block handles any remaining cleanup or actions.",
                                    language: "C#",
                                  },
                                
                                    // Expert Level Tasks
                                    {
                                      title: "Error Handling with Multiple Exceptions",
                                      description: "Write a C# program that handles multiple exceptions using `try-catch-finally` blocks for different error types.",
                                      difficulty: "Expert",
                                      difficultyScore: 1,
                                      level: "Expert",
                                      
                                      existingCode: `
                                        using System;
                                        using System.IO;
                                  
                                        class MultiExceptionHandling {
                                            public static void Main(string[] args) {
                                            }
                                        }
                                      `,
                                      testCases: [
                                        { condition: "The program should handle both file not found and access denied exceptions with respective messages." }
                                      ],
                                      solutionExplanation: "In this solution, specific exceptions are handled using multiple `catch` blocks. Each block manages a different error scenario, while the `finally` block ensures cleanup or final statements.",
                                      language: "C#",
                                    },
                                  
                                    {
                                      title: "Exception Handling in File Operations",
                                      description: "Write a C# program that reads from a file and uses `try-catch-finally` to handle file reading errors.",
                                      difficulty: "Expert",
                                      difficultyScore: 1,
                                      level: "Expert",
                                                                            existingCode: `
                                        using System;
                                        using System.IO;
                                  
                                        class FileReader {
                                            public static void Main(string[] args) {
                                                
                                            }
                                        }
                                      `,
                                      testCases: [
                                        { condition: "The program should handle file not found errors and display appropriate messages." }
                                      ],
                                      solutionExplanation: "This solution demonstrates how to handle file-related exceptions using `try-catch-finally`. The `finally` block ensures that the program notifies the user about the completion of the file operation, regardless of success or failure.",
                                      language: "C#",
                                    },
                                  
                                    {
                                      title: "Handling Divide by Zero Exception",
                                      description: "Write a C# program that handles the divide-by-zero exception using `try-catch-finally`.",
                                      difficulty: "Expert",
                                      difficultyScore: 1,
                                      level: "Expert",
                                      existingCode: `
                                        using System;
                                  
                                        class Division {
                                            public static void Main(string[] args) {
                                            }
                                        }
                                      `,
                                      testCases: [
                                        { condition: "The program should handle division by zero and display the correct error message." }
                                      ],
                                      solutionExplanation: "In this example, the `try-catch` block handles a `DivideByZeroException` that occurs when trying to divide by zero. The `finally` block is executed to display the final message.",
                                      language: "C#",
                                    },
                                  
                                    {
                                      title: "Handling Multiple Errors in a Single try Block",
                                      description: "Write a C# program where multiple exceptions are handled using one `try-catch-finally` block, including `IndexOutOfRangeException` and `NullReferenceException`.",
                                      difficulty: "Expert",
                                      difficultyScore: 1,
                                      level: "Expert",
                                      existingCode: `
                                        using System;
                                  
                                        class MultipleErrors {
                                            public static void Main(string[] args) {
                                            }
                                        }
                                      `,
                                      testCases: [
                                        { condition: "The program should handle both `IndexOutOfRangeException` and `NullReferenceException` and display the respective messages." }
                                      ],
                                      solutionExplanation: "This example demonstrates handling multiple errors in the same `try` block. The `catch` blocks are specific to each exception type, and the `finally` block ensures completion.",
                                      language: "C#",
                                    },
                                  
                                      // Expert Level Tasks
                                      {
                                        title: "Handle ArgumentNullException",
                                        description: "Write a C# program that handles the `ArgumentNullException` when a method receives a null argument.",
                                        difficulty: "Expert",
                                        difficultyScore: 1,
                                        level: "Expert",
                                        
                                        existingCode: `
                                          using System;
                                    
                                          class ArgumentNullExceptionExample {
                                              public static void Main(string[] args) {
                                                  
                                          }}
                                        `,
                                        testCases: [
                                          { condition: "The program should throw an `ArgumentNullException` when a null argument is passed to the method." }
                                        ],
                                        solutionExplanation: "In this example, an `ArgumentNullException` is thrown if a null argument is passed to the method. The `catch` block handles it, and the `finally` block ensures final messages are displayed.",
                                        language: "C#",
                                      },
                                    
                                      {
                                        title: "Handle File Read Errors Gracefully",
                                        description: "Write a C# program to read a file and handle potential errors such as `FileNotFoundException` or `UnauthorizedAccessException`.",
                                        difficulty: "Expert",
                                        difficultyScore: 1,
                                        level: "Expert",
                                        
                                        existingCode: `
                                          using System;
                                          using System.IO;
                                    
                                          class FileReadExample {
                                              public static void Main(string[] args) {
                                               
                                              }
                                          }
                                        `,
                                        testCases: [
                                          { condition: "The program should handle `FileNotFoundException` and `UnauthorizedAccessException` and display appropriate error messages." }
                                        ],
                                        solutionExplanation: "The program reads from a file, and if the file is missing or access is denied, the respective exceptions are caught and handled in the `catch` blocks. The `finally` block ensures that the program prints a completion message.",
                                        language: "C#",
                                      },
                                    
                                      {
                                        title: "Handle Divide by Zero with Custom Exception",
                                        description: "Write a C# program to handle a divide by zero error and throw a custom exception.",
                                        difficulty: "Expert",
                                        difficultyScore: 1,
                                        level: "Expert",
                                        existingCode: `
                                          using System;
                                    
                                          class DivideByZeroExample {
                                              public static void Main(string[] args) {
}
                                              }
                                          }
                                    
                                          class DivideByZeroCustomException : Exception {
                                            
                                          }
                                        `,
                                        testCases: [
                                          { condition: "The program should throw a custom `DivideByZeroCustomException` when division by zero is attempted." }
                                        ],
                                        solutionExplanation: "This example shows how to throw a custom exception when an invalid operation occurs. The custom exception is caught and handled in the `catch` block, while the `finally` block ensures the program prints a final message.",
                                        language: "C#",
                                      },
                                    
                                      {
                                        title: "Handle Multiple Exceptions with Finally Block",
                                        description: "Write a C# program that handles multiple exceptions such as `NullReferenceException`, `IndexOutOfRangeException`, and ensures resources are cleaned up using the `finally` block.",
                                        difficulty: "Expert",
                                        difficultyScore: 1,
                                        level: "Expert",
                                                                                existingCode: `
                                          using System;
                                    
                                          class MultipleExceptionHandling {
                                              public static void Main(string[] args) {
                                              }
                                          }
                                        `,
                                        testCases: [
                                          { condition: "The program should handle both `NullReferenceException` and `IndexOutOfRangeException` and display respective messages." }
                                        ],
                                        solutionExplanation: "This task demonstrates handling multiple errors in a `try` block, with specific `catch` blocks for each error type. The `finally` block ensures that cleanup happens regardless of whether an exception occurred.",
                                        language: "C#",
                                      },
                                    
                                      {
                                        title: "Exception Handling in Database Operations",
                                        description: "Write a C# program that simulates a database operation, handling `SqlException` and `InvalidOperationException` using `try-catch-finally`.",
                                        difficulty: "Expert",
                                        difficultyScore: 1,
                                        level: "Expert",
                                        existingCode: `
                                          using System;
                                          using System.Data.SqlClient;
                                    
                                          class DatabaseOperationExample {
                                              public static void Main(string[] args) {
                                              }
                                          }
                                        `,
                                        testCases: [
                                          { condition: "The program should handle both `SqlException` and `InvalidOperationException` and display respective messages." }
                                        ],
                                        solutionExplanation: "This example shows how to handle database-related exceptions with `try-catch-finally`. It ensures that if a connection error or invalid operation occurs, they are caught and handled, while the `finally` block provides a completion message.",
                                        language: "C#",
                                      },
                                        // Expert Level Tasks
                                        {
                                          title: "Throw and Handle Custom Exception for Invalid Age",
                                          description: "Write a C# program that throws a custom exception when an invalid age is entered (negative or zero).",
                                          difficulty: "Expert",
                                          difficultyScore: 1,
                                          level: "Expert",
                                          existingCode: `
                                            using System;
                                      
                                            class InvalidAgeException : Exception {
                                            }
                                      
                                            class Program {
                                                public static void Main(string[] args) {
                                                    
                                                }
                                            }
                                          `,
                                          testCases: [
                                            { condition: "The program should throw and handle `InvalidAgeException` when the age is less than or equal to zero." }
                                          ],
                                          solutionExplanation: "This task demonstrates how to create and throw a custom exception when an invalid age is entered. The `InvalidAgeException` is caught and handled in the `catch` block, while the `finally` block ensures a final message is displayed.",
                                          language: "C#",
                                        },
                                      
                                        {
                                          title: "Throw and Handle Custom Exception for Invalid Deposit",
                                          description: "Write a C# program that throws a custom exception if an invalid deposit amount (negative or zero) is entered.",
                                          difficulty: "Expert",
                                          difficultyScore: 1,
                                          level: "Expert",
                                          questionNumber: 189,
                                          existingCode: `
                                            using System;
                                      
                                            class InvalidDepositException : Exception {
                                         
                                            }
                                      
                                            class Program {
                                                public static void Main(string[] args) {
                                                    
                                                }
                                            }
                                          `,
                                          testCases: [
                                            { condition: "The program should throw and handle `InvalidDepositException` when the deposit amount is less than or equal to zero." }
                                          ],
                                          solutionExplanation: "This task demonstrates the creation and throwing of a custom exception for invalid deposit amounts. The exception is caught in the `catch` block and a message is printed. The `finally` block ensures that final messages are displayed.",
                                          language: "C#",
                                        },
                                      
                                        {
                                          title: "Throw and Handle Custom Exception for Invalid Email Format",
                                          description: "Write a C# program that throws a custom exception when an invalid email format is provided.",
                                          difficulty: "Expert",
                                          difficultyScore: 1,
                                          level: "Expert",
                                          
                                          existingCode: `
                                            using System;
                                            using System.Text.RegularExpressions;
                                      
                                            class InvalidEmailFormatException : Exception {
                                            }
                                      
                                            class Program {
                                                public static void Main(string[] args) {
                                                    
                                                }
                                            }
                                          `,
                                          testCases: [
                                            { condition: "The program should throw and handle `InvalidEmailFormatException` when the email format is invalid." }
                                          ],
                                          solutionExplanation: "This task demonstrates how to throw a custom exception when the email format is invalid. A regular expression is used to validate the email format, and the exception is thrown and caught accordingly.",
                                          language: "C#",
                                        },
                                      
                                        {
                                          title: "Throw and Handle Custom Exception for Unauthorized Access",
                                          description: "Write a C# program that throws a custom exception for unauthorized access attempts.",
                                          difficulty: "Expert",
                                          difficultyScore: 1,
                                          level: "Expert",
                                          
                                          existingCode: `
                                            using System;
                                      
                                            class UnauthorizedAccessException : Exception {
                                            }
                                      
                                            class Program {
                                                public static void Main(string[] args) {
                                                    
                                                }
                                            }
                                          `,
                                          testCases: [
                                            { condition: "The program should throw and handle `UnauthorizedAccessException` when the user does not have access." }
                                          ],
                                          solutionExplanation: "In this task, the program checks for user access and throws a custom `UnauthorizedAccessException` if access is denied. The exception is caught and handled in the `catch` block, and the `finally` block ensures a final message is printed.",
                                          language: "C#",
                                        },
                                      
                                        {
                                          title: "Throw and Handle Custom Exception for Invalid User Input",
                                          description: "Write a C# program that throws a custom exception when an invalid user input is detected, such as entering non-numeric data where a number is expected.",
                                          difficulty: "Expert",
                                          difficultyScore: 1,
                                          level: "Expert",
                                          
                                          existingCode: `
                                            using System;
                                      
                                            class InvalidInputException : Exception {
                                                public InvalidInputException(string message) : base(message) {}
                                            }
                                      
                                            class Program {
                                                public static void Main(string[] args) {
                                                }
                                            }
                                          `,
                                          testCases: [
                                            { condition: "The program should throw and handle `InvalidInputException` when non-numeric input is provided where a number is expected." }
                                          ],
                                          solutionExplanation: "This task involves checking if the user input is a valid number. If not, a custom exception is thrown and caught. The program provides feedback about the invalid input and uses the `finally` block to ensure the completion message is printed.",
                                          language: "C#",
                                        },
                                          // Expert Level Tasks
                                          {
                                            title: "Output Odd Numbers from 1 to 100",
                                            description: "Write a C# program that outputs all odd numbers from 1 to 100.",
                                            difficulty: "Expert",
                                            difficultyScore: 1,
                                            level: "Expert",
                                            
                                            existingCode: `
                                              using System;
                                        
                                              class Program {
                                                  static void Main(string[] args) {
                                                      
}}
                                            `,
                                            testCases: [
                                              { condition: "The program should output all odd numbers between 1 and 100." }
                                            ],
                                            solutionExplanation: "The program uses a for loop to iterate through numbers from 1 to 100, and an if statement checks if the number is odd by evaluating if the remainder of division by 2 is not zero.",
                                            language: "C#",
                                          },
                                        
                                          {
                                            title: "Output the Fibonacci Sequence",
                                            description: "Write a C# program that outputs the Fibonacci sequence up to the 10th term.",
                                            difficulty: "Expert",
                                            difficultyScore: 1,
                                            level: "Expert",
                                            
                                            existingCode: `
                                              using System;
                                        
                                              class Program {
                                                  static void Main(string[] args) {
                                              }
                                            `,
                                            testCases: [
                                              { condition: "The program should output the first 10 terms of the Fibonacci sequence." }
                                            ],
                                            solutionExplanation: "The program uses two variables to store the last two terms of the Fibonacci sequence. The sequence is calculated iteratively, and each term is printed as it is generated.",
                                            language: "C#",
                                          },
                                        
                                          {
                                            title: "Print a Multiplication Table",
                                            description: "Write a C# program that prints the multiplication table for the number 5, from 1 to 10.",
                                            difficulty: "Expert",
                                            difficultyScore: 1,
                                            level: "Expert",
                                            
                                            existingCode: `
                                              using System;
                                        
                                              class Program {
                                                  static void Main(string[] args) {
                                                      
                                              }
                                            `,
                                            testCases: [
                                              { condition: "The program should print the multiplication table for 5, from 1 to 10." }
                                            ],
                                            solutionExplanation: "The program uses a for loop to multiply the number 5 by the integers from 1 to 10, and prints the result in the multiplication table format.",
                                            language: "C#",
                                          },
                                        
                                          {
                                            title: "Reverse a String",
                                            description: "Write a C# program that reverses a string and prints the reversed string.",
                                            difficulty: "Expert",
                                            difficultyScore: 1,
                                            level: "Expert",
                                           
                                            existingCode: `
                                              using System;
                                        
                                              class Program {
                                                  static void Main(string[] args) {
                                                      
                                                  }
                                              }
                                            `,
                                            testCases: [
                                              { condition: "The program should output the reversed string 'Hello, World!' as '!dlroW ,olleH'." }
                                            ],
                                            solutionExplanation: "The program converts the string into a character array, reverses the array, and then converts it back into a string to print the reversed result.",
                                            language: "C#",
                                          },
                                        
                                          {
                                            title: "Count Vowels and Consonants",
                                            description: "Write a C# program that counts the number of vowels and consonants in a given string.",
                                            difficulty: "Expert",
                                            difficultyScore: 1,
                                            level: "Expert",
                                            existingCode: `
                                              using System;
                                        
                                              class Program {
                                                  static void Main(string[] args) {
                                              }
                                            `,
                                            testCases: [
                                              { condition: "The program should output the correct number of vowels and consonants in the string 'Hello, World!'." }
                                            ],
                                            solutionExplanation: "The program iterates over the string, checking each character to see if it's a vowel or consonant. The `char.IsLetter()` method is used to ensure that only alphabetic characters are counted as consonants.",
                                            language: "C#",
                                          },
                                           
                                          
                                            {
                                              title: "Prime Number Check",
                                              description: "Write a C# program that checks if a given number is prime or not and outputs the result.",
                                              difficulty: "Expert",
                                              difficultyScore: 1,
                                              level: "Expert",
                                              existingCode: `
                                                using System;
                                          
                                                class Program {
                                                    static void Main(string[] args) {
                                                }
}

                                              `,
                                              testCases: [
                                                { condition: "The program should output whether the number is prime or not. For example, '29 is a prime number.'" }
                                              ],
                                              solutionExplanation: "The program checks for divisibility from 2 up to the square root of the number. If a divisor is found, the number is not prime.",
                                              language: "C#",
                                            },
                                          
                                            {
                                              title: "Count Words in a Sentence",
                                              description: "Write a C# program that counts the number of words in a given sentence.",
                                              difficulty: "Expert",
                                              difficultyScore: 1,
                                              level: "Expert",
                                              
                                              existingCode: `
                                                using System;
                                          
                                                class Program {
                                                    static void Main(string[] args) {
                                                        string sentence = "Hello, this is a C# program!";
                                                        int wordCount = sentence.Split(' ').Length;
                                                        Console.WriteLine($"Word count: {wordCount}");
                                                    }
                                                }
                                              `,
                                              testCases: [
                                                { condition: "The program should output the word count for the given sentence." }
                                              ],
                                              solutionExplanation: "The program splits the sentence into words using the space character as a delimiter, then counts the number of resulting words.",
                                              language: "C#",
                                            },
                                          
                                            {
                                              title: "Find the Largest Number",
                                              description: "Write a C# program that finds and outputs the largest number in a given array of integers.",
                                              difficulty: "Expert",
                                              difficultyScore: 1,
                                              level: "Expert",
                                              
                                              existingCode: `
                                                using System;
                                          
                                                class Program {
                                                    static void Main(string[] args) {
                                                        
                                                    }
                                                }
                                              `,
                                              testCases: [
                                                { condition: "The program should output the largest number from the given array." }
                                              ],
                                              solutionExplanation: "The program initializes the largest number as the first element of the array and iterates through the array to find a larger number.",
                                              language: "C#",
                                            },
                                          
                                            {
                                              title: "Reverse the Words in a Sentence",
                                              description: "Write a C# program that reverses the words in a given sentence while maintaining the original word order.",
                                              difficulty: "Expert",
                                              difficultyScore: 1,
                                              level: "Expert",
                                              existingCode: `
                                                using System;
                                          
                                                class Program {
                                                    static void Main(string[] args) {
                                                    }
                                                }
                                              `,
                                              testCases: [
                                                { condition: "The program should output the sentence with words in reverse order. For example, 'C# from World Hello'" }
                                              ],
                                              solutionExplanation: "The program splits the sentence into words, reverses the array of words, and then joins them back together into a sentence.",
                                              language: "C#",
                                            }
                                          ];
                                          
                                      
                                        
                                  export default csharpTasks;    
    
