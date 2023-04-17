import { Carousel as AntdCarousel } from "antd";
import "./style.scss";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import bannerImg1 from "../../../../assets/img/banner1.jpg";
import bannerImg2 from "../../../../assets/img/banner2.jpg";
import { useRef } from "react";
const Carousel = () => {
  const CarouselInner = (props) => {
    const { title, content, imgSrc } = props.content || {};
    return (
      <div className="carousel__content relative">
        <div className="content absolute">
          <div className="content__text shadow-md rounded-sm">
            <h2 className="text__title mb-2">{title}</h2>
            <p className="text__text">{content}</p>
          </div>
          <button className="content__action mt-4 lg:mt-10">Đăng ký ngay</button>
        </div>
        <img
          className="w-full object-cover"
          src={imgSrc}
          alt="banner infomation"
        />
      </div>
    );
  };
  const listItems = [
    {
      title: "Học tập giúp bạn phát triển.",
      content: "Kỹ năng của bạn quyết định tương lai của bạn.",
      imgSrc: bannerImg1,
    },
    {
      title: "Thỏa sức khám phá bản thân.",
      content: "Bạn muốn biết mình có thể hay không? Thử ngay thôi.",
      imgSrc: bannerImg2,
    },
  ];
  const reference = useRef(null);
  return (
    <div className="carousel container mx-auto relative">
      <AntdCarousel
        className="w-full"
        autoplay={true}
        dots={false}
        autoplaySpeed={6000}
        ref={reference}
      >
        {listItems.map((item, index) => (
          <CarouselInner key={index} content={item} />
        ))}
      </AntdCarousel>
      <div className="carousel__prev-btn absolute">
        <button onClick={() => reference.current.prev()}>
          <FaAngleLeft />
        </button>
      </div>
      <div className="carousel__next-btn absolute">
        <button onClick={() => reference.current.next()}>
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};
export default Carousel;
