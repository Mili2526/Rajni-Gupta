//import icons
import { HiAcademicCap } from "react-icons/hi";
import { MdCardMembership } from "react-icons/md";
const page = () => {
  return (
    <div className="px-5">
      <p className="text-4xl font-bold text-orange-500 text-center py-5">
        Educational Qualifications
      </p>
      <div className="p-5 mx-auto lg:max-w-4xl">
        <div className="flex gap-5 items-center mx-auto ">
          <HiAcademicCap className="text-green-600 text-3xl shrink-0 " />
          <p className="text-xl">
          Bl.Sc. (Library Science) from Lucknow University in 1978
          </p>
        </div>
      </div>
      <div className="p-5 mx-auto lg:max-w-4xl">
        <div className="flex gap-5 items-center ">
          <HiAcademicCap className="text-green-600 text-3xl shrink-0 " />
          <p className="text-xl">
          C Lib Sci (Library Science) from Allahabad Board in 1975
          </p>
        </div>
      </div>
      <div className="p-5 mx-auto lg:max-w-4xl">
        <div className="flex gap-5 items-center ">
          <HiAcademicCap className="text-green-600 text-3xl shrink-0 " />
          <p className="text-xl">
          M.A. (Hindi) from Lucknow University in 1974
          </p>
        </div>
      </div>
      <div className="p-5 mx-auto lg:max-w-4xl">
        <div className="flex gap-5 items-center ">
          <HiAcademicCap className="text-green-600 text-3xl shrink-0 " />
          <p className="text-xl">
            M.A. (Sociology) from Lucknow University in 1966
          </p>
        </div>
      </div>
      <div className="p-5 mx-auto lg:max-w-4xl">
        <div className="flex gap-5 items-center ">
          <HiAcademicCap className="text-green-600 text-3xl shrink-0 " />
          <p className="text-xl">
           B.A. (A.I.H., Sociology) from Lucknow University in 1964
          </p>
        </div>
      </div>

      <div className="">
      <p className="text-4xl shrink-0 font-bold text-orange-500 text-center py-5">Membership</p>
      <div className="px-5 mb-20">
        <div className="flex gap-5 items-center py-5 mx-auto lg:max-w-4xl">
          <MdCardMembership  className="text-green-600 text-3xl shrink-0 "/>
          <p className="text-xl">Founder Member India Development Group (International Organization)</p>
        </div>
        <div className="flex gap-5 items-center mx-auto lg:max-w-4xl">
          <MdCardMembership  className="text-green-600 text-3xl shrink-0 "/>
          <p className="text-xl">Founder Member Manvodya (International Organization)</p>
        </div>
        <div className="flex gap-5 items-center py-5 mx-auto lg:max-w-4xl">
          <MdCardMembership  className="text-green-600 text-3xl shrink-0 "/>
          <p className="text-xl">Member Shumakar institute (International Organization)</p>
        </div>
        <div className="flex gap-5 items-center mx-auto lg:max-w-4xl">
          <MdCardMembership  className="text-green-600 text-3xl shrink-0 "/>
          <p className="text-xl">Member Appropriate Technology Development Association (A.T.D.A.)</p>
        </div>
        <div className="flex gap-5 items-center py-5 mx-auto lg:max-w-4xl">
          <MdCardMembership  className="text-green-600 text-3xl shrink-0 "/>
          <p className="text-xl">Life Member Indian Red Cross Society</p>
        </div>
        <div className="flex gap-5 items-center mx-auto lg:max-w-4xl">
          <MdCardMembership  className="text-green-600 text-3xl shrink-0 "/>
          <p className="text-xl">Founder Member India Development Group (International Organization)</p>
        </div>
        <div className="flex gap-5 items-center py-5 mx-auto lg:max-w-4xl">
          <MdCardMembership  className="text-green-600 text-3xl shrink-0 "/>
          <p className="text-xl">Member Om Sai Baba Sansthan</p>
        </div>
        <div className="flex gap-5 items-center mx-auto lg:max-w-4xl ">
          <MdCardMembership  className="text-green-600 text-3xl shrink-0 "/>
          <p className="text-xl">Member Rashtriya Mahila Sansthan</p>
        </div>
        <div className="flex gap-5 items-center py-5 mx-auto lg:max-w-4xl">
          <MdCardMembership  className="text-green-600 text-3xl shrink-0 "/>
          <p className="text-xl">Founder Member Punar Nirman</p>
        </div>
        <div className="flex gap-5 items-center mx-auto lg:max-w-4xl">
          <MdCardMembership  className="text-green-600 text-3xl shrink-0 "/>
          <p className="text-xl">Bhartiya Grameen Mahila Sangh</p>
        </div>
      </div>

      </div>
    </div>
  );
};

export default page;
