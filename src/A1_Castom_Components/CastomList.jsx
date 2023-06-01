import { ListStyle, ListItemStyle, LinkStyle, ImgStyle } from "./Style";
function CastomList(props) {
  const { linkArray } = props;
  return (
    <ListStyle {...props.ListStyle}>
      {linkArray.map((link, index) => {
        const uniqueId = `link-${index}`;
        return (
          <ListItemStyle onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} {...props.ListItemStyle} key={uniqueId}>
            <LinkStyle {...props.LinkStyle} href={link.url} id={uniqueId}>
              <ImgStyle {...props.ImgStyle} src={link.image}/>
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
