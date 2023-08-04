function CastomList(props) {
  const {
    linkArray,
    customClass,
  } = props;
  return (
    <ul className={`${customClass.castomUlStyle}`}>
      {linkArray.map((link, index) => {
        return (
          <li className={` ${customClass.castomLiStyle}`} key={index}>
            <a className={` ${customClass.castomAStyle}`} href={link.url}>
              <img className={`${customClass.castomImgStyle}`} src={link.image} />
              {link.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
export default CastomList;
