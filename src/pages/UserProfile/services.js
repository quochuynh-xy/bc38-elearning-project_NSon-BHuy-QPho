import { https } from "../../services/config"
export const requestHuyGhiDanh = (ttdk, authenToken) =>
  https.post("api/QuanLyKhoaHoc/HuyGhiDanh", ttdk, {
    headers: {
      Authorization: "Bearer " + authenToken,
    },
  });
export const requestChangeInfo = (thongtin) => {
    const token = localStorage.getItem("elearningToken");
    return https.put("api/QuanLyNguoiDung/CapNhatThongTinNguoiDung", thongtin, {
        headers: {
            Authorization: "Bearer " + token
        }
    })
}
export const updateUserData = () => {
  const token = localStorage.getItem("elearningToken");
  return https.post("api/QuanLyNguoiDung/ThongTinNguoiDung", undefined, {
    headers: {
      Authorization: "Bearer " + token
    }
  });
}