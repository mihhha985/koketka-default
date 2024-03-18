import Image from "next/image";
import Title from "@/component/Title";
import Advantages from "@/component/Advantages";
import Services from "@/component/Services";
import MainSlider from "@/component/MainSlider";
import QuestionItem from "@/component/QuestionItem";

export default function Home() {
  return (
		<div className="overflow-hidden">
		<main className="relative h-[400px] sm:h-[600px] lg:h-[800px] 
			before:absolute before:w-full before:-bottom-1 before:left-0 before:h-[100px] sm:before:h-[180px]
			before:bg-[url('/border.png')] before:bg-top before:z-10">
			<Image src="/header.png" alt="элитные эскортницы" className="object-cover" sizes="100%" fill/>
		</main>
		<Advantages />
		<Services />
		<MainSlider />
		<section className="section mt-24">
			<div className="container mx-auto flex flex-col items-center gap-y-10">
				<Title title="FAQ" subtitle="Часто задаваемые вопросы" />
				<div className="pl-0 sm:pl-[15%] lg:pl-[25%] flex flex-col gap-y-5">
          <QuestionItem 
            title="Если я оплатил, а девушка не отвечает?"
            text="В таком случаи вы пишите ей через наш сервис, 
            после чего у неё появится таймер на 6 часов в которые она должна Вам ответить. 
            Если этого не произошло тогда мы будем вынуждены вернуть вам деньги на карту, 
            а анкета девушки будет заблокирована на несколько дней."
          />
          <QuestionItem 
            title="Какие гарантии что девушка приедет?"
            text="Мы не можем гарантировать, что девушка приедет на встречу с вами, 
            наш сервис предоставляет только контакты девушек, и может гарантировать только то, 
            что девушка ответит вам в течении 6 часов, если этого не произошло, то мы вернём вам деньги на карту."
          /> 
          <QuestionItem 
            title="Если девушка будет не соответствовать фото?" 
            text="Вы сможете написать нам в течении 24 часов, после чего мы проверим анкету девушки, 
            и если она не соответствует фото, вернём вам деньги на карту." 
          />
          <QuestionItem 
            title="Почему я не могу написать девушке?" 
            text="Вы можете написать только тем моделям которые добавили Вас в избранное, 
            после того как вы получили контакт девушки. Вам будут доступны все способы связи с ней. И все функциинашего сайта."
          />
				</div>
			</div>
		</section>
		</div>
  );
}
