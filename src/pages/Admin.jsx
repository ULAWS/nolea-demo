import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NewsCardEdit } from "../components/NewsCardEdit";

export const Admin = () => {
  const news = useSelector((store) => store.news.items);
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };
  return (
    <div className="w-screen h-screen flex flex-col items-center p-10 ">
      <h1 className="text-2xl font-bold">Admin Panel</h1>
      <div className="text-xl font-medium mt-10">Edit news</div>
      <div className="flex flex-col gap-y-8 mt-10">
        {news.map((it, ind) => {
          return <NewsCardEdit item={it} index={ind} key={`news${ind}`} />;
        })}
      </div>
      <button
        onClick={handleHome}
        className="bg-[#7546db] rounded-full w-60 h-10 mt-8 text-white flex items-center justify-center"
      >
        Go to Home
      </button>
    </div>
  );
};
