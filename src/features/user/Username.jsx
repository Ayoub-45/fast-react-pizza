import { useSelector } from "react-redux";

export default function Username() {
 const username= useSelector((state=>state.user.username))
  return <div className="text-sm  hidden font-semibold md:block">{username}</div>;
}
