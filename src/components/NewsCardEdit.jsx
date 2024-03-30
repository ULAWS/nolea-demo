import { useState } from "react";
import { useDispatch } from "react-redux";
import { editNews } from "../store/features/newsSlice";

export const NewsCardEdit = ({ item, index }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(editNews({ index, item: { title: title || item.title, description: description || item.description } }));
    setSubmitted(true);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="border text-[#7546db] relative shadow-xl rounded-xl w-[500px] h-[478px] bg-white flex flex-col items-center justify-center  px-10"
    >
      <input
        id="title"
        name="title"
        type="text"
        required
        placeholder="Enter the title"
        defaultValue={item.title}
        onChange={(e) => setTitle(e.target.value)}
        className="px-4 py-2 text-xl font-medium border rounded-lg w-80 "
      />
      <img src={`news${Math.min(index + 1, 3)}.svg`} alt="news" className="w-40" />
      <textarea
        id="description"
        name="description"
        type="textarea"
        required
        rows={4}
        defaultValue={item.description}
        placeholder="Enter the description"
        onChange={(e) => setDescription(e.target.value)}
        className="px-4 py-2 rounded-lg w-80 border"
      />
      <button
        type="submit"
        className="bg-[#7546db] rounded-full w-60 h-10 mt-8 text-white flex items-center justify-center"
      >
        {submitted ? "Done!" : "Submit"}
      </button>
    </form>
  );
};
