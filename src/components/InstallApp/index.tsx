import Image from "next/image";

export const InstallApp = () => {
  return (
    <div className="bg-[#FFEFC3] py-10 text-center px-4">
      <h2 className="text-lg sm:text-xl font-semibold text-yellow-500">Install the app</h2>
      <p className="text-gray-700 mt-2 max-w-md mx-auto text-sm sm:text-base">
        It’s never been easier to order food. Look for the finest discounts and you’ll be lost in a world of delectable food.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 items-center">
        <Image 
          src="/images/install/app.png" 
          alt="Google Play" 
          width={320} 
          height={140} 
          className="max-w-[50%] sm:max-w-[40%] md:max-w-none"
        />
        <Image 
          src="/images/install/pl.png" 
          alt="App Store" 
          width={320} 
          height={140} 
          className="max-w-[50%] sm:max-w-[40%] md:max-w-none"
        />
      </div>
    </div>
  );
};
