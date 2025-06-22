import React from "react";
import type { BookInfo } from "../../types";
import { formatBookInfo } from "./format";

interface BibliographyProps {
  bookInfo: BookInfo;
}

const Bibliography: React.FC<BibliographyProps> = ({ bookInfo }) => {
  return <div style={{ color: "white" }}>{formatBookInfo(bookInfo)}</div>;
};

export default Bibliography;
