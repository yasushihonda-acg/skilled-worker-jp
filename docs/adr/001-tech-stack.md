# ADR-001: 技術スタック選定

## ステータス
承認済み

## コンテキスト
特定技能外国人向け人材募集サイトを構築するにあたり、技術スタックを選定する必要がある。

### 要件
- 多言語対応（5言語）
- GCPでのホスティング
- AIチャット機能（Vertex AI）
- 迅速な開発・イテレーション
- モバイルファースト

## 決定

### フロントエンド
**Next.js 14 (App Router)** を採用

#### 理由
- React Server Components によるパフォーマンス向上
- App Router による柔軟なルーティング（多言語対応に適する）
- GCP Cloud Run との相性が良い（`output: 'standalone'`）
- 豊富なエコシステム

#### 代替案と不採用理由
| 代替案 | 不採用理由 |
|--------|-----------|
| Nuxt.js | Vue.jsの経験が少ない |
| Remix | Cloud Run対応の実績が少ない |
| Astro | インタラクティブな機能に不向き |

### スタイリング
**Tailwind CSS** を採用

#### 理由
- 高速な開発
- 一貫性のあるデザイン
- レスポンシブ対応が容易
- 軽量なバンドルサイズ

### 多言語
**next-intl** を採用

#### 理由
- Next.js App Router に公式対応
- 型安全
- ICUメッセージ形式サポート
- 軽量

#### 代替案と不採用理由
| 代替案 | 不採用理由 |
|--------|-----------|
| next-i18next | App Router非対応（Pages Router用） |
| react-intl | 設定が複雑 |

### データベース
**Firestore** を採用（Phase 2以降）

#### 理由
- GCPネイティブ
- スキーマレスで柔軟
- リアルタイム同期
- オートスケール

### AI/翻訳
**Vertex AI (Gemini)** + **Google Translate API**

#### 理由
- GCP統合
- 多言語対応
- 低レイテンシ（asia-northeast1）

### ホスティング
**Cloud Run** を採用

#### 理由
- コンテナベース
- オートスケール
- 従量課金
- Cloud Build との統合

## 影響

### ポジティブ
- GCPに統一することで運用コスト削減
- モダンな技術スタックで開発効率向上
- 将来的な拡張に対応しやすい

### ネガティブ
- Next.js 14 の学習コスト
- Tailwind CSS 4.x は新しいため、ドキュメントが限定的

## 参考資料
- [Next.js Documentation](https://nextjs.org/docs)
- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Cloud Run Documentation](https://cloud.google.com/run/docs)
