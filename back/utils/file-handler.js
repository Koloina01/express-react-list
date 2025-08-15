import fs from "fs"
import path from "path";

const readData = (filename) => {
  const filepath = path.join(process.cwd(), "data", filename)
  const fileContent = fs.readFileSync(filepath, "utf-8")
  return JSON.parse(fileContent);
}

const writeData = (filename, data) => {
  const filepath = path.join(process.cwd(), "data", filename)
  fs.writeFileSync(filepath, JSON.stringify(data, null, 2));
}

export { readData, writeData }