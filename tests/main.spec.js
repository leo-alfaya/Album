import chai from 'chai';
import path from 'path';
import fs from 'fs';
import { createFile, deleteFile, readFile, saveData, updateData, deleteData } from '../src/json-worker';

const expect = chai.expect;

chai.use(require('chai-fs'));

describe('JSON Worker', function(){
  var dirname;
  var fileName;

  before(function(){
      dirname = path.normalize(`${path.dirname(__dirname)}/tests/data`);
      fileName = "teste.json";
  })

  after(function(){
    fs.unlinkSync(path.join(dirname, fileName));
  });

  describe('smoke tests', function(){
    it('should exist jsonWorker createFile method', function(){
      expect(createFile).to.exist;
      expect(createFile).to.be.a("function");
    });

    it('should exist jsonWorker createFile method', function(){
      expect(deleteFile).to.exist;
      expect(deleteFile).to.be.a("function");
    });

    it('should exist jsonWorker readFile method', function(){
      expect(readFile).to.exist;
      expect(readFile).to.be.a("function");
    });

    it('should exist jsonWorker saveData method', function(){
      expect(saveData).to.exist;
      expect(saveData).to.be.a("function");
    });

    it('should exist jsonWorker updateData method', function(){
      expect(updateData).to.exist;
      expect(updateData).to.be.a("function");
    });

    it('should exist jsonWorker deleteData method', function(){
      expect(deleteData).to.exist;
      expect(deleteData).to.be.a("function");
    });
  });

  describe('createFile()', function(){
    it('should create the teste.json file if it does not exists', function(){
      expect(dirname).to.be.a.directory().and.not.have.contents([fileName]);
      createFile(dirname, fileName);
      expect(dirname).to.be.a.directory().with.contents([fileName]);
    });

    it('should alert when trying to create an existing file', function(){
      expect(createFile(dirname, fileName)).to.equal('This file already exists');
    });
  });

  describe('deleteFile()', function(){
    var fileName_delete;

    before(function(){
      fileName_delete = "teste_delete.json";
    });

    it('should delete the teste.json file', function(){
      createFile(dirname, fileName_delete);
      deleteFile(dirname, fileName_delete);
      expect(dirname).to.be.a.directory().and.not.have.contents([fileName_delete]);
    });

    it('should alert when trying to delete a nonexistent file', function(){
      expect(deleteFile(dirname, fileName_delete)).to.equal('This file does not exist');
    });
  });

});
