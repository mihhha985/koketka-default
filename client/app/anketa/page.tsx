"use client"
import { useState } from "react";

function Page() {
	const [visible, setVisible] = useState(false);

	const send = (e: React.FormEvent) => {
		e.preventDefault();
		setVisible(true);
	}

	return ( 
		<>
		<div className="flex flex-col gap-y-10">
			<div className="flex flex-col">
				<h3 className="text-4xl font-semibold">Разместить анкету</h3>
				<h4 className="text-2xl italic">Заполните форму для размещения анкеты</h4>
			</div>
			<form
				onSubmit={send} 
				className="grid grid-cols-2 gap-5">

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