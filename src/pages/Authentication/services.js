import { https } from "../../services/config";
export const dangKy = (thongTinDangKy) => https.post("api/QuanLyNguoiDung/DangKy", thongTinDangKy);