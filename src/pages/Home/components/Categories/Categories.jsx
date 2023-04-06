import "./style.scss";
import category1 from "../../../../assets/img/category1.jpg";
import category2 from "../../../../assets/img/category2.jpg";
import category3 from "../../../../assets/img/category3.jpg";
import category4 from "../../../../assets/img/category4.jpg";
import category5 from "../../../../assets/img/category5.jpg";
import category6 from "../../../../assets/img/category6.jpg";
import category7 from "../../../../assets/img/category7.jpg";
import category8 from "../../../../assets/img/category8.jpg";
import { Link } from "react-router-dom";
const Categories = () => {
  return (
    <div className="categories container mx-auto">
      <div className="categories__title">
        <h3 className="text-center md:text-start">Danh mục các lĩnh vực được quan tâm nhiều tại Edemy.</h3>
      </div>
      <div className="categories__list flex flex-wrap px-14 md:px-8 lg:px-0">
        <div className="list__item basis-6/12 md:basis-3/12 px-2">
          <div className="w-full h-fit overflow-hidden">
            <Link to="/danhMuc/TuDuy" className="w-full">
              <img className="w-full" src={category1} alt="category 1" />
            </Link>
          </div>
          <p className="item-name capitalize font-bold text-stone-600 pt-2 text-sm">
            Tư Duy Lập Trình
          </p>
        </div>
        <div className=" list__item basis-6/12 md:basis-3/12 px-2">
          <div className="w-full h-fit overflow-hidden">
            <Link to="/danhMuc/BackEnd" className="w-full">
              <img className="w-full" src={category2} alt="category 1" />
            </Link>
          </div>
          <p className="item-name capitalize font-bold text-stone-600 pt-2 text-sm">
            Lập Trình Backend
          </p>
        </div>
        <div className=" list__item basis-6/12 md:basis-3/12 px-2">
          <div className="w-full h-fit overflow-hidden">
            <Link to="/danhMuc/FrontEnd" className="w-full">
              <img className="w-full" src={category3} alt="category 1" />
            </Link>
          </div>
          <p className="item-name capitalize font-bold text-stone-600 pt-2 text-sm">
            Lập Trình Frontend
          </p>
        </div>
        <div className=" list__item basis-6/12 md:basis-3/12 px-2">
          <div className="w-full h-fit overflow-hidden">
            <Link to="/danhMuc/DiDong" className="w-full">
              <img className="w-full" src={category4} alt="category 1" />
            </Link>
          </div>
          <p className="item-name capitalize font-bold text-stone-600 pt-2 text-sm">
            Lập Trình Di Động
          </p>
        </div>
        <div className=" list__item basis-6/12 md:basis-3/12 px-2">
          <div className="w-full h-fit overflow-hidden">
            <Link to="/danhMuc/FullStack" className="w-full">
              <img className="w-full" src={category5} alt="category 1" />
            </Link>
          </div>
          <p className="item-name capitalize font-bold text-stone-600 pt-2 text-sm">
            Lập trình FullStack
          </p>
        </div>
        <div className=" list__item basis-6/12 md:basis-3/12 px-2">
          <div className="w-full h-fit overflow-hidden">
            <a href="#url" className="w-full">
              <img className="w-full" src={category6} alt="category 1" />
            </a>
          </div>
          <p className="item-name capitalize font-bold text-stone-600 pt-2 text-sm">
            Cấu Trúc dữ liệu (Sắp ra mắt)
          </p>
        </div>
        <div className=" list__item basis-6/12 md:basis-3/12 px-2">
          <div className="w-full h-fit overflow-hidden">
            <a href="#url" className="w-full">
              <img className="w-full" src={category7} alt="category 1" />
            </a>
          </div>
          <p className="item-name capitalize font-bold text-stone-600 pt-2 text-sm">
            Nghệ thuật (Sắp ra mắt)
          </p>
        </div>
        <div className=" list__item basis-6/12 md:basis-3/12 px-2">
          <div className="w-full h-fit overflow-hidden">
            <Link to="/danhMuc/Design" className="w-full">
              <img className="w-full" src={category8} alt="category 1" />
            </Link>
          </div>
          <p className="item-name capitalize font-bold text-stone-600 pt-2 text-sm">
            Thiết kế web
          </p>
        </div>
      </div>
    </div>
  );
};
export default Categories;
