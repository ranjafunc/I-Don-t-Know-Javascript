"use strict";
let x;
// 타입과 순서와 길이가 맞아야 된다.
x = ["hello", 2];
x[0] = "eee";
// x[0] = 1; error
// x[2] = 34; error
const person = ["mark", 22];
const [a, b] = person;
