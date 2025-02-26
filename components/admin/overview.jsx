"use client"

import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export function Overview() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
      },
    },
  }

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Incidents",
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Response Time (min)",
        data: [28, 48, 40, 19, 86, 27],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  }

  return <Bar options={options} data={data} />
}

