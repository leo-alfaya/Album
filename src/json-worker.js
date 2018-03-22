import fs from 'fs';
import path from 'path';

const createFile = (dirname, name) => {
  let filePath = path.join(dirname, name);

  if(!fs.existsSync(filePath)){
    fs.writeFileSync(filePath, JSON.stringify({teste:"teste salvando arquivo"}));
  } else {
    return('This file already exists');
  }


}

const deleteFile = (dirname, name) => {
  fs.unlinkSync(path.join(dirname, name));
}

const readFile = () => {}
const saveData = () => {}
const updateData = () => {}
const deleteData = () => {}

export {createFile, deleteFile, readFile, saveData, updateData, deleteData}
