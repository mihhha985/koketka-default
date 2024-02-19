"use server";
import CatalogItem from "@/component/CatalogItem";
import { Contact } from "@/types/models";
export const fetchAnimate = async (page: number):Promise<JSX.Element> => {

  const res = await fetch(`${process.env.serverUrl}/models?offset=${page}`);
  const data = await res.json();
  return data.map((model: Contact, index:number) => 
		<CatalogItem
			key={model.id}
			uuid={model.uuid}
			id={model.id}
			name={model.firstName}
			age={model.description?.age}
			rating={model.rating}
		/>
	);
};
