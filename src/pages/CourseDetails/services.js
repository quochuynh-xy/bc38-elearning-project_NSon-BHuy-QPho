import { https } from "../../services/config";
export const fetchThongTinKhoaHoc = (maKhoaHoc) =>
  https.get("api/QuanLyKhoaHoc/LayThongTinKhoaHoc", {
    params: {
      maKhoaHoc: maKhoaHoc,
    },
  });
export const requestDangKyKhoaHoc = (ttdk, authenToken) =>
  https.post("api/QuanLyKhoaHoc/DangKyKhoaHoc", ttdk, {
    headers: {
      Authorization: "Bearer " + authenToken,
    },
  });
export const requestHuyGhiDanh = (ttdk, authenToken) =>
  https.post("api/QuanLyKhoaHoc/HuyGhiDanh", ttdk, {
    headers: {
      Authorization: "Bearer " + authenToken,
    },
  });
