import Image from 'next/image';
import Title from './Title';

function Services() {
	return ( 
		<section className="section bg-secondary py-24 mt-24 relative before:absolute before:w-full before:-top-20 before:left-0 before:h-[200px]
		before:bg-[url('/service-border.png')] before:z-30">
			<div className='absolute -right-48 lg:-right-40 -top-24 lg:-top-48 z-40 
				h-[400px] w-[400px] sm:h-[500px] sm:w-[500px] lg:h-[600px] lg:w-[600px] opacity-80 mix-blend-luminosity'>
				<Image src={'/fon1.png'} alt={''} sizes='100%' className='object-contain' fill/>
			</div>  
			<div className="container mx-auto flex flex-col items-center justify-center relative z-40">
				<Title title="Наши услуги" subtitle="Как пользоваться данным сервисом" />
				<div className="flex flex-col md:flex-row gap-10 mt-24">
					<div className="w-full flex items-center justify-center">
						<Image src="/main1.png" alt="девушки эскорт" width={800} height={600}/>
					</div>
					<div className="flex items-center w-full">
						<p className="text-xl lg:text-2xl"><span className='text-accent text-5xl'>Н</span>а самом деле всё очень просто, Вам нужно открыть Каталог, 
						и перейти на страницу с понравившейся моделью. После того как Вы убедитесь что действительно готовы к встречи с ней, 
						тогда нажимаете на кнопку <b>получить контакты</b>. В вашем личном кабинете появятся все её данные и будет возможность отправлять сообщения через наш сервис.</p>	
					</div>
				</div>
				<div className="flex flex-col-reverse md:flex-row gap-10 mt-20">
					<div className="w-full flex items-center justify-center">
						<p className="text-xl lg:text-2xl"><span className='text-accent text-5xl'>П</span>осле чего Вы начинаете знакомство, можете сразу обсудить
						все условия на которых девушка готова для дальнейшего общения с вами. Так же можете обсудить материальную составляющую вопроса, 
						и если удалось найти взаимопонимание, договариваетесь о встречи. Если в процессе диалога вы понимате, что девушка Вам не подходит просто блокируете её, 
						что сильно снизит её рейтинг.</p>
					</div>
					<div className="w-full flex items-center justify-center">
						<Image src="/main2.png" alt="эскорт услуги" width={800} height={600}/>
					</div>
				</div>
				<div className="flex flex-col md:flex-row gap-10 mt-20">
					<div className="w-full flex items-center justify-center">
						<Image src="/main.png" alt="быстрые знакомства для секса" width={800} height={600}/>
					</div>
					<div className="w-full flex items-center justify-center">
						<p className="text-xl lg:text-2xl">
							<span className='text-accent text-5xl'>В</span>стреча проходит в удобном для Вас месте, и в удобное для Вас время. 
							После встречи Вы можете оставить отзыв о девушке, что поможет другим пользователям сделать правильный выбор. 
							Так же Вы можете оценить её по разным критериям, что так же поможет другим пользователям. 
							Все это поможет нам сделать сервис более удобным и безопасным для всех пользователей.
						</p>	
					</div>
				</div>
			</div>
		</section>
	);
}

export default Services;