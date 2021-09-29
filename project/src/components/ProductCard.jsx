import Image from "./Image";

export default function ProductCard({ 
  product: { 
    brand,
    searchImage,
    productName,
    category,
    price,
    mrp 
  },
}) {
  return (
    <div className="border border-gray-300">
      <Image src={searchImage} alt={`${productName}`} width="250" height="315" className="" />
      <div className="p-1 text-sm">
        <p className="font-medium text-lg line-clamp-2">{productName}</p>
        <p>Brand: {brand}</p>
        <p>Category: {category}</p>
        {mrp !== price ? <p className="line-through">MRP - ₹{mrp}</p> : null}
        <p>Price- ₹{price}</p>
      </div>
    </div>
  )
}