import Layout from "../../HOCs/Layout";
import Header from "../../components/Header/Header";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import NotificationBox from "./components/NotificationBox/NotificationBox";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SidebarNav from "../../components/SidebarNav/SidebarNav";
import { useUserLoginCheck } from "../../Hooks/UserLoginCheck";
import Footer from "../../components/Footer/Footer";
const Authentication = () => {
  const navigate = useNavigate();
  const [changePage, setChangePage] = useState(true); // true: Đăng nhập - false: Đăng ký;
  const {loginStatus} = useUserLoginCheck();
  const handleSetPage = () => {
    setChangePage(!changePage)
  }
  useEffect(() => {
    if (loginStatus) {
      navigate("/");
    }
  }, [navigate, loginStatus]);
  return (
    <Layout>
      <Header />
      <SidebarNav/>
      {changePage === true ? <SignIn switchSignUp={handleSetPage}/> : <SignUp switchSignIn={handleSetPage}/>}
      <Footer/>
      <NotificationBox />
    </Layout>
  );
};
export default Authentication;
