const Student = (props) => {
  const { name, age, location } = props;
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Names</th>
            <td>{name}</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>{age}</td>
          </tr>
          <tr>
            <th>Location</th>
            <td>{location}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Student;
