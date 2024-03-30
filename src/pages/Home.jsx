import { useState } from "react";
import { useSelector } from "react-redux";
import { AddNews } from "../components/AddNews";
import { News } from "../components/News";
import { PageLoader } from "../components/PageLoader";
import { titleCase } from "../utils/helper";

const { useEffect } = require("react");
const { useNavigate } = require("react-router-dom");

export const Home = () => {
  const user = useSelector((store) => store.user.email);
  const [isAddNews, setIsAddNews] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) navigate("/login");
  }, [user]);

  if (!user) return <PageLoader />;
  return (
    <div className="w-full h-full flex flex-col items-center p-10">
      <div className="flex items-center gap-x-32 w-fit mx-auto">
        <h1 className="text-5xl font-bold text-[#7546db]">Hi {titleCase(user.split("@")[0])}</h1>
        <button className="bg-[#03ff9b] text-black font-bold rounded-2xl w-40 h-10" onClick={() => setIsAddNews(true)}>
          Add news item!
        </button>
      </div>
      <div className="mt-10 ">
        <News />
      </div>
      {isAddNews && <AddNews onClose={() => setIsAddNews(false)} />}
      <button
        className=" absolute bottom-4 right-8 bg-[#7546db] text-white font-bold rounded-full mt-10 w-80 h-16"
        onClick={() => navigate("/admin")}
      >
        Go to admin
      </button>
    </div>
  );
};
