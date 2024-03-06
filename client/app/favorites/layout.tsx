import Title from '@/component/Title';
import AlertModal from '@/component/Modal/AlertModal';
import ProfileModal from '@/component/Modal/ProfileModale';
import MailerModal from '@/component/Modal/MailerModal';

function Layout(
	{children, sidebar}:
	{children: React.ReactNode, sidebar: React.ReactNode}) {
	return ( 
		<section className="section pt-20 pb-32 sm:pb-40 bg-secondary flex flex-col items-center gap-y-10
		before:absolute before:w-full before:-bottom-1 before:left-0 before:bg-[url('/border.png')] 
		before:h-[120px] md:before:h-[160px] before:bg-top before:z-10">
			<Title title="Фавориты" subtitle='Список понравившихся моделей'/>
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