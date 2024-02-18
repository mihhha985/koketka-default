"use client";
import { useEffect, useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import { useInView } from "react-intersection-observer";
import CatalogItem from "@/component/CatalogItem";
import { Contact } from "@/types/models";
import { fetchAnimate } from "@/actions/getAll";
let page = 1;

function LoadMore() {
  const { ref, inView } = useInView();
  const [data, setData] = useState<any>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const clientHeight = document.documentElement.clientHeight;

	window.onscroll = () => {	
		console.log('scroll: ' + window.scrollY);
	}

	console.log('clientHeight: ' + clientHeight);
  useEffect(() => {
			let offsetY = window.pageYOffset;
			setIsLoading(true);
			console.log('offsetY: ' + offsetY);
			fetch(`${process.env.serverUrl}/models`,  { 
				cache: 'no-cache',
			})
			.then(res => res.json())
			.then(res => {
				console.log(res);
				setData([res]);
				setIsLoading(false);
				page++;
			});
  }, []);

  return (
    <>
    	<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full">
				{data.length >  0 &&  data.map((model: Contact, index:number) => 
					<div key={index}>{model.id}</div>	
				)}
			</div>
      <div className="flex justify-center items-center w-full mt-20" ref={ref}>
				<ImSpinner9 className="animate-spin text-5xl text-accent" />
      </div>
    </>
  );
}

export default LoadMore;