# skilled-worker-jp

特定技能外国人向け人材募集サイト

## プロジェクト概要

- **目的**: 日本国内の技能実習生（3年以上滞在）を特定技能へ移行させるための求職者登録プラットフォーム
- **ターゲット国籍**: インドネシア、ネパール、ミャンマー
- **対象業種**: 介護（入口として）→ 将来的に全業種対応
- **運営会社**: あおぞらケアグループ（https://aozora-cg.com/）

## 技術スタック

| レイヤー | 技術 |
|---------|------|
| フロントエンド | Next.js 14 (App Router) |
| スタイリング | Tailwind CSS |
| 多言語 | next-intl |
| インフラ | GCP (Cloud Run) |
| AI | Vertex AI (Gemini) |
| 翻訳 | Google Translate API |
| DB | Firestore（予定） |

## ブランドカラー

- Primary: `#00C4CC` (ターコイズ)
- Dark: `#323232` (ダークグレー)

## 対応言語

- 日本語 (ja)
- 英語 (en)
- インドネシア語 (id)
- ネパール語 (ne)
- ビルマ語 (my)

## ディレクトリ構造

```
src/
├── app/[locale]/      # ページ（多言語対応）
├── components/        # UIコンポーネント
│   ├── ui/           # 基本UI部品
│   ├── layout/       # ヘッダー、フッター
│   └── chat/         # AIチャット
└── messages/         # 翻訳ファイル
docs/
├── prd.md            # 製品要件定義
└── adr/              # 技術選定記録
```

## 開発コマンド

```bash
npm run dev      # 開発サーバー起動
npm run build    # ビルド
npm run lint     # Lint実行
npm run type-check  # 型チェック
```

## 環境変数（.env.local）

```
# GCP
GOOGLE_CLOUD_PROJECT=
GOOGLE_APPLICATION_CREDENTIALS=

# Vertex AI
VERTEX_AI_LOCATION=asia-northeast1

# Google Translate
GOOGLE_TRANSLATE_API_KEY=
```

## 開発方針

1. **多言語ファースト**: 全テキストは翻訳ファイル経由
2. **モバイルファースト**: レスポンシブデザイン
3. **アクセシビリティ**: 多様なユーザーに配慮
4. **シンプル**: 必要最小限の機能から開始
