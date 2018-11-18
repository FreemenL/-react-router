const pathToRegexp = require("path-to-regexp");
const str = 'user/detail/:id/:name';

let keys = [];
let reg = pathToRegexp(str,keys,{end:true});
keys = keys.map(key=>key.name)
const uri = 'user/detail/1/de';
let result = uri.match(reg);
let [url,...values] = result;

let params = keys.reduce((memo,key,index)=>{
	memo[key] = values[index];
	return memo;
},{})

console.log(uri==url);
console.log(keys);
