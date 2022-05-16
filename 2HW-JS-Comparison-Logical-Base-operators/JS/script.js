"use strict";

//1
let a = 4;
let c = ++a;
alert(a);

let b = 0;
let d = b++;
alert(b);
alert(c);
alert(d);


//2
let e = 3;
let f = 2;

let x = 1 + (e += 2);
let y = 1 + (f *= 2);

let e = 3;
e += 2;
let x = 1 + (e += 2);
alert(e);
alert(x);

let f = 2;
f *= 2;
let y = 1 + (f *= 2);
console.log(f);
console.log(y);


//3
let year = +prompt('В каком году Англия  была чемпионом по футболу?', '');
if (year < 2011) {
    alert('Статистика еще не велась');
} else if (year == 2022) {
    alert('Сезон еще идет!');
} else if (year > 2022) {
    alert('Все лучшее впереди!');
} else if (year == 2011 || year == 2013) {
    alert('Манчестер Юнайтед');
} else if (year == 2015 || year == 2017) {
    alert('Челси');
} else if (year == 2016) {
    alert('Лестер Сити');
} else if (year == 2020) {
    alert('Ливерпуль');
} else if (year == 2012 || year == 2014 || year == 2018 || year == 2019 || year == 2021) {
    alert('Манчестер Сити');
}
/*year = +prompt('Кто и в каком году был чемпионом Англии по футболу?', '');НЕЛЬЗЯ ИМПОЛЬЗОВАТЬ*/
let message = (year == 2011 || year == 2013) ? 'Манчестер Юнайтед' :
    (year == 2015 || year == 2017) ? 'Челси' :
    (year == 2012 || year == 2014 || year == 2018 || year == 2019 || year == 2021) ? 'Манчестер Сити' :
    (year == 2020) ? 'Ливерпуль' :
    (year == 2016) ? 'Лестер Сити' :
    (year < 2011) ? 'Статистика еще не велась' :
    (year == 2022) ? 'Сезон еще идет!' :
    (year > 2022) ? 'Все лучшее впереди!' : "Ошибка";

alert(message);


//4
let userName = prompt('Кто обращается?', '');
if (userName === 'admin') {

    let pass = prompt('Пароль?', '');

    if (pass === 'Я главный') {
        alert('Здравствуйте!');
    } else if (pass === '' || pass === null) {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }

} else if (userName === '' || userName === null) {
    alert('Отменено');
} else {
    alert('Я вас не знаю');
}


//5
for (let i = 7; i <= 15; i++) {
    if (i % 2 !== 0) {
        alert(i);
    }

    if (i == 12) { break; }
}


//6
j = 0;
while (j < 5) {
    console.log(`number ${j}!`);
    j++;
}