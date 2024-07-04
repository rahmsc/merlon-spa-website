import { Gloria_Hallelujah } from "next/font/google";
import { Indie_Flower } from "next/font/google";
import { type AppType } from "next/app";
import NavBar from "~/components/navbar/navbar";

import "~/styles/globals.css";

const gloria = Gloria_Hallelujah({
  subsets: ["latin"],
  weight: "400",
});

const indie = Indie_Flower({
  subsets: ["latin"],
  weight: "400",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={gloria.className}>
      <NavBar />
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
