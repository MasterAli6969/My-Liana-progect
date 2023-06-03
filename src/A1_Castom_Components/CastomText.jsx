function CastomText(props) {
  const { textArray, castomTextConteinerStyle, castomTextStyle, } = props;
  return (
    <div className={`${castomTextConteinerStyle}`}>
      {textArray.map((text, index) => (
        <p className={`${castomTextStyle}`} {...props.TextStyle} key={index}>
          {text}
        </p>
      ))}
    </div>
  );
}
export default CastomText;
