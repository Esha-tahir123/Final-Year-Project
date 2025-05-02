const htmlCssTasks = [
  {
      
        number: 1,
        title: "Center a Header Text",
        description: "Center the header text horizontally and vertically in its container.",
        difficulty: "Basic",
        difficultyScore: 1,
        level: "Basic",
        existingCode: `
          <div class="header">Welcome to My Website</div>
          <style>
              .header {
                  height: 100px;
                  background-color: lightgrey;
                  /* Add styles to center the text */
              }
          </style>
        `,
        testCases: [
          { condition: "Header text should be perfectly centered horizontally and vertically." }
        ],
        solutionExplanation: "Use display: flex, justify-content: center, and align-items: center.",
        language: "HTML/CSS",
      },
      {
        number: 2,
        title: "Add Smooth Button Hover Effect",
        description: "Add a hover effect that smoothly changes the button's background color.",
        difficulty: "Basic",
        difficultyScore: 1,
        level: "Basic",
        existingCode: `
          <button class="btn">Click Me</button>
          <style>
              .btn {
                  background-color: blue;
                  color: white;
                  padding: 10px 20px;
                  /* Add hover effect */
              }
          </style>
        `,
        testCases: [
          { condition: "Background color should transition smoothly when hovered." }
        ],
        solutionExplanation: "Use :hover and the transition property.",
        language: "HTML/CSS",
      },
      {
        number: 3,
        title: "Create an Ordered List",
        description: "Create an ordered list with three items: 'First', 'Second', 'Third.'",
        difficulty: "Basic",
        difficultyScore: 1,
        level: "Basic",
        existingCode: `
          <ol>
              <!-- Add list items here -->
          </ol>
        `,
        testCases: [
          { condition: "List should display all three items in order." }
        ],
        solutionExplanation: "Use <li> tags within <ol>.",
        language: "HTML",
      },
      {
        number: 4,
        title: "Convert a Square Image to Circle",
        description: "Style a square image to appear circular using CSS.",
        difficulty: "Basic",
        difficultyScore: 1,
        level: "Basic",
        existingCode: `
          <img src="image.jpg" alt="Sample" class="circle">
          <style>
              .circle {
                  width: 100px;
                  height: 100px;
                  /* Add styles for circular shape */
              }
          </style>
        `,
        testCases: [
          { condition: "Image should appear circular." }
        ],
        solutionExplanation: "Use border-radius: 50%.",
        language: "HTML/CSS",
      },
      {
        number: 5,
        title: "Style a Table",
        description: "Add borders and padding to a basic table.",
        difficulty: "Basic",
        difficultyScore: 1,
        level: "Basic",
        existingCode: `
          <table>
              <tr>
                  <td>Cell 1</td>
                  <td>Cell 2</td>
              </tr>
          </table>
          <style>
              table {
                  /* Add table styles */
              }
              td {
                  /* Add cell styles */
              }
          </style>
        `,
        testCases: [
          { condition: "Table should have borders and padding for cells." }
        ],
        solutionExplanation: "Use border and padding.",
        language: "HTML/CSS",
      },
      {
        number: 6,
        title: "Fix Text Overflow in a Div",
        description: "Prevent overflowing text from breaking out of a container.",
        difficulty: "Basic",
        difficultyScore: 1,
        level: "Basic",
        existingCode: `
          <div class="text-container">This is a very long text that should not overflow the container.</div>
          <style>
              .text-container {
                  width: 200px;
                  height: 100px;
                  /* Add styles to prevent overflow */
              }
          </style>
        `,
        testCases: [
          { condition: "Text should not overflow the container." }
        ],
        solutionExplanation: "Use overflow: hidden or overflow-wrap: break-word.",
        language: "HTML/CSS",
      },
      {
        number: 7,
        title: "Create a Simple Form",
        description: "Build a form with input fields for name and email.",
        difficulty: "Basic",
        difficultyScore: 1,
        level: "Basic",
        existingCode: `
          <form>
              <!-- Add input fields -->
          </form>
        `,
        testCases: [
          { condition: "Form should have input fields for name and email." }
        ],
        solutionExplanation: "Use <input type='text'> and <input type='email'>.",
        language: "HTML",
      },
      {
        number: 8,
        title: "Add Background Color to a Div",
        description: "Style the div with a light gray background color.",
        difficulty: "Basic",
        difficultyScore: 1,
        level: "Basic",
        existingCode: `
          <div class="box">Box Content</div>
          <style>
              .box {
                  /* Add background color */
              }
          </style>
        `,
        testCases: [
          { condition: "Div should have a light gray background." }
        ],
        solutionExplanation: "Use background-color: lightgray.",
        language: "HTML/CSS",
      },
      {
        number: 9,
        title: "Create a Fixed Navbar",
        description: "Make the navbar stick to the top of the page while scrolling.",
        difficulty: "Basic",
        difficultyScore: 1,
        level: "Basic",
        existingCode: `
          <nav class="navbar">Navbar</nav>
          <style>
              .navbar {
                  background-color: black;
                  color: white;
                  /* Add styles for fixed positioning */
              }
          </style>
        `,
        testCases: [
          { condition: "Navbar should remain visible at the top of the page." }
        ],
        solutionExplanation: "Use position: fixed and top: 0.",
        language: "HTML/CSS",
      },
      {
        number: 10,
        title: "Style Links with Hover Underline",
        description: "Add an underline effect to links when hovered.",
        difficulty: "Basic",
        difficultyScore: 1,
        level: "Basic",
        existingCode: `
          <a href="#" class="link">Hover Me</a>
          <style>
              .link {
                  text-decoration: none;
                  /* Add hover styles */
              }
          </style>
        `,
        testCases: [
          { condition: "Link should display an underline when hovered." }
        ],
        solutionExplanation: "Use :hover with text-decoration: underline.",
        language: "HTML/CSS",
      },
      {
        number: 11,
        title: "Create a Bordered Box",
        description: "Add a solid border around the box.",
        difficulty: "Basic",
        difficultyScore: 1,
        level: "Basic",
        existingCode: `
          <div class="box">This is a box</div>
          <style>
              .box {
                  width: 150px;
                  height: 100px;
                  /* Add border styles */
              }
          </style>
        `,
        testCases: [
          { condition: "The box should have a visible border." }
        ],
        solutionExplanation: "Use border: 2px solid black to add a border.",
        language: "HTML/CSS",
      },
      {
        number: 12,
        title: "Add Margins Around Elements",
        description: "Add spacing between the div elements using margins.",
        difficulty: "Basic",
        difficultyScore: 1,
        level: "Basic",
        existingCode: `
          <div class="element">Element 1</div>
          <div class="element">Element 2</div>
          <style>
              .element {
                  background-color: lightblue;
                  /* Add margin styles */
              }
          </style>
        `,
        testCases: [
          { condition: "The divs should have space between them." }
        ],
        solutionExplanation: "Use margin: 10px.",
        language: "HTML/CSS",
      },
      {
        number: 13,
        title: "Create a Button with Rounded Corners",
        description: "Make the button corners rounded using CSS.",
        difficulty: "Basic",
        difficultyScore: 1,
        level: "Basic",
        existingCode: `
          <button class="rounded-btn">Click Me</button>
          <style>
              .rounded-btn {
                  background-color: green;
                  color: white;
                  padding: 10px 20px;
                  /* Add rounded corners */
              }
          </style>
        `,
        testCases: [
          { condition: "The button should have rounded corners." }
        ],
        solutionExplanation: "Use border-radius: 15px.",
        language: "HTML/CSS",
      },
      {
        number: 14,
        title: "Add a Shadow Effect to a Div",
        description: "Add a shadow effect to make the div look elevated.",
        difficulty: "Basic",
        difficultyScore: 1,
        level: "Basic",
        existingCode: `
          <div class="shadow-box">Shadow Box</div>
          <style>
              .shadow-box {
                  width: 200px;
                  height: 100px;
                  background-color: white;
                  /* Add shadow styles */
              }
          </style>
        `,
        testCases: [
          { condition: "The div should have a visible shadow." }
        ],
        solutionExplanation: "Use box-shadow: 5px 5px 10px gray.",
        language: "HTML/CSS",
      },
      {
        number: 15,
        title: "Align Text to the Right",
        description: "Align the text inside the div to the right.",
        difficulty: "Basic",
        difficultyScore: 1,
        level: "Basic",
        existingCode: `
          <div class="right-text">Align me to the right</div>
          <style>
              .right-text {
                  width: 300px;
                  /* Add text alignment */
              }
          </style>
        `,
        testCases: [
          { condition: "Text should align to the right." }
        ],
        solutionExplanation: "Use text-align: right.",
        language: "HTML/CSS",
      },
      {
        number: 16,
        title: "Style a Horizontal Line",
        description: "Change the appearance of the <hr> element.",
        difficulty: "Basic",
        difficultyScore: 1,
        level: "Basic",
        existingCode: `
          <hr class="styled-line">
          <style>
              .styled-line {
                  /* Add styles to customize the line */
              }
          </style>
        `,
        testCases: [
          { condition: "The horizontal line should have custom styling." }
        ],
        solutionExplanation: "Use properties like border, width, and color.",
        language: "HTML/CSS",
      },
      {
        number: 17,
        title: "Add Vertical Spacing Between Paragraphs",
        description: "Add spacing between paragraphs using line height.",
        difficulty: "Basic",
        difficultyScore: 1,
        level: "Basic",
        existingCode: `
          <p class="paragraph">First paragraph</p>
          <p class="paragraph">Second paragraph</p>
          <style>
              .paragraph {
                  /* Add vertical spacing */
              }
          </style>
        `,
        testCases: [
          { condition: "Paragraphs should have visible spacing between them." }
        ],
        solutionExplanation: "Use line-height: 1.6.",
        language: "HTML/CSS",
      },
      {
        number: 18,
        title: "Create a Responsive Image",
        description: "Make the image resize proportionally to fit the container.",
        difficulty: "Basic",
        difficultyScore: 1,
        level: "Basic",
        existingCode: `
          <img src="image.jpg" class="responsive-img">
          <style>
              .responsive-img {
                  /* Add responsive styles */
              }
          </style>
        `,
        testCases: [
          { condition: "The image should resize proportionally within the container." }
        ],
        solutionExplanation: "Use max-width: 100%; height: auto.",
        language: "HTML/CSS",
      },
      {
        number: 19,
        title: "Add a Background Image",
        description: "Set a background image for the div.",
        difficulty: "Basic",
        difficultyScore: 1,
        level: "Basic",
        existingCode: `
          <div class="background-box">Background Content</div>
          <style>
              .background-box {
                  width: 300px;
                  height: 200px;
                  /* Add background image styles */
              }
          </style>
        `,
        testCases: [
          { condition: "Div should display a background image." }
        ],
        solutionExplanation: "Use background-image: url('image.jpg').",
        language: "HTML/CSS",
      },
      {
        number: 20,
        title: "Create a Fixed Width Layout",
        description: "Restrict the width of a container to a fixed size.",
        difficulty: "Basic",
        difficultyScore: 1,
        level: "Basic",
        existingCode: `
          <div class="fixed-container">Fixed Width Content</div>
          <style>
              .fixed-container {
                  /* Add fixed width */
              }
          </style>
        `,
        testCases: [
          { condition: "The container should have a fixed width of 600px." }
        ],
        solutionExplanation: "Use width: 600px and margin: auto for centering.",
        language: "HTML/CSS",
      },
        {
          number: 21,
          title: "Create a Bordered Box",
          description: "Add a solid border around the box.",
          difficulty: "Basic",
          difficultyScore: 1,
          level: "Basic",
          existingCode: `
            <div class="box">This is a box</div>
            <style>
              .box {
                width: 150px;
                height: 100px;
                /* Add border styles */
              }
            </style>
          `,
          testCases: [
            { condition: "The box should have a visible border." }
          ],
          solutionExplanation: "Use border: 2px solid black to add a border.",
          language: "HTML/CSS",
        },
        {
          number: 22,
          title: "Add Margins Around Elements",
          description: "Add spacing between the div elements using margins.",
          difficulty: "Basic",
          difficultyScore: 1,
          level: "Basic",
          existingCode: `
            <div class="element">Element 1</div>
            <div class="element">Element 2</div>
            <style>
              .element {
                background-color: lightblue;
                /* Add margin styles */
              }
            </style>
          `,
          testCases: [
            { condition: "The divs should have space between them." }
          ],
          solutionExplanation: "Use margin: 10px.",
          language: "HTML/CSS",
        },
        {
          number: 23,
          title: "Create a Button with Rounded Corners",
          description: "Make the button corners rounded using CSS.",
          difficulty: "Basic",
          difficultyScore: 1,
          level: "Basic",
          existingCode: `
            <button class="rounded-btn">Click Me</button>
            <style>
              .rounded-btn {
                background-color: green;
                color: white;
                padding: 10px 20px;
                /* Add rounded corners */
              }
            </style>
          `,
          testCases: [
            { condition: "The button should have rounded corners." }
          ],
          solutionExplanation: "Use border-radius: 15px.",
          language: "HTML/CSS",
        },
        {
          number: 24,
          title: "Add a Shadow Effect to a Div",
          description: "Add a shadow effect to make the div look elevated.",
          difficulty: "Basic",
          difficultyScore: 1,
          level: "Basic",
          existingCode: `
            <div class="shadow-box">Shadow Box</div>
            <style>
              .shadow-box {
                width: 200px;
                height: 100px;
                background-color: white;
                /* Add shadow styles */
              }
            </style>
          `,
          testCases: [
            { condition: "The div should have a visible shadow." }
          ],
          solutionExplanation: "Use box-shadow: 5px 5px 10px gray.",
          language: "HTML/CSS",
        },
        {
          number: 25,
          title: "Align Text to the Right",
          description: "Align the text inside the div to the right.",
          difficulty: "Basic",
          difficultyScore: 1,
          level: "Basic",
          existingCode: `
            <div class="right-text">Align me to the right</div>
            <style>
              .right-text {
                width: 300px;
                /* Add text alignment */
              }
            </style>
          `,
          testCases: [
            { condition: "Text should align to the right." }
          ],
          solutionExplanation: "Use text-align: right.",
          language: "HTML/CSS",
        },
        {
          number: 26,
          title: "Style a Horizontal Line",
          description: "Change the appearance of the <hr> element.",
          difficulty: "Basic",
          difficultyScore: 1,
          level: "Basic",
          existingCode: `
            <hr class="styled-line">
            <style>
              .styled-line {
                /* Add styles to customize the line */
              }
            </style>
          `,
          testCases: [
            { condition: "The horizontal line should have custom styling." }
          ],
          solutionExplanation: "Use properties like border, width, and color.",
          language: "HTML/CSS",
        },
        {
          number: 27,
          title: "Add Vertical Spacing Between Paragraphs",
          description: "Add spacing between paragraphs using line height.",
          difficulty: "Basic",
          difficultyScore: 1,
          level: "Basic",
          existingCode: `
            <p class="paragraph">First paragraph</p>
            <p class="paragraph">Second paragraph</p>
            <style>
              .paragraph {
                /* Add vertical spacing */
              }
            </style>
          `,
          testCases: [
            { condition: "Paragraphs should have visible spacing between them." }
          ],
          solutionExplanation: "Use line-height: 1.6.",
          language: "HTML/CSS",
        },
        {
          number: 28,
          title: "Create a Responsive Image",
          description: "Make the image resize proportionally to fit the container.",
          difficulty: "Basic",
          difficultyScore: 1,
          level: "Basic",
          existingCode: `
            <img src="image.jpg" class="responsive-img">
            <style>
              .responsive-img {
                /* Add responsive styles */
              }
            </style>
          `,
          testCases: [
            { condition: "The image should resize proportionally within the container." }
          ],
          solutionExplanation: "Use max-width: 100%; height: auto.",
          language: "HTML/CSS",
        },
        {
          number: 29,
          title: "Add a Background Image",
          description: "Set a background image for the div.",
          difficulty: "Basic",
          difficultyScore: 1,
          level: "Basic",
          existingCode: `
            <div class="background-box">Background Content</div>
            <style>
              .background-box {
                width: 300px;
                height: 200px;
                /* Add background image styles */
              }
            </style>
          `,
          testCases: [
            { condition: "Div should display a background image." }
          ],
          solutionExplanation: "Use background-image: url('image.jpg').",
          language: "HTML/CSS",
        },
        {
          number: 30,
          title: "Create a Fixed Width Layout",
          description: "Restrict the width of a container to a fixed size.",
          difficulty: "Basic",
          difficultyScore: 1,
          level: "Basic",
          existingCode: `
            <div class="fixed-container">Fixed Width Content</div>
            <style>
              .fixed-container {
                /* Add fixed width */
              }
            </style>
          `,
          testCases: [
            { condition: "The container should have a fixed width of 600px." }
          ],
          solutionExplanation: "Use width: 600px and margin: auto for centering.",
          language: "HTML/CSS",
        },
        {
          number: 31,
          title: "Style a Blockquote",
          description: "Add styles to make the <blockquote> stand out.",
          difficulty: "Basic",
          difficultyScore: 1,
          level: "Basic",
          existingCode: `
            <blockquote class="styled-quote">This is a quote.</blockquote>
            <style>
              .styled-quote {
                /* Add styles to style the blockquote */
              }
            </style>
          `,
          testCases: [
            { condition: "Blockquote should have distinct styles (e.g., italics, padding, border)." }
          ],
          solutionExplanation: "Use font-style: italic, padding, and border-left.",
          language: "HTML/CSS",
        },
        {
          number: 32,
          title: "Add a Gradient Background",
          description: "Apply a gradient background to the div.",
          difficulty: "Basic",
          difficultyScore: 1,
          level: "Basic",
          existingCode: `
            <div class="gradient-box">Gradient Background</div>
            <style>
              .gradient-box {
                width: 300px;
                height: 200px;
                /* Add gradient background */
              }
            </style>
          `,
          testCases: [
            { condition: "Div should display a gradient background." }
          ],
          solutionExplanation: "Use background: linear-gradient(to right, red, blue).",
          language: "HTML/CSS",
        },
        {
          number: 33,
          title: "Change Text Color on Hover",
          description: "Add a hover effect that changes the text color.",
          difficulty: "Basic",
          difficultyScore: 1,
          level: "Basic",
          existingCode: `
            <p class="hover-text">Hover over me</p>
            <style>
              .hover-text {
                color: black;
                /* Add hover effect */
              }
            </style>
          `,
          testCases: [
            { condition: "Text color should change to blue on hover." }
          ],
          solutionExplanation: "Use :hover with color: blue.",
          language: "HTML/CSS",
        },
        {
          number: 34,
          title: "Add Padding Inside a Div",
          description: "Add padding to create space inside the div.",
          difficulty: "Basic",
          difficultyScore: 1,
          level: "Basic",
          existingCode: `
            <div class="padded-box">Content inside</div>
            <style>
              .padded-box {
                width: 200px;
                height: 100px;
                background-color: lightgray;
                /* Add padding */
              }
            </style>
          `,
          testCases: [
            { condition: "Content should have space inside the div." }
          ],
          solutionExplanation: "Use padding: 20px.",
          language: "HTML/CSS",
        },
        {
          number: 35,
          title: "Create a Simple Navigation Bar",
          description: "Create a horizontal navigation bar with three links.",
          difficulty: "Basic",
          difficultyScore: 1,
          level: "Basic",
          existingCode: `
            <nav class="navbar">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </nav>
            <style>
              .navbar {
                /* Add styles for horizontal layout */
              }
            </style>
          `,
          testCases: [
            { condition: "Links should appear in a horizontal row." }
          ],
          solutionExplanation: "Use display: inline-block or flexbox.",
          language: "HTML/CSS",
        },
        {
          number: 36,
          title: "Add Text Shadow to a Heading",
          description: "Make the heading stand out with a shadow effect.",
          difficulty: "Basic",
          difficultyScore: 1,
          level: "Basic",
          existingCode: `
            <h1 class="shadow-heading">Shadow Effect</h1>
            <style>
              .shadow-heading {
                /* Add shadow effect */
              }
            </style>
          `,
          testCases: [
            { condition: "Heading should have a visible shadow." }
          ],
          solutionExplanation: "Use text-shadow: 2px 2px 5px gray.",
          language: "HTML/CSS",
        },
        {
          number: 37,
          title: "Style Unordered List Bullets",
          description: "Change the bullet style of the unordered list.",
          difficulty: "Basic",
          difficultyScore: 1,
          level: "Basic",
          existingCode: `
            <ul class="styled-list">
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
            <style>
              .styled-list {
                /* Add custom bullet styles */
              }
            </style>
          `,
          testCases: [
            { condition: "List bullets should be customized (e.g., squares, circles)." }
          ],
          solutionExplanation: "Use list-style-type: square or list-style-type: circle.",
          language: "HTML/CSS",
        },
        {
          number: 38,
          title: "Add a Max Width to an Image",
          description: "Restrict the image's width while keeping it responsive.",
          difficulty: "Basic",
          difficultyScore: 1,
          level: "Basic",
          existingCode: `
            <img src="image.jpg" class="max-width-img">
            <style>
              .max-width-img {
                /* Add max width */
              }
            </style>
          `,
          testCases: [
            { condition: "Image should not exceed a width of 300px." }
          ],
          solutionExplanation: "Use max-width: 300px and height: auto.",
          language: "HTML/CSS",
        },
        {
          number: 39,
          title: "Create a Highlighted Text Block",
          description: "Style the div to look like a highlighted text block.",
          difficulty: "Basic",
          difficultyScore: 1,
          level: "Basic",
          existingCode: `
            <div class="highlight-box">Highlighted Text</div>
            <style>
              .highlight-box {
                /* Add styles for highlighted appearance */
              }
            </style>
          `,
          testCases: [
            { condition: "Div should have a background color resembling a highlighter." }
          ],
          solutionExplanation: "Use background-color: yellow.",
          language: "HTML/CSS",
        },
        {
          number: 40,
          title: "Align an Image to the Center",
          description: "Center an image horizontally within a container.",
          difficulty: "Basic",
          difficultyScore: 1,
          level: "Basic",
          existingCode: `
            <div class="image-container">
              <img src="image.jpg" alt="Centered Image">
            </div>
            <style>
              .image-container {
                width: 300px;
                height: 200px;
                /* Add styles for centering */
              }
              img {
                /* Center the image */
              }
            </style>
          `,
          testCases: [
            { condition: "Image should be centered horizontally." }
          ],
          solutionExplanation: "Use margin: auto or text-align: center with display: block.",
          language: "HTML/CSS",
        },
          {
            number: 41,
            title: "Style a Form Submit Button",
            description: "Create a visually appealing submit button for a form.",
            difficulty: "Basic",
            difficultyScore: 1,
            level: "Basic",
            existingCode: `
              <form>
                <input type="text" placeholder="Name">
                <button class="submit-btn">Submit</button>
              </form>
              <style>
                .submit-btn {
                  /* Add styles for the submit button */
                }
              </style>
            `,
            testCases: [
              { condition: "The submit button should look distinct and styled." }
            ],
            solutionExplanation: "Use properties like background-color, border-radius, and padding.",
            language: "HTML/CSS",
          },
          {
            number: 42,
            title: "Add a Dashed Border to a Box",
            description: "Create a box with a dashed border.",
            difficulty: "Basic",
            difficultyScore: 1,
            level: "Basic",
            existingCode: `
              <div class="dashed-box">Dashed Border Box</div>
              <style>
                .dashed-box {
                  width: 200px;
                  height: 100px;
                  /* Add dashed border */
                }
              </style>
            `,
            testCases: [
              { condition: "Box should have a dashed border." }
            ],
            solutionExplanation: "Use border: 2px dashed black.",
            language: "HTML/CSS",
          },
          {
            number: 43,
            title: "Center Inline Text",
            description: "Center the inline text within a container.",
            difficulty: "Basic",
            difficultyScore: 1,
            level: "Basic",
            existingCode: `
              <div class="inline-container">
                <span class="center-text">Center Me</span>
              </div>
              <style>
                .inline-container {
                  height: 100px;
                  /* Add styles to center text */
                }
                .center-text {
                  /* Center inline text */
                }
              </style>
            `,
            testCases: [
              { condition: "Text should be horizontally and vertically centered." }
            ],
            solutionExplanation: "Use text-align or line-height for inline text.",
            language: "HTML/CSS",
          },
          {
            number: 44,
            title: "Create a Hover Tooltip",
            description: "Add a tooltip that appears above a button on hover.",
            difficulty: "Basic",
            difficultyScore: 1,
            level: "Basic",
            existingCode: `
              <div class="tooltip-container">
                <button class="tooltip-btn">Hover over me</button>
                <span class="tooltip-text">Tooltip Message</span>
              </div>
              <style>
                .tooltip-container {
                  position: relative;
                  display: inline-block;
                }
                .tooltip-text {
                  visibility: hidden;
                  position: absolute;
                  bottom: 100%;
                  left: 50%;
                  transform: translateX(-50%);
                  /* Add tooltip styles */
                }
                .tooltip-btn:hover + .tooltip-text {
                  visibility: visible;
                }
              </style>
            `,
            testCases: [
              { condition: "Tooltip should appear when hovering over the button." }
            ],
            solutionExplanation: "Use visibility: hidden and :hover to toggle tooltip visibility.",
            language: "HTML/CSS",
          },
          {
            number: 45,
            title: "Add a Gradient Border",
            description: "Create a div with a gradient border.",
            difficulty: "Basic",
            difficultyScore: 1,
            level: "Basic",
            existingCode: `
              <div class="gradient-border">Gradient Border</div>
              <style>
                .gradient-border {
                  width: 200px;
                  height: 100px;
                  /* Add gradient border styles */
                }
              </style>
            `,
            testCases: [
              { condition: "The div should have a gradient-colored border." }
            ],
            solutionExplanation: "Use background: linear-gradient and border-image-source.",
            language: "HTML/CSS",
          },
          {
            number: 46,
            title: "Restrict Ingth",
            description: "Restrict the maximum number of characters in a text input.",
            difficulty: "Basic",
            difficultyScore: 1,
            level: "Basic",
            existingCode: `
              <input type="text" class="restricted-input" maxlength="10">
              <style>
                .restricted-input {
                  /* Add styling for the input */
                }
              </style>
            `,
            testCases: [
              { condition: "Input should accept a maximum of 10 characters." }
            ],
            solutionExplanation: "Use the maxlength attribute in the <input> tag.",
            language: "HTML",
          },
          {
            number: 47,
            title: "Style Radio Buttons",
            description: "Customize the appearance of radio buttons.",
            difficulty: "Basic",
            difficultyScore: 1,
            level: "Basic",
            existingCode: `
              <label>
                <input type="radio" class="custom-radio" name="option" value="1"> Option 1
              </label>
              <style>
                .custom-radio {
                  /* Add styles for custom radio buttons */
                }
              </style>
            `,
            testCases: [
              { condition: "Radio buttons should have a custom look (e.g., larger size or different color)." }
            ],
            solutionExplanation: "Use appearance: none and style with border and background.",
            language: "HTML/CSS",
          },
          {
            number: 48,
            title: "Add Vertical Divider",
            description: "Create a vertical line between two elements.",
            difficulty: "Basic",
            difficultyScore: 1,
            level: "Basic",
            existingCode: `
              <div class="container">
                <div class="left">Left Content</div>
                <div class="divider"></div>
                <div class="right">Right Content</div>
              </div>
              <style>
                .divider {
                  /* Add vertical divider styles */
                }
              </style>
            `,
            testCases: [
              { condition: "Divider should appear vertically between the two elements." }
            ],
            solutionExplanation: "Use border-left or a narrow div styled for the divider.",
            language: "HTML/CSS",
          },
          {
            number: 49,
            title: "Create a Card Component",
            description: "Design a card layout with a title, image, and description.",
            difficulty: "Basic",
            difficultyScore: 1,
            level: "Basic",
            existingCode: `
              <div class="card">
                <img src="image.jpg" alt="Card Image">
                <h3>Card Title</h3>
                <p>Card description goes here.</p>
              </div>
              <style>
                .card {
                  /* Add card styles */
                }
                img {
                  width: 100%;
                  /* Add styles for the image */
                }
              </style>
            `,
            testCases: [
              { condition: "Card should display an image, title, and description in a clean layout." }
            ],
            solutionExplanation: "Use box-shadow, padding, and border-radius.",
            language: "HTML/CSS",
          },
          {
            number: 50,
            title: "Style a Search Bar",
            description: "Create a search bar with a magnifying glass icon.",
            difficulty: "Basic",
            difficultyScore: 1,
            level: "Basic",
            existingCode: `
              <div class="search-bar">
                <input type="text" placeholder="Search...">
                <button class="search-btn">&#128269;</button>
              </div>
              <style>
                .search-bar {
                  display: flex;
                  /* Add search bar styles */
                }
                .search-btn {
                  /* Style the button with the icon */
                }
              </style>
            `,
            testCases: [
              { condition: "Search bar should have an input field and a styled button with an icon." }
            ],
            solutionExplanation: "Use flexbox for layout and style the icon with Unicode characters.",
            language: "HTML/CSS",
          },
          {
            number: 51,
            title: "Style Table Headers",
            description: "Add custom styles to the table headers.",
            difficulty: "Basic",
            difficultyScore: 1,
            level: "Basic",
            existingCode: `
              <table>
                <thead>
                  <tr>
                    <th>Header 1</th>
                    <th>Header 2</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Data 1</td>
                    <td>Data 2</td>
                  </tr>
                </tbody>
              </table>
              <style>
                th {
                  /* Add header styles */
                }
              </style>
            `,
            testCases: [
              { condition: "Headers should have bold text, a background color, and padding." }
            ],
            solutionExplanation: "Use font-weight, background-color, and padding.",
            language: "HTML/CSS",
          },
          {
            number: 52,
            title: "Create a Vertical Navigation Bar",
            description: "Create a vertical navigation bar with three links.",
            difficulty: "Basic",
            difficultyScore: 1,
            level: "Basic",
            existingCode: `
              <nav class="vertical-navbar">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
              </nav>
              <style>
                .vertical-navbar {
                  /* Add vertical navigation styles */
                }
              </style>
            `,
            testCases: [
              { condition: "Links should appear stacked vertically." }
            ],
            solutionExplanation: "Use display: block or flex-direction: column.",
            language: "HTML/CSS",
          },
          {
            number: 53,
            title: "Highlight a Selected Menu Item",
            description: "Style the active link in a navigation bar.",
            difficulty: "Basic",
            difficultyScore: 1,
            level: "Basic",
            existingCode: `
              <nav>
                <a href="#" class="menu-item active">Home</a>
                <a href="#" class="menu-item">About</a>
                <a href="#" class="menu-item">Contact</a>
              </nav>
              <style>
                .menu-item.active {
                  /* Add active menu item styles */
                }
              </style>
            `,
            testCases: [
              { condition: "The active link should look distinct." }
            ],
            solutionExplanation: "Use a different color or background-color for .active.",
            language: "HTML/CSS",
          },
          {
            number: 54,
            title: "Style Block Elements with Hover Effects",
            description: "Add hover effects to div elements.",
            difficulty: "Basic",
            difficultyScore: 1,
            level: "Basic",
            existingCode: `
              <div class="hover-box">Hover over me</div>
              <style>
                .hover-box {
                  width: 200px;
                  height: 100px;
                  background-color: lightblue;
                  /* Add hover styles */
                }
              </style>
            `,
            testCases: [
              { condition: "Background color should change when hovered." }
            ],
            solutionExplanation: "Use :hover with a new background-color.",
            language: "HTML/CSS",
          },
          {
            number: 55,
            title: "Style Input Fields",
            description: "Customize the appearance of input fields.",
            difficulty: "Basic",
            difficultyScore: 1,
            level: "Basic",
            existingCode: `
              <input type="text" class="custom-input">
              <style>
                .custom-input {
                  /* Add input styles */
                }
              </style>
            `,
            testCases: [
              { condition: "Input fields should have padding, borders, and distinct focus styles." }
            ],
            solutionExplanation: "Use padding, border, and :focus.",
            language: "HTML/CSS",
          },
          {
            number: 56,
            title: "Add a Fixed Footer",
            description: "Make the footer stick to the bottom of the viewport.",
            difficulty: "Basic",
            difficultyScore: 1,
            level: "Basic",
            existingCode: `
              <footer class="fixed-footer">Footer Content</footer>
              <style>
                .fixed-footer {
                  /* Add fixed positioning styles */
                }
              </style>
            `,
            testCases: [
              { condition: "Footer should remain visible at the bottom while scrolling." }
            ],
            solutionExplanation: "Use position: fixed and bottom: 0.",
            language: "HTML/CSS",
          },
          {
            number: 57,
            title: "Center a Modal Box",
            description: "Create and center a modal box on the screen.",
            difficulty: "Basic",
            difficultyScore: 1,
            level: "Basic",
            existingCode: `
              <div class="modal">This is a modal</div>
              <style>
                .modal {
                  width: 300px;
                  height: 150px;
                  background-color: white;
                  /* Add styles to center the modal */
                }
              </style>
            `,
            testCases: [
              { condition: "Modal should appear centered horizontally and vertically." }
            ],
            solutionExplanation: "Use position: absolute, top: 50%, and left: 50% with transform.",
            language: "HTML/CSS",
          },
          {
            number: 58,
            title: "Style a Disabled Input",
            description: "Make disabled input fields visually distinct.",
            difficulty: "Basic",
            difficultyScore: 1,
            level: "Basic",
            existingCode: `
              <input type="text" class="disabled-input" disabled>
              <style>
                .disabled-input {
                  /* Add disabled styles */
                }
              </style>
            `,
            testCases: [
              { condition: "Disabled input should look grayed out." }
            ],
            solutionExplanation: "Use background-color: lightgray and opacity.",
            language: "HTML/CSS",
          },
          {
            number: 59,
            title: "Create an Accordion",
            description: "Create a collapsible section that shows/hides content.",
            difficulty: "Basic",
            difficultyScore: 1,
            level: "Basic",
            existingCode: `
              <div class="accordion">
                <button class="accordion-btn">Toggle Content</button>
                <div class="accordion-content">Hidden Content</div>
              </div>
              <style>
                .accordion-content {
                  /* Add hidden styles */
                }
              </style>
            `,
            testCases: [
              { condition: "Clicking the button should toggle the visibility of the content." }
            ],
            solutionExplanation: "Use display: none and display: block.",
            language: "HTML/CSS",
          },
          {
            number: 60,
            title: "Style an Inline Code Block",
            description: "Add custom styles to inline code snippets.",
            difficulty: "Basic",
            difficultyScore: 1,
            level: "Basic",
            existingCode: `
              <p>Use the <code class="inline-code">console.log()</code> function to debug.</p>
              <style>
                .inline-code {
                  /* Add styles for inline code */
                }
              </style>
            `,
            testCases: [
              { condition: "Inline code should appear distinct (e.g., with a background and font style)." }
            ],
            solutionExplanation: "Use background-color, font-family: monospace, and padding.",
            language: "HTML/CSS",
          },
            {
              number: 61,
              title: "Highlight an Active Input Field",
              description: "Add focus styles to highlight the active input.",
              difficulty: "Basic",
              difficultyScore: 1,
              level: "Basic",
              existingCode: `
                <input type="text" class="focus-input">
                <style>
                  .focus-input:focus {
                    /* Add focus styles */
                  }
                </style>
              `,
              testCases: [
                { condition: "Input field should have a blue border when focused." }
              ],
              solutionExplanation: "Use outline or border with :focus.",
              language: "HTML/CSS",
            },
            {
              number: 62,
              title: "Add a Fixed Background Image",
              description: "Add a fixed background image to a section.",
              difficulty: "Basic",
              difficultyScore: 1,
              level: "Basic",
              existingCode: `
                <div class="fixed-bg">Content Here</div>
                <style>
                  .fixed-bg {
                    /* Add fixed background styles */
                  }
                </style>
              `,
              testCases: [
                { condition: "Background image should not scroll with the content." }
              ],
              solutionExplanation: "Use background-attachment: fixed.",
              language: "HTML/CSS",
            },
            {
              number: 63,
              title: "Create a Full-Width Header",
              description: "Make the header span the entire width of the screen.",
              difficulty: "Basic",
              difficultyScore: 1,
              level: "Basic",
              existingCode: `
                <header class="full-width-header">Header</header>
                <style>
                  .full-width-header {
                    /* Add full-width styles */
                  }
                </style>
              `,
              testCases: [
                { condition: "Header should occupy 100% of the viewport width." }
              ],
              solutionExplanation: "Use width: 100%.",
              language: "HTML/CSS",
            },
            {
              number: 64,
              title: "Add Alternating Row Colors to a Table",
              description: "Style table rows with alternating colors.",
              difficulty: "Basic",
              difficultyScore: 1,
              level: "Basic",
              existingCode: `
                <table class="striped-table">
                  <tr>
                    <td>Row 1</td>
                  </tr>
                  <tr>
                    <td>Row 2</td>
                  </tr>
                </table>
                <style>
                  .striped-table tr:nth-child(even) {
                    /* Add alternate row styles */
                  }
                </style>
              `,
              testCases: [
                { condition: "Alternate rows should have different background colors." }
              ],
              solutionExplanation: "Use nth-child for row selection.",
              language: "HTML/CSS",
            },
            {
              number: 65,
              title: "Create a Simple Dropdown Menu",
              description: "Create a dropdown menu for navigation.",
              difficulty: "Basic",
              difficultyScore: 1,
              level: "Basic",
              existingCode: `
                <div class="dropdown">
                  <button class="dropdown-btn">Menu</button>
                  <div class="dropdown-content">
                    <a href="#">Option 1</a>
                    <a href="#">Option 2</a>
                  </div>
                </div>
                <style>
                  .dropdown-content {
                    /* Add hidden styles for the menu */
                  }
                  .dropdown-btn:hover + .dropdown-content {
                    /* Show dropdown */
                  }
                </style>
              `,
              testCases: [
                { condition: "Dropdown menu should appear on hover." }
              ],
              solutionExplanation: "Use display: none and toggle with :hover.",
              language: "HTML/CSS",
            },
            {
              number: 66,
              title: "Add Text Underline Animation",
              description: "Create an animated underline effect for links.",
              difficulty: "Basic",
              difficultyScore: 1,
              level: "Basic",
              existingCode: `
                <a href="#" class="underline-link">Hover Me</a>
                <style>
                  .underline-link {
                    /* Add animated underline styles */
                  }
                </style>
              `,
              testCases: [
                { condition: "Underline should appear smoothly on hover." }
              ],
              solutionExplanation: "Use transition and :hover.",
              language: "HTML/CSS",
            },
            {
              number: 67,
              title: "Style a Notification Badge",
              description: "Add a small notification badge to an icon.",
              difficulty: "Basic",
              difficultyScore: 1,
              level: "Basic",
              existingCode: `
                <div class="icon-container">
                  <span class="notification-badge">3</span>
                  <i class="icon">🔔</i>
                </div>
                <style>
                  .notification-badge {
                    /* Add badge styles */
                  }
                </style>
              `,
              testCases: [
                { condition: "Badge should appear in the corner of the icon." }
              ],
              solutionExplanation: "Use position: absolute and top/right for placement.",
              language: "HTML/CSS",
            },
            {
              number: 68,
              title: "Create a Circular Badge",
              description: "Add a circular badge to an icon to display a notification count.",
              difficulty: "Basic",
              difficultyScore: 1,
              level: "Basic",
              existingCode: `
                <div class="badge-icon">
                  <span class="badge-count">9</span>
                  <i class="icon">🔔</i>
                </div>
                <style>
                  .badge-count {
                    /* Add circular badge styles */
                  }
                </style>
              `,
              testCases: [
                { condition: "Badge should appear as a small circle." }
              ],
              solutionExplanation: "Use border-radius: 50% and position: absolute.",
              language: "HTML/CSS",
            },
            {
              number: 69,
              title: "Create a Loading Spinner",
              description: "Create a simple loading spinner using CSS animations.",
              difficulty: "Basic",
              difficultyScore: 1,
              level: "Basic",
              existingCode: `
                <div class="spinner"></div>
                <style>
                  .spinner {
                    width: 40px;
                    height: 40px;
                    /* Add spinner animation */
                  }
                  @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                  }
                </style>
              `,
              testCases: [
                { condition: "Spinner should rotate indefinitely." }
              ],
              solutionExplanation: "Use @keyframes and animation for rotation.",
              language: "HTML/CSS",
            },
            {
              number: 70,
              title: "Add Animation to an Image on Hover",
              description: "Make the image zoom in slightly when hovered.",
              difficulty: "Basic",
              difficultyScore: 1,
              level: "Basic",
              existingCode: `
                <img src="image.jpg" class="zoom-img">
                <style>
                  .zoom-img {
                    /* Add zoom effect on hover */
                  }
                </style>
              `,
              testCases: [
                { condition: "Image should zoom in smoothly on hover." }
              ],
              solutionExplanation: "Use transform: scale(1.1) with :hover and transition.",
              language: "HTML/CSS",
            },
            {
              number: 71,
              title: "Add a Border to an Image",
              description: "Style the image with a decorative border.",
              difficulty: "Basic",
              difficultyScore: 1,
              level: "Basic",
              existingCode: `
                <img src="image.jpg" class="bordered-img">
                <style>
                  .bordered-img {
                    /* Add border styles */
                  }
                </style>
              `,
              testCases: [
                { condition: "Image should have a visible border (e.g., solid black, 5px thick)." }
              ],
              solutionExplanation: "Use border: 5px solid black.",
              language: "HTML/CSS",
            },
            {
              number: 72,
              title: "Add Letter Spacing to Text",
              description: "Style the text with custom letter spacing.",
              difficulty: "Basic",
              difficultyScore: 1,
              level: "Basic",
              existingCode: `
                <p class="spaced-text">Adjust my spacing</p>
                <style>
                  .spaced-text {
                    /* Add letter spacing */
                  }
                </style>
              `,
              testCases: [
                { condition: "Text should have noticeable letter spacing." }
              ],
              solutionExplanation: "Use letter-spacing: 2px.",
              language: "HTML/CSS",
            },
            {
              number: 73,
              title: "Create a Shadow for a Button",
              description: "Add a shadow effect to make the button stand out.",
              difficulty: "Basic",
              difficultyScore: 1,
              level: "Basic",
              existingCode: `
                <button class="shadow-btn">Click Me</button>
                <style>
                  .shadow-btn {
                    /* Add shadow styles */
                  }
                </style>
              `,
              testCases: [
                { condition: "Button should have a subtle shadow." }
              ],
              solutionExplanation: "Use box-shadow for a 3D effect.",
              language: "HTML/CSS",
            },
            {
              number: 74,
              title: "Make a Section Fullscreen",
              description: "Style a section to cover the entire viewport height.",
              difficulty: "Basic",
              difficultyScore: 1,
              level: "Basic",
              existingCode: `
                <section class="fullscreen-section">Content Here</section>
                <style>
                  .fullscreen-section {
                    /* Add fullscreen styles */
                  }
                </style>
              `,
              testCases: [
                { condition: "Section should span the full height of the screen." }
              ],
              solutionExplanation: "Use height: 100vh.",
              language: "HTML/CSS",
            },
            {
              number: 75,
              title: "Style a Block of Preformatted Text",
              description: "Add custom styles to a block of preformatted text.",
              difficulty: "Basic",
              difficultyScore: 1,
              level: "Basic",
              existingCode: `
                <pre class="styled-pre">
                  Preformatted text goes here.
                </pre>
                <style>
                  .styled-pre {
                    /* Add preformatted text styles */
                  }
                </style>
              `,
              testCases: [
                { condition: "Text block should appear with custom font, color, and padding." }
              ],
              solutionExplanation: "Use font-family: monospace, padding, and background-color.",
              language: "HTML/CSS",
            },
            {
              number: 76,
              title: "Create a Split Screen Layout",
              description: "Divide the screen into two equal sections side by side.",
              difficulty: "Basic",
              difficultyScore: 1,
              level: "Basic",
              existingCode: `
                <div class="split-screen">
                  <div class="left">Left Content</div>
                  <div class="right">Right Content</div>
                </div>
                <style>
                  .split-screen {
                    /* Add split screen layout styles */
                  }
                </style>
              `,
              testCases: [
                { condition: "Content should split evenly across the screen." }
              ],
              solutionExplanation: "Use display: flex and flex: 1 for both sections.",
              language: "HTML/CSS",
            },
            {
              number: 77,
              title: "Style a Circular Progress Bar",
              description: "Create a circular progress bar using CSS.",
              difficulty: "Basic",
              difficultyScore: 1,
              level: "Basic",
              existingCode: `
                <div class="progress-circle"></div>
                <style>
                  .progress-circle {
                    /* Add circular progress bar styles */
                  }
                </style>
              `,
              testCases: [
                { condition: "Circular progress bar should appear with a visual percentage." }
              ],
              solutionExplanation: "Use border and border-radius: 50% along with animations.",
              language: "HTML/CSS",
            },
            {
              number: 78,
              title: "Add Vertical Alignment to Flex Items",
              description: "Center flex items vertically within a container.",
              difficulty: "Basic",
              difficultyScore: 1,
              level: "Basic",
              existingCode: `
                <div class="flex-container">
                  <div class="flex-item">Item 1</div>
                  <div class="flex-item">Item 2</div>
                </div>
                <style>
                  .flex-container {
                    /* Add vertical alignment styles */
                  }
                </style>
              `,
              testCases: [
                { condition: "Items should align vertically in the center." }
              ],
              solutionExplanation: "Use align-items: center.",
              language: "HTML/CSS",
            },
            {
              number: 79,
              title: "Style an Alert Box",
              description: "Create a red alert box for error messages.",
              difficulty: "Basic",
              difficultyScore: 1,
              level: "Basic",
              existingCode: `
                <div class="alert-box">Error: Something went wrong.</div>
                <style>
                  .alert-box {
                    /* Add alert box styles */
                  }
                </style>
              `,
              testCases: [
                { condition: "Box should have a red background, bold text, and padding." }
              ],
              solutionExplanation: "Use background-color: red, color: white, and padding.",
              language: "HTML/CSS",
            },
            {
              number: 80,
              title: "Style a Hover Button with Rotation",
              description: "Make the button rotate slightly when hovered.",
              difficulty: "Basic",
              difficultyScore: 1,
              level: "Basic",
              existingCode: `
                <button class="rotate-btn">Hover Me</button>
                <style>
                  .rotate-btn {
                    /* Add hover rotation styles */
                  }
                </style>
              `,
              testCases: [
                { condition: "Button should rotate slightly on hover." }
              ],
              solutionExplanation: "Use transform: rotate with :hover.",
              language: "HTML/CSS",
            },
            {
                number: 81,
                title: "Create a Full-Page Overlay",
                description: "Create an overlay that covers the entire page.",
                difficulty: "Basic",
                difficultyScore: 1,
                level: "Basic",
                existingCode: `
                  <div class="overlay">Overlay Content</div>
                  <style>
                    .overlay {
                      /* Add full-page overlay styles */
                    }
                  </style>
                `,
                testCases: [
                  { condition: "Overlay should cover the entire page." }
                ],
                solutionExplanation: "Use position: fixed, top: 0, left: 0, width: 100vw, height: 100vh.",
                language: "HTML/CSS",
              },
              {
                number: 82,
                title: "Style a Text Area",
                description: "Add custom styles to a text area element.",
                difficulty: "Basic",
                difficultyScore: 1,
                level: "Basic",
                existingCode: `
                  <textarea class="styled-textarea"></textarea>
                  <style>
                    .styled-textarea {
                      /* Add text area styles */
                    }
                  </style>
                `,
                testCases: [
                  { condition: "Text area should have padding, borders, and a different background color." }
                ],
                solutionExplanation: "Use padding, border, and background-color properties.",
                language: "HTML/CSS",
              },
              {
                number: 83,
                title: "Add a Slide-In Animation",
                description: "Create a div that slides in from the left when the page loads.",
                difficulty: "Basic",
                difficultyScore: 1,
                level: "Basic",
                existingCode: `
                  <div class="slide-in">Sliding Content</div>
                  <style>
                    .slide-in {
                      /* Add slide-in animation styles */
                    }
                  </style>
                `,
                testCases: [
                  { condition: "Div should slide in from the left when the page loads." }
                ],
                solutionExplanation: "Use @keyframes and animation with transform: translateX().",
                language: "HTML/CSS",
              },
              {
                number: 84,
                title: "Style a File Input",
                description: "Customize the appearance of a file input field.",
                difficulty: "Basic",
                difficultyScore: 1,
                level: "Basic",
                existingCode: `
                  <input type="file" class="custom-file-input">
                  <style>
                    .custom-file-input {
                      /* Add styles for the file input */
                    }
                  </style>
                `,
                testCases: [
                  { condition: "File input should have custom styles for the button and text." }
                ],
                solutionExplanation: "Use appearance: none and add custom styles for the button.",
                language: "HTML/CSS",
              },
              {
                number: 85,
                title: "Create a Bouncing Ball Animation",
                description: "Animate a div to look like a bouncing ball.",
                difficulty: "Basic",
                difficultyScore: 1,
                level: "Basic",
                existingCode: `
                  <div class="bouncing-ball"></div>
                  <style>
                    .bouncing-ball {
                      /* Add bouncing animation styles */
                    }
                  </style>
                `,
                testCases: [
                  { condition: "Div should bounce up and down continuously." }
                ],
                solutionExplanation: "Use @keyframes with transform: translateY() and animation properties.",
                language: "HTML/CSS",
              },
              {
                number: 86,
                title: "Add Text Rotation on Hover",
                description: "Make the text rotate slightly when hovered.",
                difficulty: "Basic",
                difficultyScore: 1,
                level: "Basic",
                existingCode: `
                  <p class="rotate-text">Hover over me</p>
                  <style>
                    .rotate-text {
                      /* Add text rotation effect on hover */
                    }
                  </style>
                `,
                testCases: [
                  { condition: "Text should rotate slightly on hover." }
                ],
                solutionExplanation: "Use transform: rotate() with :hover and transition.",
                language: "HTML/CSS",
              },
              {
                number: 87,
                title: "Create a Fading Image Gallery",
                description: "Create an image gallery where images fade in and out on hover.",
                difficulty: "Basic",
                difficultyScore: 1,
                level: "Basic",
                existingCode: `
                  <div class="gallery">
                    <img src="image1.jpg" class="gallery-img">
                    <img src="image2.jpg" class="gallery-img">
                  </div>
                  <style>
                    .gallery-img {
                      /* Add fading effect on hover */
                    }
                  </style>
                `,
                testCases: [
                  { condition: "Images should fade in and out smoothly on hover." }
                ],
                solutionExplanation: "Use opacity with transition for smooth fading.",
                language: "HTML/CSS",
              },
              {
                number: 88,
                title: "Style a Blockquote",
                description: "Add styles to a blockquote to make it visually distinct.",
                difficulty: "Basic",
                difficultyScore: 1,
                level: "Basic",
                existingCode: `
                  <blockquote class="styled-quote">This is a quote.</blockquote>
                  <style>
                    .styled-quote {
                      /* Add styles to style the blockquote */
                    }
                  </style>
                `,
                testCases: [
                  { condition: "Blockquote should have distinct styles like padding and border." }
                ],
                solutionExplanation: "Use padding, border-left, and font-style: italic.",
                language: "HTML/CSS",
              },
              {
                number: 89,
                title: "Create a Flip Card Animation",
                description: "Create a card that flips to reveal content on hover.",
                difficulty: "Basic",
                difficultyScore: 1,
                level: "Basic",
                existingCode: `
                  <div class="flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">Front</div>
                      <div class="flip-card-back">Back</div>
                    </div>
                  </div>
                  <style>
                    .flip-card {
                      /* Add flip card styles */
                    }
                  </style>
                `,
                testCases: [
                  { condition: "Card should flip smoothly to show the back content on hover." }
                ],
                solutionExplanation: "Use transform: rotateY() and perspective for 3D flip effect.",
                language: "HTML/CSS",
              },
              {
                number: 90,
                title: "Add Pulsing Animation to a Button",
                description: "Create a button that pulses to draw attention.",
                difficulty: "Basic",
                difficultyScore: 1,
                level: "Basic",
                existingCode: `
                  <button class="pulse-btn">Click Me</button>
                  <style>
                    .pulse-btn {
                      /* Add pulsing animation */
                    }
                  </style>
                `,
                testCases: [
                  { condition: "Button should pulse continuously." }
                ],
                solutionExplanation: "Use @keyframes and animation properties to create a pulsing effect.",
                language: "HTML/CSS",
              },
              {
                number: 91,
                title: "Create a Gradient Text Effect",
                description: "Style the text with a gradient color effect.",
                difficulty: "Basic",
                difficultyScore: 1,
                level: "Basic",
                existingCode: `
                  <h1 class="gradient-text">Gradient Text</h1>
                  <style>
                    .gradient-text {
                      /* Add gradient text styles */
                    }
                  </style>
                `,
                testCases: [
                  { condition: "Text should display a gradient color effect." }
                ],
                solutionExplanation: "Use background-clip: text and linear-gradient.",
                language: "HTML/CSS",
              },
              {
                number: 92,
                title: "Create a Pop-Up Modal",
                description: "Create a pop-up modal that appears centered on the screen.",
                difficulty: "Basic",
                difficultyScore: 1,
                level: "Basic",
                existingCode: `
                  <div class="modal">This is a modal</div>
                  <style>
                    .modal {
                      /* Add styles to create a pop-up modal */
                    }
                  </style>
                `,
                testCases: [
                  { condition: "Modal should appear centered on the screen." }
                ],
                solutionExplanation: "Use position: fixed, top: 50%, left: 50%, and transform: translate().",
                language: "HTML/CSS",
              },
              {
                number: 93,
                title: "Add a Background Video",
                description: "Add a video as the background of a section.",
                difficulty: "Basic",
                difficultyScore: 1,
                level: "Basic",
                existingCode: `
                  <section class="video-bg">
                    <video autoplay muted loop class="bg-video">
                      <source src="background.mp4" type="video/mp4">
                    </video>
                  </section>
                  <style>
                    .video-bg {
                      /* Add styles for video background */
                    }
                  </style>
                `,
                testCases: [
                  { condition: "Video should play in the background without sound." }
                ],
                solutionExplanation: "Use position: absolute and cover the section with the video.",
                language: "HTML/CSS",
              },
              {
                number: 94,
                title: "Create a Navigation Bar with Hover Effects",
                description: "Create a navigation bar where links change color on hover.",
                difficulty: "Basic",
                difficultyScore: 1,
                level: "Basic",
                existingCode: `
                  <nav class="nav-bar">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                  </nav>
                  <style>
                    .nav-bar a {
                      /* Add hover effect for links */
                    }
                  </style>
                `,
                testCases: [
                  { condition: "Links should change color when hovered." }
                ],
                solutionExplanation: "Use :hover to change text color.",
                language: "HTML/CSS",
              },
              {
                number: 95,
                title: "Create a Sticky Header",
                description: "Make the header stick to the top of the page while scrolling.",
                difficulty: "Basic",
                difficultyScore: 1,
                level: "Basic",
                existingCode: `
                  <header class="sticky-header">Sticky Header</header>
                  <style>
                    .sticky-header {
                      /* Add sticky header styles */
                    }
                  </style>
                `,
                testCases: [
                  { condition: "Header should stick to the top when scrolling." }
                ],
                solutionExplanation: "Use position: sticky and top: 0.",
                language: "HTML/CSS",
              },
              {
                number: 96,
                title: "Add a Countdown Timer",
                description: "Create a countdown timer that updates every second.",
                difficulty: "Basic",
                difficultyScore: 1,
                level: "Basic",
                existingCode: `
                  <div class="countdown">10</div>
                  <script>
                    // Add countdown functionality
                  </script>
                `,
                testCases: [
                  { condition: "Countdown should decrease by one every second." }
                ],
                solutionExplanation: "Use setInterval() in JavaScript to update the countdown.",
                language: "HTML/JavaScript",
              },
              {
                number: 97,
                title: "Create a Ripple Button Effect",
                description: "Create a button with a ripple effect when clicked.",
                difficulty: "Basic",
                difficultyScore: 1,
                level: "Basic",
                existingCode: `
                  <button class="ripple-btn">Click Me</button>
                  <style>
                    .ripple-btn {
                      /* Add ripple effect styles */
                    }
                  </style>
                `,
                testCases: [
                  { condition: "Button should have a ripple animation when clicked." }
                ],
                solutionExplanation: "Use JavaScript to create a div with a ripple animation.",
                language: "HTML/CSS/JavaScript",
              },
              {
                number: 98,
                title: "Add a Box Shadow to a Card",
                description: "Create a card with a shadow effect to give it depth.",
                difficulty: "Basic",
                difficultyScore: 1,
                level: "Basic",
                existingCode: `
                  <div class="shadow-card">Card Content</div>
                  <style>
                    .shadow-card {
                      /* Add box shadow styles */
                    }
                  </style>
                `,
                testCases: [
                  { condition: "Card should have a visible shadow around it." }
                ],
                solutionExplanation: "Use box-shadow to create depth for the card.",
                language: "HTML/CSS",
              },
              {
                number: 99,
                title: "Create a Fade-In Text Effect",
                description: "Create a text that fades in when the page loads.",
                difficulty: "Basic",
                difficultyScore: 1,
                level: "Basic",
                existingCode: `
                  <p class="fade-in-text">This text fades in</p>
                  <style>
                    .fade-in-text {
                      /* Add fade-in effect styles */
                    }
                  </style>
                `,
                testCases: [
                  { condition: "Text should fade in smoothly on page load." }
                ],
                solutionExplanation: "Use opacity, transition, and keyframes to create a fade-in effect.",
                language: "HTML/CSS",
              },
              {
                number: 100,
                title: "Create a Scroll Progress Indicator",
                description: "Create a progress bar that indicates how much of the page has been scrolled.",
                difficulty: "Basic",
                difficultyScore: 1,
                level: "Basic",
                existingCode: `
                  <div class="progress-bar"></div>
                  <style>
                    .progress-bar {
                      /* Add progress bar styles */
                    }
                  </style>
                  <script>
                    // Add scroll progress functionality
                  </script>
                `,
                testCases: [
                  { condition: "Progress bar should fill up based on scroll position." }
                ],
                solutionExplanation: "Use JavaScript to calculate scroll percentage and adjust the width of the progress bar.",
                language: "HTML/CSS/JavaScript",
              },
                                          
  {
      "level": "Basic",
      "title": "Basic Task 64: Highlight an Active Input Field",
      "description": "Add focus styles to highlight the active input.",
      "difficulty": "Basic",
      "existingCode": "\n        <input type=\"text\" class=\"focus-input\">\n        <style>\n            .focus-input:focus {\n                /* Add focus styles */\n            }\n        </style>\n        ",
      "testCases": [
          {
              "condition": "Input field should have a blue border when focused."
          }
      ],
      "solutionExplanation": "Use outline or border with :focus.",
      "language": "HTML/CSS"
  },
  {
      "level": "Basic",
      "title": "Basic Task 65: Add a Fixed Background Image",
      "description": "Add a fixed background image to a section.",
      "difficulty": "Basic",
      "existingCode": "\n        <div class=\"fixed-bg\">Content Here</div>\n        <style>\n            .fixed-bg {\n                /* Add fixed background styles */\n            }\n        </style>\n        ",
      "testCases": [
          {
              "condition": "Background image should not scroll with the content."
          }
      ],
      "solutionExplanation": "Use background-attachment: fixed.",
      "language": "HTML/CSS"
  },
  {
      "level": "Basic",
      "title": "Basic Task 66: Create a Full-Width Header",
      "description": "Make the header span the entire width of the screen.",
      "difficulty": "Basic",
      "existingCode": "\n        <header class=\"full-width-header\">Header</header>\n        <style>\n            .full-width-header {\n                /* Add full-width styles */\n            }\n        </style>\n        ",
      "testCases": [
          {
              "condition": "Header should occupy 100% of the viewport width."
          }
      ],
      "solutionExplanation": "Use width: 100%.",
      "language": "HTML/CSS"
  },
  {
      "level": "Basic",
      "title": "Basic Task 67: Add Alternating Row Colors to a Table",
      "description": "Style table rows with alternating colors.",
      "difficulty": "Basic",
      "existingCode": "\n        <table class=\"striped-table\">\n            <tr>\n                <td>Row 1</td>\n            </tr>\n            <tr>\n                <td>Row 2</td>\n            </tr>\n        </table>\n        <style>\n            .striped-table tr:nth-child(even) {\n                /* Add alternate row styles */\n            }\n        </style>\n        ",
      "testCases": [
          {
              "condition": "Alternate rows should have different background colors."
          }
      ],
      "solutionExplanation": "Use nth-child for row selection.",
      "language": "HTML/CSS"
  },
  {
      "level": "Basic",
      "title": "Basic Task 68: Create a Simple Dropdown Menu",
      "description": "Create a dropdown menu for navigation.",
      "difficulty": "Basic",
      "existingCode": "\n        <div class=\"dropdown\">\n            <button class=\"dropdown-btn\">Menu</button>\n            <div class=\"dropdown-content\">\n                <a href=\"#\">Option 1</a>\n                <a href=\"#\">Option 2</a>\n            </div>\n        </div>\n        <style>\n            .dropdown-content {\n                /* Add hidden styles for the menu */\n            }\n            .dropdown-btn:hover + .dropdown-content {\n                /* Show dropdown */\n            }\n        </style>\n        ",
      "testCases": [
          {
              "condition": "Dropdown menu should appear on hover."
          }
      ],
      "solutionExplanation": "Use display: none and toggle with :hover.",
      "language": "HTML/CSS"
  },
  {
      "level": "Basic",
      "title": "Basic Task 69: Add Text Underline Animation",
      "description": "Create an animated underline effect for links.",
      "difficulty": "Basic",
      "existingCode": "\n        <a href=\"#\" class=\"underline-link\">Hover Me</a>\n        <style>\n            .underline-link {\n                /* Add animated underline styles */\n            }\n        </style>\n        ",
      "testCases": [
          {
              "condition": "Underline should appear smoothly on hover."
          }
      ],
      "solutionExplanation": "Use transition and :hover.",
      "language": "HTML/CSS"
  },
  {
      "level": "Basic",
      "title": "Basic Task 70: Style a Notification Badge",
      "description": "Add a small notification badge to an icon.",
      "difficulty": "Basic",
      "existingCode": "\n        <div class=\"icon-container\">\n            <span class=\"notification-badge\">3</span>\n            <i class=\"icon\">\ud83d\udd14</i>\n        </div>\n        <style>\n            .notification-badge {\n                /* Add badge styles */\n            }\n        </style>\n        ",
      "testCases": [
          {
              "condition": "Badge should appear in the corner of the icon."
          }
      ],
      "solutionExplanation": "Use position: absolute and top/right for placement.",
      "language": "HTML/CSS"
  },
  {
      "level": "Basic",
      "title": "Basic Task 89: Create a Circular Badge",
      "description": "Add a circular badge to an icon to display a notification count.",
      "difficulty": "Basic",
      "existingCode": "\n        <div class=\"badge-icon\">\n            <span class=\"badge-count\">9</span>\n            <i class=\"icon\">\ud83d\udd14</i>\n        </div>\n        <style>\n            .badge-count {\n                /* Add circular badge styles */\n            }\n        </style>\n        ",
      "testCases": [
          {
              "condition": "Badge should appear as a small circle."
          }
      ],
      "solutionExplanation": "Use border-radius: 50% and position: absolute.",
      "language": "HTML/CSS"
  },
  {
      "level": "Basic",
      "title": "Basic Task 90: Create a Loading Spinner",
      "description": "Create a simple loading spinner using CSS animations.",
      "difficulty": "Basic",
      "existingCode": "\n        <div class=\"spinner\"></div>\n        <style>\n            .spinner {\n                width: 40px;\n                height: 40px;\n                /* Add spinner animation */\n            }\n            @keyframes spin {\n                0% { transform: rotate(0deg); }\n                100% { transform: rotate(360deg); }\n            }\n        </style>\n        ",
      "testCases": [
          {
              "condition": "Spinner should rotate indefinitely."
          }
      ],
      "solutionExplanation": "Use @keyframes and animation for rotation.",
      "language": "HTML/CSS"
  },
  {
      "level": "Basic",
      "title": "Basic Task 91: Add Animation to an Image on Hover",
      "description": "Make the image zoom in slightly when hovered.",
      "difficulty": "Basic",
      "existingCode": "\n        <img src=\"image.jpg\" class=\"zoom-img\">\n        <style>\n            .zoom-img {\n                /* Add zoom effect on hover */\n            }\n        </style>\n        ",
      "testCases": [
          {
              "condition": "Image should zoom in smoothly on hover."
          }
      ],
      "solutionExplanation": "Use transform: scale(1.1) with :hover and transition.",
      "language": "HTML/CSS"
  },
  {
      "level": "Basic",
      "title": "Basic Task 91: Add a Border to an Image",
      "description": "Style the image with a decorative border.",
      "difficulty": "Basic",
      "existingCode": "\n        <img src=\"image.jpg\" class=\"bordered-img\">\n        <style>\n            .bordered-img {\n                /* Add border styles */\n            }\n        </style>\n        ",
      "testCases": [
          {
              "condition": "Image should have a visible border (e.g., solid black, 5px thick)."
          }
      ],
      "solutionExplanation": "Use border: 5px solid black.",
      "language": "HTML/CSS"
  },
  {
      "level": "Basic",
      "title": "Basic Task 92: Add Letter Spacing to Text",
      "description": "Style the text with custom letter spacing.",
      "difficulty": "Basic",
      "existingCode": "\n        <p class=\"spaced-text\">Adjust my spacing</p>\n        <style>\n            .spaced-text {\n                /* Add letter spacing */\n            }\n        </style>\n        ",
      "testCases": [
          {
              "condition": "Text should have noticeable letter spacing."
          }
      ],
      "solutionExplanation": "Use letter-spacing: 2px.",
      "language": "HTML/CSS"
  },
  {
      "level": "Basic",
      "title": "Basic Task 93: Create a Shadow for a Button",
      "description": "Add a shadow effect to make the button stand out.",
      "difficulty": "Basic",
      "existingCode": "\n        <button class=\"shadow-btn\">Click Me</button>\n        <style>\n            .shadow-btn {\n                /* Add shadow styles */\n            }\n        </style>\n        ",
      "testCases": [
          {
              "condition": "Button should have a subtle shadow."
          }
      ],
      "solutionExplanation": "Use box-shadow for a 3D effect.",
      "language": "HTML/CSS"
  },
  {
      "level": "Basic",
      "title": "Basic Task 94: Make a Section Fullscreen",
      "description": "Style a section to cover the entire viewport height.",
      "difficulty": "Basic",
      "existingCode": "\n        <section class=\"fullscreen-section\">Content Here</section>\n        <style>\n            .fullscreen-section {\n                /* Add fullscreen styles */\n            }\n        </style>\n        ",
      "testCases": [
          {
              "condition": "Section should span the full height of the screen."
          }
      ],
      "solutionExplanation": "Use height: 100vh.",
      "language": "HTML/CSS"
  },
  {
      "level": "Basic",
      "title": "Basic Task 95: Style a Block of Preformatted Text",
      "description": "Add custom styles to a block of preformatted text.",
      "difficulty": "Basic",
      "existingCode": "\n        <pre class=\"styled-pre\">\n            Preformatted text goes here.\n        </pre>\n        <style>\n            .styled-pre {\n                /* Add preformatted text styles */\n            }\n        </style>\n        ",
      "testCases": [
          {
              "condition": "Text block should appear with custom font, color, and padding."
          }
      ],
      "solutionExplanation": "Use font-family: monospace, padding, and background-color.",
      "language": "HTML/CSS"
  },
  {
      "level": "Basic",
      "title": "Basic Task 96: Create a Split Screen Layout",
      "description": "Divide the screen into two equal sections side by side.",
      "difficulty": "Basic",
      "existingCode": "\n        <div class=\"split-screen\">\n            <div class=\"left\">Left Content</div>\n            <div class=\"right\">Right Content</div>\n        </div>\n        <style>\n            .split-screen {\n                /* Add split screen layout styles */\n            }\n        </style>\n        ",
      "testCases": [
          {
              "condition": "Content should split evenly across the screen."
          }
      ],
      "solutionExplanation": "Use display: flex and flex: 1 for both sections.",
      "language": "HTML/CSS"
  },
  {
      "level": "Basic",
      "title": "Basic Task 97: Style a Circular Progress Bar",
      "description": "Create a circular progress bar using CSS.",
      "difficulty": "Basic",
      "existingCode": "\n        <div class=\"progress-circle\"></div>\n        <style>\n            .progress-circle {\n                /* Add circular progress bar styles */\n            }\n        </style>\n        ",
      "testCases": [
          {
              "condition": "Circular progress bar should appear with a visual percentage."
          }
      ],
      "solutionExplanation": "Use border and border-radius: 50% along with animations.",
      "language": "HTML/CSS"
  },
  {
      "level": "Basic",
      "title": "Basic Task 98: Add Vertical Alignment to Flex Items",
      "description": "Center flex items vertically within a container.",
      "difficulty": "Basic",
      "existingCode": "\n        <div class=\"flex-container\">\n            <div class=\"flex-item\">Item 1</div>\n            <div class=\"flex-item\">Item 2</div>\n        </div>\n        <style>\n            .flex-container {\n                /* Add vertical alignment styles */\n            }\n        </style>\n        ",
      "testCases": [
          {
              "condition": "Items should align vertically in the center."
          }
      ],
      "solutionExplanation": "Use align-items: center.",
      "language": "HTML/CSS"
  },
  {
      "level": "Basic",
      "title": "Basic Task 99: Style an Alert Box",
      "description": "Create a red alert box for error messages.",
      "difficulty": "Basic",
      "existingCode": "\n        <div class=\"alert-box\">Error: Something went wrong.</div>\n        <style>\n            .alert-box {\n                /* Add alert box styles */\n            }\n        </style>\n        ",
      "testCases": [
          {
              "condition": "Box should have a red background, bold text, and padding."
          }
      ],
      "solutionExplanation": "Use background-color: red, color: white, and padding.",
      "language": "HTML/CSS"
  },
  {
      "level": "Basic",
      "title": "Basic Task 100: Style a Hover Button with Rotation",
      "description": "Make the button rotate slightly when hovered.",
      "difficulty": "Basic",
      "existingCode": "\n        <button class=\"rotate-btn\">Hover Me</button>\n        <style>\n            .rotate-btn {\n                /* Add hover rotation styles */\n            }\n        </style>\n        ",
      "testCases": [
          {
              "condition": "Button should rotate slightly on hover."
          }
      ],
      "solutionExplanation": "Use transform: rotate with :hover.",
      "language": "HTML/CSS"
  }
    ,
        // Intermediate Level Tasks 1-20
        {
          number: 1,
          title: "Create a Responsive Grid Layout",
          description: "Create a grid layout that adjusts to two columns on larger screens and one column on smaller screens.",
          difficulty: "Intermediate",
          difficultyScore: 2,
          level: "Intermediate",
          existingCode: `
            <div class="grid-container">
              <div>Item 1</div>
              <div>Item 2</div>
              <div>Item 3</div>
              <div>Item 4</div>
            </div>
            <style>
              .grid-container {
                display: grid;
                grid-template-columns: 1fr;
                /* Add responsive styles */
              }
            </style>
          `,
          testCases: [
            { condition: "The grid should have two columns on screens wider than 600px." }
          ],
          solutionExplanation: "Use media queries and grid-template-columns: repeat(2, 1fr) for larger screens.",
          language: "HTML/CSS",
        },
        {
          number: 2,
          title: "Create a Sticky Header",
          description: "Make the header stick to the top of the viewport while scrolling.",
          difficulty: "Intermediate",
          difficultyScore: 2,
          level: "Intermediate",
          existingCode: `
            <header class="sticky-header">Sticky Header</header>
            <style>
              .sticky-header {
                /* Add sticky positioning */
              }
            </style>
          `,
          testCases: [
            { condition: "Header should remain visible at the top of the viewport when scrolling." }
          ],
          solutionExplanation: "Use position: sticky with top: 0.",
          language: "HTML/CSS",
        },
        {
          number: 3,
          title: "Add a Responsive Image Gallery",
          description: "Create an image gallery that adjusts the number of columns based on screen size.",
          difficulty: "Intermediate",
          difficultyScore: 2,
          level: "Intermediate",
          existingCode: `
            <div class="gallery">
              <img src="image1.jpg" alt="Image 1">
              <img src="image2.jpg" alt="Image 2">
              <img src="image3.jpg" alt="Image 3">
            </div>
            <style>
              .gallery {
                display: grid;
                grid-template-columns: 1fr;
                /* Add responsive styles */
              }
            </style>
          `,
          testCases: [
            { condition: "The gallery should have three columns on larger screens and one column on smaller screens." }
          ],
          solutionExplanation: "Use media queries to adjust grid-template-columns.",
          language: "HTML/CSS",
        },
        {
          number: 4,
          title: "Style a Responsive Navbar",
          description: "Create a navbar that collapses into a hamburger menu on smaller screens.",
          difficulty: "Intermediate",
          difficultyScore: 2,
          level: "Intermediate",
          existingCode: `
            <nav class="navbar">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
            <style>
              .navbar {
                /* Add responsive styles */
              }
            </style>
          `,
          testCases: [
            { condition: "Navbar should collapse into a hamburger menu on screens smaller than 768px." }
          ],
          solutionExplanation: "Use media queries and optionally JavaScript for interactivity.",
          language: "HTML/CSS",
        },
        {
          number: 5,
          title: "Create a Card with Hover Flip Animation",
          description: "Add a flip animation to a card when hovered.",
          difficulty: "Intermediate",
          difficultyScore: 2,
          level: "Intermediate",
          existingCode: `
            <div class="card">
              <div class="front">Front</div>
              <div class="back">Back</div>
            </div>
            <style>
              .card {
                /* Add flip animation styles */
              }
            </style>
          `,
          testCases: [
            { condition: "Card should flip to show the back content on hover." }
          ],
          solutionExplanation: "Use transform: rotateY and :hover.",
          language: "HTML/CSS",
        },
        {
          number: 6,
          title: "Create a Collapsible Sidebar",
          description: "Build a collapsible sidebar that toggles visibility.",
          difficulty: "Intermediate",
          difficultyScore: 2,
          level: "Intermediate",
          existingCode: `
            <div class="sidebar">
              <button class="toggle-btn">Toggle Sidebar</button>
              <div class="content">Sidebar Content</div>
            </div>
            <style>
              .sidebar {
                /* Add collapsible styles */
              }
            </style>
          `,
          testCases: [
            { condition: "Sidebar should toggle open/close when the button is clicked." }
          ],
          solutionExplanation: "Use display: none/block with JavaScript or CSS toggling.",
          language: "HTML/CSS",
        },
        {
          number: 7,
          title: "Style a Multi-Step Form",
          description: "Style a multi-step form where users can progress through steps.",
          difficulty: "Intermediate",
          difficultyScore: 2,
          level: "Intermediate",
          existingCode: `
            <form class="multi-step-form">
              <div class="step">Step 1</div>
              <div class="step">Step 2</div>
            </form>
            <style>
              .step {
                /* Add step styles */
              }
            </style>
          `,
          testCases: [
            { condition: "Form should have a clean, multi-step appearance." }
          ],
          solutionExplanation: "Use display: none to hide steps and show the current step.",
          language: "HTML/CSS",
        },
        {
          number: 8,
          title: "Create a Responsive Pricing Table",
          description: "Build a pricing table that adjusts layout based on screen size.",
          difficulty: "Intermediate",
          difficultyScore: 2,
          level: "Intermediate",
          existingCode: `
            <div class="pricing-table">
              <div class="plan">Basic</div>
              <div class="plan">Pro</div>
              <div class="plan">Enterprise</div>
            </div>
            <style>
              .pricing-table {
                /* Add responsive table styles */
              }
            </style>
          `,
          testCases: [
            { condition: "Pricing table should stack vertically on smaller screens." }
          ],
          solutionExplanation: "Use flexbox or grid and media queries.",
          language: "HTML/CSS",
        },
        {
          number: 9,
          title: "Add a Scroll-to-Top Button",
          description: "Add a button that scrolls to the top of the page when clicked.",
          difficulty: "Intermediate",
          difficultyScore: 2,
          level: "Intermediate",
          existingCode: `
            <button class="scroll-to-top">&#8593;</button>
            <style>
              .scroll-to-top {
                /* Add positioning and styles */
              }
            </style>
          `,
          testCases: [
            { condition: "Button should scroll the page to the top when clicked." }
          ],
          solutionExplanation: "Use position: fixed and JavaScript for scrolling functionality.",
          language: "HTML/CSS",
        },
        {
          number: 10,
          title: "Style a Responsive Footer",
          description: "Create a footer with three columns that stack on smaller screens.",
          difficulty: "Intermediate",
          difficultyScore: 2,
          level: "Intermediate",
          existingCode: `
            <footer class="responsive-footer">
              <div>Column 1</div>
              <div>Column 2</div>
              <div>Column 3</div>
            </footer>
            <style>
              .responsive-footer {
                display: flex;
                /* Add responsive styles */
              }
            </style>
          `,
          testCases: [
            { condition: "Columns should stack vertically on smaller screens." }
          ],
          solutionExplanation: "Use flex-direction: column for small screens.",
          language: "HTML/CSS",
        },
        {
          number: 11,
          title: "Create a Fixed Navigation Sidebar",
          description: "Add a fixed sidebar that stays visible while scrolling.",
          difficulty: "Intermediate",
          difficultyScore: 2,
          level: "Intermediate",
          existingCode: `
            <aside class="fixed-sidebar">Sidebar</aside>
            <style>
              .fixed-sidebar {
                /* Add fixed positioning */
              }
            </style>
          `,
          testCases: [
            { condition: "Sidebar should remain fixed on the left side while scrolling." }
          ],
          solutionExplanation: "Use position: fixed.",
          language: "HTML/CSS",
        },
        {
          number: 12,
          title: "Add Image Hover Effects",
          description: "Add a hover effect that slightly zooms in an image.",
          difficulty: "Intermediate",
          difficultyScore: 2,
          level: "Intermediate",
          existingCode: `
            <img src="image.jpg" class="hover-img">
            <style>
              .hover-img {
                /* Add hover zoom styles */
              }
            </style>
          `,
          testCases: [
            { condition: "Image should zoom in slightly on hover." }
          ],
          solutionExplanation: "Use transform: scale(1.1) with transition.",
          language: "HTML/CSS",
        },
        {
          number: 13,
          title: "Add a Responsive Video Player",
          description: "Make an embedded video player responsive.",
          difficulty: "Intermediate",
          difficultyScore: 2,
          level: "Intermediate",
          existingCode: `
            <div class="video-container">
              <iframe src="video.mp4" class="responsive-video"></iframe>
            </div>
            <style>
              .video-container {
                /* Add responsive styles */
              }
            </style>
          `,
          testCases: [
            { condition: "Video should resize to fit the container." }
          ],
          solutionExplanation: "Use aspect-ratio or padding-top hacks.",
          language: "HTML/CSS",
        },
        {
          number: 14,
          title: "Create a Responsive Hero Section",
          description: "Style a hero section that adjusts text and image layout on different screens.",
          difficulty: "Intermediate",
          difficultyScore: 2,
          level: "Intermediate",
          existingCode: `
            <section class="hero">
              <div class="text">Hero Text</div>
              <img src="hero.jpg" alt="Hero Image">
            </section>
            <style>
              .hero {
                /* Add responsive styles */
              }
            </style>
          `,
          testCases: [
            { condition: "Text and image should stack vertically on smaller screens." }
          ],
          solutionExplanation: "Use flexbox or grid with media queries.",
          language: "HTML/CSS",
        },
        {
          number: 15,
          title: "Style a Search Bar with Suggestions",
          description: "Add a styled search bar with dropdown suggestions.",
          difficulty: "Intermediate",
          difficultyScore: 2,
          level: "Intermediate",
          existingCode: `
            <div class="search-bar">
              <input type="text" placeholder="Search...">
              <ul class="suggestions">
                <li>Suggestion 1</li>
                <li>Suggestion 2</li>
              </ul>
            </div>
            <style>
              .suggestions {
                /* Add dropdown styles */
              }
            </style>
          `,
          testCases: [
            { condition: "Suggestions should appear below the search bar." }
          ],
          solutionExplanation: "Use position: absolute.",
          language: "HTML/CSS",
        },
        {
          number: 16,
          title: "Create a Multi-Level Dropdown Menu",
          description: "Add a multi-level dropdown for navigation.",
          difficulty: "Intermediate",
          difficultyScore: 2,
          level: "Intermediate",
          existingCode: `
            <div class="dropdown">
              <button>Menu</button>
              <ul>
                <li>Item 1</li>
                <li>
                  Submenu
                  <ul>
                    <li>Subitem 1</li>
                    <li>Subitem 2</li>
                  </ul>
                </li>
              </ul>
            </div>
            <style>
              ul ul {
                /* Add submenu styles */
              }
            </style>
          `,
          testCases: [
            { condition: "Submenu should appear when hovered over." }
          ],
          solutionExplanation: "Use visibility and :hover.",
          language: "HTML/CSS",
        },
        {
          number: 17,
          title: "Style a Floating Action Button",
          description: "Create a circular floating button in the bottom right corner.",
          difficulty: "Intermediate",
          difficultyScore: 2,
          level: "Intermediate",
          existingCode: `
            <button class="fab">+</button>
            <style>
              .fab {
                /* Add floating button styles */
              }
            </style>
          `,
          testCases: [
            { condition: "Button should be fixed in the bottom-right corner." }
          ],
          solutionExplanation: "Use position: fixed and border-radius: 50%.",
          language: "HTML/CSS",
        },
        {
          number: 18,
          title: "Add Animated Loading Bars",
          description: "Create an animated loading bar using CSS.",
          difficulty: "Intermediate",
          difficultyScore: 2,
          level: "Intermediate",
          existingCode: `
            <div class="loading-bar"></div>
            <style>
              .loading-bar {
                /* Add animation styles */
              }
            </style>
          `,
          testCases: [
            { condition: "Bar should animate continuously." }
          ],
          solutionExplanation: "Use @keyframes and animation.",
          language: "HTML/CSS",
        },
        {
          number: 19,
          title: "Create a Hover Card with Slide-Up Text",
          description: "Make card text slide up when hovered.",
          difficulty: "Intermediate",
          difficultyScore: 2,
          level: "Intermediate",
          existingCode: `
            <div class="hover-card">
              <div class="image"></div>
              <div class="text">Card Text</div>
            </div>
            <style>
              .text {
                /* Add slide-up styles */
              }
            </style>
          `,
          testCases: [
            { condition: "Text should slide up smoothly on hover." }
          ],
          solutionExplanation: "Use transform: translateY and :hover.",
          language: "HTML/CSS",
        },
        {
          number: 20,
          title: "Style a Login Form",
          description: "Create a styled login form with input validation.",
          difficulty: "Intermediate",
          difficultyScore: 2,
          level: "Intermediate",
          existingCode: `
            <form class="login-form">
              <input type="text" placeholder="Username">
              <input type="password" placeholder="Password">
              <button type="submit">Login</button>
            </form>
            <style>
              .login-form {
                /* Add form styles */
              }
            </style>
          `,
          testCases: [
            { condition: "Form should look clean and styled with validation messages." }
          ],
          solutionExplanation: "Use border, padding, and validation messages.",
          language: "HTML/CSS",
        },
            {
              number: 21,
              title: "Create a Responsive Header with Logo and Navigation",
              description: "Design a responsive header with a logo and navigation links.",
              difficulty: "Intermediate",
              difficultyScore: 2,
              level: "Intermediate",
              existingCode: `
                <header class="responsive-header">
                  <div class="logo">Logo</div>
                  <nav class="nav-links">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                  </nav>
                </header>
                <style>
                  .responsive-header {
                    display: flex;
                    /* Add responsive styles */
                  }
                </style>
              `,
              testCases: [
                { condition: "Links should align next to the logo on large screens and stack below on smaller screens." }
              ],
              solutionExplanation: "Use flexbox with media queries to adjust layout.",
              language: "HTML/CSS",
            },
            {
              number: 22,
              title: "Add Hover Effects to Navigation Links",
              description: "Add underline animations to navigation links on hover.",
              difficulty: "Intermediate",
              difficultyScore: 2,
              level: "Intermediate",
              existingCode: `
                <nav>
                  <a href="#" class="nav-link">Home</a>
                  <a href="#" class="nav-link">About</a>
                  <a href="#" class="nav-link">Contact</a>
                </nav>
                <style>
                  .nav-link {
                    text-decoration: none;
                    /* Add hover styles */
                  }
                </style>
              `,
              testCases: [
                { condition: "Links should display an underline animation when hovered." }
              ],
              solutionExplanation: "Use transition and :hover.",
              language: "HTML/CSS",
            },
            {
              number: 23,
              title: "Add a CSS Accordion",
              description: "Create an accordion with expandable sections using only CSS.",
              difficulty: "Intermediate",
              difficultyScore: 2,
              level: "Intermediate",
              existingCode: `
                <div class="accordion">
                  <div>
                    <input type="checkbox" id="section1">
                    <label for="section1">Section 1</label>
                    <div class="content">Content for Section 1</div>
                  </div>
                  <div>
                    <input type="checkbox" id="section2">
                    <label for="section2">Section 2</label>
                    <div class="content">Content for Section 2</div>
                  </div>
                </div>
                <style>
                  .content {
                    /* Add accordion styles */
                  }
                </style>
              `,
              testCases: [
                { condition: "Sections should expand/collapse when clicked." }
              ],
              solutionExplanation: "Use :checked to toggle visibility.",
              language: "HTML/CSS",
            },
            {
              number: 24,
              title: "Create a Multi-Column Layout",
              description: "Design a layout with three columns that adjusts to one column on small screens.",
              difficulty: "Intermediate",
              difficultyScore: 2,
              level: "Intermediate",
              existingCode: `
                <div class="multi-column-layout">
                  <div>Column 1</div>
                  <div>Column 2</div>
                  <div>Column 3</div>
                </div>
                <style>
                  .multi-column-layout {
                    display: flex;
                    /* Add responsive styles */
                  }
                </style>
              `,
              testCases: [
                { condition: "Columns should stack vertically on smaller screens." }
              ],
              solutionExplanation: "Use flex-direction: column with media queries.",
              language: "HTML/CSS",
            },
            {
              number: 25,
              title: "Create a Responsive Table",
              description: "Make a table responsive by adding horizontal scrolling on smaller screens.",
              difficulty: "Intermediate",
              difficultyScore: 2,
              level: "Intermediate",
              existingCode: `
                <table class="responsive-table">
                  <tr>
                    <th>Header 1</th>
                    <th>Header 2</th>
                  </tr>
                  <tr>
                    <td>Data 1</td>
                    <td>Data 2</td>
                  </tr>
                </table>
                <style>
                  .responsive-table {
                    /* Add responsive styles */
                  }
                </style>
              `,
              testCases: [
                { condition: "Table should scroll horizontally on small screens." }
              ],
              solutionExplanation: "Use overflow-x: auto and a container div.",
              language: "HTML/CSS",
            },
            {
              number: 26,
              title: "Add a Progress Tracker",
              description: "Design a horizontal progress tracker for a multi-step form.",
              difficulty: "Intermediate",
              difficultyScore: 2,
              level: "Intermediate",
              existingCode: `
                <div class="progress-tracker">
                  <div class="step completed">Step 1</div>
                  <div class="step">Step 2</div>
                  <div class="step">Step 3</div>
                </div>
                <style>
                  .progress-tracker {
                    display: flex;
                    /* Add tracker styles */
                  }
                </style>
              `,
              testCases: [
                { condition: "Completed steps should be visually distinct from the rest." }
              ],
              solutionExplanation: "Use background-color and border to style each step.",
              language: "HTML/CSS",
            },
            {
              number: 27,
              title: "Style a Responsive Hero Image",
              description: "Create a full-width hero image with overlayed text.",
              difficulty: "Intermediate",
              difficultyScore: 2,
              level: "Intermediate",
              existingCode: `
                <div class="hero">
                  <img src="hero.jpg" alt="Hero Image">
                  <div class="overlay-text">Hero Text</div>
                </div>
                <style>
                  .hero {
                    position: relative;
                    /* Add responsive styles */
                  }
                </style>
              `,
              testCases: [
                { condition: "Text should stay centered over the image." }
              ],
              solutionExplanation: "Use position: absolute for the overlay.",
              language: "HTML/CSS",
            },
            {
              number: 28,
              title: "Add a Search Bar with a Clear Button",
              description: "Add a clear button to reset the search bar input.",
              difficulty: "Intermediate",
              difficultyScore: 2,
              level: "Intermediate",
              existingCode: `
                <div class="search-bar">
                  <input type="text" placeholder="Search...">
                  <button class="clear-btn">Clear</button>
                </div>
                <style>
                  .search-bar {
                    display: flex;
                    /* Add styles */
                  }
                </style>
              `,
              testCases: [
                { condition: "Clicking the button should clear the input field." }
              ],
              solutionExplanation: "Use JavaScript to clear the input value.",
              language: "HTML/CSS",
            },
            {
              number: 29,
              title: "Create a Horizontal Timeline",
              description: "Design a timeline that displays events horizontally.",
              difficulty: "Intermediate",
              difficultyScore: 2,
              level: "Intermediate",
              existingCode: `
                <div class="timeline">
                  <div class="event">Event 1</div>
                  <div class="event">Event 2</div>
                  <div class="event">Event 3</div>
                </div>
                <style>
                  .timeline {
                    display: flex;
                    /* Add horizontal styles */
                  }
                </style>
              `,
              testCases: [
                { condition: "Events should align in a horizontal line." }
              ],
              solutionExplanation: "Use flexbox or grid for alignment.",
              language: "HTML/CSS",
            },
            {
              number: 30,
              title: "Add Parallax Scrolling Effect",
              description: "Create a parallax scrolling effect for a background image.",
              difficulty: "Intermediate",
              difficultyScore: 2,
              level: "Intermediate",
              existingCode: `
                <section class="parallax">Parallax Section</section>
                <style>
                  .parallax {
                    /* Add parallax styles */
                  }
                </style>
              `,
              testCases: [
                { condition: "Background should scroll slower than the foreground content." }
              ],
              solutionExplanation: "Use background-attachment: fixed.",
              language: "HTML/CSS",
            },
            {
              number: 31,
              title: "Style a Fixed Call-to-Action Bar",
              description: "Add a fixed call-to-action bar at the bottom of the page.",
              difficulty: "Intermediate",
              difficultyScore: 2,
              level: "Intermediate",
              existingCode: `
                <div class="cta-bar">Sign Up Now!</div>
                <style>
                  .cta-bar {
                    /* Add fixed positioning styles */
                  }
                </style>
              `,
              testCases: [
                { condition: "Bar should remain fixed at the bottom while scrolling." }
              ],
              solutionExplanation: "Use position: fixed and bottom: 0.",
              language: "HTML/CSS",
            },
            {
              number: 32,
              title: "Design an Animated Hamburger Menu",
              description: "Add animation to a hamburger menu icon when clicked.",
              difficulty: "Intermediate",
              difficultyScore: 2,
              level: "Intermediate",
              existingCode: `
                <div class="hamburger">
                  <div class="line"></div>
                  <div class="line"></div>
                  <div class="line"></div>
                </div>
                <style>
                  .hamburger {
                    /* Add styles */
                  }
                </style>
              `,
              testCases: [
                { condition: "Lines should transform into a cross when clicked." }
              ],
              solutionExplanation: "Use @keyframes and transform.",
              language: "HTML/CSS",
            },
            {
              number: 33,
              title: "Create a Responsive Testimonial Section",
              description: "Add testimonials that adjust layout on different screen sizes.",
              difficulty: "Intermediate",
              difficultyScore: 2,
              level: "Intermediate",
              existingCode: `
                <section class="testimonials">
                  <blockquote>Testimonial 1</blockquote>
                  <blockquote>Testimonial 2</blockquote>
                </section>
                <style>
                  .testimonials {
                    display: flex;
                    /* Add responsive styles */
                  }
                </style>
              `,
              testCases: [
                { condition: "Testimonials should stack vertically on smaller screens." }
              ],
              solutionExplanation: "Use flex-direction: column with media queries.",
              language: "HTML/CSS",
            },
            {
              number: 34,
              title: "Style a Dropdown Menu with Hover Effects",
              description: "Create a dropdown menu that opens on hover.",
              difficulty: "Intermediate",
              difficultyScore: 2,
              level: "Intermediate",
              existingCode: `
                <div class="dropdown">
                  <button>Menu</button>
                  <ul>
                    <li>Option 1</li>
                    <li>Option 2</li>
                  </ul>
                </div>
                <style>
                  .dropdown ul {
                    /* Add hover styles */
                  }
                </style>
              `,
              testCases: [
                { condition: "Dropdown should appear when hovering over the button." }
              ],
              solutionExplanation: "Use :hover to toggle visibility.",
              language: "HTML/CSS",
            },
            {
              number: 35,
              title: "Style a Multi-Level Sidebar Menu",
              description: "Create a collapsible multi-level sidebar menu.",
              difficulty: "Intermediate",
              difficultyScore: 2,
              level: "Intermediate",
              existingCode: `
                <aside class="sidebar">
                  <ul>
                    <li>Menu 1</li>
                    <li>
                      Submenu
                      <ul>
                        <li>Subitem 1</li>
                        <li>Subitem 2</li>
                      </ul>
                    </li>
                  </ul>
                </aside>
                <style>
                  ul ul {
                    /* Add submenu styles */
                  }
                </style>
              `,
              testCases: [
                { condition: "Submenu should toggle visibility when clicked." }
              ],
              solutionExplanation: "Use :hover or JavaScript for toggling.",
              language: "HTML/CSS",
            },
            {
              number: 36,
              title: "Create a Card with Shadow on Hover",
              description: "Add a shadow effect to a card that appears when the card is hovered over.",
              difficulty: "Intermediate",
              difficultyScore: 2,
              level: "Intermediate",
              existingCode: `
                <div class="card">Card Content</div>
                <style>
                  .card {
                    padding: 20px;
                    border: 1px solid #ddd;
                    /* Add styles */
                  }
                </style>
              `,
              testCases: [
                { condition: "Card should have a shadow effect when hovered." }
              ],
              solutionExplanation: "Use box-shadow property and :hover for the effect.",
              language: "HTML/CSS",
            },
            {
              number: 37,
              title: "Create a Sliding Drawer Menu",
              description: "Design a sliding drawer menu that appears from the side of the screen when toggled.",
              difficulty: "Intermediate",
              difficultyScore: 3,
              level: "Intermediate",
              existingCode: `
                <div class="drawer-menu">
                  <button class="toggle-drawer">Toggle Menu</button>
                  <div class="menu-content">Drawer Menu Content</div>
                </div>
                <style>
                  .drawer-menu {
                    position: relative;
                    /* Add styles */
                  }
                </style>
              `,
              testCases: [
                { condition: "Menu should slide in from the side when toggled." }
              ],
              solutionExplanation: "Use transform and transition properties to create the sliding effect.",
              language: "HTML/CSS",
            },
            {
              number: 38,
              title: "Add a Smooth Scroll Effect",
              description: "Enable smooth scrolling behavior for anchor links that navigate within the same page.",
              difficulty: "Intermediate",
              difficultyScore: 2,
              level: "Intermediate",
              existingCode: `
                <a href="#section" class="scroll-link">Go to Section</a>
                <div id="section">Target Section</div>
                <style>
                  html {
                    /* Add smooth scroll styles */
                  }
                </style>
              `,
              testCases: [
                { condition: "Scrolling should be smooth when clicking on anchor links." }
              ],
              solutionExplanation: "Use scroll-behavior: smooth on the html element.",
              language: "HTML/CSS",
            },
            {
              number: 39,
              title: "Create a Floating Chat Widget",
              description: "Add a floating chat widget that stays fixed at the bottom right corner of the page.",
              difficulty: "Intermediate",
              difficultyScore: 3,
              level: "Intermediate",
              existingCode: `
                <div class="chat-widget">Chat with us!</div>
                <style>
                  .chat-widget {
                    /* Add floating styles */
                  }
                </style>
              `,
              testCases: [
                { condition: "Widget should stay fixed in the bottom-right corner." }
              ],
              solutionExplanation: "Use position: fixed and bottom/right properties.",
              language: "HTML/CSS",
            },
            {
              number: 40,
              title: "Create a Gradient Background Button",
              description: "Add a button with a gradient background that transitions smoothly when hovered over.",
              difficulty: "Intermediate",
              difficultyScore: 2,
              level: "Intermediate",
              existingCode: `
                <button class="gradient-button">Click Me</button>
                <style>
                  .gradient-button {
                    background: linear-gradient(to right, #ff7e5f, #feb47b);
                    color: white;
                    padding: 10px 20px;
                    border: none;
                    cursor: pointer;
                    /* Add hover styles */
                  }
                </style>
              `,
              testCases: [
                { condition: "Button should have a smooth transition effect when hovered." }
              ],
              solutionExplanation: "Use transition property for the background to create a smooth effect.",
              language: "HTML/CSS",
            },{
                  number: 41,
                  title: "Add a Hover Glow Effect to a Card",
                  description: "Make the card glow with a subtle effect when hovered.",
                  difficulty: "Intermediate",
                  difficultyScore: 2,
                  level: "Intermediate",
                  existingCode: `
                    <div class="hover-card">
                      <h3>Card Title</h3>
                      <p>Card description goes here.</p>
                    </div>
                    <style>
                      .hover-card {
                        /* Add hover glow effect */
                      }
                    </style>
                  `,
                  testCases: [
                    { condition: "Card should have a glowing border on hover." }
                  ],
                  solutionExplanation: "Use box-shadow and transition for smooth effect.",
                  language: "HTML/CSS",
                },
                {
                  number: 42,
                  title: "Design a Responsive Login Page",
                  description: "Create a login form that adjusts layout on different screen sizes.",
                  difficulty: "Intermediate",
                  difficultyScore: 2,
                  level: "Intermediate",
                  existingCode: `
                    <div class="login-page">
                      <form>
                        <input type="text" placeholder="Username">
                        <input type="password" placeholder="Password">
                        <button type="submit">Login</button>
                      </form>
                    </div>
                    <style>
                      .login-page {
                        /* Add responsive styles */
                      }
                    </style>
                  `,
                  testCases: [
                    { condition: "Login form should center and resize based on screen size." }
                  ],
                  solutionExplanation: "Use flexbox and media queries for responsiveness.",
                  language: "HTML/CSS",
                },
                {
                  number: 43,
                  title: "Create a Floating Contact Us Button",
                  description: "Add a button that floats on the screen for quick contact access.",
                  difficulty: "Intermediate",
                  difficultyScore: 2,
                  level: "Intermediate",
                  existingCode: `
                    <button class="contact-btn">Contact Us</button>
                    <style>
                      .contact-btn {
                        /* Add floating styles */
                      }
                    </style>
                  `,
                  testCases: [
                    { condition: "Button should remain fixed in the bottom-right corner." }
                  ],
                  solutionExplanation: "Use position: fixed and bottom/right.",
                  language: "HTML/CSS",
                },
                {
                  number: 44,
                  title: "Add a Loading Animation for a Button",
                  description: "Show a loading spinner inside the button when clicked.",
                  difficulty: "Intermediate",
                  difficultyScore: 2,
                  level: "Intermediate",
                  existingCode: `
                    <button class="loading-btn">Submit</button>
                    <style>
                      .loading-btn {
                        /* Add loading animation styles */
                      }
                    </style>
                  `,
                  testCases: [
                    { condition: "Spinner should appear when the button is clicked." }
                  ],
                  solutionExplanation: "Use @keyframes for spinner animation and toggle visibility.",
                  language: "HTML/CSS",
                },
                {
                  number: 45,
                  title: "Create a Two-Column Layout with Equal Height",
                  description: "Create two columns with equal height regardless of content length.",
                  difficulty: "Intermediate",
                  difficultyScore: 2,
                  level: "Intermediate",
                  existingCode: `
                    <div class="two-column-layout">
                      <div class="left-column">Left Content</div>
                      <div class="right-column">Right Content</div>
                    </div>
                    <style>
                      .two-column-layout {
                        /* Add equal-height styles */
                      }
                    </style>
                  `,
                  testCases: [
                    { condition: "Columns should have the same height." }
                  ],
                  solutionExplanation: "Use flexbox and align-items: stretch.",
                  language: "HTML/CSS",
                },
                {
                  number: 46,
                  title: "Add an Overlay Effect on Images",
                  description: "Create an image overlay that appears with text when hovered.",
                  difficulty: "Intermediate",
                  difficultyScore: 2,
                  level: "Intermediate",
                  existingCode: `
                    <div class="image-overlay">
                      <img src="image.jpg" alt="Overlay Image">
                      <div class="overlay-text">Overlay Text</div>
                    </div>
                    <style>
                      .overlay-text {
                        /* Add overlay styles */
                      }
                    </style>
                  `,
                  testCases: [
                    { condition: "Overlay text should appear when the image is hovered." }
                  ],
                  solutionExplanation: "Use opacity and :hover to toggle visibility.",
                  language: "HTML/CSS",
                },
                {
                  number: 47,
                  title: "Design a Responsive Blog Page",
                  description: "Create a blog page layout with articles that stack on smaller screens.",
                  difficulty: "Intermediate",
                  difficultyScore: 2,
                  level: "Intermediate",
                  existingCode: `
                    <div class="blog-page">
                      <article>Blog Post 1</article>
                      <article>Blog Post 2</article>
                    </div>
                    <style>
                      .blog-page {
                        /* Add responsive styles */
                      }
                    </style>
                  `,
                  testCases: [
                    { condition: "Blog articles should appear in a grid on large screens and stack on smaller screens." }
                  ],
                  solutionExplanation: "Use grid-template-columns with media queries.",
                  language: "HTML/CSS",
                },
                {
                  number: 48,
                  title: "Create a Circular Profile Card",
                  description: "Design a circular profile card with an image and name.",
                  difficulty: "Intermediate",
                  difficultyScore: 2,
                  level: "Intermediate",
                  existingCode: `
                    <div class="profile-card">
                      <img src="profile.jpg" alt="Profile Picture">
                      <h3>John Doe</h3>
                    </div>
                    <style>
                      .profile-card img {
                        /* Add circular styles */
                      }
                    </style>
                  `,
                  testCases: [
                    { condition: "Profile image should appear circular." }
                  ],
                  solutionExplanation: "Use border-radius: 50%.",
                  language: "HTML/CSS",
                },
                {
                  number: 49,
                  title: "Add a Sliding Navigation Menu",
                  description: "Create a sidebar navigation menu that slides in and out.",
                  difficulty: "Intermediate",
                  difficultyScore: 2,
                  level: "Intermediate",
                  existingCode: `
                    <div class="sliding-menu">
                      <button class="toggle-menu">Menu</button>
                      <nav class="menu-items">Menu Content</nav>
                    </div>
                    <style>
                      .menu-items {
                        /* Add sliding menu styles */
                      }
                    </style>
                  `,
                  testCases: [
                    { condition: "Menu should slide in and out when toggled." }
                  ],
                  solutionExplanation: "Use transform and transition.",
                  language: "HTML/CSS",
                },
                {
                  number: 50,
                  title: "Create an Animated Progress Bar",
                  description: "Design a progress bar that fills up with an animation.",
                  difficulty: "Intermediate",
                  difficultyScore: 2,
                  level: "Intermediate",
                  existingCode: `
                    <div class="progress-bar">
                      <div class="progress-fill"></div>
                    </div>
                    <style>
                      .progress-fill {
                        /* Add animation styles */
                      }
                    </style>
                  `,
                  testCases: [
                    { condition: "Progress bar should fill from left to right." }
                  ],
                  solutionExplanation: "Use @keyframes and width animation.",
                  language: "HTML/CSS",
                },
                {
                  number: 51,
                  title: "Create a Responsive Contact Form",
                  description: "Build a contact form that adjusts layout on smaller screens.",
                  difficulty: "Intermediate",
                  difficultyScore: 2,
                  level: "Intermediate",
                  existingCode: `
                    <form class="contact-form">
                      <input type="text" placeholder="Name">
                      <input type="email" placeholder="Email">
                      <textarea placeholder="Message"></textarea>
                      <button type="submit">Send</button>
                    </form>
                    <style>
                      .contact-form {
                        /* Add responsive styles */
                      }
                    </style>
                  `,
                  testCases: [
                    { condition: "Form fields should stack vertically on small screens." }
                  ],
                  solutionExplanation: "Use flex-direction: column in media queries.",
                  language: "HTML/CSS",
                },
                {
                  number: 52,
                  title: "Add Image Lazy Loading",
                  description: "Load images only when they are in the viewport.",
                  difficulty: "Intermediate",
                  difficultyScore: 2,
                  level: "Intermediate",
                  existingCode: `
                    <img src="image.jpg" loading="lazy" alt="Lazy Image">
                    <style>
                      img {
                        /* Add lazy loading styles */
                      }
                    </style>
                  `,
                  testCases: [
                    { condition: "Images should load only when scrolled into view." }
                  ],
                  solutionExplanation: "Use loading=\"lazy\" attribute.",
                  language: "HTML/CSS",
                },
                {
                  number: 53,
                  title: "Style a Dynamic Notification Banner",
                  description: "Create a notification banner that animates when shown.",
                  difficulty: "Intermediate",
                  difficultyScore: 2,
                  level: "Intermediate",
                  existingCode: `
                    <div class="notification-banner">You have a new message!</div>
                    <style>
                      .notification-banner {
                        /* Add animation styles */
                      }
                    </style>
                  `,
                  testCases: [
                    { condition: "Banner should slide in from the top." }
                  ],
                  solutionExplanation: "Use @keyframes with transform.",
                  language: "HTML/CSS",
                },
                {
                  number: 54,
                  title: "Create a Fullscreen Modal",
                  description: "Add a fullscreen modal that covers the entire viewport.",
                  difficulty: "Intermediate",
                  difficultyScore: 2,
                  level: "Intermediate",
                  existingCode: `
                    <div class="modal">
                      <h2>Modal Title</h2>
                      <p>Modal Content</p>
                      <button class="close-btn">Close</button>
                    </div>
                    <style>
                      .modal {
                        /* Add fullscreen styles */
                      }
                    </style>
                  `,
                  testCases: [
                    { condition: "Modal should cover the entire screen and close when the button is clicked." }
                  ],
                  solutionExplanation: "Use position: fixed and top: 0.",
                  language: "HTML/CSS",
                },
                {
                  number: 55,
                  title: "Add a Responsive Table with Highlighted Rows",
                  description: "Highlight table rows on hover in a responsive table.",
                  difficulty: "Intermediate",
                  difficultyScore: 2,
                  level: "Intermediate",
                  existingCode: `
                    <table class="highlight-table">
                      <tr>
                        <td>Row 1</td>
                      </tr>
                      <tr>
                        <td>Row 2</td>
                      </tr>
                    </table>
                    <style>
                      .highlight-table tr:hover {
                        /* Add hover styles */
                      }
                    </style>
                  `,
                  testCases: [
                    { condition: "Rows should highlight on hover." }
                  ],
                  solutionExplanation: "Use :hover with background color changes.",
                  language: "HTML/CSS",
                },
                {
                  number: 56,
                  title: "Create an Expanding Search Bar",
                  description: "Add a search bar that expands when clicked.",
                  difficulty: "Intermediate",
                  difficultyScore: 2,
                  level: "Intermediate",
                  existingCode: `
                    <input type="text" class="expand-search" placeholder="Search...">
                    <style>
                      .expand-search {
                        /* Add expanding styles */
                      }
                    </style>
                  `,
                  testCases: [
                    { condition: "Search bar should expand horizontally on focus." }
                  ],
                  solutionExplanation: "Use transition with width changes.",
                  language: "HTML/CSS",
                },
                {
                  number: 57,
                  title: "Style an Interactive Rating System",
                  description: "Create a rating system with clickable stars.",
                  difficulty: "Intermediate",
                  difficultyScore: 2,
                  level: "Intermediate",
                  existingCode: `
                    <div class="rating">
                      ★★★★★
                    </div>
                    <style>
                      .rating {
                        /* Add clickable star styles */
                      }
                    </style>
                  `,
                  testCases: [
                    { condition: "Clicking a star should visually update the rating." }
                  ],
                  solutionExplanation: "Use JavaScript to handle click events.",
                  language: "HTML/CSS",
                },
                {
                  number: 58,
                  title: "Add a Dark Mode Toggle",
                  description: "Create a dark mode toggle button.",
                  difficulty: "Intermediate",
                  difficultyScore: 2,
                  level: "Intermediate",
                  existingCode: `
                    <button class="dark-mode-toggle">Toggle Dark Mode</button>
                    <style>
                      body.dark-mode {
                        /* Add dark mode styles */
                      }
                    </style>
                  `,
                  testCases: [
                    { condition: "Clicking the button should toggle dark mode styles." }
                  ],
                  solutionExplanation: "Use JavaScript to toggle a dark-mode class.",
                  language: "HTML/CSS",
                },
                {
                  number: 59,
                  title: "Create a Responsive FAQ Section",
                  description: "Build an FAQ section with collapsible answers.",
                  difficulty: "Intermediate",
                  difficultyScore: 2,
                  level: "Intermediate",
                  existingCode: `
                    <div class="faq">
                      <div class="question">Question 1</div>
                      <div class="answer">Answer 1</div>
                    </div>
                    <style>
                      .answer {
                        /* Add collapsible styles */
                      }
                    </style>
                  `,
                  testCases: [
                    { condition: "Answers should expand/collapse when clicked." }
                  ],
                  solutionExplanation: "Use JavaScript to toggle visibility.",
                  language: "HTML/CSS",
                },
                {
                  number: 60,
                  title: "Add CSS Animations to a Timeline",
                  description: "Create a vertical timeline with animated events.",
                  difficulty: "Intermediate",
                  difficultyScore: 3,
                  level: "Intermediate",
                  existingCode: `
                    <div class="timeline">
                      <div class="event">Event 1</div>
                      <div class="event">Event 2</div>
                    </div>
                    <style>
                      .event {
                        /* Add animation styles */
                      }
                    </style>
                  `,
                  testCases: [
                    { condition: "Events should slide in from the side as they appear in view." }
                  ],
                  solutionExplanation: "Use @keyframes with scroll-triggered animations.",
                  language: "HTML/CSS",
                },
                    {
                      number: 61,
                      title: "Style a Notification Toast",
                      description: "Create a notification toast that slides in from the bottom-right corner.",
                      difficulty: "Intermediate",
                      difficultyScore: 2,
                      level: "Intermediate",
                      existingCode: `
                        <div class="toast">This is a notification!</div>
                        <style>
                          .toast {
                            /* Add styles for the toast notification */
                          }
                        </style>
                      `,
                      testCases: [
                        { condition: "Toast should slide in and out with animation." }
                      ],
                      solutionExplanation: "Use @keyframes for slide-in and opacity for fade-out effect.",
                      language: "HTML/CSS",
                    },
                    {
                      number: 62,
                      title: "Create a Multi-Tab Interface",
                      description: "Add a tabbed interface where users can switch between sections.",
                      difficulty: "Intermediate",
                      difficultyScore: 3,
                      level: "Intermediate",
                      existingCode: `
                        <div class="tabs">
                          <button class="tab-button active" data-tab="1">Tab 1</button>
                          <button class="tab-button" data-tab="2">Tab 2</button>
                          <div class="tab-content" id="tab-1">Content 1</div>
                          <div class="tab-content" id="tab-2">Content 2</div>
                        </div>
                        <style>
                          .tab-content {
                            /* Add hidden styles for inactive tabs */
                          }
                        </style>
                      `,
                      testCases: [
                        { condition: "Only the active tab's content should be visible." }
                      ],
                      solutionExplanation: "Use JavaScript to toggle the active class.",
                      language: "HTML/CSS",
                    },
                    {
                      number: 63,
                      title: "Add a CSS Gradient Background",
                      description: "Create a section with a gradient background that transitions smoothly.",
                      difficulty: "Intermediate",
                      difficultyScore: 2,
                      level: "Intermediate",
                      existingCode: `
                        <section class="gradient-bg">Gradient Background</section>
                        <style>
                          .gradient-bg {
                            /* Add gradient styles */
                          }
                        </style>
                      `,
                      testCases: [
                        { condition: "Section should display a smooth gradient background." }
                      ],
                      solutionExplanation: "Use background: linear-gradient.",
                      language: "HTML/CSS",
                    },
                    {
                      number: 64,
                      title: "Add a Scroll Indicator",
                      description: "Add a progress bar that shows how much of the page has been scrolled.",
                      difficulty: "Intermediate",
                      difficultyScore: 3,
                      level: "Intermediate",
                      existingCode: `
                        <div class="scroll-indicator"></div>
                        <style>
                          .scroll-indicator {
                            /* Add styles for the scroll progress bar */
                          }
                        </style>
                      `,
                      testCases: [
                        { condition: "Progress bar should fill as the user scrolls." }
                      ],
                      solutionExplanation: "Use JavaScript to calculate and update width dynamically.",
                      language: "HTML/CSS",
                    },
                    {
                      number: 65,
                      title: "Style a Draggable Slider",
                      description: "Create a draggable slider to select a value.",
                      difficulty: "Intermediate",
                      difficultyScore: 2,
                      level: "Intermediate",
                      existingCode: `
                        <input type="range" class="slider">
                        <style>
                          .slider {
                            /* Add styles for the slider */
                          }
                        </style>
                      `,
                      testCases: [
                        { condition: "Slider should display a smooth transition and be draggable." }
                      ],
                      solutionExplanation: "Style input[type=\"range\"] for customization.",
                      language: "HTML/CSS",
                    },
                    {
                      number: 66,
                      title: "Add a Gradient Border to a Button",
                      description: "Style a button with a gradient border effect.",
                      difficulty: "Intermediate",
                      difficultyScore: 2,
                      level: "Intermediate",
                      existingCode: `
                        <button class="gradient-btn">Click Me</button>
                        <style>
                          .gradient-btn {
                            /* Add gradient border styles */
                          }
                        </style>
                      `,
                      testCases: [
                        { condition: "Button should display a visible gradient border." }
                      ],
                      solutionExplanation: "Use border-image-source: linear-gradient.",
                      language: "HTML/CSS",
                    },
                    {
                      number: 67,
                      title: "Create a Sticky Back-to-Top Button",
                      description: "Add a sticky back-to-top button that appears after scrolling down.",
                      difficulty: "Intermediate",
                      difficultyScore: 2,
                      level: "Intermediate",
                      existingCode: `
                        <button class="back-to-top">↑</button>
                        <style>
                          .back-to-top {
                            /* Add sticky styles */
                          }
                        </style>
                      `,
                      testCases: [
                        { condition: "Button should stick to the bottom-right and scroll to the top when clicked." }
                      ],
                      solutionExplanation: "Use position: fixed and JavaScript for scrolling.",
                      language: "HTML/CSS",
                    },
                    {
                      number: 68,
                      title: "Design a CSS Clock",
                      description: "Create an analog clock using CSS and animations.",
                      difficulty: "Intermediate",
                      difficultyScore: 3,
                      level: "Intermediate",
                      existingCode: `
                        <div class="clock">
                          <div class="hour-hand"></div>
                          <div class="minute-hand"></div>
                          <div class="second-hand"></div>
                        </div>
                        <style>
                          .clock {
                            /* Add styles for clock and hands */
                          }
                        </style>
                      `,
                      testCases: [
                        { condition: "Hands should move in real time." }
                      ],
                      solutionExplanation: "Use @keyframes to rotate the clock hands.",
                      language: "HTML/CSS",
                    },
                    {
                      number: 69,
                      title: "Add an Animated Border Hover Effect",
                      description: "Create a button with an animated border that appears on hover.",
                      difficulty: "Intermediate",
                      difficultyScore: 2,
                      level: "Intermediate",
                      existingCode: `
                        <button class="hover-border-btn">Hover Me</button>
                        <style>
                          .hover-border-btn {
                            /* Add hover border styles */
                          }
                        </style>
                      `,
                      testCases: [
                        { condition: "Border should animate around the button when hovered." }
                      ],
                      solutionExplanation: "Use ::before and ::after with transition.",
                      language: "HTML/CSS",
                    },
                    {
                      number: 70,
                      title: "Style a Responsive Header with Search",
                      description: "Add a responsive header with a search bar and navigation.",
                      difficulty: "Intermediate",
                      difficultyScore: 2,
                      level: "Intermediate",
                      existingCode: `
                        <header class="responsive-header">
                          <div class="logo">Logo</div>
                          <nav class="nav-links">
                            <a href="#">Home</a>
                            <a href="#">About</a>
                          </nav>
                          <input type="text" placeholder="Search..." class="search-bar">
                        </header>
                        <style>
                          .responsive-header {
                            /* Add responsive header styles */
                          }
                        </style>
                      `,
                      testCases: [
                        { condition: "Layout should adjust properly on smaller screens." }
                      ],
                      solutionExplanation: "Use flexbox and media queries.",
                      language: "HTML/CSS",
                    },
                    {
                      number: 71,
                      title: "Add a Fullscreen Hamburger Menu",
                      description: "Create a fullscreen menu that appears when the hamburger button is clicked.",
                      difficulty: "Intermediate",
                      difficultyScore: 3,
                      level: "Intermediate",
                      existingCode: `
                        <button class="hamburger-menu">☰</button>
                        <div class="fullscreen-menu">Menu Content</div>
                        <style>
                          .fullscreen-menu {
                            /* Add styles for fullscreen menu */
                          }
                        </style>
                      `,
                      testCases: [
                        { condition: "Menu should cover the entire screen when activated." }
                      ],
                      solutionExplanation: "Use position: fixed and visibility.",
                      language: "HTML/CSS",
                    },
                    {
                      number: 72,
                      title: "Style a Horizontal Scroll Section",
                      description: "Add a section with horizontal scrolling for content.",
                      difficulty: "Intermediate",
                      difficultyScore: 2,
                      level: "Intermediate",
                      existingCode: `
                        <div class="horizontal-scroll">
                          <div class="item">Item 1</div>
                          <div class="item">Item 2</div>
                          <div class="item">Item 3</div>
                        </div>
                        <style>
                          .horizontal-scroll {
                            /* Add horizontal scroll styles */
                          }
                        </style>
                      `,
                      testCases: [
                        { condition: "Section should allow horizontal scrolling." }
                      ],
                      solutionExplanation: "Use display: flex and overflow-x: scroll.",
                      language: "HTML/CSS",
                    },
                    {
                      number: 73,
                      title: "Add Animated Tabs",
                      description: "Create a tabbed interface with animations when switching tabs.",
                      difficulty: "Intermediate",
                      difficultyScore: 3,
                      level: "Intermediate",
                      existingCode: `
                        <div class="animated-tabs">
                          <button class="tab-btn active" data-tab="1">Tab 1</button>
                          <button class="tab-btn" data-tab="2">Tab 2</button>
                          <div class="tab-content active" id="tab-1">Content 1</div>
                          <div class="tab-content" id="tab-2">Content 2</div>
                        </div>
                        <style>
                          .tab-content {
                            /* Add animation styles */
                          }
                        </style>
                      `,
                      testCases: [
                        { condition: "Switching tabs should animate content." }
                      ],
                      solutionExplanation: "Use opacity and transform for smooth transitions.",
                      language: "HTML/CSS",
                    },
                    {
                      number: 74,
                      title: "Add Custom Scrollbar Styles",
                      description: "Style the default scrollbar for a container.",
                      difficulty: "Intermediate",
                      difficultyScore: 2,
                      level: "Intermediate",
                      existingCode: `
                        <div class="scroll-container">
                          <p>Scrollable content goes here...</p>
                        </div>
                        <style>
                          .scroll-container {
                            /* Add custom scrollbar styles */
                          }
                        </style>
                      `,
                      testCases: [
                        { condition: "Scrollbar should have custom colors and thickness." }
                      ],
                      solutionExplanation: "Use ::-webkit-scrollbar and related pseudo-elements.",
                      language: "HTML/CSS",
                    },
                    {
                      number: 75,
                      title: "Add a Typing Animation to Text",
                      description: "Create a typing effect for a heading.",
                      difficulty: "Intermediate",
                      difficultyScore: 3,
                      level: "Intermediate",
                      existingCode: `
                        <h1 class="typing-text">Typing Animation</h1>
                        <style>
                          .typing-text {
                            /* Add typing animation */
                          }
                        </style>
                      `,
                      testCases: [
                        { condition: "Text should appear letter by letter with an animation." }
                      ],
                      solutionExplanation: "Use @keyframes with width or clip-path.",
                      language: "HTML/CSS",
                    },
                    {
                      number: 76,
                      title: "Add a Custom Checkbox",
                      description: "Replace the default checkbox with a custom design.",
                      difficulty: "Intermediate",
                      difficultyScore: 2,
                      level: "Intermediate",
                      existingCode: `
                        <input type="checkbox" class="custom-checkbox">
                        <style>
                          .custom-checkbox {
                            /* Add custom checkbox styles */
                          }
                        </style>
                      `,
                      testCases: [
                        { condition: "Checkbox should appear as a styled box with a checkmark." }
                      ],
                      solutionExplanation: "Use appearance: none and custom styles.",
                      language: "HTML/CSS",
                    },
                    {
                      number: 77,
                      title: "Add a Content Reveal Animation",
                      description: "Animate content to fade in and slide up when it enters the viewport.",
                      difficulty: "Intermediate",
                      difficultyScore: 3,
                      level: "Intermediate",
                      existingCode: `
                        <div class="reveal-content">Reveal me on scroll</div>
                        <style>
                          .reveal-content {
                            /* Add reveal animation styles */
                          }
                        </style>
                      `,
                      testCases: [
                        { condition: "Content should fade in and slide up as it becomes visible." }
                      ],
                      solutionExplanation: "Use @keyframes and JavaScript scroll detection.",
                      language: "HTML/CSS",
                    },
                    {
                      number: 78,
                      title: "Style a Tag Input Field",
                      description: "Create an input field where users can add tags.",
                      difficulty: "Intermediate",
                      difficultyScore: 3,
                      level: "Intermediate",
                      existingCode: `
                        <div class="tag-input">
                          <input type="text" placeholder="Add tags...">
                          <div class="tags"></div>
                        </div>
                        <style>
                          .tags {
                            /* Add styles for tags */
                          }
                        </style>
                      `,
                      testCases: [
                        { condition: "Added tags should display below the input." }
                      ],
                      solutionExplanation: "Use JavaScript to dynamically add tag elements.",
                      language: "HTML/CSS",
                    },
                    {
                      number: 79,
                      title: "Add a Zoom Lens Effect to an Image",
                      description: "Create a zoom lens effect on an image.",
                      difficulty: "Intermediate",
                      difficultyScore: 3,
                      level: "Intermediate",
                      existingCode: `
                        <div class="zoom-lens">
                          <img src="image.jpg" alt="Zoom">
                        </div>
                        <style>
                          .zoom-lens {
                            /* Add zoom lens effect styles */
                          }
                        </style>
                      `,
                      testCases: [
                        { condition: "Image should zoom in a specific section on hover." }
                      ],
                      solutionExplanation: "Use transform and position.",
                      language: "HTML/CSS",
                    },
                    {
                      number: 80,
                      title: "Add a Hover Flip Animation for Images",
                      description: "Make an image flip to reveal text on hover.",
                      difficulty: "Intermediate",
                      difficultyScore: 3,
                      level: "Intermediate",
                      existingCode: `
                        <div class="flip-card">
                          <div class="front"><img src="image.jpg"></div>
                          <div class="back">Back Text</div>
                        </div>
                        <style>
                          .flip-card {
                            /* Add flip styles */
                          }
                        </style>
                      `,
                      testCases: [
                        { condition: "Card should flip to show the back content on hover." }
                      ],
                      solutionExplanation: "Use transform: rotateY with :hover.",
                      language: "HTML/CSS",
                    }
                  ,
                    {
                      number: 81,
                      title: "Add a CSS Ripple Effect to Buttons",
                      description: "Add a ripple effect to buttons when clicked.",
                      difficulty: "Intermediate",
                      difficultyScore: 3,
                      level: "Intermediate",
                      existingCode: `
                        <button class="ripple-btn">Click Me</button>
                        <style>
                          .ripple-btn {
                            /* Add ripple effect styles */
                          }
                        </style>
                      `,
                      testCases: [
                        { condition: "A ripple animation should expand from the click point." }
                      ],
                      solutionExplanation: "Use position: relative, overflow: hidden, and JavaScript for click detection.",
                      language: "HTML/CSS",
                    },
                    {
                      number: 82,
                      title: "Create a Sliding Notification Bar",
                      description: "Design a notification bar that slides down from the top.",
                      difficulty: "Intermediate",
                      difficultyScore: 3,
                      level: "Intermediate",
                      existingCode: `
                        <div class="notification-bar">This is a notification!</div>
                        <style>
                          .notification-bar {
                            /* Add sliding effect */
                          }
                        </style>
                      `,
                      testCases: [
                        { condition: "Notification bar should slide in when triggered." }
                      ],
                      solutionExplanation: "Use @keyframes for sliding and position: fixed.",
                      language: "HTML/CSS",
                    },
                    {
                      number: 83,
                      title: "Add an Image Carousel",
                      description: "Create a responsive image carousel with next/prev buttons.",
                      difficulty: "Intermediate",
                      difficultyScore: 4,
                      level: "Intermediate",
                      existingCode: `
                        <div class="carousel">
                          <div class="carousel-item">Image 1</div>
                          <div class="carousel-item">Image 2</div>
                          <button class="prev">❮</button>
                          <button class="next">❯</button>
                        </div>
                        <style>
                          .carousel {
                            /* Add carousel styles */
                          }
                        </style>
                      `,
                      testCases: [
                        { condition: "Images should scroll left/right with buttons." }
                      ],
                      solutionExplanation: "Use transform: translateX and JavaScript for control.",
                      language: "HTML/CSS",
                    },
                    {
                      number: 84,
                      title: "Add an Expandable Text Box",
                      description: "Design a text area that grows in height as text is added.",
                      difficulty: "Intermediate",
                      difficultyScore: 2,
                      level: "Intermediate",
                      existingCode: `
                        <textarea class="expandable-textarea"></textarea>
                        <style>
                          .expandable-textarea {
                            /* Add auto-resize styles */
                          }
                        </style>
                      `,
                      testCases: [
                        { condition: "Text area should expand vertically as content is added." }
                      ],
                      solutionExplanation: "Use JavaScript to adjust height dynamically.",
                      language: "HTML/CSS",
                    },
                    {
                      number: 85,
                      title: "Style a Pagination Component",
                      description: "Add a styled pagination component.",
                      difficulty: "Intermediate",
                      difficultyScore: 3,
                      level: "Intermediate",
                      existingCode: `
                        <div class="pagination">
                          <a href="#" class="prev">❮</a>
                          <a href="#" class="page">1</a>
                          <a href="#" class="page">2</a>
                          <a href="#" class="next">❯</a>
                        </div>
                        <style>
                          .pagination {
                            /* Add pagination styles */
                          }
                        </style>
                      `,
                      testCases: [
                        { condition: "Pagination should have active and hover states." }
                      ],
                      solutionExplanation: "Use active and :hover styles for links.",
                      language: "HTML/CSS",
                    },
                    {
                      number: 86,
                      title: "Add a Floating Social Media Bar",
                      description: "Create a floating bar with social media icons.",
                      difficulty: "Intermediate",
                      difficultyScore: 2,
                      level: "Intermediate",
                      existingCode: `
                        <div class="social-media-bar">
                          <a href="#">Facebook</a>
                          <a href="#">Twitter</a>
                          <a href="#">Instagram</a>
                        </div>
                        <style>
                          .social-media-bar {
                            /* Add floating bar styles */
                          }
                        </style>
                      `,
                      testCases: [
                        { condition: "Bar should stay fixed on the left or right of the screen." }
                      ],
                      solutionExplanation: "Use position: fixed with vertical alignment.",
                      language: "HTML/CSS",
                    },
                    {
                      number: 87,
                      title: "Add a Text Reveal Animation",
                      description: "Reveal text with a sliding animation on page load.",
                      difficulty: "Intermediate",
                      difficultyScore: 2,
                      level: "Intermediate",
                      existingCode: `
                        <h1 class="reveal-text">Welcome!</h1>
                        <style>
                          .reveal-text {
                            /* Add reveal animation */
                          }
                        </style>
                      `,
                      testCases: [
                        { condition: "Text should slide in from the left when the page loads." }
                      ],
                      solutionExplanation: "Use @keyframes and transform: translateX.",
                      language: "HTML/CSS",
                    },
                    {
                      number: 88,
                      title: "Create a CSS Tooltip",
                      description: "Add tooltips to icons that appear on hover.",
                      difficulty: "Intermediate",
                      difficultyScore: 2,
                      level: "Intermediate",
                      existingCode: `
                        <div class="icon-with-tooltip">
                          <i>Icon</i>
                          <span class="tooltip">Tooltip Text</span>
                        </div>
                        <style>
                          .tooltip {
                            /* Add tooltip styles */
                          }
                        </style>
                      `,
                      testCases: [
                        { condition: "Tooltip should appear above the icon when hovered." }
                      ],
                      solutionExplanation: "Use visibility, opacity, and :hover.",
                      language: "HTML/CSS",
                    },
                    {
                      number: 89,
                      title: "Add a Responsive Card Grid",
                      description: "Create a grid of cards that adjusts to different screen sizes.",
                      difficulty: "Intermediate",
                      difficultyScore: 3,
                      level: "Intermediate",
                      existingCode: `
                        <div class="card-grid">
                          <div class="card">Card 1</div>
                          <div class="card">Card 2</div>
                          <div class="card">Card 3</div>
                        </div>
                        <style>
                          .card-grid {
                            /* Add grid styles */
                          }
                        </style>
                      `,
                      testCases: [
                        { condition: "Cards should display in rows of 3 on large screens and stack on smaller screens." }
                      ],
                      solutionExplanation: "Use grid-template-columns and media queries.",
                      language: "HTML/CSS",
                    },
                    {
                      number: 90,
                      title: "Add a Dynamic Countdown Timer",
                      description: "Create a countdown timer that updates every second.",
                      difficulty: "Intermediate",
                      difficultyScore: 3,
                      level: "Intermediate",
                      existingCode: `
                        <div class="countdown-timer">00:00:00</div>
                        <style>
                          .countdown-timer {
                            /* Add timer styles */
                          }
                        </style>
                      `,
                      testCases: [
                        { condition: "Timer should count down to zero dynamically." }
                      ],
                      solutionExplanation: "Use JavaScript to update the timer in real time.",
                      language: "HTML/CSS",
                    },
                    {
                      number: 91,
                      title: "Add a Blurred Background Effect",
                      description: "Blur the background of a section while keeping the foreground content sharp.",
                      difficulty: "Intermediate",
                      difficultyScore: 3,
                      level: "Intermediate",
                      existingCode: `
                        <div class="blurred-bg">
                          <div class="content">Foreground Content</div>
                        </div>
                        <style>
                          .blurred-bg {
                            /* Add blur effect */
                          }
                        </style>
                      `,
                      testCases: [
                        { condition: "Background should appear blurred while content remains sharp." }
                      ],
                      solutionExplanation: "Use backdrop-filter: blur.",
                      language: "HTML/CSS",
                    },
                    {
                      number: 92,
                      title: "Create a Fixed Split Screen Layout",
                      description: "Divide the screen into two fixed sections side by side.",
                      difficulty: "Intermediate",
                      difficultyScore: 3,
                      level: "Intermediate",
                      existingCode: `
                        <div class="split-layout">
                          <div class="left">Left Content</div>
                          <div class="right">Right Content</div>
                        </div>
                        <style>
                          .split-layout {
                            /* Add fixed layout styles */
                          }
                        </style>
                      `,
                      testCases: [
                        { condition: "Both sections should occupy 50% of the screen width." }
                      ],
                      solutionExplanation: "Use flexbox and height: 100vh.",
                      language: "HTML/CSS",
                    },
                    {
                      number: 93,
                      title: "Add a Parallax Image Gallery",
                      description: "Create a gallery where images have a parallax effect.",
                      difficulty: "Intermediate",
                      difficultyScore: 4,
                      level: "Intermediate",
                      existingCode: `
                        <div class="parallax-gallery">
                          <img src="image1.jpg">
                          <img src="image2.jpg">
                        </div>
                        <style>
                          .parallax-gallery img {
                            /* Add parallax styles */
                          }
                        </style>
                      `,
                      testCases: [
                        { condition: "Images should move at different speeds while scrolling." }
                      ],
                      solutionExplanation: "Use transform and scroll events in JavaScript.",
                      language: "HTML/CSS",
                    },
                    {
                      number: 94,
                      title: "Add a Progress Circle",
                      description: "Create a circular progress bar that fills based on a percentage.",
                      difficulty: "Intermediate",
                      difficultyScore: 4,
                      level: "Intermediate",
                      existingCode: `
                        <div class="progress-circle"></div>
                        <style>
                          .progress-circle {
                            /* Add circular progress styles */
                          }
                        </style>
                      `,
                      testCases: [
                        { condition: "Circle should visually fill based on progress." }
                      ],
                      solutionExplanation: "Use stroke-dasharray and stroke-dashoffset for SVG circles.",
                      language: "HTML/CSS",
                    },
                    {
                        number: 95,
                        title: "Add an Animated Dropdown Menu",
                        description: "Create a dropdown menu with fade and slide animations.",
                        difficulty: "Intermediate",
                        difficultyScore: 3,
                        level: "Intermediate",
                        existingCode: `
                          <div class="dropdown">
                            <button>Menu</button>
                            <div class="dropdown-content">Menu Items</div>
                          </div>
                          <style>
                            .dropdown-content {
                              /* Add animated dropdown styles */
                            }
                          </style>
                        `,
                        testCases: [
                          { condition: "Menu should slide and fade in when toggled." }
                        ],
                        solutionExplanation: "Use opacity, transform, and @keyframes.",
                        language: "HTML/CSS",
                      },
{
    number: 96,
    title: "Add a Fullscreen Video Background",
    description: "Use a fullscreen video as the background for a section.",
    difficulty: "Intermediate",
    difficultyScore: 3,
    level: "Intermediate",
    existingCode: `
      <div class="video-bg">
        <video autoplay muted loop>
          <source src="video.mp4" type="video/mp4">
        </video>
        <div class="content">Foreground Content</div>
      </div>
      <style>
        .video-bg {
          /* Add fullscreen video styles */
        }
      </style>
    `,
    testCases: [
      { condition: "Video should cover the entire section and loop continuously." }
    ],
    solutionExplanation: "Use position: absolute and z-index.",
    language: "HTML/CSS",
  },
  {
    number: 97,
    title: "Add a Scroll-Triggered Animation",
    description: "Trigger animations as elements come into view while scrolling.",
    difficulty: "Intermediate",
    difficultyScore: 3,
    level: "Intermediate",
    existingCode: `
      <div class="animated-section">Content</div>
      <style>
        .animated-section {
          /* Add animation styles */
        }
      </style>
    `,
    testCases: [
      { condition: "Animation should trigger when the section enters the viewport." }
    ],
    solutionExplanation: "Use JavaScript for scroll detection and toggle classes.",
    language: "HTML/CSS",
  },
  {
    number: 98,
    title: "Style a File Upload Input",
    description: "Replace the default file upload input with a custom design.",
    difficulty: "Intermediate",
    difficultyScore: 2,
    level: "Intermediate",
    existingCode: `
      <input type="file" class="file-upload">
      <style>
        .file-upload {
          /* Add custom styles */
        }
      </style>
    `,
    testCases: [
      { condition: "Input should have a styled appearance with a custom button." }
    ],
    solutionExplanation: "Use appearance: none and custom labels.",
    language: "HTML/CSS",
  },
  {
    number: 99,
    title: "Add a Dynamic Filter for Content",
    description: "Create buttons to filter content dynamically.",
    difficulty: "Intermediate",
    difficultyScore: 3,
    level: "Intermediate",
    existingCode: `
      <button data-filter="all">All</button>
      <button data-filter="category1">Category 1</button>
      <div class="content-item" data-category="category1">Item 1</div>
      <div class="content-item" data-category="category2">Item 2</div>
      <style>
        .content-item {
          /* Add content filter styles */
        }
      </style>
    `,
    testCases: [
      { condition: "Clicking a button should show only matching content." }
    ],
    solutionExplanation: "Use JavaScript to toggle visibility.",
    language: "HTML/CSS",
  },
  {
    number: 100,
    title: "Create a Glassmorphism Card",
    description: "Design a card with a frosted glass effect.",
    difficulty: "Intermediate",
    difficultyScore: 4,
    level: "Intermediate",
    existingCode: `
      <div class="glass-card">Glassmorphism Content</div>
      <style>
        .glass-card {
          /* Add glass effect styles */
        }
      </style>
    `,
    testCases: [
      { condition: "Card should appear semi-transparent with a blurred background." }
    ],
    solutionExplanation: "Use backdrop-filter and opacity.",
    language: "HTML/CSS",
  },  

  //EXPERT LEVEL TASKS 

    {
      number: 1,
      title: "Build a Custom Lightbox",
      description: "Create a lightbox to display images in a fullscreen overlay when clicked.",
      difficulty: "Expert",
      difficultyScore: 5,
      level: "Expert",
      existingCode: `
        <div class="gallery">
          <img src="image1.jpg" class="lightbox-img" alt="Thumbnail">
        </div>
        <div class="lightbox">
          <img src="" class="lightbox-display">
        </div>
        <style>
          .lightbox {
            /* Add lightbox overlay styles */
          }
        </style>
      `,
      testCases: [
        { condition: "Clicking a thumbnail should open it in a fullscreen lightbox." }
      ],
      solutionExplanation: "Use JavaScript to update the image source and toggle visibility.",
      language: "HTML/CSS",
    },
    {
      number: 2,
      title: "Create a Responsive E-commerce Product Grid",
      description: "Design a product grid that adjusts dynamically based on screen size.",
      difficulty: "Expert",
      difficultyScore: 5,
      level: "Expert",
      existingCode: `
        <div class="product-grid">
          <div class="product-card">Product 1</div>
          <div class="product-card">Product 2</div>
        </div>
        <style>
          .product-grid {
            display: grid;
            /* Add responsive grid styles */
          }
        </style>
      `,
      testCases: [
        { condition: "Grid should show 4 items per row on large screens, 2 on medium, and 1 on small." }
      ],
      solutionExplanation: "Use grid-template-columns and media queries.",
      language: "HTML/CSS",
    },
    {
      number: 3,
      title: "Build an Infinite Scrolling List",
      description: "Load more content dynamically as the user scrolls down.",
      difficulty: "Expert",
      difficultyScore: 5,
      level: "Expert",
      existingCode: `
        <div class="infinite-list">
          <div class="item">Item 1</div>
          <div class="item">Item 2</div>
        </div>
        <style>
          .infinite-list {
            /* Add list styles */
          }
        </style>
      `,
      testCases: [
        { condition: "More items should load automatically as the user scrolls." }
      ],
      solutionExplanation: "Use JavaScript to detect scroll position and fetch new data.",
      language: "HTML/CSS",
    },
    {
      number: 4,
      title: "Add Dynamic Sorting to a Table",
      description: "Enable sorting of table columns by clicking headers.",
      difficulty: "Expert",
      difficultyScore: 4,
      level: "Expert",
      existingCode: `
        <table class="sortable-table">
          <thead>
            <tr>
              <th data-column="name" data-order="asc">Name</th>
              <th data-column="age" data-order="asc">Age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John</td>
              <td>25</td>
            </tr>
          </tbody>
        </table>
        <style>
          .sortable-table {
            /* Add table styles */
          }
        </style>
      `,
      testCases: [
        { condition: "Clicking a header should sort the table based on that column." }
      ],
      solutionExplanation: "Use JavaScript to sort rows dynamically.",
      language: "HTML/CSS",
    },
    {
      number: 5,
      title: "Create a Custom File Upload Preview",
      description: "Allow users to upload an image and preview it before submission.",
      difficulty: "Expert",
      difficultyScore: 4,
      level: "Expert",
      existingCode: `
        <input type="file" class="file-upload">
        <div class="preview"></div>
        <style>
          .preview {
            /* Add preview styles */
          }
        </style>
      `,
      testCases: [
        { condition: "Uploaded images should display as a preview." }
      ],
      solutionExplanation: "Use JavaScript to read the file and display it.",
      language: "HTML/CSS",
    },
    {
      number: 6,
      title: "Build a Multi-Step Form with Progress Bar",
      description: "Create a multi-step form with a visual progress indicator.",
      difficulty: "Expert",
      difficultyScore: 4,
      level: "Expert",
      existingCode: `
        <div class="multi-step-form">
          <div class="step">Step 1</div>
          <div class="step">Step 2</div>
          <div class="progress-bar"></div>
        </div>
        <style>
          .progress-bar {
            /* Add progress bar styles */
          }
        </style>
      `,
      testCases: [
        { condition: "Progress bar should update as the user moves through the steps." }
      ],
      solutionExplanation: "Use JavaScript to track step completion and update progress.",
      language: "HTML/CSS",
    },
    {
      number: 7,
      title: "Create a CSS Image Grid with Hover Effects",
      description: "Design an image grid where each image zooms slightly on hover.",
      difficulty: "Expert",
      difficultyScore: 4,
      level: "Expert",
      existingCode: `
        <div class="image-grid">
          <img src="image1.jpg" class="grid-img">
        </div>
        <style>
          .grid-img {
            /* Add hover zoom effect */
          }
        </style>
      `,
      testCases: [
        { condition: "Images should zoom slightly on hover without affecting layout." }
      ],
      solutionExplanation: "Use transform: scale(1.1) with :hover.",
      language: "HTML/CSS",
    },
    {
      number: 8,
      title: "Build a Dynamic Calendar",
      description: "Create a calendar where users can navigate between months.",
      difficulty: "Expert",
      difficultyScore: 5,
      level: "Expert",
      existingCode: `
        <div class="calendar">
          <button class="prev">❮</button>
          <div class="month">January</div>
          <button class="next">❯</button>
          <div class="days"></div>
        </div>
        <style>
          .calendar {
            /* Add calendar styles */
          }
        </style>
      `,
      testCases: [
        { condition: "Calendar should update dynamically when navigating between months." }
      ],
      solutionExplanation: "Use JavaScript to populate and update days.",
      language: "HTML/CSS",
    },
    {
      number: 9,
      title: "Create a Filterable Portfolio",
      description: "Build a portfolio section where users can filter projects by category.",
      difficulty: "Expert",
      difficultyScore: 5,
      level: "Expert",
      existingCode: `
        <div class="portfolio">
          <button data-filter="all">All</button>
          <button data-filter="web">Web</button>
          <div class="project" data-category="web">Project 1</div>
        </div>
        <style>
          .portfolio {
            /* Add portfolio styles */
          }
        </style>
      `,
      testCases: [
        { condition: "Clicking a category should show only matching projects." }
      ],
      solutionExplanation: "Use JavaScript to toggle project visibility.",
      language: "HTML/CSS",
    },
    {
      number: 10,
      title: "Build a Fullscreen Slider",
      description: "Create a fullscreen slider with automatic transitions.",
      difficulty: "Expert",
      difficultyScore: 5,
      level: "Expert",
      existingCode: `
        <div class="slider">
          <div class="slide">Slide 1</div>
          <div class="slide">Slide 2</div>
        </div>
        <style>
          .slider {
            /* Add fullscreen slider styles */
          }
        </style>
      `,
      testCases: [
        { condition: "Slides should transition automatically every few seconds." }
      ],
      solutionExplanation: "Use @keyframes for transitions and JavaScript for controls.",
      language: "HTML/CSS",
    }
  ,
    {
      number: 11,
      title: "Build a Draggable Modal",
      description: "Create a modal window that can be dragged around the screen.",
      difficulty: "Expert",
      difficultyScore: 5,
      level: "Expert",
      existingCode: `
        <div class="modal">
          <h2>Draggable Modal</h2>
          <p>Content goes here...</p>
        </div>
        <style>
          .modal {
            /* Add draggable styles */
          }
        </style>
      `,
      testCases: [
        { condition: "Modal should move with the mouse when dragged." }
      ],
      solutionExplanation: "Use JavaScript for mousedown and mousemove events.",
      language: "HTML/CSS",
    },
    {
      number: 12,
      title: "Create an Editable Table",
      description: "Allow users to edit table cells directly by clicking on them.",
      difficulty: "Expert",
      difficultyScore: 4,
      level: "Expert",
      existingCode: `
        <table class="editable-table">
          <tr>
            <td contenteditable="true">Editable Cell</td>
          </tr>
        </table>
        <style>
          .editable-table {
            /* Add table styles */
          }
        </style>
      `,
      testCases: [
        { condition: "Clicking a cell should make it editable." }
      ],
      solutionExplanation: "Use the contenteditable attribute.",
      language: "HTML/CSS",
    },
    {
      number: 13,
      title: "Build a Heatmap Calendar",
      description: "Create a calendar with color-coded heatmap based on data.",
      difficulty: "Expert",
      difficultyScore: 5,
      level: "Expert",
      existingCode: `
        <div class="heatmap-calendar">
          <div class="day" data-count="5">5</div>
          <div class="day" data-count="10">10</div>
        </div>
        <style>
          .day {
            /* Add heatmap styles */
          }
        </style>
      `,
      testCases: [
        { condition: "Days should display different colors based on data counts." }
      ],
      solutionExplanation: "Use JavaScript to apply dynamic styles based on data.",
      language: "HTML/CSS",
    },
    {
      number: 14,
      title: "Create an Interactive Org Chart",
      description: "Build an organizational chart with expandable nodes.",
      difficulty: "Expert",
      difficultyScore: 5,
      level: "Expert",
      existingCode: `
        <div class="org-chart">
          <div class="node">CEO</div>
          <div class="node">Manager</div>
        </div>
        <style>
          .org-chart {
            /* Add chart styles */
          }
        </style>
      `,
      testCases: [
        { condition: "Clicking a node should expand/collapse its children." }
      ],
      solutionExplanation: "Use JavaScript to toggle child node visibility.",
      language: "HTML/CSS",
    },
    {
      number: 15,
      title: "Add an Image Comparison Slider",
      description: "Create a slider to compare two images interactively.",
      difficulty: "Expert",
      difficultyScore: 4,
      level: "Expert",
      existingCode: `
        <div class="image-comparison">
          <img src="image1.jpg" class="before">
          <img src="image2.jpg" class="after">
          <div class="slider"></div>
        </div>
        <style>
          .image-comparison {
            /* Add comparison styles */
          }
        </style>
      `,
      testCases: [
        { condition: "Slider should reveal the 'after' image as it moves." }
      ],
      solutionExplanation: "Use JavaScript to adjust width dynamically.",
      language: "HTML/CSS",
    },
    {
      number: 16,
      title: "Create a Dynamic Breadcrumb Navigation",
      description: "Build breadcrumbs that dynamically update based on navigation.",
      difficulty: "Expert",
      difficultyScore: 4,
      level: "Expert",
      existingCode: `
        <nav class="breadcrumbs">
          <a href="#">Home</a>
          <a href="#">Category</a>
          <span>Current Page</span>
        </nav>
        <style>
          .breadcrumbs {
            /* Add breadcrumb styles */
          }
        </style>
      `,
      testCases: [
        { condition: "Breadcrumbs should update dynamically based on user path." }
      ],
      solutionExplanation: "Use JavaScript to manage breadcrumb links.",
      language: "HTML/CSS",
    },
    {
      number: 17,
      title: "Build a Dynamic Dashboard",
      description: "Create a dashboard with widgets that can be added or removed.",
      difficulty: "Expert",
      difficultyScore: 5,
      level: "Expert",
      existingCode: `
        <div class="dashboard">
          <div class="widget">Widget 1</div>
        </div>
        <style>
          .dashboard {
            /* Add dashboard styles */
          }
        </style>
      `,
      testCases: [
        { condition: "Users should be able to add or remove widgets dynamically." }
      ],
      solutionExplanation: "Use JavaScript to manage widget states.",
      language: "HTML/CSS",
    },
    {
      number: 18,
      title: "Create a Typing Speed Test",
      description: "Build a typing speed test with a countdown timer.",
      difficulty: "Expert",
      difficultyScore: 5,
      level: "Expert",
      existingCode: `
        <div class="typing-test">
          <p class="text-to-type">Type this text</p>
          <textarea></textarea>
          <div class="timer">60</div>
        </div>
        <style>
          .typing-test {
            /* Add typing test styles */
          }
        </style>
      `,
      testCases: [
        { condition: "Timer should count down, and results should display after completion." }
      ],
      solutionExplanation: "Use JavaScript for timing and accuracy calculation.",
      language: "HTML/CSS",
    },
    {
      number: 19,
      title: "Add Animated SVG Path Drawing",
      description: "Animate an SVG path to draw it on the screen.",
      difficulty: "Expert",
      difficultyScore: 5,
      level: "Expert",
      existingCode: `
        <svg>
          <path d="M10 10 H 90 V 90 H 10 Z"></path>
        </svg>
        <style>
          path {
            /* Add animation styles */
          }
        </style>
      `,
      testCases: [
        { condition: "Path should animate as if being drawn on the screen." }
      ],
      solutionExplanation: "Use stroke-dasharray and stroke-dashoffset.",
      language: "HTML/CSS",
    },
    {
      number: 20,
      title: "Build a Real-Time Chat Interface",
      description: "Create a chat interface with real-time message updates.",
      difficulty: "Expert",
      difficultyScore: 5,
      level: "Expert",
      existingCode: `
        <div class="chat-box">
          <div class="messages"></div>
          <input type="text" class="chat-input">
          <button>Send</button>
        </div>
        <style>
          .chat-box {
            /* Add chat styles */
          }
        </style>
      `,
      testCases: [
        { condition: "Messages should appear in real-time as they are sent." }
      ],
      solutionExplanation: "Use JavaScript and WebSocket for real-time updates.",
      language: "HTML/CSS",
    },
    
        {
          number: 21,
          title: "Build a Real-Time Weather Dashboard",
          description: "Create a weather dashboard that fetches and displays live weather data.",
          difficulty: "Expert",
          difficultyScore: 5,
          level: "Expert",
          existingCode: `
            <div class="weather-dashboard">
              <h2>Current Weather</h2>
              <div class="weather-info">Fetching...</div>
            </div>
            <style>
              .weather-dashboard {
                /* Add styles for the dashboard */
              }
            </style>
          `,
          testCases: [
            { condition: "The dashboard should display current weather based on user location." }
          ],
          solutionExplanation: "Use JavaScript to fetch data from a weather API dynamically.",
          language: "HTML/CSS",
        },
        {
          number: 22,
          title: "Add a Dynamic Kanban Board",
          description: "Create a Kanban board where users can drag and drop tasks between columns.",
          difficulty: "Expert",
          difficultyScore: 5,
          level: "Expert",
          existingCode: `
            <div class="kanban-board">
              <div class="column" id="todo">To Do</div>
              <div class="column" id="inprogress">In Progress</div>
              <div class="column" id="done">Done</div>
            </div>
            <style>
              .kanban-board {
                /* Add Kanban board styles */
              }
            </style>
          `,
          testCases: [
            { condition: "Tasks should move between columns via drag-and-drop." }
          ],
          solutionExplanation: "Use JavaScript dragstart, dragover, and drop events.",
          language: "HTML/CSS",
        },
        {
          number: 23,
          title: "Build a Data Visualization Dashboard",
          description: "Create a dashboard with charts and graphs that visualize data dynamically.",
          difficulty: "Expert",
          difficultyScore: 5,
          level: "Expert",
          existingCode: `
            <div class="dashboard">
              <canvas id="chart"></canvas>
            </div>
            <style>
              .dashboard {
                /* Add dashboard styles */
              }
            </style>
          `,
          testCases: [
            { condition: "Charts should update dynamically based on user input." }
          ],
          solutionExplanation: "Use a library like Chart.js for rendering dynamic charts.",
          language: "HTML/CSS",
        },
        {
          number: 24,
          title: "Add an Interactive Map",
          description: "Create an interactive map where users can add pins and view locations.",
          difficulty: "Expert",
          difficultyScore: 5,
          level: "Expert",
          existingCode: `
            <div id="map"></div>
            <style>
              #map {
                /* Add map styles */
              }
            </style>
          `,
          testCases: [
            { condition: "Users should be able to add markers by clicking on the map." }
          ],
          solutionExplanation: "Use a mapping library like Leaflet.js or Google Maps API.",
          language: "HTML/CSS",
        },
        {
          number: 25,
          title: "Create a 3D Card Flip Animation",
          description: "Add a 3D flip animation to cards when hovered or clicked.",
          difficulty: "Expert",
          difficultyScore: 4,
          level: "Expert",
          existingCode: `
            <div class="card">
              <div class="front">Front</div>
              <div class="back">Back</div>
            </div>
            <style>
              .card {
                /* Add 3D flip styles */
              }
            </style>
          `,
          testCases: [
            { condition: "Card should flip to reveal the back when interacted with." }
          ],
          solutionExplanation: "Use transform: rotateY and perspective.",
          language: "HTML/CSS",
        },
        {
          number: 26,
          title: "Build a Markdown Previewer",
          description: "Create a text editor that converts Markdown syntax to HTML preview.",
          difficulty: "Expert",
          difficultyScore: 5,
          level: "Expert",
          existingCode: `
            <textarea id="markdown-input"></textarea>
            <div id="html-preview"></div>
            <style>
              #markdown-input, #html-preview {
                /* Add styles for the editor and preview */
              }
            </style>
          `,
          testCases: [
            { condition: "The preview should update dynamically as users type Markdown." }
          ],
          solutionExplanation: "Use a library like marked.js for parsing Markdown.",
          language: "HTML/CSS",
        },
        {
          number: 27,
          title: "Create an Interactive Gantt Chart",
          description: "Build a Gantt chart for project management with adjustable task durations.",
          difficulty: "Expert",
          difficultyScore: 5,
          level: "Expert",
          existingCode: `
            <div class="gantt-chart">
              <div class="task" data-duration="5">Task 1</div>
              <div class="task" data-duration="3">Task 2</div>
            </div>
            <style>
              .gantt-chart {
                /* Add chart styles */
              }
            </style>
          `,
          testCases: [
            { condition: "Users should be able to resize tasks to adjust their durations." }
          ],
          solutionExplanation: "Use JavaScript to dynamically adjust task lengths based on user interaction.",
          language: "HTML/CSS",
        },
        {
          number: 28,
          title: "Add a Real-Time Stock Ticker",
          description: "Display live stock prices in a scrolling ticker.",
          difficulty: "Expert",
          difficultyScore: 5,
          level: "Expert",
          existingCode: `
            <div class="stock-ticker">
              <div class="stock">AAPL: $150</div>
              <div class="stock">GOOGL: $2800</div>
            </div>
            <style>
              .stock-ticker {
                /* Add ticker styles */
              }
            </style>
          `,
          testCases: [
            { condition: "Stock prices should update dynamically in real-time." }
          ],
          solutionExplanation: "Use WebSocket or APIs to fetch live stock data.",
          language: "HTML/CSS",
        },
        {
          number: 29,
          title: "Create a Virtual Keyboard",
          description: "Build an on-screen keyboard that inputs text into a text field.",
          difficulty: "Expert",
          difficultyScore: 5,
          level: "Expert",
          existingCode: `
            <div class="virtual-keyboard">
              <button>Q</button>
              <button>W</button>
              <button>E</button>
            </div>
            <input type="text" id="text-input">
            <style>
              .virtual-keyboard {
                /* Add keyboard styles */
              }
            </style>
          `,
          testCases: [
            { condition: "Clicking keys should type into the input field." }
          ],
          solutionExplanation: "Use JavaScript to capture button clicks and input text.",
          language: "HTML/CSS",
        },
        {
          number: 30,
          title: "Build a Password Strength Checker",
          description: "Validate the strength of a password based on complexity rules.",
          difficulty: "Expert",
          difficultyScore: 4,
          level: "Expert",
          existingCode: `
            <input type="password" id="password" placeholder="Enter password">
            <div id="strength-indicator">Strength: Weak</div>
            <style>
              #strength-indicator {
                /* Add strength indicator styles */
              }
            </style>
          `,
          testCases: [
            { condition: "The strength indicator should update based on password complexity." }
          ],
          solutionExplanation: "Use JavaScript to check password length, special characters, and uppercase letters.",
          language: "HTML/CSS",
        },
        
            {
              number: 31,
              title: "Create a Task Scheduler with Time Slots",
              description: "Design a task scheduler where users can assign tasks to specific time slots.",
              difficulty: "Expert",
              difficultyScore: 5,
              level: "Expert",
              existingCode: `
                <div class="scheduler">
                  <div class="time-slot">9:00 AM</div>
                  <div class="time-slot">10:00 AM</div>
                </div>
                <style>
                  .scheduler {
                    /* Add scheduler styles */
                  }
                </style>
              `,
              testCases: [
                { condition: "Tasks should be draggable and droppable into time slots." }
              ],
              solutionExplanation: "Use JavaScript drag-and-drop events.",
              language: "HTML/CSS",
            },
            {
              number: 32,
              title: "Add a Timeline with Animated Scroll",
              description: "Create a vertical timeline with animations triggered by scrolling.",
              difficulty: "Expert",
              difficultyScore: 4,
              level: "Expert",
              existingCode: `
                <div class="timeline">
                  <div class="event">Event 1</div>
                  <div class="event">Event 2</div>
                </div>
                <style>
                  .timeline {
                    /* Add timeline styles */
                  }
                </style>
              `,
              testCases: [
                { condition: "Events should fade or slide into view as they appear on screen." }
              ],
              solutionExplanation: "Use JavaScript scroll detection and intersectionObserver.",
              language: "HTML/CSS",
            },
            {
              number: 33,
              title: "Build a Dynamic Expense Tracker",
              description: "Create an expense tracker that calculates and categorizes expenses.",
              difficulty: "Expert",
              difficultyScore: 4,
              level: "Expert",
              existingCode: `
                <div class="expense-tracker">
                  <input type="number" placeholder="Enter amount">
                  <select>
                    <option>Food</option>
                    <option>Transport</option>
                  </select>
                  <button>Add</button>
                  <div class="expenses"></div>
                </div>
                <style>
                  .expense-tracker {
                    /* Add tracker styles */
                  }
                </style>
              `,
              testCases: [
                { condition: "Adding an expense should update the total and its category." }
              ],
              solutionExplanation: "Use JavaScript to manage data and update the UI.",
              language: "HTML/CSS",
            },
            {
              number: 34,
              title: "Create a CSS Grid Layout Builder",
              description: "Allow users to visually build and adjust grid layouts.",
              difficulty: "Expert",
              difficultyScore: 5,
              level: "Expert",
              existingCode: `
                <div class="grid-builder">
                  <div class="grid-item">1</div>
                  <div class="grid-item">2</div>
                </div>
                <style>
                  .grid-builder {
                    /* Add builder styles */
                  }
                </style>
              `,
              testCases: [
                { condition: "Users should be able to add rows/columns and adjust sizes." }
              ],
              solutionExplanation: "Use JavaScript to dynamically update the grid.",
              language: "HTML/CSS",
            },
            {
              number: 35,
              title: "Add a Real-Time Collaboration Tool",
              description: "Build a text editor where multiple users can collaborate in real time.",
              difficulty: "Expert",
              difficultyScore: 5,
              level: "Expert",
              existingCode: `
                <textarea id="collab-editor"></textarea>
                <style>
                  #collab-editor {
                    /* Add editor styles */
                  }
                </style>
              `,
              testCases: [
                { condition: "Updates should reflect in real time for all connected users." }
              ],
              solutionExplanation: "Use WebSockets or Firebase for synchronization.",
              language: "HTML/CSS",
            },
            {
              number: 36,
              title: "Create a Custom Audio Player",
              description: "Build an audio player with custom controls.",
              difficulty: "Expert",
              difficultyScore: 4,
              level: "Expert",
              existingCode: `
                <audio id="audio-player" src="song.mp3"></audio>
                <button class="play">Play</button>
                <button class="pause">Pause</button>
                <style>
                  #audio-player {
                    /* Add audio player styles */
                  }
                </style>
              `,
              testCases: [
                { condition: "Users should be able to play, pause, and adjust volume." }
              ],
              solutionExplanation: "Use JavaScript to control the <audio> element.",
              language: "HTML/CSS",
            },
            {
              number: 37,
              title: "Build a Custom Video Editor",
              description: "Create a tool to trim or adjust video playback.",
              difficulty: "Expert",
              difficultyScore: 5,
              level: "Expert",
              existingCode: `
                <video id="video-editor" src="video.mp4" controls></video>
                <input type="range" class="trim-slider">
                <style>
                  #video-editor {
                    /* Add video editor styles */
                  }
                </style>
              `,
              testCases: [
                { condition: "Users should be able to select start and end points for trimming." }
              ],
              solutionExplanation: "Use JavaScript to manipulate video playback ranges.",
              language: "HTML/CSS",
            },
            {
              number: 38,
              title: "Add a Custom Code Editor",
              description: "Create a live code editor with syntax highlighting.",
              difficulty: "Expert",
              difficultyScore: 5,
              level: "Expert",
              existingCode: `
                <textarea id="code-editor"></textarea>
                <div id="preview"></div>
                <style>
                  #code-editor {
                    /* Add editor styles */
                  }
                </style>
              `,
              testCases: [
                { condition: "Typed code should render live in the preview area." }
              ],
              solutionExplanation: "Use JavaScript for live updates and libraries like Prism.js for syntax highlighting.",
              language: "HTML/CSS",
            },
            {
              number: 39,
              title: "Create a Real-Time Polling System",
              description: "Build a polling system where users can vote and see live results.",
              difficulty: "Expert",
              difficultyScore: 5,
              level: "Expert",
              existingCode: `
                <div class="poll">
                  <button data-option="1">Option 1</button>
                  <button data-option="2">Option 2</button>
                  <div class="results"></div>
                </div>
                <style>
                  .poll {
                    /* Add poll styles */
                  }
                </style>
              `,
              testCases: [
                { condition: "Results should update dynamically as users vote." }
              ],
              solutionExplanation: "Use JavaScript and a backend API for real-time updates.",
              language: "HTML/CSS",
            },
            {
              number: 40,
              title: "Build a Custom Drag-and-Drop File Uploader",
              description: "Create a drag-and-drop area for uploading files.",
              difficulty: "Expert",
              difficultyScore: 4,
              level: "Expert",
              existingCode: `
                <div class="file-uploader">Drop files here</div>
                <style>
                  .file-uploader {
                    /* Add uploader styles */
                  }
                </style>
              `,
              testCases: [
                { condition: "Dropping files should display their names and upload them." }
              ],
              solutionExplanation: "Use JavaScript dragover and drop events.",
              language: "HTML/CSS",
            },
                {
                  number: 41,
                  title: "Build a Custom QR Code Generator",
                  description: "Create a tool where users can input text or a URL to generate a QR code.",
                  difficulty: "Expert",
                  difficultyScore: 4,
                  level: "Expert",
                  existingCode: `
                    <input type="text" id="qr-input" placeholder="Enter text or URL">
                    <button id="generate-qr">Generate QR Code</button>
                    <div id="qr-display"></div>
                    <style>
                      #qr-display {
                        /* Add QR display styles */
                      }
                    </style>
                  `,
                  testCases: [
                    { condition: "QR code should display based on the input text or URL." }
                  ],
                  solutionExplanation: "Use a QR code library like qrcode.js to generate the code.",
                  language: "HTML/CSS",
                },
                {
                  number: 42,
                  title: "Create a Photo Editor with Filters",
                  description: "Build a photo editor where users can apply filters like grayscale and sepia.",
                  difficulty: "Expert",
                  difficultyScore: 5,
                  level: "Expert",
                  existingCode: `
                    <input type="file" id="photo-upload">
                    <div class="photo-editor">
                      <img id="photo-preview" src="" alt="Photo Preview">
                      <button class="filter-btn" data-filter="grayscale">Grayscale</button>
                      <button class="filter-btn" data-filter="sepia">Sepia</button>
                    </div>
                    <style>
                      #photo-preview {
                        /* Add styles for photo preview */
                      }
                    </style>
                  `,
                  testCases: [
                    { condition: "Filters should apply to the uploaded image dynamically." }
                  ],
                  solutionExplanation: "Use CSS filters and JavaScript to apply styles.",
                  language: "HTML/CSS",
                },
                {
                  number: 43,
                  title: "Add a Speech-to-Text Feature",
                  description: "Create a text area that converts speech into text.",
                  difficulty: "Expert",
                  difficultyScore: 5,
                  level: "Expert",
                  existingCode: `
                    <textarea id="speech-to-text" placeholder="Speak to type..."></textarea>
                    <button id="start-recording">Start Recording</button>
                    <style>
                      #speech-to-text {
                        /* Add styles for text area */
                      }
                    </style>
                  `,
                  testCases: [
                    { condition: "Spoken words should appear as text in the text area." }
                  ],
                  solutionExplanation: "Use the Web Speech API to capture and convert speech to text.",
                  language: "HTML/CSS",
                },
                {
                  number: 44,
                  title: "Build a Custom Video Player with Chapters",
                  description: "Create a video player with chapter navigation.",
                  difficulty: "Expert",
                  difficultyScore: 4,
                  level: "Expert",
                  existingCode: `
                    <video id="custom-video" controls>
                      <source src="video.mp4" type="video/mp4">
                    </video>
                    <div class="chapters">
                      <button data-time="0">Intro</button>
                      <button data-time="60">Chapter 1</button>
                    </div>
                    <style>
                      #custom-video {
                        /* Add video player styles */
                      }
                    </style>
                  `,
                  testCases: [
                    { condition: "Clicking a chapter should jump to the corresponding timestamp." }
                  ],
                  solutionExplanation: "Use JavaScript to control video playback based on chapter selection.",
                  language: "HTML/CSS",
                },
                {
                  number: 45,
                  title: "Add a Live Character Counter",
                  description: "Create a text input that shows a live character count.",
                  difficulty: "Expert",
                  difficultyScore: 3,
                  level: "Expert",
                  existingCode: `
                    <textarea id="text-input" maxlength="200" placeholder="Type here..."></textarea>
                    <div id="char-counter">0/200</div>
                    <style>
                      #char-counter {
                        /* Add counter styles */
                      }
                    </style>
                  `,
                  testCases: [
                    { condition: "The counter should update as the user types." }
                  ],
                  solutionExplanation: "Use JavaScript to track and display the length of the input.",
                  language: "HTML/CSS",
                },
                {
                  number: 46,
                  title: "Build a Custom Audio Visualizer",
                  description: "Create a visualizer that displays audio frequencies as bars.",
                  difficulty: "Expert",
                  difficultyScore: 5,
                  level: "Expert",
                  existingCode: `
                    <audio id="audio-player" controls>
                      <source src="song.mp3" type="audio/mp3">
                    </audio>
                    <canvas id="visualizer"></canvas>
                    <style>
                      #visualizer {
                        /* Add canvas styles */
                      }
                    </style>
                  `,
                  testCases: [
                    { condition: "Bars should move dynamically based on the audio frequency." }
                  ],
                  solutionExplanation: "Use the Web Audio API and canvas to render visualizations.",
                  language: "HTML/CSS",
                },
                {
                  number: 47,
                  title: "Create a Scroll-Snapping Section",
                  description: "Design a page where sections snap into place during scrolling.",
                  difficulty: "Expert",
                  difficultyScore: 4,
                  level: "Expert",
                  existingCode: `
                    <div class="scroll-container">
                      <section class="snap-section">Section 1</section>
                      <section class="snap-section">Section 2</section>
                    </div>
                    <style>
                      .scroll-container {
                        /* Add scroll-snapping styles */
                      }
                    </style>
                  `,
                  testCases: [
                    { condition: "Scrolling should snap to the nearest section automatically." }
                  ],
                  solutionExplanation: "Use scroll-snap-type and scroll-snap-align.",
                  language: "HTML/CSS",
                },
                {
                  number: 48,
                  title: "Build a Dynamic Pie Chart",
                  description: "Create a pie chart that updates based on user input.",
                  difficulty: "Expert",
                  difficultyScore: 4,
                  level: "Expert",
                  existingCode: `
                    <input type="number" id="data-input" placeholder="Enter value">
                    <canvas id="pie-chart"></canvas>
                    <style>
                      #pie-chart {
                        /* Add pie chart styles */
                      }
                    </style>
                  `,
                  testCases: [
                    { condition: "The pie chart should adjust dynamically when new data is added." }
                  ],
                  solutionExplanation: "Use a library like Chart.js for rendering the chart.",
                  language: "HTML/CSS",
                },
                {
                  number: 49,
                  title: "Create a Dynamic Multi-Language Switcher",
                  description: "Build a language switcher that updates the text content dynamically.",
                  difficulty: "Expert",
                  difficultyScore: 4,
                  level: "Expert",
                  existingCode: `
                    <select id="language-switcher">
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                    </select>
                    <div id="content">Hello, World!</div>
                    <style>
                      #content {
                        /* Add content styles */
                      }
                    </style>
                  `,
                  testCases: [
                    { condition: "Content should update based on the selected language." }
                  ],
                  solutionExplanation: "Use JavaScript to fetch translations from a data source.",
                  language: "HTML/CSS",
                },
                {
                  number: 50,
                  title: "Add Real-Time Form Validation",
                  description: "Validate form fields dynamically as the user types.",
                  difficulty: "Expert",
                  difficultyScore: 4,
                  level: "Expert",
                  existingCode: `
                    <form id="registration-form">
                      <input type="email" id="email" placeholder="Enter email">
                      <span id="email-error"></span>
                      <button type="submit">Submit</button>
                    </form>
                    <style>
                      #email-error {
                        /* Add error message styles */
                      }
                    </style>
                  `,
                  testCases: [
                    { condition: "Error messages should display immediately when input is invalid." }
                  ],
                  solutionExplanation: "Use JavaScript input events to validate and show messages dynamically.",
                  language: "HTML/CSS",
                },
               
                    {
                      number: 51,
                      title: "Build a Custom Multi-Select Dropdown",
                      description: "Create a dropdown where users can select multiple options with tags.",
                      difficulty: "Expert",
                      difficultyScore: 4,
                      level: "Expert",
                      existingCode: `
                        <div class="multi-select-dropdown">
                          <input type="text" id="multi-select-input" placeholder="Select options...">
                          <div class="dropdown-options">
                            <div class="option" data-value="option1">Option 1</div>
                            <div class="option" data-value="option2">Option 2</div>
                          </div>
                          <div class="selected-tags"></div>
                        </div>
                        <style>
                          .multi-select-dropdown {
                            /* Add dropdown styles */
                          }
                        </style>
                      `,
                      testCases: [
                        { condition: "Selected options should appear as removable tags." }
                      ],
                      solutionExplanation: "Use JavaScript to handle option selection and dynamic tag rendering.",
                      language: "HTML/CSS",
                    },
                    {
                      number: 52,
                      title: "Add a Real-Time Currency Converter",
                      description: "Build a tool to convert currencies dynamically using live exchange rates.",
                      difficulty: "Expert",
                      difficultyScore: 4,
                      level: "Expert",
                      existingCode: `
                        <div class="currency-converter">
                          <input type="number" id="amount" placeholder="Enter amount">
                          <select id="from-currency">
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                          </select>
                          <select id="to-currency">
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                          </select>
                          <button id="convert">Convert</button>
                          <div id="converted-amount"></div>
                        </div>
                        <style>
                          .currency-converter {
                            /* Add converter styles */
                          }
                        </style>
                      `,
                      testCases: [
                        { condition: "Conversion results should update dynamically based on live rates." }
                      ],
                      solutionExplanation: "Use an API like OpenExchangeRates to fetch exchange data.",
                      language: "HTML/CSS",
                    },
                    {
                      number: 53,
                      title: "Create a Dynamic Org Chart",
                      description: "Build an organizational chart with expandable and collapsible nodes.",
                      difficulty: "Expert",
                      difficultyScore: 5,
                      level: "Expert",
                      existingCode: `
                        <div class="org-chart">
                          <div class="node" data-node="ceo">CEO</div>
                          <div class="node" data-node="manager">Manager</div>
                        </div>
                        <style>
                          .org-chart {
                            /* Add chart styles */
                          }
                        </style>
                      `,
                      testCases: [
                        { condition: "Nodes should expand/collapse to reveal/hide sub-nodes." }
                      ],
                      solutionExplanation: "Use JavaScript to toggle visibility of child nodes.",
                      language: "HTML/CSS",
                    },
                    {
                      number: 54,
                      title: "Add Real-Time Stock Market Data Visualization",
                      description: "Display a real-time stock market chart with live updates.",
                      difficulty: "Expert",
                      difficultyScore: 5,
                      level: "Expert",
                      existingCode: `
                        <div class="stock-chart">
                          <canvas id="stock-canvas"></canvas>
                        </div>
                        <style>
                          .stock-chart {
                            /* Add chart styles */
                          }
                        </style>
                      `,
                      testCases: [
                        { condition: "Chart should dynamically update based on live stock market data." }
                      ],
                      solutionExplanation: "Use a charting library like Chart.js and APIs like Alpha Vantage.",
                      language: "HTML/CSS",
                    },
                    {
                      number: 55,
                      title: "Build a Custom Countdown Timer",
                      description: "Create a countdown timer for events that updates in real time.",
                      difficulty: "Expert",
                      difficultyScore: 4,
                      level: "Expert",
                      existingCode: `
                        <div class="countdown-timer">
                          <span id="days">00</span>d
                          <span id="hours">00</span>h
                          <span id="minutes">00</span>m
                          <span id="seconds">00</span>s
                        </div>
                        <style>
                          .countdown-timer {
                            /* Add timer styles */
                          }
                        </style>
                      `,
                      testCases: [
                        { condition: "Timer should count down to the target date and time." }
                      ],
                      solutionExplanation: "Use JavaScript setInterval to update the countdown every second.",
                      language: "HTML/CSS",
                    },
                    {
                      number: 56,
                      title: "Add a Custom Search Autocomplete",
                      description: "Build a search bar with dynamic autocomplete suggestions.",
                      difficulty: "Expert",
                      difficultyScore: 4,
                      level: "Expert",
                      existingCode: `
                        <input type="text" id="search-bar" placeholder="Search...">
                        <div class="autocomplete-suggestions"></div>
                        <style>
                          .autocomplete-suggestions {
                            /* Add autocomplete styles */
                          }
                        </style>
                      `,
                      testCases: [
                        { condition: "Suggestions should display dynamically as the user types." }
                      ],
                      solutionExplanation: "Use JavaScript to fetch and display matching suggestions.",
                      language: "HTML/CSS",
                    },
                    {
                      number: 57,
                      title: "Create a Dynamic Table with Inline Editing",
                      description: "Build a table where users can edit rows directly.",
                      difficulty: "Expert",
                      difficultyScore: 4,
                      level: "Expert",
                      existingCode: `
                        <table class="editable-table">
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Age</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td contenteditable="true">John</td>
                              <td contenteditable="true">25</td>
                            </tr>
                          </tbody>
                        </table>
                        <style>
                          .editable-table {
                            /* Add table styles */
                          }
                        </style>
                      `,
                      testCases: [
                        { condition: "Users should be able to edit rows and save changes dynamically." }
                      ],
                      solutionExplanation: "Use JavaScript to detect and save changes.",
                      language: "HTML/CSS",
                    },
                    {
                      number: 58,
                      title: "Build a Custom Video Streaming App",
                      description: "Create a video streaming app with playback controls and a playlist.",
                      difficulty: "Expert",
                      difficultyScore: 5,
                      level: "Expert",
                      existingCode: `
                        <div class="video-player">
                          <video id="video" controls>
                            <source src="video1.mp4" type="video/mp4">
                          </video>
                          <div class="playlist">
                            <button data-src="video1.mp4">Video 1</button>
                            <button data-src="video2.mp4">Video 2</button>
                          </div>
                        </div>
                        <style>
                          .video-player {
                            /* Add player styles */
                          }
                        </style>
                      `,
                      testCases: [
                        { condition: "Clicking a playlist item should update the video source." }
                      ],
                      solutionExplanation: "Use JavaScript to switch video sources dynamically.",
                      language: "HTML/CSS",
                    },
                    {
                      number: 59,
                      title: "Create a Real-Time Collaborative Whiteboard",
                      description: "Build a whiteboard where multiple users can draw and collaborate in real-time.",
                      difficulty: "Expert",
                      difficultyScore: 5,
                      level: "Expert",
                      existingCode: `
                        <canvas id="whiteboard"></canvas>
                        <style>
                          #whiteboard {
                            /* Add whiteboard styles */
                          }
                        </style>
                      `,
                      testCases: [
                        { condition: "Drawings should appear in real-time for all connected users." }
                      ],
                      solutionExplanation: "Use WebSocket or Firebase for real-time data sharing.",
                      language: "HTML/CSS",
                    },
                    {
                      number: 60,
                      title: "Build a Geolocation-Based Weather App",
                      description: "Create a weather app that fetches data based on the user's location.",
                      difficulty: "Expert",
                      difficultyScore: 4,
                      level: "Expert",
                      existingCode: `
                        <div class="weather-app">
                          <h2>Weather</h2>
                          <p id="weather-data">Fetching weather...</p>
                        </div>
                        <style>
                          .weather-app {
                            /* Add weather app styles */
                          }
                        </style>
                      `,
                      testCases: [
                        { condition: "Weather data should display based on the user's current location." }
                      ],
                      solutionExplanation: "Use the Geolocation API and a weather API like OpenWeather.",
                      language: "HTML/CSS",
                    },
                   
                        {
                          number: 61,
                          title: "Build a Dynamic News Feed",
                          description: "Create a live news feed that updates in real-time.",
                          difficulty: "Expert",
                          difficultyScore: 5,
                          level: "Expert",
                          existingCode: `
                            <div class="news-feed">
                              <h2>Latest News</h2>
                              <ul id="news-list">
                                <li>News item 1</li>
                                <li>News item 2</li>
                              </ul>
                            </div>
                            <style>
                              .news-feed {
                                /* Add news feed styles */
                              }
                            </style>
                          `,
                          testCases: [
                            { condition: "New articles should load dynamically at regular intervals." }
                          ],
                          solutionExplanation: "Use an API or WebSocket to fetch and append new articles.",
                          language: "HTML/CSS",
                        },
                        {
                          number: 62,
                          title: "Create a Custom Browser Notifications System",
                          description: "Send browser notifications based on user actions.",
                          difficulty: "Expert",
                          difficultyScore: 4,
                          level: "Expert",
                          existingCode: `
                            <button id="notify-btn">Notify Me</button>
                            <style>
                              #notify-btn {
                                /* Add button styles */
                              }
                            </style>
                          `,
                          testCases: [
                            { condition: "Clicking the button should trigger a browser notification." }
                          ],
                          solutionExplanation: "Use the Notifications API to send desktop notifications.",
                          language: "HTML/CSS",
                        },
                        {
                          number: 63,
                          title: "Build a Voice-Controlled App",
                          description: "Create an app that responds to voice commands.",
                          difficulty: "Expert",
                          difficultyScore: 5,
                          level: "Expert",
                          existingCode: `
                            <button id="start-voice">Start Voice Recognition</button>
                            <div id="voice-output">Waiting for input...</div>
                            <style>
                              #voice-output {
                                /* Add output styles */
                              }
                            </style>
                          `,
                          testCases: [
                            { condition: "The app should display and act on recognized commands." }
                          ],
                          solutionExplanation: "Use the Web Speech API for voice recognition and commands.",
                          language: "HTML/CSS",
                        },
                        {
                          number: 64,
                          title: "Add a Custom Color Picker",
                          description: "Build a color picker that applies the selected color to an element.",
                          difficulty: "Expert",
                          difficultyScore: 3,
                          level: "Expert",
                          existingCode: `
                            <input type="color" id="color-picker">
                            <div class="color-box"></div>
                            <style>
                              .color-box {
                                width: 100px;
                                height: 100px;
                                background-color: #ffffff;
                              }
                            </style>
                          `,
                          testCases: [
                            { condition: "The box should change to the selected color dynamically." }
                          ],
                          solutionExplanation: "Use JavaScript to update the background-color property.",
                          language: "HTML/CSS",
                        },
                        {
                          number: 65,
                          title: "Build a Live Sports Score Tracker",
                          description: "Create a tracker that displays live scores of a sports match.",
                          difficulty: "Expert",
                          difficultyScore: 5,
                          level: "Expert",
                          existingCode: `
                            <div class="score-tracker">
                              <h2>Live Scores</h2>
                              <div id="match-score">Team A: 0 - Team B: 0</div>
                            </div>
                            <style>
                              .score-tracker {
                                /* Add tracker styles */
                              }
                            </style>
                          `,
                          testCases: [
                            { condition: "Scores should update dynamically in real-time." }
                          ],
                          solutionExplanation: "Use an API like ESPN or SportsDB to fetch live scores.",
                          language: "HTML/CSS",
                        },
                        {
                          number: 66,
                          title: "Create a Dynamic Polling Dashboard",
                          description: "Build a dashboard that displays live polling results with graphs.",
                          difficulty: "Expert",
                          difficultyScore: 4,
                          level: "Expert",
                          existingCode: `
                            <div class="polling-dashboard">
                              <h2>Live Poll Results</h2>
                              <canvas id="poll-chart"></canvas>
                            </div>
                            <style>
                              .polling-dashboard {
                                /* Add dashboard styles */
                              }
                            </style>
                          `,
                          testCases: [
                            { condition: "The chart should update dynamically as users vote." }
                          ],
                          solutionExplanation: "Use Chart.js for the chart and a backend for real-time updates.",
                          language: "HTML/CSS",
                        },
                        {
                          number: 67,
                          title: "Add a Custom 404 Error Page",
                          description: "Design a creative 404 error page with animations.",
                          difficulty: "Expert",
                          difficultyScore: 3,
                          level: "Expert",
                          existingCode: `
                            <div class="error-page">
                              <h1>404</h1>
                              <p>Oops! Page not found.</p>
                            </div>
                            <style>
                              .error-page {
                                /* Add 404 page styles */
                              }
                            </style>
                          `,
                          testCases: [
                            { condition: "The page should include animations and a 'Go Home' button." }
                          ],
                          solutionExplanation: "Use CSS animations and a clickable link to redirect to the homepage.",
                          language: "HTML/CSS",
                        },
                        {
                          number: 68,
                          title: "Build a Real-Time Collaborative Text Editor",
                          description: "Create a text editor where multiple users can edit a document simultaneously.",
                          difficulty: "Expert",
                          difficultyScore: 5,
                          level: "Expert",
                          existingCode: `
                            <textarea id="collab-editor" placeholder="Start typing..."></textarea>
                            <style>
                              #collab-editor {
                                /* Add editor styles */
                              }
                            </style>
                          `,
                          testCases: [
                            { condition: "Changes made by one user should appear for all other users in real-time." }
                          ],
                          solutionExplanation: "Use WebSockets or Firebase for synchronization.",
                          language: "HTML/CSS",
                        },
                        {
                          number: 69,
                          title: "Add a Dynamic Weather Map",
                          description: "Create a map that shows live weather data for different regions.",
                          difficulty: "Expert",
                          difficultyScore: 5,
                          level: "Expert",
                          existingCode: `
                            <div id="weather-map"></div>
                            <style>
                              #weather-map {
                                height: 500px;
                                width: 100%;
                              }
                            </style>
                          `,
                          testCases: [
                            { condition: "Clicking on a region should display its current weather." }
                          ],
                          solutionExplanation: "Use a library like Leaflet.js and OpenWeatherMap API.",
                          language: "HTML/CSS",
                        },
                        {
                          number: 70,
                          title: "Build a Real-Time Chatbot with AI Integration",
                          description: "Create a chatbot that answers user queries in real-time.",
                          difficulty: "Expert",
                          difficultyScore: 5,
                          level: "Expert",
                          existingCode: `
                            <div class="chatbot">
                              <input type="text" id="user-input" placeholder="Type your message...">
                              <button id="send">Send</button>
                              <div id="chat-log"></div>
                            </div>
                            <style>
                              .chatbot {
                                /* Add chatbot styles */
                              }
                            </style>
                          `,
                          testCases: [
                            { condition: "The chatbot should respond to user inputs dynamically." }
                          ],
                          solutionExplanation: "Use an AI API like OpenAI's GPT or Dialogflow for responses.",
                          language: "HTML/CSS",
                        },
                   
                   
                              {
                                number: 71,
                                title: "Create a Custom Video Conferencing App",
                                description: "Build a video conferencing app where users can join and communicate in real-time.",
                                difficulty: "Expert",
                                difficultyScore: 5,
                                level: "Expert",
                                existingCode: `
                                  <div class="video-conference">
                                    <video id="local-video" autoplay muted></video>
                                    <div id="remote-videos"></div>
                                    <button id="join-call">Join Call</button>
                                  </div>
                                  <style>
                                    .video-conference {
                                      /* Add video call styles */
                                    }
                                  </style>
                                `,
                                testCases: [
                                  { condition: "Users should be able to join a call and see other participants." }
                                ],
                                solutionExplanation: "Use WebRTC for video and audio communication.",
                                language: "HTML/CSS",
                              },
                              {
                                number: 72,
                                title: "Add a Real-Time Analytics Dashboard",
                                description: "Create a dashboard displaying live analytics data.",
                                difficulty: "Expert",
                                difficultyScore: 5,
                                level: "Expert",
                                existingCode: `
                                  <div class="analytics-dashboard">
                                    <h2>Real-Time Analytics</h2>
                                    <canvas id="analytics-chart"></canvas>
                                  </div>
                                  <style>
                                    .analytics-dashboard {
                                      /* Add dashboard styles */
                                    }
                                  </style>
                                `,
                                testCases: [
                                  { condition: "Analytics charts should update dynamically with real-time data." }
                                ],
                                solutionExplanation: "Use Chart.js and a backend API for live data.",
                                language: "HTML/CSS",
                              },
                              {
                                number: 73,
                                title: "Build a Dynamic Timeline with Sorting",
                                description: "Create a timeline where users can sort events by date or relevance.",
                                difficulty: "Expert",
                                difficultyScore: 4,
                                level: "Expert",
                                existingCode: `
                                  <div class="timeline">
                                    <div class="event" data-date="2023-10-10">Event 1</div>
                                    <div class="event" data-date="2023-09-01">Event 2</div>
                                  </div>
                                  <button id="sort-date">Sort by Date</button>
                                  <button id="sort-relevance">Sort by Relevance</button>
                                  <style>
                                    .timeline {
                                      /* Add timeline styles */
                                    }
                                  </style>
                                `,
                                testCases: [
                                  { condition: "Events should reorder based on the selected sorting method." }
                                ],
                                solutionExplanation: "Use JavaScript to dynamically sort and rearrange events.",
                                language: "HTML/CSS",
                              },
                              {
                                number: 74,
                                title: "Create a Dynamic Progress Tracker",
                                description: "Build a tracker that shows progress across multiple steps in a process.",
                                difficulty: "Expert",
                                difficultyScore: 3,
                                level: "Expert",
                                existingCode: `
                                  <div class="progress-tracker">
                                    <div class="step active">Step 1</div>
                                    <div class="step">Step 2</div>
                                    <div class="step">Step 3</div>
                                  </div>
                                  <style>
                                    .progress-tracker {
                                      /* Add tracker styles */
                                    }
                                  </style>
                                `,
                                testCases: [
                                  { condition: "The tracker should update as the user completes steps." }
                                ],
                                solutionExplanation: "Use JavaScript to toggle active classes dynamically.",
                                language: "HTML/CSS",
                              },
                              {
                                number: 75,
                                title: "Build a Real-Time Voting System",
                                description: "Create a voting system where users can vote and see results in real time.",
                                difficulty: "Expert",
                                difficultyScore: 4,
                                level: "Expert",
                                existingCode: `
                                  <div class="voting-system">
                                    <button data-option="1">Option 1</button>
                                    <button data-option="2">Option 2</button>
                                    <div class="results">
                                      <span>Option 1: <span id="votes-1">0</span></span>
                                      <span>Option 2: <span id="votes-2">0</span></span>
                                    </div>
                                  </div>
                                  <style>
                                    .voting-system {
                                      /* Add voting styles */
                                    }
                                  </style>
                                `,
                                testCases: [
                                  { condition: "Votes should update dynamically in the results section." }
                                ],
                                solutionExplanation: "Use WebSocket or a backend API for real-time updates.",
                                language: "HTML/CSS",
                              },
                              {
                                number: 76,
                                title: "Add a Custom Image Cropper",
                                description: "Build an image cropping tool where users can select and crop specific regions.",
                                difficulty: "Expert",
                                difficultyScore: 4,
                                level: "Expert",
                                existingCode: `
                                  <div class="image-cropper">
                                    <img src="image.jpg" id="crop-image">
                                    <button id="crop-button">Crop</button>
                                  </div>
                                  <style>
                                    .image-cropper {
                                      /* Add cropper styles */
                                    }
                                  </style>
                                `,
                                testCases: [
                                  { condition: "Cropped images should display separately after cropping." }
                                ],
                                solutionExplanation: "Use a library like Cropper.js or JavaScript Canvas API.",
                                language: "HTML/CSS",
                              },
                              {
                                number: 77,
                                title: "Create a Custom Loading Screen",
                                description: "Add a dynamic loading screen with animations for page load.",
                                difficulty: "Expert",
                                difficultyScore: 3,
                                level: "Expert",
                                existingCode: `
                                  <div class="loading-screen">
                                    <div class="spinner"></div>
                                  </div>
                                  <style>
                                    .loading-screen {
                                      /* Add loading screen styles */
                                    }
                                    .spinner {
                                      /* Add spinner animation */
                                    }
                                  </style>
                                `,
                                testCases: [
                                  { condition: "The loading screen should disappear once the page fully loads." }
                                ],
                                solutionExplanation: "Use JavaScript to detect page load and hide the loader.",
                                language: "HTML/CSS",
                              },
                              {
                                number: 78,
                                title: "Build a Real-Time Flight Tracker",
                                description: "Create a tracker that shows real-time flight information on a map.",
                                difficulty: "Expert",
                                difficultyScore: 5,
                                level: "Expert",
                                existingCode: `
                                  <div id="flight-map"></div>
                                  <style>
                                    #flight-map {
                                      height: 500px;
                                      width: 100%;
                                    }
                                  </style>
                                `,
                                testCases: [
                                  { condition: "The map should display live flight paths and data." }
                                ],
                                solutionExplanation: "Use an API like Flightradar24 and Leaflet.js for mapping.",
                                language: "HTML/CSS",
                              },
                              {
                                number: 79,
                                title: "Add a Gamified Progress System",
                                description: "Build a progress system with badges and achievements for users.",
                                difficulty: "Expert",
                                difficultyScore: 4,
                                level: "Expert",
                                existingCode: `
                                  <div class="gamified-progress">
                                    <div class="achievement">Achievements: <span id="achievements">0</span></div>
                                    <div class="badge">Badges: <span id="badges">0</span></div>
                                  </div>
                                  <style>
                                    .gamified-progress {
                                      /* Add gamified styles */
                                    }
                                  </style>
                                `,
                                testCases: [
                                  { condition: "Achievements and badges should unlock dynamically as users progress." }
                                ],
                                solutionExplanation: "Use JavaScript to track progress and unlock levels.",
                                language: "HTML/CSS",
                              },
                              {
                                number: 80,
                                title: "Build a Custom AI-Powered Recommendation System",
                                description: "Create a system that recommends content based on user activity.",
                                difficulty: "Expert",
                                difficultyScore: 5,
                                level: "Expert",
                                existingCode: `
                                  <div class="recommendation-system">
                                    <h2>Recommended for You</h2>
                                    <ul id="recommendations">
                                      <li>Loading recommendations...</li>
                                    </ul>
                                  </div>
                                  <style>
                                    .recommendation-system {
                                      /* Add recommendation styles */
                                    }
                                  </style>
                                `,
                                testCases: [
                                  { condition: "Recommendations should update dynamically based on user actions." }
                                ],
                                solutionExplanation: "Use an AI API (e.g., OpenAI) or a recommendation algorithm.",
                                language: "HTML/CSS",
                              },
                                {
                                  number: 81,
                                  title: "Create a Custom Graph Drawing Tool",
                                  description: "Build a tool where users can create nodes and connect them with edges.",
                                  difficulty: "Expert",
                                  difficultyScore: 5,
                                  level: "Expert",
                                  existingCode: `
                                    <canvas id="graph-canvas"></canvas>
                                    <style>
                                      #graph-canvas {
                                        width: 100%;
                                        height: 500px;
                                        border: 1px solid #ccc;
                                      }
                                    </style>
                                  `,
                                  testCases: [
                                    { condition: "Users should be able to draw nodes and connect them interactively." }
                                  ],
                                  solutionExplanation: "Use the `canvas` element and JavaScript for drawing.",
                                  language: "HTML/CSS",
                                },
                                {
                                  number: 82,
                                  title: "Build a Real-Time Crypto Price Tracker",
                                  description: "Create a dashboard to display live cryptocurrency prices.",
                                  difficulty: "Expert",
                                  difficultyScore: 5,
                                  level: "Expert",
                                  existingCode: `
                                    <div class="crypto-tracker">
                                      <h2>Cryptocurrency Prices</h2>
                                      <div id="crypto-prices">
                                        <p>Loading prices...</p>
                                      </div>
                                    </div>
                                    <style>
                                      .crypto-tracker {
                                        /* Add tracker styles */
                                      }
                                    </style>
                                  `,
                                  testCases: [
                                    { condition: "Prices should update in real-time using live data." }
                                  ],
                                  solutionExplanation: "Use a cryptocurrency API like CoinGecko or Binance.",
                                  language: "HTML/CSS",
                                },
                                {
                                  number: 83,
                                  title: "Add a Dynamic Filters Interface",
                                  description: "Build a system where users can dynamically filter products by categories, price range, and ratings.",
                                  difficulty: "Expert",
                                  difficultyScore: 4,
                                  level: "Expert",
                                  existingCode: `
                                    <div class="filter-interface">
                                      <select id="category-filter">
                                        <option value="all">All Categories</option>
                                        <option value="electronics">Electronics</option>
                                      </select>
                                      <input type="range" id="price-range" min="0" max="1000" value="500">
                                      <button id="apply-filters">Apply Filters</button>
                                      <div id="filtered-products"></div>
                                    </div>
                                    <style>
                                      .filter-interface {
                                        /* Add filter styles */
                                      }
                                    </style>
                                  `,
                                  testCases: [
                                    { condition: "Filtered products should display based on selected criteria." }
                                  ],
                                  solutionExplanation: "Use JavaScript to filter and display products dynamically.",
                                  language: "HTML/CSS",
                                },
                                {
                                  number: 84,
                                  title: "Create a Custom Heatmap Generator",
                                  description: "Build a heatmap to visualize data intensity over a geographic area.",
                                  difficulty: "Expert",
                                  difficultyScore: 5,
                                  level: "Expert",
                                  existingCode: `
                                    <div id="heatmap"></div>
                                    <style>
                                      #heatmap {
                                        height: 500px;
                                        width: 100%;
                                      }
                                    </style>
                                  `,
                                  testCases: [
                                    { condition: "Heatmap should display color gradients based on data intensity." }
                                  ],
                                  solutionExplanation: "Use a library like Leaflet.js or Google Maps API with heatmap overlays.",
                                  language: "HTML/CSS",
                                },
                                {
                                  number: 85,
                                  title: "Build a Dynamic Text Summarizer",
                                  description: "Create a tool that summarizes a large block of text dynamically.",
                                  difficulty: "Expert",
                                  difficultyScore: 5,
                                  level: "Expert",
                                  existingCode: `
                                    <textarea id="text-input" placeholder="Paste your text here..."></textarea>
                                    <button id="summarize">Summarize</button>
                                    <div id="summary-output"></div>
                                    <style>
                                      #summary-output {
                                        /* Add summary output styles */
                                      }
                                    </style>
                                  `,
                                  testCases: [
                                    { condition: "The summarized text should display below the input." }
                                  ],
                                  solutionExplanation: "Use an AI text summarization API like OpenAI or Hugging Face.",
                                  language: "HTML/CSS",
                                },
                                {
                                  number: 86,
                                  title: "Add a Custom Interactive Calendar",
                                  description: "Build a calendar where users can add and view events.",
                                  difficulty: "Expert",
                                  difficultyScore: 4,
                                  level: "Expert",
                                  existingCode: `
                                    <div class="calendar"></div>
                                    <style>
                                      .calendar {
                                        /* Add calendar styles */
                                      }
                                    </style>
                                  `,
                                  testCases: [
                                    { condition: "Clicking on a date should allow users to add an event." }
                                  ],
                                  solutionExplanation: "Use JavaScript to manage dates and events dynamically.",
                                  language: "HTML/CSS",
                                },
                                {
                                  number: 87,
                                  title: "Create a Multi-Language Audio Translator",
                                  description: "Build a tool where users can upload audio and get translated text.",
                                  difficulty: "Expert",
                                  difficultyScore: 5,
                                  level: "Expert",
                                  existingCode: `
                                    <input type="file" id="audio-upload" accept="audio/*">
                                    <button id="translate-audio">Translate</button>
                                    <div id="translation-output"></div>
                                    <style>
                                      #translation-output {
                                        /* Add output styles */
                                      }
                                    </style>
                                  `,
                                  testCases: [
                                    { condition: "Uploaded audio should display translated text dynamically." }
                                  ],
                                  solutionExplanation: "Use an API like Google Translate or DeepL for language translation.",
                                  language: "HTML/CSS",
                                },
                                {
                                  number: 88,
                                  title: "Add a Real-Time Collaborative Kanban Board",
                                  description: "Create a Kanban board where multiple users can collaborate in real-time.",
                                  difficulty: "Expert",
                                  difficultyScore: 5,
                                  level: "Expert",
                                  existingCode: `
                                    <div class="kanban-board">
                                      <div class="column" id="todo">To Do</div>
                                      <div class="column" id="doing">Doing</div>
                                      <div class="column" id="done">Done</div>
                                    </div>
                                    <style>
                                      .kanban-board {
                                        /* Add Kanban styles */
                                      }
                                    </style>
                                  `,
                                  testCases: [
                                    { condition: "Updates made by one user should reflect for all other collaborators in real-time." }
                                  ],
                                  solutionExplanation: "Use WebSockets or Firebase for real-time data synchronization.",
                                  language: "HTML/CSS",
                                },
                                {
                                  number: 89,
                                  title: "Build a Custom AI Content Generator",
                                  description: "Create a tool where users can generate content by providing prompts.",
                                  difficulty: "Expert",
                                  difficultyScore: 5,
                                  level: "Expert",
                                  existingCode: `
                                    <textarea id="content-prompt" placeholder="Enter your prompt here..."></textarea>
                                    <button id="generate-content">Generate</button>
                                    <div id="content-output"></div>
                                    <style>
                                      #content-output {
                                        /* Add content output styles */
                                      }
                                    </style>
                                  `,
                                  testCases: [
                                    { condition: "Generated content should display dynamically based on the user prompt." }
                                  ],
                                  solutionExplanation: "Use an AI API like OpenAI's GPT for content generation.",
                                  language: "HTML/CSS",
                                },
                                {
                                  number: 90,
                                  title: "Add a Dynamic Dark Mode Switcher",
                                  description: "Create a system-wide dark mode toggle with custom styles.",
                                  difficulty: "Expert",
                                  difficultyScore: 4,
                                  level: "Expert",
                                  existingCode: `
                                    <button id="toggle-dark-mode">Toggle Dark Mode</button>
                                    <div class="content">
                                      <p>Here is some content...</p>
                                    </div>
                                    <style>
                                      body.dark-mode {
                                        background-color: #121212;
                                        color: #ffffff;
                                      }
                                    </style>
                                  `,
                                  testCases: [
                                    { condition: "Dark mode styles should apply across the app when toggled." }
                                  ],
                                  solutionExplanation: "Use JavaScript to toggle a `dark-mode` class on the body.",
                                  language: "HTML/CSS",
                                },
                                  {
                                    number: 91,
                                    title: "Create a Responsive Image Slider",
                                    description: "Build an image slider with navigation arrows and dots for navigation.",
                                    difficulty: "Expert",
                                    difficultyScore: 4,
                                    level: "Expert",
                                    existingCode: `
                                      <div class="slider">
                                        <div class="slides">
                                          <img src="image1.jpg" alt="Slide 1">
                                          <img src="image2.jpg" alt="Slide 2">
                                        </div>
                                        <button class="prev">❮</button>
                                        <button class="next">❯</button>
                                      </div>
                                      <style>
                                        .slider {
                                          width: 80%;
                                          overflow: hidden;
                                          position: relative;
                                          margin: auto;
                                        }
                                        .slides {
                                          display: flex;
                                          transition: transform 0.5s ease-in-out;
                                        }
                                        img {
                                          width: 100%;
                                          flex-shrink: 0;
                                        }
                                        .prev, .next {
                                          position: absolute;
                                          top: 50%;
                                          transform: translateY(-50%);
                                          background: rgba(0, 0, 0, 0.5);
                                          color: #fff;
                                          border: none;
                                          cursor: pointer;
                                        }
                                        .prev { left: 10px; }
                                        .next { right: 10px; }
                                      </style>
                                    `,
                                    testCases: [
                                      { condition: "Clicking the next or previous buttons should navigate the slides." }
                                    ],
                                    solutionExplanation: "Use JavaScript to adjust the transform property of .slides.",
                                    language: "HTML/CSS",
                                  },
                                  {
                                    number: 92,
                                    title: "Build a Sticky Navigation Bar",
                                    description: "Create a navigation bar that sticks to the top of the page on scroll.",
                                    difficulty: "Expert",
                                    difficultyScore: 4,
                                    level: "Expert",
                                    existingCode: `
                                      <header class="navbar">Sticky Navbar</header>
                                      <main>
                                        <p>Content...</p>
                                      </main>
                                      <style>
                                        .navbar {
                                          position: sticky;
                                          top: 0;
                                          background: #333;
                                          color: white;
                                          padding: 10px 20px;
                                          z-index: 1000;
                                        }
                                        main {
                                          height: 2000px;
                                        }
                                      </style>
                                    `,
                                    testCases: [
                                      { condition: "The navigation bar should remain visible at the top of the viewport as the user scrolls." }
                                    ],
                                    solutionExplanation: "Use the position: sticky CSS property.",
                                    language: "HTML/CSS",
                                  },
                                  {
                                    number: 93,
                                    title: "Add a Dynamic Accordion Component",
                                    description: "Create an accordion where clicking a section expands its content.",
                                    difficulty: "Expert",
                                    difficultyScore: 4,
                                    level: "Expert",
                                    existingCode: `
                                      <div class="accordion">
                                        <div class="accordion-item">
                                          <h3 class="accordion-header">Section 1</h3>
                                          <div class="accordion-content">Content 1</div>
                                        </div>
                                        <div class="accordion-item">
                                          <h3 class="accordion-header">Section 2</h3>
                                          <div class="accordion-content">Content 2</div>
                                        </div>
                                      </div>
                                      <style>
                                        .accordion-content {
                                          display: none;
                                          overflow: hidden;
                                        }
                                        .accordion-header {
                                          cursor: pointer;
                                        }
                                      </style>
                                    `,
                                    testCases: [
                                      { condition: "Clicking a section header should toggle the visibility of its content." }
                                    ],
                                    solutionExplanation: "Use JavaScript to toggle the display property of the .accordion-content.",
                                    language: "HTML/CSS",
                                  },
                                  {
                                    number: 94,
                                    title: "Create a Scroll-to-Top Button",
                                    description: "Add a button that appears when the user scrolls down and scrolls the page back to the top when clicked.",
                                    difficulty: "Expert",
                                    difficultyScore: 4,
                                    level: "Expert",
                                    existingCode: `
                                      <button id="scroll-to-top">⬆ Back to Top</button>
                                      <style>
                                        #scroll-to-top {
                                          position: fixed;
                                          bottom: 20px;
                                          right: 20px;
                                          display: none;
                                          background: #333;
                                          color: white;
                                          border: none;
                                          padding: 10px 15px;
                                          border-radius: 5px;
                                          cursor: pointer;
                                        }
                                      </style>
                                    `,
                                    testCases: [
                                      { condition: "The button should appear after scrolling down and scroll the page to the top when clicked." }
                                    ],
                                    solutionExplanation: "Use JavaScript to show/hide the button and smooth-scroll to the top.",
                                    language: "HTML/CSS",
                                  },
                                  {
                                    number: 95,
                                    title: "Add a Responsive CSS Grid Layout",
                                    description: "Build a responsive grid layout that adjusts the number of columns based on screen size.",
                                    difficulty: "Expert",
                                    difficultyScore: 4,
                                    level: "Expert",
                                    existingCode: `
                                      <div class="grid">
                                        <div class="grid-item">1</div>
                                        <div class="grid-item">2</div>
                                        <div class="grid-item">3</div>
                                      </div>
                                      <style>
                                        .grid {
                                          display: grid;
                                          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                                          gap: 10px;
                                        }
                                        .grid-item {
                                          background: lightblue;
                                          padding: 20px;
                                          text-align: center;
                                        }
                                      </style>
                                    `,
                                    testCases: [
                                      { condition: "Grid items should reflow into different column layouts based on the screen size." }
                                    ],
                                    solutionExplanation: "Use CSS grid-template-columns with auto-fit or auto-fill.",
                                    language: "HTML/CSS",
                                  },
                                  {
                                    number: 96,
                                    title: "Build a Loading Spinner",
                                    description: "Create a loading spinner that displays while the page is loading.",
                                    difficulty: "Expert",
                                    difficultyScore: 4,
                                    level: "Expert",
                                    existingCode: `
                                      <div id="spinner"></div>
                                      <style>
                                        #spinner {
                                          width: 50px;
                                          height: 50px;
                                          border: 5px solid rgba(0, 0, 0, 0.2);
                                          border-top: 5px solid #333;
                                          border-radius: 50%;
                                          animation: spin 1s linear infinite;
                                        }
                                        @keyframes spin {
                                          to {
                                            transform: rotate(360deg);
                                          }
                                        }
                                      </style>
                                    `,
                                    testCases: [
                                      { condition: "The spinner should rotate continuously until removed from the DOM." }
                                    ],
                                    solutionExplanation: "Use CSS @keyframes for rotation animation.",
                                    language: "HTML/CSS",
                                  },
                                  {
                                    number: 97,
                                    title: "Add a Floating Action Button",
                                    description: "Create a floating action button that triggers a modal when clicked.",
                                    difficulty: "Expert",
                                    difficultyScore: 4,
                                    level: "Expert",
                                    existingCode: `
                                      <button id="fab">+</button>
                                      <div id="modal" class="hidden">Modal Content</div>
                                      <style>
                                        #fab {
                                          position: fixed;
                                          bottom: 20px;
                                          right: 20px;
                                          background: #ff5722;
                                          color: white;
                                          border: none;
                                          border-radius: 50%;
                                          width: 50px;
                                          height: 50px;
                                          font-size: 24px;
                                          cursor: pointer;
                                        }
                                        #modal.hidden {
                                          display: none;
                                        }
                                        #modal {
                                          position: fixed;
                                          top: 50%;
                                          left: 50%;
                                          transform: translate(-50%, -50%);
                                          padding: 20px;
                                          background: white;
                                          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
                                        }
                                      </style>
                                    `,
                                    testCases: [
                                      { condition: "Clicking the button should toggle the modal's visibility." }
                                    ],
                                    solutionExplanation: "Use JavaScript to toggle a hidden class on the modal.",
                                    language: "HTML/CSS",
                                  },
                                  {
                                    number: 98,
                                    title: "Add an Image Lazy Loader",
                                    description: "Load images only when they are about to enter the viewport.",
                                    difficulty: "Expert",
                                    difficultyScore: 4,
                                    level: "Expert",
                                    existingCode: `
                                      <img class="lazy" data-src="image1.jpg" alt="Image 1">
                                      <img class="lazy" data-src="image2.jpg" alt="Image 2">
                                      <style>
                                        .lazy {
                                          opacity: 0;
                                          transition: opacity 0.3s;
                                        }
                                      </style>
                                    `,
                                    testCases: [
                                      { condition: "Images should load dynamically as they appear in the viewport." }
                                    ],
                                    solutionExplanation: "Use the IntersectionObserver API to load images and update their src.",
                                    language: "HTML/CSS",
                                  },
                                  {
                                    number: 99,
                                    title: "Create a Tabbed Navigation Interface",
                                    description: "Build a tabbed interface where clicking a tab displays its content.",
                                    difficulty: "Expert",
                                    difficultyScore: 4,
                                    level: "Expert",
                                    existingCode: `
                                      <div class="tabs">
                                        <button class="tab-button active" data-tab="tab1">Tab 1</button>
                                        <button class="tab-button" data-tab="tab2">Tab 2</button>
                                      </div>
                                      <div id="tab1" class="tab-content">Content for Tab 1</div>
                                      <div id="tab2" class="tab-content hidden">Content for Tab 2</div>
                                      <style>
                                        .tab-content.hidden {
                                          display: none;
                                        }
                                        .tab-button.active {
                                          background: #333;
                                          color: white;
                                        }
                                      </style>
                                    `,
                                    testCases: [
                                      { condition: "Clicking a tab should toggle the corresponding content's visibility." }
                                    ],
                                    solutionExplanation: "Use JavaScript to toggle hidden class and active state for tabs.",
                                    language: "HTML/CSS",
                                  },
                                  {
                                    number: 100,
                                    title: "Add a Scroll Reveal Animation",
                                    description: "Animate elements as they scroll into view.",
                                    difficulty: "Expert",
                                    difficultyScore: 4,
                                    level: "Expert",
                                    existingCode: `
                                      <div class="reveal">Content 1</div>
                                      <div class="reveal">Content 2</div>
                                      <style>
                                        .reveal {
                                          opacity: 0;
                                          transform: translateY(20px);
                                          transition: all 0.5s;
                                        }
                                        .reveal.visible {
                                          opacity: 1;
                                          transform: translateY(0);
                                        }
                                      </style>
                                    `,
                                    testCases: [
                                      { condition: "Elements should slide into view as they scroll into the viewport." }
                                    ],
                                    solutionExplanation: "Use JavaScript with the IntersectionObserver API to toggle visibility.",
                                    language: "HTML/CSS",
                                  }
                                ];
                              
    export default htmlCssTasks;
      
