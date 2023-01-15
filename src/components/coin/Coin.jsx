import React from "react";
import down from "../../assets/img/down.png";
import up from "../../assets/img/triangle.png";

// const data = {
//   id: "bitcoin",
//   symbol: "btc",
//   name: "Bitcoin",
//   price: 1398200,
//   change: 1.48753,
// };
function Coin(props) {
  return (
    <div className="flex flex-row items-center justify-around gap-4 text-darkBlue bg-white text-left mb-2 p-2">
      <h1 className="pl-2 text-left">{props.name}</h1>
      <h1 className="text-left">{props.id.toUpperCase()}</h1>
      <h1>Rs. {props.price}</h1>
      {props.change > 0 ? (
        <span className="flex flex-row items-center justify-start gap-2">
          <img src={up} alt="up" className="h-[10px]" />
          <div
            style={{
              background: "green",
              color: "white",
              padding: "2px",
              borderRadius: "5px",
            }}
            className="block"
          >
            {props.change.toFixed(2)}
          </div>
        </span>
      ) : (
        <span className="flex flex-row items-center justify-start gap-2">
          <img src={down} alt="down" className="h-[10px]" />
          <div
            style={{
              background: "red",
              color: "white",
              padding: "2px",
              borderRadius: "5px",
            }}
            className="block"
          >
            {props.change.toFixed(2) * -1}
          </div>
        </span>
      )}
      <h1>{(props.cap / 1000000000).toFixed(2)}Bn</h1>
    </div>
  );
}

export default Coin;
