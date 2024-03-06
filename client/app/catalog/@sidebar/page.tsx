"use client";
import { useRouter } from "next/navigation";
import { MdEmail } from "react-icons/md";
import { RiStarSmileFill, RiShoppingCart2Fill } from "react-icons/ri";
import {FaComments, FaUserLarge, FaHeart} from "react-icons/fa6";
import {useAppDispatch} from "@/store/hooks";
import { show } from "@/store/features/alertsSlice";
import { showProfile } from "@/store/features/profileSlice";
import {showMailer} from "@/store/features/mailerSlice";
import SideBarText from "@/config/translate-catalog";
import "@/styles/Sidebar.scss";

function Sidebar() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const getFavorites = () => {
    const favorites = localStorage.getItem('favorites');
    if(favorites){
      router.push('/favorites');
    }else{
      dispatch(show({
        text:SideBarText.likes.ru,
        language:'ru'
      }));
    }
  }

  return ( 
    <div className="sidebar">
      <div 
        onClick={() => dispatch(show({
          text:SideBarText.favorites.ru,
          language:'ru'
        }))}
        className="item">
        <RiStarSmileFill />
        <p>Избранные</p>
      </div>
      <div
        onClick={getFavorites}
        className="item">
        <FaHeart />
        <p>Понравившиеся</p>
      </div>
      <div 
        onClick={() => dispatch(show({
          text:SideBarText.order.ru,
          language:'ru'
        }))}
        className="item">
        <RiShoppingCart2Fill />
        <p>Мои заказы</p>
      </div>
      <div 
        onClick={() => dispatch(show({
          text:SideBarText.message.ru,
          language:'ru'
        }))}
        className="item">
        <FaComments />
        <p>Мои сообщения</p>
      </div>
      <div 
        onClick={() => dispatch(showProfile())}
        className="item">
        <FaUserLarge />
        <p>Профиль</p>
      </div>
      <div 
        onClick={() => dispatch(showMailer())}
        className="item">
        <MdEmail />
        <p>Остались вопросы?<br /><span>Напишите нам...</span></p>
      </div>
    </div>
  );
}

export default Sidebar;