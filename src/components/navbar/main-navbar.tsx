import Image from "next/image";
import Link from "next/link";
import React from "react";

import HomeButton from "../../../public/img-btn/home-button.png";
import BuyButton from "../../../public/img-btn/buy-button.png";
import LoreButton from "../../../public/img-btn/lore-button.png";
import TalkButton from "../../../public/img-btn/talk-button.png";

const MainNavBar: React.FC = () => {
  return (
    <nav className="flex items-center justify-center bg-transparent">
      <ul className="flex space-x-4">
        <li className="hover:rounded-2xl hover:shadow-lg">
          <Link href="#home" passHref>
            <Image src={HomeButton} alt="Home" width={200} height={50} />
          </Link>
        </li>
        <li className="hover:rounded-2xl hover:shadow-lg">
          <Link href="#buy" passHref>
            <Image src={BuyButton} alt="Buy" width={200} height={50} />
          </Link>
        </li>
        <li className="hover:rounded-2xl hover:shadow-lg">
          <Link href="#lore" passHref>
            <Image src={LoreButton} alt="Lore" width={200} height={50} />
          </Link>
        </li>
        <li className="hover:rounded-2xl hover:shadow-lg">
          <Link href="#talk" passHref>
            <Image src={TalkButton} alt="Talk" width={200} height={50} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavBar;
