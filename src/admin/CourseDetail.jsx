import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Spin, Table } from "antd";
import { useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./utils/antTable.style.css";
const CourseDetail = () => {
  const courseDetail = useSelector((state) => state.admin.courseDetail);
  console.log(courseDetail);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            size="small"
            style={{
              width: 90,
            }}
            className="flex items-center"
          >
            <SearchOutlined />
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
      title: "Mã khóa học",
      dataIndex: "maKhoaHoc",
      key: "maKhoaHoc",
      width: "15%",
      ...getColumnSearchProps("maKhoaHoc"),
      sorter: (a, b) => a.maKhoaHoc - b.maKhoaHoc,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Tên khóa học",
      dataIndex: "tenKhoaHoc",
      key: "name",
      width: "15%",
      ...getColumnSearchProps("tenKhoaHoc"),
      sorter: (a, b) => a.tenKhoaHoc - b.tenKhoaHoc,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",
      key: "age",
      width: "20%",
      render: (text, course) => {
        return (
          <div className="overflow-auto h-20">
            <p>{course.moTa}</p>
          </div>
        );
      },
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      width: "15%",
      key: "hinhAnh",
      render: (text, course) => (
        <img
          src={course.hinhAnh}
          alt={course.tenPhim}
          width={150}
          height={100}
        />
      ),
    },
    {
      title: "Tác vụ",
      dataIndex: "Action",
      width: "20%",
      render: () => {
        return (
          <div className="flex items-center">
            <NavLink to="edit-course">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                <span className="relative text-xl px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  <AiOutlineEdit />
                </span>
              </button>
            </NavLink>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
              <span className="relative text-xl px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                <AiOutlineDelete />
              </span>
            </button>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
              <span className="relative text-sm px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Ghi danh
              </span>
            </button>
          </div>
        );
      },
    },
  ];
  return (
    <div className="h-[620px] overflow-auto w-[1200px]">
      {courseDetail?.length ? (
        <Table columns={columns} dataSource={courseDetail} />
      ) : (
        <div className="text-center">
          {" "}
          <Spin />
        </div>
      )}
    </div>
  );
};
export default CourseDetail;
