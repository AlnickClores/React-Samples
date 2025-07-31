import React, { useState } from "react";
import sampleDb from "./sampledb";

const Orders = ({ orderId }) => {
  const [startedOrders, setStartedOrders] = useState({});
  const [orderStatuses, setOrderStatuses] = useState({});

  const handleStartButtonClick = (orderId) => {
    const confirmed = window.confirm("Start the Order?");
    if (confirmed) {
      setStartedOrders((prevStartedOrders) => ({
        ...prevStartedOrders,
        [orderId]: true,
      }));
      setOrderStatuses((prevOrderStatuses) => ({
        ...prevOrderStatuses,
        [orderId]: "Working",
      }));
    }
  };

  const handleFinishButtonClick = (orderId) => {
    setOrderStatuses((prevOrderStatuses) => ({
      ...prevOrderStatuses,
      [orderId]: "Ready to Serve",
    }));
  };

  return (
    <div className="orders-card-container">
      {sampleDb.map((order) => (
        <div className="orders-card" key={order.orderId}>
          <div>
            <h2 className="order-id">Order Number #{order.orderId}</h2>
            <ul className="orders-container">
              {order.orders.map((item, index) => (
                <li key={index} className="orders">
                  <p>
                    {item.order_name} - Quantity: {item.quantity}
                  </p>
                </li>
              ))}
            </ul>
            <div className="order-note-container">
              <p className="order-note">{order.order_note}</p>
            </div>

            <p className="status">
              Status: {orderStatuses[order.orderId] || "On Hold"}
            </p>
            <div className="orders-card-buttons">
              <button
                className="start-btn"
                onClick={() => handleStartButtonClick(order.orderId)}
              >
                {startedOrders[order.orderId] ? "Working" : "Start"}
              </button>
              <button
                className="finish-btn"
                disabled={!startedOrders[order.orderId]}
                onClick={() => handleFinishButtonClick(order.orderId)}
                style={{
                  backgroundColor: startedOrders[order.orderId]
                    ? "#ece75f"
                    : "#ece75f7e",
                }}
              >
                Finish
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
