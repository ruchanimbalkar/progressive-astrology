import { useState } from "react";
//import styles
import "./App.css";
//import components
import Card from "./components/Card.jsx";
//import nodemodules
import { birthStoneData, horoscopeData } from "./data.js";
import { getSign, getZodiac } from "horoscope";
import moment from "moment";

function App() {
  const [date, setDate] = useState(null);
  const [horoscope, setHoroscope] = useState("");
  const [sign, setSign] = useState("");
  const [month, setMonth] = useState("");
  const [leapYear, setLeapYear] = useState("");
  const [signMessage, setSignMessage] = useState("");
  const [message, setMessage] = useState("");

  const handleAstroZodiacFormChange = (event) => {
    setDate(event.target.value);
  };

  const handleAstroZodiacFormSubmit = (event) => {
    event.preventDefault();
    //console.log(date); //yyyy-mm-dd
    //console.log('typeof date', typeof date);
    let year = Number(date.slice(0, 4)); // Get first 4 characters : year
    let month = Number(date.slice(5, 7)); //Get month (characters 5 and 6)
    let day = Number(date.slice(8, 10)); //Get day (last two charcters)
    //console.log(year, month, day);
    //find astrological sign from {month, day}
    let astroSign = getSign({ month: month, day: day });
    //find zodiac sign from year
    let zodiacSign = getZodiac(year);
    let result = moment([year]).isLeapYear();
    let text = result ? `Also ${year} is a leap year` : "";
    setLeapYear(text);
    setSignMessage(`Astro sign : ${astroSign} Zodiac sign : ${zodiacSign} `);
  };
  const handleBirthStoneFormChange = (event) => setMonth(event.target.value);

  const handleBirthStoneFormSubmit = (event) => {
    console.log("inside handle submit");
    event.preventDefault();
    if (month != "") {
      setMessage(
        ` Your birthstone is  ${birthStoneData[month].birthStone} ${birthStoneData[month].symbol}`
      );
    }
  };

  const handleHoroscopeFormChange = (event) => setSign(event.target.value);

  const handleHoroscopeFormSubmit = (event) => {
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
          heading="Find Astro Sign & Zodiac Sign"
          handleChange={handleAstroZodiacFormChange}
          handleSubmit={handleAstroZodiacFormSubmit}
          result={signMessage}
        />
        <Card
          heading="Find your birthstone"
          handleChange={handleBirthStoneFormChange}
          handleSubmit={handleBirthStoneFormSubmit}
          result={message}
        />
        <Card
          heading="Get your weekly horoscope"
          handleChange={handleHoroscopeFormChange}
          handleSubmit={handleHoroscopeFormSubmit}
          result={horoscope}
        />
      </main>
    </>
  );
}

export default App;
