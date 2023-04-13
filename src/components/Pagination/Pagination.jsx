import { Pagination as AntPagination } from "antd";
import "./style.scss"
const Pagination = (props) => {
  const {
    className,
    current,
    hideOnSinglePage = true,
    pageSize = 8,
    total = 50,
    onChange,
  } = props || {};
  const handleChange = (page, pageSize) => {
    onChange && onChange(page, pageSize)
  }
  return (
    <AntPagination
      className={`text-center ${className}`}
      current={current}
      total={total}
      hideOnSinglePage={hideOnSinglePage}
      pageSize={pageSize}
      onChange={handleChange}
    />
  );
};
export default Pagination;
