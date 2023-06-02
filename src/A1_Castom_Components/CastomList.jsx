import { ListStyle, ListItemStyle, LinkStyle, ImgStyle } from "./Style";
function CastomList(props) {
  const { linkArray } = props;
  return (
    <ListStyle {...props.ListStyle}>
      {linkArray.map((link, index) => {
        return (
          <ListItemStyle onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} {...props.ListItemStyle} key={index}>
            <LinkStyle {...props.LinkStyle} href={link.url}>
              <ImgStyle {...props.ImgStyle} src={link.image}/>
              {link.text}
            </LinkStyle>
          </ListItemStyle>
        );
      })}
    </ListStyle>
  );
}

export default CastomList;
