# NDL Extension

国立国会図書館（NDL）の書籍検索ページ用の Chrome 拡張機能です。

## 概要

この拡張機能は、[国立国会図書館サーチ](https://ndlsearch.ndl.go.jp/)の書籍詳細ページで、書誌情報を自動的に取得し、便利なポップアップで表示します。

## 機能

- **自動書誌情報取得**: ページから書誌情報を自動的に抽出
- **ポップアップ表示**: 取得した情報を見やすい形式で表示
- **参考文献形式**: 書誌情報を参考文献形式で表示

## 対応ページ

- `https://ndlsearch.ndl.go.jp/books/*`

## 技術スタック

- **フレームワーク**: React 19 + TypeScript
- **ビルドツール**: Vite
- **拡張機能**: Chrome Extension Manifest V3
- **スタイリング**: CSS Modules

## 開発環境のセットアップ

### 前提条件

- Node.js 18 以上
- npm または yarn

### インストール

```bash
# 依存関係をインストール
npm install
```

### 開発サーバーの起動

```bash
# 開発モードで起動
npm run dev
```

### ビルド

```bash
# 本番用ビルド
npm run build
```

### リント

```bash
# ESLintでコードチェック
npm run lint
```

## 開発者向け情報

### 拡張機能のインストール

1. `npm run build`でビルド
2. Chrome 拡張機能の管理ページ（`chrome://extensions/`）を開く
3. 「デベロッパーモード」を有効化
4. 「パッケージ化されていない拡張機能を読み込む」で`dist`フォルダを選択
