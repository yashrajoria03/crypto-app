import React, { useState, useEffect } from "react";
import down from "../../assets/img/down.png";
import up from "../../assets/img/triangle.png";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// import { Typography } from "@mui/material/styles/createTypography";
import Paper from "@mui/material/Paper";
import { ThemeProvider, createTheme } from "@mui/material";
// const data = {
//   id: "bitcoin",
//   symbol: "btc",
//   name: "Bitcoin",
//   price: 1398200,
//   change: 1.48753,
// };
// function Coin(props) {
//   return (
//     <div className="flex flex-row items-left justify-around gap-4 text-darkBlue bg-white text-left mb-2 p-2">
//       <h1 className="pl-2 text-left">{props.name}</h1>
//       <h1 className="text-left">{props.id.toUpperCase()}</h1>
//       <h1>Rs. {props.price}</h1>
//       {props.change > 0 ? (
//         <span className="flex flex-row items-left justify-start gap-2">
//           <img src={up} alt="up" className="h-[10px]" />
//           <div
//             style={{
//               background: "green",
//               color: "white",
//               padding: "2px",
//               borderRadius: "5px",
//             }}
//             className="block"
//           >
//             {props.change.toFixed(2)}
//           </div>
//         </span>
//       ) : (
//         <span className="flex flex-row items-left justify-start gap-2">
//           <img src={down} alt="down" className="h-[10px]" />
//           <div
//             style={{
//               background: "red",
//               color: "white",
//               padding: "2px",
//               borderRadius: "5px",
//             }}
//             className="block"
//           >
//             {props.change.toFixed(2) * -1}
//           </div>
//         </span>
//       )}
//       <h1>{(props.cap / 1000000000).toFixed(2)}Bn</h1>
//     </div>
//   );
// }

// const Coin = (props) => {
//   return (
//     <div className="bg-white rounded-lg border border-gray-300 flex flex-row my-4 py-2">
//       <div className="w-1/4 text-left px-4">
//         <img className="rounded-full w-8 h-8" src={props.image} />
//       </div>
//       <div className="w-1/4 text-left px-4">
//         <h2 className="text-blue-600 text-base leading-5 font-medium">
//           {props.name}
//         </h2>
//       </div>
//       <div className="w-1/4 text-left px-4">
//         <p className="text-gray-700 text-sm leading-5">
//           {props.id.toUpperCase()}
//         </p>
//       </div>
//       <div className="w-1/4 text-left px-4">
//         <p className="text-gray-700 text-sm leading-5">₹ {props.price}</p>
//       </div>
//       <div className="w-1/4 text-left px-4">
//         <p
//           className={`text-gray-700 text-sm leading-5 ${
//             props.change.toFixed(2) > 0 ? "text-green-500" : "text-red-500"
//           }`}
//         >
//           {props.change.toFixed(2)}
//         </p>
//       </div>
//       <div className="w-1/4 text-left px-4">
//         <p className="text-gray-700 text-sm leading-5">
//           ₹ {((props.cap * 81) / 1000000000).toFixed(2)} Bn
//         </p>
//       </div>
//     </div>
//   );
// };

const Coin = (props) => {
  const data = props.data;
  const newData = [];
  // console.log(data);
  data.map((coin) => {
    var name = coin.id;
    var symbol = coin.symbol;
    var image = coin.image;
    var symbol = coin.symbol;
    var price = coin.current_price;
    var change = coin.market_cap_change_percentage_24h;
    var cap = coin.market_cap;
    newData.push({ name, symbol, image, price, change, cap });
  });

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const theme = createTheme({
    typography: {
      fontFamily: ["Poppins"],
    },
  });

  // console.log(newData);
  return (
    <ThemeProvider theme={theme}>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650 }}
          aria-label="simple table"
          style={{ fontFamily: "Poppins" }}
        >
          <TableHead>
            <TableRow>
              <TableCell>Coin</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">24H Change</TableCell>
              <TableCell align="right">Market Cap</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {newData.map((row) => (
              <TableRow>
                <TableCell
                  component="th"
                  scope="row"
                  style={{
                    display: "flex",
                    gap: 15,
                  }}
                >
                  <img
                    src={row?.image}
                    alt={row.name}
                    width="30px"
                    style={{ marginBottom: "10px" }}
                  />
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span
                      style={{
                        textTransform: "uppercase",
                        fontSize: 22,
                      }}
                    >
                      {row.symbol}
                    </span>
                    <span style={{ color: "darkgrey" }}>{row.name}</span>
                  </div>
                </TableCell>
                <TableCell align="right">
                  ₹{numberWithCommas(row.price.toFixed(2))}
                </TableCell>
                <TableCell
                  align="right"
                  style={{
                    color: row.change > 0 ? "rgb(14, 203, 129)" : "red",
                    fontWeight: 500,
                  }}
                >
                  {row.change && "+"}
                  {row.change.toFixed(2)}%
                </TableCell>
                <TableCell align="right">
                  ₹{numberWithCommas(row.cap.toString().slice(0, -6))}M
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
};

export default Coin;
