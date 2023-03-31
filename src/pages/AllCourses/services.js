import { https } from "../../services/config";
import { maNhom } from "../../services/config";
export const fetchKhoaHocPhanTrang = (page, tenKhoaHoc) => https.get("api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang", {
    params: {
        tenKhoaHoc: tenKhoaHoc,
        page: page,
        pageSize: 10,
        maNhom: maNhom,
    }
})
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