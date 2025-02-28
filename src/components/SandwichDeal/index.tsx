import Image from "next/image";
export default function SandwichDeal() {
  return (
    <>
      {" "}
      <div className="flex bg-white rounded-2xl shadow-lg py-6 overflow-hidden">
        <div className="w-1/3  px-14 py-14 flex flex-col  ">
          <h2 className="text-black text-2xl font-semibold">
            Best deals{" "}
            <span className="text-yellow-500 font-extrabold">
              Crispy <br /> Sandwiches
            </span>
          </h2>
          <p className="text-gray-500 mt-4 mb-14  ">
            Enjoy the large size of sandwiches. Complete perfect slice of
            sandwiches.
          </p>
          <button className="mt-14 bg-yellow-500 text-white py-4 px-6 rounded-lg shadow-md hover:bg-yellow-600">
            PROCEED TO ORDER ➝
          </button>
        </div>
        <div className="w-1/7">
          <img
            src="/images/sand/tdy.png"
            alt="Crispy Sandwiches"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex bg-white py-9 rounded-2xl shadow-lg overflow-hidden">
        <div className="w-1/7">
          <img
            src="/images/sand/kb.png"
            alt="Crispy Sandwiches"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/3  px-14 py-14 flex flex-col  ">
          <h2 className="text-black text-2xl font-semibold">
            Best deals{" "}
            <span className="text-yellow-500 font-extrabold">
              Crispy <br /> Sandwiches
            </span>
          </h2>
          <p className="text-gray-500 mt-4 mb-14  ">
            Enjoy the large size of sandwiches. Complete perfect slice of
            sandwiches.
          </p>
          <button className="mt-14 bg-yellow-500 text-white py-4 px-6 rounded-lg shadow-md hover:bg-yellow-600">
            PROCEED TO ORDER ➝
          </button>
        </div>
      </div>
      <div className="flex bg-white rounded-2xl py-14 shadow-lg overflow-hidden">
        <div className="w-1/3  px-14 py-14 flex flex-col  ">
          <h2 className="text-black text-2xl font-semibold">
            Best deals{" "}
            <span className="text-yellow-500 font-extrabold">
              Crispy <br /> Sandwiches
            </span>
          </h2>
          <p className="text-gray-500 mt-4 mb-14  ">
            Enjoy the large size of sandwiches. Complete perfect slice of
            sandwiches.
          </p>
          <button className="mt-14 bg-yellow-500 text-white py-4 px-6 rounded-lg shadow-md hover:bg-yellow-600">
            PROCEED TO ORDER ➝
          </button>
        </div>
        <div className="w-1/7">
          <img
            src="/images/sand/za.png"
            alt="Crispy Sandwiches"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
}
