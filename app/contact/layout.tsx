
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "تواصل معنا !",
  description: "نتيح لك جميع الطرق الممكنة للتواصل معنا.",
};


export default function({children}) {
  return (
    <>
      {children}
    </>
  );
}
