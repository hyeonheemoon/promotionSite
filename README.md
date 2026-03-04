# ⭐ 진주 국가유산야행 프로모션 사이트

 진주시 국가유산야행 프로모션 웹사이트를 기획·제작하고, GSAP을 활용한 다이내믹한 인터랙션을 구현,
기존의 일정 및 프로그램 중심 정보 구조에서 벗어나 프로모션형 UX를 도입했으며, 일회성 이벤트 홍보를 넘어 정보 아카이빙 기능을 갖춘 공식 웹사이트로 재구성한 프로젝트입니다.

---

## 📸 Demo

![demo](./images/demo.png)

---

## 🚀 Features

* 🎵 음악 플레이 기능
* 📃 플레이리스트 표시
* ▶️ 카드 클릭 시 플레이어 변경
* ⏸️ 재생 / 정지 기능

---

## 🛠 Tech Stack

* HTML
* CSS
* JavaScript
* jQuery

---

## 📂 Project Structure

```
project-name
│
├─ index.html
├─ css
│   └─ style.css
├─ js
│   └─ main.js
├─ images
│   └─ demo.png
└─ README.md
```

---

## ⚙️ Installation

```bash
git clone https://github.com/username/project-name.git
cd project-name
```

브라우저에서 `index.html` 실행

---

## 💡 주요 코드

```javascript
playlist.forEach((track) => {
  const card = `<div class="track_list">${track.title}</div>`;
  $(".playlist").append(card);
});
```

---

## 📌 TODO

* [ ] 다음곡 기능
* [ ] 볼륨 조절
* [ ] 모바일 UI 개선

---

## 👨‍💻 Author

GitHub: https://github.com/username
