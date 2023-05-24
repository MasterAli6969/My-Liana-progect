import styled from "styled-components";

export const DivStyleConteiner = styled.div`
  display: ${(props) => props.display || ""};
  justify-content: ${(props) => props.justifyContent || ""};
  padding: ${(props) => props.padding || ""};
  margin: ${(props) => props.margin || ""};
`;

export const ListStyle = styled.ul`
  display: ${(props) => props.display || ""};
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
  text-transform: ${(props) => props.color || ""};
  text-decoration: ${(props) => props.color || ""};
  color: ${(props) => props.color || ""};
  font-size: ${(props) => props.fontSize || ""};
  font-weight: ${(props) => props.fontWeight || ""};
`;
export const TextStyle = styled.p`
  color: ${(props) => props.color || ""};
  font-size: ${(props) => props.fontSize || ""};
  font-weight: ${(props) => props.fontWeight || ""};
  opacity: ${(props) => props.opacity || ""};
`;
