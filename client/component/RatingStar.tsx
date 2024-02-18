import { FaStarHalfStroke, FaStar, FaRegStar  } from "react-icons/fa6";

function renderStar(rating: number)  {
	let stars = [];

	for(let i = 0; i < 5; i++) {
		if(rating >= i + 1) {
			stars.push(<FaStar key={i} className="text-accent" />); 
		} else if(rating >= i + 0.5) {
			stars.push(<FaStarHalfStroke key={i} className="text-accent" />);			
		} else {
			stars.push(<FaRegStar key={i} className="text-accent" />);
		}

	}

	return stars;
}

function RaitinStars({rating}: {rating: number}) {
	return ( 
		<div className='flex gap-1 sm:gap-2'>
      {renderStar(rating)}
    </div>
	);
}

export default RaitinStars;