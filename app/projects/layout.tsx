
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "مشاريعنا",
  description: "المشاريع التي قمنا بها سابقا.",
};


export default function({children}) {
  return (
    <>
      {children}
    </>
  );
}
