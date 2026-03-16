# ip-checker

Denoを使ったクライアントのIPアドレスをログファイルに記録するシンプルなWebアプリケーションです。

## 機能
- クライアントのIPアドレスとアクセス時刻をテキストファイル(`remoteAddr.txt`)に記録
- クライアントに"OK"レスポンスを返す

## 必要環境
- [Deno](https://deno.land/)ランタイム環境

## 使い方
1. Denoをインストールします。
2. リポジトリをクローンします:
```sh
git clone https://github.com/code4fukui/ip-checker.git
cd ip-checker
```
3. サーバーを起動します:
```sh
deno serve -A --port 7001 --host "[::]" ip-checker.js
```
4. Webブラウザでアプリケーションにアクセスします。
5. IPアドレスとタイムスタンプが`remoteAddr.txt`ファイルに記録されます。

## ライセンス
このプロジェクトは[MITライセンス](LICENSE)の下で提供されています。