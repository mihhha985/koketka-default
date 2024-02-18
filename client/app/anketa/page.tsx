"use client"
import { useState } from "react";
import Title from "@/component/Title";
function Page() {
	const [visible, setVisible] = useState(false);

	const send = (e: React.FormEvent) => {
		e.preventDefault();
		setVisible(true);
	}

	return ( 
		<>
		<section className="section min-h-screen py-40">
			<div className="container mx-auto flex flex-col items-center gap-y-10">
			<Title title="Добавить анкету" subtitle='Заполните форму и мы свяжемся с вами'/>
			<form
				onSubmit={send} 
				className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">
				<div className="flex flex-col gap-y-5">
					<div className="input-box">
						<label htmlFor="firstName">Имя:</label>
						<input type="text" id="firstName" className="input w-[90%]" required/>
					</div>

					<div className="input-box">
						<label htmlFor="firstName">Телефон:</label>
						<input type="text" id="firstName"  className="input w-[90%]" required/>
					</div>

					<div className="input-box">
						<label htmlFor="firstName">Возраст:</label>
						<input type="text" id="firstName"  className="input w-[90%]" required/>
					</div>
				</div>

				<div className="flex flex-col gap-y-5">
					<div className="input-box">
						<label htmlFor="firstName">О себе:</label>
						<textarea id="firstName"  className="input h-[176px] w-[90%] resize-none" required></textarea>
					</div>
					<div className="input-box">
						<label htmlFor="firstName">Фото:</label>
						<input type="file" id="firstName" className="w-[90%]" required/>
					</div>
				</div>
				<div className="input-box mt-10">
					<button type="submit" className="btn w-[90%]">Отправить</button>
				</div>
			</form>
			</div>
		</section>
		{visible && 
			<div className="fixed top-0 left-0 w-screen h-screen bg-black/80 flex items-center justify-center">
				<div className="flex flex-col p-5 bg-slate-100 rounded">
					<h3 className="text-4xl font-semibold text-center">Анкета отправлена</h3>
					<p className="text-center">Ваша анкета успешно отправлена. Мы свяжемся с вами в ближайшее время.</p>
					<button onClick={() => setVisible(false)} className="btn mt-10">Закрыть</button>
				</div>
			</div>
		}
		</>
	);
}

export default Page;