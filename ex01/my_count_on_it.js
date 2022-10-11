/*
**
** QWASAR.IO -- my_count_on_it
**
**
** @param {String[]} param_1
** @return {integer[]}
**
*/


function my_count_on_it(str) {
    index = 0;
    arr = [];
    while(index < str.length){
        arr.push(str[index].length);
        index++;
    }
    return arr;
};