import { useEffect, useState } from "react";
import Layout from "../../HOCs/Layout";
import Header from "../../components/Header/Header";
import CourseItemSmall from "../../components/CourseItemSmall/CourseItemSmall";
import { useSelector } from "react-redux";
import _ from "lodash";
import Pagination from "../../components/Pagination/Pagination";
import { useSearchParams } from "react-router-dom";
const UserProfile = () => {
  const subscribedCoures = useSelector(
    (store) => store.authReducer.userInfo.chiTietKhoaHocGhiDanh
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const [splittedData, setSplittedData] = useState([]);
  const [displayPage, setDisplayPage] = useState(1);
  const itemsPerPage = 8;
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
      watchingPage < splittedData.length &&
      watchingPage
    ) {
      setDisplayPage(watchingPage);
    } else {
      setDisplayPage(1);
    }
  }, [searchParams, splittedData.length]);
  const ControlDisplay = () => {
    if (_.isEmpty(splittedData)) {
      return <h3>Bạn chưa đăng ký khóa học nào tại Edemy</h3>;
    } else {
      return splittedData[displayPage - 1].map((item, index) => {
        return (
          <CourseItemSmall
            key={index}
            maKhoaHoc={item.maKhoaHoc}
            tenKhoaHoc={item.tenKhoaHoc}
            hinhAnh={item.hinhAnh}
            danhGia={item.danhGia}
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
    <Layout>
      <Header />
      <section className="mylearning bg-stone-900">
        <div className="learning-header container mx-auto pt-10 text-stone-100 ">
          <h3 className="header__title lg:text-3xl font-bold font-serif pb-6">
            Khóa học của tôi
          </h3>
          <div className="header__tabs-list-control font-bold text-start text-base pb-2">
            <ul>
              <li>Khóa học đã đăng ký</li>
            </ul>
          </div>
        </div>
        <div className="learning__tabs bg-white pt-4">
          <div className="container mx-auto grid gap-4 grid-cols-2 lg:grid-cols-4 ">
            <ControlDisplay />
          </div>
          <div className="mt-4">
            <Pagination
              current={displayPage}
              hideOnSinglePage={false}
              pageSize={itemsPerPage}
              total={subscribedCoures.length}
              onChange={handleChangePage}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default UserProfile;
