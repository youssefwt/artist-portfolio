import React from "react";
import Link from "next/link";
const Social = () => {
  return (
    <div className="wrapper flex justify-center">
      <ul>
        <Link
          href="https://www.facebook.com/TheWorldOfErenyFares"
          target="_blank"
        >
          <li className="facebook">
            <i className="fa fa-facebook fa-2x" aria-hidden="true"></i>
          </li>
        </Link>
        {/* <li className="twitter">
          <Link href="#">
            <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
          </Link>
        </li> */}
        <Link
          href="https://www.instagram.com/theworldoferenyfaris?igsh=Mnh4enQ4cmhla3Rm"
          target="_blank"
        >
          <li className="instagram">
            <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
          </li>
        </Link>
        {/* <li className="google">
          <Link href="#">
            <i className="fa fa-google fa-2x" aria-hidden="true"></i>
          </Link>
        </li> */}
        <Link href="#">
          <li className="whatsapp">
            <i className="fa fa-whatsapp fa-2x" aria-hidden="true"></i>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Social;
