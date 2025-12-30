'use server';

const API_BASE_URL = 'https://mm-assesment-server.vercel.app/api/v1';

export interface Product {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  brand: string;
  description?: string;
  rating?: number;
  reviews?: number;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
}

export async function getAllProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/products`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }

    const data = await response.json();
    // Handle both array response and object with products property
    const products = Array.isArray(data) ? data : data.products || data.data || [];
    return Array.isArray(products) ? products : [];
  } catch (error) {
    console.error('Error fetching all products:', error);
    throw new Error('Failed to fetch products');
  }
}

export async function getCategories(): Promise<Category[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/products/categories`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch categories: ${response.statusText}`);
    }

    const data = await response.json();
    // Handle both array response and object with categories property
    const categories = Array.isArray(data) ? data : data.categories || data.data || [];
    return Array.isArray(categories) ? categories : [];
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw new Error('Failed to fetch categories');
  }
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/products/category/${category}`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch products for category: ${response.statusText}`);
    }

    const data = await response.json();
    // Handle both array response and object with products property
    const products = Array.isArray(data) ? data : data.products || data.data || [];
    return Array.isArray(products) ? products : [];
  } catch (error) {
    console.error('Error fetching products by category:', error);
    throw new Error(`Failed to fetch products for category: ${category}`);
  }
}

export async function getProductById(id: number): Promise<Product> {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch product: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw new Error(`Failed to fetch product with ID: ${id}`);
  }
}
