
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "خدماتنا",
  description: "جميع الخدمات التقنية التي من الممكن أن تحتاجها على الإنترنت",
};


export default function({children}) {
  return (
    <>
      {children}
    </>
  );
}

