import {Link, useLocation} from "react-router-dom";
import menu_icon from "../assets/icons/home.svg";
import menu_icon_white from "../assets/icons/home_white.svg";
import search_icon from "../assets/icons/search.svg";
import search_icon_white from "../assets/icons/search_white.svg";
import favorite_icon from "../assets/icons/favorite.svg";
import favorite_icon_white from "../assets/icons/favorite_white.svg";
import map_icon from "../assets/icons/map.svg";
import map_icon_white from "../assets/icons/map_white.svg";
export default function Menu({active}){
    const activePath = useLocation().pathname;
  return (
    <nav className="h-[50px] fixed bottom-0 w-screen justify-around items-center bg-white z-20 max-w-[640px] left-[50%] transform translate-x-[-50%]">
        <ul className="flex text-white w-100 h-full justify-around align-middle">
            <li className={`flex items-center h-100 w-1/4 justify-center rounded-t-lg ${activePath == '/' ? 'bg-blue-400': ''}`}>
                <Link className="w-full h-full flex justify-center items-center" to="/"><img className="w-5 max-h-5" src={activePath == '/' ? menu_icon_white : menu_icon} alt="Aller à la page d'accueil"/></Link>
            </li>
            <li className={`flex items-center h-100 w-1/4 justify-center rounded-t-lg ${activePath == '/search' ? 'bg-blue-400': ''}`}>
                <Link className="w-full h-full flex justify-center items-center" to="/search"><img className="w-5 max-h-5" src={activePath == '/search' ? search_icon_white : search_icon} alt="Aller sur la page de recherche"/></Link>
            </li>
            <li className={`flex items-center h-100 w-1/4 justify-center rounded-t-lg ${(activePath == '/favorites' || activePath.includes('/city/')) ? 'bg-blue-400': ''}`}>
                <Link className="w-full h-full flex justify-center items-center" to="/favorites"><img className="w-5 max-h-5" src={(activePath == '/favorites' || activePath.includes('/city/')) ? favorite_icon_white : favorite_icon} alt="Aller aux favoris"/></Link>
            </li>
            <li className={`flex items-center h-100 w-1/4 justify-center rounded-t-lg ${activePath == '/map' ? 'bg-blue-400': ''}`}>
                <Link className="w-full h-full flex justify-center items-center" to="/map"><img className="w-5 max-h-5" src={activePath == '/map' ? map_icon_white : map_icon} alt="Aller à la carte"/></Link>
            </li>
        </ul>
    </nav>
  );
}