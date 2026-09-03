//Вывести сегодняшнюю дату в формате:
//День/Месяц/Год Часы:Минуты:Секунду - Например 02/05/2026 22:15:30

const now = new Date();

const day = now.getDate().toString().padStart(2, "0");
const month = now.getMonth() + 1;
const year = now.getFullYear();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

console.log(`${day}/${month}/${year} ${hours}:${minutes}:${seconds}`);
