import HT from "@/components/HT"
import Aproval from "@/components/Aproval"
import { policy } from "@/public/data/all"


const page = () => {
  return (
    <div>
      <div className="pad bg-light/25 dark:bg-dark/55">
        <HT value='سياسة الدفع و الشراء :' clas="w-[280px] rounded-[20px]"/>
        <div className="mt-4 flex flex-col gap-1">
          {
            policy.buy.map((el)=>
              <Aproval value={el} key={el} clas="font-light"/>
            )
          }
        </div>
      </div>

      <div className="pad bg-light/25 dark:bg-dark/55">
        <HT value='سياسة الخصوصية:' clas="w-[250px] rounded-[20px]"/>
        <div className="mt-4 flex flex-col gap-1 mb-8">
          {
            policy.sens.map((el)=>
              <Aproval value={el} key={el} clas="font-light"/>
            )
          }
        </div>
      </div>

    </div>
  )
}

export default page

