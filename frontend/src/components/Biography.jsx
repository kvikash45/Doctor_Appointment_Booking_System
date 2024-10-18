import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            At ZeeHealtCare, we are dedicated to providing high-quality healthcare services with compassion, expertise, and innovation. Our team of skilled doctors, nurses, and medical professionals is committed to delivering personalized care across a wide range of specialties. Whether you're here for a routine check-up, specialized treatment, or urgent care, we prioritize your health and well-being above all.
          </p>
          <p>With state-of-the-art facilities and a patient-centered approach, we strive to ensure that every visit is a positive experience. We believe in the power of healthcare technology, which is why our advanced hospital management system allows patients to easily book appointments, communicate with our team, and receive timely updates—all from the comfort of their home.</p>
          <p>Our mission is to make healthcare more accessible, efficient, and responsive to the needs of our community. At [Hospital Name], you're not just a patient; you're part of our family, and we are here to support you every step of the way on your health journey.</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
