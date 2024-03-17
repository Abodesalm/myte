
import Link from "next/link";
import { accounts } from "@/public/data/all";
import SmallLink from "@/components/SmallLink";
import Image from "next/image";
import logo from '../public/images/logo-svg.svg'

export default function Footer () {
    const year = new Date().getFullYear();

    return (
        <footer className="w-full text-dark dark:text-light dark:bg-dark/95 bg-light/95 flex flex-row md:flex-col justify-around items-center pad">

            <div className="w-full h-full flex flex-col items-center justify-center md:text-center">
                <p>مؤسسة تجارة خدمات إلكترونية مرخصة في المملكة العربية السعودية , نقدم العديد من الخدمات الإلكترونية الموضحة في الأعلى , سنكون مسرورين دائما بتعاملك معنا</p>
            </div>



            <div className="w-full h-full flex flex-col justify-evenly md:p-8 en-l gap-[4px]">
                {accounts.slice(1,-1).map((acc)=>
                    <SmallLink name={acc.name} url={acc.url} icon={acc.icon} key={acc.icon}/>
                )}
            </div>



            <div className="w-full h-full pr-[8rem] lg:pr-[3rem] md:p-8 md:pt-0">
                <p className="mt-2 ">أقسام مهمة :</p>
                <div className="flex flex-col ms-4 mt">
                    <Link href='projects' className="hover:text-main w-[fit-content]">- مشاريعنا</Link>
                    <Link href='policy' className="hover:text-main w-[fit-content]">- سياسة الخدمة</Link>
                    <Link href='about' className="hover:text-main w-[fit-content]">- معلومات عنا</Link>
                    <Link href='contact' className="hover:text-main w-[fit-content]">- تواصل معنا</Link>
                    <Link href='contracts' className="hover:text-main w-[fit-content]">- العقود</Link>
                </div>
            </div>


            <div className="w-full h-full flex flex-col items-center justify-center">
                <Image src={logo} width={150} alt="شعار مؤسسة مايت الإلكترونية"/>
                <p className="en-l">Copyright Myte Team {year}</p>
            </div>
        </footer>
    )
}

