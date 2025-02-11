import Image from "next/image";

interface HeroProps {
  title: string;
  img1: string;
  paragraph?: string;
}

const Hero: React.FC<HeroProps> = ({ title, img1, paragraph }) => {
  return (
    <main
      id="Hero-bg"
      className="grid grid-cols-1 md:grid-cols-2p-4 lg:p-8 gap-8"
    >
      <section className="space-y-4 flex flex-col justify-center items-start gap-6">
        <h1 className="animate__animated animate__fadeInUp text-4xl font-bold">
          {title}
        </h1>
        <p className="text-justify text-2xl leading-10 animate__animated animate__backInDown">
          {paragraph}
        </p>
        <button className="text-4xl hover:bg-purple-600 bg-purple-500 rounded-md px-4 py-2">
          Register
        </button>
      </section>
      {/* Images */}
      <section className="relative flex justify-end h-[40rem]">
        <Image fill={true} src={img1} alt="" className="object-contain" />
      </section>
    </main>
  );
};

export default Hero;
