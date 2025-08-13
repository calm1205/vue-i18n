import * as fs from "fs"
import * as yaml from "js-yaml"
import * as path from "path"
import { fileURLToPath } from "url"

// ESM で __dirname 相当を作る
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

try {
  // ファイルの絶対パスを取得
  const filePath = path.resolve(__dirname, "ja.yaml")

  // ファイルを同期的に読み込む
  const fileContents = fs.readFileSync(filePath, "utf8")

  // YAML をパース
  const config = yaml.load(fileContents)
  console.log(config)
} catch (e) {
  console.error(e)
}
