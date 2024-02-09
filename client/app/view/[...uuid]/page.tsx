import Gallery from "@/component/Gallery";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

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
			<div className="grid grid-cols-2 gap-5">
				<div className="flex flex-col gap-y-5">
					<h3 className="text-2xl font-semibold">
						{user.firstName}, {user.description.age} года
					</h3>
					<p>{user.about}</p>
				</div>
				<div className="flex flex-col px-20 py-10  gap-y-5 border-2 border-slate-300 rounded-lg">
					<h4 className="text-xl font-semibold uppercase">получить контакты</h4>
					<h5 className="italic">Для того что-бы получить контакты девушеки напишите нашему менеджеру</h5>
					<div className="flex gap-x-5">
						<a href="https://wa.me/79054462485" target="__blank">
							<FaWhatsapp  size={44}/>
						</a>
						<a href="https://t.me/pandoramodels" target="__blank">
							<FaTelegramPlane size={44}/>
						</a>
					</div>
				</div>
				<Gallery id={Number(user.id)}/>
			</div>
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