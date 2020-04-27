# rw-banks
[![Build Status](https://travis-ci.com/knowbee/rwbanks.svg?token=yN9jXnk59suszMqNsJJb&branch=master)](https://travis-ci.com/knowbee/rwbanks)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)

A lightweight npm package that can be used to get list of licensed banks from Rwanda and their corresponding swift code, address, contact information, ussd code and bank code.

## Installation

```
yarn add rw-banks
```

or

```
npm i rw-banks --save
```

or

## Usage
```js
const { getBanks, getBank } = require("rw-banks");
```

## Examples

```js
const { getBanks, getBank } = require("rw-banks");

const banks = getBanks(); // array of licensed banks
getBanks((error, banks) => {
  console.log(banks); // array of licensed banks with callback
});

// get bank by swift code
const bank = getBank("BKIGRWRW");
getBank("BKIGRWRW", (error, bank) => {
  console.log(bank);
});

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
```

## Contribution

- Please before making a PR, read first this [Contributing Guideline](./CONTRIBUTING.md)

## License

MIT

## Author

Igwaneza Bruce
