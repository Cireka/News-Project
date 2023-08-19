const NewsBox = ({ picture, title, author }) => {
  return (
    <div className="flex-col gap-[16px] w-[270px]">
      <div>
        <img
          className="w-[270px] h-[176px] object-cover rounded-lg hover:cursor-pointer"
          alt="News Box Image"
          src={picture}
        />
      </div>
      <h2 className="text-[24px] font-[700] hover:cursor-pointer">{title}</h2>
      <div className="mt-[8px]">
        <p className=" text-[#949494] text-[12px] font-[400]">
          Publisher {author}
        </p>
      </div>
    </div>
  );
};
export default NewsBox;
