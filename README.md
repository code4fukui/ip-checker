# ip-checker

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A simple Deno web application that logs the IP address and access timestamp of clients.

## Features

- Logs the client's IP address and a timestamp to `remoteAddr.txt` on each request.
- Prints the client's IP address to the console.
- Responds with a JSON object containing the request details.

## Requirements

- [Deno](https://deno.land/) runtime environment

## Usage

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/code4fukui/ip-checker.git
    cd ip-checker
    ```

2.  **Run the server:**
    You can use the provided shell script:
    ```sh
    sh run.sh
    ```
    Or run the command directly:
    ```sh
    deno serve -A --port 7001 --host "[::]" ip-checker.js
    ```

3.  **Access the application:**
    Open your web browser and navigate to `http://localhost:7001`.

## Expected Output

### Browser Response

The server will return a JSON response similar to this:

```json
{
  "response": "OK",
  "path": "/",
  "param": {},
  "remoteAddr": "127.0.0.1"
}
```

### Log File (`remoteAddr.txt`)

A new line will be appended to `remoteAddr.txt` for each request. The file is not tracked by Git.

**Format:** `timestamp,IP_address`

**Example:**
```
2023-10-27T08:45:10.123Z,127.0.0.1
2023-10-27T08:45:15.456Z,::1
```

## License

[MIT License](LICENSE)