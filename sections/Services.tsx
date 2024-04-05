
import Feature from "@/components/Feature"
import HT from "@/components/HT"
import Serv from "@/components/Serv"


const services = () => {
  const data=[
    {icon:'web', title:'برمجة مواقع  الويب'},
    {icon:'mob', title:'برمجة تطبيقات الهاتف'},
    {icon:'des', title:'تصميم و مونتاج'},
    {icon:'vis', title:'تصميم هوية بصرية'},
    {icon:'ofc', title:'خدمات جامعية و مكتبية'},
    {icon:'oth', title:'خدمات أخرى'},
  ]
  return (
    <div id="services" className="dark:bg-dark/95 bg-light/90 pad border-b-[2px] border-t-[2px] border-black">
      <HT value='الخدمات :' />
      <p className="w-[fit-content] px-8 py-2 font-bold rounded-b-[10px] rounded-l-[10px] bg-light dark:bg-dark/50">نقدم لك جميع الخدمات التي تحتاجها مثل :</p>
      <div className="p-8 md:px-4 flex flex-col">
        {data.map((el, Index)=>
            <Serv icon={el.icon} title={el.title} clas={Index%2} key={el.icon} url={el.icon}/> 
          )}
      </div>
      <Feature value='جميع الخدمات التي قد تحتاجها.' clas='w-[250px]'/>
    </div>
  )
}

export default services