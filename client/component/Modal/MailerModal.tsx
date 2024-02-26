"use client";
import {useRef, useState, RefObject} from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {hideMailer} from "@/store/features/mailerSlice";
import { show } from "@/store/features/alertsSlice";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import DefaultButton from "../UI/defaultButton";

const variant = {
	hidden: { opacity: 0, scale: 0.1 },
	visible: { opacity: 1, scale: 1 }
}

type Inputs = {
	name: string,
	email: string,
	text: string
};

function MailerModal() {
  const dispatch = useAppDispatch();
  const { visible } = useAppSelector(state => state.mailer);
	const [isHidden, setIsHidden]= useState<boolean>(false);
	const sendButtonRef = useRef() as RefObject<HTMLButtonElement>;

	const {
    register,
    handleSubmit,
		reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
		if(sendButtonRef.current) {
			sendButtonRef.current.disabled = true;
			sendButtonRef.current.style.cursor = 'not-allowed';
		}

		fetch(`${process.env.serverUrl}/mailer`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})
		.then(res => {
			dispatch(hideMailer());
			dispatch(show({
				text: "Ваше сообщение успешно отправлено!\nМы ответим Вам в ближайшее время", 
				language: "ru" 
			}));
		})
		.catch(err => {	
			dispatch(hideMailer());
			dispatch(show({
				text: "При отправки сообщения произошла ошибка!\nПопробуйте позже", 
				language: "ru" 
			}));
		})
		.finally(() => {
			reset({
				name: "",
				email: "",
				text: ""
			});
		});
	}

  return (
		<AnimatePresence mode="wait">
		{visible &&
      <motion.div 
				layout
        onClick={() => dispatch(hideMailer())}
        className="modal-container overflow-auto">
        <div
          onClick={() => dispatch(hideMailer())}
          className="cursor-pointer absolute top-0 right-0 text-3xl text-primary p-2 z-50">
          <IoCloseCircleOutline />
        </div>
        <motion.form
					initial="hidden"
					animate="visible"
					exit="hidden"
					transition={{duration: 0.4}}
					variants={variant}
					onSubmit={handleSubmit(onSubmit)}
          onClick={(e) => e.stopPropagation()} 
          className="modal-content gap-2 sm:gap-3 w-4/5 md:w-1/2 lg:w-1/3 h-5/6 sm:h-auto overflow-y-auto">
          <h4 className="text-xl sm:text-2xl font-semibold text-secondary">Остались вопросы?</h4>
          <h4 className="text-lg sm:text-xl text-secondary">Просто заполните форму</h4>
          <div className="input-box">
            <label className="text-secondary text-lg" htmlFor="name">Ваше имя:</label>
            <input className="input" type="text" id="name"{...register("name", {required:true, minLength:3, maxLength:20})}/>
						{errors.name?.type === 'required' && <span className="form-error">Поле обязательно для заполнения</span>}
						{errors.name?.type === 'minLength' && <span className="form-error">Минимальная длина 3 символа</span>}
						{errors.name?.type === 'maxLength' && <span className="form-error">Максимальная длина 20 символов</span>}
          </div>
          <div className="input-box">
            <label className="text-secondary text-lg" htmlFor="email">Ваш email:</label>
            <input className="input" type="text" id="email" {...register("email", {required:true, pattern: /^([0-9A-Za-z\_\-\.]+)@(([A-Za-z\.]+))$/i})} />
						{errors.email?.type === 'required' && <span className="form-error">Поле обязательно для заполнения</span>}
						{errors.email?.type === 'pattern' && <span className="form-error">Не корректный Email адрес</span>}
          </div>
          <div className="input-box">
            <label className="text-secondary text-lg" htmlFor="text">Напишите ваш вопрос:</label>
            <textarea className="input resize-none" id="text" rows={5} {...register("text", {required:true, maxLength: 500, minLength:50})}/>
						{errors.text?.type === 'required' && <span className="form-error">Поле обязательно для заполнения</span>}
						{errors.text?.type === 'minLength' && <span className="form-error">Минимальная длина 50 символа</span>}
						{errors.text?.type === 'maxLength' && <span className="form-error">Максимальная длина 500 символов</span>}
          </div>       
          <DefaultButton 
						text="Отправить"
						ref={sendButtonRef} 
						type="submit" 
						className="btn mt-10"
					 />		
        </motion.form>
      </motion.div>
		}
		</AnimatePresence>
  );
}

export default MailerModal;