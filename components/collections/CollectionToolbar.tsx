import SortDropdown from "./SortDropdown"
import FilterButton from "./FilterButton"

export default function CollectionToolbar() {
  return (
    <div className="flex justify-end gap-4 px-6 py-5">
      <SortDropdown/>
      <FilterButton/>
    </div>
  )
}
