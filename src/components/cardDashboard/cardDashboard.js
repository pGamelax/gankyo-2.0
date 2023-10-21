export default function CardDashboard({
  img,
  title,
  content,
  percentLastMonth,
}) {
  return (
    <div>
      <div className="bg-white w-64 2xl:w-72 h-16 2xl:h-20  shadow-sm rounded-xl flex flex-row">
        <div className="w-28 flex justify-center">
          <img src={img} className=" w-10 2xl:w-12" />
        </div>
        <div className="flex flex-col justify-center w-64">
          <span className="font-sans font-bold h-4 2xl:h-8 flex items-center text-zinc-400  text-xs 2xl:text-sm ">
            {title}
          </span>
          <span className="font-bold text-lg 2xl:text-xl h-6 2xl:h-8 text-zinc-700">
            {content}
          </span>
          <span className="ml-4 text-xs 2xl:text-sm mt-1 ">
            {percentLastMonth}% Vs. mês passado
          </span>
        </div>
        <div className="flex justify-end items-start mt-2">
          <button>
            <img src="/menu-dots.svg" width={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
