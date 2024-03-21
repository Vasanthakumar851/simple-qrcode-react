function User(props) {
  const { name, city, skills, online } = props;
  return (
    <div className="card-container">
      <span className={online ? "pro online" : "pro offline"}>
        {online ? "online" : "offline"}
      </span>
      <img src="images/graduated.png" className="img" alt="" height={"200px"} />
      <h2>{name}</h2>
      <h2>{city}</h2>
      <p>Front-end Developer</p>
      <div className="buttons">
        <button className="primary">Message</button>
        <button className="primary outline">Following</button>
      </div>
      <div className="skills">
        <h3>Skills</h3>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const UserCard = () => {
  const UserData = [
    {
      name: "Vasanth",
      ciy: "pondy",
      skills: ["html", "css", "javascript"],
      online: false,
    },
    {
      name: "Kumar",
      ciy: "pondy",
      skills: ["ddd", "css", "javascript"],
      online: true,
    },
    {
      name: "Vasanth",
      ciy: "pondy",
      skills: ["htwwwml", "css", "javascript"],
      online: true,
    },
  ];
  return (
    <>
      {UserData.map((data, index) => (
        <User
          key={index}
          name={data.name}
          ciy={data.ciy}
          skills={data.skills}
          online={data.online}
        />
      ))}
    </>
  );
};

export default UserCard;
