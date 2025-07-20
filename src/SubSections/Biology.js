import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const BiologyLab = () => {
  return (
    <section
      className="relative py-16 px-6 md:px-20 font-[Lato] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/bio.jpg')" }}
    >
      {/* Main Content Box */}
      <div className="bg-white mt-8 bg-opacity-60 backdrop-blur-sm p-8 rounded-lg shadow-xl">
        {/* Back Link and Title */}
        <div className="mb-10">
          <Link
            to="/academics"
            className="text-lg text-black mt-2 font-[700] inline-block mb-2"
          >
            &lt; Back
          </Link>
          <h2 className="text-3xl font-[700] text-gray-800">Biology Lab</h2>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-start font-[700]">
          {/* Image */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/chemistry-lab.jpg"
              alt="Biology Lab"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <p className="mb-4">
              Our Biology Lab is a vibrant space designed for young scientists to
              explore life sciences in depth. Equipped with high-quality
              microscopes, models, and anatomical charts, students perform hands-on
              experiments to observe cells, tissues, and living organisms.
            </p>
            <p className="mb-4">
              The lab supports curriculum-based learning as well as independent
              exploration under the supervision of experienced faculty. With a
              focus on safety and curiosity, our lab fosters scientific thinking
              and practical understanding of biology concepts.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Cards Section */}
<div className="mt-16 grid md:grid-cols-3 gap-8">
  {/* Card 1 */}
  <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
    <div className="h-[300px] overflow-hidden">
      <img
        src="/images/micro.png"
        alt="Microscope Work"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-3 text-center">
      <h3 className="text-lg font-semibold">Microscopic Studies</h3>
    </div>
  </div>

  {/* Card 2 */}
  <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
    <div className="h-[300px] overflow-hidden">
      <img
        src="/images/anatomy.png"
        alt="Anatomy Practice"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-3 text-center">
      <h3 className="text-lg font-semibold">Human Anatomy</h3>
    </div>
  </div>

  {/* Card 3 */}
  <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
    <div className="h-[300px] overflow-hidden">
      <img
        src="/images/learn.png"
        alt="Dissection"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-3 text-center">
      <h3 className="text-lg font-semibold">Hands-On Learning</h3>
    </div>
  </div>
</div>


  {/* Right Arrow Navigation*/}
<Link
  to="/academics/chemistry-lab"
  className="flex items-center justify-center fixed right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-[#1e2a50] hover:text-white text-black p-2 sm:p-3 rounded-full shadow-lg transition z-50 text-sm sm:text-base"
>
  <FaArrowRight className="text-lg sm:text-xl" />
</Link>


    </section>
  );
};

export default BiologyLab;
