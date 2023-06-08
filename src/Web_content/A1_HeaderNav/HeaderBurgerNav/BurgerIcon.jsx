import "./HeaderBurgerNav.css";
function BurgerIcon(props) {
  const { onClick } = props;
  return (
    <>
      <div onClick={onClick} className="burger_icon_conteiner">
        <div className="burger_icon"></div>
      </div>
    </>
  );
}
export default BurgerIcon;
