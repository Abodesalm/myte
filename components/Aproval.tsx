
import { BsCheckCircleFill } from "react-icons/bs"


const Aproval = ({value, clas =''}) => {
  return (
    <div className={"w-[fit-content] px-4 py-2 font-bold rounded-[10px] bg-light dark:bg-dark/70 flex flex-row items-center  " + clas}>
        <BsCheckCircleFill className="me-4 text-main" size={20}/>

        <p>{value}</p>
      </div>
  )
}

export default Aproval