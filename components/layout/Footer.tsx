import React from "react";
import Link from "next/link";
import { FacebookIcon, TwitterIcon, InstagramIcon } from "../ui/Icons";

type FooterLinkProps = {
  href: string;
  text: string;
};
const FooterLink: React.FC<FooterLinkProps> = ({ href, text }) => (
  <li>
    <Link
      href={href}
      className="text-turq hover:text-rosy transition-colors"
      passHref
    >
      {text}
    </Link>
  </li>
);

export default function Footer() {
  const sections = [
    {
      title: "About",
      links: [
        { href: "#", text: "Our Story" },
        { href: "#", text: "Our Mission" },
        { href: "#", text: "Careers" },
      ],
    },
    {
      title: "Products",
      links: [
        { href: "#", text: "Dog Food" },
        { href: "#", text: "Cat Food" },
        { href: "#", text: "Small Pet Food" },
        { href: "#", text: "Treats" },
      ],
    },
    {
      title: "Support",
      links: [
        { href: "#", text: "Contact Us" },
        { href: "#", text: "FAQs" },
        { href: "#", text: "Shipping & Returns" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
        {sections.map((section, index) => (
          <div key={index}>
            <h3 className="text-gray-200 font-bold mb-4">{section.title}</h3>
            <ul className="space-y-2 text-turq">
              {section.links.map((link, index) => (
                <FooterLink key={index} href={link.href} text={link.text} />
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h3 className="text-gray-200 font-bold mb-4 ml-[0.35rem]">
            Follow Us
          </h3>
          <div className="flex items-center gap-4">
            <Link
              href="https://www.facebook.com"
              className="text-turq hover:text-rosy transition-colors"
              passHref
            >
              <FacebookIcon className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.x.com"
              className="text-turq hover:text-rosy transition-colors"
              passHref
            >
              <TwitterIcon className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.instagram.com"
              className="text-turq hover:text-rosy transition-colors"
              passHref
            >
              <InstagramIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500">
        © 2024 Pawesome. All rights reserved.
      </div>
    </footer>
  );
}
