import { IProduct } from "./types/IProduct";
import fs from "fs";

export const xmlConverter = (arr: IProduct[]) => {
  let xml = `
  <?xml version="1.0" encoding="UTF-8"?>
    <rss xmlns:pj="https://schema.prisjakt.nu/ns/1.0" xmlns:g="http://base.google.com/ns/1.0" version="3.0">
    <channel>
    <title>Tand hygenist shoppen</title>
    <description>Product feed from DB</description>
`;

  arr.forEach((prod) => {
    xml += `
    <item>
      <g:id>${prod.id}</g:id>
      <g:title>${prod.title}</g:title>
      <g:price>${prod.price} SEK</g:price>
      <g:stockLevel>${prod.stockLevel}</g:stockLevel>
    </item>
    `;
  });

  xml += `
  </channel>
</rss>`;

  fs.writeFileSync("./src/xml/prisjakt-feed.xml", xml);
};
