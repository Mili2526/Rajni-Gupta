import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <div>
      <div class="pic-ctn">
     <div className="relative z-50 flex flex-col justify-center items-center h-96 ">
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
        <Image src="/images/bg1.jpg" alt="bg-image" class="pic h-[500px] w-full brightness-50" width={500} height={500} />
        <Image src="/images/bg2.jpg" alt="bg-image" class="pic h-[500px] w-full brightness-50" width={500} height={500} />
        <Image src="/images/bg3.jpg" alt="bg-image" class="pic h-[500px] w-full brightness-50" width={500} height={500} />
        <Image src="/images/bg4.jpg" alt="bg-image" class="pic h-[500px] w-full brightness-50" width={500} height={500} />
        <Image src="/images/bg5.jpg" alt="bg-image" class="pic h-[500px] w-full brightness-50" width={500} height={500} />
      </div>
    </div>
  );
};

export default Hero;
