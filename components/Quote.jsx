import Image from "next/image"
const Quote = () => {
  return (
    <div>
           <div className="my-28 px-10 md:flex items-center gap-10 md:px-16 ">
        <Image
          src="/images/bg1.jpg"
          width={500}
          height={500}
          alt="rajni-image"
          className="rounded-2xl w-96 "
        />
        <div className="py-5">
          <p className="text-lg text-blue-800 md:text-xl ">
            <i>
              Through challenges she remains undeterred, Her ideals, a compass,
              guiding every word, With unwavering dedication, she perseveres,
              Empowering her people, dispelling fears.
            </i>
          </p>
          <p className=" text-lg text-blue-800 md:text-xl py-5 ">
            <i>
              Her leadership inspires hearts to unite, In pursuit of a future
              shining bright, A symbol of hope, her actions inspire, A visionary
              leader, setting the world on fire.
            </i>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Quote