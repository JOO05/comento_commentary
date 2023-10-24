import { useCallback, useMemo, useState } from "react";

/**
 * @param {number} totalElements Server로 부터 받아오는 컨텐츠의 total 개수
 * @param {number} defaultPage
 * @param {number} divider 페이지 블록을 보여주는 단위 (default: 10)
 * @returns {{onClickPage: (page: number) => void, onClickNext: () => void, onClickPrev: () => void, isLast: boolean, isFirst: boolean, pageList: number[], page: number }}
 */
const usePaginator = (totalElements = 0, defaultPage = 1, divider = 10) => {
  const [page, setPage] = useState(defaultPage); // 현재 페이지 Number

  const onClickPage = useCallback(() => {
    // setPage
  }, []);
  const onClickNext = useCallback(() => {
    // setPage
  }, []);
  const onClickPrev = useCallback(() => {
    // setPage
  }, []);

  const isFirst = useMemo(() => false, []);
  const isLast = useMemo(() => false, []);

  /**
   * @type {number[]} 실제 페이지 블록 UI를 생성할 수 있게 만드는 리스트 데이터
   * @description /components/common/Paginator.js 참고
   */
  const pageList = useMemo(() => {
    // page, totalElements, divider를 통해 정의
    return [];
  }, []);

  return {
    onClickPage,
    onClickNext,
    onClickPrev,
    isLast,
    isFirst,
    page,
    pageList,
  };
};
export default usePaginator;
