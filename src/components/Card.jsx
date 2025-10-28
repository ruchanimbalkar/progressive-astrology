import BirthStoneForm from "./BirthStoneForm.jsx";
import ZodiacForm from "./ZodiacForm.jsx";
//import styles
import "./Card.css";
export default function Card({ heading, handleChange, handleSubmit, result }) {
  //Store form in variable CardForm depending on the heading using ternary operator
  let CardForm =
    heading === "Find your birthstone" ? BirthStoneForm : ZodiacForm;
  //console.log(CardForm);
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
