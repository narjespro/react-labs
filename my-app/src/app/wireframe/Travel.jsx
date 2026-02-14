function Travel() {
  return (
    <>
      {/* -------- Section 5-------- */}
      <section className=" bg-gray-500 text-white py-16">
        <div className="mx-auto text-center space-y-4 max-w-[360px] md:max-w-max">
          <h2 className="text-2xl md:text-4xl font-semibold ">
            Get Your Travel Inspiration <br /> STRAIGHT To Your Inbox
          </h2>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="border border-white bg-white pl-3 pr-48 text-start text-gray-800 py-2 rounded-full text-sm">search ...</button>
            <button className=" bg-gray-700 px-4 py-2 rounded-full text-sm">Read More</button>
          </div>

          <p className="text-sm">Felt like a dream. Can’t wait to return! An unforgettable journey through Turkey.</p>
        </div>
      </section>
    </>
  )
}

export default Travel
