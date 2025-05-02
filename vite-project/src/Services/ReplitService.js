// Services/ReplitService.js
import axios from 'axios';

// Function to execute code using the Replit API
export const runCode = async (language, code) => {
  try {
    const response = await axios.post(
      'https://replit.com/api/v0/runs',  // Direct call to Replit API
      {
        language,
        code,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer YOUR_REPLIT_API_TOKEN',  // Replace with your actual Replit API token
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error executing code with Replit API:', error);
    throw new Error('Error executing code');
  }
};
