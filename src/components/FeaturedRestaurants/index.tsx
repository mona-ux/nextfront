import Image from "next/image";

export default function FeaturedRestaurants() {
  return (
    <section className="py-10 px-5">
      <h2 className="text-2xl font-bold text-center mb-14">
        Featured Restaurants
      </h2>
      <div className="grid grid-cols-4 gap-5">
        {restaurants.map((restaurant, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden relative"
          >
            {restaurant.discount && (
              <div className="absolute top-3 left-6 bg-orange-500 text-white text-xl px-2 py-1 rounded-lg w-30">
                {restaurant.discount}
              </div>
            )}
            {restaurant.fast && (
              <div className="absolute top-3 right-16 bg-yellow-400 text-white text-xl px-2 py-1 rounded-lg">
                Fast
              </div>
            )}
            <Image
              src={restaurant.image}
              alt={restaurant.name}
              width={300}
              height={5000}
              className="w-full h-400 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="font-bold text-lg">{restaurant.name}</h3>
              <div className="flex justify-center items-center text-sm mt-2">
                <span className="text-yellow-400">⭐</span>
                <span className="ml-1">{restaurant.rating}</span>
              </div>
              <p
                className={
                  restaurant.status === "Open Now"
                    ? "text-green-600 mt-2"
                    : "text-red-500 mt-2"
                }
              >
                {restaurant.status}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-14 ">
        <button className="bg-yellow-400 text-white px-6 py-2 rounded-full shadow-lg text-lg font-semibold flex items-center gap-2 hover:bg-orange-500 transition duration-300">
          View All ➜
        </button>
      </div>
    </section>
  );
}

const restaurants = [
  {
    image: "/images/food/fo.png",
    name: "Foodworld",
    rating: "4.6",
    status: "Opens tomorrow",
  },
  {
    image: "/images/food/ft.png",
    name: "Pizzahub",
    rating: "4.0",
    status: "Opens tomorrow",
  },
  {
    image: "/images/food/fth.png",
    name: "Donuts hut",
    rating: "5.0",
    status: "Open Now",
  },
  {
    image: "/images/food/ff.png",
    name: "Donuts hut",
    rating: "5.0",
    status: "Open Now",
  },
  {
    image: "/images/food/ne.png",
    name: "Donuts hut",
    rating: "5.0",
    status: "Open Now",
    discount: "10% off",
    fast: true,
  },
  {
    image: "/images/food/wo.png",
    name: "Donuts hut",
    rating: "5.0",
    status: "Open Now",
    discount: "25% off",
    fast: true,
  },
  {
    image: "/images/food/re.png",
    name: "Donuts hut",
    rating: "5.0",
    status: "Open Now",
    discount: "10% off",
    fast: true,
  },
  {
    image: "/images/food/hr.png",
    name: "Donuts hut",
    rating: "5.0",
    status: "Open Now",
    discount: "10% off",
    fast: true,
  },
];
