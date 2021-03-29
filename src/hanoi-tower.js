module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let res={
  turns: Math.pow(2,disksNumber) -1,
  seconds: Math.floor((Math.pow(2,disksNumber) -1)/(turnsSpeed/3600))
  }
  return res
  };
