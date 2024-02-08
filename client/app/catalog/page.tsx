import Image from "next/image";
import Link from "next/link";

const getModels = async () => {
  const res = await fetch(`${process.env.serverUrl}/models/top`,  { 
    cache: 'no-cache',
  });
  const data = await res.json();
  return data;
}

async function Page() {
	const user = await getModels();
	console.log(user);
	return ( 
		<div className="flex flex-col gap-y-10">
			<div className="flex flex-col">
				<h3 className="text-4xl font-semibold">Каталог</h3>
				<h4 className="text-2xl italic">ТОП 50 лучших анкет сайта</h4>
			</div>
			<div className="grid grid-cols-4 gap-5">
				{user.map((model: any) => 
					<Link
						href={'/view/' + model.uuid}
						className="border-2 border-gray-300 rounded-md relative h-[300px] overflow-hidden cursor-pointer transition-all hover:shadow-2xl hover:border-gray-500 hover:scale-105 hover:z-10" 
						key={model.id}>
						 <Image 
							src={`${process.env.serverUrl}/${model.id}/ava.jpg`}
							alt={model.firstName}
							fill={true}
							priority={true}
							sizes="100%"
							className="object-cover"
						/>
						<div className="flex bg-slate-500 p-5 absolute bottom-0 right-0 text-gray-100">
							<p>{model.firstName}, {model.description.age}</p>
						</div>
					</Link>
				)}
			</div>
			<div className="flex flex-col gap-y-5">
				<p>Девушкам мы предлагаем знакомства с богатыми, надежными мужчинами без риска для репутации (даже в случае размещения на общедоступных страницах сайта) и прочих нежелательных последствий, неизбежных при размещении на массовые сайты, а тем более при обращении в агентства, которые предлагают эскорт. Быть у нас престижно - ведь это значит быть в числе лучших девушек рунета! Это поняли даже некоторые знаменитости, которые не стесняются сотрудничества с нами. Тем не менее, для девушек, которые не готовы открыто заявить, что ищут достойного мужчину, мы предусмотрели возможность размещения в закрытом каталоге агентства.</p>
				<p>Успешно работаем по всему миру уже более 25 лет, накопили большой опыт в организации знакомств в разных городах и странах даже в условиях жестких коронавирусных ограничений, нестабильной экономической ситуации и напряженных международных отношений. Недавно мы заключили эксклюзивный контракт с модельным агентством Росмоделс ( группа в телеграм ), что открыло для нас и наших клиентов выход на самых красивых девушек России и существенно расширило перечень доступных услуг, сделав их интересными в том числе и для тех, кто предпочитает знакомиться самостоятельно или готов предложить моделям высокооплачиваемую работу или творческие проекты в любых других сферах. Обращайтесь!</p>
			</div>
		</div>
	);
}

export default Page;