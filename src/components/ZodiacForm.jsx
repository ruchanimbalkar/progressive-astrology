import Button from "./Button.jsx";
export default function ZodiacForm({ handleChange, handleSubmit }) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>
          <select id="sign" name="sign" onChange={handleChange}>
            <option defaultChecked>Select your sign </option>
            <option value="Aries"> &#9800; Aries </option>
            <option value="Taurus"> &#9801;Taurus </option>
            <option value="Gemini"> &#9802; Gemini </option>
            <option value="Cancer"> &#9803; Cancer </option>
            <option value="Leo"> &#9804; Leo </option>
            <option value="Virgo"> &#9805; Virgo </option>
            <option value="Libra"> &#9806; Libra </option>
            <option value="Scorpio"> &#9807; Scorpio </option>
            <option value="Sagittarius"> &#9808; Sagittarius </option>
            <option value="Capricorn"> &#9809; Capricorn </option>
            <option value="Aquarius"> &#9810; Aquarius </option>
            <option value="Pisces"> &#9811; Pisces </option>
          </select>
        </p>
        <Button type="submit" text="Submit" />
      </form>
    </>
  );
}
