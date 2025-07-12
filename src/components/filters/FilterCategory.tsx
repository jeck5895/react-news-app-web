import categories from "@/constants/categories";

export function FilterCategory() {
  return (
    <select 
      className="input"
      name="selectCountry" 
      id="selectCountry">
      {categories.map(category => (
        <option value={category.value}>
          {category.label}
        </option>
      ))}
    </select>
  )
}