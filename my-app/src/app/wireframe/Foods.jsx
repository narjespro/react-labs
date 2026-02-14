function Foods() {
  const items = [1, 2, 3]
  return (
    <>
      {/* -------- Section 3 */}
      <section className="w-full">
        <div className="max-w-8xl mx-auto grid md:grid-cols-4 gap-16">
          <div className="md:col-span-2 space-y-4">
            <div className="bg-gray-300 h-48 md:h-80 rounded-xl"></div>
            <div>
              <h3 className="font-semibold text-sm text-gray-700">Food and Drink</h3>
              <h4 className="text-xs md:text-base md:font-bold mt-1 text-gray-600">Los Angeles food & drink guide: 10 things to try in Los Angeles, California</h4>
              <p className="text-xs mt-1 text-gray-400">Aug 8, 2024 • 4 min read</p>
            </div>
          </div>
          <div className="md:col-span-2 space-y-4">
            {items.map(i => (
              <div key={i} className="flex gap-3 items-start">
                <div className="bg-gray-300 h-32 w-32 rounded-xl"></div>
                <div>
                  <h3 className="font-semibold text-sm text-gray-400">Category</h3>
                  <p className="text-xs text-gray-600 mt-1">Short description about the story goes here...</p>
                  <p className="text-xs text-gray-400 mt-1">Date • 3 min read</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="my-2 md:hidden">
          <button className="border border-gray-600 text-gray-800 px-4 py-1 rounded-full text-sm">read more</button>
        </div>
      </section>
    </>
  )
}

export default Foods
