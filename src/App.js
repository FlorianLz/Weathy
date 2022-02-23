import './assets/style/App.css';
import {Outlet} from "react-router-dom";
import Menu from "./components/Menu";

export default function App() {
  return (
      <>
          <Outlet />
          <Menu />
      </>
  )
}
