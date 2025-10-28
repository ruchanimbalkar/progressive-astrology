import { useState } from "react";
//import styles
import "./App.css";
//import components
import Card from "./components/Card.jsx";
import { birthStoneData, horoscopeData } from "./data.js";

function App() {
  const [horoscope, setHoroscope] = useState("");
  const [sign, setSign] = useState("");
  const [month, setMonth] = useState("");
  const [message, setMessage] = useState("");
  const handleChange = (event) => setMonth(event.target.value);

  const handleSubmit = (event) => {
    console.log("inside handle submit");
    event.preventDefault();
    if (month != "") {
      setMessage(
        ` Your birthstone is  ${birthStoneData[month].birthStone} ${birthStoneData[month].symbol}`
      );
    }
  };

  const handleZodiacFormChange = (event) => setSign(event.target.value);

  const handleZodiacFormSubmit = (event) => {
    event.preventDefault();
    setHoroscope(horoscopeData.horoscopes.astroSigns[sign].dailyHoroscope);
    //getHoroscope();
  };

  // const getHoroscope = async () => {
  //   try {
  //     const response = await fetch(
  //       `https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=${sign}&day=TODAY`
  //     );
  //     if (!response.ok) {
  //       console.error(`Response status: ${response.status}`);
  //       return; // Exit early //Reference : https://dev.to/muthuraja_r/using-guard-clauses-in-asyncawait-a-clean-coding-technique-for-readable-and-maintainable-code-367j
  //     }
  //     const data = await response.json();
  //     //print data on console
  //     console.log("data", data);
  //     setHoroscope(data.horoscope_data);
  //   } catch (error) {
  //     console.log("Error Fetching API: " + error);
  //   }
  // };
  //The above code is giving me cors error. I will try again later
  return (
    <>
      <div></div>
      <h1>Progressive Astrology</h1>
      <h2> Welcome to Progressive Astrology </h2>
      <main className="main-card">
        <Card
          heading="Find your birthstone"
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          result={message}
        />
        <Card
          heading="Get your weekly horoscope"
          handleChange={handleZodiacFormChange}
          handleSubmit={handleZodiacFormSubmit}
          result={horoscope}
        />
      </main>
    </>
  );
}

export default App;
