import "./index.css";
import DisplayComponent from "./DisplayComponent";
import { useState } from "react";

const PrintNumbers = () => {
  const [maxNumber, setMaxNumber] = useState<number | undefined>(undefined);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const result: number | undefined =
      event.target.value === "" ? undefined : +event.target.value;
    setMaxNumber(result);
  };
  return (
    <div>
      <h2>Print Numbers</h2>
      <form>
        <label>
          Max Number to print :
          <input
            type="number"
            value={maxNumber}
            className="numberInput"
            name="maxNumber"
            onChange={handleChange}
            min="1"
          />
        </label>
      </form>
      <DisplayComponent maxInput={maxNumber}></DisplayComponent>
    </div>
  );
};

export default PrintNumbers;
