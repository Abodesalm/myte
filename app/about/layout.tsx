
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "معلومات عنا",
  description: "معلومات عامة عن مؤسسة مايت الإلكترونية",
};


const kahta =({children}: Readonly<{children: React.ReactNode;}>) => {
  return (
    <>
      {children}
    </>
  );
}

export default kahta