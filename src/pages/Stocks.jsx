import React from "react";
import { useParams } from "react-router-dom";
import stocks from "../model/data";

function Stocks() {
  const { symbols } = useParams(); //Get Symbol from URL
  // console.log(useParams());
  // console.log(symbols);

  const target = Object.values({ symbols });
  console.log("target : ", target);
  // console.log(Object.values({symbols}).map((value) => {symbols}[value]));

  const result = stocks.filter((company) => company.symbol === target[0]);
  console.log("Result : ", result);

  return (
    <div>
      <h1>Welcome to {symbols}</h1>
      <span>Name : {result[0].name}</span>
      <br />
      <span>Last Price : {result[0].lastPrice}</span>
      <br />
      <span>Change : {result[0].change}</span>
      <br />
      <span>High : {result[0].high}</span>
      <br />
      <span>Low : {result[0].low}</span>
      <br />
      <span>Open : {result[0].open}</span>
      <br />
    </div>
  );
}

export default Stocks;
