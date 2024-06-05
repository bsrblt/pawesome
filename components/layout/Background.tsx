import React from "react";

interface BackgroundProps {
  children: any;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <section className="bg-bermuda py-12 pt-4 md:py-24 relative">
      <div
        className="absolute inset-0 opacity-10 z-0 bg-scroll"
        style={{
          backgroundImage: "url('products1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      {children}
    </section>
  );
};

export default Background;
