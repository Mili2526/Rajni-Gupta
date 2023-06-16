import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <div>
      <div className="hero px-10 flex flex-col justify-center items-center">
        <p className="text-white font-bold text-6xl lg:text-7xl py-3">
          Rajni Gupta
        </p>
        <p className="text-white text-2xl lg:text-3xl pb-3">
          Visionary lady, dedicated to nation.
        </p>
        <Link href="/about"><button className="button">
          Know More
        </button></Link>
      </div>
    </div>
  );
};

export default Hero;
