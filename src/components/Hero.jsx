import { Link } from "react-router-dom";
import ContentWrapper from "./ContentWrapper";

// import ContentWrapper from "./components/ContentWrapper";
const Hero = () => {
  return (
    <div className="bg-[#af796d]">
      <ContentWrapper>
        <div
          className="w-screen h-screen text-white bg-primaryColor overflow-hidden" /* style={{
            background: "linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 58%, rgba(0, 212, 255, 1) 100%)"
          }} */
        >
          <div className="container mx-auto md:flex md:items-center text-center md:text-left md:justify-evenly md:flex-row-reverse h-[100%]">
            <div className="hidden md:block">
              <img
                className="lg:w-[530px] md:w-[350px] w-[250px]"
                alt="hero"
                src="/images/_hero.png"
              />
            </div>

            <div className="lg:w-5/12 w-full mt-20 h-[90%] flex flex-col align-center justify-center px-6 md:px-0">
              <h1 className="my-4 text-5xl font-bold leading-tight">
                Beautiful Hair for the Perfect Look
              </h1>

              <p className="text-2xl mb-8">
                Explore our store of beautiful wigs to find the hair that makes
                you, You
              </p>

              <div className="flex mx-auto md:mx-0">
                <button className="bg-[#0e1629] hover:bg-[#060911] transition-colors ease-in-out duration-500 text-[#5DD9C1] border-none outline-none w-[100px] md:w-[140px] px-4 py-2 rounded cursor-pointer my-[1rem] text-base font-semibold">
                  <Link to="/shop" className="">
                    Shop
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};
export default Hero;
