import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const Dankmemes = () => {
  const [chartData, setChartData] = useState({});
  // const [employeeSalary, setEmployeeSalery] = useState([]);
  // const [employeeAge, setEmployeeAge] = useState([]);

  const chart = () => {
    let empSal = [];
    let empAge = [];

    axios
      .get('http://dummy.restapiexample.com/api/v1/employees')
      .then(res => {
        // console.log(res);
        for (const dataObj of res.data.data) {
          empSal.push(parseInt(dataObj.employee_salary));
          empAge.push(parseInt(dataObj.employee_age));
        }
        setChartData({
          // labels: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
          labels: empAge,
          datasets: [
            {
              label: 'level of thickness',
              //data: [32, 45, 12, 76, 69],
              data: empSal,
              backgroundColor: ['rgba(75, 192, 192, 0.6'],
              borderWidth: 4
            }
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
    // console.log(empSal, empAge);
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div>
      <h1>Line Graph</h1>
      <div style={{ height: '500px', width: '500px' }}>
        <Line
          data={chartData}
          options={{
            responsive: true,
            title: { text: 'THICCNESS SCALE', display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true
                  },
                  gridLines: false
                }
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false
                  }
                }
              ]
            }
          }}
        />
      </div>
    </div>
  );
};

export default Dankmemes;
