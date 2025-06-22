import React from "react";
import type { BookInfo } from "./types";
import { BookInfoContent } from "./BookInfoContent";

interface BookInfoPanelProps {
  bookInfo: BookInfo;
}

export const BookInfoPanel: React.FC<BookInfoPanelProps> = ({ bookInfo }) => {
  return (
    <div
      style={{
        background: "#007bff",
        color: "white",
        padding: "10px",
        margin: "10px",
        borderRadius: "5px",
      }}
    >
      <BookInfoContent bookInfo={bookInfo} />
    </div>
  );
};
