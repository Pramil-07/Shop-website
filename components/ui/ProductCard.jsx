// components/ui/ProductCard.js
import Image from 'next/image';

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <Image
        src={product.image}
        alt={product.name}
        width={500}
        height={300}
        className="w-full"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <table className="table-auto w-full">
          <tbody>
            <tr>
              <td className="border px-4 py-2">Price</td>
              <td className="border px-4 py-2">{product.price}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Description</td>
              <td className="border px-4 py-2">{product.description}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductCard;
