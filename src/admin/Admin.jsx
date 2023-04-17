import React, { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineUserAdd, AiOutlineUser, AiOutlineSnippets, AiOutlineFileAdd } from "react-icons/ai";
import {  accountAdmin, fetchCategoryCourse, fetchCourseListApi, fetchUserApi } from "./redux/adminReducer";
import { useDispatch } from "react-redux";
const Admin = () => {
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(fetchUserApi())
    dispatch(fetchCourseListApi())
    dispatch(fetchCategoryCourse())
    dispatch(accountAdmin())
  }, [dispatch])
  return (
    <div className="container">
      <div>
        <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div className="px-3 py-3 lg:px-5 lg:pl-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start">
                <button
                  data-drawer-target="logo-sidebar"
                  data-drawer-toggle="logo-sidebar"
                  aria-controls="logo-sidebar"
                  type="button"
                  className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                  <span className="sr-only">Open sidebar</span>
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    />
                  </svg>
                </button>
                <a href="https://flowbite.com" className="flex ml-2 md:mr-24">
                  <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="h-8 mr-3"
                    alt="FlowBite Logo"
                  />
                </a>
              </div>
              <div className="flex items-center">
                <div className="flex items-center ml-3">
                  <div className="translate-x-[-100px]">
                    <button
                      type="button"
                      className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                      aria-expanded="false"
                      data-dropdown-toggle="dropdown-user"
                    >
                      <img
                        className="w-8 h-8 rounded-full "
                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <aside
          id="logo-sidebar"
          className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
              <li>
                <NavLink
                  to=''
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span className="ml-3 font-bold text-xl">Admin Site</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="user-detail"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <AiOutlineUser />
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    User Detail
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="course-detail"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <AiOutlineSnippets />
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Course Detail
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="add-user"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <AiOutlineUserAdd />
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Add User
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="add-course"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <AiOutlineFileAdd />
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Add Course
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </aside>
        <div className="p-4 w-[95%] flex flex-col justify-center  sm:ml-64">
          <div className="p-4  border-2  h-auto border-dashed  border-gray-200  w-[1200px] rounded-lg dark:border-gray-700 mt-14">
            <div className=" h-auto mb-4 rou
            nded  dark:bg-gray-800">
              <div className="h-auto w-full bg-gray-50">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;











