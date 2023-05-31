import Timeline from "@/components/Timeline";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="p-5 md:flex items-center ">
        <div className="md:w-[50%]">
          <Image
            src="/images/bg2.jpg"
            width={500}
            height={500}
            alt="rajni_image"
            className="rounded-lg"
          />
        </div>
        <div className="text-center py-5 md:w-[50%]">
          <p className="text-4xl font-bold text-[#FF5F15]">Rajni Gupta</p>
          <p className="text-gray-500 text-center py-2">
            Educationist, Entrepreneur and Social Activist
          </p>
          <p className="text-justify py-5">
            <b>Educationist-</b> Rajni Gupta is the founder member of UP Library
            Association, Beside her librarianship she involve in research &
            development programmes for urban and rular women and their
            upliftment through skill development encouragement programmes and
            their integrated development with the collaboration with voluntary
            organisation.
            <br />
            <br />
            <b>Entrepreneur-</b> Her father was the paper bussinessman, she
            participated in family bussiness. She was the partner of Bansal
            Brothers. She established printing press named{" "}
            <b>&quot;Prachi Printers&quot;</b> as a propeiter. She established many
            entrepreneur in handcrafts specially in chicken work.
            <br />
            <br />
            <b>Social Activist-</b> In 1998 she associated with NGO RMS
            established by the freedom fighter <b>Smt. Pramila Srivastava</b>in
            1971 . Smt. Rajni Gupta is the Distt President, Lucknow in 1999 and
            she organised and coordinate workshops, seminars and confrences and
            training program projects on women and child issues with the
            collaboration of state and national dept. like{" "}
            <b>Nabialal Commission for Women, Rular Development</b> and other
            partner NGOs.
          </p>
        </div>
      </div>

      <p className="px-5 text-justify">
        Rajni Gupta is one of the most popular social worker. She is an
        embodient of courage, conviction and compassion. Born on June 4, 1943
        into a humble family in lucknow. Rajni Gupta has lived her life by the
        principle of Antyodaya or &quot;serving the farthest&quot;. She started her
        professional carrer from Acharya Narendra Dev Library as a assistant
        librarian.She worked as a project officer and coordinator. Presently she
        is a incharge of Women and Child development programme in ATDA, Gandhi
        Bhawan.
      </p>
      <p className="px-5 text-justify">
        She involved in research and development programmes for urban and rural women and their upliftment through skill development encouragement programmes and their integrated development with the collaboration with voluntary organisation. 
      </p>
      <p className="px-5 text-center py-8 font-bold text-3xl text-blue-500"> Rajni Gupta as an Organizer</p>
      <p  className="px-5 text-justify">
      A Organiser of, or and by the people, Rajni Gupta commands respect, love and trust across the human beings.She is forever in their midst, embodying their concerns and voicing their aspirations. Organise Self Helps Groups Of women under <b>&quot;Swayam Sidha Project&quot;</b> at sidhor block district Nigam. Tried to bring change in attitude of women  towards girl child. The members of the Self Help Groups are associated for marketing.
      <br />
      <br />
      Organised several seminars and meetings for women to make them aware of these legal rights.
      <br />Organised Health Camps at various blocks of lucknow. Transfer of improved technologies so that quality of life of rural women can be improved like smokeless chulha, ball bearing chakki, food safes, and safe drinking water arrangements.
      <br />


      </p>
      <p className="px-5 text-center py-8 font-bold text-3xl text-blue-500">Activist</p>
      <p className="px-5 font-bold text-lg">Science & Technology-</p>
      <p className="px-5">Rajni Gupta attended proceedings of a two days seminar on <b>The Role of NGO&apos;s A Perspective Of Science And Technology</b> was held in Lucknow from 23-03-2010 to 24-03-2010. The program was oranised by <b>Dr. V.K Singh, National Seey of a national level NGO,  &quot;NAVIC&quot; (National Association Of Voluntary Initiative and Co-operation)</b> that was chaired by Dr. Kamal Tiwari former Seey Govt.of India and was jointly sponsered by DST. Govt of India, Sriman Salvage Jaspur, Uttrakhand, RBH Foundation of India, Wardha, Mahrastra and Rashtriya gramin Vikas avam Mahila Kalyan Sansthan Baliya.</p>

      <p className="px-5 text-center py-8 font-bold text-3xl text-blue-500">Unmarkable and Honourable Activities</p>
      <p className="px-5 text-justify">Rajni Gupta organised skill training and employment to <b>Deprived Muslim Ladies</b> she was the chairman of <b>PRAGATI PARYAVARAN SANRAKSHAN SAMITI</b>Presents </p>
      <p className="text-lg font-bold py-5 px-5">U.P Mahotsav 2011-2012<br />Founder of Indian Chapter</p>

      <p className="px-5 text-justify pb-20">Working with <b>IDG (Indian Development Group ) as General Secretary </b>  to empower rural communities in the world&apos;s democracy.providing funding, resources and Sponserships Attended workshop on Rural Entrepreneurship in Biopesticides and Neem based products at Institute of Rural Developments .Lucknow University as a  <b>Project Coordinater</b>. attended <b> ICDS and ICH meeting </b> at Uttar Pradesh prashashan and prabandhan academy (IMDUP). </p>

      <Timeline />
    </>
  );
};

export default page;
