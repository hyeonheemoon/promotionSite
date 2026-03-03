const mainBtns = document.querySelectorAll('.night_08_all .info_img_box');
const nightAll = document.querySelector('.night_08_all');
const nightArea = document.querySelectorAll('.night_08_area');
const detailBtns = document.querySelectorAll('.night_info_box .detail')

nightArea.forEach((area) => {
  area.style.display = 'none';
});

mainBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    nightAll.style.display = 'none';
    nightArea.forEach((area) => {
      area.style.display = 'none';
    });

    nightArea[index].style.display = 'block';
    currentIndex = index;
  });
});

detailBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    nightArea.forEach((area) => {
      area.style.display = 'none';
    });
    nightAll.style.display = 'block';
  });
});

const nextBtns = document.querySelectorAll('.night_08_area .next');
const prevBtns = document.querySelectorAll('.night_08_area .prev');

let currentIndex = 0;

function showNight(index) {
  nightArea.forEach((area) => {
    area.style.display = 'none';
  });
  nightArea[index].style.display = 'block';
  currentIndex = index;
}

nextBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (currentIndex < nightArea.length - 1) {
      showNight(currentIndex + 1);
    }
  });
});
prevBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (currentIndex > 0) {
      showNight(currentIndex - 1);
    }
  });
});


$(function () {
  $('.header_gnb li').mouseover(function () {
    $('.sub_menu_area').addClass('is-open');
  });
  $('.header_gnb_li, .sub_menu_area').mouseleave(function () {
    $('.sub_menu_area').removeClass('is-open');
  });
});

