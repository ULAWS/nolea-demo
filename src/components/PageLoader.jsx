import loader from "../loader.svg";
import loaderWhite from "../loaderWhite.svg";

export const PageLoader = () => {
  return (
    <div className="fixed w-full h-full top-0 left-0 bg-white flex items-center justify-center">
      <img src={loader} className="w-40" alt="loader" />
    </div>
  );
};

export const SmallLoader = ({ size = 160 }) => {
  return <img src={loaderWhite} style={{ width: size }} alt="loader" />;
};
