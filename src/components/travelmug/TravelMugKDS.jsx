import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Orders from "./Orders";

const TravelMugKDS = () => {
  const [orderId, setOrderId] = useState("");

  return (
    <>
      <div className="navbar">
        <h1>Travel Mug Cafe</h1>
        <div className="searchbar-container">
          <input
            type="text"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            placeholder="Enter Order ID Here"
            className="search-bar"
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
      <Orders orderId={orderId} />
    </>
  );
};

export default TravelMugKDS;
