// RevenueChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';

function RevenueChart({ data }) {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Revenue',
        data: data.revenue,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
}

export default RevenueChart;
