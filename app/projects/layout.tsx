
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "مشاريعنا",
  description: "المشاريع التي قمنا بها سابقا.",
};


const katha = ({children}: Readonly<{children: React.ReactNode;}>) =>{
  return (
    <>
      {children}
    </>
  );
}
export default katha;