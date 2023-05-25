import React, { useEffect, useState } from 'react';
import fetchRevenueData from './api/revenueApi';
import RevenueChart from './components/RevenueChart';

function App() {
  const [revenueData, setRevenueData] = useState(null);

  useEffect(() => {
    // Fetch revenue data when the component mounts
    fetchRevenueData()
      .then(data => setRevenueData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Company Revenue Statistics</h1>
      {revenueData ? <RevenueChart data={revenueData} /> : <p>Loading data...</p>}
    </div>
  );
}

export default App;
