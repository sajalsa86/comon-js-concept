
/* 
true:
1.true
2. any number (+ve, -ve) will be truthy other than 0
3. any string other than empty string
4. if '0', 'false' will be truthy, beacuse this is a string
5. empty object and array also will be truthy
false:
1.false
2. if 0 will be false
3. empty '' string will be false
4. all undefined  and null will be false
*/

const x = -5;
if (x) {
    console.log('The value of x is truthy');
}
else {
    console.log('The value of x is falsy');
}


//check false
const a = null;
if (!a) {
    console.log('Value is Falsy');
};

//check truthy
const b = [];
if (!!b) {
    console.log('Value is truthy');
};