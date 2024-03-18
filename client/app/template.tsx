import Image from "next/image";
import Link from "next/link";
import Header from "@/component/Header";
import { FaVk, FaTelegram  } from "react-icons/fa6";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
		<>
			<Header />
			{children}
			<footer className="relative overflow-hidden h-[200px] sm:h-[300px]">
				<div className="container mx-auto h-full flex flex-col items-end justify-end text-center pb-5 pr-5 sm:pr-0">
					<div className="flex gap-2">
						<Link href="https://vk.com/butterfly_escort">
							<FaVk className="text-3xl text-accent hover:scale-110 transition-transform duration-100" />
						</Link>
						<Link href="https://t.me/butterfly_trye">
							<FaTelegram className="text-3xl text-accent hover:scale-110 transition-transform duration-100" />
						</Link>
					</div>
					<Link href={'/blog'}>Наш блог</Link>
					<p>© 2021-2024 Butterfly. Все права защещины.</p>
					</div>
				<div className='w-[300px] h-[300px] md:w-[400px] md:h-[400px] absolute -left-28 -bottom-28 z-10'>
					<Image 
						className="opacity-80 mix-blend-luminosity"
						src={'/fon1.png'} 
						alt={''} 
						sizes="100%"
						fill
					/>
				</div>
			</footer>
		</>
	);
}