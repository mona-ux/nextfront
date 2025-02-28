import Image from "next/image";

export const SearchFood = () => {
  return (
    <div className="bg-[#FFF8E9] py-10">
      <div className="flex flex-wrap items-center justify-between px-6 md:px-14 mb-6">
        <h2 className="text-lg md:text-xl font-semibold ml-4 md:ml-24 px-4 md:px-14 py-4 md:py-8 text-black">
          Search by Food
        </h2>
        <div className="flex items-center gap-2 px-4 md:px-14 mr-4 md:mr-24">
          <button className="text-yellow-500 font-medium">View All</button>
          <button className="text-xl bg-red-50 text-yellow px-2">&lt;</button>
          <button className="text-xl text-yellow px-2">&gt;</button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6 md:gap-14 py-4 mt-6 md:mt-14">
        {["Pizza", "Burger", "Noodles", "Sub-sandwich", "Chowmein", "Steak"].map(
          (food, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-20 h-20 md:w-28 md:h-28 text-lg rounded-full overflow-hidden">
                <Image
                  src={`/images/day.png`}
                  alt={food}
                  width={112}
                  height={112}
                  className="object-cover"
                />
              </div>
              <p className="text-black mt-2 text-base md:text-xl">{food}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};
