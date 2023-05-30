import { ListStyle, ListItemStyle, LinkStyle } from "./Style";
function CastomList(props) {
  const { linkArray } = props;
  return (
    <ListStyle {...props.ListStyle}>
      {linkArray.map((link, index) => {
        const uniqueId = `link-${index}`;
        return (
          <ListItemStyle {...props.ListItemStyle} key={uniqueId}>
            <LinkStyle {...props.LinkStyle} href={link.url} id={uniqueId}>
              {link.text}
            </LinkStyle>
            {link.submenu && <div>{link.submenu}</div>}
          </ListItemStyle>
        );
      })}
    </ListStyle>
  );
}

export default CastomList;
