// Lab_02.cpp
// < Чучман Володимир >
// Лабораторна робота № 2.
// Лінійні програми.
// Варіант 26

a = prompt("a: ")
console.log(a)
z1 = Math.cos(a) + Math.cos(a * 2) + Math.cos(6 * a) + Math.cos(a * 7); // Розрахунок за першою формулою: z1 = cosa + cos2a + cos6a + cos7a

z2 = 4 * Math.cos(a / 2) * Math.cos(5 * a / 2) * Math.cos(4 * a); // Розрахунок за другою формулою: z2 = 4cosa/2 * cos5a/2 * cos4a
console.log(`z1 = ${z1}`)
console.log(`z2 = ${z2}`)
