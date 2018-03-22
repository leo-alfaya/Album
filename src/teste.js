import path from 'path';
import fs from 'fs';
import { createFile } from './json-worker';

let dirname = path.normalize(`${path.dirname(__dirname)}/data`);
let fileName = "teste.json";

let filePath = path.join(dirname, fileName);

fs.exists(filePath)
  .then(console.log('This file already exists'))
  .catch(console.log('This file does not exist'))
