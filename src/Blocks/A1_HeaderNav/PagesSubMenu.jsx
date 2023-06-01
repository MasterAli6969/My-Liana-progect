import CastomList from "../../A1_Castom_Components/CastomList";
function PagesSubMenu(props) {
  const StyleListGlobal = {
    width: "150px",
    padding: "0 0 0 0",
    margin: "0 0 0 0",
  };
  const StyleListItem = {
    listStyleType: "none",
    margin: "0 0 0 0",
  };
  const StyleLink = {
    textDecoration: "none",
    color: "red",
    fontWeight: "normal",
    fontSize: "80%",
  };

  const { display } = props;
  const StyleList = {
    ...StyleListGlobal,
    display: display,
  };
  const PagesSubMenuArray = [
    {
      id: "0",
      url: "#",
      text: "Pages Default",
    },
    {
      id: "1",
      url: "#",
      text: "Pages studio",
    },
    {
      id: "2",
      url: "#",
      text: "Pages Agency",
    },
    {
      id: "3",
      url: "#",
      text: "Pages Minimal",
    },
    {
      id: "4",
      url: "#",
      text: "Pages Dark",
    },
    {
      id: "5",
      url: "#",
      text: "Pages Freelancer",
    },
    {
      id: "6",
      url: "#",
      text: "Pages Trending",
    },
    {
      id: "7",
      url: "#",
      text: "Pages Modern",
    },
  ];
  return (
    <CastomList
      linkArray={PagesSubMenuArray}
      ListStyle={StyleList}
      ListItemStyle={StyleListItem}
      LinkStyle={StyleLink}
    />
  );
}

export default PagesSubMenu;
