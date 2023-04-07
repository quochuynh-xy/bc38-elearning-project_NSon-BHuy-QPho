import logo from "../../assets/img/logo_wide_white.png";
import { StyledFooter } from "./style";
import { Link } from "react-router-dom";
import { AiOutlineAntDesign } from "react-icons/ai";
import {
  SiMaterialui,
  SiTailwindcss,
  SiReact,
  SiJavascript,
  SiSass,
} from "react-icons/si";
const Footer = () => {
  return (
    <StyledFooter className="pt-10">
      <div className="container mx-auto pb-8">
        <div className="top-content grid grid-cols-2 lg:grid-cols-4">
          <div className="top-content__col">
            <ul>
              <li>
                <Link to={"#"}>Edemy Business</Link>
              </li>
              <li>
                <Link to={"#"}>Giảng dạy trên Edemy</Link>
              </li>
              <li>
                <Link to={"#"}>Tải ứng dụng</Link>
              </li>
              <li>
                <Link to={"#"}>Giới thiệu</Link>
              </li>
              <li>
                <Link to={"#"}>Liên hệ với chúng tôi</Link>
              </li>
            </ul>
          </div>
          <div className="top-content__col">
            <ul>
              <li>
                <Link to={"#"}>Nghề nghiệp</Link>
              </li>
              <li>
                <Link to={"#"}>Blog</Link>
              </li>
              <li>
                <Link to={"#"}>Trợ giúp và hỗ trợ</Link>
              </li>
              <li>
                <Link to={"#"}>Đơn vị liên kết</Link>
              </li>
              <li>
                <Link to={"#"}>Nhà đầu tư</Link>
              </li>
            </ul>
          </div>
          <div className="top-content__col">
            <ul>
              <li>
                <Link to={"#"}>Điều khoản</Link>
              </li>
              <li>
                <Link to={"#"}>Chính sách quyền riêng tư</Link>
              </li>
              <li>
                <Link to={"#"}>Cài đặt Cookie</Link>
              </li>
              <li>
                <Link to={"#"}>Sơ đồ trang web</Link>
              </li>
              <li>
                <Link to={"#"}>Khả năng tiếp cận</Link>
              </li>
            </ul>
          </div>
          <div className="top-content__col brand">
            <div className="project-name">
              <h2 className="font-mono font-extrabold text-2xl mb-2">
                Elearning Project
              </h2>
              <div className="member mb-2">
                <h3>
                  API list:{" "}
                  <span className="italic pl-2">CyberSoft Academy</span>
                </h3>
                <h3>
                  User module:{" "}
                  <a
                    className="italic pl-2 hover:text-purple-500 duration-300"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/huynhquocpho"
                  >
                    huynhquocpho
                  </a>
                </h3>
                <h3>
                  Admin module:{" "}
                  <a
                    className="italic pl-2 hover:text-purple-500 duration-300"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/bao.h.smart"
                  >
                    lenambaohuy
                  </a>
                </h3>
                <ul>
                  <li></li>
                </ul>
              </div>
            </div>
            <ul className="flex library items-center">
              <li>
                <AiOutlineAntDesign />
              </li>
              <li>
                <SiMaterialui />
              </li>
              <li>
                <SiTailwindcss />
              </li>
              <li>
                <SiReact />
              </li>
              <li>
                <SiJavascript />
              </li>
              <li>
                <SiSass />
              </li>
              <li>
                <span className="text-sm font-semibold pb-2 cursor-default">
                  axios
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="bot-content container mx-auto flex justify-between items-center py-2">
        <div className="md:-ml-5">
          <img className="h-10" src={logo} alt="logo" />
        </div>
        <div className="capitalize text-sm">Cyber Soft academy, 04/2023</div>
      </div>
    </StyledFooter>
  );
};
export default Footer;
