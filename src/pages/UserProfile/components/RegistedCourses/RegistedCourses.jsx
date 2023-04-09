import { useEffect, useState } from "react";
import CourseItemSmall from "../../../../components/CourseItemSmall/CourseItemSmall";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import Swal from "sweetalert2";
import Pagination from "../../../../components/Pagination/Pagination";
import { useSearchParams } from "react-router-dom";
import { requestHuyGhiDanh } from "../../services";
import { autoLogin } from "../../../Authentication/services";
import { actionGetUserInfo } from "../../../Authentication/authReducer";
const RegistedCourses = () => {
  const dispatch = useDispatch();
  const subscribedCoures = useSelector(
    (store) => store.authReducer.userInfo.chiTietKhoaHocGhiDanh
  );
  const userInfo = useSelector(
    (store) => store.authReducer.userInfo.userBasicInfo
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const [splittedData, setSplittedData] = useState([]);
  const [displayPage, setDisplayPage] = useState(1);
  const itemsPerPage = 8;
  const handleCancelRegistration = async (maKhoaHoc) => {
    const token = localStorage.getItem("elearningToken");
    const data = {
      maKhoaHoc: maKhoaHoc,
      taiKhoan: userInfo.taiKhoan,
    };
    try {
      await requestHuyGhiDanh(data, token);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Hủy đăng ký thành công",
        showConfirmButton: false,
        timer: 2000,
      });
      let newUserData = await autoLogin(token);
      dispatch(actionGetUserInfo(newUserData.data));
    } catch (error) {
      alert("xảy ra lỗi");
      console.log(error);
    }
  };
  useEffect(() => {
    document.title = "Trang cá nhân";
  }, []);
  useEffect(() => {
    if (
      subscribedCoures.length <= itemsPerPage &&
      !_.isEmpty(subscribedCoures)
    ) {
      setSplittedData([subscribedCoures]);
    } else {
      let chunked = _.chunk(subscribedCoures, itemsPerPage);
      setSplittedData(chunked);
    }
  }, [subscribedCoures, itemsPerPage]);
  useEffect(() => {
    const watchingPage = +searchParams.get("page");
    if (
      !isNaN(watchingPage) &&
      watchingPage <= splittedData.length &&
      watchingPage
    ) {
      setDisplayPage(watchingPage);
    } else {
      setDisplayPage(1);
    }
  }, [searchParams, splittedData.length]);
  const ControlDisplay = () => {
    if (_.isEmpty(splittedData)) {
      return (
        <h3 className="col-span-4 text-center text-purple-700 font-bold text-2xl pt-14">
          Bạn chưa đăng ký khóa học nào tại Edemy!
        </h3>
      );
    } else {
      return splittedData[displayPage - 1] && splittedData[displayPage - 1].map((item, index) => {
        return (
          <CourseItemSmall
            key={index}
            maKhoaHoc={item.maKhoaHoc}
            tenKhoaHoc={item.tenKhoaHoc}
            hinhAnh={item.hinhAnh}
            danhGia={item.danhGia}
            actionHuyKhoaHoc={handleCancelRegistration}
          />
        );
      });
    }
  };
  const handleChangePage = (page, pageSize) => {
    setSearchParams({ ...searchParams, page: page });
    setDisplayPage(page);
  };
  return (
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 ">
        <ControlDisplay />
        <div className="mt-4 text-center col-span-full">
          <Pagination
            current={displayPage}
            hideOnSinglePage={true}
            pageSize={itemsPerPage}
            total={subscribedCoures.length}
            onChange={handleChangePage}
          />
        </div>
      </div>
  );
};
export default RegistedCourses;
