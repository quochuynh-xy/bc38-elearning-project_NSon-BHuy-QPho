import Layout from "../../HOCs/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchDanhMucKhoaHoc } from "./homeReducer";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Carousel from "./components/Carousel/Carousel";
import TabAllCourses from "./components/TabAllCourses/TabAllCourses";
const Home = () => {
  const dispatch = useDispatch();
  const danhMucKhoaHoc = useSelector(
    (state) => state.homeReducer.danhMucKhoaHoc
  );
  useEffect(() => {
    dispatch(fetchDanhMucKhoaHoc());
  }, [dispatch]);
  return (
    <Layout>
      <Header />
      <Carousel/>
      <TabAllCourses danhMucKhoaHoc={danhMucKhoaHoc}/>
      <Footer />
    </Layout>
  );
};
export default Home;
