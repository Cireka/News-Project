import { CircleSpinner } from "react-spinners-kit";
const LoaderAnimation = ({ loading }) => {
  return (
    <div
      style={{
        position: "absolute",
        left: "calc(50% - 40px)",
        top: "calc(50% - 40px)",
      }}
    >
      <CircleSpinner size={80} color="#14213d" loading={loading} />
    </div>
  );
};

export default LoaderAnimation;
