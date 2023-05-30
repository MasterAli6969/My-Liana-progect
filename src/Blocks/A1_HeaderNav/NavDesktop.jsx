import CastomLinks from "../../A1_Castom_Components/CastomLinks";
function NavTestDesktop() {
  const linkArray = [
    { id: "home", url: "#", text: "home" },
    { id: "portfolio", url: "#", text: "portfolio" },
    { id: "blog", url: "#", text: "blog" },
    { id: "pages", url: "#", text: "pages" },
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
    <CastomLinks
      linkArray={linkArray}
      ListStyle={StyleList}
      ListItemStyle={StyleListItem}
      LinkStyle={StyleLink}
    />
  );
}

export default NavTestDesktop;
