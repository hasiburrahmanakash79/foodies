import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-300 text-base-content rounded">
  <div className="grid grid-flow-col gap-4">
    <p className="link link-hover">About us</p> 
    <p className="link link-hover">Contact</p> 
    <p className="link link-hover">Jobs</p> 
    <p className="link link-hover">Press kit</p>
  </div> 
  <div>
    <div className="grid grid-flow-col gap-4">
      <FaTwitter className="text-3xl text-blue-500"></FaTwitter>
      <FaYoutube className="text-3xl text-red-500"></FaYoutube>
      <FaFacebook className="text-3xl text-blue-700"></FaFacebook>
    </div>
  </div> 
  <div>
    <p>Copyright © 2023 - All right reserved by Thai foodies Ltd</p>
  </div>
</footer>
    );
};

export default Footer;