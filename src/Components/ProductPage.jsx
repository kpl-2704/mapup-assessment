import React from "react";
import { FaAngleDown, FaArrowUpRightFromSquare } from "react-icons/fa6";
import Header from "../GenericComponents/Header";
import Footer from "../GenericComponents/Footer";

function ProductPage() {
  return (
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
              className="w-full h-auto object-contain rounded-lg"
              poster="https://cdn.tollguru.com/mapup-website/TollTally/tolltally-thumbnail.png"
            >
              <source
                src="https://cdn.tollguru.com/mapup-website/TollTally/s1-vid-transy.webm"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <h1 className="text-3xl md:text-[3rem] font-bold leading-snug text-left">
              Real-time tolls with GPS tracks
            </h1>
            <p className="text-gray-400 text-lg max-w-lg text-left">
              Use TollTally™ to streamline toll billing, reduce billing cycle
              time, and gain real-time visibility into toll spend.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="text-center bg-[#00AEEF] text-black px-8 py-3 rounded-md font-medium hover:bg-[#0095cc] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00AEEF] transition"
              >
                Integrate Us →
              </a>
              <a
                href="#"
                className="text-center border border-[#00AEEF] text-[#00AEEF] px-8 py-3 rounded-md font-medium hover:bg-[#00AEEF] hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00AEEF] transition"
              >
                Schedule A Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-20 text-center max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          GPS-based toll management & reporting in one place
        </h2>
        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
          TollTally™ gives near-real-time billing, detailed toll expense
          reports, and GPS-track auditing — all in one dashboard.
        </p>
        <div className="mx-auto">
          <video
            controls
            poster="https://cdn.tollguru.com/mapup-website/TollTally/tolltally-thumbnail.png"
            className="w-full h-auto object-contain rounded-lg"
          >
            <source
              src="https://cdn.tollguru.com/mapup-website/TollTally/tolltally-v1.mp4"
              type="video/mp4"
            />
            Your browser does not support video tag.
          </video>
        </div>
      </section>

      <section className="px-8 text-center max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          How It Works — 3 Simple Steps
        </h2>
        <p className="text-gray-400 mb-6">
          Sign up, send GPS tracks, and get detailed reports. Simple,
          transparent, fast.
        </p>
        <div className="mx-auto">
          <img
            src="https://cdn.tollguru.com/mapup-website/TollTally/tolltally-steps-01-01.png"
            alt="Diagram: Sign-up → GPS tracks → Access toll & expense reports"
            className="w-full h-auto object-contain rounded-lg"
          />
        </div>
      </section>

      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Integrate TollTally today to simplify your toll billing
        </h2>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-[#14B8FF] text-white px-8 py-3 rounded-md font-medium hover:bg-[#0ea5e9] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#14B8FF] transition-colors">
            Integrate Us
          </button>
          <button className="border border-[#14B8FF] text-[#14B8FF] px-8 py-3 rounded-md font-medium hover:bg-[#14B8FF] hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#14B8FF] transition-colors">
            Schedule A Demo
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ProductPage;
