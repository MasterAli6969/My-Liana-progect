import { ListStyle } from "./Style";
import { ListItemStyle } from "./Style";
import { LinkStyle } from "./Style";
function CastomLinks(props) {
  const { linkArray, onMouseEnter, onMouseLeave } = props;
  return (
    <ListStyle {...props.ListStyle}>
      {linkArray.map((link, index) => {
        const uniqueId = `link-${index}`;
        return (
          <ListItemStyle {...props.ListItemStyle} key={uniqueId}>
            <LinkStyle
              {...props.LinkStyle}
              href={link.url}
              id={uniqueId}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              {link.text}
            </LinkStyle>
          </ListItemStyle>
        );
      })}
    </ListStyle>
  );
}

export default CastomLinks;
