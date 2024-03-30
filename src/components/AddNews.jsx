import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNews } from "../store/features/newsSlice";

export const AddNews = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addNews({ title, description }));
    onClose();
  };

  return (
    <div className="fixed w-screen h-screen backdrop-blur bg-black/50 top-0 left-0 ">
      <form
        onSubmit={onSubmit}
        className="border text-[#7546db] relative shadow-xl rounded-xl -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[500px] h-[478px] bg-white flex flex-col items-center justify-center  px-10"
      >
        <button type="button" className="absolute top-4 right-8 text-3xl font-bold" onClick={onClose}>
          x
        </button>
        <input
          id="title"
          name="title"
          type="text"
          required
          placeholder="Enter the title"
          onChange={(e) => setTitle(e.target.value)}
          className="px-4 py-2 text-xl font-medium border rounded-lg w-80 "
        />
        <img src={`news3.svg`} alt="news" className="w-40" />
        <textarea
          id="description"
          name="description"
          type="textarea"
          required
          rows={4}
          placeholder="Enter the description"
          onChange={(e) => setDescription(e.target.value)}
          className="px-4 py-2 rounded-lg w-80 border"
        />
        <button
          type="submit"
          className="bg-[#7546db] rounded-full w-60 h-10 mt-8 text-white flex items-center justify-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
