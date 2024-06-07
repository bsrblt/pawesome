import React from "react";

interface BackgroundProps {
  children: any;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <section className="bg-bermuda py-12 pt-20 md:py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10 z-0"
        style={{
          backgroundImage: "url('/products1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="relative z-10">{children}</div>
    </section>
  );
};

export default Background;
