import { useDispatch } from "react-redux";
import { useCallback, useEffect } from "react";
import { https } from "../services/config";
import {
  actionGetUserInfo,
  actionLogOut,
} from "../pages/Authentication/authReducer";
// HOC thực hiện việc kiểm tra và đăng nhập tự động khi người dùng truy cập
const HandleUserAccess = (props) => {
  const token = localStorage.getItem("elearningToken");
  const dispatch = useDispatch();
  const autoLogin = useCallback(
    (savedToken) => {
      const promise = (data) =>
        https.post("api/QuanLyNguoiDung/ThongTinTaiKhoan", undefined, {
          headers: {
            Authorization: "Bearer " + data,
          },
        });
      const login = async () => {
        try {
          const res = await promise(savedToken);
          dispatch(actionGetUserInfo(res.data));
        } catch (error) {
          dispatch(actionLogOut());
        }
      };
      login();
    },
    [dispatch]
  );
  useEffect(() => {
    if (token) {
      autoLogin(token);
    }
  }, [token, autoLogin]);
  return props.children;
};
export default HandleUserAccess;
