import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#3a3a3a] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand & Contact */}
          <div>
            <div className="flex items-center gap-1 text-2xl font-semibold text-white mb-4">
              <span className="bg-teal-500 px-1 rounded">WIN</span>
              <span className="font-light">store</span>
            </div>

            <p className="text-teal-400 text-sm mb-4">
              Got questions? Call us 24/7!
            </p>

            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <Phone size={16} /> 0311 666 144
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} /> 0317 1777015
              </p>
            </div>

            <p className="flex items-center gap-2 mt-4 text-sm">
              <Mail size={16} /> info@winstore.pk
            </p>

            {/* Social */}
            <div className="flex gap-4 mt-5">
              <Link href="#" className="hover:text-teal-400">
                <Facebook size={18} />
              </Link>
              <Link href="#" className="hover:text-teal-400">
                <Twitter size={18} />
              </Link>
              <Link href="#" className="hover:text-teal-400">
                <Linkedin size={18} />
              </Link>
              <Link href="#" className="hover:text-teal-400">
                <Instagram size={18} />
              </Link>
            </div>
          </div>

          {/* Trending */}
          <div>
            <h3 className="text-teal-400 font-semibold mb-5">Trending</h3>
            <ul className="space-y-3 text-sm">
              {[
                "Installments",
                "Electronics",
                "Grocery",
                "Health & Beauty",
                "Home Appliances",
                "Mobile Accessories",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-teal-400">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-teal-400 font-semibold mb-5">Information</h3>
            <ul className="space-y-3 text-sm">
              {[
                "About Us",
                "Contact Us",
                "FAQs",
                "Shipping & Return",
                "Privacy policy",
                "Terms & Conditions",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-teal-400">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-teal-400 font-semibold mb-5">Customer Care</h3>
            <ul className="space-y-3 text-sm">
              {[
                "My Account",
                "Track Your Order",
                "Recently Viewed",
                "Wishlist",
                "Compare",
                "Become a Vendor",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-teal-400">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment Section */}
        <div className="mt-12  gap-4 items-center right-0">
          <img
            src="https://clarety-ethiopiaid.s3.amazonaws.com/userimages/website_payment_options.png"
            alt="Visa"
            width={90}
            height={90}
            className="bg-white rounded "
          />
          {/* <Image
            src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
            alt="Mastercard"
            width={60}
            height={30}
            className="bg-white rounded px-2 py-1"
          />
          <Image
            src="https://cdn-icons-png.flaticon.com/512/2331/2331945.png"
            alt="Cash on Delivery"
            width={60}
            height={30}
            className="bg-white rounded px-2 py-1"
          />
          <Image
            src="https://cdn-icons-png.flaticon.com/512/891/891462.png"
            alt="Installments"
            width={60}
            height={30}
            className="bg-white rounded px-2 py-1"
          /> */}
        </div>










        {/* Bottom */}
        <div className="border-t border-gray-600 mt-10 pt-6 text-center text-sm text-gray-400">
          © 2021 WINStore. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
