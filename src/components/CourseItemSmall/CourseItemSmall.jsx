import "./style.scss";
import { stringTrimmer } from "../../utilities/util";
import { Rate, Progress, Dropdown } from "antd";
import styled from "styled-components";
import backUpImg from "../../assets/img/blank_wide.jpg";
import { useNavigate } from "react-router-dom";
const SmallItem = styled.div`
  &.Item-small {
    height: fit-content;
    .quickPreview {
      width: 100%;
      height: 140px;
    }
    .content {
        .content__name {
            min-height: 40px;
        }
      .ant-progress-text {
        font-weight: 500;
        letter-spacing: 0.5px;
        margin-inline-start: 0;
        text-align: end;
      }
      .ant-progress-outer {
        margin: 0;
      }
    }
    .footer {
      .rate {
        .ant-rate {
          font-size: 14px;
        }
      }
    }
  }
`;
const CourseItemSmall = (props) => {
    const navigate = useNavigate();
    const {maKhoaHoc, tenKhoaHoc, hinhAnh, danhGia, actionHuyKhoaHoc} = props || {}
  return (
    <SmallItem className="Item-small h- rounded-sm shadow-md border border-solid border-stone-300">
      <div className="quickPreview overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={hinhAnh}
          alt="previewImg"
          onError={(e) => (e.target.src = backUpImg)}
        />
      </div>
      <div className="content pt-3 px-2">
        <h2 className="content__name font-semibold leading-5 cursor-pointer hover:text-purple-800 duration-300 hover:underline underline-offset-2"
            onClick={()=> navigate(`/chiTiet/${maKhoaHoc}`)}
        >
          {stringTrimmer(
            tenKhoaHoc,
            50
          )}
        </h2>
        <p className="content__author text-xs text-stone-600 font-semibold mt-1">
          {stringTrimmer("Trương Tấn Khải", 30)}
        </p>
        <Progress
          percent={5}
          strokeColor="#a435f0"
          size="small"
          format={(percent) => `Đã học ${percent}%`}
        />
      </div>
      <div className="footer flex justify-between px-2 pb-2 items-center">
        <div className="rate">
          <Rate className="ant-rate" allowHalf value={+danhGia} />
        </div>
        <div className="action text-sm font-bold pb-2">
          <Dropdown
            className="px-3 py-1 rounded-sm bg-purple-800 text-white cursor-pointer active:bg-slate-600 duration-200 select-none"
            menu={{
              items: [
                {
                  label: (
                    <button
                      onClick={() => actionHuyKhoaHoc(maKhoaHoc)}
                    className="font-bold hover:text-purple-800 duration-300 hover:underline underline-offset-2">
                      Hủy đăng ký
                    </button>
                  ),
                  key: "1",
                },
              ],
              style: {
                right: "-2px",
                borderRadius: 0,
                border: "1px solid #ddd",
              },
            }}
            trigger="click"
            placement="bottomRight"
          >
            <p>Thao tác</p>
          </Dropdown>
        </div>
      </div>
    </SmallItem>
  );
};
export default CourseItemSmall;
