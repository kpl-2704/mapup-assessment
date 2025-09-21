import React from "react";
import Footer from "../GenericComponents/Footer";

export default function LandingPage() {
  const clientLogos = [
    {
      name: "dolly",
      logo: "https://dolly.com/images/dolly-by-taskrabbit-horizontal-gray.svg",
    },
    {
      name: "FRAYT",
      logo: "https://cdn.prod.website-files.com/64c38e22ac9afb7a3c026707/64cb3eccff6b26c9a529e9d4_FRAYT_logo.svg",
    },
    {
      name: "Dispatch",
      logo: "https://dispatch.me/wp-content/uploads/2022/05/sit-logo-dark.png",
    },
    {
      name: "MNX",
      logo: "https://www.mnx.com/wp-content/uploads/Frame-3817-2.png",
    },

    {
      name: "Getaround",
      logo: "https://getaround.com/packs/images/app/assets/images/shared/getaround-logo.245e368962541c3c.svg",
    },
    {
      name: "inDrive",
      logo: "https://indrive.com/images/logo/logo--white.svg",
    },
  ];

  return (
    <div className="bg-[#0A0F1C] text-white font-sans">
      <section className="relative bg-[#0b1221] min-h-[90vh] flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-3xl z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Smarter tolling, <br /> seamless fleet management
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
            AI-powered toll optimization • Instant billing • Automated payments
            • Auditing & Insights
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 rounded-lg bg-cyan-500 hover:bg-cyan-600 font-semibold text-lg transition">
              Get Started
            </button>
            <button className="px-8 py-4 rounded-lg border border-cyan-500 text-cyan-400 hover:bg-cyan-600/20 font-semibold text-lg transition">
              Schedule a Demo
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl opacity-90">
          <img
            src="https://cdn.tollguru.com/mapup-website/Homepage/hero/vehicle_blue_mobile.png"
            alt="Vehicles Illustration"
            className="w-full object-contain"
          />
        </div>
      </section>

      <section className="bg-[#0b1221] py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-10">
            Trusted by leading fleets worldwide
          </h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-90">
            {clientLogos?.map((client, idx) => (
              <img
                key={idx}
                src={client?.logo}
                alt={client?.name}
                className="h-12 md:h-14 object-contain max-w-[120px]"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b1221] py-20 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Coverage across{" "}
              <span className="text-cyan-400">90+ countries</span> — the #1
              tolling choice for global fleets
            </h2>
            <p className="text-gray-300">
              Our solutions scale across borders, ensuring consistent toll
              accuracy wherever your fleet travels.
            </p>
          </div>
          <div className="flex rounded-xl overflow-hidden shadow-lg">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-[400px]  object-cover"
              poster="https://cdn.tollguru.com/mapup-website/Homepage/earth-element/earth-poster.jpg"
            >
              <source
                src="https://cdn.tollguru.com/mapup-website/Homepage/earth-element/webm-transy.webm"
                type="video/webm"
              />
            </video>
          </div>
        </div>
      </section>

      <section className="bg-[#0b1221] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug max-w-4xl mx-auto">
              Say goodbye to surprise toll bills. <br /> Drive efficiency with
              our solutions.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                alt: "TollGuru",
                band: "tollguru-band.png",
                desc: "Tolls, fuel & route optimization",
              },
              {
                alt: "TollTally",
                band: "tolltally-band.png",
                desc: "GPS-based real-time toll billing",
              },
              {
                alt: "TollMatch",
                band: "tollmatch-band.png",
                desc: "Seamless toll reconciliation",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="text-center space-y-6 p-10 rounded-2xl border border-white/10 bg-white/5 hover:border-cyan-400 hover:bg-cyan-400/5 transition-all duration-300 shadow-md hover:shadow-cyan-400/20"
              >
                <img
                  src={`https://cdn.tollguru.com/mapup-website/${card.alt}/${card.band}`}
                  alt={card.alt}
                  className="h-16 md:h-20 mx-auto object-contain"
                />
                <p className="text-gray-300 text-lg">{card.desc}</p>
                <a
                  href={`/${card.alt.toLowerCase()}`}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
                >
                  Learn More
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cyan-400 text-black py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Cut toll costs. Drive smarter.
          </h2>
          <p className="text-lg md:text-xl text-black/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Optimize tolls, save money, and give your drivers a seamless
            experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 rounded-lg bg-[#0b1221] text-white hover:bg-[#1a2332] font-semibold text-lg">
              Get Started
            </button>
            <button className="px-8 py-4 rounded-lg bg-[#0b1221] text-white hover:bg-[#1a2332] font-semibold text-lg">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
