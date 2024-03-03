
import Btn from "@/components/Btn"
import Feature from "@/components/Feature"

export default function Header () {
  return (
    <div className="h-[500px] relative flex pad flex-row sm:flex-col bg-light/25 dark:bg-dark/55">
      <div className="w-[60%] md:w-[90%] pt-[6rem] flex flex-col items-start">
        <div className="flex flex-col items-start bg-dark p-4 sm:p-1 dark:text-white sh">
          <h1 className="text-[3rem] font-bold ar-b text-main">فريق مايت</h1>
          <p className="mt-[20px] ms-[20px] w-full w-[80%] text-white">يقدم العديد من الخدمات الإلكترونية بمختلف مجالاتها و اختصاصاتها</p>
          <Btn classn=' mt-[20px]' value='رؤية المزيد' link='#services'/>
        </div>
      </div>
        <Feature value='تستطيع طلب خدمتك من أي مكان في العالم!' clas='absolute bottom-16 left-[200px] md:left-[50px] w-[325px] '/>
    </div>
  )
}
