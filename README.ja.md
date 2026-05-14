# ip-checker

クライアントのIPアドレスとアクセスタイムスタンプを記録するシンプルなDeno Webアプリケーションです。

## 機能

- リクエストごとにクライアントのIPアドレスとタイムスタンプを `remoteAddr.txt` に記録します。
- クライアントのIPアドレスをコンソールに出力します。
- リクエストの詳細を含むJSONオブジェクトを返します。

## 要件

- [Deno](https://deno.land/) ランタイム環境

## 使い方

1.  **リポジトリのクローン:**
    ```sh
    git clone https://github.com/code4fukui/ip-checker.git
    cd ip-checker
    ```

2.  **サーバーの起動:**
    付属のシェルスクリプトを使用できます:
    ```sh
    sh run.sh
    ```
    または、直接コマンドを実行します:
    ```sh
    deno serve -A --port 7001 --host "[::]" ip-checker.js
    ```

3.  **アプリケーションへのアクセス:**
    Webブラウザを開き、`http://localhost:7001` にアクセスします。

## 出力例

### ブラウザでのレスポンス

サーバーは以下のようなJSONレスポンスを返します:

```json
{
  "response": "OK",
  "path": "/",
  "param": {},
  "remoteAddr": "127.0.0.1"
}
```

### ログファイル (`remoteAddr.txt`)

リクエストごとに `remoteAddr.txt` に新しい行が追記されます。このファイルはGitの管理対象外です。

**形式:** `タイムスタンプ,IPアドレス`

**例:**
```
2023-10-27T08:45:10.123Z,127.0.0.1
2023-10-27T08:45:15.456Z,::1
```

## ライセンス

[MIT License](LICENSE)
