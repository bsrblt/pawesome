import React from "react";

const Dog = () => {
  return (
    <section className="bg-bermuda py-12 md:py-24 relative">
      <div
        className="absolute inset-0 opacity-10 z-0"
        style={{
          backgroundImage: "url('products1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center relative z-10"></div>
    </section>
  );
};

export default Dog;
