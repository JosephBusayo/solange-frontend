import React from 'react'
import { Footer } from '../Components/Footer'
import { Navbar } from '../Components/Navbar'
import { Products } from '../Components/Products'

export function Home() {
  return (
    <section>
      <Navbar />

      <div className="w-screen h-screen text-white bg-primaryColor overflow-hidden"/* style={{
        background: "linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 58%, rgba(0, 212, 255, 1) 100%)"
      }} */>
        <div className="container mx-auto md:flex md:items-center text-center md:text-left md:justify-evenly md:flex-row-reverse h-[100%]">
          <div className="hidden md:block">
            <img className="lg:w-[530px] md:w-[350px] w-[250px]" alt="hero" src="/images/_hero.png" />
          </div>

          <div className="lg:w-5/12 w-full mt-20 h-[90%] flex flex-col align-center justify-center px-6 md:px-0">
            <h1 className="my-4 text-5xl font-bold leading-tight">
              Beautiful Hair for the Perfect Look
            </h1>

            <p className="text-2xl mb-8">
              Explore our store of beautiful wigs to find the hair that makes you, You
            </p>

            <div className="flex mx-auto md:mx-0">
              <a href="#products" className='ease-in'>
                <button
                  className="hover:text-black hover:bg-[#5DD9C1] bg-black text-[#5DD9C1] font-bold rounded-md  py-4 px-8">
                  {`Explore >`}
                </button>
              </a>
            </div>

          </div>

        </div>
      </div >

      <Products  />
      <Footer />
    </section>
  )
}