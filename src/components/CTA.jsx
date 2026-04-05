import React from "react";

const CTA = () => {
  return (
    <section className="bg-primary py-6">
      <div className="container flex flex-col gap-2 items-center text-center text-text">
        <div className="wrapper">
          <h2 className="text-2xl">Get in touch</h2>
          <p>
            Let’s build innovative solutions together. Get in touch to discuss
            your project.
          </p>
          <button className="btn bg-black text-white hover:bg-gray-700">
            CONTACT
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
