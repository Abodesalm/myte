
import Aproval from "@/components/Aproval";
import Feature from "@/components/Feature";
import HT from "@/components/HT";
import { why } from "@/public/data/all";
import Contacts from "@/components/Contacts";


export default function Contact ()  {
  return (
    <div className="pad bg-light/25 dark:bg-dark/55 flex flex-row md:flex-col justify-between ">
      <div className="flex flex-col gap-2 md:gap-[3px] relative">
        <HT value='تواصل معنا :' clas="w-[200px] rounded-[20px] mb-8 md:mb-2"/>
          {
            why.map((why)=>
              <Aproval clas="md:text-[12px] font-light   " value={why.title} key={why.icon}/>
            )
          }
        <Feature value='تستطيع طلب خدمتك من أي مكان في العالم' clas='absolute bottom-[100px] right-[150px] w-[320px] none font-bold'/>
      </div>
      <Contacts/>
    </div>
  )
}
