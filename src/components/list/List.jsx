import React, { useState, useEffect } from "react";
import * as ReactBootStrap from "react-bootstrap";
import Coin from "../coin/Coin";
import axios from "axios";

const List = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then(
        (res) => {
          console.log(res.data);
          setData(res.data);
          setLoading(true);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return loading ? (
    <div className=" flex flex-col  mt-20 ml-[120px] ">
      <span className="py-2  h-auto">
        <h1 className="text-darkBlue font-medium  text-[24px]">Crypto</h1>
        <h1 className="text-darkBlue  font-light text-[13px]  mt-2 ">
          ({data.length} Items)
        </h1>
        <h1 className="text-darkBlue  text-[16px] mt-[28px]">
          Explore all coins.
        </h1>
        <h1 className="text-darkBlue  font-medium text-[20px] mt-[12px]">
          In the List.
        </h1>
        {/* <hr className="bg-white  mt-4 w-[90%] " /> */}
      </span>
      <div className="flex flex-col items-stretch justify-center ">
        {/* <div className="grid grid-cols-[200px,100px,100px,100px,100px] p-2 text-white text-left mb-2 border-b-overlay border-b">
          <h1 className="font-light pl-2 text-left">Name</h1>
          <h1 className="font-light text-left">Symbol</h1>
          <h1 className="font-light">Price</h1>
          <h1 className="font-light">Today </h1>
          <h1 className="font-light">Market Cap </h1>
        </div> */}

        {data.map((coin) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              id={coin.symbol}
              price={coin.current_price}
              change={coin.market_cap_change_percentage_24h}
              cap={coin.market_cap}
            />
          );
        })}
      </div>
    </div>
  ) : (
    <div className="flex flex-row items-center justify-center mt-[300px]">
      <ReactBootStrap.Spinner animation="grow" variant="light" />
    </div>
  );
};

export default List;
