import CastomList from "../../../A1_Castom_Components/CastomList";
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
export function HomeSubMenu(props) {
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

export function PortfolioSubMenu(props) {
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
export function BlogSubMenu(props) {
  const { display } = props;
  const StyleList = {
    ...StyleListGlobal,
    display: display,
  };
  const BlogSubMenuArray = [
    {
      id: "0",
      url: "#",
      text: "Blog Default",
    },
    {
      id: "1",
      url: "#",
      text: "Blog studio",
    },
    {
      id: "2",
      url: "#",
      text: "Blog Agency",
    },
    {
      id: "3",
      url: "#",
      text: "Blog Minimal",
    },
    {
      id: "4",
      url: "#",
      text: "Blog Dark",
    },
    {
      id: "5",
      url: "#",
      text: "Blog Freelancer",
    },
    {
      id: "6",
      url: "#",
      text: "Blog Trending",
    },
    {
      id: "7",
      url: "#",
      text: "Blog Modern",
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

export function PagesSubMenu(props) {
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
