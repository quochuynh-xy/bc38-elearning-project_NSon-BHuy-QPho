import { https } from "../../services/config";
export const fetchKetQuaTimKiem = (tuKhoa) =>
  https.get("api/QuanLyKhoaHoc/LayDanhSachKhoaHoc", {
    params: {
        tenKhoaHoc: tuKhoa
    },
  });
  export const actionDangKyKhoaHoc = (data, token) =>
  https.post("api/QuanLyKhoaHoc/DangKyKhoaHoc", data, {
    headers: {
      Authorization : "Bearer " + token
    },
  });
  export const actionHuyDangKyKhoaHoc = (data, token) =>
  https.post("api/QuanLyKhoaHoc/HuyGhiDanh", data, {
    headers: {
      Authorization : "Bearer " + token
    },
  });