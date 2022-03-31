/*************Test******************/
var test = require('unit.js');
var str = 'Hello, world!';

test.string(str).startsWith('Hello1');

if (test.string(str).startsWith('Hello1')) {
    console.log('Passed');
}