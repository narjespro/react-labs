"use client"

export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-8 md: items-center">
      <div className="md:col-span-1 md:pe-28">
        <h1 className="text-3xl font-bold text-gray-900 md:text-5xl ">
          Discover the World's <span className="text-gray-600">Hidden</span>
          Wonders
        </h1>
        <p className="text-sm text-gray-700 mt-4 md:text-base">Find the unique moments and hidden gems that ignite unforgettable experiences. From rare encounters to remarkable destinations, we help you uncover the spark that turns every trip into a cherished story.</p>
        <button className="mt-6 px-4 py-2 bg-black text-white rounded-full text-sm hidden md:block">Plan your trip</button>
      </div>

      <div className="grid md:col-span-1 grid-cols-2 grid-rows-2 gap-2 md:gap-4 items-center">
        <div className="bg-gray-700 h-full md:h-80 md:w-full rounded-xl md:col-span-1 row-span-2 col-span-1 md:ms-auto"></div>
        <div className="bg-gray-300 h-32 md:h-64 md:w-full rounded-xl"></div>
        <div className="bg-gray-300 h-32 md:h-64 md:w-full rounded-xl"></div>
        <button className="col-span-2 mt-4 px-4 py-2 bg-black text-white rounded-full text-sm block md:hidden">Plan your trip</button>
      </div>
    </section>
  )
}
