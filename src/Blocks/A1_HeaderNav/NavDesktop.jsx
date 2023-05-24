import CastomLinks from "../../A1_Castom_Components/CastomLinks";
function NavDesktop() {
  const NavDesktopArray = [
    {
      url: "#",
      text: "home",
    },
    {
      url: "#",
      text: "portfolio",
    },
    {
      url: "#",
      text: "blog",
    },
    {
      url: "#",
      text: "pages",
    },
  ];
  const StyleList = {
    display: "flex",
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
      linkArray={NavDesktopArray}
      ListStyle={StyleList}
      ListItemStyle={StyleListItem}
      LinkStyle={StyleLink}
    />
  );
}

export default NavDesktop;
