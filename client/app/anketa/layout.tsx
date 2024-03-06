import type { Metadata } from "next";


export const metadata: Metadata = {
  title: `${process.env.name} - Работа в эскорте для девушек модельной внешности`,
  description: `Заполняя анкету на нашем сайте вы получаете возможность получить вакансию эскорт модели, и получаете доступ к базе проверенных клиентов`,
};


function Layout({children}:{children: React.ReactNode}) {
	return ( 
		<>{children}</>
	);
}

export default Layout;