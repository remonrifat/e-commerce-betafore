import { getProductsByCategory, getCategories } from "@/app/actions/products";
import ProductGrid from "@/components/ProductGrid";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((category) => ({
    slug: category.slug || category.name.toLowerCase(),
  }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const products = await getProductsByCategory(slug);

  // Format category name for display
  const categoryName = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back Link */}
        <Link href="/" className="flex items-center gap-2 text-teal-600 hover:text-teal-700 mb-8">
          <ChevronLeft size={20} />
          Back to Home
        </Link>

        {/* Category Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">{categoryName}</h1>
          <p className="text-gray-600">{products.length} products available</p>
        </div>
      </div>

      {/* Products Grid */}
      <ProductGrid products={products} title={categoryName} />
    </div>
  );
}
