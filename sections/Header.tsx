
import Btn from "@/components/Btn"
import Feature from "@/components/Feature"

export default function Header () {
  return (
    <div className="h-[500px] relative flex pad flex-row sm:flex-col bg-light/25 dark:bg-dark/55">

      <p className="absolute text-red-500 bg-dark/80 p-4 font-bold rounded-[10px] left-[40%] sm:left-[calc(50%_-_165px)] text-[26px] sm:text-[20px]">! هذا الموقع هو مجرد نسخة تجريبية !</p>

      <div className="w-[60%] md:w-[90%] pt-[6rem] flex flex-col items-start">
        <div className="flex flex-col items-start bg-dark p-4 sm:p-1 dark:text-white sh">
          <h1 className="text-[3rem] font-bold ar-b text-main">مؤسسة مايت</h1>
          <p className="mt-[20px] ms-[20px] w-full w-[80%] sm:w-[75%] text-white">تقدم العديد من الخدمات الإلكترونية بمختلف مجالاتها و اختصاصاتها</p>
          <Btn classn=' mt-[20px] sm:mb-[5px] sm:ms-[5px]' value='رؤية المزيد' link='#services'/>
        </div>
      </div>
        <Feature value='تستطيع طلب خدمتك من أي مكان في العالم!' clas='absolute bottom-16 left-[200px] md:left-[50px] w-[325px] '/>
    </div>
  )
}
