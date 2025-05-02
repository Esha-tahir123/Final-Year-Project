// src/services/ValidationService.js (Frontend)
import axios from 'axios';

// Function to validate HTML via the backend
export const validateHtml = async (htmlCode) => {
  console.log("validating");
  try {
    const response = await axios.post('http://localhost:5001/api/validate/html', { code: htmlCode });
    return response.data;  // Return errors from the backend
  } catch (error) {
    console.error('Error validating HTML on backend:', error);
    return [{ message: 'HTML validation request failed.' }];
  }
};

// Function to validate CSS via the backend
export const validateCss = async (cssCode) => {
  try {
    const response = await axios.post('http://localhost:5001/api/validate/css', { code: cssCode });
    return response.data;  // Return errors from the backend
  } catch (error) {
    console.error('Error validating CSS on backend:', error);
    return [{ message: 'CSS validation request failed.' }];
  }
};
