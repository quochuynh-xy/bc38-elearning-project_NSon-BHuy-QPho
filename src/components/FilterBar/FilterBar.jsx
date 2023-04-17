import { BsFillStarFill, BsCheckLg } from "react-icons/bs";
import "./style.scss";
import { Collapse } from "antd";
const { Panel } = Collapse;
const FilterBar = (props) => {
  const { className = "" } = props || {};
  return (
    <div className={`filter-sider hidden lg:block ${className}`}>
      <Collapse
        defaultActiveKey={[1, 2, 3, 4, 5]}
        bordered={false}
        style={{
          borderTop: "1px solid #00000042",
          borderRadius: "0",
        }}
        expandIconPosition="end"
      >
        <Panel
          key="1"
          className="filter__group"
          header={<p className="font-bold tracking-wider">Đánh giá</p>}
        >
          <div className="group__item flex items-center pb-3">
            <label className="checkbox-container rounded-sm overflow-hidden relative">
              <input className="absolute top-0 left-0" type="checkbox" />
              <span className="checkmark absolute top-0 left-0 flex justify-center items-center">
                <BsCheckLg />
              </span>
            </label>
            <div className="rating flex text-yellow-500 text-xl">
              <BsFillStarFill className="ml-2" />
              <BsFillStarFill className="ml-2" />
              <BsFillStarFill className="ml-2" />
              <BsFillStarFill className="ml-2" />
              <BsFillStarFill className="ml-2" />
            </div>
          </div>
          <div className="group__item flex items-center pb-3">
            <label className="checkbox-container rounded-sm overflow-hidden relative">
              <input className="absolute top-0 left-0" type="checkbox" />
              <span className="checkmark absolute top-0 left-0 flex justify-center items-center">
                <BsCheckLg />
              </span>
            </label>
            <div className="rating flex text-yellow-500 text-xl">
              <BsFillStarFill className="ml-2" />
              <BsFillStarFill className="ml-2" />
              <BsFillStarFill className="ml-2" />
              <BsFillStarFill className="ml-2" />
            </div>
          </div>
          <div className="group__item flex items-center pb-3">
            <label className="checkbox-container rounded-sm overflow-hidden relative">
              <input className="absolute top-0 left-0" type="checkbox" />
              <span className="checkmark absolute top-0 left-0 flex justify-center items-center">
                <BsCheckLg />
              </span>
            </label>
            <div className="rating flex text-yellow-500 text-xl">
              <BsFillStarFill className="ml-2" />
              <BsFillStarFill className="ml-2" />
              <BsFillStarFill className="ml-2" />
            </div>
          </div>
          <div className="group__item flex items-center pb-3">
            <label className="checkbox-container rounded-sm overflow-hidden relative">
              <input className="absolute top-0 left-0" type="checkbox" />
              <span className="checkmark absolute top-0 left-0 flex justify-center items-center">
                <BsCheckLg />
              </span>
            </label>
            <div className="rating flex text-yellow-500 text-xl">
              <BsFillStarFill className="ml-2" />
              <BsFillStarFill className="ml-2" />
            </div>
          </div>
          <div className="group__item flex items-center pb-3">
            <label className="checkbox-container rounded-sm overflow-hidden relative">
              <input className="absolute top-0 left-0" type="checkbox" />
              <span className="checkmark absolute top-0 left-0 flex justify-center items-center">
                <BsCheckLg />
              </span>
            </label>
            <div className="rating flex text-yellow-500 text-xl">
              <BsFillStarFill className="ml-2" />
            </div>
          </div>
        </Panel>
        <Panel
          key="2"
          className="filter__group"
          header={<p className="font-bold tracking-wider">Loại khóa học</p>}
        >
          <div className="group__item flex items-center pb-3">
            <label className="checkbox-container rounded-sm overflow-hidden relative">
              <input className="absolute top-0 left-0" type="checkbox" />
              <span className="checkmark absolute top-0 left-0 flex justify-center items-center">
                <BsCheckLg />
              </span>
            </label>
            <p className="group-item__name">Backend</p>
          </div>
          <div className="group__item flex items-center pb-3">
            <label className="checkbox-container rounded-sm overflow-hidden relative">
              <input className="absolute top-0 left-0" type="checkbox" />
              <span className="checkmark absolute top-0 left-0 flex justify-center items-center">
                <BsCheckLg />
              </span>
            </label>
            <p className="group-item__name">Fullstack</p>
          </div>
          <div className="group__item flex items-center pb-3">
            <label className="checkbox-container rounded-sm overflow-hidden relative">
              <input className="absolute top-0 left-0" type="checkbox" />
              <span className="checkmark absolute top-0 left-0 flex justify-center items-center">
                <BsCheckLg />
              </span>
            </label>
            <p className="group-item__name">Lập trình di động</p>
          </div>
          <div className="group__item flex items-center pb-3">
            <label className="checkbox-container rounded-sm overflow-hidden relative">
              <input className="absolute top-0 left-0" type="checkbox" />
              <span className="checkmark absolute top-0 left-0 flex justify-center items-center">
                <BsCheckLg />
              </span>
            </label>
            <p className="group-item__name">Tư Duy lập trình</p>
          </div>
          <div className="group__item flex items-center pb-3">
            <label className="checkbox-container rounded-sm overflow-hidden relative">
              <input className="absolute top-0 left-0" type="checkbox" />
              <span className="checkmark absolute top-0 left-0 flex justify-center items-center">
                <BsCheckLg />
              </span>
            </label>
            <p className="group-item__name">Web design</p>
          </div>
        </Panel>
        <Panel
          className="filter__group"
          header={<p className="font-bold tracking-wider">Loại khóa học</p>}
          key="3"
        >
          <div className="group__item flex items-center pb-3">
            <label className="checkbox-container rounded-sm overflow-hidden relative">
              <input className="absolute top-0 left-0" type="checkbox" />
              <span className="checkmark absolute top-0 left-0 flex justify-center items-center">
                <BsCheckLg />
              </span>
            </label>
            <p className="group-item__name">Tất cả trình độ</p>
          </div>
          <div className="group__item flex items-center pb-3">
            <label className="checkbox-container rounded-sm overflow-hidden relative">
              <input className="absolute top-0 left-0" type="checkbox" />
              <span className="checkmark absolute top-0 left-0 flex justify-center items-center">
                <BsCheckLg />
              </span>
            </label>
            <p className="group-item__name">Sơ cấp</p>
          </div>
          <div className="group__item flex items-center pb-3">
            <label className="checkbox-container rounded-sm overflow-hidden relative">
              <input className="absolute top-0 left-0" type="checkbox" />
              <span className="checkmark absolute top-0 left-0 flex justify-center items-center">
                <BsCheckLg />
              </span>
            </label>
            <p className="group-item__name">Trung cấp</p>
          </div>
          <div className="group__item flex items-center pb-3">
            <label className="checkbox-container rounded-sm overflow-hidden relative">
              <input className="absolute top-0 left-0" type="checkbox" />
              <span className="checkmark absolute top-0 left-0 flex justify-center items-center">
                <BsCheckLg />
              </span>
            </label>
            <p className="group-item__name">Cao cấp</p>
          </div>
          <div className="group__item flex items-center pb-3">
            <label className="checkbox-container rounded-sm overflow-hidden relative">
              <input className="absolute top-0 left-0" type="checkbox" />
              <span className="checkmark absolute top-0 left-0 flex justify-center items-center">
                <BsCheckLg />
              </span>
            </label>
            <p className="group-item__name">Thượng thừa</p>
          </div>
        </Panel>
      </Collapse>
    </div>
  );
};
export default FilterBar;
/**
 * Sử dụng tại:
 * Trang kết quả tìm kiếm, trang danh sách khóa học
 */
