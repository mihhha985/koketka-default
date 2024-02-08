import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa6";

function Index() {
	return ( 
		<div className="flex border-b-2 border-slate-600">
			<Link
				href="/" 
				className="flex items-center gap-x-5 mr-auto">
				<Image src="/logo.png" alt="logo" width={100} height={100} />
				<h1 className="text-5xl text-rose-500 font-bold">{process.env.name}</h1>
			</Link>
			<div className="flex items-center gap-x-2 font-semibold">
				<Link className="hover:underline" href="/">Главная</Link>
				<FaHeart size={10}/>
				<Link className="hover:underline" href="/catalog">Каталог</Link>
				<FaHeart size={10}/>
				<Link className="hover:underline" href="/anketa">Разместить анкету</Link>
			</div>
		</div>
	);
}

export default Index;