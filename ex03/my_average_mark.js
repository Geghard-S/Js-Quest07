/*
**
** QWASAR.IO -- my_average_mark
**
**
** @param {String_integer[]} param_1
** @return {float}
**
*/


function my_average_mark(hash) {
    index = 0;
    total = 0;
    avr = 0;
    while(index < hash.length){
        total += hash[index].integer;
        index++;
    }
    avr = parseFloat(total / index);
    avrF = avr.toFixed(1);
    return avrF;
};