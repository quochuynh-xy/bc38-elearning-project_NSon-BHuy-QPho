import "animate.css";
import "./style.scss";
// import { stringTrimmer } from "../../../../utilities/util";
import { AiOutlineCheck, AiOutlineHeart } from "react-icons/ai";
const CardOverview = () => {
  return (
    <div className="card-quickview absolute shadow-md rounded-md">
      <div className="quickview__head">
        <h3 className="head__name">{"content.tenKhoaHoc"}</h3>
        <p className="head__update">
          <span className="font-light">Cập nhật:</span> {"content.ngayTao"}
        </p>
        <p className="head__total-time my-1">
          40+ bài giảng - Mọi trình độ - Kèm tài liệu
        </p>
      </div>
      <div className="quickview__body">
        <p className="body__des mt-2">{"stringTrimmer(content.moTa, 70)"}</p>
        <ul className="mt-2">
          <li>
            <AiOutlineCheck className="inline-block mr-2" /> Bài giảng được cập
            nhật liên tục.
          </li>
          <li>
            <AiOutlineCheck className="inline-block mr-2" /> Giảng viên nhiệt
            huyết, với kinh nghiệm trên 30 năm.
          </li>
          <li>
            <AiOutlineCheck className="inline-block mr-2" /> Mentor hỗ trợ 24/7
            bất kỳ lúc nào, miễn có internet.
          </li>
        </ul>
      </div>
      <div className="quickview__actions flex items-center mt-4">
        <button className="actions__btn-sub flex-1 mr-2">Đăng ký</button>
        <button className="actions__btn-love rounded-full flex justify-center items-center">
          <AiOutlineHeart />
        </button>
      </div>
    </div>
  );
};
export default CardOverview;
