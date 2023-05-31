import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div>
    <p className="text-orange-500 my-16 font-bold text-5xl text-center">About</p>
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
        <p className="text-3xl font-bold text-blue-500 py-5">Educationist, Entrepreneur, Social Activist</p>
        <p className="pb-5 text-justify">Rajni Gupta is one of the most popular social worker. She is an embodient of courage, conviction and compassion.
        Born on June 4, 1943 into a humble family in lucknow. Rajni Gupta has lived her life by the principle of Antyodaya or &quot;serving the farthest&quot;. She started her professional carrer from Acharya Narendra Dev Library as a assistant librarian.She worked as a project officer and coordinator. Presently she is a incharge of Women and Child development programme in ATDA, Gandhi Bhawan.</p>
       <Link href="/about"> <button className="bg-green-500 px-5 py-2 text-white font-bold rounded-full flex mx-auto">Read More</button></Link>
      </div>
    </div>
    </div>
  );
};

export default About;
