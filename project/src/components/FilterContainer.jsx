import Filter from "./Filter"

export default function FilterContainer({ brands, categories, dispatch }) {
  return (
    <>
      <Filter list={brands} filterKey={"brand"} title="Brands" dispatch={dispatch} />
      <p className="p-2" />
      <Filter list={categories} filterKey={"category"} title="Categories" dispatch={dispatch} />
    </>
  )
}