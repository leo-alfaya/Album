import path from 'path';
import fs from 'fs';
import { createFile } from './json-worker';

let dirname = path.normalize(`${path.dirname(__dirname)}/data`);
let fileName = "teste.json";

let filePath = path.join(dirname, fileName);

createFile(dirname, fileName);
