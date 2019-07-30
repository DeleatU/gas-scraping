# GASでスクレイピング
Google Apps Scriptを使ってInstagramのフォロワー数の推移をSpreadSheetに書き出します。

Google SpreadSheetにこのスクリプトを設置
「ツール」＞「スクリプトエディタ」

それぞれ任意の値を入力します。 
```
const instaUrl = 'https://www.instagram.com/インスタアカウント名/';
```

```
const SSId = 'スプレッドシートのID';
```

```
const tblSheetName = 'シート名';
```

Google SpreadSheetの任意のシートにグラフを設定します。  
グラフの参照範囲はスクリプトが反映される範囲にしてください。

これで「現在のプロジェクトのトリガー」からトリガー設定をします。  
自分の好きな間隔でトリガーを設定してください。
