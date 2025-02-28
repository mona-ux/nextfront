export default function Order() {
  return (
    <div
      className="relative w-full h-96 flex items-center justify-center bg-cover bg-center px-6"
      style={{ backgroundImage: "url('/images/footer/last.png')" }}
    >
      <div className="text-center text-white max-w-lg">
        <h2 className="text-2xl md:text-3xl font-extrabold leading-snug">
          Are you ready to order with <br className="hidden md:block" /> the best deals?
        </h2>
        <button className="mt-10 bg-gradient-to-r from-[#F15E28] to-[#F17228] text-white py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
          Proceed to order &gt;
        </button>
      </div>
    </div>
  );
}
