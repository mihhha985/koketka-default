import type { Metadata } from "next";
import Title from "@/component/Title";
import ViewGallery from "@/component/ViewGallery";
import ViewDescription from "@/component/ViewDesctiption";
import PaymentModal from "@/component/Modal/PaymentModal";
import AlertModal from "@/component/Modal/AlertModal";
import { notFound } from 'next/navigation'

const GetModelByUuid = async (uuid: string) => {
	try{
		const res = await fetch(`${process.env.serverUrl}/models/${uuid}`,  { cache: 'no-store' });
		if(res.status === 200){
			const data = await res.json();
			return data;
		}else{
			return null;
		}
	}catch(e: any){
		throw new Error(e.message);
	}	
}

export async function generateMetadata({ params }: { params: { uuid: string } }): Promise<Metadata> {
	const user = await GetModelByUuid(params.uuid);
	if(user){
		return {
			title: `Эскорт модель - ${user.firstName} - ${process.env.name}`,
			description: `эскорт услуги ${process.env.name} - ${user.about}`,
		};
	}else{
		return {
			title: `${process.env.name} - Not Found`,
			description: `страница удалена или заблокированнна`,
		};
	}

}

async function View({ params }: { params: { uuid: string } }) {
  const user = await GetModelByUuid(params.uuid);
	console.log(user);
  if(user){
		return (
			<section className="section bg-secondary pt-20 pb-40 min-h-screen before:absolute before:w-full 
			before:-bottom-1 before:left-0 before:bg-[url('/border.png')] before:h-[100px] sm:before:h-[160px] before:bg-top before:z-10"> 
				<div className="container mx-auto flex flex-col gap-10 items-center">
					<Title title={user.firstName} subtitle='Эскорт модель'/>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
						<ViewGallery id={user.description.id}/>
					 	<ViewDescription user={user}/>
					</div>
				</div>
				<PaymentModal name={user.firstName} age={user.description.age}/>
				<AlertModal />
			</section>
		);
	}else{
		notFound();
	}
}

export default View;