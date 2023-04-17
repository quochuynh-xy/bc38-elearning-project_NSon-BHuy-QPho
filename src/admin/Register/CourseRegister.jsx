import {
    DeleteOutlined,
    EditOutlined,
    FilterOutlined,
  } from "@ant-design/icons";
  import { Table, Tabs } from "antd";
  import React, { useEffect } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { NavLink, useParams } from "react-router-dom";

  
  const CourseRegister = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { courseNotRegister } = useSelector((state) => state.registerReducer);
    const { courseApproved } = useSelector((state) => state.registerReducer);
    const { courseWaitApprove } = useSelector((state) => state.registerReducer);
    console.log(courseWaitApprove);
  
    useEffect(() => {
    //   dispatch(fetchCourseListNotRegisterAction(id));
    //   dispatch(fetchCourseListApprovedAction({ taiKhoan: id }));
    //   dispatch(fetchCourseListWaitApproveAction({ taiKhoan: id }));
    }, []);
  
    const onChange = (key) => {};
  
    const columns1 = [
      {
        title: "Mã khóa học",
        dataIndex: "maKhoaHoc",
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
        title: "Bí danh",
        dataIndex: "biDanh",
        sorter: (a, b) => {
          let biDanhA = a.biDanh.toLowerCase().trim();
          let biDanhB = b.biDanh.toLowerCase().trim();
          if (biDanhA > biDanhB) {
            return 1;
          }
          return -1;
        },
      },
    ];
  
    const columns2 = [
      {
        title: "Mã khóa học",
        dataIndex: "maKhoaHoc",
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
        title: "Hủy đăng ký",
        dataIndex: "huyDangKy",
        render: (text, course) => {
          return (
            <>
              <NavLink
                onClick={() => {
                  if (
                    window.confirm(
                      "Bạn có chắc muốn xóa khóa học " +
                        course.tenKhoaHoc +
                        " này?"
                    )
                  ) {
                    dispatch(
                    //   cancelCourseRegisterAction({
                    //     maKhoaHoc: course.maKhoaHoc,
                    //     taiKhoan: id,
                    //   })
                    );
                  }
                }}
                className="bg-red-700 text-white p-2 rounded"
              >
                <DeleteOutlined />
              </NavLink>
            </>
          );
        },
      },
    ];
  
    const columns3 = [
      {
        title: "Mã khóa học",
        dataIndex: "maKhoaHoc",
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
        title: "Ghi danh khóa học",
        dataIndex: "ghiDanh",
        render: (text, course) => {
          return (
            <>
              <NavLink
                onClick={() => {
                  dispatch(
                    // confirmUserRegisterCourseAction({
                    //   maKhoaHoc: course.maKhoaHoc,
                    //   taiKhoan: id,
                    // })
                  );
                }}
                className="bg-black text-white mr-2 p-2 rounded"
              >
                <EditOutlined />
              </NavLink>
            </>
          );
        },
      },
    ];
  
    const items = [
      {
        key: "1",
        label: `Chưa ghi danh`,
        children: (
          <Table
            className="mt-4 mb-8"
            columns={columns1}
            dataSource={courseNotRegister}
            pagination={false}
          />
        ),
      },
      {
        key: "2",
        label: `Đã ghi danh`,
        children: (
          <Table
            className="mt-4 mb-8"
            columns={columns2}
            dataSource={courseApproved}
            pagination={false}
          />
        ),
      },
      {
        key: "3",
        label: `Chờ xét duyệt`,
        children: (
          <Table
            className="mt-4 mb-8"
            columns={columns3}
            dataSource={courseWaitApprove}
            pagination={false}
          />
        ),
      },
    ];
  
    return (
      <>
        <h1 className="text-2xl py-8">Danh sách khóa học</h1>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </>
    );
  };
  
  export default CourseRegister;
  