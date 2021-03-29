const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

if(typeof(+sampleActivity)==='number'&&typeof(sampleActivity)==='string'){
let t=Math.log(MODERN_ACTIVITY/+sampleActivity)/(0.693/HALF_LIFE_PERIOD)
if(t>=0&&t!=Infinity) return Math.ceil(t)
else return false
}
return false
};