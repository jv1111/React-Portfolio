import React from "react";

const CTA = () => {
  return (
    <section className="bg-primary py-6">
      <div className="container">
        <div className="wrapper flex flex-col gap-2 items-center text-center text-text">
          <h2 className="text-2xl">Get in touch</h2>
          <p>
            Let’s build innovative solutions together. Get in touch to discuss
            your project.
          </p>
          <button className="btn bg-black border text-white duration-400 hover:border-primary hover:text-primary">
            CONTACT
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
