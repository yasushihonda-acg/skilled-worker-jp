# skilled-worker-jp ハンドオフ

**最終更新**: 2026-02-03
**フェーズ**: MVP本番稼働中

---

## プロジェクト概要

特定技能外国人向け人材募集サイト。日本国内の技能実習生（3年以上滞在）を特定技能へ移行させるための求職者登録プラットフォーム。

- **ターゲット国籍**: インドネシア、ネパール、ミャンマー
- **対象業種**: 介護（入口として）→ 将来的に全業種対応
- **運営**: あおぞらケアグループ

---

## 現在の状態

### デプロイ済み環境

| 環境 | URL |
|------|-----|
| 本番サイト | https://skilled-worker-jp-ih4hgkgkfa-an.a.run.app |
| システム説明ドキュメント | https://yasushihonda-acg.github.io/skilled-worker-jp/system-overview/ |
| GitHub | https://github.com/yasushihonda-acg/skilled-worker-jp |

### 実装済み機能

| 機能 | 状態 | 備考 |
|------|------|------|
| LP（リデザイン済み） | ✅ | コンバージョン最適化ベストプラクティス適用 |
| 5言語対応 | ✅ | ja/en/id/ne/my |
| 言語切替UI | ✅ | ドロップダウン |
| 登録フォーム（3ステップ） | ✅ | モック（Firestore未連携） |
| AIチャット | ✅ | Vertex AI Gemini 2.5 Flash連携済み |
| Cloud Runデプロイ | ✅ | Workload Identity認証 |
| GitHub Pages | ✅ | システム説明ドキュメント公開 |

### 未実装（次フェーズ）

| 機能 | 優先度 |
|------|--------|
| Firestore連携（登録データ保存） | 高 |
| 管理画面 | 中 |
| Google Analytics連携 | 中 |

---

## 技術スタック

| レイヤー | 技術 | 状態 |
|---------|------|------|
| フロントエンド | Next.js 14 (App Router) | ✅ |
| スタイリング | Tailwind CSS | ✅ |
| 多言語 | next-intl | ✅ |
| AI | Vertex AI (Gemini 2.5 Flash) | ✅ |
| インフラ | GCP Cloud Run | ✅ |
| CI/CD | Cloud Build | ✅ |
| 認証 | Workload Identity | ✅ |
| DB | Firestore | 未連携 |

---

## 直近の変更（2026-02-03）

1. **LP リデザイン** - コンバージョン最適化
   - Hero: バッジ、給与表示、トラスト指標
   - Social Proof: 統計数値、口コミ
   - スティッキーCTA（モバイル）

2. **AIチャット改善**
   - マークダウン→HTML変換
   - サジェストボタン追加
   - AI知識強化（あおぞらケアグループ詳細）

3. **システム説明ドキュメント作成**
   - GitHub Pages公開
   - 非エンジニア向け（SVGアニメーション、フロー図）
   - エンジニア向け（Mermaid図、コード例）

---

## 環境情報

| 項目 | 値 |
|------|-----|
| GCPプロジェクト | skilled-worker-jp-486212 |
| GCPアカウント | yasushi.honda@aozora-cg.com |
| リージョン | asia-northeast1 |
| サービスアカウント | skilled-worker-app@skilled-worker-jp-486212.iam.gserviceaccount.com |
| GitHub | yasushihonda-acg |

---

## ディレクトリ構造

```
skilled-worker-jp/
├── docs/
│   ├── prd.md                    # 製品要件定義
│   ├── adr/                      # 技術選定記録
│   ├── handoff/                  # ハンドオフ
│   └── system-overview/          # GitHub Pages ドキュメント
├── src/
│   ├── app/[locale]/             # ページ
│   ├── components/               # UIコンポーネント
│   ├── lib/vertexai.ts           # AI設定・プロンプト
│   └── messages/                 # 翻訳ファイル（5言語）
├── cloudbuild.yaml               # Cloud Build設定
├── Dockerfile
└── CLAUDE.md
```

---

## 次のアクション候補

1. **Firestore連携** - 登録フォームのデータ保存
2. **Google Analytics** - コンバージョン計測
3. **管理画面** - 登録者一覧、エクスポート
4. **独自ドメイン設定** - Cloud Runカスタムドメイン

---

## 開発コマンド

```bash
cd /Users/yyyhhh/skilled-worker-jp
npm run dev          # 開発サーバー
npm run build        # ビルド
npm run type-check   # 型チェック
git push origin main # 本番デプロイ（Cloud Build自動実行）
```

---

## 注意事項

- 画像はUnsplashのフリー画像を使用（本番前に自社写真に差し替え推奨）
- 翻訳は機械翻訳ベース（本番前にネイティブチェック推奨）
- Firestoreは未連携のため、登録データは保存されない
