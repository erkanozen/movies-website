import "./Loading.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
  return (
    <div className="loading-container">
      <AiOutlineLoading3Quarters className="spinner" />
    </div>
  );
};

export default Loading;
