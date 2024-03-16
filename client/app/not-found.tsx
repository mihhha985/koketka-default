import Link from 'next/link'
import Image from 'next/image'
import img from "@/public/header.png";

export default function NotFound() {
  return (
    <section className="section pt-20 pb-40 bg-secondary flex flex-col items-center justify-center h-screen
			before:absolute before:w-full before:-bottom-1 before:left-0 before:bg-[url('/border.png')] 
			before:h-[100px] sm:before:h-[160px] before:bg-top before:z-10">
			<Image src={img} alt="girl not found"  sizes='100%' fill className=' object-cover'/>
			<div className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col gap-5 bg-default 
				rounded-3xl p-10 shadow-lg text-center'>
				<h2 className='text-4xl'>Ошибка 404 !!!</h2>
				<p className='text-2xl'>Страница не существует или была удалена!</p>
				<Link className="btn" href="/">Вернитесь на главную</Link>
			</div>
    </section>
  )
}