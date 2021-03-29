module.exports = function createDreamTeam(members) {
  if(Array.isArray(members)){
  // members=members.flat(Infinity)
  let k=0
  let name=''
  for(let i=0;i<members.length;i++){
  if(typeof(members[i])==='string'){
  while(members[i][k]===' '){
  k++
  }
  name=name+members[i][k]
  k=0}
  
  }
  return name.toUpperCase().split('').sort().join('')
  }
  return false
  };