import merlon from "../../public/imgs/merlon-full-text.png";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="bg-customBg flex min-h-screen flex-col items-center">
      <section
        id="home"
        className="container flex flex-col items-center justify-center gap-12 px-4 py-16"
      >
        <div className="flex w-full justify-around px-4">
          <div className="flex flex-1 justify-center pt-20">
            <Image src={merlon} alt="merlon" width={2880} height={1358} />
          </div>
          {/* <div className="flex flex-1 justify-center">
            <Image src={Image2} alt="Image 2" width={200} height={200} />
          </div>
          <div className="flex flex-1 justify-center">
            <Image src={Image3} alt="Image 3" width={200} height={200} />
          </div> */}
        </div>
      </section>
    </main>
  );
}
