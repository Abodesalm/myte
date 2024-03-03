

import HT from "@/components/HT"
import Reason from "@/components/Reason"
import { why } from "@/public/data/all"



const Why = () => {
  return (
    <div className="bg-gradient-to-bl from-light to-lity dark:from-dark dark:to-darke pad">
      <HT value='لماذا تختار مايت ؟' clas="w-[260px]"/>
      <div className="mt-8 flex flex-row flex-wrap justify-center items-stretch gap-x-[120px] md:gap-x-[10px] gap-y-[25px]">
        {
          why.map((el)=>
            <Reason title={el.title} icon={el.icon} key={el.icon}/>
          )
        }
      </div>
    </div>
  )
}

export default Why