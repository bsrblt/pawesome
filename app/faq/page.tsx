import React from "react";
import Background from "components/layout/Background";
import PageTitle from "components/ui/PageTitle";
import { bottomSectionData } from "lib/bottomSectionData";
import BottomSection from "components/layout/BottomSection";
import FaqItem from "components/ui/FaqItem";
import Link from "next/link";

const FAQ = () => {
  const bottomData = bottomSectionData.faq;
  const faqs = [
    {
      id: 1,
      question: "What is the shipping cost for orders?",
      answer:
        "The shipping cost for orders is $4.99, but it becomes free if your total order amount exceeds $100.",
    },
    {
      id: 2,
      question: "How long does it take to process and ship orders?",
      answer:
        "Orders are typically processed within 1-2 business days and shipped within 3-5 business days.",
    },
    {
      id: 3,
      question: "Do you offer international shipping?",
      answer:
        "Currently, we only ship within the United States. We are working on expanding our shipping options in the future.",
    },
    {
      id: 4,
      question: "Can I return or exchange a product?",
      answer:
        "Yes, we offer a 30-day return policy for unopened products. If you need to return or exchange a product, please contact our customer service team.",
    },
    {
      id: 5,
      question: "Are your products natural and free from artificial additives?",
      answer:
        "Yes, all our products are made with premium, natural ingredients and are free from artificial additives and fillers.",
    },
    {
      id: 6,
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you will receive a tracking number via email. You can use this number to track your order on our website or the carrier's website.",
    },
  ];

  return (
    <>
      <Background>
        <div className="container mx-auto px-4">
          <PageTitle text="Frequently Asked Questions" />
          <div className="container z-10 relative">
            <div className="px-6  text-lemonlight bg-tahiti rounded-xl">
              <div className="grid divide-y">
                {faqs.map((faq) => (
                  <FaqItem
                    key={faq.id}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
              <div className="my-3">
                <Link
                  href="/contact"
                  className="flex flex-col w-full h-16 items-center justify-center text-lg text-center pb-1"
                >
                  <div className="w-[100%]">
                    <h1 className=" block sm:text-xl text-[0.95rem] font-bold text-center drop-shadow-lg text-gray-200 mt-3 leading-relaxed">
                      Not listed here?{" "}
                      <span className="text-darkpur ">Contact us</span> and we
                      &#39;ll return as soon as possible.
                    </h1>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Background>
      <BottomSection data={bottomData} />
    </>
  );
};

export default FAQ;
