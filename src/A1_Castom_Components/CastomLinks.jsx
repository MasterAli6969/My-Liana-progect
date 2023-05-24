import { ListStyle } from "./Style";
import { ListItemStyle } from "./Style";
import { LinkStyle } from "./Style";
function CastomLinks(props) {
  const { linkArray } = props;
  return (
    <ListStyle {...props.ListStyle}>
      {linkArray.map((linck, index) => (
        <ListItemStyle {...props.ListItemStyle} key={index}>
          <LinkStyle {...props.LinkStyle} href={linck.url}>
            {linck.text}
          </LinkStyle>
        </ListItemStyle>
      ))}
    </ListStyle>
  );
}

export default CastomLinks;
