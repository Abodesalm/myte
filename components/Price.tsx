import Aproval from "./Aproval"
import HT from "./HT"
import Pack from "./Pack"
import { prices } from "@/public/data/all"
import Bill from "./Bill"


const pr = prices
/*
        <Aproval clas="md:text-[12px] font-light" value={<p><Bill val={''+' ()'}/></p>}/>
*/

const Price = ({type}) => {
  const Choose = () => {
    if(type=='web'){
      return<>
        <Aproval clas="md:text-[12px] font-light" value={<p>موقع بسيط : يبدأ السعر من <Bill val={pr.web.sm + ' ر.س' + ' ('+pr.web.sm/4+'$)'}/></p>}/>
        <Aproval clas="md:text-[12px] font-light" value={<p>موقع متقدم : يبدأ السعر من <Bill val={pr.web.lg + ' ر.س' + ' ('+pr.web.lg/4+'$)'}/></p>}/>
      </>
    }
    else if(type=='mob'){
      return<>
        <Aproval clas="md:text-[12px] font-light" value={<p>تطبيق بسيط : يبدأ السعر من <Bill val={pr.apk.sm + ' ر.س' + ' ('+pr.apk.sm/4+'$)'}/></p>}/>
        <Aproval clas="md:text-[12px] font-light" value={<p>تطبيق متقدم : يبدأ السعر من <Bill val={pr.apk.lg +' ر.س' + ' ('+pr.apk.lg/4+'$)'}/></p>}/>
      </>
    }
    else if(type=='des'){
      return<>
        <Aproval clas="md:text-[12px] font-light" value={<p>يختلف السعر حسب الصورة , يبدأ السعر من <Bill val={pr.des.ph +' ر.س' + ' ('+pr.des.ph/4+'$)'}/></p>}/>
        <Aproval clas="md:text-[12px] font-light" value={<p>مونتاج الفيديوهات : سعره لكل دقيقة <Bill val={pr.des.mo +' ر.س' + ' ('+pr.des.mo/4 +'$)'}/></p>}/>
        <Aproval clas="md:text-[12px] font-light" value={<p>التعليق الصوتي : سعره لكل دقيقة <Bill val={pr.des.vo +' ر.س' + ' ('+pr.des.vo/4 +'$)'}/></p>}/>

        <HT value={"باقات التصميم :"} clas="w-[220px] rounded-[20px] mt-8 md:mb-2"/>
        <div className="flex flex-row lg:flex-wrap lg:justify-evenly">
          {
            prices.pac.des.map(el=>{
              return <Pack ty={el.ty} ti={el.ti} fe={el.fe} pr={el.pr} pe={el.pe}/>
            })
          }
        </div>
      </>
    }
    else if(type=='vis'){
      return<>
        <Aproval clas="md:text-[12px] font-light" value={<p>تصميم لوغو : يبدأ السعر من <Bill val={pr.vis.lo +' ر.س' + ' ('+pr.vis.lo/4 +'$)'}/></p>}/>
        <Aproval clas="md:text-[12px] font-light" value={<p>تنسيق ألوان تناسب عملك <Bill val={pr.vis.co +' ر.س'+' ('+pr.vis.co/4 +'$)'}/></p>}/>
        <Aproval clas="md:text-[12px] font-light" value={<p>تصميم خط خاص بك : يبدأ سعره من <Bill val={pr.vis.fo +' ر.س'+' ('+pr.vis.fo/4 +'$)'}/></p>}/>

        <HT value={"باقات الهوية البصرية :"} clas="w-[280px] rounded-[20px] mt-8 md:mb-2"/>
        <div className="flex flex-row lg:flex-wrap lg:justify-evenly">
          {
            prices.pac.vis.map(el=>{
              return <Pack ty={el.ty} ti={el.ti} fe={el.fe} pr={el.pr} pe={el.pe}/>
            })
          }
        </div>

      </>
    }
    else if(type=='cyb'){
      return<>
        <Aproval clas="md:text-[12px] font-light" value={<p>لا توجد أسعار معينة بل يكون السعر حسب كل خدمة</p>}/>
      </>
    }
    else if(type=='ofc'){
      return<>
        <Aproval clas="md:text-[12px] font-light" value={<p>كتابة نص أو سكربت يبدأ السعر من <Bill val={pr.oth.wr + ' ر.س' + '('+pr.oth.wr/4+'$)'}/></p>}/>
      </>
    }
    else if(type=='oth'){
      return<>
        <Aproval clas="md:text-[12px] font-light" value={<p>لا توجد أسعار معينة بل يكون السعر حسب كل خدمة</p>}/>
      </>
    }
  }


  return (
    <>
      <HT value={"الأسعار :"} clas="w-[140px] rounded-[20px] mt-8 md:mb-2"/>
      {Choose()}
    </>
  )
}

export default Price