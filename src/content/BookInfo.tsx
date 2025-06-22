import React from "react";

const BookInfo: React.FC = () => {
  return (
    <div
      style={{
        background: "#007bff",
        color: "white",
        padding: "10px",
        margin: "10px",
        borderRadius: "5px",
        fontFamily: "Arial, sans-serif",
        position: "fixed",
        top: "10px",
        right: "10px",
        zIndex: 10000,
      }}
    >
      NDL拡張機能が動作しています！（React版）
    </div>
  );
};

export default BookInfo;
