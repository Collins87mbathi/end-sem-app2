import path from "path"
import shelljs from "shelljs"

import { BASE_DIR } from "../../src/config"
const ASSET_OUT_DIR = path.join(BASE_DIR, 'build')
const VIEWS_OUT_DIR = path.join(BASE_DIR, 'build')
const ASSETS_DIR = path.join(BASE_DIR, 'src', 'public')
const VIEWS_DIR = path.join(BASE_DIR, 'src', 'views')
console.log(`Copying assets from ${ASSETS_DIR} to ${ASSET_OUT_DIR}`);


shelljs.cp('-R', path.join(ASSETS_DIR), ASSET_OUT_DIR)
shelljs.cp('-R', path.join(VIEWS_DIR), VIEWS_OUT_DIR)