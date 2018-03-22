import fs from 'fs';
import path from 'path';

const createFile = (dirname, name) => {
  fs.writeFileSync(path.join(dirname, name), JSON.stringify({teste:"teste salvando arquivo"}));
}

const deleteFile = (dirname, name) => {
  fs.unlinkSync(path.join(dirname, name));
}

const readFile = () => {}
const saveData = () => {}
const updateData = () => {}
const deleteData = () => {}

export {createFile, deleteFile, readFile, saveData, updateData, deleteData}
