import Link from "next/link"

const Btn = ({link, value, classn, target=''}) => {
  return (
    <Link href={link} target={target} className={classn + "   px-2 py-[0.15rem] font-bold border border-black rounded-[5px] bg-main duration-200 text-black hover:dark:text-white hover:dark:bg-dark hover:bg-light hover:border-main border-2"}>{value}</Link>
  )
}

export default Btn