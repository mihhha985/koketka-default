import type { Metadata } from "next";


export const metadata: Metadata = {
  title: `Эскорт Модель`,
  description: `Эслуги элитного сопровождения `,
};


function Layout({children}:{children: React.ReactNode}) {
	return ( 
		<>{children}</>
	);
}

export default Layout;