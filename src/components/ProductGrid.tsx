import ProductCard from './ProductCard';
import type { Product } from '@/app/actions/products';

interface ProductGridProps {
  products: Product[];
  title: string;
}

export default function ProductGrid({ products, title }: ProductGridProps) {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            <span className="text-teal-600">{title.split(' ')[0]}</span> {title.split(' ').slice(1).join(' ')}
          </h2>
        </div>

        {/* Products Grid */}
        {products && products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No products available</p>
          </div>
        )}
      </div>
    </section>
  );
}
