// ボタンとレベル表示の更新
function updateButton() {
  btn.textContent = `1/${1/Prob}`;
  levelEl.textContent = `レベル: ${level}`;
}

// スコア更新
function updateScore() {
  scoreEl.textContent = "スコア: " + score;
}

// 結果表示
function showResult(text, color) {
  result.textContent = text;
  result.style.color = color;
}

// タイマー表示
function updateTimer() {
  if (countdown > 0) {
    timerEl.textContent = `次のボタンまで: ${countdown}s`;
  } else {
    timerEl.textContent = "";
  }
}
