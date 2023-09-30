import Image from "next/image";
import React from "react";
// import "./Footer.css";

const Footer = () => {
  return (
    <footer className="border-t border-[#e6e6e6] relative pt-10">
      <div className="container mx-auto">
        <div className="section">
          <div className="footer-top flex">
            <div className="basis-[30%]">
              <Image
                alt="Brandfolder by Smartsheet logo"
                data-testid="footer-logo"
                loading="lazy"
                src="https://cdn.bfldr.com/I6FML9WY/at/gmnvjqknb8fsptrmqrj9jw85/brandfolder-by-smartsheet-logo-full-color.svg"
                width="200"
                height="62"
              />
            </div>
            <div className="basis-[70%] grid grid-cols-4">
              <ul className="leading-9">
                <li className="font-bold">Brandfolder</li>
                <li>Get a Quote</li>
                <li>Product Features</li>
                <li>Brand Intelligence</li>
                <li>What&#x27;s New</li>
                <li>Workbench</li>
                <li className="mb-3">Support</li>
                <li className="btn btn-outline border-blue-700 text-blue">
                  Sign In
                </li>
              </ul>
              <ul className="leading-9">
                <li className="font-bold">Resources</li>
                <li>Resource Center</li>
                <li>Our Brandfolder</li>
                <li>What is DAM</li>
                <li>Integrations</li>
                <li>ROI Calculator</li>
                <li>FAQ</li>
                <li>API</li>
              </ul>
              <ul className="leading-9">
                <li className="font-bold">Community</li>
                <li>Brand Collective</li>
                <li>Podcast</li>
                <li>Events</li>
                <li>Partnerships</li>
                <li>Reviews</li>
              </ul>
              <ul className="leading-9">
                <li className="font-bold">Learn More</li>
                <li>About Us</li>
                <li>Legal</li>
                <li>Outfit Agreements</li>
                <li>Security</li>
                <li>Careers</li>
                <li>Get in Touch</li>
              </ul>
            </div>
          </div>
          <div className="py-10">
            <div className="text-center flex items-center justify-center">
              <div className="w-[40%] mt-10">
                <div className="flex">
                  <span className="border p-2 w-[50%] border-black-600 text-blue-800">
                    hello@brandfolder.com
                  </span>
                  <span className="border p-2 w-[50%] border-black-600 text-blue-800">
                    +1 (720) 744 0300
                  </span>
                </div>
                <ul className="flex justify-between items-center my-5">
                  <li>
                    <Image
                      alt="LinkedIn icon"
                      loading="lazy"
                      src="https://cdn.bfldr.com/I6FML9WY/at/m9jgmcbwzsr8v38hv5wm3/linkedin-icon.svg"
                      height="28"
                      width="28"
                    />
                  </li>
                  <li>
                    <Image
                      alt="Twitter icon"
                      loading="lazy"
                      src="https://cdn.bfldr.com/I6FML9WY/at/6qpxxxptkqvpgp4rtsbxrphq/twitter-icon.svg"
                      height="28"
                      width="28"
                    />
                  </li>
                  <li>
                    <Image
                      alt="Facebook icon"
                      loading="lazy"
                      src="https://cdn.bfldr.com/I6FML9WY/at/tnmqhht6kkcqvct8fwrcqq/facebook-icon.svg"
                      height="40"
                      width="40"
                    />
                  </li>
                  <li>
                    <Image
                      alt="YouTube icon"
                      loading="lazy"
                      src="https://cdn.bfldr.com/I6FML9WY/at/vvc34rmqjv6v8qw3ffprcsc/youtube-icon-purple.svg"
                      height="28"
                      width="28"
                    />
                  </li>
                  <li>
                    <Image
                      alt="TikTok icon"
                      loading="lazy"
                      src="https://cdn.bfldr.com/I6FML9WY/at/w58tb6vzmw38b7nxjg3xh7tq/tiktok-icon.svg"
                      height="28"
                      width="25"
                    />
                  </li>
                  <li>
                    <Image
                      alt="Instagram icon"
                      loading="lazy"
                      src="https://cdn.bfldr.com/I6FML9WY/at/rbsfnxww3g4m5vh49m6rctt/instagram-icon.svg"
                      height="28"
                      width="28"
                    />
                  </li>
                  <li>
                    <Image
                      alt="Brandfolder icon"
                      loading="lazy"
                      src="https://cdn.bfldr.com/I6FML9WY/at/puqsjh-ad7lbs-ei1hlp/brandfolder-icon-purple.svg"
                      height="28"
                      width="28"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex text-sm justify-between">
              <p className="">
                Copyright ©2023 <span>Brandfolder Digital Asset Management</span>
              </p>
              <ul className="flex gap-x-5 text-blue-800">
                <li>Cookie Preferences</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
