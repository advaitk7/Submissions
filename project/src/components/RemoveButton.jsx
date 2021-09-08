export default function RemoveButton({ handleRemove }) {
  return (
    <span className="absolute top-0 right-0 mr-2 mt-2 p-3 inline-block" onClick={handleRemove}>x</span>
  )
}