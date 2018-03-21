const expect = require('chai').expect;
const json_worker = require('../src/json-worker.js');

describe('JSON Worker', function(){
  describe('smoke tests', function(){
    it('should exist the json-worker lib', function(){
      expect(json_worker).to.exist;
    });

    it('should exist json_worker.createFile method', function(){
      expect(json_worker.createFile).to.exist;
      expect(json_worker.createFile).to.be.a("function");
    })

    it('should exist json_worker.readFile method', function(){
      expect(json_worker.readFile).to.exist;
      expect(json_worker.readFile).to.be.a("function");
    })

    it('should exist json_worker.saveData method', function(){
      expect(json_worker.saveData).to.exist;
      expect(json_worker.saveData).to.be.a("function");
    })

    it('should exist json_worker.updateData method', function(){
      expect(json_worker.updateData).to.exist;
      expect(json_worker.updateData).to.be.a("function");
    })

    it('should exist json_worker.deleteData method', function(){
      expect(json_worker.deleteData).to.exist;
      expect(json_worker.deleteData).to.be.a("function");
    })

  })
  describe('Read or create JSON file', function(){
    it('should create JSON file called album.json', function(){
      
    });
  });
});
