import Foods from "./Foods";
import Header from "./Header";
import Hero from "./Hero";
import Info from "./Info";
import TopDestinations from "./TopDestinations";
import Travel from "./Travel";

export default function wireframe() {
  const css = "max-w-[360px] md:max-w-[960px] lg:max-w-[1080px] mx-auto mb-12";
  return (
    <div className="bg-gray-100">
      <Header />
      <div className={`${css} mt-6`}>
        <Hero />
      </div>
      <div className={`${css}`}>
        <TopDestinations />
      </div>
      <div className={`${css}`}>
        <Foods />
      </div>
      <div className={`${css}`}>
        <Info />
      </div>
      <div className={`mx-auto`}>
        <Travel />
      </div>
    </div>
  );
}
