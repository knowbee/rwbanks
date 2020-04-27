const { getBanks, getBank } = require("./index");
console.log(getBanks()); // get a list of all licensed banks
getBanks((error, banks) => {
  console.log(banks);
});

 // get a bank by swiftcode
getBank("BKIGRWRW", function (error, bank) {                                        
  console.log(bank);
});
console.log(getBank("BKIGRWRW"));
// {                                        
//   name: 'BANK OF KIGALI LIMITED',        
//   swift_code: 'BKIGRWRW',                
//   bank_code: 'BKIG',                     
//   address: 'KN 4 Ave, Kigali, Rwanda',   
//   postal_code: '175',                    
//   phone_number: '+250788143000',         
//   toll_free: '4455',                     
//   email_address: 'bk@bk.rw',             
//   ussd_code: '*334#'                     
// }                                        
