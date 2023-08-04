function CastomText(props) {
  const { textArray, customClass = {},} = props;
  return (
    <div className={`${customClass.castomTextConteinerStyle}`}>
      {textArray.map((text, index) => (
        <p className={`${customClass.castomTextStyle}`} {...props.TextStyle} key={index}>
          {text}
        </p>
      ))}
    </div>
  );
}
export default CastomText;
