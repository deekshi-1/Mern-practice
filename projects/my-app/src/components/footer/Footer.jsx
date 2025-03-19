import React from "react";
import "./footer.scss";
import {
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialTwitter,
  SlSocialYoutube,
} from "react-icons/sl";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="container grid grid-cols-2 mx-auto">
        <div className="left-footer p-10">
          <div className="logo flex gap-10 justify-center mb-5">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </div>
          <div className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
            ipsum quam ipsa adipisci earum alias qui molestiae itaque
            consequuntur. Molestiae!
          </div>
        </div>
        <div className="rightfooter  flex justify-center items-center">
          <div>
            <h2 className="sub-heading">The Company</h2>
            <ul>
              <li>About</li>
              <li>Testimonial</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="socials col-span-2 flex gap-10 justify-center my-10">
          <SlSocialInstagram />
          <SlSocialLinkedin />
          <SlSocialTwitter />
          <SlSocialYoutube />
        </div>
        <div className="copyright col-span-2 border-y-4 border-amber-100 border-dashed my-5 p-3 text-center">
        &#169; Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, dolor!
        </div>
      </div>
    </div>
  );
}

export default Footer;
