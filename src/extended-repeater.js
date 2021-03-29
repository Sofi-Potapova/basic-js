const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
let { repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|' } = options;
if (typeof str !== 'string') {
str = String(str);
}
if (typeof addition !== 'string') {
addition = String(addition);
}
const repeatedAdd = addition + `${additionSeparator}${addition}`.repeat(additionRepeatTimes - 1);
const result = str + repeatedAdd + `${separator}${str}${repeatedAdd}`.repeat(repeatTimes - 1);
return result;
};
  