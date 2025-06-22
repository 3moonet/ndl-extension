import type { BookInfo } from "../../types";

export const formatBookInfo = ({
  authors,
  title,
  volume,
  seriesTitle,
  publisher,
  issued,
  ndlCallNumber,
}: BookInfo): string => {
  return (
    `${authors}，` +
    `『${title}』${volume}，` +
    formatSeriesTitle(seriesTitle) +
    `${publisher}，` +
    `${issued}，` +
    `【${ndlCallNumber}】`
  );
};

const formatSeriesTitle = (series_title: string): string => {
  return series_title ? `（東洋文庫293${series_title}），` : "";
};
