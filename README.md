# ⭐ 진주 국가유산야행 프로모션 사이트

 진주시 국가유산야행 프로모션 웹사이트를 기획·제작하고, GSAP을 활용한 다이내믹한 인터랙션을 구현,
기존의 일정 및 프로그램 중심 정보 구조에서 벗어나 프로모션형 UX를 도입했으며, 일회성 이벤트 홍보를 넘어 정보 아카이빙 기능을 갖춘 공식 웹사이트로 재구성한 프로젝트입니다.

---

## 📸 Demo

[진주시 국가유산야행 프로모션 사이트](https://hyeonheemoon.github.io/promotionSite/)

---

## 🛠 Tech Stack

* HTML
* CSS
* JavaScript
* jQuery
* GSAP

---

## 📂 Project Structure

```
project
 ├─ CSS
 ├─ font
 ├─ images
 ├─ js
 │   ├─ full_page.js
 │   ├─ main.js
 │   ├─ mainClick.js
 │   └─ swiper.js
 └─ index.html
```

---


## 💡 주요 코드

```let point = 0;
  let noticeTop = $('#notice').offset().top;
  $('#fullpage .section').mousewheel(function (event, delta) {
    if (delta > 0) {
      point = $(this).prev().offset().top;
    } else if (delta < 0) {
      point = $(this).next().offset().top;
    }
    $('html, body').stop().animate({ scrollTop: point }, 1000);
  });
```
## 🔎 구현 목적

* 마우스 휠 동작 시 **한 섹션씩 이동하는 Fullpage 형태의 인터랙션** 구현
* 일반 스크롤이 아닌 **섹션 단위 스냅 이동 UX** 구현


## ⚙️ 구현 방식

* `mousewheel` 이벤트를 활용하여 휠 방향을 감지
* `delta` 값을 기준으로 이동 방향 판단

```javascript
delta > 0  → 이전 섹션
delta < 0  → 다음 섹션
```

* 현재 섹션 기준 `prev()` / `next()` 의 `offset().top` 값을 계산
* `animate()` 를 사용하여 **약 1초 동안 부드럽게 스크롤 이동**
* `stop()` 을 사용하여 **연속 휠 입력 시 애니메이션 중첩 방지**

---

``` $(window).on('scroll', function () {
    const scrollTop = $(this).scrollTop();
    const $notice = notice
    const noticeTop = $('#notice').offset().top;
    const noticeBottom = noticeTop + $('#notice').outerHeight();

    const isDark = (scrollTop >= noticeTop && scrollTop < noticeBottom);

    $('.header').toggleClass('is_dark', isDark);
    $('.sub_menu_area').toggleClass('is-dark', isDark);
  });
```
## 🔎 구현 목적

* #notice 구간에 진입했을때 헤더 스타일을 라이트에서 다크로 자동전환
* 스크롤 위치 기반 UI 상태 제어


## ⚙️ 구현 방식

* 현재 스크롤 위치를 기준으로 (scrollTop)
* #notice 섹션의 시작점과 끝지점을 계산 (offset().top), (top + outerHeight()) 해서 해당 구간 안에 스크롤이 위치하면 isDark 클래스를 토글해서 처리함

  <img width="1000" height="949" alt="image" src="https://github.com/user-attachments/assets/f93bf514-4221-4330-95ff-f6ef95adbdfa" />

---

``` //night_08
  const nightItems = gsap.utils.toArray(' #night_08 .night_08_all > *');
  const areaItems = gsap.utils.toArray(
    '#night_08 .night_08_area > *'
  );

  gsap.set(nightItems, { opacity: 0, y: 40 });
  gsap.set(areaItems, { opacity: 0, y: 40 });

  const nightTl = gsap.timeline({
    scrollTrigger: {
      trigger: '#night_08',
      start: 'top 80%',
      toggleActions: 'restart none restart none',
      // once: true
    }
  });
```
## 🔎 구현 목적

* 섹션 진입시에 내부 요소들이 아래에서 위로 올라오며 페이드인 되게 구현하기
* 스크롤 기반 인터랙션을 강화함


## ⚙️ 구현 방식

* gsap.utils.toArray()로 배열로 변환함.
* gsap.set(..., { opacity: 0, y: 40 }); 로 애니메이션 시작 전 요소를 아래로 40px 이동하고 opacity 0으로 초기화함. 깜박이는걸 방지하기 위해서 css 대신에 js에서 초기 상태를 제어함
* scrollTrigger 설정은 start: 'top 80%’ 으로 섹션의 top 80퍼 지점에 도달하면 실행함 사용자 시야를 고려하였음
* toggleActions: 'restart none restart none’ 으로 스크롤 업/ 다운시에 다시 재생이 가능

---

## 👨‍💻 Author

성장하는 모습을 보이겠습니다!
