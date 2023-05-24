import CastomLinks from "./Castom_Camponents/CastomLinks";
function Test() {
  const testarray = [
    {
      url: "#",
      text: "linck1",
    },
    {
      url: "#",
      text: "linck1",
    },
    {
      url: "#",
      text: "linck1",
    },
  ];
  const ListStyle = {
    display: "flex",
  };
  const ListItemStyle = {
    listStyleType: "none",
  };
  const LinkStyle = {
    textTransform: "uppercase",
    textDecoration: "none",
    color: "white",
  };
  return (
    <CastomLinks
      linkArray={testarray}
      ListStyle={ListStyle}
      ListItemStyle={ListItemStyle}
      LinkStyle={LinkStyle}
    />
  );
}

export default Test;
