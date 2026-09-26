# Marsiees English LP

marsiees.com の海外企業向け（英語）ランディングページです。

## ファイル構成

- index.html
- css/style.css
- js/main.js
- images/
- videos/（動画を置く場所。まだ空です）

## 設置

`marsiees.com/en/` に `index.html` と各フォルダをそのままアップロードしてください。
canonical や hreflang、OGP のURLは `https://marsiees.com/en/` を前提にしています。
別の場所に置く場合は、index.html の `<head>` 内のURLも合わせて変更してください。

## 公開前にやること

1. **動画**
   `videos/intro.mp4` と英語字幕 `videos/intro-en.vtt` を置けば再生できます。
2. **フォーム**
   `#contactForm` の `action` が空なので、送信先（Contact Form 7 など）につないでください。
3. **日本語サイト側の hreflang**
   日本語トップの `<head>` にも次の3行を入れてください。
   入れないと、Googleが「日本語版と英語版はセット」と認識してくれません。

```html
<link rel="alternate" hreflang="ja" href="https://marsiees.com/">
<link rel="alternate" hreflang="en" href="https://marsiees.com/en/">
<link rel="alternate" hreflang="x-default" href="https://marsiees.com/en/">
```

4. 日本語サイトのヘッダーに、英語ページへのリンク（EN）を追加するのがおすすめです。

## 狙っているキーワード

- sales outsourcing Japan
- Japan market entry
- telemarketing Japan
- trade show lead follow up Japan
- inside sales Japan
