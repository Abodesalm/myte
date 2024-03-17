
import Link from "next/link";
import { FaFacebookSquare, FaInstagram, FaWhatsapp, FaTiktok, FaEnvelope, FaTelegram, FaDiscord } from "react-icons/fa"


const SmallLink = ({icon,name,url}) => {

  const Choose = (clas: string | undefined)=>{
    if(icon=='FB'){return <FaFacebookSquare className={clas}/>}
    else if(icon=='TE'){return <FaTelegram className={clas}/>}
    else if(icon=='DI'){return <FaDiscord className={clas}/>}
    else if(icon=='IN'){return <FaInstagram className={clas}/>}
    else if(icon=='TT'){return <FaTiktok className={clas}/>}
    else if(icon=='WA'){return <FaWhatsapp className={clas}/>}
    else if(icon=='EM'){return <FaEnvelope className={clas}/>}
  }

  return (
    <Link href={url} target="_blanc" className="flex flex-row justify-end items-center gap-[10px] hover:text-main cursor-pointer">
      <p>{name}</p>
      {Choose('text-[20px]')}
    </Link>
  )
}

export default SmallLink