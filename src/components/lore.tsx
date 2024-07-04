import Image from "next/image";

import spellbook from "../../public/graphics/spellbook1.png";

const LorePage = () => {
  return (
    <section
      id="lore"
      className="bg-customBg flex min-h-screen flex-col items-center justify-center"
    >
      <Image
        src={spellbook}
        alt={"spell book"}
        width={140}
        height={140}
        className="p-8"
      />

      <p className="text-pretty text-center text-2xl">
        Who am I
        <br />
        <br />
        helo my name is merlon the wizerd.
        <br />
        the werst wizerd in the werld.
        <br />
        <br />
        it is not so eazy to be a wizerd, but all i kan do is try.
        <br />
        i do spells somtimes, but they are not so good because my spells don
        werk ​somtimes.
        <br />
        <br />
        like one time, i acksidentally turned my frend into a mouse, and then he
        ran into the ​sink and dwowned.
        <br />
        <br />
        one time, i try to make it rain candy, but instead it rain broccoli.
        <br />
        another time, i wan to make a dragon appear, but i ended up with lizard
        bat wif <br /> ​wings. it ate all my books.
        <br />
        so I lost my spells.
        <br />
        <br />
        my best fren is an pet fly called aminal.
        <br />
        i fink he likes me too but i dont know.
        <br />
        <br />
        i just want to be a good wizerd and make people happy with my magic.
        <br />
        <br />
        kan i help you perhaps?
      </p>
    </section>
  );
};

export default LorePage;
