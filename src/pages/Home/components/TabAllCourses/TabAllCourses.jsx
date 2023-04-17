import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Carousel } from "antd";
import { useEffect, useRef, useState } from "react";
import { styled } from "@mui/material/styles";
import CourseCard from "../CourseCard/CourseCard";
import { fetchKhoaHocTheoDanhMuc } from "../../services";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { CircularProgress } from "@mui/material";
import "./style.scss";

const CustomTabs = styled(Tabs)({
  "&": {
    alignItems: "center",
  },
  ".MuiTabs-scroller": {
    height: "40px",
  },
  ".MuiTabs-scrollButtons": {
    color: "#a435f0",
    height: "40px",
    width: "40px",
    backgroundColor: "#fff",
    ".MuiSvgIcon-root": {
      width: "initial",
      height: "initial",
      fontSize: "16px",
    },
  },
  ".MuiTabs-indicator": {
    display: "none",
  },
  ".Mui-disabled": {
    display: "none",
  },
});
const CustomTab = styled(Tab)({
  "&": {
    marginRight: "12px",
    padding: "4px 4px 4px 0",
    fontWeight: "700",
    height: "40px",
    textTransform: "capitalize",
  },
  "&.Mui-selected": {
    color: "#1c1d1f",
    fontWeight: "700",
    fontFamily: "'Roboto', sans-serif",
  },
});

const TabAllCourses = (props) => {
  const { danhMucKhoaHoc } = props;
  const reference = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("Lập trình Backend");
  const [categoryCode, setCategoryCode] = useState(undefined);
  const [value, setValue] = useState(0);
  const [tabItems, setTabItems] = useState([]);
  const [numberItemsDisplay, setNumberItemDisplay] = useState(5);
  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };
  // Config carousel
  const config = {
    dots: false,
    speed: 300,
    autoplaySpeed: 5000,
    autoplay: true,
    draggable: true,
    slidesToShow: numberItemsDisplay,
    slidesToScroll: numberItemsDisplay - 1,
    infinite: false,
  };
  // Nhận danh mục khóa học từ component cha
  useEffect(() => {
    if (danhMucKhoaHoc.length) {
      const getData = async () => {
        try {
          const res = await fetchKhoaHocTheoDanhMuc(
            danhMucKhoaHoc[0].maDanhMuc
          );
          setTabItems(res.data);
        } catch (error) {
          console.log(error);
        }
      };
      getData();
    }
  }, [danhMucKhoaHoc]);
  // Lấy nội dung cho danh mục khóa học
  useEffect(() => {
    let acceptUpdateTabItems = true;
    const fetchData = async () => {
      try {
        const response = await fetchKhoaHocTheoDanhMuc(categoryCode);
        const newData = response.data;
        if (acceptUpdateTabItems && categoryCode) {
          setTabItems(newData);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    return () => (acceptUpdateTabItems = false);
  }, [categoryCode]);
  // Quản lý số lượng item hiển thị
  useEffect(() => {
    function reSize() {
      let size = window.innerWidth;
      if (size > 1200) {
        setNumberItemDisplay(5);
      } else if (size >= 1024 && size <= 1200) {
        setNumberItemDisplay(4);
      } else if (size >= 768 && size < 1024) {
        setNumberItemDisplay(3);
      } else {
        setNumberItemDisplay(2);
      }
    }
    window.addEventListener("resize", reSize);
    return () => window.removeEventListener("resize", reSize);
  }, []);
  return (
    <div className="course-tabs container mx-auto">
      <div className="course-tab__intro">
        <h2 className="mb-4">Đa dạng các khóa học thuộc nhiều lĩnh vực.</h2>
        <p>
          Lựa chọn từ hơn 20.000 video bài giảng trực tuyến, số lượng bài giảng
          được cập nhật liên tục mỗi tháng.
        </p>
      </div>
      <div className="course-tab__content">
        <CustomTabs
          value={value}
          onChange={handleChangeTab}
          variant="scrollable"
          scrollButtons={"auto"}
          className="tab-content__header"
        >
          {danhMucKhoaHoc.map((item, index) => (
            <CustomTab
              key={index}
              label={item.tenDanhMuc}
              onClick={() => {
                setSelectedCategory(item.tenDanhMuc);
                setCategoryCode(item.maDanhMuc);
              }}
            />
          ))}
        </CustomTabs>
        <div className="tab-content__body p-12 mt-2 mb-4 border border-slate-300 border-solid">
          <div className="body__introduce mb-8">
            <h3 className="font-bold text-lg md:text-2xl">
              Nâng cao hơn nữa kỹ năng {selectedCategory} của bạn.
            </h3>
            <p className="text-sm pt-2">
              Dưới đây là danh sách những khóa học {selectedCategory} của chúng
              tôi, luôn được cập nhật và làm mới.
            </p>
            <button className="introduce__btn mt-4">Khám phá ngay</button>
          </div>
          <div className="body__item-list relative">
            {tabItems.length > 0 ? (
              <Carousel {...config} ref={reference}>
                {tabItems.map((item, index) => (
                  <CourseCard key={index} content={item} />
                ))}
              </Carousel>
            ) : (
              <div className="text-center h-40 flex justify-around items-center">
                <CircularProgress /> <CircularProgress /> <CircularProgress />
              </div>
            )}
            {/* <CardOverview/> */}
            <div className="prev-btn absolute">
              <button onClick={() => reference.current.prev()}>
                <FaAngleLeft />
              </button>
            </div>
            <div className="next-btn absolute">
              <button onClick={() => reference.current.next()}>
                <FaAngleRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TabAllCourses;
