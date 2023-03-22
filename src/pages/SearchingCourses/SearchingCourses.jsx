import { useEffect } from "react";
import Layout from "../../HOCs/Layout";
// import FilterBar from "./components/FilterBar/FilterBar";
const SearchingCourses = () => {
  useEffect(() => {
    document.title = "Edemy - Tìm kiếm";
  }, []);
  const Item = () => {
    return (
      <div className="preview w-4/5 ml-auto flex border-b border-solid border-stone-200 pt-4 pb-4">
        <div className="img basis-4/12">
          <img
            className="w-full h-36 object-cover rounded-sm border-slate-200 border-4 border-solid"
            src="https://picsum.photos/300/400"
            alt="Hình ảnh khóa học"
          />
        </div>
        <div className="content relative pl-4">
          <div className="content__price absolute right-0 top-0 bottom-0 py-2 mr-4 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-xl text-purple-800 tracking-wider leading-5">
                FREE
              </h3>
              <div className="text-stone-600 font-semibold line-through">
                1.200.000đ
              </div>
            </div>
            <div className="action">
              <button className="font-bold text-stone-800 border-stone-800 h-10 w-24 border border-solid hover:bg-stone-200 duration-300">
                Đăng ký
              </button>
            </div>
          </div>
          <div className="content__info pr-40">
            <h1 className="content__name text-xl font-bold">
              Hiệu quả kinh doanh Online
            </h1>
            <h2 className="content__des leading-5 indent-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              exercitationem non a fugiat ullam illum omnis? Excepturi facilis
              saepe ipsam!
            </h2>
            <p className="content__author pt-3 pb-1 text-purple-800 font-semibold text-sm">
              Huấn Hoa Hồng
            </p>
            <p className="text-sm text-stone-600">
              35 bài học - 6 chương - Cơ bản
            </p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <Layout>
      <div className="search-result container mx-auto mt-20">
        <div className="search-result__item grid grid-cols-2 lg:grid-cols-1">
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
        </div>
      </div>
    </Layout>
  );
};
export default SearchingCourses;
