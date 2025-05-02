const csharpTasks = [
    // Basic Level Tasks
    {
      title: "Print Hello World",
      description: "Write a C# program to print 'Hello, World!'.",
      difficulty: "Basic",
      difficultyScore: 1,
      level: "Basic",
      existingCode: `
  using System;
  
  class Program {
      static void Main(string[] args) {
          // Write your code here
      }
  }
      `,
      testCases: [
        { condition: "The output should be 'Hello, World!'" }
      ],
      solutionExplanation: "Use the Console.WriteLine() method to print 'Hello, World!'.",
      language: "C#",
    },
    {
      title: "Add Two Numbers",
      description: "Write a C# program to add two numbers and print the result.",
      difficulty: "Basic",
      difficultyScore: 1,
      level: "Basic",
      existingCode: `
  using System;
  
  class Program {
      static void Main(string[] args) {
          int a = 5;
          int b = 3;
          // Write your code here
      }
  }
      `,
      testCases: [
        { condition: "The output should be 8" }
      ],
      solutionExplanation: "Use the addition operator '+' to add two numbers and print the result.",
      language: "C#",
    },
    {
      title: "Check Even or Odd",
      description: "Write a C# program to check if a number is even or odd.",
      difficulty: "Intermediate",
      difficultyScore: 2,
      level: "Intermediate",
      existingCode: `
  using System;
  
  class Program {
      static void Main(string[] args) {
          int num = 4;
          // Write your code here
      }
  }
      `,
      testCases: [
        { condition: "The output should be 'Even' if the number is even, and 'Odd' if the number is odd." }
      ],
      solutionExplanation: "Use the modulo operator '%' to determine whether a number is even or odd.",
      language: "C#",
    },
    {
      title: "Factorial Calculation",
      description: "Write a C# program to calculate the factorial of a given number.",
      difficulty: "Intermediate",
      difficultyScore: 2,
      level: "Intermediate",
      existingCode: `
  using System;
  
  class Program {
      static void Main(string[] args) {
          int num = 5;
          // Write your code here
      }
  }
      `,
      testCases: [
        { condition: "The output should be 120 for num = 5." }
      ],
      solutionExplanation: "Use a loop to multiply all integers from 1 to the given number.",
      language: "C#",
    },
    {
      title: "Fibonacci Sequence",
      description: "Write a C# program to display the Fibonacci sequence up to a given number.",
      difficulty: "Expert",
      difficultyScore: 3,
      level: "Expert",
      existingCode: `
  using System;
  
  class Program {
      static void Main(string[] args) {
          int n = 10;
          // Write your code here
      }
  }
      `,
      testCases: [
        { condition: "The output should be the Fibonacci sequence up to 10." }
      ],
      solutionExplanation: "Use a loop to generate the Fibonacci sequence iteratively.",
      language: "C#",
    },
    {
      title: "Reverse a String",
      description: "Write a C# program to reverse a given string.",
      difficulty: "Expert",
      difficultyScore: 3,
      level: "Expert",
      existingCode: `
  using System;
  
  class Program {
      static void Main(string[] args) {
          string str = "hello";
          // Write your code here
      }
  }
      `,
      testCases: [
        { condition: "The output should be 'olleh' for input 'hello'." }
      ],
      solutionExplanation: "Use a loop or the built-in Reverse() method to reverse the string.",
      language: "C#",
    }
  ];
  
  export default csharpTasks;
  