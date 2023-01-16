import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { Filler } from "chart.js";

const CoinGraph = (props) => {
  // Chart.pluginService.register();
  ChartJs.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler
  );
  const data = {
    labels: props.prices.map((price) =>
      new Date(price[0]).toLocaleDateString()
    ),
    datasets: [
      {
        label: "Price",
        data: props.prices.map((price) => price[1]),
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "#ff0",
        // fill: "origin",
      },
      {
        label: "Market Cap",
        data: props.market_caps.map((cap) => cap[1]),
        backgroundColor: "rgba(255, 99, 132, 0.4)",
        borderColor: "#f80",
        // fill: "origin",
      },
      {
        label: "Total Volume",
        data: props.total_volumes.map((volume) => volume[1]),
        backgroundColor: "rgba(255, 205, 86, 0.4)",
        borderColor: "#0ff",
        // fill: "origin",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default CoinGraph;
