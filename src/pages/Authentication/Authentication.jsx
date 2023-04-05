import Layout from "../../HOCs/Layout";
import Header from "../../components/Header/Header";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import NotificationBox from "./components/NotificationBox/NotificationBox";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SidebarNav from "../../components/SidebarNav/SidebarNav";
const Authentication = () => {
  const navigate = useNavigate();
  const [changePage, setChangePage] = useState(true); // true: Đăng nhập - false: Đăng ký;
  const isUserLogin = useSelector((store) => store.authReducer.isUserLogin); // Trạng thái đăng nhập của người dùng
  const handleSetPage = () => {
    setChangePage(!changePage)
  }
  useEffect(() => {
    // const inputs = document.querySelectorAll("input");
    // inputs.forEach((input) => {
    //   input.addEventListener("animationstart", () => {
    //     // Check if input is autofilled
    //     if (input.matches(":-webkit-autofill")) {
    //       // Change background color
    //       input.style.backgroundColor = "white";
    //     }
    //   });
    // });
    if (isUserLogin) {
      navigate("/");
    }
  }, [navigate, isUserLogin]);
  return (
    <Layout>
      <Header />
      <SidebarNav/>
      {changePage === true ? <SignIn switchSignUp={handleSetPage}/> : <SignUp switchSignIn={handleSetPage}/>}
      <NotificationBox />
    </Layout>
  );
};
export default Authentication;
