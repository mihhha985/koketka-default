"use client"
import {useState} from "react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { hidePayment } from "@/store/features/paymentSlice";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import "@/styles/Modal.scss";

const variant = {
	hidden: { opacity: 0, scale: 0.1 },
	visible: { opacity: 1, scale: 1 }
}

function PaymentModal({name, age}: {name: string, age: number}) {
  const dispatch = useAppDispatch();
  const {visible} = useAppSelector(state => state.payment);

  return ( 
		<AnimatePresence>
			{visible &&
      <div 
        onClick={() => dispatch(hidePayment())}
        className="modal-container">
        <div className="cursor-pointer absolute top-0 right-0 text-3xl text- p-2">
          <IoCloseCircleOutline onClick={() => dispatch(hidePayment())} />
        </div>
        <motion.div 
					initial="hidden"
					animate="visible"
					exit="hidden"
					transition={{duration: 0.4}}
					variants={variant}
          onClick={(e) => {e.stopPropagation()}}
          className="modal-content gap-2 w-4/5 md:w-1/2 lg:w-1/3 text-secondary">
          <h3 className="text-4xl font-semibold">Внимание!!!</h3>
          <h4 className="text-xl">Сервис предоставляет платный доступ к контактам моделей, разместивших анкеты, на нашем сайте!</h4>
          <h4 className="text-xl">Стоимость одного контакта 
            <span className="font-semibold ml-2">2800 рублей</span>
          </h4>
          <h4 className="text-xl">Получить контакты 
            <span className="font-semibold ml-2">{name} - {age} года</span>
          </h4>
          <div className="flex h-full w-full">
						<form method="POST" target="_blank" action="https://yoomoney.ru/quickpay/confirm">
							<input type="hidden" name="billNumber" value="112J7BSBLSE.240224" />
							<input type="hidden" name="targets" value="Чаевые за уборку" />
							<input type="hidden" name="backgroundId" value="105"/>
							<input type="hidden" name="buttonText" value="transfer"/>
							<input type="hidden" name="buttonSize" value="L"/>
							<input type="hidden" name="receiver" value="4100118562053775"/>
							<input type="hidden" name="sum" value="2800"/>
							<input type="hidden" name="referer" value="http://clining-lime.site"/>
							<input type="hidden" name="quickpay-form" value="button"/>
							<input type="hidden" name="is-inner-form" value="true"/>
							<div className="mui-1lkn5mm">
								<button className="btn text-nowrap" tabIndex={0} type="submit">
									Перевести <b>2800 &#8381;</b>
								</button>
							</div>
						</form>
					</div>
        </motion.div>
      </div>
			}
		</AnimatePresence>
  );
}

export default PaymentModal;