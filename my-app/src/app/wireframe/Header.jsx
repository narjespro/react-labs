"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons"

export default function Header() {
  const navLinks = ["Insurance", "Travel tips", "Inspiration", "Sites", "Blog"]

  return (
    <header className="bg-white shadow-sm py-3 ">
      <div className="flex items-center justify-between max-w-[360px] md:max-w-[960px] lg:max-w-[1080px] mx-auto">
        <div className="text-lg font-bold text-gray-700">Logo</div>
        <ul className="hidden md:flex space-x-16 text-sm text-gray-700">
          {navLinks.map((link, idx) => (
            <li key={idx} className="hover:text-black cursor-pointer">
              {link}
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-4">
          <FontAwesomeIcon icon={faSearch} className="text-gray-600 w-4 h-4" />
          <button className="bg-black text-white px-4 py-1 rounded-full text-sm">Sign in</button>
          <FontAwesomeIcon icon={faBars} className="md:hidden text-gray-800 w-5 h-5" />
        </div>
      </div>
    </header>
  )
}
