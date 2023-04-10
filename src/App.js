import "./App.css";
import Input from "./components/Input";
import Compute from "./components/Compute";
import Output from "./components/Output";
import Attribution from "./components/Attribution";
import { useState } from "react";

function App() {
  // Date
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState("");

  // Age
  const [days, setDays] = useState("--");
  const [months, setMonths] = useState("--");
  const [years, setYears] = useState("--");

  return (
    <div className="App">
      <div className="card">
        <Input
          error={error}
          day={day}
          month={month}
          year={year}
          setDay={setDay}
          setMonth={setMonth}
          setYear={setYear}
        />
        <Compute
          setError={setError}
          day={day}
          month={month}
          year={year}
          setDays={setDays}
          setMonths={setMonths}
          setYears={setYears}
        />
        <Output days={days} months={months} years={years} />
      </div>

      <Attribution />
    </div>
  );
}

export default App;
