import { BsBriefcaseFill } from "react-icons/bs";
const Experience = (props) => {
  return (
    <div className="flex gap-5 items-center p-5 lg:max-w-3xl mx-auto">
    <BsBriefcaseFill className=" text-3xl shrink-0 text-green-500"/>
        <p className="text-justify">{props.desc}</p>
    </div>
  )
}

export default Experience