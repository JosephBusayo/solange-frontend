import React from "react";

function Home() {
  return (
    <div className="">
      <div className="h-screen bg-gray-50 flex items-center">
        <div className="bg-cover bg-center py-32 w-full">
          <div className="container mx-auto text-left text-white">
            <div className="flex items-center">
              <div className="w-1/2 text-black">
                <h1 className="text-5xl max-w-[700px] text-center font-medium mb-6">
                  Welcome to <br />
                  <span className="text-[#b35348] font-bold text-7xl">
                    Solange Luxury Hair Store
                  </span>
                </h1>
                <p className="text-xl mb-12 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  viverra euismod odio, gravida pellentesque urna varius vitae.
                </p>
                <div className="text-center hover:transition transition-transform hover:scale-105">
                  <a
                    href="#"
                    className="bg-[#b35348] text-white py-3 font-semibold px-12 rounded-lg hover:bg-[#b35478]"
                  >
                    Purchase an item
                  </a>
                </div>
              </div>
              <div className="w-1/2 pl-16">
                <img
                  src="close-up-portrait-beautiful-teenager.jpg"
                  className="w-full object-cover rounded-xl h-[420px]"
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

export default Home;
