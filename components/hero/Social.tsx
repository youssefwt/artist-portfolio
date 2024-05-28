import React from "react";
import Link from "next/link";
const Social = () => {
  return (
    <div className="wrapper flex justify-center">
      <ul>
        <li className="facebook">
          <Link
            href="https://www.facebook.com/TheWorldOfErenyFares"
            target="_blank"
          >
            <i className="fa fa-facebook fa-2x" aria-hidden="true"></i>
          </Link>
        </li>
        {/* <li className="twitter">
          <Link href="#">
            <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
          </Link>
        </li> */}
        <li className="instagram">
          <Link
            href="https://www.instagram.com/theworldoferenyfaris?igsh=Mnh4enQ4cmhla3Rm"
            target="_blank"
          >
            <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
          </Link>
        </li>
        {/* <li className="google">
          <Link href="#">
            <i className="fa fa-google fa-2x" aria-hidden="true"></i>
          </Link>
        </li> */}
        <li className="whatsapp">
          <Link href="#">
            <i className="fa fa-whatsapp fa-2x" aria-hidden="true"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Social;
