import fs from 'fs';
import path from 'path';

const createFile = (dirname, name) => {
  let filePath = path.join(dirname, name);

  if(!fs.existsSync(filePath)){
    try {
      fs.writeFileSync(filePath, JSON.stringify({}));
    } catch(err) {
      console.log(err);
    }
  } else {
    return('This file already exists');
  }
}

const deleteFile = (dirname, name) => {  try {
    fs.unlinkSync(path.join(dirname, name));
  } catch(err) {
    return('This file does not exist');
  }

}


const saveData = () => {}
const readFile = () => {}
const updateData = () => {}
const deleteData = () => {}

export {createFile, deleteFile, readFile, saveData, updateData, deleteData}
