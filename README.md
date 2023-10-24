- 페이지네이션 로직 분리
  : usePaginator(커스텀 훅), Paginator(UI)로 분리해놓으면 다른 페이지에서도 재활용이 가능합니다. 전체적인 구조만 잡아서 파일로 작성해놨으니 빈 부분만 채워주시면 됩니다.
    ( /libs/hooks/usePaginator.js, /components/common/Paginator.js 경로 참고)

- axios 로직 분리
  : 지난 세션때 피드백드렸던 코드 참고해서 리팩토링 부탁드립니다. 그리고 useEffect 내부에 바로 로직을 선언하지말고 함수를 호출하는 형식으로 바꿔주시면 가독성에 훨씬 좋습니다.