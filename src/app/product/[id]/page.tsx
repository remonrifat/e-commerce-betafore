import { getProductById, getAllProducts } from "@/app/actions/products";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Heart, Share2, ChevronLeft } from "lucide-react";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProductById(parseInt(id));

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <p className="text-center text-gray-500">Product not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Back Link */}
      <Link href="/" className="flex items-center gap-2 text-teal-600 hover:text-teal-700 mb-8">
        <ChevronLeft size={20} />
        Back to Home
      </Link>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div>
          <div className="relative bg-gray-100 rounded-lg overflow-hidden sticky top-4">
            <div className="h-96 md:h-full">
              <Image
                src={product.image || "https://d.hs-bd.com/wp-content/uploads/2025/12/site-structure-seo-6586acd905b1c-sej.jpeg"}
                alt={product.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div>
          {/* Brand */}
          <p className="text-teal-600 text-sm font-medium mb-2">{product.brand}</p>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{product.title}</h1>

          {/* Rating */}
          {product.rating && (
            <div className="flex items-center gap-4 mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-xl ${i < Math.round(product.rating!) ? "text-yellow-400" : "text-gray-300"}`}
                  >
                    ★
                  </span>
                ))}
              </div>
              {product.reviews && <span className="text-gray-600">({product.reviews} reviews)</span>}
            </div>
          )}

          {/* Price */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-4xl font-bold text-teal-600">
                Rs {typeof product.price === 'number' ? product.price.toLocaleString() : 'N/A'}
              </span>
              {typeof product.originalPrice === 'number' && (
                <span className="text-xl text-gray-400 line-through">
                  Rs {product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            {typeof product.originalPrice === 'number' && typeof product.price === 'number' && product.originalPrice > product.price && (
              <p className="text-green-600 font-medium">
                Save Rs{" "}
                {(product.originalPrice - product.price).toLocaleString()} (
                {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}
                %)
              </p>
            )}
          </div>

          {/* Description */}
          {product.description && (
            <div className="mb-8">
              <h3 className="font-bold text-gray-800 mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button className="flex-1 bg-teal-600 text-white py-3 rounded-lg font-bold hover:bg-teal-700 transition-colors flex items-center justify-center gap-2">
              <ShoppingCart size={20} />
              Add to Cart
            </button>
            <button className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-bold hover:border-teal-600 hover:text-teal-600 transition-colors flex items-center justify-center gap-2">
              <Heart size={20} />
              Wishlist
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-teal-600 hover:text-teal-600 transition-colors flex items-center justify-center gap-2">
              <Share2 size={20} />
            </button>
          </div>

          {/* Product Info */}
          <div className="border-t border-gray-200 pt-8">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-gray-500 text-sm mb-1">Category</p>
                <p className="font-medium text-gray-800">{product.category}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm mb-1">Brand</p>
                <p className="font-medium text-gray-800">{product.brand}</p>
              </div>
            </div>
          </div>

          {/* Shipping Info */}
          <div className="border-t border-gray-200 mt-8 pt-8">
            <h3 className="font-bold text-gray-800 mb-4">Shipping Information</h3>
            <div className="space-y-3">
              <div className="flex gap-4">
                <div className="text-teal-600 text-2xl">📦</div>
                <div>
                  <p className="font-medium text-gray-800">Free Shipping</p>
                  <p className="text-gray-600 text-sm">On orders over Rs 2,000</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-teal-600 text-2xl">🔄</div>
                <div>
                  <p className="font-medium text-gray-800">30 Day Returns</p>
                  <p className="text-gray-600 text-sm">Easy returns & exchanges</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-teal-600 text-2xl">💳</div>
                <div>
                  <p className="font-medium text-gray-800">Easy Installments</p>
                  <p className="text-gray-600 text-sm">Split into easy payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16 border-t pt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">You Might Also Like</h2>
        {/* Can add related products component here */}
      </div>
    </div>
  );
}
