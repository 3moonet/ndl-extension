import React from "react";
import type { BookInfo } from "./types";
import { formatBookInfo } from "./format";

interface BookInfoContentProps {
  bookInfo: BookInfo;
}

export const BookInfoContent: React.FC<BookInfoContentProps> = ({
  bookInfo,
}) => {
  return <div>{formatBookInfo(bookInfo)}</div>;
};
