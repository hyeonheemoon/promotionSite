$(function () {
  //풀페이지 스크롤
  let point = 0;
  let noticeTop = $('#notice').offset().top;
  $('#fullpage .section').mousewheel(function (event, delta) {
    if (delta > 0) {
      point = $(this).prev().offset().top;
    } else if (delta < 0) {
      point = $(this).next().offset().top;
    }
    $('html, body').stop().animate({ scrollTop: point }, 1000);
  });

  //헤더 다크모드 이벤트
  $(window).on('scroll', function () {
    const scrollTop = $(this).scrollTop();
    const $notice = notice
    const noticeTop = $('#notice').offset().top;
    const noticeBottom = noticeTop + $('#notice').outerHeight();

    const isDark = (scrollTop >= noticeTop && scrollTop < noticeBottom);

    $('.header').toggleClass('is_dark', isDark);
    $('.sub_menu_area').toggleClass('is-dark', isDark);
  });

  //카드호버했을때 텍스트
  $('.notice_card').hover(
    function () {
      $(this).find('.notice_info_box').addClass('is_hover');
    },
    function () {
      $(this).find('.notice_info_box').removeClass('is_hover');
    }
  );
}); //jquery

