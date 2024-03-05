
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "سياسة الخدمة",
  description: "سياسة الدفع و الشراء و الاستخدام و الخصوصية.",
};


const katha = ({children}: Readonly<{children: React.ReactNode;}>) =>{
  return (
    <>
      {children}
    </>
  );
}
export default katha;