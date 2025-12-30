'use client';

import { getCategories } from '@/app/actions/products';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Category } from '@/app/actions/products';

const categoryImages: Record<string, string> = {
  electronics: 'https://d.hs-bd.com/wp-content/uploads/2025/12/site-structure-seo-6586acd905b1c-sej.jpeg',
  fashion: 'https://d.hs-bd.com/wp-content/uploads/2025/12/site-structure-seo-6586acd905b1c-sej.jpeg',
  appliances: 'https://d.hs-bd.com/wp-content/uploads/2025/12/site-structure-seo-6586acd905b1c-sej.jpeg',
  'babies-store': 'https://d.hs-bd.com/wp-content/uploads/2025/12/site-structure-seo-6586acd905b1c-sej.jpeg',
  jewelry: 'https://d.hs-bd.com/wp-content/uploads/2025/12/site-structure-seo-6586acd905b1c-sej.jpeg',
  groceries: 'https://d.hs-bd.com/wp-content/uploads/2025/12/site-structure-seo-6586acd905b1c-sej.jpeg',
};

export default function CategoryCarousel() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const data = await getCategories();
        setCategories(data || []);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('category-scroll');
    if (container) {
      const scrollAmount = 300;
      const newPosition =
        direction === 'left'
          ? Math.max(0, scrollPosition - scrollAmount)
          : scrollPosition + scrollAmount;
      container.scrollLeft = newPosition;
      setScrollPosition(newPosition);
    }
  };

  if (loading) {
    return <div className="py-8 text-center">Loading categories...</div>;
  }

  return (
    <section className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Left Scroll Button */}
          <button
            onClick={() => handleScroll('left')}
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-50 hidden md:block"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Categories Container */}
          <div
            id="category-scroll"
            className="flex gap-4 overflow-x-auto scroll-smooth pb-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            {categories && categories.length > 0 ? (
              categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/category/${category.slug || category.name.toLowerCase()}`}
                  className="flex-shrink-0"
                >
                  <div className="text-center">
                    {/* Category Image */}
                    <div className="w-48 h-40 bg-gray-100 rounded-lg overflow-hidden mb-3 hover:shadow-lg transition-shadow relative">
                      <Image
                        src={
                          categoryImages[category.slug || category.name.toLowerCase()] ||
                          'https://d.hs-bd.com/wp-content/uploads/2025/12/site-structure-seo-6586acd905b1c-sej.jpeg'
                        }
                        alt={category.name}
                        fill
                        className="object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                    {/* Category Name */}
                    <h3 className="text-gray-800 font-medium text-sm mb-1">{category.name}</h3>
                    <button className="text-teal-600 text-xs font-medium hover:text-teal-700">
                      Shop
                    </button>
                  </div>
                </Link>
              ))
            ) : (
              <div className="text-center w-full py-8">No categories available</div>
            )}
          </div>

          {/* Right Scroll Button */}
          <button
            onClick={() => handleScroll('right')}
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-50 hidden md:block"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
