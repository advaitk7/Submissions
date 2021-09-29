import { filterClickAction } from "../rdx/filterSlice";

export default function Filter({ list, filterKey, title, dispatch }) {
  const handleFilterClick = (value) => {
    dispatch(filterClickAction(filterKey, value));
  }

  return (
    <div className="p-2 border border-gray-300">
      <h3 className="text-lg font-semibold my-3">{title}</h3>
      <ul className="list-none overflow-auto max-h-60">
        {list.map(brand => (
          <li className="block" key={brand}>
            <label className="relative">
              <input type="checkbox" value={brand} onChange={() => handleFilterClick(brand)} className=" mr-2" />
              {brand}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}
