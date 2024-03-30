import { useSelector } from "react-redux";

export const NewsCard = ({ item, index }) => {
  return (
    <div className="flex w-[500px] text-justify gap-y-4 flex-col items-center justify-center border rounded-lg border-gray p-4">
      <span className="text-xl font-medium">{item.title}</span>
      <img src={`news${Math.min(index + 1, 3)}.svg`} alt="news" className="w-40" />
      <div className="">{item.description}</div>
    </div>
  );
};
