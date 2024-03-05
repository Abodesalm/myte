import Aproval from "@/components/Aproval";
import HT from "@/components/HT";
import { about } from "@/public/data/all";

export default function About() {
  return (
    <div className="pad bg-light/25 dark:bg-dark/55">
      <HT value='معلومات عنا :' clas="w-[200px] rounded-[20px]"/>
      <div className="mt-8 flex flex-col gap-2">
        {
          about.map((el)=>
            <Aproval value={el} key={el} clas="font-light"/>
          )
        }
      </div>
    </div>
  )
}
