import React from "react";
import Background from "../../app/components/layout/Background";
import PageTitle from "../../app/components/ui/PageTitle";
import { bottomSectionData } from "../../app/lib/bottomSectionData";
import BottomSection from "../../app/components/layout/BottomSection";
import Image from "next/image";
import petdeliver from "public/petdeliver.jpg";

const ShippingReturns = () => {
  const bottomData = bottomSectionData.shippingReturns;

  return (
    <>
      <Background>
        <div className="container mx-auto px-4">
          <PageTitle text="Shipping and Returns" />
          <div className="container z-10 relative">
            <div className="px-6 text-lemonlight bg-tahiti rounded-xl">
              <section className="grid divide-y">
                <div className="sm:flex py-5 gap-6">
                  <Image
                    alt="shipping and returns"
                    src={petdeliver}
                    width={330}
                  />
                  <p className="text-lg mt-1 max-w-[90rem] leading-loose text-justify">
                    We offer reliable shipping services to ensure your pet food
                    and supplies arrive safely and on time. Standard shipping
                    within the United States typically takes 3-5 business days
                    for delivery. Orders over $100 qualify for free shipping,
                    otherwise, a flat rate of $4.99 applies. Currently, we only
                    ship within the United States, but we are working to expand
                    our shipping options to serve more pet owners worldwide. If
                    you are unsatisfied with your purchase, we offer a 30-day
                    return policy for unopened products. Please contact our
                    customer service team for assistance with returns or
                    exchanges. Our goal is to provide exceptional customer
                    service and ensure pet happiness with every order. We are
                    dedicated to sustainable practices and prioritize
                    environmentally friendly packaging materials.
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

export default ShippingReturns;
