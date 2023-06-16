import { MdCardMembership } from "react-icons/md";

const MembershipCard = (props) => {
  return (
    <div class="card mx-auto my-5">
    <p className="px-5 text-xl"><MdCardMembership className="text-blue-600 mx-auto my-3 text-4xl"/>{props.desc}</p>
  </div>
  )
}

export default MembershipCard