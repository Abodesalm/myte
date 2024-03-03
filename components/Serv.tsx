
import Link from 'next/link'
import {FcMindMap, FcAndroidOs, FcMultipleCameras, FcBriefcase, FcMultipleDevices} from 'react-icons/fc'
import { FaShieldVirus } from 'react-icons/fa6'
import {BsAndroid2, BsCamera2, BsDisplay, BsFolderCheck, BsListCheck} from 'react-icons/bs'

const Serv = ({clas, title, icon, url}) => {

  const ChooseIcon = (clas) =>{
    if(icon=='web'){
      return <BsDisplay className={clas}/>
    }else if(icon=='mob'){
      return <BsAndroid2 className={clas}/>
    }else if(icon=='des'){
      return <BsCamera2 className={clas}/>
    }else if(icon=='cyb'){
      return <FaShieldVirus className={clas}/>
    }else if(icon=='ofc'){
      return <BsFolderCheck className={clas}/>
    }else if(icon=='oth'){
      return <BsListCheck className={clas}/>
    }
  }

  const index = ['self-start','self-end -mt-[7rem] xl:mt-0']

  return (
    <Link href={url} className={'theWidth h-[160px]    bg-dark dark:bg-light     rounded-[30px]     pt-4 ps-8 md:ps-4 relative xl:mb-4 sh3  ' + index[clas]}>
      <h1 className="text-[30px] font-bold ar-b text-light dark:text-dark">{title}</h1> 
      {ChooseIcon('absolute w-[110px] md:w-[90px] md:left-1 md:-bottom-5 h-[150px] bottom-0 left-8 text-sec')}
      <p className='md:ms-[1rem] text-light dark:text-dark ms-[6rem] mt-6'>-- اضغط هنا -- </p>
    </Link>
  )
}

export default Serv