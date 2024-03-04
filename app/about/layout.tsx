
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "معلومات عنا",
  description: "معلومات عامة عن مؤسسة مايت الإلكترونية",
};


export default function({children}) {
  return (
    <>
      {children}
    </>
  );
}
