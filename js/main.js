/* 사용할 요소를 먼저 찾아야 한다 요소가 document객체에서HTML에서 찾기 !! /메소드실행/문자데이터형태/인수로 [클래스.search]  css선택자로 검색 */
/* 검색 써치 돋보기 작업 */ 
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input'); /* .search 클래스 선택자에 [input 태그] 검색 */

searchEl.addEventListener('click', function() { /*써치라는 클래스를 갖고있는  div요소를 클릭하면 클릭함수 실행 함수를 핸들러라고 말한다 --> 익명함수 function(){} 사용  */
    // Logic 
    searchInputEl.focus() //검색부분 인풋요소에 포커스함수 실행 
}); 

searchInputEl.addEventListener('focus', function(){ //핸들러
   
    // Logic                             --> [아주중요] javascript 클래스 추가 focused ---> css에 연결 header .sub-menu .search.focusexd .material-icons { 선택자
    searchEl.classList.add('focused'); //클래스리스트객체추가후 메서드 실행 add : 해석:특정요소의 클래스정보를 갖고있는 객체에서 클래스내용을 추가하겠다 focused 포커스가 된상태 [검색부분] 
    searchInputEl.setAttribute('placeholder', '통합검색'); //(Attribute html 속성) 셋팅 [힌트설정]
});

searchInputEl.addEventListener('blur', function(){ //핸들러 --> [blur 포커스 해지] 
    // Logic 
     searchEl.classList.remove('focused'); //클래스리스트객체추가후 메서드 실행 remove : 특정요소의 클래스정보를 갖고있는 객체에서 클래스내용을 삭제하겠다 focused 포커스가 된상태 해지 [검색부분]
     searchInputEl.setAttribute('placeholder', ''); //(Attribute html 속성) 셋팅 [힌트설정해지 '' 빈값]
 });
 
 //[헤더와 드롭다운 메뉴-전역배지 연결]
 //[html자체]document부분에.쿼리셀럭트를실행.특정요소찾기
 //선택자는 배지를 만들면서 작성해둔 부분들
const badgeEl = document.querySelector('header .badges');
// toTopEl 먼트를 상단에 배치하므로서 아래서 요소를 따로 찾을필요 없어 toTopEl 변수를 이용해서 사용하면 된다     1.변수에 할당하는 방법과 2.css요소에 id 선택자를 사용하는 방법 2개가 있다 
const toTopEl = document.querySelector('#to-top');
//[브라우저창window객체 : 프로젝트가 출력하고 있는 화면자체 ]
//브라우저객체에 이벤트를실행 핸들러 function() {} --> 익명함수를 통해 실행시킬것.
//스크롤을 계속 실행할때마다 함수가 수십개의 함수가 동시에 실행되서 외부 라이브러리를 통해서 제어 시킨다
// 1아래 함수를 이용해서 사용할수 있는방법 2 메소드를 이용해서 하는방법 
// window.addEventListener('scroll', function () { 
//     console.log('scroll!');
// }); 아래하단 2번 소스 메소드사용
// 밀리세컨트 300은 0.3초 0.3단위로 부화를 주어서 함수가 우르르 실행하는것을 방지한것 _.throttle`
// _.throttle(함수, 시간)을 추가한다.

// 즉! badgeEl 요소를 찾아서 변수에 담아서 gasp.to(요소, 지속시간, 옵션); 요소를 넣어서 적용시켰다.
window.addEventListener('scroll', _.throttle(function() {
    //console.log('scroll!');
    console.log(window.scrollY);
    
    if (window.scrollY > 500) {//배지숨기기
     //badgeEl.style.display = 'none'; //참고용 badgeEl변수는 요소이고 html 전역속성을 사용하듯이 style속성을 사용후 css속성 display 
     //gsap라이브러리 적용 gsap.to(요소, 지속시간, 옵션);
     gsap.to(badgeEl, .6, {
       opacity: 0,  //객체데이터
       display: 'none' // 문자로 입력해야하는 값들은 '' 사용 
    }); // ** 외부의 javascript는 라이브러리는 옵션으로 객체데이터를 사용한다 {} 사용
    /* 최종강의 Gsap javascript 스크롤투플러그인 버튼보이기! */
    gsap.to(toTopEl, .2, { //gsap.to('#to-top', .2, { 이렇게 사용해도 된다
        x: 0 // x옵션 추가 오른쪽으 100px 이동 한걸 보이게 0으로 위치 조정 [요소의 원래위치]
    });  
    }else{// 배지 보여주기 
       // badgeEl.style.display = 'block';
       //gsap라이브러리 적용 
       gsap.to(badgeEl, .6, {
        opacity: 1,  //객체데이터
        display: 'block'
    });
    /* 최종강의 Gsap javascript 스크롤투플러그인 버튼숨기기! */ 
    // gsap의.to(); 메서드를 실행 애니메이션을 제어하고자 하는 그요소를 명시해주면 된다
    // gsap.to() 메서드는 변수로 할당에서 안넣어도 된다 css 선택자를 활용하면 된다  css id 선택자 활용 #to-top 요소 , 지속시간, 옵션
    gsap.to(toTopEl, .2, { // gsap.to('#to-top', .2, { 이렇게 써도 된다
        x: 100 // x옵션 추가 오른쪽으 100px 이동  [요소의 오른쪽으로 사라지는 위치]
    });  
  }
}, 300));

/* 최종강의 버튼을 눌렀을시 최상단으로 이동하는 javascript */

 // 위치이동 상단으로 const toTopEl = document.querySelector('#to-top');
 // 변수에.메세드실행( 인수로는 /클릭이벤트/익명의함수 적용) 클릭하면 익명의 함수를 실행하겠다 익명의 함수를 이벤트핸들러라고 명한다
    toTopEl.addEventListener('click', function(){
        gsap.to(window, .7, { //window객체를 사용하는데 여기서 window란 페이지가 출력되고 있는 화면자체 하나의 창을 말한다 두번째 인수는 움직여지는 시간 
        //옵션추가
        scrollTo: 0 // 화면의 위치를 0px 위치로 옮겨진다  옵션을 사용하기 위해서 cdn 플러그인을 가져와서 연결해서 scrollTo 옵션을 사용함 
        }); 
    });


//[gsap순차적애니메이션작업 visual(몸통에 있는 이미지들 순차적으로 보이게 만들기)]
const fadeEls = document.querySelectorAll('.visual .fade-in'); // 변수에 인수값들 담는데 .visual클래스요소의 후손으로 .fide-in 클래스들을 다 변수에 담는다
fadeEls.forEach(function (fadeEl, index) { //직관적으로 fade-in 요소를 반복적으로 돌리거고 횟수를 index로 사용함 
    gsap.to(fadeEl, 1, { // 애니메이션 라이브러리 메소드 gsap.to(요소, 지속시간-초단위, 옵션-객체데이터{});
        delay: (index + 1) * .7, /* 0.7초 --> fade-in 모든요소에 적용되서 0.7초 앞에다 값을 곱해준다 index값은 0 1 2 3 4 0*0.7 하면 0이여서 +1를 해주므로 1 2 3 4 반복한수 있게 작업해준 소스이다 0.7초 배수로 실행이 된다 1번2번3번4번 사진*/
        opacity: 1 //javascript 실행하면 오퍼씨티값이 1이 되도록 설정 fade-in css에서 오퍼씨티값을 0으로 설정해두었다 
    });           
});

// [swiper 슬라이드  javascript]
// new 키워드는 자바스크립트 생성자(클래스) 
// new Swiper(선택자, 옵션)
/**
 * 슬라이드 요소 관리 공지사항 글귀작업
 */
 new Swiper('.notice-line .swiper-container', {
    direction: 'vertical', // 수직 슬라이드
    autoplay: true,  //자동 재생 여부 ** 아래 하단에 autoplay 값을 적용해서 객체데이터를 이용해 속성을 부여해서 슬라이드 속도를 제어한다 
    loop: true // 반복 재생 여부
  })
/**
 * 슬라이드 중간사진 작업
 */
new Swiper('.promotion .swiper-container', {
   /* direction: 'horizontal'  direction horizontal 기본값이 있다 수평 */
   slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
   spacceBetween: 10, // 슬라이드 사이 여백
   centeredSlides: true, // 1번 슬라이드가 가운데 보이기 
   loop: true, // 반복적으로 슬라이드 재생시키기 !!!!!!!!!!!!!!!!!!!! 주석이든 소스가 있든 다음 속성소스를 적용실킬때 , 무조건 필수 작성해야한다
// autoplay: true, { // 객체데이터를 활용해서 속성이용하기 
// delay: 5000   500:은 0.5초 delay 기본값은 3000 3초 
// !!!!!! 무조건 javascript 다음칸에 소스먹일때 , 적용시켜야 한다  }
/**
 * 슬라이드 중간사진 작업쪽에 ........ pagination 과 [이전 다음] 버튼 작업 
 */ 
pagination: {
    el: '.promotion .swiper-pagination',  // 스와이퍼페이지네이션 요소를 선택자로 인식하고 페이지네이션 번호 요소 선택자로 사용이 가능하다 Swiper
    clickable: true  // 사용자의 페이지 번호 요소 제어 
   }, // 페이지네이션 옵션이 끝나고 다음꺼 적용할때 , 무조건 사용한다 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
   navigation: {
    prevEl: '.promotion .swiper-prev', // prev 이전 , 선택자를 명시 
    nextEl: '.promotion .swiper-next' // next 다음 , 선택자를 명시 
   }
}); 
/* HTML 13번째 작업과 연결 [다중 요소 슬라이드 작업] AWARDS */
new Swiper('.awards .swiper-container', { // HTML section .awrads 내부에 swiper-container클래스 요소 찾아서 여기에 슬라이드 기능 추가. --> {} 객체데이터 사용 
   // direction: 'horizontal' 수평을 의미하는 문자데이터가 이미 기본값으로 할당이 되어있다
       autoplay: true, //자동재생
       loop: true, //반복 재생 여부
       spaceBetween: 30, // 사이사이 여백을 30px 
       slidesPerView: 5,  // 하나의 화면에 몇개의 슬라이드들이 보일거냐
       navigation: {
        prevEl: '.awards .swiper-prev', // awards section에 있는 swiper-prev 클래스 연결 사용
        nextEl: '.awards .swiper-next' // awards section에 있는 swiper-next 클래스 연결 사용
    }
    }); 
/**
 * 슬라이드 중간사진 작업쪽에 토글
 */ 
//       변수     = 다큐먼트객체[요소]쿼리셀렉트 요소선택
const promotionEl = document.querySelector('.promotion');   // 설명1. : .promotion클래스를 갖은 요소 찾아서 변수에 할당
//         버튼                          요소를찾을것 토글프로모션
const promotionToggleBtn = document.querySelector('.toggle-promotion'); //설명2: .toggle-promotion클래스를 갖은 요소를 찾아서 변수에 할당
let isHidePromotion = false; //보이고 있다는 뜻
// 설명: 프로모션 토글버튼을 클릭하면 함수가 실행되고 isHidePromotion 값이 있을텐데 그변수의 반대되는 값을 집어넣어라 
promotionToggleBtn.addEventListener('click', function(){  // 이벤트핸들러 함수 () {}
    isHidePromotion = !isHidePromotion //!느낌표뒷쪽 값에 반대가 되게 해주세요라는 명령어 true 값을 isHidePromotion에 들어가는것 [특정변수의값을 반대값으로 반환하는 방법]
    if(isHidePromotion) { // true값이 들어오면 
        //숨김처리
        promotionEl.classList.add('hide'); // 프로모션요소에 hide라는 클래스 추가 , hide라는 클래스가 promotion에 있는경우 화면안보이게 처리하면 된다 
    }else {
        //보임처리 
        promotionEl.classList.remove('hide'); // true 반대값이 false 니까 보임처리로 요소가 다시 보일수 있는 구조 , 클래스 추가 / 빼고 css에서 연결해서 제어를 한다.
    }
});
/**
 * 유튜브 영상 배경 - 반복 애니메이션 화명 둥둥떠다니는 이미지 처리 
 */ 

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }
function floatingObject(selector, delay, size) { // 함수선언 호출될때 인수로 선택자 개념으로 selector 요소 받아서 사용
   // gsap.to(요소, 시간, 옵션);  gsap이라는 javascript 라이브러리 활용해서 만든다
   gsap.to(selector, random(1.5, 2.5), { // to() 메서드를 실행하겠다 1.매개변수할당 외부에서받은 selector 인수 , 1 시간 , 객체데이터 {} 옵션 1시간을 상위 random() 함수로 변경
    y: size, // y축으로 얼마만큼 움직이는지 지정 애니메이션 [다음속성 넣을때 , 사용] size: 아래 .floating1 , 2, 3 에 맞춰 15 15 20 값이 들어간다
    repeat: -1,
    yoyo: true, // 한번 재생된 애니메이션을 다시 뒤돌린다 위 아래 내려오면 아래 위로 움직임
    ease: Power1.easeInOut, //요소 움직임 자연스럽게 하기위해서 https://greensock.com/docs/v2/Easing 소스 가져다 사용하였다
    delay: random(0, delay) // 몇초뒤에 애니메이션을 실행하겠다 지연효과 1초 3초 지정이였는데 random() 사용
}); 
}                                    // (명확하게 인수 이름 명시) --> 상위 selector, delay, size
floatingObject('.floating1', 1, 15); // 함수 실행하면서 css 선택자를 인수로 넣어줘야 한다
floatingObject('.floating1', 0.5, 15);
floatingObject('.floating1', 1.5, 20);
/*
스크롤매직 라이브러리
spyEls s복수의 요소를 찾는다
*/
//  document객체에서 쿼리셀렉트올 메서드 실행 선택자를 연결 / html단에 scroll-spy 클래스 섹션이 있다면 그요소들을 전부 찾아서 spyEls 변수에 할당 
// .forEach() 함수에 function (){}  사용 하단에 참고
// new라는 키워드를 사용해서 javascript 외부라이브러리 실행시킨다. new 명령어
// {} 안으로 들어오는 데이터는 객체데이터 
/*

총설명!!!!!!!!!!!  감시하려고 하는 각각의 섹션부분에 스크롤스파이 클래스들은 spyEls 변수에 할당이 될것이고 포이치로 반복적으로 처리를 하는데, 반복될때 spyEl 매개변수값이 있을것
spyEl 먼트는 곧 내가 감시할 하나의 섹션이 되는것 이다 
new ScrollMagic triggerElemnt: 옵션에 내가 감시할 spyEl먼트를 추가하면 된다  trigger : 무엇인가를 강제적으로 일으킨다
*/
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){              // .setClassToggle() 어떠한 클래스를 넣고 빼고 제어함 .addTo() 스크롤매직을 사용하기 위해서 컨트롤러개념에 내용을 추가하기위해서 메서드 사용해야한다
     new ScrollMagic                        // 스크롤매직이라는 javascript 라이브러리를 통해서 특정한 요소를 감시하는 옵션을 지정하는 메서드 두번째로 메서드체이닝을 통해서 메서드 추가
        .Scene({
            triggerElement: spyEl,  // section.부분에 scroll-spy라고 class가 있는 그요소들중에 하나를 할당해준다 spyEl [보여짐 여부를 감시할 요소를 지정]
            triggerHook: .8
        })                        
        .setClassToggle(spyEl, 'show') //.Scene 에서 화면에서 보여진다고 판단이 된후 .setClassToggle() 실행이 된다 요소2개 지정 토글할 요소 
        .addTo(new ScrollMagic.Controller());  //실행한 스크롤매직에서 컨트롤러 내부에 할당해서 실제로 동작할수 있는 구조를 만들어주는것 
});
/* 푸터쪽 년도 계산 */
// HTMl 클래스 요소 찾기 쿼리셀럭트올 .this-year 클래스 찾기
//const thisYear = document.querySelector('.this-year'); 
//thisYear요소의 textContent : 글자내용들의 값을 알아내던가 , 값을 지정할수 있다 
//thisYear.textContent = new Date().getFullYear(); new Date() 생성자함수 Date객체를 활용 객체안에 들어가 있는 메소드 사용 
/**
 * 올해가 몇 년도인지 계산
 */
 const thisYear = document.querySelector('.this-year')
 thisYear.textContent = new Date().getFullYear()


 