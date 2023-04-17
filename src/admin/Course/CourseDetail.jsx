import {
    DeleteOutlined,
    EditOutlined,
    FilterOutlined,
  } from "@ant-design/icons";
  import { Button, Pagination, Table, Input } from "antd";
  import React, { Fragment } from "react";
  import { useEffect } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { NavLink } from "react-router-dom";
import { deleteCourseApi, fetchCourseListApi } from "../redux/adminReducer";
  
  const { Search } = Input;
  
  const CourseDetail = () => {
    const { courseList, courseListData } = useSelector((state) => state.admin);
    const dispatch = useDispatch();
  
   
  
    useEffect(() => {
    //   dispatch(fetchCourseListAction());
    }, []);
  
    const columns = [
      {
        title: "Mã khóa học",
        dataIndex: "maKhoaHoc",
        width: '10%',
        sorter: (a, b) => {
          let maKhoaHocA = a.maKhoaHoc.toLowerCase().trim();
          let maKhoaHocB = b.maKhoaHoc.toLowerCase().trim();
          if (maKhoaHocA > maKhoaHocB) {
            return 1;
          }
          return -1;
        },
      },
      {
        title: "Tên khóa học",
        dataIndex: "tenKhoaHoc",
        width: '10%',
        sorter: (a, b) => {
          let tenKhoaHocA = a.tenKhoaHoc.toLowerCase().trim();
          let tenKhoaHocB = b.tenKhoaHoc.toLowerCase().trim();
          if (tenKhoaHocA > tenKhoaHocB) {
            return 1;
          }
          return -1;
        },
      },
      {
        title: "Hình ảnh",
        dataIndex: "hinhAnh",
        width: '20%',
        render: (text, course) => {
          return <img src={course.hinhAnh}  />;
        },
      },
      {
        title: "Số lượng học viên",
        dataIndex: "soLuongHocVien",
        sorter: (a, b) => {
          let soLuongA = a.soLuongHocVien;
          let soLuongB = b.soLuongHocVien;
          if (soLuongA > soLuongB) {
            return 1;
          }
          return -1;
        },
      },
      {
        title: "Lượt xem",
        dataIndex: "luotXem",
        sorter: (a, b) => {
          let soLuongA = a.soLuongHocVien;
          let soLuongB = b.soLuongHocVien;
          if (soLuongA > soLuongB) {
            return 1;
          }
          return -1;
        },
      },
      {
        title: "Danh mục khóa học",
        dataIndex: "danhMucKhoaHoc",
        sorter: (a, b) => {
          let danhMucA = a.danhMucKhoaHoc.tenDanhMucKhoaHoc.toLowerCase().trim();
          let danhMucB = b.danhMucKhoaHoc.tenDanhMucKhoaHoc.toLowerCase().trim();
          if (danhMucA > danhMucB) {
            return 1;
          }
          return -1;
        },
        render: (text, course) => {
          return <p>{course.danhMucKhoaHoc.tenDanhMucKhoaHoc}</p>;
        },
      },
      {
        title: "Người tạo",
        dataIndex: "nguoiTao",
        render: (text, course) => {
          return <p>{course?.nguoiTao.hoTen}</p>;
        },
      },
      {
        title: "Ngày tạo",
        dataIndex: "ngayTao",
      },
      {
        title: "Mô tả",
        dataIndex: "moTa",
        width:'10%',
        render: (text, course) => {
          return <p className="overflow-auto h-20">{course?.moTa}</p>;
        },
      },
      {
        title: "Hành động",
        dataIndex: "hanhDong",
        width: '20%',
        render: (text, course) => {
          return (
            <div >
              <NavLink
                to={`edit-course/${course.maKhoaHoc}`}
                className="bg-black text-white mr-2 p-2 rounded"
              >
                <EditOutlined />
              </NavLink>
              <NavLink
                onClick={() => {
                  
                    dispatch(deleteCourseApi(course.maKhoaHoc));
                  
                }}
                className="bg-red-700 text-white p-2 rounded"
              >
                <DeleteOutlined />
              </NavLink>
              <NavLink
                to={`register-course/${course.maKhoaHoc}`}
                className="bg-black text-white ml-2 p-2 rounded"
              >
                <FilterOutlined />
              </NavLink>
            </div >
          );
        },
      },
    ];
  
    const onSearchCourse = (value, e) => {
      dispatch(fetchCourseListApi(1, value));
    };
  
    return (
      <div>
        <div className="flex justify-between items-center">
          <h3 className="text-3xl py-8">Quản lý khóa học</h3>
         
        </div>
        <Search
          placeholder="Tìm kiếm"
          size="large"
          onSearch={onSearchCourse}
        />
        <Table
          className="mt-4 mb-8"
          columns={columns}
          dataSource={courseListData}
          pagination={false}
        />
        <Pagination
          className="text-center py-8"
          defaultCurrent={courseList.currentPage}
          total={courseList.totalCount}
          pageSize={10}
          onChange={(page) => {
            dispatch(fetchCourseListApi(page));
          }}
        />
      </div>
    );
  };
  
  export default CourseDetail;
  