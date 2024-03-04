
import Btn from "./Btn"

const Project = ({title, type, disc, url}) => {

  const typee = () =>{
    if(type=='web'){
      return 'موقع ويب'
    }
    else if(type=='mob'){
      return 'تطبيق موبايل'
    }
    else if(type=='logo'){
      return 'تصميم شعار'
    }
    else if(type=='des'){
      return 'تصميم عام'
    }
    else if(type=='oth'){
      return 'أخرى'
    }
  }

  return (
    <div className="bg-light dark:bg-dark my-4 mx-1 flex flex-col items-center rounded-[25px]">
      <div className={"flex items-center justify-center font-bold w-full h-[50px] rounded-t-[15px] " + type}>
        <p>{typee()}</p>
      </div>
      <div className="flex flex-col p-4 sm:p-2">
        <h1 className="font-bold lss sm:text-[12px] text-center">{title}</h1>
        <hr/>
        <p className="w-[150px] text-[14px] mt-2 sm:text-[10px]">{disc}</p>
        <Btn link={url} target='_blanc' value='إذهب' classn='self-center mt-2'/>
      </div>
    </div>
  )
}

export default Project