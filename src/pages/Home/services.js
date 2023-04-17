import { https } from "../../services/config";
export const fetchKhoaHocTheoDanhMuc = (maDanhMuc) =>
  https.get("api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc", {
    params: {
      maDanhMuc,
    },
  });
export const fetchDanhMucKhoaHoc = (tenMuc) =>
  https.get("api/QuanLyKhoaHoc/LayDanhMucKhoaHoc", {
    params: {
      tenDanhMuc: tenMuc,
    },
  });
