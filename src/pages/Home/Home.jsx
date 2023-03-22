import Layout from "../../HOCs/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { actionFetchDanhMucKhoaHoc } from "./homeReducer";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Carousel from "./components/Carousel/Carousel";
import TabAllCourses from "./components/TabAllCourses/TabAllCourses";
import Feedback from "./components/Feedback/Feedback";
import Categories from "./components/Categories/Categories";
import Topics from "./components/Topics/Topics";
const Home = () => {
  const dispatch = useDispatch();
  const danhMucKhoaHoc = useSelector(
    (state) => state.homeReducer.danhMucKhoaHoc
  );
  useEffect(() => {
    dispatch(actionFetchDanhMucKhoaHoc());
  }, [dispatch]);
  return (
    <Layout>
      <Header />
      <Carousel />
      <TabAllCourses danhMucKhoaHoc={danhMucKhoaHoc} />
      <Feedback />
      <Categories />
      <Topics />
      <Footer />
    </Layout>
  );
};
export default Home;
