import "./DisplayComponent.css";

interface DisplayComponentProps {
  maxInput: number | undefined;
}

const DisplayComponent = (props: DisplayComponentProps) => {
  const { maxInput } = props;

  return (
    <div>
      {maxInput !== undefined && (
        <div className="displayContainer">
          {[...Array(maxInput)].map((e, i) => {
            return (
              <span style={{ padding: "5px" }} key={i}>
                {i + 1}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DisplayComponent;
