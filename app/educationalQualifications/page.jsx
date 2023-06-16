import Card from "@/props/EducationalQualificationsCard";
import MembershipCard from "@/props/MembershipCard";

const page = () => {
  return (
    <div>
      <div className="cover_image py-5 w-full h-48 flex justify-center items-center text-5xl text-white font-bold">
        Rajni Gupta
      </div>
      <p className="text-4xl font-bold text-primary text-center my-10">
        Educational Qualifications
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
        <Card desc="B.L.Sc. (Library Science) from Lucknow University in 1978" />
        <Card desc="C Lib Sci (Library Science) from Allahabad Board in 1975" />
        <Card desc="M.A. (Hindi) from Lucknow University in 1974" />
        <Card desc="M.A. (Sociology) from Lucknow University in 1966" />
        <Card desc=" B.A. (A.I.H., Sociology) from Lucknow University in 1964" />
      </div>
      <p className="text-4xl font-bold text-primary text-center my-10">
        Memberships
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
        <MembershipCard desc="Founder Member India Development Group (International Organization)" />
        <MembershipCard desc="Founder Member Manvodya (International Organization)" />
        <MembershipCard desc="Member Shumakar institute (International Organization)" />
        <MembershipCard desc="Member Appropriate Technology Development Association (A.T.D.A.)" />
        <MembershipCard desc="Life Member Indian Red Cross Society" />
        <MembershipCard desc="Member Om Sai Baba Sansthan" />
        <MembershipCard desc="Member Rashtriya Mahila Sansthan" />
        <MembershipCard desc="Founder Member Punar Nirman" />
        <MembershipCard desc="Bhartiya Grameen Mahila Sangh" />
      </div>

    </div>
  );
};

export default page;
