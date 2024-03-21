const ChildComponents = (props) => {
  return (
    <div>
      <h1>Title Of The Headings</h1>
      <div>{props.children}</div>
    </div>
  );
};

export default ChildComponents;
