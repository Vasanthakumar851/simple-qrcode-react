import PropTypes from "prop-types";

const FunctionSample = (props) => {
  const { handleclick } = props;
  return (
    <div>
      <p>This Is ChildComponents</p>
      <button onClick={handleclick}>Click Me!</button>
    </div>
  );
};

FunctionSample.propTypes = {
  handleclick: PropTypes.func.isRequired,
};

export default FunctionSample;
