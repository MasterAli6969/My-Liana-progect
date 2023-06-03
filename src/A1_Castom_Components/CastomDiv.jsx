function CastomDiv(props) {
  const {
    divArray,
    casromDivStyleConteiner,
    casromDivStyleSubConteinerLeft,
    casromDivStyleSubConteinerRight,
  } = props;
  return (
    <>
      {divArray.map((component) => (
        <div className={`${casromDivStyleConteiner}`} key={component.id}>
          <>
            <div className={`${casromDivStyleSubConteinerLeft}`}>
              {component.left}
            </div>
            <div className={`${casromDivStyleSubConteinerRight}`}>
              {component.right}
            </div>
          </>
        </div>
      ))}
    </>
  );
}
export default CastomDiv;
