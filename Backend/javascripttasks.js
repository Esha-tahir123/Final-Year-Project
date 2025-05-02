const javascriptTasks = [
    // Basic Level Tasks
    {
      title: "Change Text Content on Button Click",
      description: "Create a button that changes the text content of a paragraph when clicked.",
      difficulty: "Basic",
      difficultyScore: 1,
      level: "Basic",
      existingCode: `
        <button onclick="changeText()">Click Me!</button>
        <p id="text">Original Text</p>
        <script>
          function changeText() {
            // Your code here
          }
        </script> 
      `,
      testCases: [
        { condition: "Text should change when the button is clicked." },
      ],
      solutionExplanation: "Use JavaScript to modify the innerText of the paragraph element.",
      language: "JavaScript",
    },
    {
      title: "Toggle Div Visibility",
      description: "Create a button that toggles the visibility of a div element.",
      difficulty: "Basic",
      difficultyScore: 1,
      level: "Basic",
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
      difficultyScore: 2,
      level: "Intermediate",
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
      difficultyScore: 2,
      level: "Intermediate",
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
      difficultyScore: 3,
      level: "Expert",
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
      difficultyScore: 3,
      level: "Expert",
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
    },
  ];
  
  export default javascriptTasks;
  