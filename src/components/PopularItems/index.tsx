import Image from "next/image";

export default function PopularItems() {
  return (
    <section className="py-10 px-5">
      <h2 className="text-2xl font-bold text-center mb-10 mt-2">Popular items</h2>
      <div className="grid grid-cols-5 gap-0">
        {popularItems.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden text-center"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={200}
              height={200}
              className="w-full h-40 object-cover ml-9 mr-11"
            />
            <h3 className=" flex justify-center items-left font-bold text-lg mt-3">{item.name}</h3>
            <p className="text-yellow-600 text-sm">{item.place}</p>
            <p className="text-l font-bold">${item.price}</p>
            <button className="bg-orange-500 text-white py-2 px-4 w-60 gap-1 rounded-lg mt-3 ml-6">
              Order Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

const popularItems = [
  {
    image: "/images/on.png",
    name: "Cheese Burger",
    place: "Burger Arena",
    price: "3.88",
  },
  {
    image: "/images/tw.png",
    name: "Toffe’s Cake",
    place: "Top Sticks",
    price: "4.00",
  },
  {
    image: "/images/th.png",
    name: "Dancake",
    place: "Cake World",
    price: "1.99",
  },
  {
    image: "/images/four.png",
    name: "Crispy Sandwich",
    place: "Fastfood Dine",
    price: "3.00",
  },
  {
    image: "/images/fv.png",
    name: "Thai Soup",
    place: "Foody man",
    price: "2.79",
  },
];
