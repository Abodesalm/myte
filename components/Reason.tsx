'use client'
import { FaDollarSign, FaRegMoneyBill1, FaMessage } from "react-icons/fa6"
import { GiSandsOfTime } from "react-icons/gi"
import { BsCheckCircleFill, BsUniversalAccess, BsWrenchAdjustable } from "react-icons/bs"

const Reason = ({title, icon}) => {

  const clas = 'text-[40px] text-main';

  const Choose = ()=>{
    switch(icon){
      case 'price':return <FaRegMoneyBill1 className={clas} id={icon}/>
      case 'lesstime':return <GiSandsOfTime className={clas} id={icon}/>
      case 'high':return <BsWrenchAdjustable className={clas} id={icon}/>
      case 'all':return <BsCheckCircleFill className={clas} id={icon}/>
      case 'time':return <BsUniversalAccess className={clas} id={icon}/>
      case 'lessprice':return <FaDollarSign className={clas} id={icon}/>
      case 'contact':return <FaMessage className={clas} id={icon}/>
      break;
    }
  }

  return (
    <div className="
      flex flex-col items-center text-center w-[150px] border-2 border-dark dark:border-light rounded-[20px]
    ">
      <div className="border border-dark dark:border-light rounded-full mx-4 mt-2 w-[60px] h-[60px] flex justify-center items-center">
        {Choose()}
      </div>
      <p className="text-[18px] m-4">{title}</p>
    </div>
  )
}


export default Reason