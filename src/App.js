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
      <div>
      <h1>Company Revenue Statistics</h1>

      {revenueData ? (
        <div>
          <RevenueChart data={revenueData} />

          {/* Additional Widgets */}
          <div>
            <h2>Widget 1</h2>
            {/* Widget 1 content */}
          </div>

          <div>
            <h2>Widget 2</h2>
            {/* Widget 2 content */}
          </div>

          <div>
            <h2>Widget 3</h2>
            {/* Widget 3 content */}
          </div>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>

    {/*  extra  */}
    <div>
      <h1>Company Revenue Statistics</h1>

      {revenueData ? (
        <div>
          <RevenueChart data={revenueData} />

          {/* Additional Widgets */}
          <div>
            <h2>Widget 1</h2>
            {/* Widget 1 content */}
          </div>

          <div>
            <h2>Widget 2</h2>
            {/* Widget 2 content */}
          </div>

          <div>
            <h2>Widget 3</h2>
            {/* Widget 3 content */}
          </div>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
    {/*  extra  */}

    </div>
  );
}

export default App;

