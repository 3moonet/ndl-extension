import { createRoot } from "react-dom/client";
import BookInfo from "./BookInfo";
import { scrapeBookInfo } from "./Scraper/bookInfo";

// Reactコンポーネントをページに挿入
function insertReactApp() {
  // 既存の要素を削除（重複防止）
  const existingElement = document.getElementById("ndl-react-root");
  if (existingElement) {
    existingElement.remove();
  }

  // 書誌情報を取得
  const bookInfo = scrapeBookInfo();

  // React用のコンテナを作成
  const container = document.createElement("div");
  container.id = "ndl-react-root";
  document.body.appendChild(container);

  // Reactコンポーネントをレンダリング（propsで書誌情報を渡す）
  const root = createRoot(container);
  root.render(<BookInfo bookInfo={bookInfo} />);
}

// ページ読み込み完了後に実行
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", insertReactApp);
} else {
  insertReactApp();
}
