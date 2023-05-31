import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div>
      <footer className="bg-slate-600 rounded-lg shadow  m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="/" className="flex items-center mb-4 sm:mb-0">
              <Image
                src="/images/rajni-logo.png"
                height={500}
                width={500}
                className="w-16 mr-3"
                alt="Rajni-logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Rajni Gupta
              </span>
            </a>
            <ul className="flex gap-5 flex-wrap items-center mb-6  font-medium text-white sm:mb-0 ">
              <Link href="/about"><li className=" hover:underline md:mr-6">About</li></Link>
              <Link href="/gallery"><li className=" hover:underline md:mr-6">Gallery</li></Link>
              <Link href="/program"><li className=" hover:underline md:mr-6">Program</li></Link>
              <Link href="contact"><li className=" hover:underline">Contact</li></Link>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <span className="block text-sm text-white sm:text-center ">
            © 2023{" "}
            <a href="/" className="hover:underline font-bold">
              Rajni Gupta
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex items-center md:justify-center py-2">
            <Image
              src="/images/Softmation-logo.png"
              width={500}
              height={500}
              alt="softmation Innovation Logo"
              className="w-8 h-8"
            />
            <p className="text-sm text-white">
              Dedicated by{" "}
              <a href="http://www.softmation.in/" target="_blank" cls="hover:underline">
                <b>Softmation Innovation</b>
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
