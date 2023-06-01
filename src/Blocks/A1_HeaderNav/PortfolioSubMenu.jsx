import CastomList from "../../A1_Castom_Components/CastomList";
function PortfolioSubMenu(props) {
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
  const PortfolioSubMenuArray = [
    {
      id: "0",
      url: "#",
      text: "Portfolio Default",
    },
    {
      id: "1",
      url: "#",
      text: "Portfolio studio",
    },
    {
      id: "2",
      url: "#",
      text: "Portfolio Agency",
    },
    {
      id: "3",
      url: "#",
      text: "Portfolio Minimal",
    },
    {
      id: "4",
      url: "#",
      text: "Portfolio Dark",
    },
    {
      id: "5",
      url: "#",
      text: "Portfolio Freelancer",
    },
    {
      id: "6",
      url: "#",
      text: "Portfolio Trending",
    },
    {
      id: "7",
      url: "#",
      text: "Portfolio Modern",
    },
  ];
  return (
    <CastomList
      linkArray={PortfolioSubMenuArray}
      ListStyle={StyleList}
      ListItemStyle={StyleListItem}
      LinkStyle={StyleLink}
    />
  );
}

export default PortfolioSubMenu;
