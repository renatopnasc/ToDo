import style from "./header.module.css";
import logo from "../../assets/Logo.svg";

export function Header() {
  return (
    <header className={style.header}>
      <img src={logo} alt="Logo com um foguetinho do aplicativo toDo list" />
    </header>
  );
}
