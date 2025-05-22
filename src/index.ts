import { connection } from "./database/connection";
import { xmlConverter } from "./xmlConverter";

const getAllProducts = async () => {
  const conn = await connection;
  const [rows]: any = await conn.execute("SELECT * FROM products");
  return rows;
};

let arr = await getAllProducts();

xmlConverter(arr);
