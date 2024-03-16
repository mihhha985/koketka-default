import type { Metadata } from "next";
import Title from "@/component/Title";
import Image from "next/image";
import { notFound } from "next/navigation";
import { article } from "@/article";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
	const id = parseInt(params.id);
	const item = article[id];
	if(item !== undefined) {
		return {
			title: `Статья про эскорт - ${item.title}`,
			description: item.subtitle,
		};
	}else{
		return {
			title: `Статья про эскорт - Не найдено`,
			description: `Статья про эскорт - Не найдено`,
		};
	
	}
}

function Page({params}: {params: {id: string}}) {
	const id = parseInt(params.id);
	const item = article[id];
	console.log(item)

	if(item){
		return ( 
			<section className="section pt-20 pb-40 bg-secondary flex flex-col items-center gap-y-10 min-h-screen
			before:absolute before:w-full before:-bottom-1 before:left-0 before:bg-[url('/border.png')] 
			before:h-[100px] sm:before:h-[160px] before:bg-top before:z-10">
				<Title title="Статья" subtitle={item.title} />
				<div className="container mx-auto grid gap-cols-1 lg:grid-cols-2 mt-10 gap-5">
					<Image src={`/blog/${item.imgPrimary}`} width={600} height={400} alt={item.altPrimary} />
					<p className="text-xl lg:text-2xl">{item.content1}</p>
					<p className="text-xl lg:text-2xl order-1 lg:order-none">{item.content2}</p>
					<Image src={`/blog/${item.imgSecondary}`} width={600} height={400} alt={item.altSecondary} />
				</div>
			</section>
		);
	}else{
		return notFound();
	}
}

export default Page;