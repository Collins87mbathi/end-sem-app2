import { BASE_DIR } from '../../src/config';
import path from 'path';
import shelljs from 'shelljs';

const ASSET_OUT_DIR = path.join(BASE_DIR, 'build','src');
const VIEWS_OUT_DIR = path.join(BASE_DIR, 'build','src');
const ASSETS_DIR = path.join(BASE_DIR, 'src', 'public');
const VIEWS_DIR = path.join(BASE_DIR, 'src', 'views');

shelljs.cp('-R', path.join(ASSETS_DIR), ASSET_OUT_DIR);
shelljs.cp('-R', path.join(VIEWS_DIR), VIEWS_OUT_DIR);