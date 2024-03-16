import Image from "next/image";
import Link from "next/link";
import Header from "@/component/Header";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
		<>
			<Header />
			{children}
			<footer className="relative overflow-hidden h-[200px] sm:h-[300px] flex flex-col items-center justify-end text-center pb-5">
				<Link href={'/blog'}>Наш блог</Link>
				<p>© 2021-2024 Butterfly. Все права защещины.</p>
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