"use client"
import { forwardRef, ForwardedRef} from "react";
import {motion} from "framer-motion"

export interface DefaultButtonProps {
  text:string;
  type?:"button" | "submit" | "reset";
  className?:string;
  disabled?:boolean;
  onClick?:() => void;
}

const DefaultButton = forwardRef((
  {text, type, className, disabled = false, onClick}:DefaultButtonProps, 
  ref:ForwardedRef<HTMLButtonElement>
)  => {
  return ( 
    <motion.button
			className={'font-link text-base bg-accent text-white p-2 rounded-md opacity-80 hover:opacity-100 transition-opacity duration-200'}
      onClick={onClick}
      disabled={disabled}
      whileTap={{scale:0.9}}
      transition={{duration:0.1}}
      type={type}
      ref={ref}
    >
      {text}
    </motion.button>
  );
})

export default DefaultButton;