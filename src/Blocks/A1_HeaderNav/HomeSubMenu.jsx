import CastomList from "../../A1_Castom_Components/CastomList";
function HomeSubMenu(props) {
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
  const HomeSubMenuArray = [
    {
      id: "0",
      url: "#",
      text: "Home Default",
    },
    {
      id: "1",
      url: "#",
      text: "Home studio",
    },
    {
      id: "2",
      url: "#",
      text: "Home Agency",
    },
    {
      id: "4",
      url: "#",
      text: "Home Minimal",
    },
    {
      id: "5",
      url: "#",
      text: "Home Dark",
    },
    {
      id: "6",
      url: "#",
      text: "Home Freelancer",
    },
    {
      id: "7",
      url: "#",
      text: "Home Trending",
    },
    {
      id: "8",
      url: "#",
      text: "Home Modern",
    },
  ];
  return (
    <CastomList
      linkArray={HomeSubMenuArray}
      ListStyle={StyleList}
      ListItemStyle={StyleListItem}
      LinkStyle={StyleLink}
    />
  );
}

export default HomeSubMenu;
