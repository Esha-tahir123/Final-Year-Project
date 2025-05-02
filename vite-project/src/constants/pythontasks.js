const pythonTasks = [
    // Multiple Choice Questions (5 Questions)
    {
      "questionNo": 1,
      "title": "Indentation Error 1",
      "description": "Identify the issue in the following code:\n\n```python\nif True:\nprint(\"Hello\")\n```",
      "difficulty": 1,
      "level": "Basic",
      "existingCode": "if True:\nprint(\"Hello\")",
      "testCases": [
        {
          "condition": "Select the correct reason for the error:\n(a) Missing colon\n(b) Indentation error\n(c) Syntax error\n(d) None of the above."
        }
      ],
      "solutionExplanation": "The error is due to improper indentation of the `print` statement.",
      "language": "Python"
    },
    {
      "questionNo": 2,
      "title": "Syntax Error 1",
      "description": "What will the following code produce?\n\n```python\nprint(\"Hello World)\"",
      "difficulty": 1,
      "level": "Basic",
      "existingCode": "print(\"Hello World)\"",
      "testCases": [
        {
          "condition": "Select the correct answer:\n(a) Hello World\n(b) SyntaxError\n(c) IndentationError\n(d) None of the above."
        }
      ],
      "solutionExplanation": "The code produces a SyntaxError because the closing quote is missing.",
      "language": "Python"
    },
    {
      "questionNo": 3,
      "title": "Python Block Indentation",
      "description": "Which of the following is true about Python indentation?\n\n(a) It is optional.\n(b) It is used to define blocks of code.\n(c) Both (a) and (b).\n(d) None of the above.",
      "difficulty": 1,
      "level": "Basic",
      "existingCode": "None",
      "testCases": [
        {
          "condition": "The correct answer should highlight the importance of indentation."
        }
      ],
      "solutionExplanation": "The correct answer is (b) because Python uses indentation to define blocks of code.",
      "language": "Python"
    },
    {
      "questionNo": 4,
      "title": "Proper Indentation",
      "description": "What is the correct way to indent a block in Python?\n\n```python\nif True:\n___print(\"Hello\")\n```",
      "difficulty": 1,
      "level": "Basic",
      "existingCode": "if True:\n___print(\"Hello\")",
      "testCases": [
        {
          "condition": "Select the correct answer:\n(a) 2 spaces\n(b) 4 spaces\n(c) 6 spaces\n(d) 8 spaces."
        }
      ],
      "solutionExplanation": "The standard practice in Python is to use 4 spaces for indentation.",
      "language": "Python"
    },
    {
      "questionNo": 5,
      "title": "Mixed Indentation",
      "description": "What will happen if you mix tabs and spaces in Python code?",
      "difficulty": 1,
      "level": "Basic",
      "existingCode": "if True:\n\tprint(\"Hello\")\n  print(\"World\")",
      "testCases": [
        {
          "condition": "Select the correct answer:\n(a) SyntaxError\n(b) IndentationError\n(c) Runs successfully\n(d) None of the above."
        }
      ],
      "solutionExplanation": "Mixing tabs and spaces causes an IndentationError in Python.",
      "language": "Python"
    },
    // Code Optimization Questions (5 Questions)
    {
      "questionNo": 6,
      "title": "Optimize Code Block",
      "description": "Optimize the following code for readability:\n\n```python\nif True:\n print(\"Hello\")\n print(\"World\")",
      "difficulty": 1,
      "level": "Basic",
      "existingCode": "if True:\n print(\"Hello\")\n print(\"World\")",
      "testCases": [
        {
          "condition": "Ensure the code follows standard indentation."
        }
      ],
      "solutionExplanation": "Indentation should be 4 spaces, and the code should be properly aligned.",
      "language": "Python"
    },
    {
      "questionNo": 7,
      "title": "Remove Redundancies",
      "description": "Simplify and indent the following code correctly:\n\n```python\nif True: print(\"Hello\"); print(\"World\")",
      "difficulty": 1,
      "level": "Basic",
      "existingCode": "if True: print(\"Hello\"); print(\"World\")",
      "testCases": [
        {
          "condition": "Code should follow Python's PEP 8 style guide."
        }
      ],
      "solutionExplanation": "Separate the statements into different lines with proper indentation.",
      "language": "Python"
    },
    // Error Correction Questions (5 Questions)
    {
      "questionNo": 8,
      "title": "Fix Syntax Error",
      "description": "Correct the syntax of the following code:\n\n```python\nif True print(\"Hello\")",
      "difficulty": 1,
      "level": "Basic",
      "existingCode": "if True print(\"Hello\")",
      "testCases": [
        {
          "condition": "Ensure the corrected code runs successfully."
        }
      ],
      "solutionExplanation": "Add a colon `:` after the `if True` statement.",
      "language": "Python"
    },
    {
      "questionNo": 9,
      "title": "Indentation Fix",
      "description": "Fix the indentation error in the following code:\n\n```python\nif True:\n print(\"Hello\")\n  print(\"World\")",
      "difficulty": 1,
      "level": "Basic",
      "existingCode": "if True:\n print(\"Hello\")\n  print(\"World\")",
      "testCases": [
        {
          "condition": "Both print statements should align properly under the if block."
        }
      ],
      "solutionExplanation": "Ensure both print statements are indented by the same level.",
      "language": "Python"
    },
    // Problem-Solving Questions (1 Question)
    {
      "questionNo": 10,
      "title": "Fix and Execute",
      "description": "The following code has an error. Fix it and explain the output:\n\n```python\nif True\n    print(\"Hello\")",
      "difficulty": 1,
      "level": "Basic",
      "existingCode": "if True\n    print(\"Hello\")",
      "testCases": [
        {
          "condition": "Ensure the corrected code runs successfully and prints the output."
        }
      ],
      "solutionExplanation": "Add a colon after `if True` and align the `print` statement.",
      "language": "Python"
    },
       
            // Multiple Choice Questions (5 Questions)
            {
              "questionNo": 11,
              "title": "Lambda Function Usage",
              "description": "What will the following code output?\n\n```python\nnums = [1, 2, 3, 4, 5]\nsquared = list(map(lambda x: x**2, nums))\nprint(squared)\n```\n\n(a) [1, 4, 9, 16, 25]\n(b) [2, 4, 6, 8, 10]\n(c) [1, 8, 27, 64, 125]\n(d) None of the above.",
              "difficulty": 1,
              "level": "Intermediate",
              "existingCode": "nums = [1, 2, 3, 4, 5]\nsquared = list(map(lambda x: x**2, nums))\nprint(squared)",
              "testCases": [
                {
                  "condition": "Select the correct output for the lambda function applied to the list."
                }
              ],
              "solutionExplanation": "The correct answer is (a) because `lambda x: x**2` computes the square of each element in the list.",
              "language": "Python"
            },
            {
              "questionNo": 12,
              "title": "Error Handling with Try-Except",
              "description": "Identify the error in the following code:\n\n```python\ntry:\n    x = int(\"abc\")\nexcept:\n    print(\"Invalid input\")\n```\n(a) SyntaxError\n(b) NameError\n(c) Works fine\n(d) None of the above",
              "difficulty": 1,
              "level": "Intermediate",
              "existingCode": "try:\n    x = int(\"abc\")\nexcept:\n    print(\"Invalid input\")",
              "testCases": [
                {
                  "condition": "Explain why the provided code runs without exceptions or issues."
                }
              ],
              "solutionExplanation": "The correct answer is (c). The `except` block catches the `ValueError` raised by `int(\"abc\")` and handles it gracefully.",
              "language": "Python"
            },
            {
              "questionNo": 13,
              "title": "List Comprehensions",
              "description": "Convert the following code into a list comprehension:\n\n```python\nresult = []\nfor i in range(5):\n    result.append(i**2)\nprint(result)\n```",
              "difficulty": 1,
              "level": "Intermediate",
              "existingCode": "result = []\nfor i in range(5):\n    result.append(i**2)\nprint(result)",
              "testCases": [
                {
                  "condition": "Rewrite the code using list comprehensions to achieve the same output."
                }
              ],
              "solutionExplanation": "The optimized code is `result = [i**2 for i in range(5)]`.",
              "language": "Python"
            },
            {
              "questionNo": 14,
              "title": "File Handling",
              "description": "What does the following code do?\n\n```python\nwith open(\"data.txt\", \"w\") as file:\n    file.write(\"Hello, World!\")\n```\n(a) Opens the file for reading\n(b) Appends text to the file\n(c) Writes 'Hello, World!' and overwrites existing content\n(d) None of the above",
              "difficulty": 1,
              "level": "Intermediate",
              "existingCode": "with open(\"data.txt\", \"w\") as file:\n    file.write(\"Hello, World!\")",
              "testCases": [
                {
                  "condition": "Select the correct behavior of file writing in 'w' mode."
                }
              ],
              "solutionExplanation": "The correct answer is (c). The `w` mode opens the file for writing, overwriting any existing content.",
              "language": "Python"
            },
            {
              "questionNo": 15,
              "title": "Using Generators",
              "description": "What will the following generator code output?\n\n```python\ndef gen():\n    yield 1\n    yield 2\n    yield 3\nfor value in gen():\n    print(value)\n```\n(a) 1 2 3\n(b) [1, 2, 3]\n(c) Error\n(d) None of the above",
              "difficulty": 1,
              "level": "Expert",
              "existingCode": "def gen():\n    yield 1\n    yield 2\n    yield 3\nfor value in gen():\n    print(value)",
              "testCases": [
                {
                  "condition": "Identify the output generated by the given generator function."
                }
              ],
              "solutionExplanation": "The correct answer is (a). The generator yields values one by one, which are printed in the loop.",
              "language": "Python"
            },
            // Code Optimization Questions (5 Questions)
            {
              "questionNo": 16,
              "title": "Optimize Variable Usage",
              "description": "Simplify the following code by removing unnecessary variables:\n\n```python\nx = 5\ny = x + 0\nz = y * 1\nprint(z)\n```",
              "difficulty": 1,
              "level": "Basic",
              "existingCode": "x = 5\ny = x + 0\nz = y * 1\nprint(z)",
              "testCases": [
                {
                  "condition": "Ensure the code produces the same output with minimal variables."
                }
              ],
              "solutionExplanation": "The optimized code is print(5) since the intermediate variables y and z are unnecessary.",
              "language": "Python"
            },
            {
              "questionNo": 17,
              "title": "Combine Variable Initialization",
              "description": "Optimize the following code for readability:\n\n```python\na = 5\nb = 10\nc = 15\n```",
              "difficulty": 1,
              "level": "Basic",
              "existingCode": "a = 5\nb = 10\nc = 15",
              "testCases": [
                {
                  "condition": "Combine multiple variable declarations into a single line where possible."
                }
              ],
              "solutionExplanation": "The optimized code is a, b, c = 5, 10, 15.",
              "language": "Python"
            },
            {
              "questionNo": 18,
              "title": "Avoid Redundant Variables",
              "description": "Simplify the following code by avoiding redundant variables:\n\n```python\nx = 100\ny = x\nprint(y)\n```",
              "difficulty": 1,
              "level": "Basic",
              "existingCode": "x = 100\ny = x\nprint(y)",
              "testCases": [
                {
                  "condition": "Ensure the code produces the same output without redundancy."
                }
              ],
              "solutionExplanation": "The optimized code is print(100).",
              "language": "Python"
            },
            {
              "questionNo": 19,
              "title": "Fix Variable Assignment",
              "description": "Correct the error in the following code:\n\n```python\nx, y = 10\n```",
              "difficulty": 1,
              "level": "Basic",
              "existingCode": "x, y = 10",
              "testCases": [
                {
                  "condition": "Ensure the corrected code assigns values to both variables."
                }
              ],
              "solutionExplanation": "The corrected code is x, y = 10, 0.",
              "language": "Python"
            },
        
                {
                  "questionNo": 20,
                  "title": "Fix TypeError",
                  "description": "Correct the error in the following code:\n\n```python\nx = \"5\" + 10\n```",
                  "difficulty": 1,
                  "level": "Basic",
                  "existingCode": "x = \"5\" + 10",
                  "testCases": [
                    {
                      "condition": "Ensure the corrected code handles type mismatches properly."
                    }
                  ],
                  "solutionExplanation": "The corrected code is x = int(\"5\") + 10.",
                  "language": "Python"
                },
                {
                  "questionNo": 21,
                  "title": "Basic Input",
                  "description": "Write a program to take an integer input from the user and print it.",
                  "difficulty": 1,
                  "level": "Basic",
                  "existingCode": "None",
                  "testCases": [
                    {
                      "condition": "Input: 5\nOutput: 5"
                    },
                    {
                      "condition": "Input: 10\nOutput: 10"
                    }
                  ],
                  "solutionExplanation": "Use `input()` to take input and `print()` to display it.",
                  "language": "Python"
                },
                {
                  "questionNo": 22,
                  "title": "Type Casting Input",
                  "description": "Write a program to take a floating-point number as input and display it rounded to two decimal places.",
                  "difficulty": 1,
                  "level": "Basic",
                  "existingCode": "None",
                  "testCases": [
                    {
                      "condition": "Input: 12.3456\nOutput: 12.35"
                    },
                    {
                      "condition": "Input: 7.1\nOutput: 7.10"
                    }
                  ],
                  "solutionExplanation": "Use `float(input())` for input and `print(round(number, 2))` for output.",
                  "language": "Python"
                },
                {
                  "questionNo": 23,
                  "title": "Multiple Inputs",
                  "description": "Write a program to take two integers as input and print their sum.",
                  "difficulty": 1,
                  "level": "Basic",
                  "existingCode": "None",
                  "testCases": [
                    {
                      "condition": "Input: 3 4\nOutput: 7"
                    },
                    {
                      "condition": "Input: 10 20\nOutput: 30"
                    }
                  ],
                  "solutionExplanation": "Use `input().split()` to take multiple inputs and convert them to integers.",
                  "language": "Python"
                },
                {
                  "questionNo": 24,
                  "title": "Formatted Output",
                  "description": "Write a program to display a user's name and age in the format: `Name: John, Age: 25`.",
                  "difficulty": 1,
                  "level": "Basic",
                  "existingCode": "None",
                  "testCases": [
                    {
                      "condition": "Input: John 25\nOutput: Name: John, Age: 25"
                    },
                    {
                      "condition": "Input: Alice 30\nOutput: Name: Alice, Age: 30"
                    }
                  ],
                  "solutionExplanation": "Use `f-strings` or `format()` for formatted output.",
                  "language": "Python"
                },
                {
                  "questionNo": 25,
                  "title": "Basic Output Formatting",
                  "description": "Write a program to print numbers in a tabular format:\n\nInput: 1 2 3\n\nOutput:\n```\n1\t2\t3\n```",
                  "difficulty": 1,
                  "level": "Basic",
                  "existingCode": "None",
                  "testCases": [
                    {
                      "condition": "Input: 4 5 6\nOutput: 4\t5\t6"
                    },
                    {
                      "condition": "Input: 7 8 9\nOutput: 7\t8\t9"
                    }
                  ],
                  "solutionExplanation": "Use `\\t` for tab spaces between numbers.",
                  "language": "Python"
                },
                {
                  "questionNo": 26,
                  "title": "Dynamic Input",
                  "description": "Write a program to take an unknown number of inputs from the user and print their sum.",
                  "difficulty": 1,
                  "level": "Intermediate",
                  "existingCode": "None",
                  "testCases": [
                    {
                      "condition": "Input: 1 2 3\nOutput: 6"
                    },
                    {
                      "condition": "Input: 5 10\nOutput: 15"
                    }
                  ],
                  "solutionExplanation": "Use `input().split()` and map to convert inputs into integers, then use `sum()`. ",
                  "language": "Python"
                },
                {
                  "questionNo": 27,
                  "title": "CSV Input",
                  "description": "Write a program to take comma-separated values as input and print them as a list.",
                  "difficulty": 1,
                  "level": "Intermediate",
                  "existingCode": "None",
                  "testCases": [
                    {
                      "condition": "Input: apple,banana,grape\nOutput: ['apple', 'banana', 'grape']"
                    },
                    {
                      "condition": "Input: 1,2,3\nOutput: ['1', '2', '3']"
                    }
                  ],
                  "solutionExplanation": "Use `input().split(',')` to split input by commas.",
                  "language": "Python"
                },
                {
                  "questionNo": 28,
                  "title": "Formatted Table",
                  "description": "Write a program to take three integers and print them in a formatted table with right alignment.",
                  "difficulty": 1,
                  "level": "Intermediate",
                  "existingCode": "None",
                  "testCases": [
                    {
                      "condition": "Input: 5 20 100\nOutput:\n```\n    5\n   20\n  100\n```"
                    },
                    {
                      "condition": "Input: 1 10 100\nOutput:\n```\n    1\n   10\n  100\n```"
                    }
                  ],
                  "solutionExplanation": "Use formatted strings with right alignment (e.g., `{:>5}` for alignment).",
                  "language": "Python"
                },
                {
                  "questionNo": 29,
                  "title": "Custom Formatter",
                  "description": "Write a program to take multiple inputs and format them into a sentence. For example:\n\nInput: Alice 25 5.5\nOutput: Alice is 25 years old and has a GPA of 5.5.",
                  "difficulty": 1,
                  "level": "Expert",
                  "existingCode": "None",
                  "testCases": [
                    {
                      "condition": "Input: Bob 30 3.8\nOutput: Bob is 30 years old and has a GPA of 3.8."
                    },
                    {
                      "condition": "Input: Jane 20 4.2\nOutput: Jane is 20 years old and has a GPA of 4.2."
                    }
                  ],
                  "solutionExplanation": "Use `f-strings` or `format()` for advanced formatting with placeholders.",
                  "language": "Python"
                },
              
                {
                    "questionNo": 30,
                    "title": "JSON Input and Output",
                    "description": "Write a program to take a JSON string as input, parse it, and print the value of a specific key.",
                    "difficulty": 1,
                    "level": "Expert",
                    "existingCode": "None",
                    "testCases": [
                      {
                        "condition": "The input JSON string is '{\"name\": \"Alice\", \"age\": 25}', and the expected output after parsing and retrieving the key 'name' is 'Alice'."
                      },
                      {
                        "condition": "The input JSON string is '{\"city\": \"New York\", \"country\": \"USA\"}', and the expected output after parsing and retrieving the key 'city' is 'New York'."
                      }
                    ],
                    "solutionExplanation": "Use the `json` module to parse the input and retrieve the value for the given key.",
                    "language": "Python"
                  },
                  {
                    "questionNo": 31,
                    "title": "Integer to String Conversion",
                    "description": "Write a program to convert an integer to a string and print it.",
                    "difficulty": 1,
                    "level": "Basic",
                    "existingCode": "None",
                    "testCases": [
                      {
                        "condition": "The input integer is 5, and the expected output after conversion is the string '5'."
                      },
                      {
                        "condition": "The input integer is 100, and the expected output after conversion is the string '100'."
                      }
                    ],
                    "solutionExplanation": "Use `str()` to convert an integer to a string.",
                    "language": "Python"
                  },
                  {
                    "questionNo": 32,
                    "title": "String to Integer Conversion",
                    "description": "Write a program to convert a string representing an integer to an actual integer and print it.",
                    "difficulty": 1,
                    "level": "Basic",
                    "existingCode": "None",
                    "testCases": [
                      {
                        "condition": "The input string is '25', and the expected output after conversion is the integer 25."
                      },
                      {
                        "condition": "The input string is '100', and the expected output after conversion is the integer 100."
                      }
                    ],
                    "solutionExplanation": "Use `int()` to convert a string to an integer.",
                    "language": "Python"
                  },
                  {
                    "questionNo": 33,
                    "title": "Float to Integer Conversion",
                    "description": "Write a program to convert a floating-point number to an integer and print it.",
                    "difficulty": 1,
                    "level": "Basic",
                    "existingCode": "None",
                    "testCases": [
                      {
                        "condition": "The input float is 5.7, and the expected output after conversion is the integer 5."
                      },
                      {
                        "condition": "The input float is 10.99, and the expected output after conversion is the integer 10."
                      }
                    ],
                    "solutionExplanation": "Use `int()` to convert a float to an integer, which truncates the decimal part.",
                    "language": "Python"
                  },
                  {
                    "questionNo": 34,
                    "title": "Integer to Float Conversion",
                    "description": "Write a program to convert an integer to a floating-point number and print it.",
                    "difficulty": 1,
                    "level": "Basic",
                    "existingCode": "None",
                    "testCases": [
                      {
                        "condition": "The input integer is 5, and the expected output after conversion is the float 5.0."
                      },
                      {
                        "condition": "The input integer is 100, and the expected output after conversion is the float 100.0."
                      }
                    ],
                    "solutionExplanation": "Use `float()` to convert an integer to a float.",
                    "language": "Python"
                  },
                  {
                    "questionNo": 35,
                    "title": "String to Float Conversion",
                    "description": "Write a program to convert a string representing a float to an actual float and print it.",
                    "difficulty": 1,
                    "level": "Basic",
                    "existingCode": "None",
                    "testCases": [
                      {
                        "condition": "The input string is '12.34', and the expected output after conversion is the float 12.34."
                      },
                      {
                        "condition": "The input string is '5.67', and the expected output after conversion is the float 5.67."
                      }
                    ],
                    "solutionExplanation": "Use `float()` to convert a string to a float.",
                    "language": "Python"
                  },
                  {
                    "questionNo": 36,
                    "title": "List to Tuple Conversion",
                    "description": "Write a program to convert a list to a tuple and print it.",
                    "difficulty": 1,
                    "level": "Basic",
                    "existingCode": "None",
                    "testCases": [
                      {
                        "condition": "The input list is [1, 2, 3], and the expected output after conversion is the tuple (1, 2, 3)."
                      },
                      {
                        "condition": "The input list is [10, 20, 30], and the expected output after conversion is the tuple (10, 20, 30)."
                      }
                    ],
                    "solutionExplanation": "Use `tuple()` to convert a list to a tuple.",
                    "language": "Python"
                  },
                  {
                    "questionNo": 37,
                    "title": "Tuple to List Conversion",
                    "description": "Write a program to convert a tuple to a list and print it.",
                    "difficulty": 1,
                    "level": "Basic",
                    "existingCode": "None",
                    "testCases": [
                      {
                        "condition": "The input tuple is (1, 2, 3), and the expected output after conversion is the list [1, 2, 3]."
                      },
                      {
                        "condition": "The input tuple is (10, 20, 30), and the expected output after conversion is the list [10, 20, 30]."
                      }
                    ],
                    "solutionExplanation": "Use `list()` to convert a tuple to a list.",
                    "language": "Python"
                  },
                  {
                    "questionNo": 38,
                    "title": "List to Set Conversion",
                    "description": "Write a program to convert a list to a set and print it.",
                    "difficulty": 1,
                    "level": "Basic",
                    "existingCode": "None",
                    "testCases": [
                      {
                        "condition": "The input list is [1, 2, 3], and the expected output after conversion is the set {1, 2, 3}."
                      },
                      {
                        "condition": "The input list is [10, 10, 20, 30], and the expected output after conversion is the set {10, 20, 30}."
                      }
                    ],
                    "solutionExplanation": "Use `set()` to convert a list to a set.",
                    "language": "Python"
                  },
                  {
                    "questionNo": 39,
                    "title": "Set to List Conversion",
                    "description": "Write a program to convert a set to a list and print it.",
                    "difficulty": 1,
                    "level": "Basic",
                    "existingCode": "None",
                    "testCases": [
                      {
                        "condition": "The input set is {1, 2, 3}, and the expected output after conversion is the list [1, 2, 3]."
                      },
                      {
                        "condition": "The input set is {10, 20, 30}, and the expected output after conversion is the list [10, 20, 30]."
                      }
                    ],
                    "solutionExplanation": "Use `list()` to convert a set to a list.",
                    "language": "Python"
                  },
                  
                    {
                        "questionNo": 40,
                        "title": "String to Boolean Conversion",
                        "description": "Write a program to convert a string to a boolean value and print it.",
                        "difficulty": 1,
                        "level": "Basic",
                        "existingCode": "None",
                        "testCases": [
                          {
                            "condition": "The input string is 'True', and the expected output after conversion is boolean True."
                          },
                          {
                            "condition": "The input string is 'False', and the expected output after conversion is boolean False."
                          }
                        ],
                        "solutionExplanation": "Use `bool()` to convert a string to a boolean.",
                        "language": "Python"
                      },
                      {
                        "questionNo": 41,
                        "title": "Boolean to String Conversion",
                        "description": "Write a program to convert a boolean value to a string and print it.",
                        "difficulty": 1,
                        "level": "Basic",
                        "existingCode": "None",
                        "testCases": [
                          {
                            "condition": "The input boolean is True, and the expected output after conversion is the string 'True'."
                          },
                          {
                            "condition": "The input boolean is False, and the expected output after conversion is the string 'False'."
                          }
                        ],
                        "solutionExplanation": "Use `str()` to convert a boolean to a string.",
                        "language": "Python"
                      },
                      {
                        "questionNo": 42,
                        "title": "Integer to Binary Conversion",
                        "description": "Write a program to convert an integer to its binary equivalent and print it.",
                        "difficulty": 1,
                        "level": "Basic",
                        "existingCode": "None",
                        "testCases": [
                          {
                            "condition": "The input integer is 5, and the expected output after conversion is the binary string '0b101'."
                          },
                          {
                            "condition": "The input integer is 10, and the expected output after conversion is the binary string '0b1010'."
                          }
                        ],
                        "solutionExplanation": "Use `bin()` to convert an integer to its binary form.",
                        "language": "Python"
                      },
                      {
                        "questionNo": 43,
                        "title": "Integer to Hexadecimal Conversion",
                        "description": "Write a program to convert an integer to its hexadecimal equivalent and print it.",
                        "difficulty": 1,
                        "level": "Basic",
                        "existingCode": "None",
                        "testCases": [
                          {
                            "condition": "The input integer is 255, and the expected output after conversion is the hexadecimal string '0xff'."
                          },
                          {
                            "condition": "The input integer is 16, and the expected output after conversion is the hexadecimal string '0x10'."
                          }
                        ],
                        "solutionExplanation": "Use `hex()` to convert an integer to its hexadecimal form.",
                        "language": "Python"
                      },
                      {
                        "questionNo": 44,
                        "title": "String to Binary Conversion",
                        "description": "Write a program to convert a string to its binary equivalent and print it.",
                        "difficulty": 1,
                        "level": "Basic",
                        "existingCode": "None",
                        "testCases": [
                          {
                            "condition": "The input string is 'A', and the expected output after conversion is the binary string '01000001'."
                          },
                          {
                            "condition": "The input string is 'Hello', and the expected output after conversion is the binary string '0100100001100101011011000110110001101111'."
                          }
                        ],
                        "solutionExplanation": "Use `format(ord(char), '08b')` to convert each character in a string to its binary representation.",
                        "language": "Python"
                      },
                      {
                        "questionNo": 45,
                        "title": "Hexadecimal to Integer Conversion",
                        "description": "Write a program to convert a hexadecimal string to its integer equivalent and print it.",
                        "difficulty": 1,
                        "level": "Basic",
                        "existingCode": "None",
                        "testCases": [
                          {
                            "condition": "The input hexadecimal string is '0xff', and the expected output after conversion is the integer 255."
                          },
                          {
                            "condition": "The input hexadecimal string is '0x10', and the expected output after conversion is the integer 16."
                          }
                        ],
                        "solutionExplanation": "Use `int()` with base 16 to convert a hexadecimal string to an integer.",
                        "language": "Python"
                      },
                      {
                        "questionNo": 46,
                        "title": "MCQ: Integer to String Conversion",
                        "description": "What function is used to convert an integer to a string in Python?",
                        "difficulty": 1,
                        "level": "Basic",
                        "mcqOptions": [
                          "a) str()",
                          "b) int()",
                          "c) float()",
                          "d) bin()"
                        ],
                        "correctAnswer": "a) str()",
                        "language": "Python"
                      },
                      {
                        "questionNo": 47,
                        "title": "MCQ: String to Integer Conversion",
                        "description": "Which function is used to convert a string to an integer in Python?",
                        "difficulty": 1,
                        "level": "Basic",
                        "mcqOptions": [
                          "a) str()",
                          "b) int()",
                          "c) float()",
                          "d) list()"
                        ],
                        "correctAnswer": "b) int()",
                        "language": "Python"
                      },
                      {
                        "questionNo": 48,
                        "title": "MCQ: List to Tuple Conversion",
                        "description": "Which function is used to convert a list to a tuple in Python?",
                        "difficulty": 1,
                        "level": "Basic",
                        "mcqOptions": [
                          "a) tuple()",
                          "b) list()",
                          "c) set()",
                          "d) dict()"
                        ],
                        "correctAnswer": "a) tuple()",
                        "language": "Python"
                      },
                      {
                        "questionNo": 49,
                        "title": "MCQ: Float to Integer Conversion",
                        "description": "What is the result of converting 5.7 to an integer in Python?",
                        "difficulty": 1,
                        "level": "Basic",
                        "mcqOptions": [
                          "a) 6",
                          "b) 5",
                          "c) 5.7",
                          "d) None"
                        ],
                        "correctAnswer": "b) 5",
                        "language": "Python"
                      },
                      
                        {
                            "questionNo": 50,
                            "title": "MCQ: String to Boolean Conversion",
                            "description": "What is the output of converting the string 'True' to a boolean in Python?",
                            "difficulty": 1,
                            "level": "Basic",
                            "mcqOptions": [
                              "a) True",
                              "b) False",
                              "c) 'True'",
                              "d) 'False'"
                            ],
                            "correctAnswer": "a) True",
                            "language": "Python",
                            "testCases": [
                              {
                                "condition": "The input string is 'True', and the expected output after conversion is boolean True."
                              }
                            ]
                          },
                          {
                            "questionNo": 51,
                            "title": "Code Optimization: Integer to String Conversion",
                            "description": "Optimize the following code for converting an integer to a string.\nCode:\n`num = 100`\n`str_num = '' + num`",
                            "difficulty": 1,
                            "level": "Basic",
                            "existingCode": "num = 100\nstr_num = '' + num",
                            "optimizedCode": "str_num = str(num)",
                            "solutionExplanation": "The `str()` function is the most efficient way to convert an integer to a string.",
                            "language": "Python",
                            "testCases": [
                              {
                                "condition": "The input integer is 100, and the expected output after conversion is '100'."
                              }
                            ]
                          },
                          {
                            "questionNo": 52,
                            "title": "Code Optimization: String to Integer Conversion",
                            "description": "Optimize the following code for converting a string to an integer.\nCode:\n`str_num = '25'`\n`int_num = str_num - '0'`",
                            "difficulty": 1,
                            "level": "Basic",
                            "existingCode": "str_num = '25'\nint_num = str_num - '0'",
                            "optimizedCode": "int_num = int(str_num)",
                            "solutionExplanation": "The `int()` function is the correct and optimized way to convert a string to an integer.",
                            "language": "Python",
                            "testCases": [
                              {
                                "condition": "The input string is '25', and the expected output after conversion is the integer 25."
                              }
                            ]
                          },
                          {
                            "questionNo": 53,
                            "title": "Code Optimization: List to Set Conversion",
                            "description": "Optimize the following code for converting a list to a set.\nCode:\n`lst = [1, 2, 2, 3, 4]`\n`set_lst = {}`\n`for i in lst:`\n`    set_lst.add(i)`",
                            "difficulty": 1,
                            "level": "Intermediate",
                            "existingCode": "lst = [1, 2, 2, 3, 4]\nset_lst = {}\nfor i in lst:\n    set_lst.add(i)",
                            "optimizedCode": "set_lst = set(lst)",
                            "solutionExplanation": "The `set()` function is optimized to convert a list to a set.",
                            "language": "Python",
                            "testCases": [
                              {
                                "condition": "The input list is [1, 2, 2, 3, 4], and the expected output after conversion is the set {1, 2, 3, 4}."
                              }
                            ]
                          },
                          {
                            "questionNo": 54,
                            "title": "Code Optimization: String to Binary Conversion",
                            "description": "Optimize the following code for converting a string to binary.\nCode:\n`str_input = 'A'`\n`binary_input = ''.join(format(ord(c), '08b') for c in str_input)`",
                            "difficulty": 1,
                            "level": "Intermediate",
                            "existingCode": "str_input = 'A'\nbinary_input = ''.join(format(ord(c), '08b') for c in str_input)",
                            "optimizedCode": "binary_input = ''.join(format(ord(c), '08b') for c in str_input)",
                            "solutionExplanation": "The code is already efficient. `join()` is optimal for creating binary representations.",
                            "language": "Python",
                            "testCases": [
                              {
                                "condition": "The input string is 'A', and the expected output after conversion is the binary string '01000001'."
                              }
                            ]
                          },
                          {
                            "questionNo": 55,
                            "title": "Code Optimization: Tuple to List Conversion",
                            "description": "Optimize the following code for converting a tuple to a list.\nCode:\n`tuple_data = (1, 2, 3)`\n`list_data = []`\n`for i in tuple_data:`\n`    list_data.append(i)`",
                            "difficulty": 1,
                            "level": "Intermediate",
                            "existingCode": "tuple_data = (1, 2, 3)\nlist_data = []\nfor i in tuple_data:\n    list_data.append(i)",
                            "optimizedCode": "list_data = list(tuple_data)",
                            "solutionExplanation": "The `list()` function is the simplest and most efficient way to convert a tuple to a list.",
                            "language": "Python",
                            "testCases": [
                              {
                                "condition": "The input tuple is (1, 2, 3), and the expected output after conversion is the list [1, 2, 3]."
                              }
                            ]
                          },
                          {
                            "questionNo": 56,
                            "title": "Error Correction: String to Integer Conversion",
                            "description": "Identify and correct the error in the following code.\nCode:\n`str_num = '123abc'`\n`num = int(str_num)`",
                            "difficulty": 1,
                            "level": "Basic",
                            "existingCode": "str_num = '123abc'\nnum = int(str_num)",
                            "correctedCode": "str_num = '123abc'\ntry:\n    num = int(str_num)\nexcept ValueError:\n    num = None",
                            "solutionExplanation": "This code raises a `ValueError` because the string contains non-numeric characters. A try-except block should handle such cases.",
                            "language": "Python",
                            "testCases": [
                              {
                                "condition": "The input string is '123abc', and since it contains non-numeric characters, the expected output should be None after handling the exception."
                              }
                            ]
                          },
                          {
                            "questionNo": 57,
                            "title": "Error Correction: Integer to Float Conversion",
                            "description": "Identify and correct the error in the following code.\nCode:\n`num = 5`\n`num_float = num.to_float()`",
                            "difficulty": 1,
                            "level": "Basic",
                            "existingCode": "num = 5\nnum_float = num.to_float()",
                            "correctedCode": "num = 5\nnum_float = float(num)",
                            "solutionExplanation": "Python does not have a `to_float()` method. Use `float()` for conversion.",
                            "language": "Python",
                            "testCases": [
                              {
                                "condition": "The input integer is 5, and the expected output after conversion is 5.0."
                              }
                            ]
                          },
                          {
                            "questionNo": 58,
                            "title": "Error Correction: List to Set Conversion",
                            "description": "Identify and correct the error in the following code.\nCode:\n`lst = [1, 2, 2, 3, 4]`\n`set_lst = set(lst)`\n`set_lst.add(5)`\n`set_lst.add(2)`",
                            "difficulty": 1,
                            "level": "Intermediate",
                            "existingCode": "lst = [1, 2, 2, 3, 4]\nset_lst = set(lst)\nset_lst.add(5)\nset_lst.add(2)",
                            "correctedCode": "lst = [1, 2, 2, 3, 4]\nset_lst = set(lst)\nset_lst.add(5)",
                            "solutionExplanation": "The `add()` method will not add a duplicate value to the set. The second `add(2)` is redundant.",
                            "language": "Python",
                            "testCases": [
                              {
                                "condition": "The input list is [1, 2, 2, 3, 4], and after adding 5, the expected output set is {1, 2, 3, 4, 5}."
                              }
                            ]
                          },
                          {
                            "questionNo": 59,
                            "title": "Error Correction: Hexadecimal to Integer Conversion",
                            "description": "Identify and correct the error in the following code.\nCode:\n`hex_num = '0x123'`\n`int_num = int(hex_num, 10)`",
                            "difficulty": 1,
                            "level": "Intermediate",
                            "existingCode": "hex_num = '0x123'\nint_num = int(hex_num, 10)",
                            "correctedCode": "hex_num = '0x123'\nint_num = int(hex_num, 16)",
                            "solutionExplanation": "Hexadecimal numbers should be converted using base 16, not 10.",
                            "language": "Python",
                            "testCases": [
                              {
                                "condition": "The input hexadecimal string is '0x123', and the expected output after conversion is the integer 291."
                              }
                            ]
                          },
                          
                        {
                            "questionNo": 60,
                            "title": "Error Correction: Boolean to String Conversion",
                            "description": "Identify and correct the error in the following code.\nCode:\n`bool_val = True`\n`str_bool = bool_val.str()`",
                            "difficulty": 1,
                            "level": "Expert",
                            "existingCode": "bool_val = True\nstr_bool = bool_val.str()",
                            "correctedCode": "bool_val = True\nstr_bool = str(bool_val)",
                            "solutionExplanation": "The `bool` type does not have a `str()` method. Use `str()` function to convert a boolean to a string.",
                            "language": "Python",
                            "testCases": [
                              {
                                "condition": "The input boolean value is True, and the expected output after conversion is 'True'."
                              }
                            ]
                          },
                          {
                            "questionNo": 61,
                            "title": "MCQ: Basic if Statement",
                            "description": "Which of the following is the correct syntax for an if statement in Python?",
                            "difficulty": 1,
                            "level": "Basic",
                            "mcqOptions": [
                              "a) if x > 10 then",
                              "b) if (x > 10):",
                              "c) if x > 10:",
                              "d) if x > 10 then:"
                            ],
                            "correctAnswer": "c) if x > 10:",
                            "language": "Python",
                            "testCases": [
                              {
                                "condition": "Given x = 15, the expected output is that the condition `x > 10` is True."
                              }
                            ]
                          },
                          {
                            "questionNo": 62,
                            "title": "MCQ: Using elif",
                            "description": "Which statement correctly uses the elif keyword in Python?",
                            "difficulty": 1,
                            "level": "Basic",
                            "mcqOptions": [
                              "a) if x == 1: elif x == 2:",
                              "b) if x == 1: elif x == 2 else:",
                              "c) if x == 1: elif x == 2:",
                              "d) elif x == 1: if x == 2:"
                            ],
                            "correctAnswer": "c) if x == 1: elif x == 2:",
                            "language": "Python",
                            "testCases": [
                              {
                                "condition": "Given x = 1 and y = 2, the expected output should execute the first condition, checking if `x == 1`, and then check `elif x == 2`."
                              }
                            ]
                          },
                          {
                            "questionNo": 63,
                            "title": "MCQ: else Statement",
                            "description": "What is the purpose of the else statement in Python?",
                            "difficulty": 1,
                            "level": "Basic",
                            "mcqOptions": [
                              "a) Executes when the if statement is true",
                              "b) Executes when the if statement is false",
                              "c) Executes only when elif conditions are true",
                              "d) None of the above"
                            ],
                            "correctAnswer": "b) Executes when the if statement is false",
                            "language": "Python",
                            "testCases": [
                              {
                                "condition": "Given x = 5, the expected output is that the else block executes when `x == 5` and the `if` condition fails."
                              }
                            ]
                          },
                          {
                            "questionNo": 64,
                            "title": "MCQ: Nested if Statements",
                            "description": "Which of the following is an example of a nested if statement in Python?",
                            "difficulty": 1,
                            "level": "Intermediate",
                            "mcqOptions": [
                              "a) if x > 10: if y < 5:",
                              "b) if x > 10: elif y < 5:",
                              "c) if x > 10 else if y < 5:",
                              "d) if x > 10 and y < 5:"
                            ],
                            "correctAnswer": "a) if x > 10: if y < 5:",
                            "language": "Python",
                            "testCases": [
                              {
                                "condition": "Given x = 15 and y = 3, the expected output should execute both conditions `x > 10` and `y < 5`."
                              }
                            ]
                          },
                          {
                            "questionNo": 65,
                            "title": "MCQ: Elif vs if",
                            "description": "What is the key difference between an if and an elif statement in Python?",
                            "difficulty": 1,
                            "level": "Intermediate",
                            "mcqOptions": [
                              "a) elif is used after an if block to check another condition",
                              "b) elif can replace the if statement",
                              "c) elif always executes first",
                              "d) There is no difference between if and elif"
                            ],
                            "correctAnswer": "a) elif is used after an if block to check another condition",
                            "language": "Python",
                            "testCases": [
                              {
                                "condition": "Given x = 5, the expected output should execute the `if` block, and if x were greater than 10, it would check the `elif` condition."
                              }
                            ]
                          },
                          {
                            "questionNo": 66,
                            "title": "Code Optimization: Nested if Statements",
                            "description": "Optimize the following nested if statement.\nCode:\n`if x > 5:`\n`    if y > 10:`\n`        print('Both conditions met')`",
                            "difficulty": 1,
                            "level": "Basic",
                            "existingCode": "if x > 5:\n    if y > 10:\n        print('Both conditions met')",
                            "optimizedCode": "if x > 5 and y > 10:\n    print('Both conditions met')",
                            "solutionExplanation": "Combining the two conditions into a single if statement improves readability and performance.",
                            "language": "Python",
                            "testCases": [
                              {
                                "condition": "Given x = 6 and y = 12, the expected output is 'Both conditions met'."
                              }
                            ]
                          },
                          {
                            "questionNo": 67,
                            "title": "Code Optimization: Multiple if Statements",
                            "description": "Optimize the following code by removing redundant if conditions.\nCode:\n`if x > 10:`\n`    print('x is greater than 10')`\n`if x < 10:`\n`    print('x is less than 10')`\n`if x == 10:`\n`    print('x is equal to 10')`",
                            "difficulty": 1,
                            "level": "Basic",
                            "existingCode": "if x > 10:\n    print('x is greater than 10')\nif x < 10:\n    print('x is less than 10')\nif x == 10:\n    print('x is equal to 10')",
                            "optimizedCode": "if x > 10:\n    print('x is greater than 10')\nelif x < 10:\n    print('x is less than 10')\nelse:\n    print('x is equal to 10')",
                            "solutionExplanation": "Using `elif` and `else` simplifies the code by eliminating redundant checks.",
                            "language": "Python",
                            "testCases": [
                              {
                                "condition": "Given x = 10, the expected output is 'x is equal to 10'."
                              }
                            ]
                          },
                          {
                            "questionNo": 68,
                            "title": "Code Optimization: Complex Conditional Statements",
                            "description": "Optimize the following code.\nCode:\n`if x > 10:`\n`    if y > 10:`\n`        if z > 10:`\n`            print('All conditions met')`",
                            "difficulty": 1,
                            "level": "Intermediate",
                            "existingCode": "if x > 10:\n    if y > 10:\n        if z > 10:\n            print('All conditions met')",
                            "optimizedCode": "if x > 10 and y > 10 and z > 10:\n    print('All conditions met')",
                            "solutionExplanation": "Combining all conditions into a single `if` statement makes the code more concise and efficient.",
                            "language": "Python",
                            "testCases": [
                              {
                                "condition": "Given x = 12, y = 15, and z = 20, the expected output is 'All conditions met'."
                              }
                            ]
                          },
                          {
                            "questionNo": 69,
                            "title": "Code Optimization: Redundant Elif Statements",
                            "description": "Optimize the following code with redundant `elif` conditions.\nCode:\n`if x > 5:`\n`    print('x is greater than 5')`\n`elif x > 10:`\n`    print('x is greater than 10')`",
                            "difficulty": 1,
                            "level": "Intermediate",
                            "existingCode": "if x > 5:\n    print('x is greater than 5')\nelif x > 10:\n    print('x is greater than 10')",
                            "optimizedCode": "if x > 10:\n    print('x is greater than 10')\nelif x > 5:\n    print('x is greater than 5')",
                            "solutionExplanation": "The second condition `x > 10` is redundant in the original code. Reversing the order eliminates the redundancy.",
                            "language": "Python",
                            "testCases": [
                              {
                                "condition": "Given x = 12, the expected output is 'x is greater than 10'."
                              }
                            ]
                          },
                          
                            {
                                "questionNo": 70,
                                "title": "Code Optimization: Complex Nested Conditions",
                                "description": "Optimize the following complex conditional statement.\nCode:\n`if x > 10:`\n`    if y > 5:`\n`        if z == 0:`\n`            print('Complex condition met')`",
                                "difficulty": 1,
                                "level": "Expert",
                                "existingCode": "if x > 10:\n    if y > 5:\n        if z == 0:\n            print('Complex condition met')",
                                "optimizedCode": "if x > 10 and y > 5 and z == 0:\n    print('Complex condition met')",
                                "solutionExplanation": "Condensing the conditions into a single `if` statement improves readability and reduces unnecessary nesting.",
                                "language": "Python",
                                "testCases": [
                                  {
                                    "condition": "The input values are x = 15, y = 6, z = 0, and the expected output is 'Complex condition met'."
                                  }
                                ]
                              },
                              {
                                "questionNo": 71,
                                "title": "Error Correction: Missing Else",
                                "description": "Identify and correct the error in the following code.\nCode:\n`if x == 10:`\n`    print('x is 10')`\n`print('x is not 10')`",
                                "difficulty": 1,
                                "level": "Basic",
                                "existingCode": "if x == 10:\n    print('x is 10')\nprint('x is not 10')",
                                "correctedCode": "if x == 10:\n    print('x is 10')\nelse:\n    print('x is not 10')",
                                "solutionExplanation": "The `else` block is required to execute when `x` is not equal to 10.",
                                "language": "Python",
                                "testCases": [
                                  {
                                    "condition": "The input value is x = 10, and the expected output is 'x is 10'."
                                  },
                                  {
                                    "condition": "The input value is x = 5, and the expected output is 'x is not 10'."
                                  }
                                ]
                              },
                              {
                                "questionNo": 72,
                                "title": "Error Correction: Invalid elif Condition",
                                "description": "Identify and correct the error in the following code.\nCode:\n`if x == 10:`\n`    print('x is 10')`\n`elif x > 5:`\n`    print('x is greater than 5')`",
                                "difficulty": 1,
                                "level": "Basic",
                                "existingCode": "if x == 10:\n    print('x is 10')\nelif x > 5:\n    print('x is greater than 5')",
                                "correctedCode": "if x == 10:\n    print('x is 10')\nelif x > 5:\n    print('x is greater than 5')\nelse:\n    print('x is less than or equal to 5')",
                                "solutionExplanation": "The `else` statement should be added to cover the case where `x` is not greater than 5.",
                                "language": "Python",
                                "testCases": [
                                  {
                                    "condition": "The input value is x = 6, and the expected output is 'x is greater than 5'."
                                  },
                                  {
                                    "condition": "The input value is x = 3, and the expected output is 'x is less than or equal to 5'."
                                  }
                                ]
                              },
                              {
                                "questionNo": 73,
                                "title": "Error Correction: Misplaced elif",
                                "description": "Identify and correct the error in the following code.\nCode:\n`if x == 5:`\n`    print('x is 5')`\n`elif x == 10:`\n`    print('x is 10')`\n`else:`\n`    print('x is not 5 or 10')`",
                                "difficulty": 1,
                                "level": "Intermediate",
                                "existingCode": "if x == 5:\n    print('x is 5')\nelif x == 10:\n    print('x is 10')\nelse:\n    print('x is not 5 or 10')",
                                "correctedCode": "if x == 5:\n    print('x is 5')\nelif x == 10:\n    print('x is 10')\nelse:\n    print('x is neither 5 nor 10')",
                                "solutionExplanation": "The logic in the `else` statement was not appropriately worded. It should state that `x` is neither 5 nor 10.",
                                "language": "Python",
                                "testCases": [
                                  {
                                    "condition": "The input value is x = 5, and the expected output is 'x is 5'."
                                  },
                                  {
                                    "condition": "The input value is x = 10, and the expected output is 'x is 10'."
                                  },
                                  {
                                    "condition": "The input value is x = 3, and the expected output is 'x is neither 5 nor 10'."
                                  }
                                ]
                              },
                              {
                                "questionNo": 74,
                                "title": "Error Correction: Incorrect Nested if",
                                "description": "Identify and correct the error in the following code.\nCode:\n`if x > 5:`\n`    if y < 10:`\n`        print('Conditions met')`\n`else:`\n`        print('Second condition failed')`",
                                "difficulty": 1,
                                "level": "Intermediate",
                                "existingCode": "if x > 5:\n    if y < 10:\n        print('Conditions met')\nelse:\n    print('Second condition failed')",
                                "correctedCode": "if x > 5:\n    if y < 10:\n        print('Conditions met')\n    else:\n        print('y is not less than 10')",
                                "solutionExplanation": "The `else` block should be inside the nested `if` to correctly handle the failure of the inner condition.",
                                "language": "Python",
                                "testCases": [
                                  {
                                    "condition": "The input values are x = 6 and y = 8, and the expected output is 'Conditions met'."
                                  },
                                  {
                                    "condition": "The input values are x = 6 and y = 12, and the expected output is 'y is not less than 10'."
                                  }
                                ]
                              },
                              {
                                "questionNo": 75,
                                "title": "Error Correction: Invalid Comparison",
                                "description": "Identify and correct the error in the following code.\nCode:\n`if x = 5:`\n`    print('x is 5')`",
                                "difficulty": 1,
                                "level": "Expert",
                                "existingCode": "if x = 5:\n    print('x is 5')",
                                "correctedCode": "if x == 5:\n    print('x is 5')",
                                "solutionExplanation": "In Python, `==` is used for comparison, while `=` is used for assignment.",
                                "language": "Python",
                                "testCases": [
                                  {
                                    "condition": "The input value is x = 5, and the expected output is 'x is 5'."
                                  }
                                ]
                              },
                              {
                                "questionNo": 76,
                                "title": "MCQ: Using a for loop",
                                "description": "Which of the following is the correct syntax for a `for` loop in Python?",
                                "difficulty": 1,
                                "level": "Basic",
                                "mcqOptions": [
                                  "a) for i in range(5):",
                                  "b) for (i = 0; i < 5; i++):",
                                  "c) for i = 0; i < 5; i++ {",
                                  "d) for i in 0 to 5:"
                                ],
                                "correctAnswer": "a) for i in range(5):",
                                "language": "Python",
                                "testCases": []
                              },
                              {
                                "questionNo": 77,
                                "title": "MCQ: While Loop",
                                "description": "What will the following code output?\n`i = 0`\n`while i < 5:`\n`    print(i)`\n`    i += 1`",
                                "difficulty": 1,
                                "level": "Basic",
                                "mcqOptions": [
                                  "a) 0 1 2 3 4",
                                  "b) 1 2 3 4 5",
                                  "c) 5",
                                  "d) Infinite loop"
                                ],
                                "correctAnswer": "a) 0 1 2 3 4",
                                "language": "Python",
                                "testCases": []
                              },
                              {
                                "questionNo": 78,
                                "title": "MCQ: Break Statement",
                                "description": "What is the effect of the `break` statement inside a loop?",
                                "difficulty": 1,
                                "level": "Basic",
                                "mcqOptions": [
                                  "a) It terminates the loop and continues with the next iteration.",
                                  "b) It exits the loop entirely.",
                                  "c) It skips the next iteration of the loop.",
                                  "d) None of the above"
                                ],
                                "correctAnswer": "b) It exits the loop entirely.",
                                "language": "Python",
                                "testCases": []
                              },
                              {
                                "questionNo": 79,
                                "title": "MCQ: Continue Statement",
                                "description": "What does the `continue` statement do in a loop?",
                                "difficulty": 1,
                                "level": "Basic",
                                "mcqOptions": [
                                  "a) It stops the loop.",
                                  "b) It skips the current iteration and moves to the next iteration.",
                                  "c) It repeats the loop from the beginning.",
                                  "d) It breaks out of the loop."
                                ],
                                "correctAnswer": "b) It skips the current iteration and moves to the next iteration.",
                                "language": "Python",
                                "testCases": []
                              },
                              
                                
                                    {
                                      "questionNo": 80,
                                      "title": "MCQ: Pass Statement",
                                      "description": "What is the purpose of the `pass` statement in Python?",
                                      "difficulty": 1,
                                      "level": "Basic",
                                      "mcqOptions": [
                                        "a) It does nothing and acts as a placeholder for future code.",
                                        "b) It stops the execution of a loop.",
                                        "c) It raises an exception.",
                                        "d) None of the above"
                                      ],
                                      "correctAnswer": "a) It does nothing and acts as a placeholder for future code.",
                                      "language": "Python",
                                      "testCases": [
                                        {
                                          "condition": "The purpose of the `pass` statement is to act as a placeholder when no action is required."
                                        }
                                      ]
                                    },
                                    {
                                      "questionNo": 81,
                                      "title": "Code Optimization: Simplifying a for loop",
                                      "description": "Optimize the following code by reducing unnecessary loops:\nCode:\n`for i in range(10):`\n`    for j in range(5):`\n`        print(i, j)`",
                                      "difficulty": 1,
                                      "level": "Basic",
                                      "existingCode": "for i in range(10):\n    for j in range(5):\n        print(i, j)",
                                      "optimizedCode": "for i in range(10):\n    print(i, list(range(5)))",
                                      "solutionExplanation": "You can simplify the inner loop by printing the entire range at once, reducing complexity.",
                                      "language": "Python",
                                      "testCases": [
                                        {
                                          "condition": "For an input list of `range(10)` and `range(5)`, the expected output is a list of pairs printed for each value of `i`."
                                        }
                                      ]
                                    },
                                    {
                                      "questionNo": 82,
                                      "title": "Code Optimization: Using continue effectively",
                                      "description": "Optimize the following code that uses `continue` for skipping even numbers:\nCode:\n`for i in range(10):`\n`    if i % 2 == 0:`\n`        continue`\n`    print(i)`",
                                      "difficulty": 1,
                                      "level": "Basic",
                                      "existingCode": "for i in range(10):\n    if i % 2 == 0:\n        continue\n    print(i)",
                                      "optimizedCode": "for i in range(1, 10, 2):\n    print(i)",
                                      "solutionExplanation": "You can use `range(1, 10, 2)` to iterate only over odd numbers, eliminating the need for `continue`.",
                                      "language": "Python",
                                      "testCases": [
                                        {
                                          "condition": "For input `range(10)`, the expected output is a sequence of odd numbers from 1 to 9."
                                        }
                                      ]
                                    },
                                    {
                                      "questionNo": 83,
                                      "title": "Code Optimization: Using break in loops",
                                      "description": "Optimize the following loop that uses `break`:\nCode:\n`for i in range(10):`\n`    if i == 5:`\n`        break`\n`    print(i)`",
                                      "difficulty": 1,
                                      "level": "Basic",
                                      "existingCode": "for i in range(10):\n    if i == 5:\n        break\n    print(i)",
                                      "optimizedCode": "for i in range(5):\n    print(i)",
                                      "solutionExplanation": "Instead of checking for `i == 5` and using `break`, you can directly limit the loop to `range(5)`.",
                                      "language": "Python",
                                      "testCases": [
                                        {
                                          "condition": "For input `range(10)`, the expected output is the numbers from 0 to 4, as the loop terminates before reaching 5."
                                        }
                                      ]
                                    },
                                    {
                                      "questionNo": 84,
                                      "title": "Code Optimization: Nested Loop Reduction",
                                      "description": "Optimize the following code with nested loops:\nCode:\n`for i in range(10):`\n`    for j in range(10):`\n`        if i == j:`\n`            print(i, j)`",
                                      "difficulty": 1,
                                      "level": "Intermediate",
                                      "existingCode": "for i in range(10):\n    for j in range(10):\n        if i == j:\n            print(i, j)",
                                      "optimizedCode": "for i in range(10):\n    print(i, i)",
                                      "solutionExplanation": "The condition `if i == j` can be simplified by iterating over `i` and directly printing `i, i`.",
                                      "language": "Python",
                                      "testCases": [
                                        {
                                          "condition": "For input `range(10)`, the expected output is a series of pairs `(i, i)` where `i` ranges from 0 to 9."
                                        }
                                      ]
                                    },
                                    {
                                      "questionNo": 85,
                                      "title": "Code Optimization: Reducing redundant checks",
                                      "description": "Optimize the following code that uses `continue` and `break` statements in a loop:\nCode:\n`for i in range(10):`\n`    if i % 2 == 0:`\n`        continue`\n`    if i == 7:`\n`        break`\n`    print(i)`",
                                      "difficulty": 1,
                                      "level": "Intermediate",
                                      "existingCode": "for i in range(10):\n    if i % 2 == 0:\n        continue\n    if i == 7:\n        break\n    print(i)",
                                      "optimizedCode": "for i in range(1, 8, 2):\n    print(i)",
                                      "solutionExplanation": "You can optimize the code by directly iterating over the desired range and eliminating redundant checks.",
                                      "language": "Python",
                                      "testCases": [
                                        {
                                          "condition": "For input `range(10)`, the expected output is a series of odd numbers up to 7."
                                        }
                                      ]
                                    },
                                    {
                                      "questionNo": 86,
                                      "title": "Problem Solving: Summing Even Numbers",
                                      "description": "Write a program that sums all even numbers between 1 and 100 using a `for` loop.",
                                      "difficulty": 1,
                                      "level": "Basic",
                                      "solutionExplanation": "Use a loop to iterate over the range and check for even numbers, adding them to a sum variable.",
                                      "language": "Python",
                                      "testCases": [
                                        {
                                          "condition": "The input is the range from 1 to 100, and the expected output is the sum of all even numbers within this range."
                                        }
                                      ]
                                    },
                                    {
                                      "questionNo": 87,
                                      "title": "Problem Solving: Printing a Pattern",
                                      "description": "Write a program that prints the following pattern using a `while` loop:\n```\n*\n**\n***\n****\n*****\n```",
                                      "difficulty": 1,
                                      "level": "Basic",
                                      "solutionExplanation": "Use a `while` loop to print stars based on the loop counter, increasing the number of stars each time.",
                                      "language": "Python",
                                      "testCases": [
                                        {
                                          "condition": "For input range, the expected output is a pattern of stars with increasing counts per line."
                                        }
                                      ]
                                    },
                                    {
                                      "questionNo": 88,
                                      "title": "Problem Solving: FizzBuzz",
                                      "description": "Write a program that prints numbers from 1 to 100, but for multiples of 3, print 'Fizz' instead of the number, and for multiples of 5, print 'Buzz'. For numbers that are multiples of both 3 and 5, print 'FizzBuzz'.",
                                      "difficulty": 1,
                                      "level": "Intermediate",
                                      "solutionExplanation": "Use a `for` loop to check the divisibility of numbers by 3, 5, or both, and print the appropriate output.",
                                      "language": "Python",
                                      "testCases": [
                                        {
                                          "condition": "For input `range(1, 101)`, the expected output is numbers with substitutions for multiples of 3, 5, and both 3 and 5."
                                        }
                                      ]
                                    },
                                    {
                                      "questionNo": 89,
                                      "title": "Problem Solving: Counting Vowels in a String",
                                      "description": "Write a program that counts the number of vowels in a given string using a `for` loop.",
                                      "difficulty": 1,
                                      "level": "Intermediate",
                                      "solutionExplanation": "Use a `for` loop to iterate through the string and check if each character is a vowel (a, e, i, o, u).",
                                      "language": "Python",
                                      "testCases": [
                                        {
                                          "condition": "For input string 'hello', the expected output is 2 vowels."
                                        }
                                      ]
                                    },
                                    {
                                      "questionNo": 90,
                                      "title": "Problem Solving: Factorial Calculation",
                                      "description": "Write a program that calculates the factorial of a number using a `while` loop.",
                                      "difficulty": 1,
                                      "level": "Intermediate",
                                      "solutionExplanation": "Use a `while` loop to multiply the current number by the factorial of the previous number until you reach 1.",
                                      "language": "Python",
                                      "testCases": [
                                        {
                                          "condition": "For input `5`, the expected output is `120` as the factorial of 5 is 120."
                                        }
                                      ]
                                    },
                                    {
                                      "questionNo": 91,
                                      "title": "Error Correction: Infinite loop",
                                      "description": "Identify and correct the error in the following code.\nCode:\n`while x < 10:`\n`    print(x)`",
                                      "difficulty": 1,
                                      "level": "Basic",
                                      "existingCode": "while x < 10:\n    print(x)",
                                      "correctedCode": "while x < 10:\n    print(x)\n    x += 1",
                                      "solutionExplanation": "The original code would result in an infinite loop because `x` was not being updated. Adding `x += 1` ensures that the loop terminates.",
                                      "language": "Python",
                                      "testCases": [
                                        {
                                          "condition": "For input `x = 0`, the expected output is a series of numbers from 0 to 9."
                                        }
                                      ]
                                    },
                                    {
                                      "questionNo": 92,
                                      "title": "MCQ: List Index Out of Range Error",
                                      "description": "What will be the output of the following code?\n\n```python\nlist = [1, 2, 3]\nprint(list[5])\n```",
                                      "difficulty": 1,
                                      "level": "Basic",
                                      "mcqOptions": [
                                        "a) 3",
                                        "b) 2",
                                        "c) List index out of range error",
                                        "d) None"
                                      ],
                                      "correctAnswer": "c) List index out of range error",
                                      "language": "Python",
                                      "testCases": [
                                        {
                                          "condition": "For input `list = [1, 2, 3]`, the expected output is an index out of range error when accessing an index that doesn't exist."
                                        }
                                      ]
                                    },
                                      
                                    {
                                        "questionNo": 93,
                                        "title": "MCQ: Slicing a List",
                                        "description": "What is the output of the following code?\n\n```python\nlist = [1, 2, 3, 4, 5]\nprint(list[1:4])\n```",
                                        "difficulty": 1,
                                        "level": "Basic",
                                        "mcqOptions": [
                                          "a) [2, 3, 4]",
                                          "b) [1, 2, 3]",
                                          "c) [3, 4, 5]",
                                          "d) [2, 3, 4, 5]"
                                        ],
                                        "correctAnswer": "a) [2, 3, 4]",
                                        "language": "Python",
                                        "testCases": [
                                          {
                                            "condition": "The input list is [1, 2, 3, 4, 5], and the expected output is [2, 3, 4]."
                                          }
                                        ]
                                      },
                                      {
                                        "questionNo": 94,
                                        "title": "MCQ: Using append Method",
                                        "description": "What will be the output of the following code?\n\n```python\nlist = [1, 2, 3]\nlist.append(4)\nprint(list)\n```",
                                        "difficulty": 1,
                                        "level": "Basic",
                                        "mcqOptions": [
                                          "a) [1, 2, 3, 4]",
                                          "b) [1, 2, 4]",
                                          "c) [1, 3, 4]",
                                          "d) [4, 1, 2, 3]"
                                        ],
                                        "correctAnswer": "a) [1, 2, 3, 4]",
                                        "language": "Python",
                                        "testCases": [
                                          {
                                            "condition": "The input list is [1, 2, 3], and the expected output is [1, 2, 3, 4]."
                                          }
                                        ]
                                      },
                                      {
                                        "questionNo": 95,
                                        "title": "MCQ: Using pop Method",
                                        "description": "What is the result of the following code?\n\n```python\nlist = [1, 2, 3, 4]\nlist.pop(2)\nprint(list)\n```",
                                        "difficulty": 1,
                                        "level": "Basic",
                                        "mcqOptions": [
                                          "a) [1, 2, 4]",
                                          "b) [1, 2, 3]",
                                          "c) [2, 3, 4]",
                                          "d) [1, 3, 4]"
                                        ],
                                        "correctAnswer": "a) [1, 2, 4]",
                                        "language": "Python",
                                        "testCases": [
                                          {
                                            "condition": "The input list is [1, 2, 3, 4], and the expected output is [1, 2, 4]."
                                          }
                                        ]
                                      },
                                      {
                                        "questionNo": 96,
                                        "title": "MCQ: Using remove Method",
                                        "description": "What happens when the following code is executed?\n\n```python\nlist = [1, 2, 3, 4]\nlist.remove(3)\nprint(list)\n```",
                                        "difficulty": 1,
                                        "level": "Basic",
                                        "mcqOptions": [
                                          "a) [1, 2, 4]",
                                          "b) [1, 2, 3]",
                                          "c) [1, 3, 4]",
                                          "d) [2, 3, 4]"
                                        ],
                                        "correctAnswer": "a) [1, 2, 4]",
                                        "language": "Python",
                                        "testCases": [
                                          {
                                            "condition": "The input list is [1, 2, 3, 4], and the expected output is [1, 2, 4]."
                                          }
                                        ]
                                      },
                                      {
                                        "questionNo": 97,
                                        "title": "Code Optimization: Using append",
                                        "description": "Optimize the following code by combining operations.\nCode:\n\n```python\nlist = [1, 2, 3]\nlist.append(4)\nlist.append(5)\n```",
                                        "difficulty": 1,
                                        "level": "Basic",
                                        "existingCode": "list = [1, 2, 3]\nlist.append(4)\nlist.append(5)",
                                        "optimizedCode": "list = [1, 2, 3, 4, 5]",
                                        "solutionExplanation": "Appending multiple elements in separate statements can be optimized by adding them together in one statement.",
                                        "language": "Python",
                                        "testCases": [
                                          {
                                            "condition": "The input list is [1, 2, 3], and the expected output after optimization is [1, 2, 3, 4, 5]."
                                          }
                                        ]
                                      },
                                      {
                                        "questionNo": 98,
                                        "title": "Code Optimization: Removing Elements",
                                        "description": "Optimize the following code that uses pop and remove methods.\nCode:\n\n```python\nlist = [1, 2, 3, 4]\nlist.pop(2)\nlist.remove(3)\n```",
                                        "difficulty": 1,
                                        "level": "Basic",
                                        "existingCode": "list = [1, 2, 3, 4]\nlist.pop(2)\nlist.remove(3)",
                                        "optimizedCode": "list = [1, 2, 4]",
                                        "solutionExplanation": "Both pop and remove are removing the same element. The optimized code directly removes the element in one step.",
                                        "language": "Python",
                                        "testCases": [
                                          {
                                            "condition": "The input list is [1, 2, 3, 4], and the expected output after optimization is [1, 2, 4]."
                                          }
                                        ]
                                      },
                                      {
                                        "questionNo": 99,
                                        "title": "Code Optimization: Slicing",
                                        "description": "Optimize the following code using slicing.\nCode:\n\n```python\nlist = [1, 2, 3, 4, 5]\nresult = []\nfor i in range(1, 4):\n    result.append(list[i])\n```",
                                        "difficulty": 1,
                                        "level": "Basic",
                                        "existingCode": "list = [1, 2, 3, 4, 5]\nresult = []\nfor i in range(1, 4):\n    result.append(list[i])",
                                        "optimizedCode": "list = [1, 2, 3, 4, 5]\nresult = list[1:4]",
                                        "solutionExplanation": "Using list slicing is more efficient and concise than using a loop to append elements.",
                                        "language": "Python",
                                        "testCases": [
                                          {
                                            "condition": "The input list is [1, 2, 3, 4, 5], and the expected output after optimization is [2, 3, 4]."
                                          }
                                        ]
                                      },
                                      {
                                        "questionNo": 100,
                                        "title": "Code Optimization: Indexing and Removing",
                                        "description": "Optimize the following code using indexing and methods.\nCode:\n\n```python\nlist = [1, 2, 3, 4]\nif 3 in list:\n    list.remove(3)\n```",
                                        "difficulty": 1,
                                        "level": "Intermediate",
                                        "existingCode": "list = [1, 2, 3, 4]\nif 3 in list:\n    list.remove(3)",
                                        "optimizedCode": "list = [1, 2, 4]",
                                        "solutionExplanation": "Since the element 3 is already being removed, the condition can be directly handled in one step.",
                                        "language": "Python",
                                        "testCases": [
                                          {
                                            "condition": "The input list is [1, 2, 3, 4], and the expected output after optimization is [1, 2, 4]."
                                          }
                                        ]
                                      },
                                      
                                     
                                      {
                                        "questionNo": 101,
                                        "title": "Code Optimization: Multiple Append Calls",
                                        "description": "Optimize the following code by reducing the number of append calls.\nCode:\n\n```python\nlist = [1]\nlist.append(2)\nlist.append(3)\nlist.append(4)\n```",
                                        "difficulty": 1,
                                        "level": "Intermediate",
                                        "existingCode": "list = [1]\nlist.append(2)\nlist.append(3)\nlist.append(4)",
                                        "optimizedCode": "list = [1, 2, 3, 4]",
                                        "solutionExplanation": "You can append all elements at once instead of calling append multiple times.",
                                        "language": "Python",
                                        "testCases": [
                                          {
                                            "condition": "The input list is [1], and the expected output is [1, 2, 3, 4]."
                                          }
                                        ]
                                      },
                                      {
                                        "questionNo": 102,
                                        "title": "Problem Solving: Removing Even Numbers",
                                        "description": "Write a Python function that removes all even numbers from a list.\nExample input: [1, 2, 3, 4, 5]\nExpected output: [1, 3, 5]",
                                        "difficulty": 1,
                                        "level": "Basic",
                                        "language": "Python",
                                        "testCases": [
                                          {
                                            "condition": "The input list is [1, 2, 3, 4, 5], and the expected output is [1, 3, 5]."
                                          }
                                        ]
                                      },
                                      {
                                        "questionNo": 103,
                                        "title": "Problem Solving: Reversing a List",
                                        "description": "Write a Python function that reverses a given list without using the reverse method.\nExample input: [1, 2, 3]\nExpected output: [3, 2, 1]",
                                        "difficulty": 1,
                                        "level": "Basic",
                                        "language": "Python",
                                        "testCases": [
                                          {
                                            "condition": "The input list is [1, 2, 3], and the expected output is [3, 2, 1]."
                                          }
                                        ]
                                      },
                                      {
                                        "questionNo": 104,
                                        "title": "Problem Solving: Removing Duplicates",
                                        "description": "Write a Python function that removes duplicate elements from a list.\nExample input: [1, 2, 2, 3, 4, 4]\nExpected output: [1, 2, 3, 4]",
                                        "difficulty": 1,
                                        "level": "Intermediate",
                                        "language": "Python",
                                        "testCases": [
                                          {
                                            "condition": "The input list is [1, 2, 2, 3, 4, 4], and the expected output is [1, 2, 3, 4]."
                                          }
                                        ]
                                      },
                                      {
                                        "questionNo": 105,
                                        "title": "Problem Solving: Counting Occurrences",
                                        "description": "Write a Python function that counts the occurrences of a specific element in a list.\nExample input: [1, 2, 3, 1, 2, 1]\nElement to count: 1\nExpected output: 3",
                                        "difficulty": 1,
                                        "level": "Intermediate",
                                        "language": "Python",
                                        "testCases": [
                                          {
                                            "condition": "The input list is [1, 2, 3, 1, 2, 1], and the element to count is 1. The expected output is 3."
                                          }
                                        ]
                                      },
                                      {
                                        "questionNo": 106,
                                        "title": "Problem Solving: Index of First Occurrence",
                                        "description": "Write a Python function that returns the index of the first occurrence of a given element in a list.\nExample input: [1, 2, 3, 1, 2, 3], 2\nExpected output: 1",
                                        "difficulty": 1,
                                        "level": "Intermediate",
                                        "language": "Python",
                                        "testCases": [
                                          {
                                            "condition": "The input list is [1, 2, 3, 1, 2, 3], and the element to find is 2. The expected output is 1."
                                          }
                                        ]
                                      },
                                      {
                                        "questionNo": 107,
                                        "title": "Error Correction: Incorrect Indexing",
                                        "description": "Identify and correct the error in the following code.\nCode:\n\n```python\nlist = [1, 2, 3]\nprint(list[3])\n```",
                                        "difficulty": 1,
                                        "level": "Basic",
                                        "existingCode": "list = [1, 2, 3]\nprint(list[3])",
                                        "correctedCode": "list = [1, 2, 3]\nprint(list[2])",
                                        "solutionExplanation": "The list indexing starts from 0, so the last valid index for the list is 2.",
                                        "language": "Python",
                                        "testCases": [
                                          {
                                            "condition": "The input list is [1, 2, 3], and the expected output is 3."
                                          }
                                        ]
                                      },
                                      {
                                        "questionNo": 108,
                                        "title": "Error Correction: Incorrect Method",
                                        "description": "Identify and correct the error in the following code.\nCode:\n\n```python\nlist = [1, 2, 3]\nlist.append(4)\nlist.pop(5)\n```",
                                        "difficulty": 1,
                                        "level": "Basic",
                                        "existingCode": "list = [1, 2, 3]\nlist.append(4)\nlist.pop(5)",
                                        "correctedCode": "list = [1, 2, 3]\nlist.append(4)\nlist.pop()",
                                        "solutionExplanation": "The pop method should not be called with an index greater than the length of the list. Calling pop without an argument removes the last element.",
                                        "language": "Python",
                                        "testCases": [
                                          {
                                            "condition": "The input list is [1, 2, 3], and the expected output is [1, 2, 3, 4]."
                                          }
                                        ]
                                      },
                                      {
                                        "questionNo": 109,
                                        "title": "MCQ: Tuple Immutability",
                                        "description": "Which of the following statements about tuples in Python is correct?",
                                        "difficulty": 1,
                                        "level": "Basic",
                                        "mcqOptions": [
                                          "a) Tuples are mutable",
                                          "b) Tuples can be changed after creation",
                                          "c) Tuples are immutable",
                                          "d) Tuples are only mutable if they contain lists"
                                        ],
                                        "correctAnswer": "c) Tuples are immutable",
                                        "language": "Python",
                                        "testCases": [
                                          {
                                            "condition": "The correct answer is c) Tuples are immutable."
                                          }
                                        ]
                                      },
                                      {
                                        "questionNo": 110,
                                        "title": "MCQ: Tuple Packing",
                                        "description": "What is tuple packing in Python?",
                                        "difficulty": 1,
                                        "level": "Basic",
                                        "mcqOptions": [
                                          "a) Combining multiple values into a tuple",
                                          "b) Unpacking values from a tuple",
                                          "c) Assigning values to a tuple",
                                          "d) Changing the values inside a tuple"
                                        ],
                                        "correctAnswer": "a) Combining multiple values into a tuple",
                                        "language": "Python",
                                        "testCases": [
                                          {
                                            "condition": "The correct answer is a) Combining multiple values into a tuple."
                                          }
                                        ]
                                      },
                                      {
                                        "questionNo": 111,
                                        "title": "MCQ: Tuple Unpacking",
                                        "description": "Which of the following correctly unpacks a tuple into multiple variables?",
                                        "difficulty": 1,
                                        "level": "Basic",
                                        "mcqOptions": [
                                          "a) x, y = (1, 2)",
                                          "b) x = (1, 2) y",
                                          "c) (x, y) = 1, 2",
                                          "d) x = (1, 2) y = 2"
                                        ],
                                        "correctAnswer": "a) x, y = (1, 2)",
                                        "language": "Python",
                                        "testCases": [
                                          {
                                            "condition": "The correct answer is a) x, y = (1, 2)."
                                          }
                                        ]
                                      },
                                      {
                                        "questionNo": 112,
                                        "title": "MCQ: Tuple Immutability Example",
                                        "description": "What will be the output of the following code?\nCode:\nt = (1, 2, 3)\nt[0] = 10",
                                        "difficulty": 1,
                                        "level": "Basic",
                                        "mcqOptions": [
                                          "a) (10, 2, 3)",
                                          "b) Error: Tuple is immutable",
                                          "c) [10, 2, 3]",
                                          "d) 10"
                                        ],
                                        "correctAnswer": "b) Error: Tuple is immutable",
                                        "language": "Python",
                                        "testCases": [
                                          {
                                            "condition": "The correct answer is b) Error: Tuple is immutable."
                                          }
                                        ]
                                      },
                                      {
                                        "questionNo": 113,
                                        "title": "MCQ: Tuple vs List",
                                        "description": "Which statement correctly describes the difference between a tuple and a list?",
                                        "difficulty": 1,
                                        "level": "Intermediate",
                                        "mcqOptions": [
                                          "a) Tuples are mutable, but lists are immutable",
                                          "b) Lists are immutable, but tuples are mutable",
                                          "c) Tuples are immutable, but lists are mutable",
                                          "d) Tuples and lists are both mutable"
                                        ],
                                        "correctAnswer": "c) Tuples are immutable, but lists are mutable",
                                        "language": "Python",
                                        "testCases": [
                                          {
                                            "condition": "The correct answer is c) Tuples are immutable, but lists are mutable."
                                          }
                                        ]
                                      },
                                      {
                                        "questionNo": 114,
                                        "title": "Code Optimization: Tuple Packing",
                                        "description": "Optimize the following tuple packing code:\nCode:\nt = (1, 2, 3)\nresult = (t[0], t[1], t[2])",
                                        "difficulty": 1,
                                        "level": "Basic",
                                        "existingCode": "t = (1, 2, 3)\nresult = (t[0], t[1], t[2])",
                                        "optimizedCode": "t = (1, 2, 3)\nresult = t",
                                        "solutionExplanation": "Instead of accessing each element separately, directly use the tuple.",
                                        "language": "Python",
                                        "testCases": [
                                          {
                                            "condition": "The input tuple is (1, 2, 3), and the expected output is (1, 2, 3)."
                                          }
                                        ]
                                      },
                                      
                                      {
                                        "questionNo": 115,
                                        "title": "Code Optimization: Tuple Unpacking",
                                        "description": "Optimize the following code for unpacking a tuple:\nCode:\nt = (1, 2, 3)\nfirst = t[0]\nsecond = t[1]\nthird = t[2]",
                                        "difficulty": 1,
                                        "level": "Basic",
                                        "existingCode": "t = (1, 2, 3)\nfirst = t[0]\nsecond = t[1]\nthird = t[2]",
                                        "optimizedCode": "t = (1, 2, 3)\nfirst, second, third = t",
                                        "solutionExplanation": "Tuple unpacking allows for a cleaner and more concise code.",
                                        "language": "Python",
                                        "testCases": [
                                          {
                                            "condition": "Unpacks the tuple into three variables."
                                          }
                                        ]
                                      },
                                      {
                                        "questionNo": 116,
                                        "title": "Code Optimization: Tuple Usage",
                                        "description": "Optimize the following code where a tuple is unnecessarily converted into a list:\nCode:\nt = (1, 2, 3)\nlist_t = list(t)\nresult = tuple(list_t)",
                                        "difficulty": 1,
                                        "level": "Basic",
                                        "existingCode": "t = (1, 2, 3)\nlist_t = list(t)\nresult = tuple(list_t)",
                                        "optimizedCode": "t = (1, 2, 3)\nresult = t",
                                        "solutionExplanation": "There is no need to convert the tuple to a list and back to a tuple. Directly use the tuple.",
                                        "language": "Python",
                                        "testCases": [
                                          {
                                            "condition": "Directly uses the tuple without unnecessary conversion."
                                          }
                                        ]
                                      },
                                      {
                                        "questionNo": 117,
                                        "title": "Code Optimization: Tuple Assignment",
                                        "description": "Optimize the following code by removing redundancy:\nCode:\nt = (1, 2)\nx = t[0]\ny = t[1]\nresult = (x, y)",
                                        "difficulty": 1,
                                        "level": "Basic",
                                        "existingCode": "t = (1, 2)\nx = t[0]\ny = t[1]\nresult = (x, y)",
                                        "optimizedCode": "t = (1, 2)\nresult = t",
                                        "solutionExplanation": "Directly assign the tuple without extracting and reassigning the elements.",
                                        "language": "Python",
                                        "testCases": [
                                          {
                                            "condition": "Directly assigns the tuple without unnecessary variable extraction."
                                          }
                                        ]
                                      },
                                      {
                                        "questionNo": 118,
                                        "title": "Code Optimization: Nested Tuple Packing",
                                        "description": "Optimize the following nested tuple packing code:\nCode:\nt = ((1, 2), (3, 4))\nresult = (t[0][0], t[0][1], t[1][0], t[1][1])",
                                        "difficulty": 1,
                                        "level": "Intermediate",
                                        "existingCode": "t = ((1, 2), (3, 4))\nresult = (t[0][0], t[0][1], t[1][0], t[1][1])",
                                        "optimizedCode": "t = ((1, 2), (3, 4))\nresult = t[0] + t[1]",
                                        "solutionExplanation": "Tuple concatenation simplifies the unpacking process and improves readability.",
                                        "language": "Python",
                                        "testCases": [
                                          {
                                            "condition": "Concatenates the nested tuples into a single tuple."
                                          }
                                        ]
                                      },
                                      {
                                        "questionNo": 119,
                                        "title": "Problem Solving: Tuple Access",
                                        "description": "Write a Python function that takes a tuple and an index as inputs and returns the element at that index. Handle the case where the index is out of range.",
                                        "difficulty": 1,
                                        "level": "Basic",
                                        "language": "Python",
                                        "testCases": [
                                          {
                                            "condition": "Returns the element at the given index."
                                          },
                                          {
                                            "condition": "Handles out of range index and returns an appropriate message or value."
                                          }
                                        ]
                                      },
                                      {
                                        "questionNo": 120,
                                        "title": "Problem Solving: Tuple Concatenation",
                                        "description": "Write a Python function that concatenates two tuples and returns the result.",
                                        "difficulty": 1,
                                        "level": "Basic",
                                        "language": "Python",
                                        "testCases": [
                                          {
                                            "condition": "Concatenates two tuples and returns the combined tuple."
                                          }
                                        ]
                                      },
                                      {
                                        "questionNo": 121,
                                        "title": "Problem Solving: Tuple to List Conversion",
                                        "description": "Write a Python function that converts a given tuple into a list.",
                                        "difficulty": 1,
                                        "level": "Basic",
                                        "language": "Python",
                                        "testCases": [
                                          {
                                            "condition": "Converts a tuple into a list."
                                          }
                                        ]
                                      },
                                      {
                                        "questionNo": 122,
                                        "title": "Problem Solving: Tuple Index Search",
                                        "description": "Write a Python function that searches for a given value in a tuple and returns its index. If the value is not found, return -1.",
                                        "difficulty": 1,
                                        "level": "Intermediate",
                                        "language": "Python",
                                        "testCases": [
                                          {
                                            "condition": "Searches for a value in the tuple and returns its index."
                                          },
                                          {
                                            "condition": "Returns -1 if the value is not found in the tuple."
                                          }
                                        ]
                                      },
                                      {
                                        "questionNo": 123,
                                        "title": "Problem Solving: Tuple Sorting",
                                        "description": "Write a Python function that sorts the elements of a tuple in ascending order and returns the sorted tuple.",
                                        "difficulty": 1,
                                        "level": "Intermediate",
                                        "language": "Python",
                                        "testCases": [
                                          {
                                            "condition": "Sorts the elements of a tuple in ascending order."
                                          }
                                        ]
                                      },
                                      {
                                        "questionNo": 124,
                                        "title": "Error Correction: Tuple Immutability",
                                        "description": "Identify and correct the error in the following code.\nCode:\nt = (1, 2, 3)\nt[1] = 10",
                                        "difficulty": 1,
                                        "level": "Basic",
                                        "existingCode": "t = (1, 2, 3)\nt[1] = 10",
                                        "correctedCode": "t = (1, 2, 3)\nt = t[:1] + (10,) + t[2:]",
                                        "solutionExplanation": "Tuples are immutable, and their elements cannot be changed directly. To modify an element, create a new tuple.",
                                        "language": "Python",
                                        "testCases": [
                                          {
                                            "condition": "Attempts to modify an element of a tuple and shows how to correctly handle it by creating a new tuple."
                                          }
                                        ]
                                      },
                                      
                                          {
                                            "questionNo": 125,
                                            "title": "Error Correction: Tuple Unpacking",
                                            "description": "Identify and correct the error in the following code.\nCode:\nt = (1, 2, 3)\nx, y = t",
                                            "difficulty": 1,
                                            "level": "Basic",
                                            "existingCode": "t = (1, 2, 3)\nx, y = t",
                                            "correctedCode": "t = (1, 2, 3)\nx, y, z = t",
                                            "solutionExplanation": "The number of variables on the left side must match the number of elements in the tuple.",
                                            "language": "Python",
                                            "testCases": [
                                              {
                                                "condition": "The number of variables on the left side must match the number of elements in the tuple."
                                              }
                                            ]
                                          },
                                          {
                                            "questionNo": 126,
                                            "title": "Error Correction: Incorrect Tuple Indexing",
                                            "description": "Identify and correct the error in the following code.\nCode:\nt = (1, 2, 3)\nprint(t[3])",
                                            "difficulty": 1,
                                            "level": "Basic",
                                            "existingCode": "t = (1, 2, 3)\nprint(t[3])",
                                            "correctedCode": "t = (1, 2, 3)\nprint(t[2])",
                                            "solutionExplanation": "Tuples are zero-indexed, and accessing an out-of-range index will raise an IndexError.",
                                            "language": "Python",
                                            "testCases": [
                                              {
                                                "condition": "Tuples are zero-indexed, and accessing an out-of-range index will raise an IndexError."
                                              }
                                            ]
                                          },
                                          {
                                            "questionNo": 127,
                                            "title": "MCQ: Dictionary Keys Method",
                                            "description": "Which of the following methods is used to get all the keys from a dictionary in Python?",
                                            "difficulty": 1,
                                            "level": "Basic",
                                            "mcqOptions": [
                                              "a) dict.values()",
                                              "b) dict.keys()",
                                              "c) dict.items()",
                                              "d) dict.get_keys()"
                                            ],
                                            "correctAnswer": "b) dict.keys()",
                                            "language": "Python",
                                            "testCases": [
                                              {
                                                "condition": "The method dict.keys() returns all the keys from a dictionary."
                                              }
                                            ]
                                          },
                                          {
                                            "questionNo": 128,
                                            "title": "MCQ: Dictionary Values Method",
                                            "description": "Which of the following methods is used to get all the values from a dictionary in Python?",
                                            "difficulty": 1,
                                            "level": "Basic",
                                            "mcqOptions": [
                                              "a) dict.values()",
                                              "b) dict.keys()",
                                              "c) dict.items()",
                                              "d) dict.get_values()"
                                            ],
                                            "correctAnswer": "a) dict.values()",
                                            "language": "Python",
                                            "testCases": [
                                              {
                                                "condition": "The method dict.values() returns all the values from a dictionary."
                                              }
                                            ]
                                          },
                                          {
                                            "questionNo": 129,
                                            "title": "MCQ: Dictionary Items Method",
                                            "description": "Which of the following methods returns key-value pairs from a dictionary as tuples?",
                                            "difficulty": 1,
                                            "level": "Basic",
                                            "mcqOptions": [
                                              "a) dict.keys()",
                                              "b) dict.items()",
                                              "c) dict.values()",
                                              "d) dict.pairs()"
                                            ],
                                            "correctAnswer": "b) dict.items()",
                                            "language": "Python",
                                            "testCases": [
                                              {
                                                "condition": "The method dict.items() returns key-value pairs from a dictionary as tuples."
                                              }
                                            ]
                                          },
                                          {
                                            "questionNo": 130,
                                            "title": "MCQ: Dictionary Comprehension Syntax",
                                            "description": "Which of the following is the correct syntax for a dictionary comprehension?",
                                            "difficulty": 1,
                                            "level": "Basic",
                                            "mcqOptions": [
                                              "a) {key: value for key, value in iterable}",
                                              "b) dict{key: value for key, value in iterable}",
                                              "c) {key=value for key, value in iterable}",
                                              "d) dict(key=value for key, value in iterable)"
                                            ],
                                            "correctAnswer": "a) {key: value for key, value in iterable}",
                                            "language": "Python",
                                            "testCases": [
                                              {
                                                "condition": "Dictionary comprehension allows the creation of a dictionary in one concise line of code."
                                              }
                                            ]
                                          },
                                          {
                                            "questionNo": 131,
                                            "title": "Code Optimization: Using Dictionary Keys Method",
                                            "description": "Optimize the following code to access the keys of a dictionary more efficiently:\nCode:\ndict = {'a': 1, 'b': 2, 'c': 3}\nkeys = []\nfor key in dict:\n  keys.append(key)",
                                            "difficulty": 1,
                                            "level": "Basic",
                                            "existingCode": "dict = {'a': 1, 'b': 2, 'c': 3}\nkeys = []\nfor key in dict:\n  keys.append(key)",
                                            "optimizedCode": "dict = {'a': 1, 'b': 2, 'c': 3}\nkeys = list(dict.keys())",
                                            "solutionExplanation": "The `dict.keys()` method can directly give a view of the keys, avoiding the need for a loop.",
                                            "language": "Python",
                                            "testCases": [
                                              {
                                                "condition": "The method dict.keys() directly returns a view of the keys, eliminating the need for a loop."
                                              }
                                            ]
                                          },
                                          {
                                            "questionNo": 132,
                                            "title": "Code Optimization: Dictionary Comprehension",
                                            "description": "Optimize the following code to use dictionary comprehension:\nCode:\ndict = {}\nfor x in range(5):\n  dict[x] = x ** 2",
                                            "difficulty": 1,
                                            "level": "Basic",
                                            "existingCode": "dict = {}\nfor x in range(5):\n  dict[x] = x ** 2",
                                            "optimizedCode": "dict = {x: x ** 2 for x in range(5)}",
                                            "solutionExplanation": "Dictionary comprehension allows you to create dictionaries in a single line of code.",
                                            "language": "Python",
                                            "testCases": [
                                              {
                                                "condition": "Using dictionary comprehension optimizes the code and improves readability."
                                              }
                                            ]
                                          },
                                          {
                                            "questionNo": 133,
                                            "title": "Problem Solving: Merge Two Dictionaries",
                                            "description": "Write a Python function that merges two dictionaries. If a key appears in both dictionaries, sum their values.",
                                            "difficulty": 1,
                                            "level": "Basic",
                                            "language": "Python",
                                            "testCases": [
                                              {
                                                "condition": "Merging two dictionaries while summing values for common keys."
                                              }
                                            ]
                                          },
                                          {
                                            "questionNo": 134,
                                            "title": "Problem Solving: Dictionary Key Count",
                                            "description": "Write a Python function that counts how many times each key appears in a list of dictionaries.",
                                            "difficulty": 1,
                                            "level": "Basic",
                                            "language": "Python",
                                            "testCases": [
                                              {
                                                "condition": "Counting the occurrences of each key across multiple dictionaries."
                                              }
                                            ]
                                          },
                                          {
                                            "questionNo": 135,
                                            "title": "Error Correction: Invalid Dictionary Access",
                                            "description": "Identify and correct the error in the following code.\nCode:\nd = {'a': 1, 'b': 2}\nprint(d[2])",
                                            "difficulty": 1,
                                            "level": "Basic",
                                            "existingCode": "d = {'a': 1, 'b': 2}\nprint(d[2])",
                                            "correctedCode": "d = {'a': 1, 'b': 2}\nprint(d['b'])",
                                            "solutionExplanation": "The key must be accessed by its name, not the value.",
                                            "language": "Python",
                                            "testCases": [
                                              {
                                                "condition": "Keys must be accessed using their name, not their values."
                                              }
                                            ]
                                          },
                                          {
                                            "questionNo": 136,
                                            "title": "Error Correction: Dictionary Method",
                                            "description": "Identify and correct the error in the following code.\nCode:\nd = {'a': 1, 'b': 2}\nprint(d.get('c'))",
                                            "difficulty": 1,
                                            "level": "Basic",
                                            "existingCode": "d = {'a': 1, 'b': 2}\nprint(d.get('c'))",
                                            "correctedCode": "d = {'a': 1, 'b': 2}\nprint(d.get('c', 'Not Found'))",
                                            "solutionExplanation": "The `get()` method can be used with a default value when the key does not exist.",
                                            "language": "Python",
                                            "testCases": [
                                              {
                                                "condition": "The get() method can be used with a default value when the key does not exist."
                                              }
                                            ]
                                          },[
                                            {
                                              "questionNo": 137,
                                              "title": "MCQ: Defining a Function",
                                              "description": "Which of the following is the correct syntax for defining a function in Python?",
                                              "difficulty": 1,
                                              "level": "Basic",
                                              "options": [
                                                "def function_name():",
                                                "function function_name():",
                                                "create function_name():",
                                                "function = function_name()"
                                              ],
                                              "correctAnswer": "def function_name():",
                                              "solutionExplanation": "In Python, functions are defined using the 'def' keyword followed by the function name and parentheses.",
                                              "language": "Python",
                                              "testCases": [
                                                {
                                                  "condition": "The function must be defined using the correct syntax."
                                                }
                                              ]
                                            },
                                            {
                                              "questionNo": 138,
                                              "title": "MCQ: Calling a Function",
                                              "description": "How do you call a function named 'greet' in Python?",
                                              "difficulty": 1,
                                              "level": "Basic",
                                              "options": [
                                                "greet()",
                                                "call greet()",
                                                "function greet()",
                                                "greet"
                                              ],
                                              "correctAnswer": "greet()",
                                              "solutionExplanation": "Functions are called by their name followed by parentheses. In this case, 'greet()' is the correct way to call the function.",
                                              "language": "Python",
                                              "testCases": [
                                                {
                                                  "condition": "Ensure that the function is called with parentheses."
                                                }
                                              ]
                                            },
                                            {
                                              "questionNo": 139,
                                              "title": "MCQ: Default Arguments",
                                              "description": "What happens if a default argument is provided in a function definition but not used in a function call?",
                                              "difficulty": 1,
                                              "level": "Basic",
                                              "options": [
                                                "The default argument is ignored.",
                                                "The function will raise an error.",
                                                "The default argument is used.",
                                                "The default argument value is passed by the user."
                                              ],
                                              "correctAnswer": "The default argument is used.",
                                              "solutionExplanation": "If a default argument is provided and the caller does not provide a value, the function will use the default value.",
                                              "language": "Python",
                                              "testCases": [
                                                {
                                                  "condition": "Ensure that the default argument is used if not explicitly passed."
                                                }
                                              ]
                                            },
                                            {
                                              "questionNo": 140,
                                              "title": "MCQ: Keyword Arguments",
                                              "description": "What is the benefit of using keyword arguments when calling a function?",
                                              "difficulty": 1,
                                              "level": "Basic",
                                              "options": [
                                                "It allows you to pass arguments in any order.",
                                                "It makes the code slower.",
                                                "It removes the need for default arguments.",
                                                "It raises errors for missing arguments."
                                              ],
                                              "correctAnswer": "It allows you to pass arguments in any order.",
                                              "solutionExplanation": "Keyword arguments allow you to specify the values for parameters by name, which enables passing arguments in any order.",
                                              "language": "Python",
                                              "testCases": [
                                                {
                                                  "condition": "Ensure that keyword arguments are passed correctly without caring about order."
                                                }
                                              ]
                                            },
                                            {
                                              "questionNo": 141,
                                              "title": "MCQ: Function with Default Argument",
                                              "description": "What will the following code print?\n\n```python\ndef greet(name, greeting='Hello'):\n    print(greeting, name)\ngreet('Alice')```",
                                              "difficulty": 1,
                                              "level": "Basic",
                                              "options": [
                                                "'Hello Alice'",
                                                "'greet Alice'",
                                                "SyntaxError",
                                                "'name Alice'"
                                              ],
                                              "correctAnswer": "'Hello Alice'",
                                              "solutionExplanation": "Since the default argument for 'greeting' is 'Hello', it is used when calling 'greet('Alice')'. The output will be 'Hello Alice'.",
                                              "language": "Python",
                                              "testCases": [
                                                {
                                                  "condition": "Ensure that the default greeting is used when no value is passed for 'greeting'."
                                                }
                                              ]
                                            },
                                            {
                                              "questionNo": 142,
                                              "title": "Code Optimization: Function to Calculate Sum",
                                              "description": "Optimize the following function to calculate the sum of a list of numbers.\n\n```python\ndef sum_numbers(numbers):\n    total = 0\n    for num in numbers:\n        total += num\n    return total```",
                                              "difficulty": 1,
                                              "level": "Basic",
                                              "existingCode": "def sum_numbers(numbers):\n    total = 0\n    for num in numbers:\n        total += num\n    return total",
                                              "testCases": [
                                                {
                                                  "condition": "Ensure the function calculates the sum of numbers correctly."
                                                }
                                              ],
                                              "solutionExplanation": "The optimized version uses the built-in 'sum' function: `sum(numbers)`, which is more concise and efficient.",
                                              "correctedCode": "def sum_numbers(numbers):\n    return sum(numbers)",
                                              "language": "Python"
                                            },
                                            {
                                              "questionNo": 143,
                                              "title": "Code Optimization: Function to Count Even Numbers",
                                              "description": "Optimize the following function to count the number of even numbers in a list.\n\n```python\ndef count_evens(numbers):\n    count = 0\n    for num in numbers:\n        if num % 2 == 0:\n            count += 1\n    return count```",
                                              "difficulty": 1,
                                              "level": "Basic",
                                              "existingCode": "def count_evens(numbers):\n    count = 0\n    for num in numbers:\n        if num % 2 == 0:\n            count += 1\n    return count",
                                              "testCases": [
                                                {
                                                  "condition": "Ensure the function counts even numbers correctly."
                                                }
                                              ],
                                              "solutionExplanation": "The optimized version uses list comprehensions, which are more concise and efficient: `len([num for num in numbers if num % 2 == 0])`.",
                                              "correctedCode": "def count_evens(numbers):\n    return len([num for num in numbers if num % 2 == 0])",
                                              "language": "Python"
                                            },
                                            {
                                              "questionNo": 144,
                                              "title": "Code Optimization: Function to Reverse a String",
                                              "description": "Optimize the following function to reverse a string.\n\n```python\ndef reverse_string(string):\n    reversed_string = \"\"\n    for char in string:\n        reversed_string = char + reversed_string\n    return reversed_string```",
                                              "difficulty": 1,
                                              "level": "Basic",
                                              "existingCode": "def reverse_string(string):\n    reversed_string = \"\"\n    for char in string:\n        reversed_string = char + reversed_string\n    return reversed_string",
                                              "testCases": [
                                                {
                                                  "condition": "Ensure the function reverses the string correctly."
                                                }
                                              ],
                                              "solutionExplanation": "The optimized version uses Python's slicing technique to reverse the string: `string[::-1]`.",
                                              "correctedCode": "def reverse_string(string):\n    return string[::-1]",
                                              "language": "Python"
                                            },
                                            {
                                              "questionNo": 145,
                                              "title": "Code Optimization: Function to Find Maximum Number",
                                              "description": "Optimize the following function to find the maximum number in a list.\n\n```python\ndef find_max(numbers):\n    max_num = numbers[0]\n    for num in numbers:\n        if num > max_num:\n            max_num = num\n    return max_num```",
                                              "difficulty": 1,
                                              "level": "Basic",
                                              "existingCode": "def find_max(numbers):\n    max_num = numbers[0]\n    for num in numbers:\n        if num > max_num:\n            max_num = num\n    return max_num",
                                              "testCases": [
                                                {
                                                  "condition": "Ensure the function finds the maximum number correctly."
                                                }
                                              ],
                                              "solutionExplanation": "The optimized version uses Python's built-in 'max' function: `max(numbers)`.",
                                              "correctedCode": "def find_max(numbers):\n    return max(numbers)",
                                              "language": "Python"
                                            },
                                            {
                                              "questionNo": 146,
                                              "title": "Problem Solving: Function with Default Argument",
                                              "description": "Write a Python function that accepts a name and an age as arguments. If the age is not provided, set the default age to 30. The function should return a string: 'Name is {name} and Age is {age}'.",
                                              "difficulty": 1,
                                              "level": "Basic",
                                              "language": "Python",
                                              "testCases": [
                                                {
                                                  "condition": "Ensure the function returns the correct string with default age."
                                                }
                                              ]
                                            },
                                            {
                                              "questionNo": 147,
                                              "title": "Problem Solving: Function with Keyword Argument",
                                              "description": "Write a Python function that accepts two arguments, 'name' and 'age'. Call the function with keyword arguments to print 'Name is {name} and Age is {age}'.",
                                              "difficulty": 1,
                                              "level": "Basic",
                                              "language": "Python",
                                              "testCases": [
                                                {
                                                  "condition": "Ensure the function is called with keyword arguments."
                                                }
                                              ]
                                            },
                                            {
                                              "questionNo": 148,
                                              "title": "Problem Solving: Function to Multiply Numbers",
                                              "description": "Write a Python function that accepts two numbers and returns their multiplication. Use default arguments for the second number with a value of 1.",
                                              "difficulty": 1,
                                              "level": "Basic",
                                              "language": "Python",
                                              "testCases": [
                                                {
                                                  "condition": "Ensure the multiplication is correct with default argument."
                                                }
                                              ]
                                            },
                                            {
                                              "questionNo": 149,
                                              "title": "Error Correction: Missing Argument",
                                              "description": "Identify and correct the error in the following code:\n\n```python\ndef greet(name, greeting='Hello'):\n    print(greeting, name)\ngreet()```",
                                              "difficulty": 1,
                                              "level": "Basic",
                                              "solutionExplanation": "The error occurs because the 'name' argument is missing. The function should be called with the 'name' argument.",
                                              "correctedCode": "greet('Alice')",
                                              "testCases": [
                                                {
                                                  "condition": "Ensure the function is called with the required 'name' argument."
                                                }
                                              ]
                                            },[
                                                {
                                                  "questionNo": 150,
                                                  "title": "MCQ: *args in Function",
                                                  "description": "What does *args do in a Python function?",
                                                  "difficulty": 1,
                                                  "level": "Basic",
                                                  "options": [
                                                    "It allows passing a fixed number of arguments to the function.",
                                                    "It allows passing a variable number of non-keyword arguments to the function.",
                                                    "It specifies that the function will not accept any arguments.",
                                                    "It allows passing a single argument to the function."
                                                  ],
                                                  "correctAnswer": "It allows passing a variable number of non-keyword arguments to the function.",
                                                  "solutionExplanation": "*args allows a function to accept any number of positional arguments.",
                                                  "language": "Python",
                                                  "testCases": [
                                                    {
                                                      "condition": "Ensure that the function can accept multiple arguments using *args."
                                                    }
                                                  ]
                                                },
                                                {
                                                  "questionNo": 151,
                                                  "title": "MCQ: **kwargs in Function",
                                                  "description": "What does **kwargs do in a Python function?",
                                                  "difficulty": 1,
                                                  "level": "Basic",
                                                  "options": [
                                                    "It allows passing a fixed number of keyword arguments to the function.",
                                                    "It allows passing a variable number of keyword arguments to the function.",
                                                    "It specifies that the function will not accept any arguments.",
                                                    "It allows passing a single argument to the function."
                                                  ],
                                                  "correctAnswer": "It allows passing a variable number of keyword arguments to the function.",
                                                  "solutionExplanation": "**kwargs allows a function to accept a variable number of keyword arguments.",
                                                  "language": "Python",
                                                  "testCases": [
                                                    {
                                                      "condition": "Ensure that the function can accept multiple keyword arguments using **kwargs."
                                                    }
                                                  ]
                                                },
                                                {
                                                  "questionNo": 152,
                                                  "title": "MCQ: Combining *args and **kwargs",
                                                  "description": "How can you use *args and **kwargs in a function?",
                                                  "difficulty": 1,
                                                  "level": "Basic",
                                                  "options": [
                                                    "You can use *args and **kwargs together in any order.",
                                                    "You can only use *args before **kwargs.",
                                                    "You can only use **kwargs before *args.",
                                                    "You can’t use both *args and **kwargs in a function."
                                                  ],
                                                  "correctAnswer": "You can only use *args before **kwargs.",
                                                  "solutionExplanation": "*args should always be listed before **kwargs in a function definition.",
                                                  "language": "Python",
                                                  "testCases": [
                                                    {
                                                      "condition": "Ensure that *args appears before **kwargs in the function definition."
                                                    }
                                                  ]
                                                },
                                                {
                                                  "questionNo": 153,
                                                  "title": "MCQ: Anonymous Function (lambda)",
                                                  "description": "Which of the following is the correct syntax for defining a lambda function in Python?",
                                                  "difficulty": 1,
                                                  "level": "Basic",
                                                  "options": [
                                                    "lambda x: x + 10",
                                                    "lambda(x): x + 10",
                                                    "function lambda(x): x + 10",
                                                    "lambda(x) => x + 10"
                                                  ],
                                                  "correctAnswer": "lambda x: x + 10",
                                                  "solutionExplanation": "Lambda functions in Python are defined using the 'lambda' keyword, followed by parameters and the expression to be returned.",
                                                  "language": "Python",
                                                  "testCases": [
                                                    {
                                                      "condition": "Ensure that the lambda function syntax is correctly followed."
                                                    }
                                                  ]
                                                },
                                                {
                                                  "questionNo": 154,
                                                  "title": "MCQ: Recursion",
                                                  "description": "What is the key characteristic of a recursive function in Python?",
                                                  "difficulty": 1,
                                                  "level": "Basic",
                                                  "options": [
                                                    "It calls itself.",
                                                    "It returns an iterative solution.",
                                                    "It only works with lists.",
                                                    "It uses loops to solve problems."
                                                  ],
                                                  "correctAnswer": "It calls itself.",
                                                  "solutionExplanation": "A recursive function calls itself to break down a problem into smaller instances of itself.",
                                                  "language": "Python",
                                                  "testCases": [
                                                    {
                                                      "condition": "Ensure that the function calls itself to solve the problem."
                                                    }
                                                  ]
                                                },
                                                {
                                                  "questionNo": 155,
                                                  "title": "Code Optimization: Sum of Numbers using *args",
                                                  "description": "Optimize the following function to calculate the sum of any number of arguments.\n\n```python\ndef sum_numbers(*args):\n    total = 0\n    for num in args:\n        total += num\n    return total```",
                                                  "difficulty": 1,
                                                  "level": "Basic",
                                                  "existingCode": "def sum_numbers(*args):\n    total = 0\n    for num in args:\n        total += num\n    return total",
                                                  "testCases": [
                                                    {
                                                      "condition": "Ensure the function calculates the sum of any number of arguments correctly."
                                                    }
                                                  ],
                                                  "solutionExplanation": "The optimized version uses Python's built-in 'sum' function: `sum(args)`.",
                                                  "correctedCode": "def sum_numbers(*args):\n    return sum(args)",
                                                  "language": "Python"
                                                },
                                                {
                                                  "questionNo": 156,
                                                  "title": "Code Optimization: Lambda Function for Squaring",
                                                  "description": "Optimize the following code using a lambda function to square a list of numbers.\n\n```python\ndef square_numbers(numbers):\n    squared = []\n    for num in numbers:\n        squared.append(num ** 2)\n    return squared```",
                                                  "difficulty": 1,
                                                  "level": "Basic",
                                                  "existingCode": "def square_numbers(numbers):\n    squared = []\n    for num in numbers:\n        squared.append(num ** 2)\n    return squared",
                                                  "testCases": [
                                                    {
                                                      "condition": "Ensure the function squares the numbers correctly."
                                                    }
                                                  ],
                                                  "solutionExplanation": "The optimized version uses a lambda function in combination with map: `list(map(lambda x: x**2, numbers))`.",
                                                  "correctedCode": "def square_numbers(numbers):\n    return list(map(lambda x: x**2, numbers))",
                                                  "language": "Python"
                                                },
                                                {
                                                  "questionNo": 157,
                                                  "title": "Code Optimization: Recursive Factorial Function",
                                                  "description": "Optimize the following recursive function to find the factorial of a number.\n\n```python\ndef factorial(n):\n    if n == 0:\n        return 1\n    return n * factorial(n-1)```",
                                                  "difficulty": 1,
                                                  "level": "Basic",
                                                  "existingCode": "def factorial(n):\n    if n == 0:\n        return 1\n    return n * factorial(n-1)",
                                                  "testCases": [
                                                    {
                                                      "condition": "Ensure the function calculates the factorial correctly."
                                                    }
                                                  ],
                                                  "solutionExplanation": "The code is already optimized using recursion, but to prevent deep recursion issues, we can use an iterative approach as well. However, the current solution is fine for standard cases.",
                                                  "correctedCode": "def factorial(n):\n    if n == 0:\n        return 1\n    result = 1\n    for i in range(1, n+1):\n        result *= i\n    return result",
                                                  "language": "Python"
                                                },
                                                {
                                                  "questionNo": 158,
                                                  "title": "Problem Solving: Sum of Numbers using *args",
                                                  "description": "Write a Python function that accepts a variable number of arguments and returns their sum. Use *args in the function definition.",
                                                  "difficulty": 1,
                                                  "level": "Basic",
                                                  "language": "Python",
                                                  "testCases": [
                                                    {
                                                      "condition": "Ensure the function returns the correct sum of multiple arguments."
                                                    }
                                                  ]
                                                },
                                                {
                                                  "questionNo": 159,
                                                  "title": "Problem Solving: Lambda Function to Find Maximum",
                                                  "description": "Write a Python function using a lambda expression that accepts a list of numbers and returns the maximum value.",
                                                  "difficulty": 1,
                                                  "level": "Basic",
                                                  "language": "Python",
                                                  "testCases": [
                                                    {
                                                      "condition": "Ensure the lambda function returns the maximum number correctly."
                                                    }
                                                  ]
                                                },
                                                {
                                                  "questionNo": 160,
                                                  "title": "Problem Solving: Recursive Fibonacci Sequence",
                                                  "description": "Write a Python recursive function to return the nth Fibonacci number.",
                                                  "difficulty": 1,
                                                  "level": "Basic",
                                                  "language": "Python",
                                                  "testCases": [
                                                    {
                                                      "condition": "Ensure the function returns the correct Fibonacci number for given n."
                                                    }
                                                  ]
                                                }
                                              ],[
                                                {
                                                  "questionNo": 161,
                                                  "title": "MCQ: Advanced Use of *args",
                                                  "description": "What will be the output of the following code?\n\n```python\ndef func(x, *args):\n    return x + sum(args)\n\nprint(func(5, 3, 4, 2))```",
                                                  "difficulty": 1,
                                                  "level": "Intermediate",
                                                  "options": [
                                                    "14",
                                                    "10",
                                                    "12",
                                                    "15"
                                                  ],
                                                  "correctAnswer": "14",
                                                  "solutionExplanation": "The function sums the first argument (5) with the sum of the other arguments (3 + 4 + 2). Hence, the result is 14.",
                                                  "language": "Python",
                                                  "testCases": [
                                                    {
                                                      "condition": "Verify that the function correctly sums the first argument and the other arguments passed through *args."
                                                    }
                                                  ]
                                                },
                                                {
                                                  "questionNo": 162,
                                                  "title": "MCQ: **kwargs in Complex Function",
                                                  "description": "What will be the output of the following code?\n\n```python\ndef greet(**kwargs):\n    return f'Hello {kwargs.get('name', 'Guest')}!'\n\nprint(greet(name='John'))```",
                                                  "difficulty": 1,
                                                  "level": "Intermediate",
                                                  "options": [
                                                    "'Hello John!'",
                                                    "'Hello Guest!'",
                                                    "'Hello name!'",
                                                    "'name not found'"
                                                  ],
                                                  "correctAnswer": "'Hello John!'",
                                                  "solutionExplanation": "The function looks for the 'name' keyword argument, and if found, it returns 'Hello {name}!', otherwise, it defaults to 'Guest'.",
                                                  "language": "Python",
                                                  "testCases": [
                                                    {
                                                      "condition": "Check if the function returns the correct greeting based on the 'name' keyword argument."
                                                    }
                                                  ]
                                                },
                                                {
                                                  "questionNo": 163,
                                                  "title": "Code Optimization: Using *args for Variable-Length Arguments",
                                                  "description": "Optimize the following function to find the average of a variable number of arguments using *args.\n\n```python\ndef find_average(*args):\n    total = sum(args)\n    count = len(args)\n    return total / count if count != 0 else 0```",
                                                  "difficulty": 1,
                                                  "level": "Intermediate",
                                                  "existingCode": "def find_average(*args):\n    total = sum(args)\n    count = len(args)\n    return total / count if count != 0 else 0",
                                                  "testCases": [
                                                    {
                                                      "condition": "Ensure the function correctly calculates the average when multiple arguments are passed through *args."
                                                    }
                                                  ],
                                                  "solutionExplanation": "The code is already optimized; however, adding checks for non-numeric inputs can make the function more robust."
                                                },
                                                {
                                                  "questionNo": 164,
                                                  "title": "Code Optimization: Recursive Factorial with Memoization",
                                                  "description": "Optimize the following recursive factorial function using memoization to improve performance.\n\n```python\ndef factorial(n):\n    if n == 0:\n        return 1\n    return n * factorial(n-1)```",
                                                  "difficulty": 1,
                                                  "level": "Intermediate",
                                                  "existingCode": "def factorial(n):\n    if n == 0:\n        return 1\n    return n * factorial(n-1)",
                                                  "testCases": [
                                                    {
                                                      "condition": "Ensure the function correctly returns the factorial value for large inputs and performs efficiently."
                                                    }
                                                  ],
                                                  "solutionExplanation": "Memoization improves performance by storing previously computed factorials in a cache, avoiding redundant calculations."
                                                },
                                                {
                                                  "questionNo": 165,
                                                  "title": "Problem Solving: Recursive Fibonacci with Memoization",
                                                  "description": "Write an optimized recursive function using memoization to return the nth Fibonacci number.",
                                                  "difficulty": 1,
                                                  "level": "Intermediate",
                                                  "language": "Python",
                                                  "testCases": [
                                                    {
                                                      "condition": "Ensure the function correctly returns the nth Fibonacci number, avoiding redundant calculations by using memoization."
                                                    }
                                                  ]
                                                },
                                                {
                                                  "questionNo": 166,
                                                  "title": "Problem Solving: Recursive QuickSort",
                                                  "description": "Write a Python function using recursion to implement the QuickSort algorithm to sort a list of numbers.",
                                                  "difficulty": 1,
                                                  "level": "Expert",
                                                  "language": "Python",
                                                  "testCases": [
                                                    {
                                                      "condition": "Ensure the function correctly sorts the list in ascending order using the QuickSort algorithm."
                                                    }
                                                  ]
                                                },
                                                {
                                                  "questionNo": 167,
                                                  "title": "Problem Solving: Lambda Function for Filtering Odd Numbers",
                                                  "description": "Write a Python function that uses a lambda expression to filter out odd numbers from a given list.",
                                                  "difficulty": 1,
                                                  "level": "Intermediate",
                                                  "language": "Python",
                                                  "testCases": [
                                                    {
                                                      "condition": "Ensure that the lambda function correctly filters out odd numbers from the list."
                                                    }
                                                  ]
                                                },
                                                {
                                                  "questionNo": 168,
                                                  "title": "Problem Solving: Using **kwargs for Flexible Function Arguments",
                                                  "description": "Write a Python function using **kwargs to accept multiple keyword arguments and return a formatted string based on the values of 'name' and 'age'.",
                                                  "difficulty": 1,
                                                  "level": "Intermediate",
                                                  "language": "Python",
                                                  "testCases": [
                                                    {
                                                      "condition": "Check if the function correctly returns the formatted string when both 'name' and 'age' are provided through **kwargs."
                                                    }
                                                  ]
                                                },
                                                {
                                                  "questionNo": 169,
                                                  "title": "Problem Solving: Optimizing Recursive Binary Search",
                                                  "description": "Write an optimized recursive function for binary search to find the index of a target element in a sorted list.",
                                                  "difficulty": 1,
                                                  "level": "Expert",
                                                  "language": "Python",
                                                  "testCases": [
                                                    {
                                                      "condition": "Ensure the function performs binary search correctly and efficiently returns the correct index of the target element."
                                                    }
                                                  ]
                                                },
                                                {
                                                  "questionNo": 170,
                                                  "title": "Problem Solving: Advanced Use of *args and **kwargs",
                                                  "description": "Write a Python function that accepts both *args and **kwargs, and prints out the sum of positional arguments and the value of a keyword argument 'title'.",
                                                  "difficulty": 1,
                                                  "level": "Intermediate",
                                                  "language": "Python",
                                                  "testCases": [
                                                    {
                                                      "condition": "Ensure the function correctly processes both positional arguments and keyword arguments, and prints the expected result."
                                                    }
                                                  ]
                                                }
                                              ],[
                                                {
                                                  "questionNo": 171,
                                                  "title": "MCQ: NumPy Array Operations",
                                                  "description": "What will be the output of the following code?\n\n```python\nimport numpy as np\narr = np.array([1, 2, 3, 4])\narr = arr * 2\nprint(arr)```",
                                                  "difficulty": 1,
                                                  "level": "Basic",
                                                  "options": [
                                                    "[2, 4, 6, 8]",
                                                    "[1, 2, 3, 4]",
                                                    "[1, 4, 9, 16]",
                                                    "[2, 4, 6, 8, 10]"
                                                  ],
                                                  "correctAnswer": "[2, 4, 6, 8]",
                                                  "solutionExplanation": "The array is multiplied by 2, which results in each element being doubled.",
                                                  "language": "Python",
                                                  "testCases": [
                                                    {
                                                      "condition": "Verify that the array elements are correctly multiplied by 2."
                                                    }
                                                  ]
                                                },
                                                {
                                                  "questionNo": 172,
                                                  "title": "MCQ: Pandas DataFrame Creation",
                                                  "description": "What will be the output of the following code?\n\n```python\nimport pandas as pd\ndf = pd.DataFrame({'A': [1, 2], 'B': [3, 4]})\nprint(df['A'])```",
                                                  "difficulty": 1,
                                                  "level": "Basic",
                                                  "options": [
                                                    "[1, 2]",
                                                    "1, 2",
                                                    "{'A': 1, 'B': 3}",
                                                    "None"
                                                  ],
                                                  "correctAnswer": "[1, 2]",
                                                  "solutionExplanation": "The code accesses the 'A' column of the DataFrame, which contains the values [1, 2].",
                                                  "language": "Python",
                                                  "testCases": [
                                                    {
                                                      "condition": "Ensure the 'A' column is correctly accessed and displayed."
                                                    }
                                                  ]
                                                },
                                                {
                                                  "questionNo": 173,
                                                  "title": "MCQ: Matplotlib Plotting",
                                                  "description": "What will the following code do?\n\n```python\nimport matplotlib.pyplot as plt\nplt.plot([1, 2, 3, 4], [1, 4, 9, 16])\nplt.show()```",
                                                  "difficulty": 1,
                                                  "level": "Basic",
                                                  "options": [
                                                    "Display a line plot",
                                                    "Display a scatter plot",
                                                    "Show a pie chart",
                                                    "Display a bar chart"
                                                  ],
                                                  "correctAnswer": "Display a line plot",
                                                  "solutionExplanation": "The code plots a line graph with x-values [1, 2, 3, 4] and y-values [1, 4, 9, 16].",
                                                  "language": "Python",
                                                  "testCases": [
                                                    {
                                                      "condition": "Ensure that the output is a line plot based on the given data."
                                                    }
                                                  ]
                                                },
                                                {
                                                  "questionNo": 174,
                                                  "title": "MCQ: Flask Route Decorator",
                                                  "description": "What will be the result of the following Flask code?\n\n```python\nfrom flask import Flask\napp = Flask(__name__)\n@app.route('/')\ndef hello():\n    return 'Hello World'\napp.run()```",
                                                  "difficulty": 1,
                                                  "level": "Basic",
                                                  "options": [
                                                    "Start a web server on localhost",
                                                    "Return 'Hello World'",
                                                    "Throw an error due to missing imports",
                                                    "Do nothing"
                                                  ],
                                                  "correctAnswer": "Start a web server on localhost",
                                                  "solutionExplanation": "This code starts a Flask web server on localhost, and the route `/` will return 'Hello World'.",
                                                  "language": "Python",
                                                  "testCases": [
                                                    {
                                                      "condition": "Ensure the Flask server starts and the correct response is displayed at the root URL."
                                                    }
                                                  ]
                                                },
                                                {
                                                  "questionNo": 175,
                                                  "title": "MCQ: SQLAlchemy Query",
                                                  "description": "What will be the output of the following SQLAlchemy code?\n\n```python\nfrom sqlalchemy import create_engine, Column, Integer\nfrom sqlalchemy.ext.declarative import declarative_base\nBase = declarative_base()\nclass User(Base):\n    __tablename__ = 'users'\n    id = Column(Integer, primary_key=True)\n    name = Column(String)\nengine = create_engine('sqlite:///:memory:')\nBase.metadata.create_all(engine)```",
                                                  "difficulty": 1,
                                                  "level": "Basic",
                                                  "options": [
                                                    "Create an in-memory SQLite database with a 'users' table",
                                                    "Throw an error due to incorrect engine configuration",
                                                    "Create a file-based SQLite database",
                                                    "Create a table but not the database"
                                                  ],
                                                  "correctAnswer": "Create an in-memory SQLite database with a 'users' table",
                                                  "solutionExplanation": "The code creates an in-memory SQLite database and defines a 'users' table using SQLAlchemy's ORM features.",
                                                  "language": "Python",
                                                  "testCases": [
                                                    {
                                                      "condition": "Ensure the in-memory database is created with the correct 'users' table."
                                                    }
                                                  ]
                                                },
                                                {
                                                  "questionNo": 176,
                                                  "title": "Code Optimization: Optimizing a Loop with NumPy",
                                                  "description": "Optimize the following code using NumPy to calculate the square of each element in a list.\n\n```python\nnumbers = [1, 2, 3, 4]\nsquares = []\nfor num in numbers:\n    squares.append(num ** 2)\nprint(squares)```",
                                                  "difficulty": 1,
                                                  "level": "Intermediate",
                                                  "existingCode": "numbers = [1, 2, 3, 4]\nsquares = []\nfor num in numbers:\n    squares.append(num ** 2)\nprint(squares)",
                                                  "testCases": [
                                                    {
                                                      "condition": "Ensure that the optimized code calculates the squares correctly using NumPy."
                                                    }
                                                  ],
                                                  "solutionExplanation": "Using NumPy's array operations, the optimization becomes: `numbers = np.array([1, 2, 3, 4]); squares = numbers ** 2`."
                                                },
                                                {
                                                  "questionNo": 177,
                                                  "title": "Code Optimization: Pandas DataFrame Optimization",
                                                  "description": "Optimize the following Pandas code for summing a column in a DataFrame:\n\n```python\nimport pandas as pd\ndf = pd.DataFrame({'A': [1, 2, 3, 4]})\nsum_val = 0\nfor value in df['A']:\n    sum_val += value\nprint(sum_val)```",
                                                  "difficulty": 1,
                                                  "level": "Intermediate",
                                                  "existingCode": "import pandas as pd\ndf = pd.DataFrame({'A': [1, 2, 3, 4]})\nsum_val = 0\nfor value in df['A']:\n    sum_val += value\nprint(sum_val)",
                                                  "testCases": [
                                                    {
                                                      "condition": "Ensure the optimized code sums the values in the 'A' column efficiently."
                                                    }
                                                  ],
                                                  "solutionExplanation": "Optimizing with `df['A'].sum()` provides a more efficient solution for summing values in a column."
                                                },
                                                {
                                                  "questionNo": 178,
                                                  "title": "Error Correction: Invalid Import",
                                                  "description": "Fix the import error in the following code:\n\n```python\nimport pandas as pd\ndf = pd.DataFrame([1, 2, 3, 4])```",
                                                  "difficulty": 1,
                                                  "level": "Basic",
                                                  "existingCode": "import pandas as pd\ndf = pd.DataFrame([1, 2, 3, 4])",
                                                  "testCases": [
                                                    {
                                                      "condition": "Ensure the DataFrame is correctly created from a list."
                                                    }
                                                  ],
                                                  "solutionExplanation": "To fix the error, the DataFrame should be created with a dictionary or a list of lists: `df = pd.DataFrame([[1, 2, 3, 4]])`."
                                                },
                                                {
                                                  "questionNo": 179,
                                                  "title": "Error Correction: Flask Route Error",
                                                  "description": "Correct the error in the following Flask code:\n\n```python\nfrom flask import Flask\napp = Flask(__name__)\n@app.route('/')\ndef hello():\n    return 'Hello World'\nif __name__ == '__main__':\n    app.run(debug=True)```",
                                                  "difficulty": 1,
                                                  "level": "Basic",
                                                  "existingCode": "from flask import Flask\napp = Flask(__name__)\n@app.route('/')\ndef hello():\n    return 'Hello World'\nif __name__ == '__main__':\n    app.run(debug=True)",
                                                  "testCases": [
                                                    {
                                                      "condition": "Ensure the Flask app runs in debug mode without errors."
                                                    }
                                                  ],
                                                  "solutionExplanation": "The provided code is correct. The `if __name__ == '__main__':` ensures the app runs when executed directly."
                                                },
                                                {
                                                  "questionNo": 180,
                                                  "title": "Problem Solving: NumPy Matrix Multiplication",
                                                  "description": "Write a function that multiplies two matrices using NumPy. The function should return the result as a new matrix.\n\n```python\nimport numpy as np\n\ndef matrix_multiply(A, B):\n    return np.matmul(A, B)```",
                                                  "difficulty": 1,
                                                  "level": "Intermediate",
                                                  "testCases": [
                                                    {
                                                      "condition": "Ensure that the function correctly multiplies two matrices."
                                                    }
                                                  ],
                                                  "solutionExplanation": "The function uses `np.matmul()` to perform matrix multiplication."
                                                }
                                              ],
                                              
                                              
                                              
                                          ]
                                          
                                          
                                          
                                          
                                          
                                          
                                          
                                          
                     ];
                              
export default pythonTasks;
