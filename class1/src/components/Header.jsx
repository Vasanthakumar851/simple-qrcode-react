const Header = () => {
  const customCss = "code";
  const correct = "correct";
  const error = "error";
  const isLogin = true;
  const list = ["Html", "Css", "Javascript", "python"];
  const result = isLogin ? (
    <p className={correct}>Welcome to Javascript</p>
  ) : (
    <p className={error}>Please Login</p>
  );
  return (
    <div>
      <p
        className={customCss}
        style={{
          fontSize: "20px",
          fontStyle: "italic",
          fontWeight: "900",
          letterSpacing: "10px",
        }}
      >
        This is Value is: {10 + 20}
      </p>
      <p>{result}</p>
      <ol>
        {list.map((items, index) => (
          <li>{items}</li>
        ))}
      </ol>
    </div>
  );
};

export default Header;
