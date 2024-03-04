
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "عقود",
  description: "جميع العقود و الفواتير الخاصة بالمؤسسة تكون هنا.",
};


export default function({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <>
      {children}
    </>
  );
}
