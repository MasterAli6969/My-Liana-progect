import CastomList from "../../../A1_Castom_Components/CastomList";
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
  color: "black",
  fontWeight: "normal",
  fontSize: "80%",
};
export function HomeSubMenu() {
  const HomeSubMenuArray = [
    {
      id: "0",
      url: "#",
      text: "home",
    },
    {
      id: "1",
      url: "#",
      text: "portfolio",
    },
    {
      id: "2",
      url: "#",
      text: "blog",
    },
    {
      id: "3",
      url: "#",
      text: "pages",
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

export function PortfolioSubMenu() {
  const PortfolioSubMenuArray = [
    {
      id: "0",
      url: "#",
      text: "home",
    },
    {
      id: "1",
      url: "#",
      text: "portfolio",
    },
    {
      id: "2",
      url: "#",
      text: "blog",
    },
    {
      id: "3",
      url: "#",
      text: "pages",
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
export function BlogSubMenu() {
  const BlogSubMenuArray = [
    {
      id: "0",
      url: "#",
      text: "home",
    },
    {
      id: "1",
      url: "#",
      text: "portfolio",
    },
    {
      id: "2",
      url: "#",
      text: "blog",
    },
    {
      id: "3",
      url: "#",
      text: "pages",
    },
  ];
  return (
    <CastomList
      linkArray={BlogSubMenuArray}
      ListStyle={StyleList}
      ListItemStyle={StyleListItem}
      LinkStyle={StyleLink}
    />
  );
}

export function PagesSubMenu() {
  const PagesSubMenuArray = [
    {
      id: "0",
      url: "#",
      text: "home",
    },
    {
      id: "1",
      url: "#",
      text: "portfolio",
    },
    {
      id: "2",
      url: "#",
      text: "blog",
    },
    {
      id: "3",
      url: "#",
      text: "pages",
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
