function check() {
  //   document.write("Never give up!");
  let ans = 0;
  let q1 = document.quiz.question1.value;
  let q2 = document.quiz.question2.value;
  let q3 = document.quiz.question3.value;
  let q4 = document.quiz.question4.value;
  let q5 = document.quiz.question5.value;
  let q6 = document.quiz.question6.value;
  let q7 = document.quiz.question7.value;
  let result = document.getElementById("result");
  let quiz = document.getElementById("quiz");
  if (q1 == "Vijay Chavhan") {
    ans++;
  }
  if (q2 == "Tata Motors Ltd") {
    ans++;
  }
  if (q3 == "Hingoli") {
    ans++;
  }
  if (q4 == "Both 1 & 2") {
    ans++;
  }
  if (q5 == "1, 2 & 3 Only") {
    ans++;
  }
  if (q6 == "144") {
    ans++;
  }
  if (q7 == "33") {
    ans++;
  }
  //   document.write(ans);
  quiz.style.display = "none";
  //   result.textContent = `${ans}`;

  if (ans <= 3) {
    result.textContent = `Your result is ${ans}. It is not to good so please try to work on yourself.`;
  } else {
    result.textContent = `Your result is ${ans}. It is awesome. Keep it up.`;
  }
}
