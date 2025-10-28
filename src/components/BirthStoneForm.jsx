import Button from "./Button.jsx";
export default function BirthStoneForm({ handleChange, handleSubmit }) {
  //console.log("Form", handleChange, handleSubmit);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <select name="birth_month" id="birth_month" onChange={handleChange}>
          {/* <!-- Each option displays a month name and has the same name as its value --> */}
          <option value="">Select Month</option>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
        <Button type="submit" text="Submit" />
      </form>
    </>
  );
}
