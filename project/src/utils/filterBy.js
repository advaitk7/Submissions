export default function filterBy(list, filters) {
  const filterEntries = Object.entries(filters).filter(([, filterValueArr]) => filterValueArr.length > 0);

  const filteredList = list.filter((item) => {
    let toBeFiltered = true;

    if (filterEntries.some(([filterKey, filterValueArr]) => !filterValueArr.includes(item[filterKey]))) toBeFiltered = false;

    return toBeFiltered;
  });

  return filteredList;
}