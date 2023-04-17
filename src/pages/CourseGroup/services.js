import { https } from "../../services/config";
import { maNhom } from "../../services/config";
export const fetchKhoaHocTheoDanhMuc = (maDanhMuc) =>
  https.get("api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc", {
    params: {
      maDanhMuc: maDanhMuc,
      maNhom: maNhom,
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