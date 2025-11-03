import BirthStoneForm from "./BirthStoneForm.jsx";
import HoroscopeForm from "./HoroscopeForm.jsx";
import AstroZodiacForm from "./AstroZodiacForm.jsx";
//import styles
import "./Card.css";
export default function Card({ heading, handleChange, handleSubmit, result }) {
  //Store form in variable CardForm depending on the heading using switch case statement
  let CardForm;
  switch (heading) {
    case "Find Astro Sign & Zodiac Sign":
      CardForm = AstroZodiacForm;
      break;
    case "Find your birthstone":
      CardForm = BirthStoneForm;
      break;
    case "Get your weekly horoscope":
      CardForm = HoroscopeForm;
      break;
  }
  console.log("heading", heading);
  return (
    <>
      <div className="card">
        <h3> {heading}</h3>
        <CardForm handleChange={handleChange} handleSubmit={handleSubmit} />
        <h4>{result}</h4>
      </div>
    </>
  );
}
