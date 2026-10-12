# Marsiees English LP

marsiees.com の海外企業向け（英語）ランディングページです。

## ファイル構成

- index.html
- css/style.css
- js/main.js
- images/
- vercel.json

## Vercel で公開する

ビルドは不要です。静的なファイルをそのまま配信します。

1. Vercel の「Add New → Project」からこのリポジトリを選ぶ
2. Framework Preset は「Other」、Build Command と Output Directory は空のままで Deploy

CLI を使う場合は次のとおりです。

```bash
npm i -g vercel
vercel        # プレビュー
vercel --prod # 本番
```

### vercel.json でやっていること

- `X-Robots-Tag: noindex` で、確認用のURLが検索に出ないようにしています
  - 正式公開のときはこの行を外してください
- 画像・CSS・JS のキャッシュ設定
- 基本的なセキュリティヘッダー

## 公開前にやること

1. **動画**
   `videos/intro.mp4` と英語字幕 `videos/intro-en.vtt` を置けば再生できます。
2. **フォーム**
   `#contactForm` の `action` が空の間は送信されず、プレビューである旨のメッセージが出ます。
   送信先（フォームサービスなど）の URL を `action` に入れれば、そのまま送信されます。
3. **URL**
   canonical・OGP・構造化データの URL は `https://marsiees.com/en/` にしています。
   別のドメインで公開する場合は、index.html の `<head>` 内の URL を書き換えてください。

## 狙っているキーワード

- sales outsourcing Japan
- Japan market entry
- telemarketing Japan
- trade show lead follow up Japan
- inside sales Japan

---

## つくった人

図美楽（ずみらく / zumiraku）— フリーランスのAIエンジニアです。生成AI×Web開発を軸に、業務システムとWebサイトを受託で作っています。

| 媒体 | リンク | 表示名 |
|---|---|---|
| note | [note.com/zumiraku](https://note.com/zumiraku) | 図美楽 |
| Qiita | [qiita.com/zumiraku](https://qiita.com/zumiraku) | ずみらく |
| Zenn | [zenn.dev/zumiraku](https://zenn.dev/zumiraku) | ズミラク |
| YOUTRUST | [youtrust.jp/users/zumiraku](https://youtrust.jp/users/zumiraku) | 図ミラク |
| GitHub | [github.com/zumiraku](https://github.com/zumiraku) | 図美楽 |

表記は媒体によって揺れていますが、どれも同じ人間です。英字は zumiraku で統一しています。

お仕事のご相談は直接お寄せください。NDAも対応します。
