import React from "react";
// import pic from "./../../public/img.png";

const Home = () => {
  return (
    <div className="pt-20">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 px-4">
        {/* Here is the content of the page */}
        <div className="flex flex-1 flex-col items-center lg:items-start">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-center lg:text-left mb-6 lg:pl-10 ml-2">
            Home to the website of eduardoloz
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-center lg:text-left mb-6 lg:pl-10">
            This is a website built with React and Tailwind CSS. Version 3.0 of the website.
          </p>
        </div>
        {/* Image */}
        <div className="flex justify-center lg:justify-end flex-1 mb-10 md:mb-16 lg:mb-0">
          <img
            src="https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png"
            alt="Website Preview"
            className="w-full max-w-xs lg:max-w-md object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
