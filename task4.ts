const order = "Order#1456; date=2026-01-26 09:07:05; amount=15.3";

// преобразовать строку в формат:
// Заказ № 1456 от 26/01/2026 09:07 на сумму 16 рублей

const parts = order.split("; "); // разбивка строки
let num = ""; // номер заказа
let dateStr = ""; // дата и время
let amountStr = "0"; // сумма

//если части кто-то поменял местами?
for (const part of parts) {
  if (part.startsWith("Order#")) {
    num = part.split("#")[1] ?? ""; //забираем номер 1456
  } else if (part.startsWith("date=")) {
    dateStr = part.split("=")[1] ?? ""; // дата и время
  } else if (part.startsWith("amount=")) {
    amountStr = part.split("=")[1] ?? "0"; // сумма
  }
}

const dateParts = dateStr.split(" "); // дата и время - разбивка по " "
const datePart = dateParts[0] ?? ""; // только дата
const timePart = dateParts[1] ?? ""; // только время
const ymd = datePart.split("-"); // дата - разбивка по "-"
const year = ymd[0] ?? ""; // год
const month = ymd[1] ?? ""; // мсеяц
const day = ymd[2] ?? ""; // день
const time = timePart.slice(0, 5); //время без секунд
const amount = Math.ceil(parseFloat(amountStr)).toString(); // сумма с округлением вверх

const result = `Заказ № ${num} от ${day}/${month}/${year} ${time} на сумму ${amount} рублей`;

console.log(result);
