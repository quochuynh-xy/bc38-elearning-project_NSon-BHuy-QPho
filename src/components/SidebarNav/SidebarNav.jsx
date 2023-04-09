import logo from "../../assets/img/logo_wide.png";
import { SideNav } from "./style";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { useEffect } from "react";
import { https } from "../../services/config";
import { Link } from "react-router-dom";
const SidebarNav = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [menuGroup1Expand, setMenuGroup1Expand] = useState(false);
  const [dropDownList, setDropDownList] = useState([]);
  useEffect(() => {
    let menuItems = document.querySelectorAll(
      ".side-nav-container .nav-menu .list-items-step-1 li"
    );
    menuItems.forEach((item) => {
      item.addEventListener("click", () => {
        setMenuGroup1Expand(!menuGroup1Expand);
      });
    });
  }, [menuGroup1Expand]);
  useEffect(() => {
    let getMenuList = async () => {
      try {
        let res = await https.get("api/QuanLyKhoaHoc/LayDanhMucKhoaHoc");
        setDropDownList(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMenuList();
  }, []);
  return (
    <SideNav
      className={
        isExpanded
          ? "side-nav-container lg:hidden shadow-lg"
          : "side-nav-container lg:hidden side-nav-container-hide shadow-lg"
      }
    >
      <div className="nav-upper">
        <div className="nav-heading">
          <Link to="/" className="nav-brand">
            <img src={logo} alt="brand" className="h-12 mx-auto my-2" />
          </Link>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="hamburger"
          >
            <span>{isExpanded ? <AiOutlineClose /> : <AiOutlineBars />}</span>
          </button>
        </div>
        <div className="nav-menu">
          <div
            className={
              isExpanded
                ? "menu-item droplist"
                : "menu-item droplist menu-item-NX"
            }
          >
            {isExpanded && (
              <p onClick={() => setMenuGroup1Expand(!menuGroup1Expand)}>
                Danh mục
              </p>
            )}
            {isExpanded && menuGroup1Expand && (
              <ul className="list-items-step-1">
                {dropDownList.length
                  ? dropDownList.map((item, index) => {
                      return (
                        <li key={index}>
                          <Link to={`/danhMuc/${item.maDanhMuc}`}>
                            {item.tenDanhMuc}
                          </Link>
                        </li>
                      );
                    })
                  : "vui lòng chờ..."}
              </ul>
            )}
          </div>
          <a
            className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
            href="#url"
          >
            {isExpanded && <p>Khóa học</p>}
          </a>
          <a
            className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
            href="#url"
          >
            {isExpanded && <p>Blog</p>}
          </a>
          <a
            className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
            href="#url"
          >
            {isExpanded && <p>Thông tin</p>}
          </a>
        </div>
      </div>
    </SideNav>
  );
};
export default SidebarNav;
