'use strict';

const arr = ['3241235', '423123', '346344634', '29412748926', '34523451', '12897491264', '2298426'];


arr.forEach((elem) => {
    if (elem[0] === '2' || elem[0] === '4') {
        console.log(elem);
    }
});


function funcNumber(n) {
    for (let i = 2; i * i <= n; i === 2 ? i++ : i += 2) if (n % i === 0) return false;
    return n > 1;
}

const allNumbers = [...Array(101)].reduce((a, _, i) => a.concat(funcNumber(i) ? `Делители этого числа: ${i}: 1 и ${i}` : []) , []).join('\n')


console.log(allNumbers);


















