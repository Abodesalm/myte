
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "تواصل معنا !",
  description: "نتيح لك جميع الطرق الممكنة للتواصل معنا.",
};


const kahta =({children}: Readonly<{children: React.ReactNode;}>) => {
  return (
    <>
      {children}
    </>
  );
}

export default kahta;