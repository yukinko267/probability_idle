// 初期化
updateButton();
updateScore();

// クリック処理
btn.addEventListener("click", () => {
  // カウントダウン中
  if(!canClick){
    showResult("⌛ まだ待って！", "orange");
    return;
  }

  // 成功判定(Prob, score, level)
  const success = Math.random() < Prob;
  if(success){
    score++;
    level++;
    Prob /= 2; // 成功確率を半分に
    showResult("Success", "lime");
  } else {
    showResult("defeat", "red");
  }

  updateScore();
  updateButton();

  // クールダウン開始
  canClick = false;
  countdown = 3;
  updateTimer();

  countdownInterval = setInterval(() => {
    countdown--;
    if(countdown > 0){
      updateTimer();
    } else {
      clearInterval(countdownInterval);
      canClick = true;
      updateTimer();
    }
  }, 1000);
});
