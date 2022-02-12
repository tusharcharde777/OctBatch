import logo from "./logo.svg";
import "./App.css";

const cityList = [
  { name: "Goa", country: "India" },
  { name: "Amsterdam", country: "Netherlands" },
  { name: "New York", country: "USA" },
  { name: "Darjeeling", country: "India" },
  { name: "Tokyo", country: "Japan" },
  { name: "Lonavala", country: "India" },
];

function App() {
  return (
    <div>
      <ol>
        {cityList
          .filter((city) => city.country === "India")
          .map((city, index) => {
            const key = "location" + index;
            return <li key={key}>{city.name}</li>;
          })}
      </ol>
    </div>
  );
}

export default App;
