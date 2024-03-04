
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "خدماتنا",
  description: "جميع الخدمات التقنية التي من الممكن أن تحتاجها على الإنترنت",
};


const kahta =({children,}: Readonly<{children: React.ReactNode;}>) => {
  return (
    <>
      {children}
    </>
  );
}


export default kahta;