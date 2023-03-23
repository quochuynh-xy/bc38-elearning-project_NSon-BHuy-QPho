import { https } from "../../services/config";
import { maNhom } from "../../services/config";
export const fetchKhoaHocTheoDanhMuc = (maDanhMuc) =>
  https.get("api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc", {
    params: {
      maDanhMuc: maDanhMuc,
      maNhom: maNhom
    },
  });
