import Button from "./Button.jsx";
export default function AstroZodiacForm({ handleChange, handleSubmit }) {
  console.log("AstroZodiacForm");
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="dateInput">Select a date:</label>
        <input type="date" id="dateInput" onChange={handleChange} />
        <Button type="submit" text="Submit" />
      </form>
    </>
  );
}
