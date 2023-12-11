import React from "react";
import background from "../assets/background.jpg"; 

const Hero = () => {
  return (
    <section className="w-full h-[35vh] bg-cover bg-no-repeat flex items-end overflow-hidden" style={{ background: `url(${background})` }}>
      <div className="text-white text-dynamic p-2">
        <h1 className="text-white text-dynamic p-2">
          Unlock your mind, Explore the world with The Curious <span>CAST</span> 

        </h1>
      </div>
    </section>
  );
};

export default Hero;
