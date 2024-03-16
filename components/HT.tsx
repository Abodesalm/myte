
import Image from "next/image"
import logo from '../public/images/logo-svg.svg'

const HT = ({value, clas=''}) => {
  return (
    <div className={"flex flex-row items-center w-[175px] bg-light rounded-t-[20px] dark:bg-dark/70  " + clas}>
      <Image src={logo} alt="شعار فريق مايت" width={40} height={40}/>
      <p className="font-bold text-[24px]">{value}</p>
    </div>
  )
}

export default HT