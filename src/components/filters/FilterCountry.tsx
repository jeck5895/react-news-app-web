import countries from "@/constants/countries";

export function FilterCountry() {

  return (
    <select 
      className="input"
      name="selectCountry" 
      id="selectCountry">
      {countries.map(country => (
        <option value={country.value}>
          {country.label}
        </option>
      ))}
    </select>
  )
}