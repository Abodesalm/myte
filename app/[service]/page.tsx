'use client'

import Aproval from "@/components/Aproval";
import Feature from "@/components/Feature";
import Price from "@/components/Price"
import HT from "@/components/HT";
import { services } from "@/public/data/all";
import Contacts from "@/components/Contacts";
import { redirect, useParams } from "next/navigation";



export default function Service () {
  const serv = useParams().service;
  let data
  if(serv=='web'){ data = services.web} 
  else if(serv=='mob'){data = services.mob} 
  else if(serv=='des'){data = services.des} 
  else if(serv=='vis'){data = services.vis} 
  else if(serv=='ofc'){data = services.ofc} 
  else if(serv=='oth'){data = services.oth} 
  else{redirect('not-found/not')}

  return (
    <div className="pad bg-light/25 dark:bg-dark/55 flex flex-row md:flex-col justify-between ">
      <div className="flex flex-col gap-2 md:gap-[3px] relative">
        <HT value={data.name} clas="w-[300px] rounded-[20px] mb-8 md:mb-2"/>
        {
          data.features.map((ser) =>
          <Aproval clas="md:text-[12px] font-light   " value={ser.title} key={ser.title}/>
          )
        }
        <Price type={serv}/>
      </div>
      <Contacts><h1 className="dark:text-main ar-b font-bold text-[20px]">اطلب خدمتك من هنا</h1></Contacts>
    </div>
  )
}

