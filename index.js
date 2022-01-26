"use strict";
const resetBtn = document.querySelector(".reset_btn");

const btn_group = document.querySelector(".btn");
const btns = document.querySelectorAll(".rps img");
const game_me = document.querySelector(".game_me");
const game_com = document.querySelector(".game_com");

const user_score = document.querySelector(".score_my");
const com_score = document.querySelector(".score_com");

// 사용자 가위바위보
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", (e) => {
    const img = document.createElement("img");
    if (game_me.children.length == 2) {
      game_me.removeChild(game_me.children[1]);
    }
    img.setAttribute("src", e.target.getAttribute("src"));
    img.setAttribute("name", i);
    game_me.appendChild(img);
  });
}

// 컴퓨터 가위바위보
const com = () => {
  let random = Math.floor(Math.random() * 3);
  const img_com = document.createElement("img");
  if (game_com.children.length == 2) {
    game_com.removeChild(game_com.children[1]);
  }
  img_com.setAttribute("src", btns[random].getAttribute("src"));
  img_com.setAttribute("name", random);
  game_com.appendChild(img_com);
};

// 승부
const getScore = () => {
  const user_img = document.querySelector(".game_me > img");
  const com_img = document.querySelector(".game_com > img");
  let user = parseInt(user_img.name);
  let com = parseInt(com_img.name);
  if (game_me.children.length == 2 && game_com.children.length == 2) {
    if (
      (user == 0 && com == 1) ||
      (user == 1 && com == 2) ||
      (user == 2 && com == 0)
    ) {
      user_score.innerText = parseInt(user_score.innerText) + 1;
    }
    if (
      (user == 1 && com == 0) ||
      (user == 2 && com == 1) ||
      (user == 0 && com == 2)
    ) {
      com_score.innerText = parseInt(com_score.innerText) + 1;
    }
  }
};

// 리셋
resetBtn.addEventListener("click", () => {
  user_score.innerText = 0;
  com_score.innerText = 0;
  if (game_me.children.length == 2 && game_com.children.length == 2) {
    game_me.removeChild(game_me.children[1]);
    game_com.removeChild(game_com.children[1]);
  }
});

// 실행
setInterval(() => {
  com();
  getScore();
}, 700);
