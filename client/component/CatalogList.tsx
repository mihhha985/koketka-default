"use client"
import { useEffect, useState, useRef } from 'react';
import { ImSpinner9 } from "react-icons/im";
import CatalogItem from '@/component/CatalogItem';
import {Contact} from '@/types/models';
import Link from 'next/link';
import { useInView } from "framer-motion";

let page = 0;

function CatalogList() {
	const [models, setModels] = useState<Contact[] | []>([]);
	const ref = useRef(null)
  const isInView = useInView(ref)
	
	useEffect(() => {
		if(isInView){
			let offsetY = window.pageYOffset;
			console.log('offsetY: ' + offsetY);
			setTimeout(() => {
				fetch(`${process.env.serverUrl}/models?offset=${page}`)
				.then(res => res.json())
				.then(res => {
					const newModelsPage = models.concat(res);
					setModels(newModelsPage);
					console.log(newModelsPage);
					window.scrollTo(0, offsetY -100);
					page++;
				});
			}, 1000);
		}
	}, [isInView]);
	
	return ( 
		<div className='container mx-auto flex flex-col gap-y-10 items-center min-h-screen'>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full">
				{models.length > 0 && models.map((model: Contact) => 
					<Link href={`/view/${model.uuid}`} key={model.id}>
						<CatalogItem 
							key={model.id}
							id={model.id}
							name={model.firstName}
							age={model.description.age}
							rating={model.rating}
						/>
					</Link>
				)}
			</div>
			<div className="flex justify-center items-center w-full mt-20" ref={ref}>
				<ImSpinner9 className="animate-spin text-5xl text-accent" />
      </div>
		</div>
	);
}

export default CatalogList;