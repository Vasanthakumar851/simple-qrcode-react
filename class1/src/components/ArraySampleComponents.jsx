const ArraySampleComponents = (props) => {
  const { shopping } = props;
  const list = ["html", "css", "javascript"];
  return (
    <div>
      <ol>
        {shopping.map((items) => (
          <li key={items.id}>{items.item}</li>
        ))}
      </ol>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ArraySampleComponents;
