function CastomList(props) {
  const {
    linkArray,
    castomUlStyle,
    castomLiStyle,
    castomAStyle,
    castomImgStyle,
  } = props;
  return (
    <ul className={`${castomUlStyle}`}>
      {linkArray.map((link, index) => {
        return (
          <li className={` ${castomLiStyle}`} key={index}>
            <a className={` ${castomAStyle}`} href={link.url}>
              <img className={`${castomImgStyle}`} src={link.image} />
              {link.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
export default CastomList;
