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

/* 푸터 부분 올해가 몇년도인지 출력하는 javascript */
 const thisYear = document.querySelector('.this-year')
 thisYear.textContent = new Date().getFullYear()
