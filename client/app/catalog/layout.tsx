import type { Metadata } from "next";
import Title from '@/component/Title';
import AlertModal from '@/component/Modal/AlertModal';
import ProfileModal from '@/component/Modal/ProfileModale';
import MailerModal from '@/component/Modal/MailerModal';

export const metadata: Metadata = {
  title: `Каталог элитных эскортниц России - Лучшие содержанки страны`,
  description: `Большой выбор девушек для сопровождения, содержания и пикантных встреч`,
};


function Layout(
	{children, sidebar}:
	{children: React.ReactNode, sidebar: React.ReactNode}) {
	return ( 
		<section className="section pt-20 bg-secondary flex flex-col items-center gap-y-10 
			before:absolute before:w-full before:-bottom-1 before:left-0 before:bg-[url('/border.png')] 
			before:h-[100px] sm:before:h-[160px] before:bg-top before:z-10">
			<Title title="Каталог" subtitle='Анкеты наших моделей'/>
			<div
				id="catalog-container" 
				className="flex gap-x-10 px-0 lg:px-[5%] w-full min-h-screen">
				{sidebar}
				{children}
			</div>
			<AlertModal />
			<ProfileModal />
			<MailerModal />
		</section>
	);
}

export default Layout;