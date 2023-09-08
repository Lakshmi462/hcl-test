interface DisplayAreaProps {
  properties: {
    width: number | undefined;
    height: number | undefined;
  };
}

const DisplayArea = (props: DisplayAreaProps) => {
  const { properties } = props;
  const calculateArea = () => {
    if (properties.width !== undefined && properties.height !== undefined) {
      return (properties.width * properties.height) / 2;
    }
    return "";
  };
  return (
    <div>
      {properties.width !== undefined && properties.height !== undefined && (
        <div>
          <p>Area of triangle is {calculateArea()}</p>
        </div>
      )}
    </div>
  );
};

export default DisplayArea;
