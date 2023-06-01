import CastomList from "../../A1_Castom_Components/CastomList";
function BlogSubMenu(props) {
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

export default BlogSubMenu;
