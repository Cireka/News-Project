const NewsBox = ({ picture, title, author }) => {
  return (
    <div className="mt-[32px] flex-col gap-[16px]">
      <div className="">
        <img
          className="w-[270px] h-[176px] object-cover rounded-lg hover:cursor-pointer"
          alt="News Box Image"
          src="/src/assets/Rectangle 1.png"
        />
      </div>
      <h2 className="text-[24px] font-[700] hover:cursor-pointer">
        News Title
      </h2>
      <div className="mt-[8px]">
        <p className=" text-[#949494] text-[12px] font-[400]">Publisher BBC</p>
      </div>
    </div>
  );
};
export default NewsBox;
