# Marsiees English LP — 海外企業向け英語ランディングページ

> **Service.01　Web・アプリ開発**ーーHTML / CSS / JavaScript（ビルドなし）/ Vercel

マーシーズ株式会社（marsiees.com）の、海外企業向け英語ランディングページです。

## 課題

日本市場への参入を考えている海外企業に向けて、営業代行サービスを英語で訴求する入口がありませんでした。既存サイトは日本語のみで、海外からの問い合わせを受ける導線が無い状態でした。

## やったこと

**1枚完結のランディングページとして独立させています。** 既存サイトの構造に手を入れずに出せること、公開先を後から選べることを優先しました。

ビルド工程はありません。静的ファイルをそのまま配信します。フレームワークを入れると、引き継いだ人が手を入れるたびにビルド環境を用意することになるためです。

検索で狙っている語は次のとおりです。

- sales outsourcing Japan
- Japan market entry
- telemarketing Japan
- trade show lead follow up Japan
- inside sales Japan

## 構成

```
index.html
css/style.css
js/main.js
images/
vercel.json
```

## Vercel で公開する

ビルド不要です。

1. Vercel の「Add New → Project」からこのリポジトリを選ぶ
2. Framework Preset は「Other」、Build Command と Output Directory は空のまま Deploy

CLI を使う場合は次のとおりです。

```bash
npm i -g vercel
vercel        # プレビュー
vercel --prod # 本番
```

### vercel.json でやっていること

- `X-Robots-Tag: noindex` で、確認用のURLが検索に出ないようにしています
  - **正式公開のときはこの行を外してください**
- 画像・CSS・JS のキャッシュ設定
- 基本的なセキュリティヘッダー

## 公開前にやること

1. **動画**
   `videos/intro.mp4` と英語字幕 `videos/intro-en.vtt` を置けば再生できます。
2. **フォーム**
   `#contactForm` の `action` が空の間は送信されず、プレビューである旨のメッセージが出ます。送信先（フォームサービスなど）の URL を `action` に入れれば、そのまま送信されます。
3. **URL**
   canonical・OGP・構造化データの URL は `https://marsiees.com/en/` にしています。別のドメインで公開する場合は、`index.html` の `<head>` 内の URL を書き換えてください。

---

## 制作

**図美楽（ずみらく / zumiraku）** — システム・アプリのAIエンジニア

Web・アプリ開発／システム開発・インフラ／AI活用・セキュリティ。設計から運用まで、ひとりで通しています。実務12年。

| 媒体 | リンク | 表示名 |
|---|---|---|
| note | [note.com/zumiraku](https://note.com/zumiraku) | 図美楽 |
| Qiita | [qiita.com/zumiraku](https://qiita.com/zumiraku) | ずみらく |
| Zenn | [zenn.dev/zumiraku](https://zenn.dev/zumiraku) | ズミラク |
| YOUTRUST | [youtrust.jp/users/zumiraku](https://youtrust.jp/users/zumiraku) | 図ミラク |

表記は媒体によって揺れていますが、どれも同じ人間です。英字は zumiraku で統一しています。

返信は平日なら4時間以内、土日祝でも12時間以内。お仕事のご相談は、要件が固まっていない段階からでも構いません。NDAも対応します。
