import CatalogItem from '@/component/CatalogItem';
import Title from '@/component/Title';
import {Contact} from '@/types/models';
import Link from 'next/link';

const getModels = async () => {
  const res = await fetch(`${process.env.serverUrl}/models/top`,  { 
    cache: 'no-cache',
  });
  const data = await res.json();
  return data;
}

async function Page() {
	const user = await getModels();
	
	return ( 
		<section className="section py-40 bg-secondary before:absolute before:w-full before:-bottom-[1px] before:left-0 before:h-[200px]
		before:bg-[url('/border.png')] before:z-10">
			<div className='container mx-auto flex flex-col gap-y-10 items-center'>
				<Title title="Каталог" subtitle='Анкеты наших моделей'/>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full">
					{user.map((model: Contact) => 
						<Link href={`/view/${model.uuid}`} key={model.id}>
							<CatalogItem 
								key={model.id}
								uuid={model.uuid}
								id={model.id}
								name={model.firstName}
								age={model.description.age}
								rating={model.rating}
							/>
						</Link>
					)}
				</div>
			</div>
		</section>
	);
}

export default Page;