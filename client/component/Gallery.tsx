import Image from "next/image";

const GetAlbumById = async (id: number) => {	
	try{
		const res = await fetch(`${process.env.serverUrl}/models/gallery/${id}`);
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

async function Index({id}: {id:number}) {
	const album = await GetAlbumById(id);

	return ( 
		<div className="grid grid-cols-3 gap-2 col-span-2">
			{album && album.foto?.map((item:any, index:number) => 
				<a
					key={index} 
					target="__blank" 
					href={`${process.env.serverUrl}/${id}/foto/${item}`}
					className="relative h-[400px] w-[400px]"
				>
					<Image 
						src={`${process.env.serverUrl}/${id}/foto/${item}`} 
						priority={index === 0 ? true : false }
						sizes="100%"
						fill
						alt="foto"
						className="object-contain" 
					/>
				</a>
			)}
		</div>
	);
}

export default Index;