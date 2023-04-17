import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    courseList: {},
    accountUser: null,
    categoryCourse: [],
    detailCourse: {},
}

const adminSlice = createSlice({
  name: 'adminRegis',
  initialState,
  reducers: {}
});

export const {} = adminSlice.actions

export default adminSlice.reducer


export const fetchCourseListAction =
  (tenKhoaHoc = null, page = 1) =>
  async (next) => {
    try {
      const res = await getCourseList(tenKhoaHoc, page);
      next({ type: actions.SET_COURSE_LIST, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };

export const fetchInfoUserAccountAction = async (next) => {
  try {
    const res = await getInfoAccountUser();
    next({ type: actions.SET_USER_ACCOUNT, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteCourseAction = (maKhoaHoc) => async (next) => {
  try {
    await deleteCourse(maKhoaHoc);
    alert("Xóa khóa học thành công");
    next(fetchCourseListAction());
  } catch (error) {
    console.log(error);
  }
};

export const fetchCategoryCourseAction = async (next) => {
  try {
    const res = await getCategoryCourse();
    next({ type: actions.SET_CATEGORY_COURSE, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const fetchDetailCourse = (maKhoaHoc) => async (next) => {
  try {
    const res = await getDetailCourse(maKhoaHoc);
    next({ type: actions.SET_COURSE_DETAIL, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const addCourseAction = (formData) => async (next) => {
  try {
    await addCourse(formData);
    alert("Thêm khóa học thành công");
    next(fetchCourseListAction());
  } catch (error) {
    console.log(error);
  }
};

export const addCourseUploadImageAction = (form) => async (next) => {
  try {
    await addCourseUploadImage(form);
    alert("Thêm khóa học thành công");
    next(fetchCourseListAction());
  } catch (error) {
    console.log(error);
  }
};

export const updateCourseAction = (formData) => async (next) => {
  try {
    await updateCourse(formData);
    alert("Cập nhật khóa học thành công");
    next(fetchCourseListAction());
  } catch (error) {
    console.log(error);
  }
};

export const updateCourseUploadImageAction = (form) => async (next) => {
  try {
    await updateCourseUploadImage(form);
    alert("Cập nhật khóa học thành công");
    next(fetchCourseListAction());
  } catch (error) {
    console.log(error);
  }
};

export const registerCourseAction = (formData) => async (next) => {
  try {
    await registerCourse(formData);
    alert("Đăng ký khóa học thành công");
    next(fetchInfoUserAccountAction);
  } catch (error) {
    console.log(error);
  }
};

export const cancelRegisterCourseAction = (form) => async (next) => {
  try {
    await cancelRegisterCourse(form);
    alert("Hủy đăng ký khóa học thành công");
    next(fetchInfoUserAccountAction);
  } catch (error) {
    console.log(error);
  }
};
