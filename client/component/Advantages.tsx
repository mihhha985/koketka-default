import Image from 'next/image';
import Title from './Title';

function Advantages() {
	return ( 
		<section className="section relative bottom-5 z-20">
			<div className="container mx-auto">
				<div className="w-full lg:w-1/2">
					<div className="flex flex-col gap-y-2 w-min">
						<h1 className="text-5xl sm:text-6xl logo text-center">Butterfly</h1>
						<div className="flex items-center gap-x-5">
							<div className="h-[2px] w-[120px] bg-pink-300"></div>
							<Image src="/logo.png" alt="logo" width={50} height={50} />
							<div className="h-[2px] w-[120px] bg-pink-300"></div>
						</div>
					</div>
					<h3 className="text-2xl lg:text-3xl mt-2 italic">
						Знакомства с девушками модельной<br />внешности для сопровождения<br /> содержания и пикантных встреч...
					</h3>
					<h4 className="text-accent font-link text-base sm:text-xl flex items-center gap-2 sm:gap-5 tracking-widest">
						<span>Модели</span>
						<span>*</span>
						<span>Эскортницы</span>
						<span>*</span>
						<span>Содержанки</span>
					</h4>
				</div>
				<div className="flex flex-col items-center justify-center mt-20">
					<Title title="Преимущества" subtitle="Почему знакомится с девушками лучше на нашем сайте" />
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 text-center mt-24">
						<div className="flex flex-col items-center gap-y-2">
							<h5 className="text-2xl font-bold">Только проверенные фото</h5>
							<Image src="/logo.png" alt="logo" width={150} height={150} />
							<p className="text-xl">Все фото которые девушки добавляют на наш сайт проходят модерацию на точное соответствие</p>
						</div>
						<div className="flex flex-col items-center gap-y-2">
							<h5 className="text-2xl font-bold">Знакомства без посредников</h5>
							<Image src="/logo.png" alt="logo" width={150} height={150} />
							<p className="text-xl">На нашем сайте вы можете договориться с девушкой о встрече напрямую, получив её контакты 
							<span className="text-accent uppercase ml-2">без посредников</span></p>
						</div>
						<div className="flex flex-col items-center gap-y-2">
							<h5 className="text-2xl font-bold">Стоимомть наших услуг</h5>
							<Image src="/logo.png" alt="logo" width={150} height={150} />
							<p className="text-xl">На нашем сайте Вы всегда платите фиксированную комиссию, за получение контакта модели. 
							<span className="text-accent text-2xl ml-2">Цена: 2800 &#8381;</span></p>
						</div>
						<div className="flex flex-col items-center gap-y-2">
							<h5 className="text-2xl font-bold">Большое количство анкет</h5>
							<Image src="/logo.png" alt="logo" width={150} height={150} />
							<p className="text-xl">Мы прелагаем огромные усилия чтобы ежедневно приводить самых красивых девушек рунета на наш сайт</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Advantages;