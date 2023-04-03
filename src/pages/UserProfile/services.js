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