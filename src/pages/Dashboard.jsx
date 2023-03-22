import React from "react";
import { Link } from "react-router-dom";
import stocks from "../model/data";

function Dashboard() {
  return (
    <div>
      {stocks.map((company) => {
        const { name, symbol, key } = company;

        return (
          <Link key={key} to={`/stocks/${symbol}`}>
            <h2 className="names">{name}</h2>
          </Link>
        );
      })}
    </div>
  );
}

export default Dashboard;
