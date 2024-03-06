"use client"
import {useState, forwardRef, ForwardedRef} from "react";
import {setLogin} from "@/store/features/profileSlice";
import {useAppDispatch} from "@/store/hooks";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import DefaultButton from "@/component/UI/defaultButton";

type RegisterType = {
	email: string;
	password: string;
	confirm: string;
};

const RegisterForm = motion(forwardRef((props, ref:ForwardedRef<HTMLFormElement>) => {
	const dispatch = useAppDispatch();
	const [showConfirm, setShowConfirm] = useState(false);
	const [error, setError] = useState(false);
	
	const {
		register,
		reset,
		getValues,
		handleSubmit,  
		formState: { errors }
	} = useForm<RegisterType>();

  const onSubmit: SubmitHandler<RegisterType> = (data) => {

		reset({
			email: "",
			password: "",
			confirm: ""
		});

		setShowConfirm(true);
	}

	const confirmPassword = (value: string) => {
		const password = getValues("password");
		return password === value;
	}

	return (
		<>
			{showConfirm
				?
					<div
						onClick={(e) => e.stopPropagation()} 
						className="modal-content gap-3 sm:gap-5 w-4/5 md:w-1/2 lg:w-1/3">
							<h3 className="text-4xl font-semibold text-secondary">Подтвердите Email:</h3>
							<h4 className="text-xl font-semibold text-secondary">
								{!error 
									? 'Введите число которое пришло на ваш Email'
									: 'Вы ввели неверный код подтверждения!!!'
								}
							</h4>
							<div className="flex gap-5">
								<input className="input" type="text" />
								<DefaultButton 
									className="btn"
									text="Подтвердить" 
									onClick={() => setError(true)} />
							</div>
					</div> 
				: 
				<form
					ref={ref}
					onSubmit={handleSubmit(onSubmit)}
					onClick={(e) => e.stopPropagation()}
					className="modal-content">
					<h3 className="text-4xl font-semibold text-secondary">Регистрация:</h3>
					<h4 className="text-2xl font-semibold text-secondary">Заполните форму</h4>
					<div className="input-box">
						<label className="text-secondary text-lg" htmlFor="email">Email:</label>
						<input 
							type="text" 
							id="email"
							className="input" 
							{...register("email", {required:true, pattern: /^([0-9A-Za-z\_\-\.]+)@(([A-Za-z\.]+))$/i})} 
						/>
						{errors.email?.type === 'required' && <span className="form-error">Поле обязательно для заполнения</span>}
						{errors.email?.type === 'email' && <span className="form-error">Не корректный Email адрес</span>}
					</div>
					<div className="input-box">
						<label className="text-secondary text-lg" htmlFor="password">Пароль:</label>
						<input 
							type="password" 
							id="password"
							className="input" 
							{...register("password", {required:true, maxLength: 20, minLength:5})} 
						/>
						{errors.password?.type === 'required' && <span className="form-error">Поле обязательно для заполнения</span>}
						{errors.password?.type === 'minLength' && <span className="form-error">Минимальная длина паролля 5 символов</span>}
						{errors.password?.type === 'maxLength' && <span className="form-error">Максимальная длина паролля 20 символов</span>}
					</div>
					<div className="input-box">
						<label className="text-secondary text-lg" htmlFor="confirm">Подтвердить пароль:</label>
						<input 
							type="password" 
							id="confirm"
							className="input" 
							{...register("confirm", {required:true, validate: confirmPassword})} 
						/>
						{errors.confirm?.type === 'required' && <span className="form-error">Поле обязательно для заполнения</span>}
						{errors.confirm?.type === 'validate' && <span className="form-error">Пароли не совпадают</span>}
					</div>
					<div className="mt-10">
						<DefaultButton text="Регистрация" type="submit" className="btn w-full" />
						<p className="mt-1 text-secondary text-lg">Есть аккаунт?
							<span
								onClick={() => dispatch(setLogin())}
								className="cursor-pointer ml-1 underline">
								Войдите!
							</span>
						</p>
					</div>
				</form>
			}
		</>
	);
}));

export default RegisterForm;