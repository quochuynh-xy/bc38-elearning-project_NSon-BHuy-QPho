import Layout from "../../HOCs/Layout";
import Header from "../../components/Header/Header";
// import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
const Authentication = () => {
  return (
    <Layout>
      <Header />
      {/* <SignIn /> */}
      <SignUp/>
    </Layout>
  );
};
export default Authentication;
