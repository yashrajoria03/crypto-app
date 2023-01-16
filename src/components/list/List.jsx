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
          // console.log(res.data);
          setData(
            res.data.sort(function (a, b) {
              return b.market_cap - a.market_cap;
            })
            // .slice(0, 10)
          );
          setLoading(true);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return loading ? (
    <div className=" flex flex-col   mx-auto px-8 pt-6">
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
        {/* <div className="flex flex-row ">
          <div className="w-1/4 text-left px-4">{/* <span></span> 
          </div>

          <div className="w-1/4 text-left px-4">
            <h2 className="  text-left text-darkBlue">Name </h2>
          </div>
          <div className="w-1/4 text-left px-4">
            <h2 className="  text-left text-darkBlue">Symbol </h2>
          </div>
          <div className="w-1/4 text-left px-4">
            <h2 className="  text-left text-darkBlue">Price </h2>
          </div>
          <div className="w-1/4 text-left px-4">
            <h2 className="  text-left text-darkBlue">Today </h2>
          </div>
          <div className="w-1/4 text-left px-4">
            <h2 className="  text-left text-darkBlue">Market Cap </h2>
          </div>
        </div> */}
        {/* {data.map((coin) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              id={coin.symbol}
              price={coin.current_price}
              change={coin.market_cap_change_percentage_24h}
              cap={coin.market_cap}
            />
          );
        })} */}
        <Coin data={data} />
      </div>
    </div>
  ) : (
    <div className="flex flex-row items-center justify-center mt-[300px]">
      <ReactBootStrap.Spinner animation="grow" variant="light" />
    </div>
  );
};

export default List;
