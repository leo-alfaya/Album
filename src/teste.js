import path from 'path';
import fs from 'fs';
import { createFile } from './json-worker';

let dirname = path.normalize(`${path.dirname(__dirname)}/data`);
let fileName = "teste.json";

let filePath = path.join(dirname, fileName);

createFile(dirname, fileName);
fs.writeFileSync(filePath,
  JSON.stringify({
    teste:"teste_1",
    teste_2:[2,3,4],
    teste_3:{teste_4:"tste_4", teste_5:"teste_5"}
  })
);

let result = fs.readFileSync(filePath);

console.log(JSON.parse(result));
