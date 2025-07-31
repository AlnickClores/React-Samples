import React, { useState, useEffect } from "react";

export default function ProductList() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const getData = async () => {
    try {
      const fetchedData = await fetch("https://fakestoreapi.com/products");
      const jsonData = await fetchedData.json();
      setData(jsonData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const filteredData = data.filter((item) =>
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Product List</h1>
      <input
        type="text"
        placeholder="Filter Category Here..."
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          fontSize: "15px",
          margin: "1rem 0",
          padding: "5px",
        }}
      />
      {data &&
        filteredData.map((data) => (
          <div
            key={data.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "solid #85E3FF 2px",
              borderRadius: "15px",
              padding: "15px",
              marginBottom: "2rem",
            }}
          >
            <h3>{data.title}</h3>
            <img
              src={data.image}
              style={{
                height: "100px",
                width: "100px",
                mixBlendMode: "multiply",
              }}
            />
            <p
              style={{
                fontSize: "15px",
                fontWeight: "bold",
                alignSelf: "start",
              }}
            >
              {data.category}
            </p>
            <p style={{ fontSize: "13px" }}>{data.description}</p>
            <span
              style={{
                fontSize: "15px",
                fontWeight: "bold",
                border: "solid #A79AFF 2px",
                borderRadius: "10px",
                padding: "4px 8px",
                cursor: "pointer",
              }}
            >
              ${data.price}
            </span>
          </div>
        ))}
    </>
  );
}
