import {Link} from "react-router-dom";
import menu_icon from "../assets/icons/home.svg";
import search_icon from "../assets/icons/search.svg";
import favorite_icon from "../assets/icons/favorite.svg";
export default function Menu(){
  return (
    <nav className="h-[50px] fixed bottom-0 w-screen justify-around items-center">
        <ul className="flex text-white w-100 h-full justify-around align-middle">
            <li className="flex items-center h-100"><Link to="/"><img className="w-5 max-h-5" src={menu_icon} alt="Go to homepage"/></Link></li>
            <li className="flex items-center h-100"><Link to="/search"><img className="w-5 max-h-5" src={search_icon} alt="Go to search page"/></Link></li>
            <li className="flex items-center h-100"><Link to="/favorites"><img className="w-5 max-h-5" src={favorite_icon} alt="Go to favorite page"/></Link></li>
        </ul>
    </nav>
  );
}