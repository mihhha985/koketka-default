import Link from 'next/link';
import Image from 'next/image';
import { MotionDiv } from '@/component/MotionDiv';
import RatingStars from "@/component/RatingStar";
import {Contact} from '@/types/models';
import type { Metadata } from "next";
import Title from '@/component/Title';
import AlertModal from '@/component/Modal/AlertModal';
import ProfileModal from '@/component/Modal/ProfileModale';
import MailerModal from '@/component/Modal/MailerModal';
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: `Каталог элитных эскортниц России - Лучшие содержанки страны`,
  description: `Большой выбор девушек для сопровождения, содержания и пикантных встреч`,
};

async function getData() {
	const response = await fetch(`${process.env.serverUrl}/models`);
	return await response.json();
}


async function Layout(
	{children, sidebar}:
	{children: React.ReactNode, sidebar: React.ReactNode}) {

	const models = await getData();
	if(models && models.length > 0){
	return ( 
		<section className="section pt-20 bg-secondary flex flex-col items-center gap-y-10 
			before:absolute before:w-full before:-bottom-1 before:left-0 before:bg-[url('/border.png')] 
			before:h-[100px] sm:before:h-[160px] before:bg-top before:z-10">
			<Title title="Каталог" subtitle='Анкеты наших моделей'/>
			<div className="flex gap-x-10 px-0 lg:px-[5%] w-full min-h-screen">
				{sidebar}
				<div className='flex flex-col gap-y-10 items-center w-full'>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full">
						{models.map((model: Contact, index:number) => 
							<Link href={`/view/${model.uuid}`} key={model.id}>
								<MotionDiv
									initial={{opacity:0, scale:1}}
									animate={{opacity:1}}
									whileTap={{scale:0.9, transition:{duration:0.1}}} 
									transition={{duration:0.8, delay:0.2 * index}}
									className="relative cursor-pointer overflow-hidden rounded-lg shadow-xl shadow-black/10 h-[400px]
									group hover:shadow-none transition-all duration-200 ease-in-out">
										<Image 
											src={`${process.env.serverUrl}/${model.description.id}/ava.jpg`}
											alt={`Эскортница ${model.firstName}`}
											sizes="100%"
											fill
											className="object-cover transition-transform duration-200 transform group-hover:scale-105 ease-in-out"
										/>
										<div className="absolute bottom-0 left-0 w-full h-20 bg-default/80 flex items-center justify-between px-5">
											<div className="flex flex-col">
												<p className="text-2xl font-bold text-accent">{model.firstName}</p>
												<p className="text-2xl text-accent italic">{model.description.age} года</p>
											</div>
											<div className="flex flex-col text-right">
												<h4 className='font-bold text-lg text-accent mb-2'>Рейтинг: {model.rating}</h4>
												<RatingStars rating={model.rating} />
											</div>
										</div>
								</MotionDiv>
							</Link>
						)}
					</div>
					{children}
				</div>
			</div>
			<AlertModal />
			<ProfileModal />
			<MailerModal />
		</section>
	);
	}else{
		notFound();
	}
}

export default Layout;