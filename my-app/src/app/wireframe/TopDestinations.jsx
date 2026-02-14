function TopDestinations() {
  const places = ["Vietnam", "Croatia", "Turkey", "Australia"]
  return (
    <>
      {/* -------- Section 2-------- */}
      <section>
        <h2 className="text-xl md:text-2xl md:mb-3 font-semibold mb-2 text-gray-700">Top Destinations</h2>
        <p className="text-sm text-gray-800 mb-2">experiences. From rare encounters to remarkable destinations, we help</p>

        <div className="flex gap-2 overflow-x-auto scrollbar-hide md:grid md:grid-cols-4 md:gap-6 md:overflow-x-visible">
          {places.map((place, i) => (
            <div key={i} className="flex-shrink-0 bg-gray-300 h-52 w-40 md:w-full rounded-xl flex items-end p-2"></div>
          ))}
        </div>

        <div className="mt-4">
          <button className="border border-gray-600 text-gray-800 px-4 py-1 rounded-full text-sm">Explore all destinations</button>
        </div>
      </section>
    </>
  )
}

export default TopDestinations
