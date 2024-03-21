import Header from "./components/Header";
import ArraySampleComponents from "./components/ArraySampleComponents";
import BackgroundColor from "./components/BackgroundColor";
import ChildComponents from "./components/ChildComponents";
import FunctionSample from "./components/FunctionSample";
import MultiTypeComponenrs from "./components/MultiTypeComponenrs";
import LearnComponent from "./components/LearnComponent";
import Student from "./components/Student";
import "./css/App.css";

function App() {
  const shopping = [
    { id: 1, item: "mobile", price: 1000 },
    { id: 2, item: "car", price: 10000 },
    { id: 3, item: "bike", price: 20000 },
    { id: 4, item: "cycle", price: 3000 },
  ];

  var handleclick = () => {
    alert("Hello   hjbbjh");
  };

  return (
    <>
      <div>
        <LearnComponent />
      </div>
      <Header />
      <Student name="VijayKumar" age={20} location="pondy" />
      <Student />
      <ChildComponents>
        <p>Learn React Js</p>
        <p>Learn React Js</p>
        <p>Learn React Js</p>
        <h1>Hi Hello Everyone Please Keep It</h1>
      </ChildComponents>
      <ArraySampleComponents shopping={shopping} />
      <BackgroundColor color="yellow" align="center" />
      <MultiTypeComponenrs values={" Vasanth"} />
      <MultiTypeComponenrs values={" Pondy"} />
      <MultiTypeComponenrs values={" 12345678909"} />
      <div>
        <h1>This Is Parent Components</h1>
        <FunctionSample handleclick={handleclick} />
      </div>
    </>
  );
}

export default App;
