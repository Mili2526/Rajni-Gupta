import Event from "@/props/Event";

const Timeline = () => {
  return (
    <div>
      <p className="text-orange-500  font-bold text-center text-5xl py-16 ">
        Timelines
      </p>
      <div className="px-10 md:px-28 mb-36">
        <Event
          eventName="Born On June 4, 1943"
          Desc=" Born into a humble family in Lucknow. Rajni Gupta has lived her life
          by the principle of antiyodya or serving the farthest. Worked with
          the Council of People's Action and Rural Technology (CAPART)"
        />
        <Event
          eventName=" Assistant Librarian-Acharya Narendra Dev Library, 2021"
          Desc="  She started her professional carrier from Acharya Narendra Dev Library as a Assistant Librarian in Lucknow. During her service she organised the library as a center of english and foriegn languages situated in Moti Mahal Campus."
        />
        <Event
          eventName="Joined Appropriate Technology Association, 1981"
          Desc=" She joined Appropriate Technology Association in Gandhi Bhawan in Lucknow. ATDA Library is a international, Technical, Research & Developmiallyent library only for technical distributers. The library is based on Socially Appropriate Technology Information System known as SATIS."
        />
        <Event
          eventName="Runs the project on Training and Production for Muslim Women, 1989"
          Desc=" On behalf of the institution, she run the project on Training and production for Muslim Women in chicken work which is funded by South Asia Partnership and Indian Development group UK in Malhore."
        />
        <Event
          eventName="Associated with NGO RMS, 1998"
          Desc=" She runs many skill development program such as TBYSEM programms, Overseases Development Authority, Europian Commission Action Aids, Southasia Partnership Unisef, Mahila Kalyan Nigam, Uttar Pradesh Helpage Indian Women & Child Development."
        />
         <Event
          eventName="Distt President-Lucknow, 1999"
          Desc=" Smt. rajni Gupta is the Distt president, Lucknow 199 and she organised and coordinate workshops, seminars, conferences, exbhitions and training programms projects on women and child issues in collaboration with state and national departments."
        />
         <Event
          eventName="Elected as State President, 2008"
          Desc=" In 2005 a helpline was launched by state women commision under domestic voilance act 2005. She is the councelor of deprive and their family torcher, harrasment through legal awareness and family councelling Rastriya Mahila Sanstha ia all India Level"
        />
      </div>
    </div>
  );
};

export default Timeline;
