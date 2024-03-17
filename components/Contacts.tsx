
import AccountLink from "@/components/AccountLink";
import { accounts } from "@/public/data/all";
import { Children } from "react";


const Contact = ({children=<></>}) => {
  return (
    <div className="bg-gradient-to-tr dark:from-dark dark:to-darke from-light to-lity sh2 w-1/2 flex flex-col items-center justify-evenly h-[650px] rounded-[30px]
                    md:mt-2 md:w-[90%] md:mx-auto md:justify-center md:gap-[10px] md:h-[520px]
    ">
        {children}
        {
          accounts.map((acc)=>
            <AccountLink clas="bg-gradient-to-tr dark:from-dark dark:to-darke from-lity to-light font-bold dark:font-normal sh3 hover:text-sec dark:hover:border-main dark:hover:text-main hover:border-sec transition duration-300 en-l " key={acc.icon} name={acc.name} url={acc.url} icon={acc.icon}/>
          )
        }
    </div>
  )
}

export default Contact
