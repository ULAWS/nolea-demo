import { useSelector } from "react-redux";
import { NewsCard } from "./NewsCard";
import { Slider } from "@nextui-org/react";
import { useEffect } from "react";
import { PageLoader } from "./PageLoader";
import { useState } from "react";

export const News = () => {
  const [isLoading, setLoading] = useState(true);
  const news = useSelector((store) => store.news.items);

  const handleChange = (val) => {
    const newsDiv = document.getElementById("newsContainer");
    if (!newsDiv) return;
    newsDiv.style.marginLeft = (val - 1) * -900 + "px";
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div id="newsOuterContainer" className="flex flex-col gap-y-4 w-[500px] overflow-hidden">
      <div
        id="newsContainer"
        className="flex items-center justify-start gap-x-[400px] w-fit transition-all duration-300"
      >
        {news.map((it, ind) => {
          return <NewsCard item={it} index={ind} key={`news${ind}`} />;
        })}
      </div>
      <Slider
        size="md"
        step={1}
        color="#7546db"
        showSteps={true}
        maxValue={news.length}
        minValue={1}
        defaultValue={1}
        className="w-80"
        onChange={handleChange}
        label="news"
      />
      {isLoading && <PageLoader />}
    </div>
  );
};
