import React from "react";
import type { BookInfo } from "../types";
import Bibliography from "./Bibliography";

interface BookInfoPanelProps {
  bookInfo: BookInfo;
}

const BookInfoPanel: React.FC<BookInfoPanelProps> = ({ bookInfo }) => {
  return (
    <div
      style={{
        background: "#007bff",
        padding: "10px",
        margin: "10px",
        borderRadius: "5px",
      }}
    >
      <Bibliography bookInfo={bookInfo} />
    </div>
  );
};

export default BookInfoPanel;
