/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Image from "next/image";
import Link from "next/link";
import React from "react";

import xIcon from "../../../public/svg/x.svg";
import telegramIcon from "../../../public/svg/telegram.svg";

const SideNavBar: React.FC = () => {
  return (
    <div className="fixed right-4 top-8 z-50 flex items-center space-x-6 p-6">
      <Link href="https://x.com/merlonthewizerd" passHref>
        <Image src={xIcon} alt="x icon" width={25} height={25} />
      </Link>
      <Link href="https://t.me/test_merlon_wizard_bot" passHref>
        <Image src={telegramIcon} alt="telegram icon" width={25} height={25} />
      </Link>
    </div>
  );
};

export default SideNavBar;
