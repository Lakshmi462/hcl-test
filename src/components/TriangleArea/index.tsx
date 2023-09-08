import "./index.css";
import { useState } from "react";
import DisplayArea from "./DisplayArea";

const TriangleArea = () => {
  const [properties, setProperties] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });

  const handleChangeWidth = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProperties({ ...properties, width: +e.target.value });
  };
  const handleChangeHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProperties({ ...properties, height: +e.target.value });
  };

  return (
    <div>
      <h2>Area of Triangle</h2>
      <form>
        <label>
          Width :
          <input
            type="number"
            value={properties.width}
            className="numberInput"
            name="width"
            onChange={handleChangeWidth}
            min="1"
          />
        </label>
        <label>
          Height :
          <input
            type="number"
            value={properties.height}
            className="numberInput"
            name="height"
            onChange={handleChangeHeight}
            min="1"
          />
        </label>
      </form>
      <DisplayArea properties={properties}></DisplayArea>
    </div>
  );
};

export default TriangleArea;
