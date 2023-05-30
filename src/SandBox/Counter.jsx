import React, { useState } from "react";
function Counter() {
  const [plus1, setPlus1] = useState(0);
  const handlePlus = () => {
    setPlus1(plus1 + 1);
  };

  const handleMinus = () => {
    setPlus1(plus1 - 1);
  };
  return (
    <>
      <input
        value={plus1}
        onChange={(e) => setPlus1(e.target.value)}
        type="number"
      />
      <button onClick={handlePlus}>Увеличить</button>
      <button onClick={handleMinus}>Уменьшить</button>
    </>
  );
}
export default Counter;
