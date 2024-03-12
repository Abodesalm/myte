import Aproval from "./Aproval"
import HT from "./HT"
import Pack from "./Pack"


/*

Websites :	- small : +200 R.S		- medium : +1,600 R.S
Mobile Apps :	- small : +400 R.s 		- medium : +1,800 R.S
Graphic Design :
	- Photo : +20 R.S.
	- Small Pack : 	2 Photos , 30s Video :	          	80 R.S.	( 100 R.S )
	- Medium Pack :	3 Photos , 1m Video : 	          	120 R.S	( 200 R.S )
	- Large Pack :	5 Photos , 2m Video , Voice-Over :	240 R.S	( 300 R.S )
Visual Idenity :		Logo :	+80 R.S.
	- Small Pack : 	Logo , Colors  :			                        150 R.S.  (200)
	- Medium Pack :	Logo , Colors , Font , Pattern  :	            390 R.S.  (500)
	- Large Pack :	Logo , Colors , Font , Pattern , MockUps  :   500 R.S.  (650)
Montage : 	50 R.S	For Minute.
Voice-Over :	20 R.S
Write / Script :	+20 R.S

        <Aproval clas="md:text-[12px] font-light" value={<p>  <Bill val={'' + '( )'}/></p>}/>


*/

const Price = ({type}) => {

  const Bill = ({val})=>{return<span className="text-green-700 dark:text-green-500 font-bold">{val}</span>}

  const Choose = () => {
    if(type=='web'){
      return<>
        <Aproval clas="md:text-[12px] font-light" value={<p>موقع بسيط : يبدأ السعر من <Bill val={'200 ر.س' + ' (50$)'}/></p>}/>
        <Aproval clas="md:text-[12px] font-light" value={<p>موقع متقدم : يبدأ السعر من <Bill val={'1600 ر.س' + ' (400$)'}/></p>}/>
      </>
    }
    else if(type=='mob'){
      return<>
        <Aproval clas="md:text-[12px] font-light" value={<p>تطبيق بسيط : يبدأ السعر من <Bill val={'400 ر.س' + ' (100$)'}/></p>}/>
        <Aproval clas="md:text-[12px] font-light" value={<p>تطبيق متقدم : يبدأ السعر من <Bill val={'1800 ر.س' + ' (450$)'}/></p>}/>
      </>
    }
    else if(type=='des'){
      return<>
        <Aproval clas="md:text-[12px] font-light" value={<p>يختلف السعر حسب الصورة و يبدأ السعر من <Bill val={'20 ر.س' + ' (5$)'}/></p>}/>
        <Aproval clas="md:text-[12px] font-light" value={<p>مونتاج الفيديوهات سعره لكل دقيقة <Bill val={'50 ر.س' + ' (12.5$)'}/></p>}/>
        <Aproval clas="md:text-[12px] font-light" value={<p>تصميم لوغو يبدأ اللسعر من <Bill val={'80 ر.س' + ' (20$)'}/></p>}/>
        <Aproval clas="md:text-[12px] font-light" value={<p>التعليق الصوتي سعره لكل دقيقة <Bill val={'20 ر.س' + ' (5$)'}/></p>}/>

        <HT value={"باقات التصميم :"} clas="w-[220px] rounded-[20px] mt-8 md:mb-2"/>
        <Pack />

        <HT value={"باقات الهوية البصرية :"} clas="w-[280px] rounded-[20px] mt-8 md:mb-2"/>
        <Pack />

      </>
    }
    else if(type=='cyb'){
      return<>
        <Aproval clas="md:text-[12px] font-light" value={<p>لا توجد أسعار معينة بل يكون السعر حسب كل خدمة</p>}/>
      </>
    }
    else if(type=='ofc'){
      return<>
        <Aproval clas="md:text-[12px] font-light" value={<p>كتابة نص أو سكربت يبدأ السعر من <Bill val={'20 ر.س' + ' (5$)'}/></p>}/>
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