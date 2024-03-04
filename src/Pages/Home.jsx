import React from "react";

export function Home() {
  return (
    <div className="px-4 bg-gray-50">
      <div className="min-h-screen flex items-center">
        <div className="lg:flex lg:items-center bg-cover bg-center py-16 w-full">
          <div className="container mx-auto text-black">
            <div className="lg:flex items-center lg:order-last">
              <div className="lg:w-1/2 text-center lg:text-left lg:pr-16">
                <h1 className="text-4xl lg:text-5xl max-w-[700px] font-medium mb-6 lg:text-left">
                  Welcome to <br />
                  <span className="text-[#f5deb3] font-bold text-5xl lg:text-7xl">
                    Solange Luxury Hair Store
                  </span>
                </h1>
                <p className="text-lg lg:text-xl mb-12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  viverra euismod odio, gravida pellentesque urna varius vitae.
                </p>
                <div className="text-center lg:text-left hover:transition transition-transform hover:scale-105">
                  <a
                    href="#"
                    className="bg-[#f5deb3] text-white py-3 px-6 lg:px-12 font-semibold rounded-lg hover:bg-[#b35478]"
                  >
                    Purchase an item
                  </a>
                </div>
              </div>
              <div className="lg:w-1/2 mt-8 lg:mt-0">
                <img
                  src="close-up-portrait-beautiful-teenager.jpg"
                  className="w-full object-cover rounded-xl h-[300px] lg:h-[420px]"
                  alt="Layout Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
