"use client"
import { useState } from "react";
import {motion} from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

const variantText = { 
	hidden: {
		height:0,
		opacity: 0
	},
	visible: {
		height: 90,
		opacity: 1
	}
}

const variantArrow = {
	hidden: {rotate: 0},
	visible: {rotate: 180}
}

export type QuestionItemProps = {
  title: string;
  text: string;
}

function QuestionItem({title, text}: QuestionItemProps) {
  const [isHidden, setIsHidden] = useState(true);

  return ( 
    <motion.div 
			className="flex flex-col justify-start overflow-hidden">
      <div className="flex justify-between items-start px-2">
        <h4 className="text-2xl sm:text-3xl font-semibold">{title}</h4>
        <motion.div
					initial="hidden"
					animate={isHidden ? "hidden" : "visible"}
					transition={{ease: "easeIn", duration:0.3}}
					variants={variantArrow}
          onClick={() => setIsHidden(!isHidden)} 
          className="cursor-pointer">
         	<IoIosArrowDown className="text-secondary-200 text-2xl sm:text-3xl lg:text-4xl" />    
        </motion.div>
      </div>
      <motion.p 
				initial="hidden"
				animate={isHidden ? "hidden" : "visible"}
				transition={{ease: "easeIn", duration:0.3}}
				variants={variantText}
				className={'text-xl pl-5'}
			>
				{text}
			</motion.p>
    </motion.div>
  );
}

export default QuestionItem;