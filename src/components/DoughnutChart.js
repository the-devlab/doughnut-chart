import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = () => {
  const data = [100, 220, 30, 76, 44];

  return (
    <Doughnut
      data={{
        labels: ['A', 'B', 'C', 'D', 'E'],
        datasets: [
          {
            data: data,
            backgroundColor: [
              'rgba(94, 153, 253, .99)',
              'rgba(84, 175, 227, .89)',
              'rgba(105, 235, 250, .98)',
              'rgba(84, 227, 202, .89)',
              'rgba(94, 253, 180, .99)'
            ],
            hoverBackgroundColor: [
              'rgba(94, 153, 253, .6)',
              'rgba(84, 175, 227, .6)',
              'rgba(105, 235, 250, .6)',
              'rgba(84, 227, 202, .6)',
              'rgba(94, 253, 180, .6)'
            ]
          }
        ]
      }}
      height={400}
      options={{
        maintainAspectRatio: false,
        title: { text: 'Doughnut Example', display: true }
      }}
    />
  );
};

export default DoughnutChart;
