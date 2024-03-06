"use client"
import {useState, forwardRef, ForwardedRef} from "react";
import {setRegister} from "@/store/features/profileSlice";
import {useAppDispatch} from "@/store/hooks";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import DefaultButton from "@/component/UI/defaultButton";

type LoginType = {
	email: string;
	password: string;
};

const LoginForm = motion(forwardRef((props, ref:ForwardedRef<HTMLFormElement>) => {
	const dispatch = useAppDispatch();
	const [enter, setEnter] = useState(false);
 
	const {
		register,
		reset,
		handleSubmit,  
		formState: { errors }
	} = useForm<LoginType>();

  const onSubmit: SubmitHandler<LoginType> = () => {
		reset({
			email: "",
			password: ""
		});

		setEnter(true);
	}

	return (
			<form 
				ref={ref}
				onSubmit={handleSubmit(onSubmit)}
				onClick={(e) => e.stopPropagation()}
				className="modal-content">
					<div className="relative pb-5">
						<h3 className="text-4xl text-secondary font-semibold">Вход:</h3>
						<h4 className="text-2xl text-secondary font-semibold">Заполните форму</h4>
						{enter && <div className="error">Логин или пароль введены неверно</div>}
					</div>
					<div className="input-box">
						<label className="text-secondary text-lg">Email:</label>
						<input 
							className="input" 
							{...register("email", {required:true, pattern: /^([0-9A-Za-z\_\-\.]+)@(([A-Za-z\.]+))$/i})} 
						/>
						{errors.email && <span className="error">Не корректный Email адрес</span>}
					</div>
					<div className="input-box">
						<label className="text-secondary text-lg" htmlFor="password">Пароль:</label>
						<input className="input"
							type="password" 
							{...register("password", { required: true })} 
						/>
						{errors.password && <span className="error">Поле обязательно для заполнения</span>}
					</div>
					<div className="mt-10">
						<DefaultButton 
							text="Войти" 
							type="submit" 
							className="btn w-full"
						/>
						<p className="mt-1 text-secondary text-lg">Нет аккаунта?
						<span
							onClick={() => dispatch(setRegister())} 
							className="cursor-pointer ml-1 underline">
							Зарегистрируйтесь!
						</span>
						</p>
					</div>
				</form>
	);
}));

export default LoginForm;