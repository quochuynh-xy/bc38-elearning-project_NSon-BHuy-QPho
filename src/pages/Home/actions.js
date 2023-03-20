import { https } from "../../services/config";
export const fetchKhoaHocTheoDanhMuc = (maDanhMuc) =>
  https.get("api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc", {
    params: {
      maDanhMuc,
    },
  });
