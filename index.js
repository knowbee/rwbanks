const fs = require("fs");
let banks = [];
let error = null;
try {
  banks = JSON.parse(fs.readFileSync("./data/banks.json", "utf-8"));
} catch (e) {
  error = e;
}
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
