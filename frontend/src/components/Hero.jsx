import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          At ZeeCare Medical Institute, we are dedicated to delivering high-quality healthcare with a patient-first approach. Our state-of-the-art facility and expert medical team provide a wide range of services, from preventive care to advanced treatments, all tailored to meet your individual needs. Your health and well-being are our top priorities. <br /> <br />We believe that healthcare is about more than just treating illness—it's about promoting overall wellness. At ZeeCare, we offer holistic care that addresses your physical, mental, and emotional health in a welcoming and supportive environment. Whether you need routine check-ups or specialized care, we are here to guide you toward a healthier, happier life.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
