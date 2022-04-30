import Link from "next/link";
import React from "react";

const Avatar = () => <h1>avatar</h1>;

const Navbar = () => {
  return (
    <div className="wrapper py-10 flex justify-between items-center">
      <h3 className="text-emerald-400 font-mono font-semibold">
        <Link href="/">
          <a>return0.codes</a>
        </Link>
      </h3>
      <Avatar />
    </div>
  );
};

export default Navbar;
