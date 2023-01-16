import React, { useState, useEffect } from "react";
import CoinGraph from "../../components/graph/coinGraph";

const Graph = () => {
  const [prices, setPrices] = useState([]);
  const [market_caps, setMarketCaps] = useState([]);
  const [total_volumes, setTotalVolumes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=10"
      );
      const data = await res.json();
      setPrices(data.prices);
      setMarketCaps(data.market_caps);
      setTotalVolumes(data.total_volumes);
    };
    fetchData();
  }, []);
  // console.log(prices);
  return (
    <div>
      <CoinGraph
        prices={prices}
        market_caps={market_caps}
        total_volumes={total_volumes}
      />
    </div>
  );
};

export default Graph;
