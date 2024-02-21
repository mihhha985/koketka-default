import { FaRegHeart, FaWhatsapp, FaTelegram } from "react-icons/fa6";
import { BiMessageRounded } from "react-icons/bi";
import { Contact } from "@/types/models";

function ViewDescript({user}: {user: Contact}) {
  
  return ( 
    <div className="flex flex-col pl-10 pb-10">

      <div className="text-primary border-b border-primary pb-2 relative">
          <div className="text-2xl sm:text-4xl font-semibold">Имя: {user.firstName}</div>
          <div className="text-xl sm:text-2xl italic">Возраст: {user.description.age} лет</div>
          <div className="absolute top-5 right-4 cursor-pointer flex gap-5">
            <div className="relative">
              <BiMessageRounded size={32} className="opacity-75 hover:opacity-100 transition-opacity"/>
              <p style={{whiteSpace: 'nowrap', top: "-40px"}}
              className="hidden absolute right-0 p-2 rounded bg-primary text-secondary-300 text-sm">
              Написать сообщение</p>
            </div>
            <div> 
              <FaRegHeart size={32} className="opacity-75 hover:opacity-100 transition-opacity"/>
            </div>
          </div>
      </div>

      <div className="border-b border-primary pb-2">
          <h4 className={'text-xl sm:text-2xl font-semibold'}>Параметры:</h4>
          <div className="grid grid-cols-2 gap-2 text-xl">
            <div className={''}>Рост: {user.description.height} см</div>
            <div className={''}>Вес: {user.description.weight} кг</div>
            <div className={''}>Грудь: {user.description.cupSize} размер</div>
            <div className={''}>Цвет волос: </div>
            <div className={''}>Тип фигуры: </div>
            <div className={''}>
              <span>Размеры: </span>    
              <span>---</span>  
            </div>
          </div>
      </div>

      <div className="mt-2 sm:mt-5">
          <h4 className={'text-xl sm:text-2xl font-semibold'}>О себе:</h4>
          <div className="text-lg sm:text-xl bg-primary rounded-md p-2 w-full xl:w-3/4 mb-5">
            <p className="text-secondary-200">{user.about}</p>
          </div>
      </div>

      <div className="flex flex-col gap-2 w-full mt-auto">
					<h4 className="text-4xl">ПОЛУЧИТЬ КОНТАКТЫ</h4>
					<p className="text-2xl italic">Для того что-бы получить контакты девушеки напишите нашему менеджеру</p>
					<div className="flex gap-x-5">
						<a href="https://wa.me/79054462485" target="__blank">
							<FaWhatsapp size={48} />
						</a>
						<a href="https://t.me/pandoramodels" target="__blank">
							<FaTelegram size={48} />
						</a>
					</div>
			</div>
    </div>
  );
}

export default ViewDescript;