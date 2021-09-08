export default function AddButton({ handleAdd, title }) {
  return (
    <div className="flex items-center justify-center mb-3">
      <button onClick={handleAdd} className="p-3 text-white bg-green-500">{title}</button>
    </div>
  )
}