import Image from "next/image"
import logoSvg from "../public/images/logo-svg.svg"
import pink from "../public/images/svg-pink.svg"
import lime from "../public/images/svg-lime.svg"
import yellow from "../public/images/svg-yellow.svg"
import Bill from "./Bill"
import Btn from "./Btn"
import { accounts } from "@/public/data/all"

const Pack = ({clas = '',ty,ti,pr,pe,fe}) => {

  const logo=()=>{
    if(ty=='sm'){
      return 'pink'
    }else if(ty=='md'){
      return 'lime'
    }else if(ty=='lg'){
      return 'yellow'
    }
  }
  const logoo=()=>{
    if(ty=='sm'){
      return pink
    }else if(ty=='md'){
      return lime
    }else if(ty=='lg'){
      return yellow
    }
  }

  return (
    <div className={clas + ' bg-light dark:bg-dark min-w-[200px] sm:min-w-[150px] me-4 mt-2 px-2 py-4 sh3 rounded-[10px] flex flex-col justify-between over-h'}>
      <div>

        <div className="flex flex-row items-center relative">
          <Image src={logoo()} style={{fill:logo()}} alt="لوغو مايت" width={30} height={30}/>
          <p className="font-bold w-[60%]">{ti}</p>
          <div style={{backgroundColor:logo()}} className="w-[150px] h-[150px] rounded-[50%] absolute -left-[85px] -top-[110px] md:w-[100px] md:h-[100px] md:-top-[70px] md:-left-[70px] "><p className="relative top-[100px] -left-[18px] font-bold text-[20px] text-dark en-b md:text-[14px] md:left-[6px] md:top-[85px] index-[10] rot">{pe}-</p></div>
        </div>

        <p className="ms-2 mt-2">المزايا :</p>
        <ul className="ms-6 md:text-[12px]">
          {
            fe.map(el=>{
              return <li>{el}</li>
            })
          }
        </ul>

      </div>

      <div className="ms-2 mt-4 md:text-[12px]">
        <p className="mb-2">السعر : <Bill val={pr + ' ر.س ('+pr/4+'$)'}/></p>
        <Btn value='تقديم طلب' classn='' link={accounts[0].url} target="_blanc"/>
      </div>

    </div>
  )
}

export default Pack