import React from "react";
import type { BookInfo } from "./types";
import { BookInfoPanel } from "./BookInfoPanel";

interface BookInfoPopupProps {
  bookInfo: BookInfo;
}

const BookInfoPopup: React.FC<BookInfoPopupProps> = ({ bookInfo }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "10px",
        right: "10px",
        zIndex: 10000,
        maxWidth: "300px",
      }}
    >
      <BookInfoPanel bookInfo={bookInfo} />
    </div>
  );
};

export default BookInfoPopup;
