import type { Metadata } from "next";
import Title from '@/component/Title';
import Link from 'next/link';
import Image from 'next/image';
import {article} from '@/article';

export const metadata: Metadata = {
  title: `${process.env.name} - Наш блог`,
  description: `Сервис эскорт услуг ${process.env.name} - Самые правдивые рассказы эскортниц о своей работе жизни и многом другом`,
};

function Page() {
	return ( 
		<section className="section pt-20 pb-40 bg-secondary flex flex-col items-center gap-y-10 min-h-screen
			before:absolute before:w-full before:-bottom-1 before:left-0 before:bg-[url('/border.png')] 
			before:h-[100px] sm:before:h-[160px] before:bg-top before:z-10">
			<Title title="Наш Блог" subtitle='Правдивые рассказы эскортниц'/>
			<div className='container mx-auto flex flex-col gap-y-10'>
				{article.map((item, index) => (
					<Link
						href={`/blog/${index}`} 
						className="flex flex-col md:flex-row gap-2 bg-default p-5 rounded-2xl transition-all duration-200 hover:shadow-md">
						<Image src={`/blog/${item.ava}`} width={100} height={100} alt={item.altPrimary} />
						<div>
							<h3 className='text-3xl font-bold'>{item.title}</h3>
							<h4 className='text-2xl italic'>{item.subtitle}</h4>
						</div>
					</Link>
				))}
			</div>
		</section>
	);
}

export default Page;