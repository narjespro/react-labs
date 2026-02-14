function Info() {
  return (
    <>
      {/* -------- Section 4-------- */}
      <section className="hidden md:block md:grid md:grid-cols-4 gap-8 items-start">
        <div className="md:col-span-2 md:space-y-4">
          <div>
            <h3 className="md:text-lg font-semibold text-gray-700">Maria Angelica</h3>
            <p className="text-xs text-yellow-500 mb-2">★ ★ ★ ★ ★</p>
            <p className="text-sm text-gray-600 pr-16">An unforgettable journey through Turkey. The local hospitality, food, and unique culture made this an adventure of a lifetime. From the bustling bazaars to the peaceful countryside, everything felt like a dream. Can’t wait to return!An unforgettable journey through Turkey. The local hospitality, food, and unique culture made this an adventure of a lifetime. From the bustling bazaars to the peaceful countryside, everything felt like a dream. Can’t wait to return!</p>
          </div>
        </div>
        <div className="md:col-span-2 grid grid-cols-2 gap-4">
          <div className="bg-gray-300 h-80 rounded-xl"></div>
          <div className="bg-gray-300 h-48 rounded-xl flex items-center justify-center"></div>
        </div>
      </section>
    </>
  )
}

export default Info
