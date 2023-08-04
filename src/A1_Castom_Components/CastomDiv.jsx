function CastomDiv(props) {
  const { divArray, customClass = {}, castomDivStyleConteinerAdd = {} } = props;
  return (
    <>
      {divArray.map((component) => (
        <div
          className={`${customClass.castomDivStyleConteiner} ${castomDivStyleConteinerAdd}`}
          key={component.id}
        >
          <>
            <div className={`${customClass.castomDivStyleSubConteinerLeft}`}>
              {component.left}
            </div>
            <div className={`${customClass.castomDivStyleSubConteinerRight}`}>
              {component.right}
            </div>
          </>
        </div>
      ))}
    </>
  );
}
export default CastomDiv;
