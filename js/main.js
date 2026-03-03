window.addEventListener('load', () => {
  gsap.registerPlugin(ScrollTrigger);

  //메인섹션
  const main = gsap.timeline(
    {
      defaults: { ease: "power2.out" },
      scrollTrigger: {
        trigger: '#main_section',
        start: 'top 80%',
        toggleActions: 'play reset play reset',
      }
    });

  main
    .to('#main_section .main_img_box img', {
      opacity: 1,
      scale: 1,
      duration: 2.1,
      ease: "power3.out"
    })
    .to('#main_section .main_txt_box p, #main_section .main_txt_box b', {
      opacity: 1,
      y: 0,
      duration: 0.9,
      stagger: 0.5,
      ease: "power2.in"
    }, "-=2.1");

  //night_08
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

//여기 나중에 시간 확인하기
  nightTl.addLabel("nightstart")

  nightTl.to(nightItems, {
    opacity: 1,
    y: 0,
    duration: 1.6,
    stagger: 0.5,
    ease: 'power2.out'
  },'nightstart');

  nightTl.to(areaItems, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0,
    ease: 'power2.out'
  }, 'nightstart+=0.2');


  //memory
  const memoryItems = gsap.utils.toArray('#memory .memory_area > *');

  gsap.set(memoryItems, { opacity: 0, y: -40 });

  const memoryTl = gsap.timeline({
    scrollTrigger: {
      trigger: '#memory',
      start: 'top 50%',
      toggleActions: 'play reset play reset',
      // once: true
    }
  });

  memoryTl.to(memoryItems, {
    opacity: 1,
    y: 0,
    duration: 1.3,
    stagger: 0.7,
    ease: 'power3.out'
  });


  //notice
// notice 텍스트 등장
const noticeTitle = gsap.utils.toArray('#notice .txt_box > *');
gsap.set(noticeTitle, { opacity: 0, y: -20 });

gsap.timeline({
  scrollTrigger: {
    trigger: '#notice',
    start: 'top 50%',
    toggleActions: 'play reset play reset',
  }
}).to(noticeTitle, {
  opacity: 1,
  y: 0,
  duration: 1.6,
  stagger: 0.3,
  ease: 'power3.out'
});

gsap.utils.toArray('.notice_info_frame > div').forEach((el, i) => {
  ScrollTrigger.create({
    trigger: el,
    start: 'top 80%',
    onEnter: () => el.classList.add('show'),
    onEnterBack: () => el.classList.add('show'),
    onLeaveBack: () => el.classList.remove('show')
  });
});

//record
const recordItems = gsap.utils.toArray(
  '#record .record_area > *');
const flowItems = gsap.utils.toArray(
  '#record .flow-wrap .swiper'
)

  gsap.set(recordItems, {opacity:0, y: -40});
  gsap.set(flowItems, {opacity:0, y:-40});

  const recordTl = gsap.timeline({
    scrollTrigger: {
      trigger: '#record',
      start: 'top 80%',
      toggleActions: 'play reset play reset',
    }
  });


  recordTl.to(recordItems, {
    opacity: 1,
    y: 0,
    duration: 1.3,
    stagger: 0.7,
    ease: 'power2.in'
  });

  recordTl.to(flowItems, {
    opacity:1,
    y:0,
    duration: 1.5,
    stagger: 0.5,
    ease: 'power3.out'
  });




});



