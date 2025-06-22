import { createRoot } from "react-dom/client";
import BookInfoApp from "./BookInfo";

// Reactコンポーネントをページに挿入
function insertReactApp() {
  // 既存の要素を削除（重複防止）
  const existingElement = document.getElementById("ndl-react-root");
  if (existingElement) {
    existingElement.remove();
  }

  // React用のコンテナを作成
  const container = document.createElement("div");
  container.id = "ndl-react-root";
  document.body.appendChild(container);

  // Reactコンポーネントをレンダリング
  const root = createRoot(container);
  root.render(<BookInfoApp />);
}

// ページ読み込み完了後に実行
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", insertReactApp);
} else {
  insertReactApp();
}
