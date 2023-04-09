import { Link } from "react-router-dom";
import imgCry from "../../assets/img/crying.png";
import logo from "../../assets/img/logo_wide.png";
import Header from "../Header/Header";
import Layout from "../../HOCs/Layout";
const Notfound404 = () => {
  return (
    <Layout>
      <Header />
      <div className="container mx-auto">
        <div className="text-center">
          <div className="flex flex-wrap items-center justify-around h-screen -mt-16">
            <img className="w-1/4" src={imgCry} alt="cry" />
            <div className="w-3/4 pl-4">
              <h3 className="uppercase text-xl md:text-3xl lg:text-5xl font-black font-mono pb-2 md:pb-4">
                Ôi không... có gì đó không ổn ở đây.
              </h3>
              <p className="text-base lg:text-2xl">
                Đừng lo lắng, thử tải lại trang hoặc{" "}
                <Link
                  className="font-semibold underline underline-offset-4 text-purple-600 hover:text-purple-800"
                  to={"/"}
                >
                  trở về trang chủ.
                </Link>
              </p>
              <div className="mt-4">
                <Link to={"/"}><img className="mx-auto h-10 lg:h-14 hover:scale-x-105 duration-300" src={logo} alt="brand" /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Notfound404;
