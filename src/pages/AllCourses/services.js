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