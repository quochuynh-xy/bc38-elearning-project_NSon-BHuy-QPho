import {
  DeleteOutlined,
  EditOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import { Pagination, Table, Input } from "antd";
import React, { Fragment } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { deleteUserApi, fetchUserApi } from "../redux/adminReducer";

const { Search } = Input;

const UserDetail = () => {
  const { userList, userListData } = useSelector((state) => state.admin);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchUserApi());
  }, []);

  const columns = [
    {
      title: "Loại người dùng",
      dataIndex: "tenLoaiNguoiDung",
      width: 160,
    },
    {
      title: "Họ tên",
      dataIndex: "hoTen",
      width: 160,
      sorter: (a, b) => {
        let hoTenA = a.hoTen.toLowerCase().trim();
        let hoTenB = b.hoTen.toLowerCase().trim();
        if (hoTenA > hoTenB) {
          return 1;
        }
        return -1;
      },
    },
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      sorter: (a, b) => {
        let taiKhoanA = a.taiKhoan.toLowerCase().trim();
        let taiKhoanB = b.taiKhoan.toLowerCase().trim();
        if (taiKhoanA > taiKhoanB) {
          return 1;
        }
        return -1;
      },
    },
    {
      title: "Số điện thoại",
      dataIndex: "soDT",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Hành động",
      dataIndex: "hanhDong",
      render: (text, user) => {
        return (
          <Fragment>
            <NavLink
              to={`edit-user/${user.taiKhoan}`}
              className="bg-black text-white mr-2 p-2 rounded"
            >
              <EditOutlined />
            </NavLink>
            <NavLink
              onClick={() => {
                dispatch(deleteUserApi(user.taiKhoan));
              }}
              className="bg-red-700 text-white p-2 rounded"
            >
              <DeleteOutlined />
            </NavLink>
            <NavLink
              to={`register-user/${user.taiKhoan}`}
              className="bg-black text-white ml-2 p-2 rounded"
            >
              <FilterOutlined />
            </NavLink>
          </Fragment>
        );
      },
    },
  ];

  const onSearchUser = (value, e) => {
    dispatch(fetchUserApi(1, value));
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="text-3xl py-8">Quản lý người dùng</h3>
       
      </div>
      <Search
        placeholder="Nhập vào tên người dùng"
        size="large"
        onSearch={onSearchUser}
      />
      <Table
        className="mt-4 mb-8"
        columns={columns}
        dataSource={userListData}
        pagination={false}
      />
      <Pagination
        className="text-center py-8"
        defaultCurrent={userList.currentPage}
        total={userList.totalCount}
        pageSize={10}
        onChange={(page) => {
          dispatch(fetchUserApi(page));
        }}
      />
    </div>
  );
};

export default UserDetail;
