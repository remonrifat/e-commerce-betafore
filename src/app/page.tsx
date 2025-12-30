import { getAllProducts } from "@/app/actions/products";
import HeroSection from "@/components/HeroSection";
import CategoryCarousel from "@/components/CategoryCarousel";
import ProductGrid from "@/components/ProductGrid";

export default async function Home() {
  const productsData = await getAllProducts();
  const products = Array.isArray(productsData) ? productsData : [];

  // Split products into sections
  const newArrivals = products.slice(0, 6);
  const bestDeals = products.slice(6, 12);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection />

      {/* Category Carousel */}
      <CategoryCarousel />

      {/* New Arrivals Section */}
      <ProductGrid products={newArrivals} title="New Arrivals" />

      {/* Best Deals Section */}
      <ProductGrid products={bestDeals} title="Best Deals" />
    </div>
  );
}
