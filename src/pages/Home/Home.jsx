import Layout from "../../HOCs/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchDanhMucKhoaHoc } from "./homeReducer";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {FaDog} from "react-icons/fa"
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
      <div className="container mx-auto min-h-screen py-4">
        <h2 className="text-center text-3xl text-red-500"><FaDog/><span className=""><FaDog/></span></h2>
        <ul>
          {danhMucKhoaHoc.map((item, index) => (
            <li key={index}>{item.tenDanhMuc}</li>
          ))}
        </ul>
      </div>
      <Footer />
    </Layout>
  );
};
export default Home;
