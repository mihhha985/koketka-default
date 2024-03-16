"use client"
import Image from 'next/image';
import Title from './Title';
import { useState, useEffect } from 'react';
import { Scrollbar, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';

export default () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch(`${process.env.serverUrl}/models/top`)
		.then(res => res.json())
		.then(data => {
			setData(data);
		})
		.catch(err => console.log(err));
	}, []);
  return (
		<section className="section flex flex-col items-center gap-y-10 pt-24">
			<Title title="Наши Модели" subtitle="Топ 50 лучших анкет сайта" />
			<Swiper
				modules={[Scrollbar, Autoplay]}
				slidesPerView={1}
				spaceBetween={5}
				breakpoints={{
					480: {
						slidesPerView: 2,
						spaceBetween: 5
					},
					640: {
						slidesPerView: 3,
						spaceBetween: 5
					},
					1024: {
						slidesPerView: 4,
						spaceBetween: 5
					},
					1280: {
						slidesPerView: 5,
						spaceBetween: 5
					},
					1780: {
						slidesPerView: 6,
						spaceBetween: 5
					}
				}}
				autoplay={{
					delay: 1000,
					disableOnInteraction: false
				}}
				className='h-[300px] w-[100%]'
			>
				{data.length > 0 && data.map((model: any) => 
					<SwiperSlide key={model.id} className='relative'>
						<Image 
							src={`${process.env.serverUrl}/${model.description.id}/ava.jpg`}
							alt={`Эскортница ${model.firstName}`}
							width={300}
							height={300}
						/>
						<div className="flex bg-secondary py-2 px-4 absolute bottom-0 left-0 text-lg font-bold">
							<p>{model.firstName}, {model.description.age}</p>
						</div>
					</SwiperSlide>
				)}
			</Swiper>
		</section>
	);
};