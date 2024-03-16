import type { Metadata } from "next";
import Image from "next/image";
import Title from "@/component/Title";


export const metadata: Metadata = {
  title: `${process.env.name} - Работа в эскорте для девушек модельной внешности`,
  description: `Заполняя анкету на нашем сайте вы получаете возможность получить вакансию эскорт модели, и получаете доступ к базе проверенных клиентов`,
};


function Layout({children}:{children: React.ReactNode}) {
	return ( 
		<section className="section min-h-screen bg-secondary pt-20 pb-40
		before:absolute before:w-full before:-bottom-10 before:left-0 before:h-[100px] sm:before:h-[140px] 
		before:bg-[url('/border.png')] before:bg-top before:z-10">
			<div className="container mx-auto flex flex-col items-center gap-y-10">
				<Title title="Работа в сфере эскорта" subtitle='Заполните форму и мы свяжемся с вами'/>
				<div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
					<p className="text-xl w-full lg:w-1/3 italic">Если вы хотите получать дополнительный доход и имеете 
					обоятельную внешность то просто заполните анкету чтобы получить работу в сфере эскорта.
					на данную ваканси может откликнутся любой желающий независимо от возраста и внешности. 
					Зарабатывать на сервисе эскорт услуг Butterfly может каждая. Данное предложение распространяется на лиц 
					достигших совершеннолетия и строго <b>18+</b> при верификации потребуется паспорт.</p>
					<Image src={'/anketa-girl.png'} width={600} height={400} alt="эскорт вакансии" />
				</div>
				{children}
			</div>
		</section>
	);
}

export default Layout;