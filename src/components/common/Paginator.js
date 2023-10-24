import usePaginator from "../../libs/hooks/usePaginator";

const Paginator = () => {
  const {
    onClickNext,
    onClickPrev,
    onClickPage,
    pageList,
    isFirst,
    isLast,
    page: currentPage,
  } = usePaginator(150);
  const handleClickPrev = () => {
    if (isFirst) return;
    // onClickPrev
  };
  const handleClickNext = () => {
    if (isLast) return;
    // onClickNext
  };
  const handleClickPage = (page) => {
    if (currentPage === page) return;
    // onClickPage
  };
  return (
    <>
      <span onClick={handleClickPrev}>prev</span>
      <div>
        {pageList?.map((page) => (
          <span
            onClikc={() => handleClickPage(page)}
            key={`page-button-${page}`}
          >
            {page}
          </span>
        ))}
      </div>
      <span onClick={handleClickNext}>next</span>
    </>
  );
};
export default Paginator;
