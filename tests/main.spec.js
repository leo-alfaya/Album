import * as chai from 'chai';
import { createFile, deleteFile, readFile, saveData, updateData, deleteData } from '../src/json-worker.js';
import * as path from 'path';

const expect = chai.expect;

chai.use(require('chai-fs'));

describe('JSON Worker', function(){
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

  describe('Create JSON file', function(){
    let dirname;
    let fileName;

    before(function(){
      dirname = path.normalize(`${path.dirname(__dirname)}/data`);
      fileName = "teste.json";
    });

    it('should not exist the teste.json file', function(){
      expect(dirname).to.be.a.directory().and.not.have.contents([fileName]);
    });

    it('should create the teste.json file', function(){
      createFile(dirname, fileName);
      expect(dirname).to.be.a.directory().with.contents([fileName]);
    });

    after(function(){
      deleteFile(dirname, fileName);
    })
  });
});
