export const commonFunctionPath = () => {
  if (window.location.pathname==="/") {
    document.title="자기소개 페이지"
  } else if (window.location.pathname==="/skill") {
    document.title="기술 기재 페이지"
  } else if (window.location.pathname==="/contact") {
    document.title="연락처 페이지"
  } else {
    document.title="잘못 이동된 페이지"
  }
}