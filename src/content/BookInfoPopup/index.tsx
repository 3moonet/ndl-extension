import React from "react";
import type { BookInfo } from "./types";
import BookInfoPanel from "./Panel";
import styles from "./index.module.css";

interface BookInfoPopupProps {
  bookInfo: BookInfo;
}

const BookInfoPopup: React.FC<BookInfoPopupProps> = ({ bookInfo }) => {
  return (
    <div className={styles.popup}>
      <BookInfoPanel bookInfo={bookInfo} />
    </div>
  );
};

export default BookInfoPopup;
