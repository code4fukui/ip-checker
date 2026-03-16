# ip-checker

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A simple web application that logs the IP addresses of clients accessing the server.

## Features
- Logs the client's IP address and timestamp to a text file (`remoteAddr.txt`)
- Serves a simple "OK" response to the client

## Requirements
- [Deno](https://deno.land/) runtime environment

## Usage
1. Install Deno
2. Clone the repository:
```sh
git clone https://github.com/code4fukui/ip-checker.git
cd ip-checker
```
3. Run the server:
```sh
deno serve -A --port 7001 --host "[::]" ip-checker.js
```
4. Access the application in your web browser
5. The IP address and timestamp will be logged in the `remoteAddr.txt` file

## License
MIT License — see [LICENSE](LICENSE).