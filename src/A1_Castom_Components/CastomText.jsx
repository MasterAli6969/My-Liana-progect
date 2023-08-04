function CastomText(props) {
  const { textArray, castomTextStyleAdd, customClass = {} } = props;
  return (
    <div className={`${customClass.castomTextConteinerStyle}`}>
      {textArray.map((text, index) => (
        <p
          className={`${customClass.castomTextStyle} ${castomTextStyleAdd}`}
          {...props.TextStyle}
          key={index}
        >
          {text}
        </p>
      ))}
    </div>
  );
}
export default CastomText;
