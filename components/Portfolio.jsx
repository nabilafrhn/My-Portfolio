import Image from "next/image";
import React from "react";

const Portfolio = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 text-center">
      <h1 className="font-bold text-2xl p-4">About Alora </h1>
      <p className="text-center">
      Here are some of our products. We provide products with high quality
      </p>
      <div className="grid grid-rows-none md:grid-cols-5 p-4 gap-4 ">
        <div className="w-full h-full col-span-2 md:col-span-3 row-span-2"></div>
        <div className="w-full h-full">
          <Image
            src="/product2.jpg"
            alt="/"
            width="215"
            height="217"
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="/kaos1.jpg"
            alt="/"
            width="215"
            height="217"
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="/product4.jpg"
            alt="/"
            width="215"
            height="217"
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="/product6.jpg"
            alt="/"
            width="215"
            height="217"
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
