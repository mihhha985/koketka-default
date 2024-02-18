import Title from "@/component/Title";
import ViewGallery from "@/component/ViewGallery";
import ViewDescription from "@/component/ViewDesctiption";

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

async function View({ params }: { params: { uuid: string } }) {
  const user = await GetModelByUuid(params.uuid);

  if(user){
		return (
			<section className="section py-40 min-h-screen"> 
				<div className="container mx-auto flex flex-col gap-y-10 items-center">
					<Title title={user.firstName} subtitle='Эскорт модель'/>
					<div className="grid grid-cols-1 lg:grid-cols-2 w-full">
						<ViewGallery id={user.id}/>
					 <ViewDescription user={user}/>
					</div>
				</div>
			</section>
		);
	}else{
		return(
			<div className="w-full h-screen flex flex-col items-center justify-center">
				<h1 className="text-4xl font-semibold text-secondary-300">Анкета удаленна или заблокированна!</h1>
			</div>
		)
	}
}

export default View;