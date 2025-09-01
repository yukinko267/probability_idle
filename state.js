// HTML要素
const btn = document.getElementById("tryBtn");
const result = document.getElementById("result");
const scoreEl = document.getElementById("score");
const timerEl = document.getElementById("timer");
const levelEl = document.getElementById("level");

// ゲーム状態
let score = 0;
let canClick = true;
let countdown = 0;
let countdownInterval;

let level = 1;
let Prob = 0.5; // 最初は1/2