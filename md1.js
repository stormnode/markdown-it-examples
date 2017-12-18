require('babel-core/register');
var isJSON = require('is-json');

var md = require('markdown-it')();
// assumes you have markdown-it src code available
// var md = require('./../markdown-it')();

var result = md.parse('hola');
resultjson = JSON.stringify(result, null, 2);

console.log(isJSON(resultjson));
// console.log(resultjson)

result = md.render('_hola_')
console.log(result);
