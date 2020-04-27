const { getBanks, getBank } = require("../index");
const fs = require("fs");
const chai = require("chai");
const assert = chai.assert;
describe("rwbanks", () => {
  let banks = [];

  before(function(done) {
    banks = JSON.parse(
      fs.readFileSync(process.cwd() + '/data/banks.json', 'utf8')
    );
    done();
  });

  it('should get a list of banks', function(done) {
    assert.deepEqual(getBanks(), banks);
    done();
  });

  it('should get a list of banks with callback', function(done) {
    getBanks((err, data) => {
      assert.deepEqual(data, banks);
      done();
    });
  });

  it('should get a bank by swift code', function(done) {
    assert.deepEqual(getBank('BKIGRWRW'), {                                      
      name: 'BANK OF KIGALI LIMITED',      
      swift_code: 'BKIGRWRW',              
      bank_code: 'BKIG',                   
      address: 'KN 4 Ave, Kigali, Rwanda', 
      postal_code: '175',                  
      phone_number: '+250788143000',       
      toll_free: '4455',                   
      email_address: 'bk@bk.rw',           
      ussd_code: '*334#'                   
    });
    done();
  });

  it('should get a bank by swift code with callback', function(done) {
    getBank('BKIGRWRW', function(err, data) {
      assert.deepEqual(data, {                                      
        name: 'BANK OF KIGALI LIMITED',      
        swift_code: 'BKIGRWRW',              
        bank_code: 'BKIG',                   
        address: 'KN 4 Ave, Kigali, Rwanda', 
        postal_code: '175',                  
        phone_number: '+250788143000',       
        toll_free: '4455',                   
        email_address: 'bk@bk.rw',           
        ussd_code: '*334#'                   
      });
    });
    done();
  });
  it('should return undefined with false swift code', function(done) {
    assert.deepEqual(getBank('554'), undefined);
    done();
  });
});
