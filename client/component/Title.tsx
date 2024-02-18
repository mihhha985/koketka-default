import Image from "next/image";

function Title({title, subtitle}: {title: string, subtitle: string}) {
	return ( 
		<div className="flex flex-col items-center justify-center w-fit text-center">
			<h3 className="title">{title}</h3>
			<div className="flex items-center gap-x-5">
				<div className="h-[2px] w-[120px] bg-pink-300"></div>
				<Image src="/logo.png" alt="logo" width={30} height={30} />
				<div className="h-[2px] w-[120px] bg-pink-300"></div>
			</div>
			<h4 className="headline">{subtitle}</h4>
		</div>
	);
}

export default Title;