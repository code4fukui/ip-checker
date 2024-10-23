import { fetchWeb } from "https://code4fukui.github.io/wsutil/fetchWeb.js";
import { DateTime } from "https://js.sabae.cc/DateTime.js";

export default fetchWeb(async (param, req, path, conninfo) => {
  const remoteAddr = conninfo.remoteAddr.hostname;
  console.log(remoteAddr);
  await Deno.writeTextFile("remoteAddr.txt", new DateTime().toString() + "," + remoteAddr + "\n", { append: true });
  return { response: "OK", path, param, remoteAddr };
});
