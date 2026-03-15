# ip-checker

Deno を使って、クライアントの IP アドレスを記録するサーバーアプリケーションです。

## デモ
[デモサイト](https://code4fukui.github.io/ip-checker/)にアクセスすると、IPアドレスがログファイルに記録されます。

## 機能
- クライアントのIPアドレスを取得
- IPアドレスとアクセス時刻をログファイル(remoteAddr.txt)に保存

## 必要環境
- Deno がインストールされている

## 使い方
1. Denoをインストールします。
2. リポジトリをクローンします。
```sh
git clone https://github.com/code4fukui/ip-checker.git
cd ip-checker
```
3. サーバーを起動します。
```sh
deno serve -A --port 7001 --host "[::]" ip-checker.js
```
4. ブラウザで `http://localhost:7001` にアクセスします。
5. ログファイル `remoteAddr.txt` にIPアドレスが記録されます。

## ライセンス
このプロジェクトは MIT ライセンスの下で提供されています。