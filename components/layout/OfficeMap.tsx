import React from "react";

const location =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3013.0337353288664!2d29.083769300000004!3d40.95883979999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac6e3ec2eebf1%3A0x71425d87fcd56377!2zQmHEn2RhdCBDYWQuLCDEsHN0YW5idWw!5e0!3m2!1str!2str!4v1706577041472!5m2!1str!2str";

const OfficeMap = () => {
  return (
    <div className="z-10">
      <iframe
        src={location}
        width="100%"
        height="100%"
        title="map"
        style={{
          margin: 0,
          padding: 0,
          border: "none",
          overflow: "hidden",
        }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default OfficeMap;
