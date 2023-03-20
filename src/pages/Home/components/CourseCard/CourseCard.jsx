import { Rating } from "@mui/material";
import backUpImg from "../../../../assets/img/blank_wide.jpg";
import "./style.scss";
import "animate.css";
const CourseCard = (props) => {
  const { content } = props || {};
  return (
    <div className="card-item select-none shadow-sm">
      <div className="card-cover">
        <img
          className="cover__img rounded-sm"
          src={content.hinhAnh}
          onError={(e) => (e.target.src = backUpImg)}
          alt={content.tenKhoaHoc}
        />
      </div>
      <div className="card-body">
        <h1 className="title">{content.tenKhoaHoc}</h1>
        <h2 className="athor">{content.nguoiTao.hoTen}</h2>
        <div className="rating flex items-center">
          <div className="rating__avg flex items-center">
            <span className="avg__number font-bold mr-1">5.0</span>
            <Rating
              className="avg__render"
              name="read-only"
              value={5}
              readOnly
            />
          </div>
          <p className="rating__view ml-2 text-xs">({content.luotXem})</p>
        </div>
        <div className="price flex items-center justify-between">
          <p className="price__original line-through text-xs">1.999.999đ</p>
          <p className="price__discount text-base animate__animated animate__pulse animate__infinite animate__slow animate__delay-3s">
            999.000đ
          </p>
        </div>
        <div className="hot h-8">
          <span className="hot__status">Xem nhiều</span>
        </div>
      </div>
    </div>
  );
};
export default CourseCard;
