import { https } from "../../services/config";
export const requestHuyGhiDanh = (ttdk, authenToken) =>
  https.post("api/QuanLyKhoaHoc/HuyGhiDanh", ttdk, {
    headers: {
      Authorization: "Bearer " + authenToken,
    },
  });