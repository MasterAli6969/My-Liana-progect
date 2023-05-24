function CastomText(props) {
  const { textArray } = props;
  return (
    <div >
      {textArray.map((text, index) => (
        <p key={index}>
          {text}
        </p>
      ))}
    </div>
  );
}

export default CastomText;
