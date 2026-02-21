import axios from 'axios';

const PYTHON_API = 'http://localhost:5001/api';

export const fetchAIRecommendations = async (size) => {
  try {
    const response = await axios.post(`${PYTHON_API}/ai/recommend`, { size });
    return response.data;
  } catch (error) {
    console.error("AI API Error:", error);
    return [];
  }
};