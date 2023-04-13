import "./style.scss";
const Topics = () => {
  return (
    <section className="topics mb-10">
      <div className="container mx-auto">
        <div className="section-title">
          <h3>Danh sách các danh mục</h3>
        </div>
        <div className="topic__lists grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="lists__col">
            <h2 className="col__title font-semibold text-base lg:text-xl pb-2 lg:pb-4">
              Lập trình căn bản
            </h2>
            <ul className="col__items">
              <li className="item pb-2 md:pg-3 lg:pb-4">
                <a className="font-bold underline" href="#url">
                  Python
                </a>
                <p>900+ học viên</p>
              </li>
              <li className="item pb-2 md:pg-3 lg:pb-4">
                <a className="font-bold underline" href="#url">
                  Javascript
                </a>
                <p>900+ học viên</p>
              </li>
              <li className="item pb-2 md:pg-3 lg:pb-4">
                <a className="font-bold underline" href="#url">
                  Java
                </a>
                <p>900+ học viên</p>
              </li>
            </ul>
          </div>
          <div className="lists__col">
            <h2 className="col__title font-semibold text-base lg:text-xl pb-2 lg:pb-4">
              Lập trình front-end
            </h2>
            <ul className="col__items">
              <li className="item pb-2 md:pg-3 lg:pb-4">
                <a className="font-bold underline" href="#url">
                  HTML-CSS
                </a>
                <p>900+ học viên</p>
              </li>
              <li className="item pb-2 md:pg-3 lg:pb-4">
                <a className="font-bold underline" href="#url">
                  Javascript ES6-7
                </a>
                <p>900+ học viên</p>
              </li>
              <li className="item pb-2 md:pg-3 lg:pb-4">
                <a className="font-bold underline" href="#url">
                  CSS - SASS
                </a>
                <p>900+ học viên</p>
              </li>
            </ul>
          </div>
          <div className="lists__col">
            <h2 className="col__title font-semibold text-base lg:text-xl pb-2 lg:pb-4">
              Lập trình back-end
            </h2>
            <ul className="col__items">
              <li className="item pb-2 md:pg-3 lg:pb-4">
                <a className="font-bold underline" href="#url">
                  Backend Java
                </a>
                <p>900+ học viên</p>
              </li>
              <li className="item pb-2 md:pg-3 lg:pb-4">
                <a className="font-bold underline" href="#url">
                  C#
                </a>
                <p>900+ học viên</p>
              </li>
              <li className="item pb-2 md:pg-3 lg:pb-4">
                <a className="font-bold underline" href="#url">
                  NodeJS
                </a>
                <p>900+ học viên</p>
              </li>
            </ul>
          </div>
          <div className="lists__col">
            <h2 className="col__title font-semibold text-base lg:text-xl pb-2 lg:pb-4">
              Tư duy & thiết kế
            </h2>
            <ul className="col__items">
              <li className="item pb-2 md:pg-3 lg:pb-4">
                <a className="font-bold underline" href="#url">
                  Figma
                </a>
                <p>900+ học viên</p>
              </li>
              <li className="item pb-2 md:pg-3 lg:pb-4">
                <a className="font-bold underline" href="#url">
                  Photoshop
                </a>
                <p>900+ học viên</p>
              </li>
              <li className="item pb-2 md:pg-3 lg:pb-4">
                <a className="font-bold underline" href="#url">
                  Cơ sở dữ liệu
                </a>
                <p>900+ học viên</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="loadmore mt-5">
          <button>Tải thêm</button>
        </div>
      </div>
    </section>
  );
};
export default Topics;
