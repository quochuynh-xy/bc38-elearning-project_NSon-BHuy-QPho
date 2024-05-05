import axios from "axios";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2NCIsIkhldEhhblN0cmluZyI6IjA4LzA5LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcyNTc1MzYwMDAwMCIsIm5iZiI6MTY5NTkyMDQwMCwiZXhwIjoxNzI1OTAxMjAwfQ.fWIHiHRVx9B7UlCgFCwvvXAlcVc-I-RB603rEDsM_wI
";
const baseURL = "https://elearningnew.cybersoft.edu.vn";
export const maNhom = "GP01";
export const https = axios.create({
  baseURL: baseURL,
  timeout: 15000,
  params: {
    MaNhom: maNhom 
  }, 
  headers: {
    TokenCybersoft: token,
  },
});
export const httpsNoParams = axios.create({
  baseURL: baseURL,
  timeout: 15000,
  headers: {
    TokenCybersoft: token,
    // Authorization:'Bearer ' + localStorage.getItem('elearningToken')
  },
});
