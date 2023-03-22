import Sider from "antd/es/layout/Sider";
// import { Collapse } from "antd";
import { useState } from "react";
// const { Panel } = Collapse;
const FilterBar = () => {
  const [status, setStatus] =  useState(true);
  const style= {
    height: "100vh",
    width: "200px",
    backgroundColor: "orange",
    position: "fixed",
    left:0
  }
  return <Sider collapsed={status}  style={style}>
    <button className="h-10 w-10" onClick={() => setStatus(!status)}>Show</button>
  </Sider>;
};
export default FilterBar;
