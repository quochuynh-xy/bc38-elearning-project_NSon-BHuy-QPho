import img from "../../../../assets/img/searchfailled.png";
import "./style.scss"
const SearchFailled = () => {
  return (
    <div className="text-center mt-5 search-fail">
        <img className="w-1/3 mx-auto" src={img} alt="search failled" />
        <p className="pt-3 text-xl">Không tìm thấy kết quả nào với từ khóa của bạn :s</p>
    </div>
  );
};
export default SearchFailled;
