import styled from "styled-components";

export const DivStyleConteiner = styled.div`
  position: ${(props) => props.position || ""};
  top: ${(props) => props.top || ""};
  left: ${(props) => props.left || ""};
  right: ${(props) => props.right || ""};
  display: ${(props) => props.display || ""};
  justify-content: ${(props) => props.justifyContent || ""};
  padding: ${(props) => props.padding || ""};
  margin: ${(props) => props.margin || ""};
  flex-wrap: ${(props) => props.flexWrap || ""};
  width: ${(props) => props.width || ""};
  height: ${(props) => props.height || ""};
  opacity: ${(props) => props.opacity || ""};
  background-color: ${(props) => props.backgroundColor || ""};
  background-image: ${(props) => props.backgroundImage || ""};
  background-position: ${(props) => props.backgroundPosition || ""};
  background-attachment: ${(props) => props.backgroundAttachment || ""};
`;

export const OrderDiv = styled.div`
  order: ${(props) => props.order || ""};
  background-color: ${(props) => props.backgroundColor || ""};
`;

export const ListStyle = styled.ul`
  display: ${(props) => props.display || ""};
  width: ${(props) => props.width || ""};
  height: ${(props) => props.height || ""};
  padding: ${(props) => props.padding || ""};
  margin: ${(props) => props.margin || ""};
  background-color: ${(props) => props.backgroundColor || ""};
`;

export const ListItemStyle = styled.li`
  list-style-type: ${(props) => props.listStyleType || ""};
  padding: ${(props) => props.padding || ""};
  margin: ${(props) => props.margin || ""};
  background-color: ${(props) => props.backgroundColor || ""};
`;

export const LinkStyle = styled.a`
  text-transform: ${(props) => props.textTransform || ""};
  text-decoration: ${(props) => props.textDecoration || ""};
  color: ${(props) => props.color || ""};
  font-size: ${(props) => props.fontSize || ""};
  font-weight: ${(props) => props.fontWeight || ""};
  line-height: ${(props) => props.lineHeight || ""};
  margin: ${(props) => props.margin || ""};
  cursor: ${(props) => props.cursor || ""};
`;
export const TextStyle = styled.p`
  text-transform: ${(props) => props.textTransform || ""};
  color: ${(props) => props.color || ""};
  font-size: ${(props) => props.fontSize || ""};
  font-weight: ${(props) => props.fontWeight || ""};
  margin: ${(props) => props.margin || ""};
  opacity: ${(props) => props.opacity || ""};
`;

export const ImgStyle = styled.img`
  position: ${(props) => props.position || ""};
  top: ${(props) => props.top || ""};
  left: ${(props) => props.left || ""};
  right: ${(props) => props.right || ""};
  bottom: ${(props) => props.bottom || ""};
  width: ${(props) => props.width || ""};
  height: ${(props) => props.height || ""};
  padding: ${(props) => props.padding || ""};
  margin: ${(props) => props.margin || ""};
`;

export const LineStyle = styled.hr`
  margin: ${(props) => props.margin || ""};
  width: ${(props) => props.width || ""};
  height: ${(props) => props.height || ""};
  opacity: ${(props) => props.opacity || ""};
  background-color: ${(props) => props.backgroundColor || ""};
`;
