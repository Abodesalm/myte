
import Image from "next/image"

const Feature = ({value, clas}) => {
  return (
    <div className={clas + " h-[50px] bg-black/75 text-white p-1 ribon before:bg-main flex items-center"}>
      <p className="ms-2">{value}</p>
    </div>
  )
}

export default Feature