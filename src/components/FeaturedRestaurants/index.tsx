import Image from "next/image";

export default function FeaturedRestaurants() {
  return (
    <section className="py-10 px-5">
      <h2 className="text-2xl font-bold text-center mb-14">
        Featured Restaurants
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {restaurants.map((restaurant, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden relative"
          >
            {/* Discount Badge */}
            {restaurant.discount && (
              <div className="absolute top-3 left-4 bg-orange-500 text-white text-sm px-3 py-1 rounded-lg">
                {restaurant.discount}
              </div>
            )}
            {/* Fast Delivery Badge */}
            {restaurant.fast && (
              <div className="absolute top-3 right-4 bg-yellow-400 text-white text-sm px-3 py-1 rounded-lg">
                Fast
              </div>
            )}
            {/* Restaurant Image */}
            <Image
              src={restaurant.image}
              alt={restaurant.name}
              width={300}
              height={200}
              className="w-full h-40 object-cover"
            />
            {/* Restaurant Info */}
            <div className="p-4 text-center">
              <h3 className="font-bold text-lg">{restaurant.name}</h3>
              <div className="flex justify-center items-center text-sm mt-2">
                <span className="text-yellow-400">⭐</span>
                <span className="ml-1">{restaurant.rating}</span>
              </div>
              <p
                className={`mt-2 ${
                  restaurant.status === "Open Now"
                    ? "text-green-600"
                    : "text-red-500"
                } font-semibold`}
              >
                {restaurant.status}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* View All Button */}
      <div className="flex justify-center items-center py-8 mt-10">
        <button className="bg-yellow-400 text-white px-6 py-2 rounded-full shadow-lg text-lg font-semibold hover:bg-orange-500 transition duration-300">
          View All ➜
        </button>
      </div>
    </section>
  );
}

// Restaurant Data
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
    name: "Donuts Delight",
    rating: "5.0",
    status: "Open Now",
  },
  {
    image: "/images/food/ff.png",
    name: "Burger House",
    rating: "4.8",
    status: "Open Now",
  },
  {
    image: "/images/food/ne.png",
    name: "Tasty Treats",
    rating: "4.9",
    status: "Open Now",
    discount: "10% off",
    fast: true,
  },
  {
    image: "/images/food/wo.png",
    name: "Pizza Express",
    rating: "4.7",
    status: "Open Now",
    discount: "25% off",
    fast: true,
  },
  {
    image: "/images/food/re.png",
    name: "Grill & Chill",
    rating: "4.5",
    status: "Open Now",
    discount: "15% off",
    fast: true,
  },
  {
    image: "/images/food/hr.png",
    name: "Sweet Desserts",
    rating: "4.9",
    status: "Open Now",
    discount: "20% off",
    fast: true,
  },
];
