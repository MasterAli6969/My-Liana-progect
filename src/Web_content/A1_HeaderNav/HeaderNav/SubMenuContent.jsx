import CastomList from "../../../A1_Castom_Components/CastomList";

export function HomeSubMenu(props) {
  const {ulSubStyle,liSubStyle,aSubStyle} = props
  const HomeSubMenuArray = [
    {
      url: "#",
      text: "Home Default",
    },
    {
      url: "#",
      text: "Home studio",
    },
    {
      url: "#",
      text: "Home Agency",
    },
    {
      url: "#",
      text: "Home Minimal",
    },
    {
      url: "#",
      text: "Home Dark",
    },
    {
      url: "#",
      text: "Home Freelancer",
    },
    {
      url: "#",
      text: "Home Trending",
    },
    {
      url: "#",
      text: "Home Modern",
    },
  ];
  return (
    <CastomList
      linkArray={HomeSubMenuArray}
      castomUlStyle={ulSubStyle}
      castomLiStyle={liSubStyle}
      castomAStyle={aSubStyle}
    />
  );
}

export function PortfolioSubMenu(props) {
  const {ulSubStyle,liSubStyle,aSubStyle} = props
  const PortfolioSubMenuArray = [
    {
      url: "#",
      text: "Portfolio Default",
    },
    {
      url: "#",
      text: "Portfolio studio",
    },
    {
      url: "#",
      text: "Portfolio Agency",
    },
    {
      url: "#",
      text: "Portfolio Minimal",
    },
    {
      url: "#",
      text: "Portfolio Dark",
    },
    {
      url: "#",
      text: "Portfolio Freelancer",
    },
    {
      url: "#",
      text: "Portfolio Trending",
    },
    {
      url: "#",
      text: "Portfolio Modern",
    },
  ];
  return (
    <CastomList
      linkArray={PortfolioSubMenuArray}
      castomUlStyle={ulSubStyle}
      castomLiStyle={liSubStyle}
      castomAStyle={aSubStyle}
    />
  );
}
export function BlogSubMenu(props) {
  const {ulSubStyle,liSubStyle,aSubStyle} = props
  const BlogSubMenuArray = [
    {
      url: "#",
      text: "Blog Default",
    },
    {
      url: "#",
      text: "Blog studio",
    },
    {
      url: "#",
      text: "Blog Agency",
    },
    {
      url: "#",
      text: "Blog Minimal",
    },
    {
      url: "#",
      text: "Blog Dark",
    },
    {
      url: "#",
      text: "Blog Freelancer",
    },
    {
      url: "#",
      text: "Blog Trending",
    },
    {
      url: "#",
      text: "Blog Modern",
    },
  ];
  return (
    <CastomList
      linkArray={BlogSubMenuArray}
      castomUlStyle={ulSubStyle}
      castomLiStyle={liSubStyle}
      castomAStyle={aSubStyle}
    />
  );
}

export function PagesSubMenu(props) {
  const {ulSubStyle,liSubStyle,aSubStyle} = props
  const PagesSubMenuArray = [
    {
      url: "#",
      text: "Pages Default",
    },
    {
      url: "#",
      text: "Pages studio",
    },
    {
      url: "#",
      text: "Pages Agency",
    },
    {
      url: "#",
      text: "Pages Minimal",
    },
    {
      url: "#",
      text: "Pages Dark",
    },
    {
      url: "#",
      text: "Pages Freelancer",
    },
    {
      url: "#",
      text: "Pages Trending",
    },
    {
      url: "#",
      text: "Pages Modern",
    },
  ];
  return (
    <CastomList
      linkArray={PagesSubMenuArray}
      castomUlStyle={ulSubStyle}
      castomLiStyle={liSubStyle}
      castomAStyle={aSubStyle}
    />
  );
}
