"use client"
import Image from "next/image";
import {useState} from "react";
import { usePathname } from 'next/navigation';
import { TiThMenuOutline, TiTimesOutline } from "react-icons/ti";
import {motion, AnimatePresence} from "framer-motion";
import Link from "next/link";
const variants = {
	hidden: {y: -100, opacity: 0},
	visible: {y: 0, opacity: 1}
}

function Index() {
	
	const pathname = usePathname();
	const [hidden, setHidden] = useState<boolean>(false);

	return ( 
		<>
		<header className="relative h-[90px] z-50 before:absolute before:w-full before:-top-[20px] before:-left-0 before:h-[200px]
			before:bg-[url('/header-border.png')] before:bg-left-bottom before:-z-10">
			<div className="container flex items-center mx-auto">
				<Link
					href="/" 
					className="flex items-center gap-x-5 mr-auto">
					<Image src="/logo.png" alt="logo" width={100} height={100} />
					<div>
						<h1 className="text-3xl sm:text-5xl logo">{process.env.name}</h1>
						<h2 className="text-sm sm:text-xl font-logo tracking-wide text-accent/80">Premium escort service</h2>
					</div>
				</Link>
				<nav className="hidden lg:flex items-center gap-x-5 font-semibold text-accent text-xl font-link">
					<Link className={`${pathname === '/' ? 'underline' : ''} menu-link`} href="/">Главная</Link>
					<Link className={`${pathname === '/catalog' ? 'underline' : ''} menu-link`} href="/catalog">Каталог</Link>
					<Link className={`${pathname === '/anketa' ? 'underline' : ''} menu-link`} href="/anketa">Разместить анкету</Link>
				</nav>
				<motion.div
					onClick={() => setHidden(!hidden)}
					whileTap={{scale: 0.9}} 
					className="flex lg:hidden items-center justify-center cursor-pointer w-[60px] h-[60px]">
					{hidden ? <TiTimesOutline size={60} color="#6951b2"/> : <TiThMenuOutline size={40} color="#6951b2"/>}
				</motion.div>
			</div>
		</header>
		<AnimatePresence>
			{hidden &&
				<motion.div
					variants={variants}
					initial="hidden"
					animate="visible"
					exit="hidden"
					className="absolute top-20 pt-24 overflow-hidden z-40 bg-secondary/80 w-screen h-[300px]">
					<div className="container mx-auto">
						<nav className="pl-[2%] sm:pl-0 flex flex-col gap-y-5 h-max font-semibold text-accent text-xl font-link">
							<Link className={`${pathname === '/' ? 'underline' : ''}`} href="/">Главная</Link>
							<Link className={`${pathname === '/catalog' ? 'underline' : ''}`} href="/catalog">Каталог</Link>
							<Link className={`${pathname === '/anketa' ? 'underline' : ''}`} href="/anketa">Разместить анкету</Link>
						</nav>
					</div>
				</motion.div>
			}
		</AnimatePresence>
		</>
	);
}

export default Index;