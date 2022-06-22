import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="wrapper py-10 flex justify-between items-center">
      <Link href="/" passHref>
        <Image
          src="/static/brand/return0-logo.png"
          width="80"
          height="45"
          alt=""
        />
      </Link>
      <div className="rounded-full-img">
        <Image src="/static/images/profile.jpg" width={40} height={40} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
