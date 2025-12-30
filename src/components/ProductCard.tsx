import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import type { Product } from '@/app/actions/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-md flex flex-col hover:shadow-md transition">
      
      {/* Brand & Title */}
      <div className="p-4">
        <p className="text-xs text-gray-600 mb-1">
          {product.brand}
        </p>

        <Link href={`/product/${product.id}`}>
          <h3 className="text-sm font-medium text-teal-700 line-clamp-2 hover:underline">
            {product.title}
          </h3>
        </Link>
      </div>

      {/* Image */}
      <Link href={`/product/${product.id}`}>
        <div className="relative h-44 flex items-center justify-center px-4">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain"
          />
        </div>
      </Link>

      {/* Price */}
      <div className="px-4 mt-4">
        {typeof product.originalPrice === 'number' && (
          <p className="text-sm text-gray-400 line-through">
            RS {product.originalPrice.toLocaleString()}
          </p>
        )}

        <p className="text-lg font-semibold text-teal-600">
          RS {typeof product.price === 'number' ? product.price.toLocaleString() : 'N/A'}
        </p>
      </div>

      {/* Button */}
      <div className="p-4 mt-auto">
        <button className="w-full bg-teal-500 text-white py-2 text-sm font-medium hover:bg-teal-600 transition flex items-center justify-center gap-2">
          <ShoppingCart size={16} />
          Add to cart
        </button>
      </div>
    </div>
  );
}
