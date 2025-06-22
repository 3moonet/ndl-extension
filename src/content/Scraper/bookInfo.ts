import { objectEntries, objectFromEntries } from "../../utils/collections";
import type { BookInfo } from "../BookInfoPopup/types";

type BookInfoExtractors = {
  [K in keyof BookInfo]: () => BookInfo[K];
};

const extractDt = (dtText: string) => {
  return Array.from(document.querySelectorAll("dt")).find(
    (dt) => dt.textContent?.trim() === dtText
  );
};

const extractDdTextFromDtText = (dtText: string) => {
  const dt = extractDt(dtText);
  return dt?.nextElementSibling?.textContent?.trim() || "";
};

const extractors: BookInfoExtractors = {
  title: () => extractDdTextFromDtText("タイトル"),
  volume: () => extractDdTextFromDtText("巻次・部編番号"),
  authors: () => extractDdTextFromDtText("著者・編者"),
  seriesTitle: () => extractDdTextFromDtText("シリーズタイトル"),
  publisher: () => extractDdTextFromDtText("出版事項"),
  issued: () => extractDdTextFromDtText("出版年（W3CDTF）"),
  ndlCallNumber: () => extractDdTextFromDtText("国立国会図書館請求記号"),
};

export const scrapeBookInfo = (): BookInfo => {
  return objectFromEntries(
    objectEntries(extractors).map(([key, extractor]) => [key, extractor()])
  );
};
