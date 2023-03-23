import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ItemWide from "../../components/CourseItemWide/ItemWide";
import { actionFetchKhoaHocTheoDanhMuc } from "./courseGroupReducer";
import FilterBar from "../../components/FilterBar/FilterBar";
import Layout from "../../HOCs/Layout";
import "animate.css";
const CourseGroup = () => {
  const courseList = useSelector(
    (state) => state.courseGroupReducer.danhSachKhoaHoc
  );
  const loadingStatus = useSelector(
    (store) => store.courseGroupReducer.loadStatus
  );
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    document.title = "Danh mục khóa học - Edemy";
  }, []);
  useEffect(() => {
    const action = actionFetchKhoaHocTheoDanhMuc(params.tenDanhMuc);
    dispatch(action);
  }, [dispatch, params.tenDanhMuc]);
  const controlDisplay = () => {
    if (loadingStatus === "PENDING") {
      return (
        <div className="pt-12 text-center text-xl italic">
          <p className="animate__animated animate__bounce animate__infinite">
            Đang tải dữ liệu, vui lòng chờ trong giây lát...
          </p>
        </div>
      );
    } else {
      return courseList.map((item, index) => (
        <ItemWide data={item} key={index} />
      ));
    }
  };
  return (
    <Layout>
      <FilterBar className="pt-16"/>
      <div className="container mx-auto pt-16">
        <div className="ml-auto lg:w-4/5 pl-3">{controlDisplay()}</div>
      </div>
    </Layout>
  );
};
export default CourseGroup;
