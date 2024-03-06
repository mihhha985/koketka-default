"use client"
import {useState, useEffect} from "react";
import { FaRegHeart, FaHeart, FaWhatsapp, FaTelegram } from "react-icons/fa6";
import { LiaTelegram } from "react-icons/lia";
import {TypeHair, TypeFigures } from "@/config/params";
import translate from "@/config/translate-view";
import { useAppDispatch } from "@/store/hooks";
import {show} from "@/store/features/alertsSlice";
import { showPayment } from "@/store/features/paymentSlice";
import { BiMessageRounded } from "react-icons/bi";
import DefaultButton from "./UI/defaultButton";
import { Contact } from "@/types/models";

function ViewDescript({user}: {user: Contact}) {
	const dispatch = useAppDispatch();
	const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = localStorage.getItem('favorites');
    const ids = favorites ? favorites.split(',') : [];
    const index = ids.indexOf(user.id.toString());
    if(index === -1){
      setIsFavorite(false);
    }else{
      setIsFavorite(true);
    }
  }, [user.id]);

  const showHint = (e:React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const hint = el.querySelector('p') as HTMLParagraphElement;
    hint.style.display = 'block';
  }

  const hideHint = (e:React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const hint = el.querySelector('p') as HTMLParagraphElement;
    hint.style.display = 'none';
  }

  const getHairColor = (id: number):string => {
    let item = TypeHair.find((item) => item.id === id) as {id: number, value: string} | undefined;
    if (item === undefined) {
      return 'Не указано';
    }else{
      return item.value;
    }
  }

  const getTypeFigure = (id: number):string => {
    let item = TypeFigures.find((item) => item.id === id) as {id: number, value: string} | undefined;
    if (item === undefined) {
      return 'Не указано';
    }else{
      return item.value;
    }
  }

	const toggleFavorites = (e:React.MouseEvent<HTMLDivElement>, id:number) => {
    const favorites = localStorage.getItem('favorites');
    const ids = favorites ? favorites.split(',') : [];
    const index = ids.indexOf(user.id.toString());

    if(!isFavorite){
      ids.push(id.toString());
      setIsFavorite(true);
      dispatch(show({
        text: 'Пользователь добавлен в понравившиеся!', 
        language: 'ru'
      }))
    }else{
      ids.splice(index, 1);
      setIsFavorite(false);
      dispatch(show({
        text: 'Пользователь удалён из понравившихся!', 
        language: 'ru'
      }));
    }

    localStorage.setItem('favorites', ids.join(','));
		const el = e.currentTarget;
    const hint = el.querySelector('p') as HTMLParagraphElement;
    hint.style.display = 'none';
  }
  
  return ( 
    <div className="flex flex-col">
      <div className="text-primary border-b border-primary pb-2 relative">
        <div className="text-2xl sm:text-4xl font-semibold">Имя: {user.firstName}</div>
        <div className="text-xl sm:text-2xl italic">Возраст: {user.description.age} лет</div>
        <div className="absolute top-5 right-4 cursor-pointer flex gap-5">
          <div 
            onMouseMove={(e) => {showHint(e)}}
            onMouseOut={(e) => {hideHint(e)}}
            onClick={() => {dispatch(show({
              text: translate.message.ru, 
              language: 'ru'
            }))}}
            className="relative">
            <BiMessageRounded size={32}/>
            <p style={{whiteSpace: 'nowrap', top: "-40px"}}
            className="hidden absolute right-0 p-2 rounded-md bg-dark text-default text-sm">
            Написать сообщение</p>
          </div>
        	<div 
            onMouseMove={(e) => {showHint(e)}}
            onMouseOut={(e) => {hideHint(e)}}
            onClick={e => {toggleFavorites(e, user.id)}}
            className="relative">
            {!isFavorite
              ? <FaRegHeart size={32}/>
              : <FaHeart size={32}/>
            }
            <p style={{whiteSpace: 'nowrap', top: "-40px"}}
            className="hidden absolute right-0 p-2 rounded-md bg-dark text-default text-sm">
            {!isFavorite
              ? 'Добавить в понравившиеся'
              : 'Удалить из понравившихся'
            } 
            </p>
          </div>
					{/*
					<a href="https://wa.me/79897634493" target="__blank">
						<FaWhatsapp size={32} />
					</a>
					<a href="https://t.me/butterfly_escort_admin" target="__blank">
						<LiaTelegram size={32} />
					</a>
					*/}
        </div>
      </div>

      <div className="border-b border-primary pb-2">
        <h4 className={'text-xl sm:text-2xl font-semibold'}>Параметры:</h4>
        <div className="grid grid-cols-2 gap-2 text-xl">
          <div className={''}>Рост: {user.description.height} см</div>
          <div className={''}>Вес: {user.description.weight} кг</div>
          <div className={''}>Грудь: {user.description.cupSize} размер</div>
          <div className={''}>Цвет волос: {getHairColor(user.description.hairColor)}</div>
          <div className={''}>Тип фигуры: {getTypeFigure(user.description.typeFigure)}</div>
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
			<div className="flex flex-col xl:flex-row gap-2 w-full mt-10 whitespace-nowrap">
        <DefaultButton
					className="btn"
          onClick={() => {dispatch(showPayment())}} 
          text="Получить контакты"
          type="button" 
        />
        <DefaultButton
					className="btn"
        	onClick={() => {dispatch(show({
            text: translate.transfer.ru,
            language: 'ru'
        		}))}} 
          text="Оплатить трансфер"
          type="button"
         />
        <DefaultButton
					className="btn"
          onClick={() => {dispatch(show({
            text: translate.order.ru,
            language: 'ru'
          }))}}
        	text="Заказать цветы"
          type="button" 
        />
      </div>
    </div>
  );
}

export default ViewDescript;