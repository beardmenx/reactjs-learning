import s from "./Header.module.css";
const Header = () => {
  return (
    <header className={s.header}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
        alt="logo"
      ></img>
    </header>
  );
};

export default Header;
