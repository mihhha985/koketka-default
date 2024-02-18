import Image from "next/image";
import Header from "@/component/Header";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
		<div className="relative overflow-hidden">
			<Header />
			{children}
			<footer className="text-center pb-5 mt-20">
				<p>© 2021-2024 Butterfly. Все права защещины.</p>
			</footer>
			<Image 
				src={'/fon1.png'} 
				alt={''} 
				width={600} 
				height={600} 
				className='absolute -left-48 -bottom-48 sm:-left-40 sm:-bottom-40 z-10 opacity-80 mix-blend-luminosity'
			/>
		</div>
	);
}