# skilled-worker-jp ハンドオフ

**最終更新**: 2025-02-02
**フェーズ**: MVP構築完了

---

## プロジェクト概要

特定技能外国人向け人材募集サイト。日本国内の技能実習生（3年以上滞在）を特定技能へ移行させるための求職者登録プラットフォーム。

- **ターゲット国籍**: インドネシア、ネパール、ミャンマー
- **対象業種**: 介護（入口として）→ 将来的に全業種対応
- **運営**: あおぞらケアグループ

---

## 現在の状態

### 実装済み機能

| 機能 | 状態 | 備考 |
|------|------|------|
| LP（ヒーロー、特徴、CTA、FAQ） | ✅ | Unsplash画像使用 |
| 5言語対応 | ✅ | ja/en/id/ne/my |
| 言語切替UI | ✅ | ドロップダウン |
| 登録フォーム（3ステップ） | ✅ | モック（API未連携） |
| AIチャットUI | ✅ | モック（AI未連携） |
| ブランドカラー適用 | ✅ | #00C4CC, #323232 |

### 未実装（次フェーズ）

| 機能 | 優先度 |
|------|--------|
| Vertex AI連携（チャット） | 高 |
| Google Translate API連携 | 高 |
| Firestore連携（登録データ保存） | 高 |
| GCP Cloud Runデプロイ | 高 |
| 管理画面 | 中 |

---

## 技術スタック

| レイヤー | 技術 |
|---------|------|
| フロントエンド | Next.js 14 (App Router) |
| スタイリング | Tailwind CSS 4.x |
| 多言語 | next-intl |
| インフラ | GCP (Cloud Run) - 未デプロイ |
| AI | Vertex AI (Gemini) - 未連携 |
| DB | Firestore - 未連携 |

---

## 環境情報

| 項目 | 値 |
|------|-----|
| リポジトリ | https://github.com/yasushihonda-acg/skilled-worker-jp |
| ローカル開発 | http://localhost:3001 |
| GitHub | yasushihonda-acg |
| GCP | hy.unimail.11@gmail.com（暫定） |

---

## ディレクトリ構造

```
skilled-worker-jp/
├── docs/
│   ├── prd.md              # 製品要件定義
│   ├── adr/                # 技術選定記録
│   └── handoff/            # ハンドオフ
├── src/
│   ├── app/[locale]/       # ページ
│   ├── components/         # UIコンポーネント
│   ├── i18n/               # 多言語設定
│   └── messages/           # 翻訳ファイル（5言語）
├── CLAUDE.md               # AI開発コンテキスト
└── README.md
```

---

## 次のアクション候補

1. **GCPプロジェクト設定** - Cloud Run、Firestore有効化
2. **Firestore連携** - 登録フォームのデータ保存
3. **Vertex AI連携** - AIチャット機能
4. **CI/CD設定** - GitHub Actions
5. **本番デプロイ** - ドメイン設定

---

## 開発コマンド

```bash
cd /Users/yyyhhh/skilled-worker-jp
npm run dev      # 開発サーバー（ポート3001使用中なら自動で別ポート）
npm run build    # ビルド
npm run lint     # Lint
```

---

## 注意事項

- ポート3000は別プロジェクトで使用中のため、3001で起動
- 画像はUnsplashのフリー画像を使用（本番前に自社写真に差し替え推奨）
- 翻訳は機械翻訳ベース（本番前にネイティブチェック推奨）
