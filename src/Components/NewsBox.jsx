import moment from "moment/moment";
const NewsBox = ({ picture, title, author, time, link }) => {
  const hoursDifference = moment().diff(moment(time), "hours");

  const titleSize = title.split(" ").length;
  const cutTitle = title?.split(" ").slice(0, 10).join(" ");

  const RedirectHandller = () => {
    window.location.href = link;
  };
  return (
    <div className="flex-col gap-[16px] w-[270px] grow">
      <img
        className="w-[100%] h-[176px] object-cover rounded-lg hover:cursor-pointer"
        alt="News Box Image"
        src={picture}
        onClick={RedirectHandller}
      />
      <h2
        onClick={RedirectHandller}
        className="leading-8 text-[24px] font-[400] hover:cursor-pointer break-words font-[roboto]"
      >
        {titleSize >= 10 ? `${cutTitle}` : title}
        {titleSize >= 10 && <span className="font-[700] text-[18px]">...</span>}
      </h2>
      <div className="mt-[8px] flex flex-col gap-[1]">
        <span className="uppercase font-[500]">Publisher {author}</span>
        <p className=" flex font-[roboto] text-[#949494] text-[12px] font-[600]">
          {hoursDifference} Hours ago
        </p>
      </div>
    </div>
  );
};
export default NewsBox;
