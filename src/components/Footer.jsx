import {
  BsInstagram,
  BsFacebook,
  BsTwitter,
  BsPinterest,
} from "react-icons/bs";
import { BiHomeAlt, BiMailSend, BiPhone } from "react-icons/bi";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex flex-col md:flex-row p-10 gap-5 mx-auto max-w-screen-xl border-t">
      <div className="flex-1 flex flex-col items-center md:items-start justify-flex-start gap-3">
        <Link to="/">
          <h2 className="text-2xl font-semibold">BODOI.</h2>
        </Link>
        <p className="text-justify">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters.
        </p>
        <div className="flex items-center justify-center gap-4">
          <div className="p-3 rounded-full flex items-center justify-center bg-[#e4405f]">
            <BsInstagram className="text-white" />
          </div>
          <div className="p-3 rounded-full flex items-center justify-center bg-[#3b5999]">
            <BsFacebook className="text-white" />
          </div>
          <div className="p-3 rounded-full flex items-center justify-center bg-[#55acee]">
            <BsTwitter className="text-white" />
          </div>
          <div className="p-3 rounded-full flex items-center justify-center bg-[#e60023]">
            <BsPinterest className="text-white" />
          </div>
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold mb-3 text-center md:text-left">
          Useful Links
        </h3>
        <ul className="list-none flex flex-wrap justify-start">
          <li className="w-1/2 mb-2 md:text-left text-center">
            <a href="#">Home</a>
          </li>
          <li className="w-1/2 mb-2 md:text-left text-center">
            <a href="#">Cart</a>
          </li>
          <li className="w-1/2 mb-2 md:text-left text-center">
            <a href="#">Man Fashion</a>
          </li>
          <li className="w-1/2 mb-2 md:text-left text-center">
            <a href="#">Woman Fashion</a>
          </li>
          <li className="w-1/2 mb-2 md:text-left text-center">
            <a href="#">Accessories</a>
          </li>
          <li className="w-1/2 mb-2 md:text-left text-center">
            <a href="#">My Account</a>
          </li>
          <li className="w-1/2 mb-2 md:text-left text-center">
            <a href="#">Order Tracking</a>
          </li>
          <li className="w-1/2 mb-2 md:text-left text-center">
            <a href="#">Wishlist</a>
          </li>
          <li className="w-1/2 mb-2 md:text-left text-center">
            <a href="#">Terms</a>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold mb-3 text-center md:text-left">
          Contact
        </h3>
        <div className="mb-3">
          <div className="flex items-center md:justify-start justify-center mb-2">
            <BiHomeAlt className="mr-2" />
            <span>258 Cau Giay, Ha Noi</span>
          </div>
          <div className="flex items-center md:justify-start justify-center mb-2">
            <BiPhone className="mr-2" />
            <span>+2 545 73 34</span>
          </div>
          <div className="flex items-center md:justify-start justify-center mb-2">
            <BiMailSend className="mr-2" />
            <span>alo123@gmail.com</span>
          </div>
        </div>
        <div className="flex items-center md:justify-start justify-center">
          <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
