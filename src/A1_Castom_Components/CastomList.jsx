function CastomList(props) {
  const { linkArray, castomUlStyle, castomLiStyle, castomAStyle } = props;
  return (
    <ul className={`${castomUlStyle}`}>
      {linkArray.map((link, index) => {
        return (
          <li className={` ${castomLiStyle}`} key={index}>
            <a className={` ${castomAStyle}`} href={link.url}>
              <img src={link.image} />
              {link.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
export default CastomList;
