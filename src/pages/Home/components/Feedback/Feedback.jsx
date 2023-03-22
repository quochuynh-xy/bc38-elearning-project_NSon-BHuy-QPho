import { Carousel, Avatar } from "antd";
import avatarImg from "../../../../assets/img/feedback_avatar.jpg";
import { FaQuoteLeft, FaPlay } from "react-icons/fa";
import "./style.scss"
const Feedback = () => {
  const Item = () => {
    return (
      <div className="content__item p-4 border border-solid border-slate-300 shadow-md select-none active:cursor-grab">
        <div className="item__text text-stone-700 border-b border-solid border-stone-300">
          <p className="text-xl">
            <FaQuoteLeft />
          </p>
          <p className="text-sm py-4 indent-1">
            Lúc trước phá của bố mẹ 10 tỷ, lớn lên tiếp tục mắc sai lầm và phá
            thêm 10 tỷ nữa, sau khi tập trung học tại <b>Edemy</b> một thời
            gian, giờ đây thu nhập của tôi là 50 tỷ mỗi tháng.{" "}
            <b>Tôi làm được và bạn cũng vậy</b>, đó là thông điệp tôi muốn nhắn
            gửi.
          </p>
          <div className="avatar flex items-center pb-4">
            <Avatar size={"large"} src={<img src={avatarImg} alt="avatar" />} />
            <h3 className="text-base font-semibold pl-3">Jonny Được</h3>
          </div>
        </div>
        <a
          href="#url"
          className="item__action pt-4 flex items-center text-violet-800 hover:text-violet-900 duration-300"
        >
          <button>
            <span className="rounded-full text-base text-white bg-violet-800 border w-10 h-10 flex items-center justify-center">
              <FaPlay className="inline" />
            </span>
          </button>
          <p className="basis-9/12 font-bold leading-5 text-base pl-2">
            Trở thành người thành công ngay hôm nay...
          </p>
        </a>
      </div>
    );
  };
  const config = {
    draggable: true,
    slidesToShow: 3,
    infinite: true,
    dots: false,
    autoplaySpeed: 3000,
    autoplay: true,
  };
  return (
    <div className="feedback container mx-auto">
      <h3 className="feedback__title">Phản hồi từ những học viên Edemy</h3>
      <div className="feedback__content">
        <Carousel {...config}>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </Carousel>
      </div>
    </div>
  );
};
export default Feedback;
