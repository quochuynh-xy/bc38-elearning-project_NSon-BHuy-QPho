import "./style.scss";
import Layout from "../../HOCs/Layout";
import Pagination from "../../components/Pagination/Pagination";
import ItemWide from "../../components/CourseItemWide/ItemWide";
import { fetchKhoaHocPhanTrang } from "./services";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Spin } from "antd";
import { BsFilter } from "react-icons/bs";
import Header from "../../components/Header/Header";
const AllCourses = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loadedData, setLoadedData] = useState({});
  const [courseArr, setCourseArr] = useState([]);
  const [loadStatus, setLoadStatus] = useState("PENDING"); // PENDING - DONE - FAIL
  useEffect(() => {
    const pageNumber = searchParams.get("page");
    fetchKhoaHocPhanTrang(pageNumber)
      .then((res) => {
        setLoadStatus("DONE");
        setLoadedData(res.data);
        setCourseArr(res.data.items);
      })
      .catch((err) => {
        console.log(err);
        setLoadStatus("FAIL");
      });
  }, [searchParams]);
  const handleChangePage = (page, pageSize) => {
    setSearchParams({ ...searchParams, page: page });
    setLoadStatus("PENDING");
  };
  return (
    <Layout>
      <Header />
      <section className="search-info container mx-auto py-8">
        <h3 className="text-stone-800 text-2xl font-bold pb-4">
          Danh sách khóa học tại Edemy.
        </h3>
        <div className="search-info__action flex items-end justify-between">
          <div className="search-info-action__actions">
            <button className="flex items-center justify-center text-2xl border-2 border-solid border-stone-900 h-14 w-32 hover:bg-stone-200 duration-200">
              <BsFilter />
              <span className="pl-3 text-base font-bold">Bộ lọc (2)</span>
            </button>
          </div>
          <h3 className="search-info-action__result text-xl text-stone-600 font-bold">
            {/* {searchResult.length} kết quả */}
          </h3>
        </div>
      </section>
      <section className="container mx-auto">
        {courseArr.map((item, index) => (
          <ItemWide key={index} data={item} />
        ))}
        <div className="h-8 text-center relative">
          {loadStatus !== "DONE" ? (
            <Spin className="absolute text-center" />
          ) : null}
        </div>
        <Pagination
          current={loadedData.currentPage}
          total={loadedData.totalCount}
          hideOnSinglePage={false}
          pageSize={10}
          onChange={handleChangePage}
        />
      </section>
    </Layout>
  );
};
export default AllCourses;
