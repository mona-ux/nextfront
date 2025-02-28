import Image from "next/image";

export const DailyDiscounts = () => {
  return (
    <div className="bg-[#FFEFC3] py-10 flex justify-center h-full">
      <div className="bg-white px-6 md:px-10 py-10 md:py-14 text-xl rounded-lg shadow-lg flex flex-wrap md:flex-nowrap gap-6 md:gap-10 items-center justify-center">
        {[
          { text: "Daily Discounts", icon: "/images/searchfood/tg.png" },
          { text: "Live Tracing", icon: "/images/group.png" },
          { text: "Quick Delivery", icon: "/images/searchfood/cl.png" },
        ].map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center gap-2 text-center md:text-left">
            <Image src={item.icon} alt={item.text} width={70} height={70} className="md:w-[90px] md:h-[90px]" />
            <p
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#FB3C00] to-[#FFB800] font-extrabold whitespace-pre-line px-4 md:px-7 text-lg md:text-xl"
            >
              {item.text.replace(/ /g, "\n")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
