interface HeaderTitleProps {
  title: string;
  isResult: boolean;
}

const HeaderTitle = ({ title, isResult }: HeaderTitleProps) => {
  if (!isResult) return <h2>"{title}" 검색 결과가 없습니다.</h2>;

  return <h2>{title ? `"${title}" 검색 결과` : "지금 인기 있는 영화"}</h2>;
};

export default HeaderTitle;
