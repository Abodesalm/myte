
import Link from "next/link"
import { FaFacebookSquare, FaInstagram, FaWhatsapp, FaTiktok, FaEnvelope, FaTelegram, FaDiscord } from "react-icons/fa"

const AccountLink = ({name,url,clas ='',icon}) => {

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
    <Link href={url} target="_clanc" className={clas + '   flex flex-row items-center justify-end py-4 px-8 md:py-3 md:px-6 border border-dark dark:border-light rounded-[10px] w-[80%]'}>
      <h1 className="ltr">{name}</h1>
      {Choose('relative bottom-[1px] ms-4 text-[30px]')}
    </Link>
  )
}

export default AccountLink
