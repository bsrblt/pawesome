import React from "react";
import Background from "../../app/components/layout/Background";
import PageTitle from "../../app/components/ui/PageTitle";
import { bottomSectionData } from "../../app/lib/bottomSectionData";
import BottomSection from "../../app/components/layout/BottomSection";
import Image from "next/image";
import petfive from "public/petfive.jpg";

const OurMission = () => {
  const bottomData = bottomSectionData.ourMission;

  return (
    <>
      <Background>
        <div className="container mx-auto px-4">
          <PageTitle text="Our Mission" />
          <div className="container z-10 relative">
            <div className="px-6 text-lemonlight bg-tahiti rounded-xl">
              <section className="grid divide-y">
                <div className="sm:flex py-5 gap-6">
                  <Image alt="shipping and returns" src={petfive} width={350} />
                  <p className="text-lg max-w-[90rem] leading-loose text-justify">
                    In our mission to provide the best for your pets, we are
                    committed to sourcing only the highest quality ingredients
                    for our pet foods and products. We believe in promoting pet
                    health and wellness through nutrition, ensuring that every
                    product meets our rigorous standards of excellence. With a
                    passion for pets and a dedication to quality, our mission is
                    to enhance the lives of pets and their owners alike, one
                    nutritious meal at a time. We are dedicated to fostering a
                    community of informed pet owners through educational
                    resources and expert advice on pet care and nutrition. At
                    the heart of our mission is sustainability; we prioritize
                    eco-friendly practices and seek suppliers who share our
                    values of environmental responsibility. By reducing our
                    carbon footprint and promoting sustainable sourcing, we aim
                    to make a positive impact on both pet health and the planet.
                    We also support pet adoption initiatives and collaborate
                    with animal welfare organizations to advocate for the
                    well-being of all pets. Join us in our mission to provide
                    pets with the care they deserve, supported by nutritionally
                    balanced and ethically sourced products. Together, we can
                    make a difference in the lives of pets and their devoted
                    owners.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Background>
      <BottomSection data={bottomData} />
    </>
  );
};

export default OurMission;
