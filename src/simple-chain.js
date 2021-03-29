const CustomError = require("../extensions/custom-error");

const chainMaker = {
chain: new Array(),

getLength() {
return this.chain.length
},
addLink(value) {
if(value === "undefiened"){
value='( )'
}else
{
value='( ' + value + ' )'
this.chain.push(value)
return this
}
},
removeLink(position) {
if(typeof(position)=='number' && position>0 && position<this.chain.length )
{
this.chain.splice(position-1,1)
return this
}else {
this.chain=[];
throw Error;
}
},
reverseChain() {
this.chain.reverse()
return this
},
finishChain() {
let answer=this.chain.join('~~')
this.chain=[]
return answer
}
};

module.exports = chainMaker;