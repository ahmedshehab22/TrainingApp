
export function parse(){
const fs = require('fs')
csvfile = fs.readFileSync('Students_Data.csv')
const arr = csvfile.toString().split("\n")
console.log(arr)
}
// var jsonObject = [];
// var headers = arr[0].split(',')
// //console.log(headers);
// for(var i=1;i arr.length;i++){
//   var data = arr[i].split(',');
//   var object = {};
//   for(var j=0;j data.length;j++){
//     object[headers[j].trim()] = data[j].trim();
//   }
//   jsonObject.push(object)
// }
