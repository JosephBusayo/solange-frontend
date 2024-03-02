import React from "react";

export function Home() {
  return (
    <div className="mx-4">
      <div className="min-h-screen bg-gray-50 flex items-center">
        <div className="lg:flex lg:items-center bg-cover bg-center py-32 w-full">
          <div className="container mx-auto text-black">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 text-center lg:text-left lg:pr-16">
                <h1 className="text-4xl lg:text-5xl max-w-[700px] font-medium mb-6 lg:text-left">
                  Welcome to <br />
                  <span className="text-[#b35348] font-bold text-5xl lg:text-7xl">
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
                    className="bg-[#b35348] text-white py-3 px-6 lg:px-12 font-semibold rounded-lg hover:bg-[#b35478]"
                  >
                    Purchase an item
                  </a>
                </div>
              </div>
              <div className="lg:w-1/2 mt-8 lg:mt-0">
                <img
                  src="close-up-portrait-beautiful-teenager.jpg"
                  className="w-full object-cover rounded-xl h-[320px] lg:h-[420px]"
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
