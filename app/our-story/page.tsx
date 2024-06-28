import React from "react";
import Background from "../../app/components/layout/Background";
import PageTitle from "../../app/components/ui/PageTitle";
import { bottomSectionData } from "../../app/lib/bottomSectionData";
import BottomSection from "../../app/components/layout/BottomSection";
import Image from "next/image";
import babydog from "public/babydog.jpg";

const OurStory = () => {
  const bottomData = bottomSectionData.ourStory;

  return (
    <>
      <Background>
        <div className="container mx-auto px-4">
          <PageTitle text="Our Story" />
          <div className="container z-10 relative">
            <div className="px-6 text-lemonlight bg-tahiti rounded-xl">
              <section className="grid divide-y">
                <div className="sm:flex py-5 gap-6">
                  <Image alt="shipping and returns" src={babydog} width={425} />
                  <p className="text-lg max-w-[90rem] leading-loose text-justify">
                    Founded in 2024, Pawesome started with a simple mission: to
                    provide pets with the highest quality nutrition and care.
                    Our journey began in a small garage, where our founders
                    crafted homemade recipes for their beloved pets. As word
                    spread about the health benefits and delicious flavors of
                    our recipes, demand grew, and Pawesome was born. Over the
                    years, we have expanded our product line to offer a wide
                    range of nutritious pet foods and treats, all made with
                    natural ingredients sourced from trusted suppliers around
                    the world. Each recipe is carefully formulated to meet the
                    specific dietary needs of pets, ensuring optimal health and
                    vitality. Our commitment to quality extends beyond our
                    products. We operate with transparency and integrity,
                    ensuring that every ingredient meets rigorous standards for
                    safety and nutritional value. We are proud to be a trusted
                    name in the pet care industry, serving thousands of
                    satisfied customers nationwide. Today, Pawesome continues to
                    innovate and evolve, guided by our passion for pets and
                    dedication to excellence. We remain committed to enriching
                    the lives of pets and their owners, one nutritious meal at a
                    time. Join us on our journey to provide pets with the care
                    they deserve, supported by products that prioritize health,
                    happiness, and well-being.
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

export default OurStory;
