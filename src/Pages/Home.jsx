import React from 'react'
import { Footer } from '../Components/Footer'
import { Navbar } from '../Components/Navbar'
import { Products } from '../Components/Products'

export function Home({ products }) {
  return (
    <section>
      <Navbar />

      <div className="w-screen h-screen text-white bg-primaryColor"/* style={{
        background: "linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 58%, rgba(0, 212, 255, 1) 100%)"
      }} */>
        <div className="container mx-auto flex items-center justify-evenly flex-row-reverse">
          <div>
            <img className="lg:w-[520px] md:w-[350px] w-[250px]" alt="hero" src="/images/_hero.png" />
          </div>

          <div className="lg:w-5/12 w-full">
            <h1 className="my-4 text-5xl font-bold leading-tight">
              Turn your designs into production-ready frontend
            </h1>
            <p className="text-2xl mb-8">
              Ship products 5-10x faster with your existing design tools, tech stacks & workflows!
            </p>
            <div className="flex mx-auto">
              <button
                className="hover:underline bg-white text-gray-800 font-bold rounded-full  py-4 px-8">
                View Projects
              </button>
              <button
                className="ml-4 hover:underline bg-white text-gray-800 font-bold rounded-full  py-4 px-8">
                Plugins
              </button>
            </div>
          </div>

        </div>
      </div >

      <Products products={products} />
      <Footer />
    </section>
  )
}
