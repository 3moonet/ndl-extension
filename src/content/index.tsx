console.log("ContentScript");

// テスト用の要素をページに追加
function addTestElement() {
  // 既存の要素を削除（重複防止）
  const existingElement = document.getElementById("ndl-test-element");
  if (existingElement) {
    existingElement.remove();
  }

  // テスト要素を作成
  const testElement = document.createElement("div");
  testElement.id = "ndl-test-element";
  testElement.textContent = "NDL拡張機能が動作しています！";
  testElement.style.cssText = `
    background: #007bff;
    color: white;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    font-family: Arial, sans-serif;
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 10000;
  `;

  // ページに追加
  document.body.appendChild(testElement);

  console.log("テスト要素を追加しました");
}

// ページ読み込み完了後に実行
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", addTestElement);
} else {
  addTestElement();
}
