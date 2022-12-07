// Youtube IFrame API를 비동기로 로드합니다.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// onYouTubePlayerAPIReady 함수 이름은,
// Youtube IFrame Player API에서 사용하는 이름이기 때문에,
// 다르게 지정하면 동작하지 않습니다!
// 그리고 함수는 전역(Global) 등록해야 합니다!
function onYouTubePlayerAPIReady() {
  // <div id="player"></div>
  new YT.Player('player', { // HTML id속성에 값이 들어가는것 요소를 찾는다, #붙여서 아이디선택자는 사용안됨
    videoId: 'An6LvWQuj_8', // 최초 재생할 유튜브 영상 ID
    playerVars: { /* 영상을 재생하기위한 변수 옵션들 */
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID 목록
    },
    events: { // {} 객체데이터 안에 함수가 적용되어 있으면 메서드 라고 칭한다
      // 영상이 준비되었을 때,
      onReady: function (event) { 
        event.target.mute() // event 매개변수에는 타겟속성이있고 영상자체를 이야기한다 target 또 뮤트는 음소거!
      }
    }
  })
}