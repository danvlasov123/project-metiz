import React, { useState } from "react";
import InputNumber from "react-input-number";

function customInputNumber() {
  const [num, setNum] = useState(1);

  return (
    <InputNumber
      type="number"
      min={0}
      max={9999999}
      value={num}
      onChange={setNum}
      enableMobileNumericKeyboard
    />
  );
}

export default customInputNumber;
