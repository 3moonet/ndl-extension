import React from "react";
import type { BookInfo as BookInfoType } from "./types";
import { formatBookInfo } from "./format";

interface BookInfoProps {
  bookInfo: BookInfoType;
}

const BookInfo: React.FC<BookInfoProps> = ({ bookInfo }) => {
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
        maxWidth: "300px",
      }}
    >
      <div>{formatBookInfo(bookInfo)}</div>
    </div>
  );
};

export default BookInfo;
