import axios from 'axios';

const API_URL = 'http://localhost:5001/tasks';

// Function to get the next task
export const getNextTask = async (currentDifficulty, score) => {
  try {
    const response = await axios.post(`${API_URL}/next-task`, { currentDifficulty, score });
    return response.data;
  } catch (error) {
    console.error('Error fetching the next task:', error);
    throw error;
  }
};

// Function to submit code
export const submitCode = async (taskId, code) => {
  try {
    const response = await axios.post(`${API_URL}/submit`, { taskId, code });
    return response.data;
  } catch (error) {
    console.error('Error submitting code:', error);
    throw error;
  }
};
