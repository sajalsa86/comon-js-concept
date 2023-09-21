/* 
8 ways to get undefined
1. variable that is not initialized will be give undefine
2. function with no return will be give undefine
3. parameter is not passed will be give undefine
4. if return is nothing on the right side will be give undefine
5.property that doest exists on an objects will be give undefine
6.index that doest exists on an array will be give undefine
7.deleting an element inside an array
8. set a value derectly to undefined
*/

//1.
let first;
console.log(first);

//2.
function sum(a, b) {
    a + b;

}
const second = sum(7, 3);
console.log(second)
//3.
function add(a, b, c, d) {
    a + b + c + d;
    console.log(a, b, c, d);
}
add(7, 3);
//4.
function nagetive(a, b) {
    if (a < 0 || b < 0) {
        return;
    }
    return a + b;
}
const foruth = nagetive(7, -3);
console.log(foruth);
//5.
const fifth = { id: 5, name: 'Sajal Hossain' };
console.log(fifth.name, fifth.salary);
//6.
const sixth = [2, 4, 6, 8, 10];
console.log(sixth[1], sixth[5], sixth[200]);
//7.
const seven = [2, 4, 6, 8, 10];
//you should not do it . instead use splice
delete seven[2];
console.log(seven[2]);
//8.
//you should not do it
const eight = undefined;
console.log(eight);

//best way to set value if value is nothing
const nine = null;
console.log(nine);