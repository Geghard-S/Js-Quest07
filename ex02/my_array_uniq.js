/*
**
** QWASAR.IO -- my_array_uniq
**
**
** @param {Integer[]} param_1
** @return {integer[]}
**
*/


function my_array_uniq(numArr) {
    index = 0;
    newArr = []
    while(index < numArr.length){
    	if(newArr.indexOf(numArr[index]) == -1){
    	    newArr.push(numArr[index]);
    	}
        index++;
    }
    return newArr
}