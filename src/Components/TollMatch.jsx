import React from "react";
import Header from "../GenericComponents/Header";
import Footer from "../GenericComponents/Footer";

export default function TollMatch() {
  return (
    <div>
      <div className="bg-[#0A0F1C] text-white font-sans">
        <Header />

        <section className="px-8 py-20 max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-contain rounded-lg shadow-lg"
                poster="https://cdn.tollguru.com/mapup-website/TollTally/tolltally-thumbnail.png"
              >
                <source
                  src="https://cdn.tollguru.com/mapup-website/TollMatch/tollmatch-landing-video.webm"
                  type="video/mp4"
                />
              </video>
            </div>

            <div className="w-full md:w-1/2 flex flex-col gap-6 text-left">
              <h1 className="text-3xl md:text-[2.8rem] font-bold leading-snug">
                Stop overpaying & <br />
                worrying about tolls with{" "}
                <span className="inline-flex items-start">
                  <img
                    src="https://mapup.ai/tollmatch-logo.png"
                    alt="TollMatch Logo"
                    className="inline-block h-10 md:h-12 align-middle"
                  />
                  <span className="text-[12px] ml-1 align-top">®</span>
                </span>
              </h1>

              <p className="text-gray-300 text-lg max-w-lg leading-relaxed">
                GPS-based toll auditing, improved truck-transponder pairing and
                ready-to-file disputes to maximize toll savings.
              </p>

              <a
                href="#"
                className="text-center bg-[#00AEEF] text-black px-8 py-3 rounded-md font-semibold hover:bg-[#0095cc] transition"
              >
                Schedule A Demo
              </a>
            </div>
          </div>
        </section>

        <section className="max-w-[1130px] mx-auto px-6">
          <img
            className="rounded-lg shadow-lg"
            src="https://cdn.tollguru.com/mapup-website/tollmatch-image-5-v2-01.webp"
            alt="TollMatch dashboard insights"
          />
        </section>

        <section className="px-8 py-20 text-center max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Slash toll inefficiencies with real-time audits
          </h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            TollMatch™ audits agency bills against GPS data and provides
            actionable intelligence to reduce overpaid tolls, file disputes, and
            forecast future expenses.
          </p>
          <div className="mx-auto">
            <video
              controls
              poster="https://cdn.tollguru.com/mapup-pilot/thumbnail.jpg"
              className="w-full h-auto object-contain rounded-lg shadow-lg"
            >
              <source
                src="https://cdn.tollguru.com/mapup-website/TollMatch/TollMatch_new.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </section>

        <section className="px-8 py-20 max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="https://cdn.tollguru.com/mapup-pilot/rental-pilot/driving-wheel-pointers.jpg"
                alt="Truck transponder efficiency"
                className="w-full max-w-md rounded-lg object-contain shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Why choose TollMatch?
              </h2>
              <ul className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <li>
                  ✅ Maximize savings with better truck-transponder pairing
                </li>
                <li>✅ Recover overpaid tolls with ready-to-file disputes</li>
                <li>✅ Accurate toll billing & driver reimbursements</li>
                <li>✅ Forecast spend with actionable insights</li>
              </ul>
              <div className="mt-10">
                <a
                  href="#"
                  className="bg-[#00AEEF] text-black px-8 py-3 rounded-md font-semibold hover:bg-[#0095cc] transition"
                >
                  Schedule A Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="px-8 py-20 max-w-[1200px] mx-auto text-center">
          <div className="mb-10">
            <img
              src="https://cdn.tollguru.com/mapup-website/news/FirstFleetLogo.png"
              alt="FirstFleet Logo"
              className="h-12 md:h-16 mb-6 mx-auto"
            />
            <p className="text-lg md:text-xl italic text-gray-300 max-w-4xl mx-auto leading-relaxed">
              “TollMatch provides us visibility into a very real cost of doing
              business as a nationwide carrier. The visibility and analysis
              tools included help us quickly categorize and manage toll
              inefficiencies that ultimately impact the cost of service to our
              customers.”
            </p>
            <p className="text-lg md:text-xl italic text-[#00AEEF] max-w-4xl mx-auto mt-4 leading-relaxed">
              “Through TollMatch’s insights, we identified mismatches, orphaned
              transponders, and inefficient plate tolling that we can now better
              manage.”
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 mb-16">
            <img
              src="https://mapup.ai/Austin-handerson-FirstFleet-Headshot.jpeg"
              alt="Austin Henderson"
              className="w-16 h-16 rounded-full object-cover border-2 border-gray-600"
            />
            <div className="text-left">
              <p className="font-semibold">Austin Henderson</p>
              <p className="text-gray-400">CIO, FirstFleet</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to see TollMatch in action?
            </h3>
            <a
              href="#"
              className="inline-block border border-[#00AEEF] text-[#00AEEF] px-8 py-3 rounded-md font-semibold hover:text-black transition"
            >
              Schedule A Demo
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
