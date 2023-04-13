const { useSelector } = require("react-redux");
/**
 * Hướng dẫn:
 *   kiểm tra trạng thái userLogin trên store của redux là true hay false và trả
 * cho biến loginStatus.
 *   kiểm tra trạng thái token ở localStorage, nếu có token thì cho rằng user đã đăng nhập và
 * cho vào trang.
 *   Lưu ý: đã xử lý trường hợp user Lỡ tay sửa token dưới localStorage tại HOCs "HandleUserAccess", nếu user nhập token
 * sai, hệ thống sẽ tự động clear token đó giống như trạng thái logout.
 */
export const useUserLoginCheck = ()=> {
    const isUserLogin = useSelector(store => store.authReducer.isUserLogin);
    const token = localStorage.getItem("elearningToken");
    const loginStatus = isUserLogin ? true : false;
    const tokenStatus = token ? true : false;
    return {loginStatus: loginStatus, tokenStatus: tokenStatus}
}
