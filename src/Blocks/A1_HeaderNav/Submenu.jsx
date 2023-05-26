import CastomList from "../../A1_Castom_Components/CastomList";
function Submenu() {
  const NavDesktopArray = [
    {
      id: "0",
      url: "#",
      text: "submenu",
    },
    {
      id: "1",
      url: "#",
      text: "submenu",
    },
    {
      id: "2",
      url: "#",
      text: "submenu",
    },
    {
      id: "3",
      url: "#",
      text: "submenu",
    },
  ];
  const StyleList = {
    display: "block",
    margin: "0 0 0 0",
  };
  const StyleListItem = {
    listStyleType: "none",
    margin: "0 0 0 0",
  };
  const StyleLink = {
    textTransform: "uppercase",
    textDecoration: "none",
    color: "white",
    fontWeight: "normal",
    fontSize: "80%",
  };
  return (
    <CastomList
      linkArray={NavDesktopArray}
      ListStyle={StyleList}
      ListItemStyle={StyleListItem}
      LinkStyle={StyleLink}
    />
  );
}

export default Submenu;
