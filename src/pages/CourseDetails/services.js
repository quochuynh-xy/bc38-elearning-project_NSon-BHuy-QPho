import { https } from "../../services/config";
export const  fetchThongTinKhoaHoc = (maKhoaHoc) => https.get("api/QuanLyKhoaHoc/LayThongTinKhoaHoc", {
    params: {
        maKhoaHoc: maKhoaHoc
    }
})