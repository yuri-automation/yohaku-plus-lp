# 余白＋ サービス紹介LP

noteからサービスを知り、LINE公式の診断へ進むための7セクションの静的ページです。3D・Three.js・外部ライブラリは削除しました。外部フォント・解析・フォーム送信処理はありません。

## 起動方法

このフォルダで実行します（Pythonが必要です）。

```powershell
python -m http.server 8765 --bind 127.0.0.1
```

http://127.0.0.1:8765/ をブラウザで開きます。編集後は再読み込みしてください。終了はCtrl+C。index.htmlを直接開く方法も使えます。

## 編集箇所

- index.html：文章・料金・SEOのtitle/description。ファーストビュー、対象者4件、整理すること、相談例4件、サービス、7ステップの流れ、最終CTA。
- style.css：冒頭のブランドカラー、レスポンシブ表示。動きはホバーのみ。prefers-reduced-motionに対応。
- script.js：冒頭のCONFIG.LINE_URLを1か所変更すれば全3か所のCTAに反映。
- assets/favicon.svg：ブランドアイコン。

LINE URLは https://lin.ee/rs66ISnG を設定済みです。CTAはファーストビュー・サービス内容の後・最下部に配置。未設定・不正なURLでは準備中の案内を表示します。JavaScript無効時は有効化を案内します。

## GitHubと公開

GitHubでのソース保存と、Webページの公開は別の作業です。本リポジトリに自動デプロイ設定は含めていません。

- リポジトリ：https://github.com/yuri-automation/yohaku-plus-lp
- 公開範囲：非公開
- ページ公開：未実施（別途確認後に対応）

公開時はindex.html、style.css、script.js、assets/favicon.svgを同じ相対パスで配信します。ビルド不要。READMEやObsidianの資料は公開対象に含める必要はありません。既存の診断・申込ページとは独立した紹介LPです。
