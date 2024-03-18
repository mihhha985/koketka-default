"use client"
import { useEffect, useState, useRef } from 'react';
import { ImSpinner9 } from "react-icons/im";
import CatalogItem from '@/component/CatalogItem';
import {Contact} from '@/types/models';
import Link from 'next/link';
import { useInView } from "framer-motion";
import { motion } from 'framer-motion';

let page = 1;

function CatalogList() {
	const [models, setModels] = useState<Contact[] | []>([]);
	const ref = useRef(null)
  const isInView = useInView(ref);

	useEffect(() => {
		window.scrollTo(0, 0);
		return () => {
			page = 1;
		}
	}, []);
	
	useEffect(() => {
		if(isInView){
	
			try{
				let offsetY = window.pageYOffset;
				setTimeout(() => {
				fetch(`${process.env.serverUrl}/models?offset=${page}`)
					.then(res => res.json())
					.then(res => {
						const newModelsPage = models.concat(res);
						setModels(newModelsPage);
						page++;
					});
				}, 500);

				setTimeout(() =>  {
					window.scrollTo(0, offsetY - 100)
				}, 600);
			}catch(err){
				throw err;
			}
		}
	}, [isInView]);
	
	return ( 
		<>
			<motion.div
				transition={{staggerChildren: 0.3}}
				className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full">
				{models.length > 0 && models.map((model: Contact) => 
					<Link href={`/view/${model.uuid}`} key={model.id}>
						<CatalogItem
							initial={{ opacity: 0, scale:1}}
							whileInView={{ opacity: 1}}
							whileTap={{scale:0.9, transition:{duration:0.1}}}
							transition={{duration:0.8}} 
							viewport={{once:true}}
							key={model.id}
							id={model.description.id}
							name={model.firstName}
							age={model.description.age}
							rating={model.rating}
						/>
					</Link>
				)}
			</motion.div>
			<div className="relative flex justify-center items-center w-full mt-20 z-50" ref={ref}>
				<ImSpinner9 className="animate-spin text-5xl text-accent" />
      </div>
		</>
	);
}

export default CatalogList;