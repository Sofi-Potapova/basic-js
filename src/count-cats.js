module.exports = function countCats(a) {
  let k=0
  a=a.flat(Infinity)
  for (let i=0;i<a.length;i++){
  if (a[i]==='^^') k++
  }
  return k;
  };