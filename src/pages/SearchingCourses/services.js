import { https } from "../../services/config";
export const fetchKetQuaTimKiem = (tuKhoa) =>
  https.get("api/QuanLyKhoaHoc/LayDanhSachKhoaHoc", {
    params: {
        tenKhoaHoc: tuKhoa
    },
  });
