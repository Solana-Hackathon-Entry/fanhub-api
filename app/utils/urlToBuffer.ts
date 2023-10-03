import { get } from "https";

export default function urlToBuffer(url: string): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const data: Uint8Array[] = [];
    get(url, (res) => {
      res
        .on("data", (chunk: Uint8Array) => {
          data.push(chunk);
        })
        .on("end", () => {
          resolve(Buffer.concat(data));
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  });
}
