import {Link, useLocation} from "react-router-dom";
import menu_icon from "../assets/icons/home.svg";
import menu_icon_white from "../assets/icons/home_white.svg";
import search_icon from "../assets/icons/search.svg";
import search_icon_white from "../assets/icons/search_white.svg";
import favorite_icon from "../assets/icons/favorite.svg";
import favorite_icon_white from "../assets/icons/favorite_white.svg";
export default function Menu({active}){
    const activePath = useLocation().pathname;
  return (
    <nav className="h-[50px] fixed bottom-0 w-screen justify-around items-center bg-white">
        <ul className="flex text-white w-100 h-full justify-around align-middle">
            <li className={`flex items-center h-100 w-1/3 justify-center ${activePath == '/' ? 'bg-blue-400': ''}`}>
                <Link className="w-full h-full flex justify-center items-center" to="/"><img className="w-5 max-h-5" src={activePath == '/' ? menu_icon_white : menu_icon} alt="Go to homepage"/></Link>
            </li>
            <li className={`flex items-center h-100 w-1/3 justify-center ${activePath == '/search' ? 'bg-blue-400': ''}`}>
                <Link className="w-full h-full flex justify-center items-center" to="/search"><img className="w-5 max-h-5" src={activePath == '/search' ? search_icon_white : search_icon} alt="Go to search page"/></Link>
            </li>
            <li className={`flex items-center h-100 w-1/3 justify-center ${activePath == '/favorites' ? 'bg-blue-400': ''}`}>
                <Link className="w-full h-full flex justify-center items-center" to="/favorites"><img className="w-5 max-h-5" src={activePath == '/favorites' ? favorite_icon_white : favorite_icon} alt="Go to favorite page"/></Link>
            </li>
        </ul>
    </nav>
  );
}