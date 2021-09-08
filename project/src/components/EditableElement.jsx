export default function Element({ value, handleChange, dataKey }) {
  return (
    <input type="text" value={value} onChange={(e) => handleChange(e.target.value, dataKey)} />
  )
}