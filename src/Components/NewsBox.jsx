import moment from "moment/moment";
const NewsBox = ({ picture, title, author, time }) => {
  // const hoursDifference = moment().diff(moment(time), "hours");

  return (
    <div className="flex-col gap-[16px] w-[270px] grow">
      <div>
        <img
          className="w-[100%] h-[176px] object-cover rounded-lg hover:cursor-pointer"
          alt="News Box Image"
          src={picture}
        />
      </div>
      <h2 className="text-[24px] font-[700] hover:cursor-pointer break-words font-[roboto]">
        {title}
      </h2>
      <div className="mt-[8px] flex flex-col gap-[1]">
        <span>Publisher {author}</span>
        <p className=" flex font-[roboto] text-[#949494] text-[12px] font-[600]">
          {2} Hours ago
        </p>
      </div>
    </div>
  );
};
export default NewsBox;
