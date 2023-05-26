import CastomLinks from "../../A1_Castom_Components/CastomLinks";
function NavTestDesktop() {
  const linkArray = [
    { id: "Linck1", url: "#", text: "Link 1" },
    { id: "Linck2", url: "#", text: "Link 2" },
    { id: "Linck3", url: "#", text: "Link 3" },
    // Добавьте нужное количество ссылок в массив
  ];

  const StyleList = {
    display: "flex",
    margin: "0 15px 0 0",
  };
  const StyleListItem = {
    listStyleType: "none",
    margin: "0 0 0 40px",
  };
  const StyleLink = {
    textTransform: "uppercase",
    textDecoration: "none",
    color: "white",
    fontWeight: "600",
  };

  return (
    <>
      <>
        {/* Другой контент вашего приложения */}
        <CastomLinks
          linkArray={linkArray}
          ListStyle={StyleList}
          ListItemStyle={StyleListItem}
          LinkStyle={StyleLink}
        />
      </>
    </>
  );
}

export default NavTestDesktop;
