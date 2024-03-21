import PropTypes from "prop-types"; // ES6

const BackgroundColor = (props) => {
  const { color, align } = props;
  return (
    <div style={{ backgroundColor: color, padding: "10px", textAlign: align }}>
      <p>This Is React Js Course</p>
    </div>
  );
};

BackgroundColor.PropTypes = {
  color: PropTypes.oneOf(["red", "green", "blue"]).isRequired,
};

export default BackgroundColor;
