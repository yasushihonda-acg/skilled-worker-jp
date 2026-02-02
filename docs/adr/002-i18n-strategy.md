# ADR-002: 多言語（i18n）戦略

## ステータス
承認済み

## コンテキスト
ターゲットユーザーがインドネシア、ネパール、ミャンマー出身の外国人であるため、母国語でのUI提供が必須。

### 対応言語
1. 日本語 (ja) - デフォルト
2. 英語 (en) - 共通語
3. インドネシア語 (id)
4. ネパール語 (ne)
5. ビルマ語 (my)

## 決定

### URL構造
**パスベース** を採用: `/{locale}/...`

```
/ja/          → 日本語トップ
/en/          → 英語トップ
/id/          → インドネシア語トップ
/ne/          → ネパール語トップ
/my/          → ビルマ語トップ
/ja/register  → 日本語登録
```

#### 理由
- SEOに有利
- 実装がシンプル
- next-intl のデフォルト方式

#### 代替案と不採用理由
| 代替案 | 不採用理由 |
|--------|-----------|
| サブドメイン (ja.example.com) | DNS設定が複雑、コスト増 |
| クエリパラメータ (?lang=ja) | SEOに不利 |

### 翻訳ファイル構造

```
src/messages/
├── ja.json    # 日本語
├── en.json    # 英語
├── id.json    # インドネシア語
├── ne.json    # ネパール語
└── my.json    # ビルマ語
```

### 翻訳キー命名規則

```json
{
  "common": {
    "submit": "送信",
    "cancel": "キャンセル"
  },
  "header": {
    "title": "サイト名"
  },
  "home": {
    "hero": {
      "title": "日本で働こう",
      "subtitle": "..."
    }
  },
  "register": {
    "title": "登録",
    "form": {
      "name": "名前",
      "nationality": "国籍"
    }
  }
}
```

### フォント戦略

| 言語 | フォント |
|------|---------|
| 日本語 | Noto Sans JP |
| 英語/インドネシア語 | Noto Sans |
| ネパール語 | Noto Sans Devanagari |
| ビルマ語 | Noto Sans Myanmar |

Google Fonts からCDN経由で読み込む。

### 言語検出の優先順位

1. URLパス (`/ja/`, `/en/` など)
2. Cookie (`NEXT_LOCALE`)
3. Accept-Language ヘッダー
4. デフォルト (ja)

### 動的翻訳（Phase 2）

ユーザー入力テキスト（チャット等）は Google Translate API で動的翻訳。

```
ユーザー入力(ネパール語)
  → Google Translate → 日本語
  → AI処理
  → Google Translate → ネパール語
  → ユーザーに表示
```

## 影響

### ポジティブ
- ユーザーが母国語でサービスを利用可能
- SEOで各言語の検索結果に表示

### ネガティブ
- 翻訳の品質管理が必要
- 翻訳ファイルの同期管理

### 対策
- Phase 1: 主要UIのみ人力翻訳
- Phase 2: 機械翻訳 + 人力校正

## 参考資料
- [next-intl Routing](https://next-intl-docs.vercel.app/docs/routing)
- [Google Noto Fonts](https://fonts.google.com/noto)
