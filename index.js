const fs = require("fs");
const { banks } = require("./data");
let error = null;

/**
 * getBanks: find a list of licensed banks
 * @param {function} [callback]
 * @returns {array} banks
 */
exports.getBanks = (callback) => {
  if (typeof callback === "function") {
    return callback(error, banks);
  }
  return banks;
};

/**
 * getBank: find a bank by swift code
 * @param {string} swift_code
 * @param {function} [callback]
 * @returns {object} bank
 */
exports.getBank = (swift_code, callback) => {
  if (!swift_code) {
    return {};
  }
  for (let bank of banks) {
    if (bank["swift_code"] == swift_code) {
      if (typeof callback === "function") {
        return callback(error, bank);
      }
      return bank;
    }
  }
};
