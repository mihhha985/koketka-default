"use client"
import Image from "next/image";
import RatingStars from "./RatingStar";
import {motion} from "framer-motion";
import { forwardRef, ForwardedRef} from "react";

type ItemProps = {id: number, name: string, age: number, rating: number, offset?:string};

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Index = motion(forwardRef(({id, name, age, rating}: ItemProps, ref:ForwardedRef<HTMLDivElement>) => {
	return ( 
		<div ref={ref} className="relative cursor-pointer overflow-hidden rounded-lg shadow-xl shadow-black/10 h-[400px]
			group hover:shadow-none transition-all duration-200 ease-in-out">
				<Image 
					src={`${process.env.serverUrl}/${id}/ava.jpg`}
					alt={''}
					sizes="100%"
					fill
					className="object-cover transition-transform duration-200 transform group-hover:scale-105 ease-in-out"
				/>
				<div className="absolute bottom-0 left-0 w-full h-20 bg-default/80 flex items-center justify-between px-5">
					<div className="flex flex-col">
						<p className="text-2xl font-bold text-accent">{name}</p>
						<p className="text-2xl text-accent italic">{age} года</p>
					</div>
					<div className="flex flex-col text-right">
          	<h4 className='font-bold text-lg text-accent mb-2'>Рейтинг: {rating}</h4>
          	<RatingStars rating={rating} />
        	</div>
				</div>
		</div>
	);
}))

export default Index;