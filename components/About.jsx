import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="md:bg-white  md:shadow-2xl md:rounded-xl md:mx-10 my-56 relative z-50 md:my-20">
    <div className="px-8  md:flex gap-10 items-center">
      <div className=" md:w-[50%] md:px-16">
        <Image
          src="/images/bg2.jpg"
          alt="Picture of rajni Gupta"
          width={500}
          height={500}
          className="rounded-lg "
        />
      </div>
      <div className="py-10 md:w-[50%]">
        <p className="text-3xl font-bold text-black py-5">Educationist, Entrepreneur, Social Activist</p>
        <p className="pb-5 text-justify">Rajni Gupta is one of the most popular social worker. She is an embodient of courage, conviction and compassion.
        Born on June 4, 1943 into a humble family in lucknow. Rajni Gupta has lived her life by the principle of Antyodaya or &quot;serving the farthest&quot;. She started her professional carrer from Acharya Narendra Dev Library as a assistant librarian.She worked as a project officer and coordinator. She was active member of Women and Child development programme in ATDA, Gandhi Bhawan.</p>
       <Link href="/about"> <button className=" button mx-auto flex">Read More</button></Link>
      </div>
    </div>
    </div>
  );
};

export default About;
