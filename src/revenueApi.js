// revenueApi.js
const API_URL = 'https://example.com/api/revenue'; // Replace with your API endpoint

async function fetchRevenueData() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching revenue data:', error);
    throw error;
  }
}

export default fetchRevenueData;
