"use client"
import {useEffect, useState} from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import CatalogItem from '@/component/CatalogItem';
import {Contact} from '@/types/models';

function Favorites() {
	const router = useRouter();
  const [models, setModels] = useState<Contact[] | []>([]);

  useEffect(() => {
    const ids = localStorage.getItem('favorites');
    if(!ids) router.push('/catalog');
    fetch(`${process.env.serverUrl}/models/favorites?ids=${ids}`,  {
      cache: 'no-cache',
    })
    .then(result => result.json())
    .then(result => {
      setModels(result);
    })
		.catch(error => {
      console.log(error);
			router.push('/catalog');
		});
  }, []);
  
  if(models.length > 0){
    return ( 
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 w-full">
				{models.length > 0 && models.map((model: Contact) => 
					<Link href={`/view/${model.uuid}`} key={model.id}>
						<CatalogItem 
							key={model.id}
							uuid={model.uuid}
							id={model.description.id}
							name={model.firstName}
							age={model.description.age}
							rating={model.rating}
						/>
					</Link>
				)}
			</div>
    );
  }
}

export default Favorites;