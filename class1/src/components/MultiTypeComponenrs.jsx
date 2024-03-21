import PropTypes from "prop-types";

const MultiTypeComponenrs = (props) => {
  return (
    <div>
      <p>This Values Is:{props.values}</p>
    </div>
  );
};

MultiTypeComponenrs.PropTypes = {
  values: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default MultiTypeComponenrs;
