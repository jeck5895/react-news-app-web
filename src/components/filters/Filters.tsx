import { FilterCountry } from "./FilterCountry";
import { FilterCategory } from './FilterCategory'
import { FilterInput } from "./FilterInput";
import Button from "../Button";
import { FilterSource } from "./FilterSource";

function handleSearch() {
  console.log('Searching....')
}

export default function Filters () {
  return (
    <div className="flex justify-center gap-1">
      <FilterCountry/>
      <FilterCategory/>
      <FilterSource/>
      <FilterInput/>
      <Button handleClick={()=> handleSearch}>
        Search <i className="fas fa-search"></i>
      </Button>
    </div>
  )
}